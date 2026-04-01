"use client";

import { Testimonials } from "@/components/ui/unique-testimonial";
import { useTranslations } from "next-intl";

const TrustSection = () => {
  const t = useTranslations("home.trust");

  return (
    <section className="py-16 overflow-hidden relative">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-success/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container relative z-10">
        {/* Trust Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
        
        {/* Marquee Container */}
        <div className="relative overflow-hidden bg-gradient-to-r from-transparent via-card/20 to-transparent rounded-3xl py-8 mb-16">
          {/* Marquee */}
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First set of logos */}
            <div className="flex items-center space-x-12 px-6">
              <div className="bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-lg font-semibold text-foreground">TechCorp</span>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-lg font-semibold text-foreground">InnovateLab</span>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-lg font-semibold text-foreground">FutureTech</span>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-lg font-semibold text-foreground">DigitalFlow</span>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-lg font-semibold text-foreground">CloudNine</span>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-lg font-semibold text-foreground">SmartScale</span>
              </div>
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-12 px-6">
              <div className="bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-lg font-semibold text-foreground">TechCorp</span>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-lg font-semibold text-foreground">InnovateLab</span>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-lg font-semibold text-foreground">FutureTech</span>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-lg font-semibold text-foreground">DigitalFlow</span>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-lg font-semibold text-foreground">CloudNine</span>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-lg font-semibold text-foreground">SmartScale</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials />
      </div>
    </section>
  );
};

export default TrustSection;