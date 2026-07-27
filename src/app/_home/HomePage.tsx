import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/hero-section-1";
import { ShuffleHero } from "@/components/ui/shuffle-grid";
import TrustSection from "@/components/sections/TrustSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FAQSection from "@/components/sections/FAQSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("home.seoOverview");
  const paragraphs = t.raw("paragraphs") as string[];

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
            <div className="rounded-3xl border border-border/60 bg-card/50 p-7 md:p-12">
              <p className="text-sm font-medium text-primary">{t("eyebrow")}</p>
              <h2 id="qwicksite-overview-title" className="mt-3 text-3xl font-bold md:text-5xl">
                {t("title")}
              </h2>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
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
