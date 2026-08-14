import { SITE_URL } from "@/lib/seo";

export function GET() {
  const robots = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "Content-Signal: ai-train=no, search=yes, ai-input=no",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    `Host: ${SITE_URL}`,
    "",
  ].join("\n");

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
