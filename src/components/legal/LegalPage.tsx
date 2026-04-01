import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalPageProps = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
  badgeLabel?: string;
  lastUpdatedLabel?: string;
};

export default function LegalPage({
  title,
  subtitle,
  lastUpdated,
  sections,
  badgeLabel = "Legal",
  lastUpdatedLabel = "Last updated",
}: LegalPageProps) {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20 pb-16">
        <section className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-5 mb-10">
              <Badge variant="outline" className="px-3 py-1 text-sm bg-card/40 border-primary/30">
                {badgeLabel}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
              <p className="text-lg text-muted-foreground">{subtitle}</p>
              <p className="text-sm text-muted-foreground">
                {lastUpdatedLabel}: {lastUpdated}
              </p>
            </div>

            <Card className="border-border/60 bg-card/60 backdrop-blur-sm">
              <CardContent className="space-y-8 py-8">
                {sections.map((section) => (
                  <section key={section.title} className="space-y-4">
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets ? (
                      <ul className="list-disc ps-5 space-y-2 text-muted-foreground">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
