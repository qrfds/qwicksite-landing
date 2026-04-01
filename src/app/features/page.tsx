import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTranslations } from "next-intl/server";
import {
  BarChart3,
  Blocks,
  Brush,
  Compass,
  FolderKanban,
  FormInput,
  Gauge,
  LayoutDashboard,
  Link2,
  MonitorSmartphone,
  MousePointerClick,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default async function FeaturesPage() {
  const t = await getTranslations("featuresPage");
  const tc = await getTranslations("common");

  const valuePillars = [
    {
      title: t("pillars.visualPrecisionBuilder.title"),
      description: t("pillars.visualPrecisionBuilder.description"),
      outcomes: t.raw("pillars.visualPrecisionBuilder.outcomes") as string[],
      icon: MousePointerClick,
    },
    {
      title: t("pillars.designSystemControl.title"),
      description: t("pillars.designSystemControl.description"),
      outcomes: t.raw("pillars.designSystemControl.outcomes") as string[],
      icon: Brush,
    },
    {
      title: t("pillars.conversionEngine.title"),
      description: t("pillars.conversionEngine.description"),
      outcomes: t.raw("pillars.conversionEngine.outcomes") as string[],
      icon: FormInput,
    },
    {
      title: t("pillars.seoStorefront.title"),
      description: t("pillars.seoStorefront.description"),
      outcomes: t.raw("pillars.seoStorefront.outcomes") as string[],
      icon: Search,
    },
  ];

  const controlIcons = [MonitorSmartphone, Compass, Brush, Link2, LayoutDashboard, BarChart3];
  const controls = (t.raw("controls") as string[]).map((label, index) => ({
    label,
    icon: controlIcons[index] ?? MonitorSmartphone,
  }));

  const categoryIcons = [Blocks, Sparkles, Gauge, FolderKanban, Workflow];
  const componentCategories = (
    t.raw("componentCategories") as Array<{ title: string; blocks: string[] }>
  ).map((category, index) => ({
    ...category,
    icon: categoryIcons[index] ?? Blocks,
  }));

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pb-16">
        <section className="container">
          <div className="relative overflow-hidden rounded-3xl bg-[#00000] text-white px-6 py-14 md:py-20 mb-14">
            <div className="flex gap-[8rem] rotate-[-20deg] absolute top-[-34rem] right-[-26rem] z-0 blur-[4rem] skew-[-40deg] opacity-50 pointer-events-none">
              <div className="w-[10rem] h-[20rem] bg-linear-90 from-white to-blue-300"></div>
              <div className="w-[10rem] h-[20rem] bg-linear-90 from-white to-blue-300"></div>
              <div className="w-[10rem] h-[20rem] bg-linear-90 from-white to-blue-300"></div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-7">
             

              <div className="mx-auto bg-[#3E9BAE] rounded-full px-4 py-2 flex items-center gap-2 w-fit">
                <span className="text-xs flex items-center gap-2">
                  {t("badge")}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t("title")}
              </h1>
              <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                {t("description")}
              </p>

              <div className="relative max-w-2xl mx-auto w-full">
                <div className="bg-[#154F77] rounded-full p-3 flex items-center">
                  <input
                    type="text"
                    placeholder={t("searchPlaceholder")}
                    className="bg-transparent flex-1 outline-none text-gray-300 px-4"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-3xl mx-auto">
                <Link
                  href="/support?idea=launch-seo-blog"
                  className="bg-[#154F77] hover:bg-[#3E9BAE] rounded-full px-4 py-2 text-sm"
                >
                  {t("chip1")}
                </Link>
                <Link
                  href="/support?idea=product-landing-page"
                  className="bg-[#154F77] hover:bg-[#3E9BAE] rounded-full px-4 py-2 text-sm"
                >
                  {t("chip2")}
                </Link>
                <Link
                  href="/support?idea=conversion-hero-section"
                  className="bg-[#154F77] hover:bg-[#3E9BAE] rounded-full px-4 py-2 text-sm"
                >
                  {t("chip3")}
                </Link>
                <Link
                  href="/support?idea=support-docs-pages"
                  className="bg-[#154F77] hover:bg-[#3E9BAE] rounded-full px-4 py-2 text-sm"
                >
                  {t("chip4")}
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-5 mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">{t("coreValue")}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {valuePillars.map((pillar) => (
                <Card
                  key={pillar.title}
                  className="border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all"
                >
                  <CardHeader>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <pillar.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                    <ul className="space-y-2">
                      {pillar.outcomes.map((outcome) => (
                        <li key={outcome} className="text-sm text-muted-foreground">
                          • {outcome}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-14">
            <Card className="border-border/60 bg-card/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">{t("editingSurface")}</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {controls.map((control) => (
                  <div
                    key={control.label}
                    className="rounded-xl border border-border/50 bg-background/30 px-4 py-3 flex items-center gap-3"
                  >
                    <control.icon className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{control.label}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">{t("componentLibrary")}</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              {t("componentLibraryDescription")}
            </p>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {componentCategories.map((category) => (
                <Card
                  key={category.title}
                  className="border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all"
                >
                  <CardHeader>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {category.blocks.map((block) => (
                      <Badge key={block} variant="secondary" className="bg-primary/10 text-primary">
                        {block}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-border/60 bg-card/50 p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              {t("ctaTitle")}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t("ctaDescription")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild variant="hero" size="lg">
                <Link href="https://vcboard.qrfds.com/register" target="_blank" rel="noopener noreferrer">
                  {tc("startFree")}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/support">{tc("talkToSupport")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
