import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const FinalCTASection = () => {
  const features = [
    "AI generates your site in 60 seconds",
    "Built-in e-commerce & payment processing", 
    "Drag-and-drop editor (no coding)",
    "Mobile-responsive & SEO optimized",
    "24/7 support & free migration"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-white/10 rounded-full blur-xl"></div>
      
      <div className="container max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Your business online in minutes, not months
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop losing customers to competitors with better websites. Join thousands of entrepreneurs who chose the faster, smarter way to build online.
            </p>
          </div>

          {/* Feature checklist */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 text-foreground">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm leading-relaxed break-words">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-12 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-strong"
            >
              Start Free & Launch Your Store Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto border-border text-foreground hover:bg-card/50"
            >
              Book a Demo
            </Button>
          </div>

          {/* Final trust elements */}
          <div className="space-y-4 text-muted-foreground">
            <p className="text-sm">✨ No credit card required • 14-day money-back guarantee</p>
            <p className="text-xs">Start with our free plan, upgrade only when you're ready to grow</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;