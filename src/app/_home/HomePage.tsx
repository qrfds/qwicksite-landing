import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/hero-section-1";
import { ShuffleHero } from "@/components/ui/shuffle-grid";
import TrustSection from "@/components/sections/TrustSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FAQSection from "@/components/sections/FAQSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { SITE_DATE_MODIFIED, SITE_DATE_PUBLISHED } from "@/lib/seo";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("home.seoOverview");
  const paragraphs = t.raw("paragraphs") as string[];
  const facts = t.raw("facts") as string[];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ShuffleHero />
        <BenefitsSection />
        <section className="py-20" aria-labelledby="qwicksite-overview-title">
          <div className="container max-w-5xl">
            <article
              className="h-entry rounded-3xl border border-border/60 bg-card/50 p-7 md:p-12"
              itemScope
              itemType="https://schema.org/Article"
            >
              <meta itemProp="author" content={t("authorName")} />
              <meta itemProp="datePublished" content={SITE_DATE_PUBLISHED} />
              <meta itemProp="dateModified" content={SITE_DATE_MODIFIED} />
              <p className="p-category text-sm font-medium text-primary">{t("eyebrow")}</p>
              <h2 id="qwicksite-overview-title" className="p-name mt-3 text-3xl font-bold md:text-5xl" itemProp="headline">
                {t("title")}
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                <Link href="/about" rel="author" className="p-author h-card u-url font-medium text-foreground">
                  <span className="p-name">{t("byline")}</span>
                </Link>
                <span aria-hidden="true"> · </span>
                <time className="dt-published" dateTime={SITE_DATE_PUBLISHED} itemProp="datePublished">
                  {t("publishedLabel")}
                </time>
                <span aria-hidden="true"> · </span>
                <time className="dt-updated" dateTime={SITE_DATE_MODIFIED} itemProp="dateModified">
                  {t("updatedLabel")}
                </time>
              </p>
              <div className="e-content mt-7 grid gap-5 md:grid-cols-2" itemProp="articleBody">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
              <ul className="mt-6 list-disc space-y-3 ps-5">
                {facts.map((fact) => (
                  <li key={fact} className="leading-relaxed text-muted-foreground">
                    {fact}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/ai-website-builder-egypt">{t("websiteBuilderLink")}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/ecommerce-platform-egypt">{t("ecommerceLink")}</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/about">{t("aboutLink")}</Link>
                </Button>
              </div>
            </article>
          </div>
        </section>
        <CaseStudySection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
