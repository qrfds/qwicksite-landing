"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const TrustSection = () => {
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
            Trusted by leading businesses worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of companies that trust QuickSite to power their online presence
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>★</span>
                ))}
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-card-foreground mb-6 group-hover:text-primary transition-colors duration-300 leading-relaxed">
                &ldquo;Launched my online store in 30 minutes. Made my first sale the same day!&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 animate-pulse group-hover:bg-primary/30 transition-colors duration-300"></div>
                <div>
                  <p className="font-medium text-sm text-card-foreground">Sarah Chen</p>
                  <p className="text-xs text-muted-foreground">Boutique Owner</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>★</span>
                ))}
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-card-foreground mb-6 group-hover:text-primary transition-colors duration-300 leading-relaxed">
                &ldquo;Finally, a website builder that actually works like they promise. Game changer!&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 animate-pulse group-hover:bg-accent/30 transition-colors duration-300"></div>
                <div>
                  <p className="font-medium text-sm text-card-foreground">Mike Rodriguez</p>
                  <p className="text-xs text-muted-foreground">Restaurant Owner</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>★</span>
                ))}
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-card-foreground mb-6 group-hover:text-primary transition-colors duration-300 leading-relaxed">
                &ldquo;Migrated from Shopify in minutes. QuickSite is so much easier to use!&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/20 animate-pulse group-hover:bg-success/30 transition-colors duration-300"></div>
                <div>
                  <p className="font-medium text-sm text-card-foreground">Emily Johnson</p>
                  <p className="text-xs text-muted-foreground">Fashion Designer</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;