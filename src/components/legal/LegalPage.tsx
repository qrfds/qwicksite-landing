import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getLocale } from "next-intl/server";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createWebPageSchema } from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: string[];
  concludingParagraphs?: string[];
};

type LegalPageProps = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
  badgeLabel?: string;
  lastUpdatedLabel?: string;
  slug: string;
};

export default async function LegalPage({
  title,
  subtitle,
  lastUpdated,
  sections,
  badgeLabel = "Legal",
  lastUpdatedLabel = "Last updated",
  slug,
}: LegalPageProps) {
  const locale = (await getLocale()) as AppLocale;
  const path = `/${slug}`;
  const breadcrumbs = [
    { name: locale === "ar" ? "الرئيسية" : "Home", path: "/" },
    { name: title, path },
  ];

  return (
    <div className="min-h-screen">
      <JsonLd
        id={`qwicksite-${slug}-schema`}
        data={[
          createWebPageSchema({ locale, path, title, description: subtitle }),
          createBreadcrumbSchema(locale, path, breadcrumbs),
        ]}
      />
      <Header />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pt-8 pb-16">
        <section className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-5 mb-10">
              <Badge variant="outline" className="px-3 py-1 text-sm bg-card/40 border-primary/30">
                {badgeLabel}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
              <p className="text-lg text-muted-foreground">{subtitle}</p>
              <p className="text-sm text-muted-foreground">
                {lastUpdatedLabel}: {lastUpdated}
              </p>
            </div>

            <Card className="border-border/60 bg-card/60 backdrop-blur-sm">
              <CardContent className="space-y-8 py-8">
                {sections.map((section) => (
                  <section key={section.title} className="space-y-4">
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets ? (
                      <ul className="list-disc ps-5 space-y-2 text-muted-foreground">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                    {section.steps ? (
                      <ol className="list-decimal ps-5 space-y-2 text-muted-foreground">
                        {section.steps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    ) : null}
                    {section.concludingParagraphs?.map((paragraph) => (
                      <p key={paragraph} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
