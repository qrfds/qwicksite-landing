import { fetchPublicPlans, type PublicPlan } from "./public-plans";

export type CurrencyView = "egypt" | "global";
export type BillingCycle = "monthly" | "yearly";
/** A real backend Plan's Mongo _id (live plans) or one of the static
 *  fallback ids below -- no longer a fixed 3-value union, since the set of
 *  plans is now whatever the admin has published. */
export type PlanId = string;

export type RegionPrice = {
  monthly: number;
  currency: string;
  note?: string;
  yearly?: number;
};

export type Plan = {
  id: PlanId;
  name: string;
  tagline?: string;
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
  (key: string, values?: Record<string, string | number>): string;
  raw(key: string): unknown;
  has(key: string): boolean;
};

function mapPublicPlanToPlan(p: PublicPlan, t: PricingMessages): Plan {
  const cta = t.has("genericCta") ? t("genericCta") : "Get Started";
  return {
    id: p.id,
    name: p.name,
    description: p.description,
    popular: p.isRecommended,
    cta,
    href: "https://app.qwicksite.com/register",
    features: p.features,
    pricing: {
      egypt: {
        monthly: p.price,
        yearly: Math.round(p.yearlyPerMonth * 12),
        currency: "EGP",
      },
      global: {
        monthly: p.priceUsd,
        yearly: Math.round(p.yearlyPerMonthUsd * 12),
        currency: "USD",
      },
    },
  };
}

/**
 * Static 3-tier catalog, used ONLY when the live backend fetch fails or
 * returns nothing (see getPricingPlans below) -- keeps the page from
 * breaking if the API is briefly unreachable. NOT shown under normal
 * operation; prices here will drift from the real catalog over time since
 * nothing keeps them in sync.
 */
export function getFallbackPricingPlans(t: PricingMessages): Plan[] {
  return [
    {
      id: "launch",
      name: t("plans.launch.name"),
      tagline: t("plans.launch.tagline"),
      description: t("plans.launch.description"),
      cta: t("plans.launch.cta"),
      href: "https://app.qwicksite.com/register",
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
      href: "https://app.qwicksite.com/register",
      features: t.raw("planFeatures.growth") as string[],
      uniqueHighlights: t.raw("highlightsList.growth") as string[],
      pricing: {
        egypt: { monthly: 1000, yearly: 12000, currency: "EGP", note: t("pricingNotes.growthEgypt") },
        global: { monthly: 15, currency: "USD", note: t("pricingNotes.growthGlobal") },
      },
    },
    {
      id: "expansion",
      name: t("plans.expansion.name"),
      tagline: t("plans.expansion.tagline"),
      description: t("plans.expansion.description"),
      cta: t("plans.expansion.cta"),
      href: "https://app.qwicksite.com/register",
      features: t.raw("planFeatures.expansion") as string[],
      uniqueHighlights: t.raw("highlightsList.expansion") as string[],
      pricing: {
        egypt: { monthly: 4000, currency: "EGP", note: t("pricingNotes.expansionEgypt") },
        global: { monthly: 69, currency: "USD", note: t("pricingNotes.expansionGlobal") },
      },
    },
  ];
}

export interface PricingPlansResult {
  plans: Plan[];
  /** false only when the live fetch failed/returned nothing and this is the
   *  static 3-tier fallback -- lets a caller skip UI (like the hand-authored
   *  feature comparison table) that assumes the fixed launch/growth/
   *  expansion shape and can't honestly represent an arbitrary live catalog. */
  isLive: boolean;
}

/**
 * Live plan catalog mapped to the UI's Plan shape -- however many public
 * plans the admin has published, that many cards render; no fixed tier
 * count or id mapping. Falls back to the static 3-tier catalog above only
 * if the live fetch fails or returns zero plans.
 */
export async function getPricingPlans(t: PricingMessages): Promise<PricingPlansResult> {
  const live = await fetchPublicPlans();
  if (live.length === 0) {
    return { plans: getFallbackPricingPlans(t), isLive: false };
  }
  return { plans: live.map((p) => mapPublicPlanToPlan(p, t)), isLive: true };
}

export function normalizeBillingCycle(value: string | string[] | undefined): BillingCycle {
  return value === "yearly" ? "yearly" : "monthly";
}

export function getPriceMultiplier(billingCycle: BillingCycle) {
  return billingCycle === "yearly" ? 12 * 0.8 : 1;
}

export function getPlanTotal(pricing: RegionPrice, billingCycle: BillingCycle) {
  if (billingCycle === "yearly") {
    if (pricing.yearly != null) {
      return pricing.yearly;
    }
    return Math.round(pricing.monthly * getPriceMultiplier("yearly"));
  }
  return pricing.monthly;
}

export function formatAmount(currency: string, value: number, locale: string) {
  const numberFormatter = new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-US", {
    maximumFractionDigits: 0,
  });
  return `${currency} ${numberFormatter.format(value)}`;
}
