/**
 * Live pricing data from the virtual_card backend's public plans catalog --
 * so a price/feature-list change made in the admin Plans page shows up here
 * without a code change or redeploy. No auth needed (POST /plans/readAllPlans
 * is deliberately public -- see backend/src/routes/plan.ts), CORS is wide
 * open on that API (`cors({ origin: true })` in backend/server.ts).
 *
 * The number of cards this renders is exactly however many plans come back
 * (public, non-archived, non-vcProvider) -- add or archive a plan in the
 * admin and the landing page's card count follows, no mapping to fix here.
 */

export interface PublicPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  isFree: boolean;
  isRecommended: boolean;
  price: number;
  yearlyPerMonth: number;
  priceUsd: number;
  yearlyPerMonthUsd: number;
}

const API_BASE = process.env.QWICKSITE_API_URL || "https://api.qwicksite.com/api/v1";

/** Revalidate every 5 minutes (ISR) -- fresh enough for a price change to
 *  show up quickly without hitting the backend on every single page view. */
const REVALIDATE_SECONDS = 300;

/**
 * Fetches the live public plan catalog. Returns an empty array (never
 * throws) on any failure -- callers fall back to FALLBACK_PLANS in
 * pricing-plans.ts rather than breaking the page if the backend is
 * unreachable for a moment.
 */
export async function fetchPublicPlans(): Promise<PublicPlan[]> {
  try {
    const res = await fetch(`${API_BASE}/plans/readAllPlans`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sort: "price", limit: 50, page: 1 }),
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      throw new Error(`readAllPlans responded ${res.status}`);
    }

    const data = await res.json();
    const plans = Array.isArray(data?.plans) ? data.plans : [];

    return plans
      .filter((p: any) => !p.vcProvider)
      .map((p: any) => ({
        id: String(p._id),
        name: p.name,
        description: p.description || "",
        features: Array.isArray(p.features) ? p.features : [],
        isFree: Boolean(p.isFree),
        isRecommended: Boolean(p.isRecommended),
        price: p.price ?? 0,
        yearlyPerMonth: p.yearlyPerMonth ?? p.price ?? 0,
        priceUsd: p.priceUsd ?? 0,
        yearlyPerMonthUsd: p.yearlyPerMonthUsd ?? p.priceUsd ?? 0,
      }));
  } catch (err) {
    console.error("[public-plans] failed to fetch live plans, falling back to static pricing", err);
    return [];
  }
}
