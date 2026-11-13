import { headers } from "next/headers";
import type { CurrencyView } from "@/lib/pricing-plans";
import { readVisitorCountry } from "@/lib/visitor-country";

export async function isEgyptVisitor() {
  const requestHeaders = await headers();
  const country = readVisitorCountry((name) => requestHeaders.get(name));

  // No country header at all (local development, a direct call): default to Egypt, the primary market.
  if (!country) {
    return true;
  }

  return country === "EG";
}

export async function getDefaultCurrencyView(): Promise<CurrencyView> {
  return (await isEgyptVisitor()) ? "egypt" : "global";
}
