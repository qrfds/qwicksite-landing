import { headers } from "next/headers";
import type { CurrencyView } from "@/lib/pricing-plans";

export async function isEgyptVisitor() {
  const requestHeaders = await headers();
  const countryHeader =
    requestHeaders.get("x-vercel-ip-country") ??
    requestHeaders.get("cf-ipcountry") ??
    requestHeaders.get("x-country-code") ??
    "";

  if (!countryHeader) {
    return true;
  }

  return countryHeader.toUpperCase() === "EG";
}

export async function getDefaultCurrencyView(): Promise<CurrencyView> {
  return (await isEgyptVisitor()) ? "egypt" : "gulf";
}
