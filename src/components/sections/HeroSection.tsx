import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-[60vh] flex items-center py-16 relative overflow-hidden">
    
     
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left column - Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Launch your website or store in minutes{" "}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/90 bg-clip-text text-transparent">
                  powered by AI
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                QuickSite builds your site instantly, so you can focus on growing your business.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                <Link href="https://vcboard.qrfds.com/register" target="_blank" rel="noopener noreferrer">
                  Start Free Now
                </Link>
              </Button>
            </div>

            {/* Microcopy */}
            <p className="text-sm text-muted-foreground">
              ✨ Free forever plan available • No credit card required • Cancel anytime
            </p>
          </div>

          {/* Right Column - Hero Image */}
          <div className="lg:w-1/2 flex items-center justify-center h-full">
            {/* Hero Image */}
            <img 
              src="/heroimg.png" 
              alt="QuickSite Hero Image" 
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;