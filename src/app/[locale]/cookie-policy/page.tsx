import { setRequestLocale } from "next-intl/server";
import CookiePolicyPage from "../../cookie-policy/page";
import type { Metadata } from "next";
import type { AppLocale } from "@/i18n/routing";
import { createLegalMetadata } from "@/lib/legal-seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return createLegalMetadata(locale as AppLocale, "cookie-policy");
}

export default async function LocalizedCookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookiePolicyPage />;
}
