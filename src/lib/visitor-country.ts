/**
 * Which country a visitor is in, read from the request headers. Pure (no imports) so it can be tested on its own.
 *
 * Why the order matters: when Cloudflare proxies the site, Vercel only sees Cloudflare's address, so `x-vercel-ip-country` is the country of the
 * Cloudflare edge that handled the request, NOT the visitor's. `cf-ipcountry` is the visitor's real country, so it goes first, and Vercel's header is
 * ignored for any request that came through Cloudflare (it carries `cf-ray`). Without Cloudflare in front, Vercel's header is the right one.
 */
export type HeaderGetter = (name: string) => string | null | undefined;

const FALLBACK_HEADERS = ["x-country", "x-country-code", "x-geo-country", "x-client-country"];

/** Two-letter uppercase code, or "" when no header carried one. Cloudflare's "unknown" markers (XX, T1) and App Engine's (ZZ) are returned as they are:
 *  they are not Egypt, so callers treat them as "somewhere else". */
export function readVisitorCountry(get: HeaderGetter): string {
  const viaCloudflare = Boolean(get("cf-ray") || get("cf-connecting-ip"));
  const names = ["cf-ipcountry", ...(viaCloudflare ? [] : ["x-vercel-ip-country"]), ...FALLBACK_HEADERS];
  for (const name of names) {
    const value = (get(name) ?? "").trim();
    if (value) return value.toUpperCase();
  }
  return "";
}
