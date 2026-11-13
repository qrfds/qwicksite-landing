"use client";

/**
 * A/B test of the partner page headline. A visitor gets a random variant once and keeps it (cookie, 90 days). Events go to the backend, which only
 * records them for an experiment an admin has started, so with no experiment running this is inert. Everything is wrapped: analytics must never break the page.
 *
 * Off by default: set NEXT_PUBLIC_PARTNERS_AB=on at build time, and start the experiment key "partners-hero" (variants a, b) in the admin Growth tab.
 */
export const EXPERIMENT_KEY = "partners-hero";
export const VARIANTS = ["a", "b"] as const;
export type PartnerVariant = (typeof VARIANTS)[number];

const API_BASE = process.env.NEXT_PUBLIC_QWICKSITE_API_URL || "https://api.qwicksite.com/api/v1";
const COOKIE = "qs_pv";
export const abEnabled = () => process.env.NEXT_PUBLIC_PARTNERS_AB === "on";

function readCookie(name: string): string | null {
  try {
    const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return m ? decodeURIComponent(m[1]) : null;
  } catch {
    return null;
  }
}

function randomId(): string {
  const bytes = new Uint8Array(12);
  (globalThis.crypto || ({ getRandomValues: (a: Uint8Array) => a.map(() => Math.floor(Math.random() * 256)) } as Crypto)).getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

/** { visitor, variant }: visitor id and arm are stored together as "<id>.<variant>". */
export function getAssignment(): { visitor: string; variant: PartnerVariant } {
  if (!abEnabled()) return { visitor: "", variant: "a" };
  const saved = readCookie(COOKIE);
  const m = saved?.match(/^([a-f0-9]{24})\.([a-z])$/);
  if (m && (VARIANTS as readonly string[]).includes(m[2])) return { visitor: m[1], variant: m[2] as PartnerVariant };
  const visitor = randomId();
  const variant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
  try {
    document.cookie = `${COOKIE}=${visitor}.${variant}; max-age=${60 * 60 * 24 * 90}; path=/; samesite=lax`;
  } catch {
    /* cookies blocked: a fresh arm each visit is acceptable */
  }
  return { visitor, variant };
}

export function track(type: "view" | "cta_click"): void {
  if (!abEnabled()) return;
  try {
    const { visitor, variant } = getAssignment();
    if (!visitor) return;
    const body = JSON.stringify({ visitor, experiment: EXPERIMENT_KEY, variant, type });
    const url = `${API_BASE}/affiliates/growth/event`;
    if (navigator.sendBeacon) navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
    else void fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body, keepalive: true });
  } catch {
    /* never break the page */
  }
}
