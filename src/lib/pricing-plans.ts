export type CurrencyView = "egypt" | "global";
export type BillingCycle = "monthly" | "yearly";
export type PlanId = "launch" | "growth" | "expansion";

export type RegionPrice = {
  monthly: number;
  currency: string;
  note?: string;
};

export type Plan = {
  id: PlanId;
  name: string;
  tagline: string;
  description: string;
  popular?: boolean;
  cta: string;
  href: string;
  features: string[];
  uniqueHighlights?: string[];
  pricing: {
    egypt: RegionPrice;
    global: RegionPrice;
  };
};

type PricingMessages = {
  (key: string): string;
  raw(key: string): unknown;
};

export function getPricingPlans(t: PricingMessages): Plan[] {
  return [
    {
      id: "launch",
      name: t("plans.launch.name"),
      tagline: t("plans.launch.tagline"),
      description: t("plans.launch.description"),
      cta: t("plans.launch.cta"),
      href: "https://vcboard.qrfds.com/register",
      features: t.raw("planFeatures.launch") as string[],
      pricing: {
        egypt: { monthly: 0, currency: "EGP", note: t("pricingNotes.launch") },
        global: { monthly: 0, currency: "USD", note: t("pricingNotes.launch") },
      },
    },
    {
      id: "growth",
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
        global: { monthly: 15, currency: "USD", note: t("pricingNotes.growthGlobal") },
      },
    },
    {
      id: "expansion",
      name: t("plans.expansion.name"),
      tagline: t("plans.expansion.tagline"),
      description: t("plans.expansion.description"),
      cta: t("plans.expansion.cta"),
      href: "https://vcboard.qrfds.com/register",
      features: t.raw("planFeatures.expansion") as string[],
      uniqueHighlights: t.raw("highlightsList.expansion") as string[],
      pricing: {
        egypt: { monthly: 4000, currency: "EGP", note: t("pricingNotes.expansionEgypt") },
        global: { monthly: 69, currency: "USD", note: t("pricingNotes.expansionGlobal") },
      },
    },
  ];
}

export function isPlanId(value: string): value is PlanId {
  return value === "launch" || value === "growth" || value === "expansion";
}

export function normalizeBillingCycle(value: string | string[] | undefined): BillingCycle {
  return value === "yearly" ? "yearly" : "monthly";
}

export function getPriceMultiplier(billingCycle: BillingCycle) {
  return billingCycle === "yearly" ? 12 * 0.8 : 1;
}

export function formatAmount(currency: string, value: number, locale: string) {
  const numberFormatter = new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-US", {
    maximumFractionDigits: 0,
  });
  return `${currency} ${numberFormatter.format(value)}`;
}
