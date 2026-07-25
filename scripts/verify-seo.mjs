const siteUrl = (process.env.SITE_URL || "").replace(/\/+$/, "");

if (!/^https:\/\//.test(siteUrl)) {
  console.error("SITE_URL must be the canonical HTTPS origin, for example https://qwicksite.ai");
  process.exit(1);
}

const failures = [];
const requiredPaths = [
  "/en",
  "/en/pricing",
  "/en/features",
  "/en/about",
  "/en/contact",
  "/en/blog",
  "/en/qwicksite-not-amazon-quicksight",
  "/ar",
  "/ar/pricing",
  "/ar/features",
  "/ar/about",
  "/ar/contact",
  "/ar/blog",
  "/ar/qwicksite-not-amazon-quicksight",
];

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
  const jsonLdBlocks = [
    ...html.matchAll(
      /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];
  if (!jsonLdBlocks.length) {
    failures.push(`${url} has no JSON-LD structured data`);
  } else {
    for (const block of jsonLdBlocks) {
      try {
        JSON.parse(block[1]);
      } catch {
        failures.push(`${url} contains invalid JSON-LD`);
      }
    }
  }
  if (!/<meta[^>]+name=["']viewport["']/i.test(html)) {
    failures.push(`${url} has no mobile viewport metadata`);
  }
  if (!/<meta[^>]+name=["']description["']/i.test(html)) {
    failures.push(`${url} has no meta description`);
  }
  if (!/<h1(?:\s|>)/i.test(html)) {
    failures.push(`${url} has no H1`);
  }
  const expectedLocale = parsed.pathname.split("/")[1];
  if (!new RegExp(`<html[^>]+lang=["']${expectedLocale}["']`, "i").test(html)) {
    failures.push(`${url} has an incorrect html lang attribute`);
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

const compressionResponse = await fetch(`${siteUrl}/en`, {
  headers: { "accept-encoding": "br" },
});
if (compressionResponse.headers.get("content-encoding") !== "br") {
  failures.push(
    `Brotli check returned Content-Encoding: ${
      compressionResponse.headers.get("content-encoding") || "(missing)"
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
