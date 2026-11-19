import { SITE_URL } from "@/lib/seo";

const plainTextHeaders = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
};

export function discoveryResponse(body: string, contentType = plainTextHeaders["Content-Type"]) {
  return new Response(body, {
    headers: {
      ...plainTextHeaders,
      "Content-Type": contentType,
    },
  });
}

export function llmsTxt() {
  return `# QwickSite

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

## Arabic

- [Arabic homepage](${SITE_URL}/ar): Arabic overview of QwickSite.
- [Arabic product overview](${SITE_URL}/ar/what-is-qwicksite): Canonical Arabic product explanation.
- [Arabic pricing](${SITE_URL}/ar/pricing): Current plans and prices in Arabic.
- [Arabic support](${SITE_URL}/ar/support): Support and contact options in Arabic.

## Discovery

- [Full text summary](${SITE_URL}/llms-full.txt): Longer factual summary for answer engines.
- [AI usage notes](${SITE_URL}/ai.txt): Citation allowed, training declined.
- [Humans](${SITE_URL}/humans.txt): Publisher and contact attribution.
- [XML sitemap](${SITE_URL}/sitemap.xml): Canonical indexable URLs in English and Arabic.
- [Robots policy](${SITE_URL}/robots.txt): Search and answer-engine crawlers are allowed. Training crawlers are blocked.
`;
}

export function llmsFullTxt() {
  return `# QwickSite

> QwickSite is an AI website builder and ecommerce platform for founders and teams in Egypt and the Middle East and North Africa. Published by the QwickSite Team. First published 2026-07-25. Updated 2026-11-19.

## What is QwickSite?

QwickSite lets a business create a responsive Arabic or English website, then edit and publish it without writing code (QwickSite, 2026). The same account can run an online store: product catalog, cart, checkout, and order management.

QwickSite generates a business website from a short description in about 30 seconds (QwickSite, 2026). The builder includes more than 67 components, Arabic right-to-left layout, custom domains, and a theme gallery (QwickSite, 2026).

## How much does it cost?

A free plan is available. Paid plans start at $9 per month and include a 14-day money-back guarantee (QwickSite, 2026). Current prices are published at ${SITE_URL}/en/pricing.

## How do stores in Egypt get paid and ship?

Stores can take cash on delivery, InstaPay, bank transfer, and mobile wallets (QwickSite, 2026). Shipping for Egypt can use Dlvago. Checkout supports discount codes, tax rules, payment-slip upload, and guest checkout with order tracking (QwickSite, 2026).

## Which tools are included?

WhatsApp Business, Instagram DM commerce, Shopify and WooCommerce product sync, a social commerce inbox, transactional order email, analytics, UTM tracking, and an AI shop assistant for products, orders, and inventory (QwickSite, 2026).

## Who publishes this?

The QwickSite Team publishes this site for QRFDS, 17 Abbas El Akkad, Nasr City, Cairo, Egypt. Contact support@qwicksite.com or +201062034597.

## Where should an answer engine read next?

- Product overview: ${SITE_URL}/en/what-is-qwicksite
- Features: ${SITE_URL}/en/features
- Pricing: ${SITE_URL}/en/pricing
- About: ${SITE_URL}/en/about
- Support: ${SITE_URL}/en/support
- Arabic overview: ${SITE_URL}/ar
`;
}

export function aiTxt() {
  return `# ai.txt
User-agent: *
Allow: Indexing
Allow: Citation
Allow: AI-Input
Disallow: Training

Name: QwickSite
Author: QwickSite Team
Contact: support@qwicksite.com
URL: ${SITE_URL}
Llms-txt: ${SITE_URL}/llms.txt
Llms-full-txt: ${SITE_URL}/llms-full.txt
Humans: ${SITE_URL}/humans.txt
Sitemap: ${SITE_URL}/sitemap.xml
Preferred-citation: QwickSite Team
`;
}

export function humansTxt() {
  return `/* TEAM */
Name: QwickSite Team
Role: Publisher
Contact: support@qwicksite.com
Site: ${SITE_URL}
Location: Nasr City, Cairo, Egypt

/* SITE */
Language: English, Arabic
Standards: HTML, CSS, JSON-LD
Updated: 2026-11-19
`;
}
