import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import {
  getMarketingPage,
  getMarketingPageContent,
  marketingPages,
} from "@/lib/marketing-pages";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createFounderSchema,
  createOrganizationSchema,
  createPageMetadata,
  createWebPageSchema,
  localizedPath,
  absoluteUrl,
} from "@/lib/seo";

const reservedSlugs = new Set([
  "blog",
  "features",
  "pricing",
  "support",
  "privacy",
  "terms",
  "delivery",
  "refund",
  "cookie-policy",
  "licenses",
  "checkout",
  "hero-section-1",
]);

function resolveLocale(locale: string): AppLocale {
  return locale === "ar" ? "ar" : "en";
}

function pageTitle(title: string) {
  return title.includes("QwickSite") ? title : `${title} | QwickSite`;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    marketingPages
      .filter((page) => !reservedSlugs.has(page.slug))
      .map((page) => ({ locale, slug: page.slug })),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale) || reservedSlugs.has(slug)) {
    return {};
  }

  const localeKey = resolveLocale(locale);
  const content = getMarketingPageContent(slug, localeKey);

  if (!content) {
    return {};
  }

  return createPageMetadata({
    locale: localeKey,
    path: `/${slug}`,
    title: pageTitle(content.title),
    description: content.description,
  });
}

export default async function LocalizedStaticContentPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale) || reservedSlugs.has(slug)) {
    notFound();
  }

  const localeKey = resolveLocale(locale);
  setRequestLocale(localeKey);

  const page = getMarketingPage(slug);
  const content = page?.content[localeKey];

  if (!page || !content) {
    notFound();
  }

  const homeName = localeKey === "ar" ? "الرئيسية" : "Home";
  const breadcrumbs = [
    { name: homeName, path: "/" },
    { name: content.title, path: `/${slug}` },
  ];
  const path = `/${slug}`;
  const breadcrumbSchema = createBreadcrumbSchema(localeKey, path, breadcrumbs);
  const pageSchema = createWebPageSchema({
    locale: localeKey,
    path,
    title: content.title,
    description: content.description,
    breadcrumbId: `${absoluteUrl(localizedPath(localeKey, path))}#breadcrumb`,
    type: slug === "about" ? "AboutPage" : slug === "contact" ? "ContactPage" : "WebPage",
  });
  const faqSchema = content.faqs?.length ? createFaqSchema(content.faqs) : null;
  const entitySchemas =
    slug === "about"
      ? [createOrganizationSchema(), createFounderSchema()]
      : [];

  const relatedPages = page.relatedSlugs
    .map((relatedSlug) => {
      const relatedPage = getMarketingPage(relatedSlug);
      if (relatedPage) {
        return {
          slug: relatedSlug,
          title: relatedPage.content[localeKey].title,
        };
      }

      const fallbackTitles: Record<string, Record<AppLocale, string>> = {
        features: { en: "QwickSite Features", ar: "مزايا QwickSite" },
        pricing: { en: "QwickSite Pricing", ar: "أسعار QwickSite" },
      };

      return fallbackTitles[relatedSlug]
        ? { slug: relatedSlug, title: fallbackTitles[relatedSlug][localeKey] }
        : null;
    })
    .filter((related): related is { slug: string; title: string } => Boolean(related));

  return (
    <div className="min-h-screen">
      <JsonLd
        id={`qwicksite-${slug}-schema`}
        data={[pageSchema, breadcrumbSchema, faqSchema, ...entitySchemas]}
      />
      <Header />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pb-16 pt-8">
        <section className="container">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <Badge
              variant="outline"
              className="mb-5 border-primary/30 bg-card/40 px-3 py-1 text-sm"
            >
              {content.eyebrow}
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {content.description}
            </p>
          </div>

          <article className="mx-auto max-w-4xl space-y-8">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="py-7 text-lg leading-relaxed text-foreground">
                {content.introduction}
              </CardContent>
            </Card>

            {content.sections.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8"
              >
                <h2 className="text-2xl font-semibold md:text-3xl">{section.title}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-5 list-disc space-y-2 ps-5 text-muted-foreground">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            {content.faqs?.length ? (
              <section className="rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
                <h2 className="text-2xl font-semibold md:text-3xl">
                  {localeKey === "ar" ? "الأسئلة الشائعة" : "Frequently asked questions"}
                </h2>
                <div className="mt-5 space-y-4">
                  {content.faqs.map((faq) => (
                    <details key={faq.question} className="rounded-xl border border-border/60 p-4">
                      <summary className="cursor-pointer font-medium">{faq.question}</summary>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}
          </article>

          <section className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
            <h2 className="text-2xl font-semibold">
              {localeKey === "ar" ? "استكشف المزيد من QwickSite" : "Explore more from QwickSite"}
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPages.map((related) => (
                <Link
                  key={related.slug}
                  href={`/${related.slug}`}
                  className="rounded-xl border border-border/60 px-4 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {related.title}
                </Link>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/pricing">
                  {localeKey === "ar" ? "اعرض خطط QwickSite" : "View QwickSite pricing"}
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  {localeKey === "ar" ? "تواصل مع QwickSite" : "Contact QwickSite"}
                </Link>
              </Button>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
