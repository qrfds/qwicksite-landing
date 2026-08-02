# qwicksite-landing
fix
lens
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Production SEO configuration

Set these values in the deployment platform. Do not commit credentials or private keys:

```text
SITE_URL=https://the-approved-canonical-host
GOOGLE_SITE_VERIFICATION=google-verification-token
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=clarity-project-id
QWICKSITE_FOUNDING_DATE=YYYY-MM-DD
QWICKSITE_FOUNDER_NAME=approved-public-name
QWICKSITE_FOUNDER_URL=https://approved-public-profile
QWICKSITE_SOCIAL_URLS=https://official-profile-one,https://official-profile-two
```

`SITE_URL` must be the canonical HTTPS origin without a path or trailing slash. The founder,
founding-date, and social values are required for complete Organization and Person schema. GA4,
Clarity, and Google verification remain disabled until their public identifiers are configured.

After every production deployment:

1. Run `SITE_URL=https://canonical-host npm run seo:verify`.
2. Confirm the alternate hostname redirects in one 301 hop to the canonical hostname.
3. Validate the Homepage, Pricing, Features, Blog, one content page, and every new article with
   Schema Markup Validator and mobile PageSpeed Insights.
4. In Google Search Console, confirm the Domain property, submit `/sitemap.xml`, and inspect/request
   indexing for both locales of Homepage, Pricing, Features, About, Contact, Blog, and every new
   article.
5. Recheck indexing after 24 and 72 hours. Review crawl errors, 404s, sitemap coverage, indexing
   issues, branded impressions, and Core Web Vitals weekly.
6. Confirm field performance at the 75th percentile for mobile and desktop: LCP below 2.5 seconds,
   CLS below 0.1, and INP below 200 milliseconds.
7. Track QwickSite, QwickSite Egypt, QwickSite AI, AI Website Builder Egypt, Ecommerce Platform
   Egypt, and Arabic Website Builder for the approved target locations.

The SoftwareApplication offers must match the visible pricing plans. Do not relabel the current
Launch, Growth, and Expansion plans as Free, Starter, and Growth in structured data unless the
visible pricing product is renamed at the same time. Review/AggregateRating must remain absent until
genuine visible reviews with documented ratings and provenance are approved. SearchAction must
remain absent until the site provides a real search-results URL.

## Learn More

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
