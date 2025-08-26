import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ScrollingCardSection from "@/components/scrolling-card-section/ScrollingCardSection";
import TrustSection from "@/components/sections/TrustSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FAQSection from "@/components/sections/FAQSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <ScrollingCardSection />
        <TrustSection />
        <BenefitsSection />
        <CaseStudySection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
