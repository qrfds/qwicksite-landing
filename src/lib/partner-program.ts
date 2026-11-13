/**
 * The live partner-program numbers from the app's backend (GET /affiliates/public-info, public), so a tier or rate changed in the admin Settings shows
 * up on the marketing page without a redeploy. Never throws: when the backend is unreachable the page shows the launch numbers instead.
 */
export interface PartnerTier {
  name: string;
  min: number;
  /** The customer's discount on their first payment, in percent. */
  rate: number;
}

export interface PartnerProgramInfo {
  open: boolean;
  tiers: PartnerTier[];
  /** The affiliate earns this share (0..1) of the tier discount rate, applied to the net amount. */
  commissionRatio: number;
  /** True while renewals also earn commission (the schedule in the admin Settings is not empty). */
  recurring: boolean;
}

export const PARTNER_JOIN_URL = "https://app.qwicksite.com/partners/join";
export const PARTNER_LOGIN_URL = "https://app.qwicksite.com/login";

const API_BASE = process.env.QWICKSITE_API_URL || "https://api.qwicksite.com/api/v1";

const LAUNCH_NUMBERS: PartnerProgramInfo = {
  open: true,
  commissionRatio: 0.5,
  recurring: false,
  tiers: [
    { name: "Starter", min: 0, rate: 5 },
    { name: "Pro", min: 100, rate: 10 },
    { name: "Elite", min: 1000, rate: 15 },
  ],
};

export async function fetchPartnerProgram(): Promise<PartnerProgramInfo> {
  try {
    const res = await fetch(`${API_BASE}/affiliates/public-info`, { next: { revalidate: 300 } });
    if (!res.ok) return LAUNCH_NUMBERS;
    const data = await res.json();
    const tiers: PartnerTier[] = Array.isArray(data?.tiers)
      ? data.tiers.map((t: any) => ({ name: String(t.name), min: Number(t.min), rate: Number(t.rate) })).filter((t: PartnerTier) => t.name && Number.isFinite(t.min) && Number.isFinite(t.rate))
      : [];
    if (!tiers.length) return LAUNCH_NUMBERS;
    return {
      open: data.open !== false,
      tiers: tiers.sort((a, b) => a.min - b.min),
      commissionRatio: Number.isFinite(Number(data.commissionRatio)) ? Number(data.commissionRatio) : LAUNCH_NUMBERS.commissionRatio,
      recurring: data.recurring === true, // only promised once the backend says renewals earn
    };
  } catch {
    return LAUNCH_NUMBERS;
  }
}

/** What the partner earns, in percent of the net amount, for a tier. */
export const partnerEarnRate = (tierRate: number, ratio: number): number => Math.round(tierRate * ratio * 100) / 100;
