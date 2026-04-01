"use client";

import { Zap, ShoppingCart, MousePointer, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

const BenefitsSection = () => {
  const t = useTranslations("home.benefits");
  const benefits = [
    {
      icon: Zap,
      title: t("items.0.title"),
      description: t("items.0.description"),
      feature: t("items.0.feature")
    },
    {
      icon: ShoppingCart,
      title: t("items.1.title"),
      description: t("items.1.description"),
      feature: t("items.1.feature")
    },
    {
      icon: MousePointer,
      title: t("items.2.title"),
      description: t("items.2.description"),
      feature: t("items.2.feature")
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 h-full border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 w-fit">
                  {benefit.feature}
                </Badge>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {benefit.description}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
                  {t("learnMore")}
                  <ArrowRight className="w-4 h-4 ms-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;