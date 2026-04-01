import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { headers } from "next/headers";
import { getTranslations } from "next-intl/server";
import PricingPlansSection from "@/components/sections/PricingPlansSection";

type CurrencyView = "egypt" | "gulf";

type Plan = {
  name: string;
  tagline: string;
  description: string;
  popular?: boolean;
  cta: string;
  href: string;
  features: string[];
  uniqueHighlights?: string[];
  pricing: {
    egypt: { monthly: number; currency: string; note?: string }; // EGP
    gulf: { monthly: number; currency: string; note?: string }; // SAR/AED
  };
};

async function isEgyptVisitor() {
  const requestHeaders = await headers();
  const countryHeader =
    requestHeaders.get("x-vercel-ip-country") ??
    requestHeaders.get("cf-ipcountry") ??
    requestHeaders.get("x-country-code") ??
    "";

  // If geo headers are unavailable, default to Egypt pricing.
  if (!countryHeader) {
    return true;
  }

  return countryHeader.toUpperCase() === "EG";
}

export default async function PricingPage() {
  const t = await getTranslations("pricingPage");
  const currencyView: CurrencyView = (await isEgyptVisitor()) ? "egypt" : "gulf";

  const plans: Plan[] = [
    {
      name: t("plans.launch.name"),
      tagline: t("plans.launch.tagline"),
      description: t("plans.launch.description"),
      cta: t("plans.launch.cta"),
      href: "https://vcboard.qrfds.com/register",
      features: t.raw("planFeatures.launch") as string[],
      pricing: {
        egypt: { monthly: 0, currency: "EGP", note: t("pricingNotes.launch") },
        gulf: { monthly: 0, currency: "SAR/AED", note: t("pricingNotes.launch") },
      },
    },
    {
      name: t("plans.growth.name"),
      tagline: t("plans.growth.tagline"),
      description: t("plans.growth.description"),
      popular: true,
      cta: t("plans.growth.cta"),
      href: "https://vcboard.qrfds.com/register",
      features: t.raw("planFeatures.growth") as string[],
      uniqueHighlights: t.raw("highlightsList.growth") as string[],
      pricing: {
        egypt: { monthly: 1000, currency: "EGP", note: t("pricingNotes.growthEgypt") },
        gulf: { monthly: 50, currency: "SAR/AED", note: t("pricingNotes.growthGulf") },
      },
    },
    {
      name: t("plans.expansion.name"),
      tagline: t("plans.expansion.tagline"),
      description: t("plans.expansion.description"),
      cta: t("plans.expansion.cta"),
      href: "https://vcboard.qrfds.com/register",
      features: t.raw("planFeatures.expansion") as string[],
      uniqueHighlights: t.raw("highlightsList.expansion") as string[],
      pricing: {
        egypt: { monthly: 4000, currency: "EGP", note: t("pricingNotes.expansionEgypt") },
        gulf: { monthly: 250, currency: "SAR/AED", note: t("pricingNotes.expansionGulf") },
      },
    },
  ];

  const featureComparison = t.raw("comparisonRows") as Array<{
    feature: string;
    launch: string;
    growth: string;
    expansion: string;
  }>;

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pb-16">
        <section className="container">
          <div className="mx-auto mb-12 max-w-4xl space-y-5 text-center md:mb-16">
            <Badge variant="outline" className="border-primary/30 bg-card/40 px-3 py-1 text-sm mt-12">
              {t("badge")}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t("titlePrefix")}{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/90 bg-clip-text text-transparent">
                {t("titleHighlight")}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t("description")}
            </p>
          </div>

          <PricingPlansSection plans={plans} currencyView={currencyView} />

          <div className="mt-14 overflow-hidden rounded-2xl border border-border/60 bg-card/50">
            <div className="border-b border-border/60 px-6 py-4">
              <h2 className="text-2xl font-semibold md:text-3xl">{t("compareFeatures")}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {t("compareDescription")}
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[780px] text-left">
                <thead>
                  <tr className="bg-background/40 text-sm">
                    <th className="px-6 py-4 font-semibold">{t("featureHeader")}</th>
                    <th className="px-6 py-4 font-semibold">{t("plans.launch.name")}</th>
                    <th className="px-6 py-4 font-semibold">{t("plans.growth.name")}</th>
                    <th className="px-6 py-4 font-semibold">{t("plans.expansion.name")}</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row) => (
                    <tr key={row.feature} className="border-t border-border/50 text-sm md:text-base">
                      <td className="px-6 py-4 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.launch}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.growth}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.expansion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
