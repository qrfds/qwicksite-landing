import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const CaseStudySection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <Card className="bg-card/90 backdrop-blur-sm border border-border shadow-strong p-8 md:p-12">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
              Success Story
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              From idea to $50K in 6 months
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how Sarah Johnson used QuickSite to launch her online jewelry store and achieve her first $50K in revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">6</span>
              </div>
              <p className="text-sm text-foreground">Weeks to launch</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">$50K</span>
              </div>
              <p className="text-sm text-foreground">Revenue in 6 months</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">95%</span>
              </div>
              <p className="text-sm text-foreground">Customer satisfaction</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-card/60 backdrop-blur-sm border border-border/50 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sarah had a passion for creating unique jewelry but struggled with the technical aspects of building an online store. She needed a solution that would let her focus on her craft, not coding.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/60 backdrop-blur-sm border border-border/50 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  QuickSite's AI-powered builder created a professional store in minutes. The built-in e-commerce features and payment processing let her start selling immediately.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/60 backdrop-blur-sm border border-border/50 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">The Results</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Within 6 months, Sarah's store was generating $50K in revenue. The mobile-responsive design and SEO optimization helped her reach customers worldwide.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/60 backdrop-blur-sm border border-border/50 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">What's Next</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sarah is now expanding her product line and planning to open a physical store. QuickSite's scalability supports her growing business needs.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="bg-primary border-0 shadow-strong">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Ready to write your success story?
                </h3>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  Join thousands of entrepreneurs who chose the faster, smarter way to build online.
                </p>
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-soft">
                  Start Your Journey
                </Button>
              </CardContent>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CaseStudySection;