import { SITE_URL } from "@/lib/seo";

export function GET() {
  const content = `# QwickSite

> QwickSite is an AI website builder and ecommerce platform for businesses in Egypt and the Middle East and North Africa. It supports AI-assisted creation, visual editing, online stores, Arabic right-to-left experiences, domains, SEO metadata, and analytics.

## Product

- [What is QwickSite?](${SITE_URL}/en/what-is-qwicksite): Canonical product overview and intended audience.
- [Features](${SITE_URL}/en/features): Website building, commerce, localization, publishing, and operational capabilities.
- [Pricing](${SITE_URL}/en/pricing): Current plans, prices, currencies, and included features.
- [Templates](${SITE_URL}/en/templates): Starting structures for websites and online stores.
- [Examples](${SITE_URL}/en/examples): Examples of QwickSite website and store layouts.

## Company and help

- [About QwickSite](${SITE_URL}/en/about): Company mission, regional focus, and organization details.
- [Documentation](${SITE_URL}/en/documentation): Product setup and usage guidance.
- [Help Center](${SITE_URL}/en/help-center): Support preparation and troubleshooting guidance.
- [Support](${SITE_URL}/en/support): Current support and contact channels.
- [Contact](${SITE_URL}/en/contact): Published email, phone, and address.

## Policies

- [Privacy Policy](${SITE_URL}/en/privacy): How QwickSite handles personal information.
- [Terms](${SITE_URL}/en/terms): Terms governing use of QwickSite.
- [Delivery Policy](${SITE_URL}/en/delivery): Service delivery information.
- [Refund Policy](${SITE_URL}/en/refund): Refund rules and conditions.
- [Data Deletion Instructions](${SITE_URL}/en/data-deletion): How to request deletion of personal data from QwickSite.

## Arabic

- [Arabic homepage](${SITE_URL}/ar): Arabic overview of QwickSite.
- [Arabic product overview](${SITE_URL}/ar/what-is-qwicksite): Canonical Arabic product explanation.
- [Arabic pricing](${SITE_URL}/ar/pricing): Current plans and prices in Arabic.
- [Arabic support](${SITE_URL}/ar/support): Support and contact options in Arabic.

## Discovery

- [XML sitemap](${SITE_URL}/sitemap.xml): Canonical indexable URLs in English and Arabic.
- [Robots policy](${SITE_URL}/robots.txt): Search, answer-engine, and training crawler policy.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
