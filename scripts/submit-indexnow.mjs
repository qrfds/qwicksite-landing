const siteUrl = (process.env.SITE_URL || "").replace(/\/+$/, "");
const key = process.env.INDEXNOW_KEY?.trim() || "";
const keyPattern = /^[A-Za-z0-9-]{8,128}$/;

if (!/^https:\/\//.test(siteUrl)) {
  console.error("SITE_URL must be the canonical HTTPS origin.");
  process.exit(1);
}

if (!keyPattern.test(key)) {
  console.error("INDEXNOW_KEY must be 8-128 letters, numbers, or hyphens.");
  process.exit(1);
}

const requestedUrls = process.argv.slice(2).map((value) => new URL(value, siteUrl).toString());
let urlList = requestedUrls;

if (!urlList.length) {
  const sitemapResponse = await fetch(`${siteUrl}/sitemap.xml`);
  if (!sitemapResponse.ok) {
    console.error(`Unable to read sitemap.xml (${sitemapResponse.status}).`);
    process.exit(1);
  }

  const sitemap = await sitemapResponse.text();
  urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) =>
    match[1].replaceAll("&amp;", "&"),
  );
}

const canonicalOrigin = new URL(siteUrl).origin;
urlList = [...new Set(urlList)];
if (
  !urlList.length ||
  urlList.length > 10_000 ||
  urlList.some((url) => {
    const parsed = new URL(url);
    return parsed.origin !== canonicalOrigin || Boolean(parsed.search) || Boolean(parsed.hash);
  })
) {
  console.error(
    "IndexNow URLs must contain 1-10,000 query-free, fragment-free URLs on the canonical origin.",
  );
  process.exit(1);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(siteUrl).host,
    key,
    keyLocation: `${siteUrl}/indexnow-key.txt`,
    urlList,
  }),
});

if (!response.ok) {
  console.error(`IndexNow submission failed (${response.status}).`);
  process.exit(1);
}

console.log(`IndexNow accepted ${urlList.length} canonical URL(s).`);
