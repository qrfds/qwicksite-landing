const siteUrl = (process.env.SITE_URL || "").replace(/\/+$/, "");

if (!/^https:\/\//.test(siteUrl)) {
  console.error("SITE_URL must be the canonical HTTPS origin, for example https://qwicksite.com");
  process.exit(1);
}

const failures = [];
const locales = ["en", "ar"];
const requiredPagePaths = [
  "",
  "/pricing",
  "/features",
  "/about",
  "/contact",
  "/blog",
  "/what-is-qwicksite",
  "/history-of-qwicksite",
  "/why-qwicksite-was-built",
  "/ai-website-builder-egypt",
  "/ai-website-builder-saudi-arabia",
  "/ai-website-builder-uae",
  "/ecommerce-platform-egypt",
  "/ecommerce-platform-mena",
  "/arabic-website-builder",
  "/qwicksite-vs-shopify",
  "/qwicksite-vs-wix",
  "/qwicksite-vs-wordpress",
  "/qwicksite-vs-zid",
  "/qwicksite-vs-salla",
  "/ai-store-builder",
  "/online-store-builder-egypt",
  "/qwicksite-not-amazon-quicksight",
];
const requiredPaths = locales.flatMap((locale) =>
  requiredPagePaths.map((path) => `/${locale}${path}`),
);

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

function canonicalFromHtml(html) {
  return (
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] ||
    html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1]
  );
}

function schemaNodesFromHtml(html, url) {
  const nodes = [];
  const blocks = [
    ...html.matchAll(
      /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];

  if (!blocks.length) {
    failures.push(`${url} has no JSON-LD structured data`);
    return nodes;
  }

  for (const block of blocks) {
    try {
      const payload = JSON.parse(block[1]);
      if (Array.isArray(payload?.["@graph"])) {
        nodes.push(...payload["@graph"]);
      } else {
        nodes.push(payload);
      }
    } catch {
      failures.push(`${url} contains invalid JSON-LD`);
    }
  }

  return nodes;
}

function hasSchemaType(nodes, expectedTypes) {
  return nodes.some((node) => {
    const types = Array.isArray(node?.["@type"]) ? node["@type"] : [node?.["@type"]];
    return expectedTypes.some((type) => types.includes(type));
  });
}

const [robotsResponse, sitemapResponse] = await Promise.all([
  fetch(`${siteUrl}/robots.txt`, { redirect: "manual" }),
  fetch(`${siteUrl}/sitemap.xml`, { redirect: "manual" }),
]);

if (robotsResponse.status !== 200) {
  failures.push(`/robots.txt returned ${robotsResponse.status}`);
}
if (sitemapResponse.status !== 200) {
  failures.push(`/sitemap.xml returned ${sitemapResponse.status}`);
}

const robotsBody = await robotsResponse.text();
const sitemapBody = await sitemapResponse.text();
if (!robotsBody.includes(`${siteUrl}/sitemap.xml`)) {
  failures.push("robots.txt does not reference the canonical sitemap URL");
}

const urls = [...sitemapBody.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) =>
  decodeXml(match[1]),
);
if (!urls.length) {
  failures.push("sitemap.xml contains no URLs");
}
if (new Set(urls).size !== urls.length) {
  failures.push("sitemap.xml contains duplicate URLs");
}

for (const path of requiredPaths) {
  if (!urls.includes(`${siteUrl}${path}`)) {
    failures.push(`sitemap.xml is missing ${path}`);
  }
}

for (const url of urls) {
  const parsed = new URL(url);
  if (parsed.origin !== siteUrl || parsed.protocol !== "https:") {
    failures.push(`${url} is not on the canonical HTTPS origin`);
  }
  if (parsed.search || parsed.hash) {
    failures.push(`${url} contains query parameters or a fragment`);
  }

  const response = await fetch(url, { redirect: "manual" });
  const xRobotsTag = response.headers.get("x-robots-tag") || "";
  if (response.status !== 200) {
    failures.push(`${url} returned ${response.status}, expected 200`);
    continue;
  }
  if (/noindex/i.test(xRobotsTag)) {
    failures.push(`${url} has X-Robots-Tag: ${xRobotsTag}`);
  }

  const html = await response.text();
  const canonicalMatches = [
    ...html.matchAll(/<link[^>]+rel=["']canonical["'][^>]*>/gi),
  ];
  const canonical = canonicalFromHtml(html);
  if (canonicalMatches.length !== 1) {
    failures.push(`${url} contains ${canonicalMatches.length} canonical tags`);
  }
  if (canonical !== url) {
    failures.push(`${url} declares canonical ${canonical || "(missing)"}`);
  }
  if (/<meta[^>]+(?:name|property)=["']robots["'][^>]+noindex/i.test(html)) {
    failures.push(`${url} contains a noindex meta tag`);
  }
  if (!/<meta[^>]+name=["']viewport["']/i.test(html)) {
    failures.push(`${url} has no mobile viewport metadata`);
  }
  if (!/<meta[^>]+name=["']description["']/i.test(html)) {
    failures.push(`${url} has no meta description`);
  }
  if (!/<title>[^<]+<\/title>/i.test(html)) {
    failures.push(`${url} has no document title`);
  }
  if (!/<h1(?:\s|>)/i.test(html)) {
    failures.push(`${url} has no H1`);
  }
  const expectedLocale = parsed.pathname.split("/")[1];
  if (!new RegExp(`<html[^>]+lang=["']${expectedLocale}["']`, "i").test(html)) {
    failures.push(`${url} has an incorrect html lang attribute`);
  }

  const schemaNodes = schemaNodesFromHtml(html, url);
  if (
    !hasSchemaType(schemaNodes, [
      "WebPage",
      "AboutPage",
      "ContactPage",
      "CollectionPage",
    ])
  ) {
    failures.push(`${url} has no page-level WebPage schema`);
  }
  if (parsed.pathname !== `/${expectedLocale}` && !hasSchemaType(schemaNodes, ["BreadcrumbList"])) {
    failures.push(`${url} has no BreadcrumbList schema`);
  }
  if (/\/blog\/[^/]+$/.test(parsed.pathname) && !hasSchemaType(schemaNodes, ["BlogPosting"])) {
    failures.push(`${url} has no BlogPosting schema`);
  }

  if (parsed.pathname === "/en" || parsed.pathname === "/ar") {
    const organization = schemaNodes.find((node) => node?.["@type"] === "Organization");
    const founder = schemaNodes.find((node) => node?.["@type"] === "Person");
    const website = schemaNodes.find((node) => node?.["@type"] === "WebSite");
    const software = schemaNodes.find((node) => node?.["@type"] === "SoftwareApplication");

    if (!organization) {
      failures.push(`${url} has no Organization schema`);
    } else {
      for (const field of [
        "name",
        "logo",
        "url",
        "foundingDate",
        "founder",
        "contactPoint",
        "email",
        "areaServed",
        "sameAs",
      ]) {
        if (!organization[field]) {
          failures.push(`${url} Organization schema is missing ${field}`);
        }
      }
    }
    if (!founder) {
      failures.push(`${url} has no founder Person schema`);
    } else if (
      founder.worksFor?.["@id"] !== organization?.["@id"] ||
      organization?.founder?.["@id"] !== founder?.["@id"]
    ) {
      failures.push(`${url} does not link Founder and Organization in both directions`);
    }
    if (!website) {
      failures.push(`${url} has no WebSite schema`);
    }
    if (!software) {
      failures.push(`${url} has no SoftwareApplication schema`);
    } else {
      if (
        software.name !== "QwickSite" ||
        software.applicationCategory !== "BusinessApplication" ||
        software.operatingSystem !== "Web" ||
        !software.description ||
        !software.url
      ) {
        failures.push(`${url} SoftwareApplication schema has incomplete core fields`);
      }
      if (!Array.isArray(software.offers) || software.offers.length !== 3) {
        failures.push(`${url} SoftwareApplication schema does not contain three offers`);
      }
    }

    if (!/<meta[^>]+name=["']google-site-verification["']/i.test(html)) {
      failures.push(`${url} has no Google Search Console verification metadata`);
    }
    if (!/<script[^>]+id=["']qwicksite-ga4["']/i.test(html)) {
      failures.push(`${url} has no GA4 integration`);
    }
    if (!/<script[^>]+id=["']qwicksite-clarity["']/i.test(html)) {
      failures.push(`${url} has no Microsoft Clarity integration`);
    }
  }
}

const queryResponse = await fetch(`${siteUrl}/en?utm_source=seo-check`, {
  redirect: "manual",
});
const queryHtml = await queryResponse.text();
if (queryResponse.status !== 200 || canonicalFromHtml(queryHtml) !== `${siteUrl}/en`) {
  failures.push("UTM query variant does not return 200 with a query-free homepage canonical");
}

const checkoutResponse = await fetch(
  `${siteUrl}/en/checkout/launch?billing=yearly&region=egypt`,
  { redirect: "manual" },
);
const checkoutHtml = await checkoutResponse.text();
if (
  checkoutResponse.status !== 200 ||
  canonicalFromHtml(checkoutHtml) !== `${siteUrl}/en/checkout/launch` ||
  !/<meta[^>]+(?:name|property)=["']robots["'][^>]+noindex/i.test(checkoutHtml)
) {
  failures.push("checkout is not a 200 noindex page with a query-free canonical");
}

const missingResponse = await fetch(`${siteUrl}/en/seo-verification-missing-page`, {
  redirect: "manual",
});
if (missingResponse.status !== 404) {
  failures.push(`unknown-route check returned ${missingResponse.status}, expected 404`);
}

for (const [source, expected] of [
  ["/", "/en"],
  ["/hero-section-1", "/en"],
  ["/en/hero-section-1", "/en"],
  ["/en/blog/page/1", "/en/blog"],
]) {
  const response = await fetch(`${siteUrl}${source}`, { redirect: "manual" });
  if (response.status !== 301 || response.headers.get("location") !== `${siteUrl}${expected}`) {
    failures.push(
      `${source} redirects with ${response.status} to ${response.headers.get("location")}`,
    );
  }
}

const httpUrl = new URL(siteUrl);
httpUrl.protocol = "http:";
const httpResponse = await fetch(`${httpUrl.origin}/en`, { redirect: "manual" });
if (httpResponse.status !== 301) {
  failures.push(`HTTP canonical-host check returned ${httpResponse.status}, expected 301`);
} else if (httpResponse.headers.get("location") !== `${siteUrl}/en`) {
  failures.push(`HTTP redirect points to ${httpResponse.headers.get("location")}`);
}

const alternateHostUrl = new URL(siteUrl);
alternateHostUrl.hostname = alternateHostUrl.hostname.startsWith("www.")
  ? alternateHostUrl.hostname.slice(4)
  : `www.${alternateHostUrl.hostname}`;
try {
  const alternateHostResponse = await fetch(`${alternateHostUrl.origin}/en`, {
    redirect: "manual",
  });
  if (
    alternateHostResponse.status !== 301 ||
    alternateHostResponse.headers.get("location") !== `${siteUrl}/en`
  ) {
    failures.push(
      `Alternate host redirects with ${alternateHostResponse.status} to ${
        alternateHostResponse.headers.get("location") || "(missing)"
      }`,
    );
  }
} catch {
  failures.push(`Alternate host ${alternateHostUrl.hostname} could not be reached`);
}

const [brotliResponse, gzipResponse] = await Promise.all([
  fetch(`${siteUrl}/en`, {
    headers: { "accept-encoding": "br" },
  }),
  fetch(`${siteUrl}/en`, {
    headers: { "accept-encoding": "gzip" },
  }),
]);
if (brotliResponse.headers.get("content-encoding") !== "br") {
  failures.push(
    `Brotli check returned Content-Encoding: ${
      brotliResponse.headers.get("content-encoding") || "(missing)"
    }`,
  );
}
if (gzipResponse.headers.get("content-encoding") !== "gzip") {
  failures.push(
    `Gzip check returned Content-Encoding: ${
      gzipResponse.headers.get("content-encoding") || "(missing)"
    }`,
  );
}

const imageResponse = await fetch(
  `${siteUrl}/images/qwicksite-ai-website-builder-dashboard.webp`,
);
if (!/max-age=86400/.test(imageResponse.headers.get("cache-control") || "")) {
  failures.push("optimized image response is missing the expected browser cache policy");
}

if (failures.length) {
  console.error(`SEO verification failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`SEO verification passed for ${urls.length} canonical sitemap URLs.`);
