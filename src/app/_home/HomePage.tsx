import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/hero-section-1";
import { ShuffleHero } from "@/components/ui/shuffle-grid";
import TrustSection from "@/components/sections/TrustSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FAQSection from "@/components/sections/FAQSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection withHeader={false} />
        <TrustSection />
        <ShuffleHero />
        <BenefitsSection />
        <CaseStudySection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
