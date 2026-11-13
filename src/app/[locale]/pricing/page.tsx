import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PricingPage from "../../pricing/page";
import { createPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pricingPage");
  return createPageMetadata({
    locale: locale as AppLocale,
    path: "/pricing",
    title: `${t("titlePrefix")} ${t("titleHighlight")} | QwickSite`,
    description: t("description"),
  });
}

export default async function LocalizedPricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PricingPage />;
}
