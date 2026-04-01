"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const CaseStudySection = () => {
  const t = useTranslations("home.caseStudy");

  return (
    <section className="py-20">
      <div className="container">
        <Card className="bg-card/90 backdrop-blur-sm border border-border shadow-strong p-8 md:p-12">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
              {t("badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">6</span>
              </div>
              <p className="text-sm text-foreground">{t("stats.0.label")}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">$50K</span>
              </div>
              <p className="text-sm text-foreground">{t("stats.1.label")}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">95%</span>
              </div>
              <p className="text-sm text-foreground">{t("stats.2.label")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-card/60 backdrop-blur-sm border border-border/50 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("cards.challenge.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("cards.challenge.body")}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/60 backdrop-blur-sm border border-border/50 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("cards.solution.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("cards.solution.body")}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/60 backdrop-blur-sm border border-border/50 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("cards.results.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("cards.results.body")}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/60 backdrop-blur-sm border border-border/50 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{t("cards.next.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("cards.next.body")}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="bg-primary border-0 shadow-strong">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  {t("cta.title")}
                </h3>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  {t("cta.description")}
                </p>
                <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-soft">
                  <Link href="https://vcboard.qrfds.com/register" target="_blank" rel="noopener noreferrer">
                    {t("cta.button")}
                  </Link>
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