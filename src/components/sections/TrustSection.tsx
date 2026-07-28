"use client";

import { Testimonials } from "@/components/ui/unique-testimonial";
import Image from "next/image";
import { useTranslations } from "next-intl";

const clientLogos = [
  { src: "/images/clients/addressinvestments.png", alt: "Address Investments" },
  { src: "/images/clients/Optimum_oil.png", alt: "Optimum Oil" },
  { src: "/images/clients/hn.svg", alt: "HN" },
  { src: "/images/clients/colorplay.png", alt: "Color Play" },
  { src: "/images/clients/allianz.svg", alt: "Allianz" },
  { src: "/images/clients/lensaura.svg", alt: "Lens Aura" },
  { src: "/images/clients/bfas.png", alt: "BFAS" },
  { src: "/images/clients/Atomic_Rides.png", alt: "Atomic Rides" },
  { src: "/images/clients/11_11.png", alt: "11:11" },
];

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
            {[0, 1].map((setIndex) => (
              <div
                key={setIndex}
                className="flex items-center space-x-12 px-6"
                aria-hidden={setIndex === 1}
              >
                {clientLogos.map((logo) => (
                  <div
                    key={logo.src}
                    className="flex h-28 w-56 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-4 shadow-soft transition-all duration-300 transform hover:-translate-y-1 hover:shadow-medium"
                  >
                    <Image
                      src={logo.src}
                      alt={setIndex === 0 ? logo.alt : ""}
                      width={176}
                      height={64}
                      className="h-16 w-44 object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials />
      </div>
    </section>
  );
};

export default TrustSection;
