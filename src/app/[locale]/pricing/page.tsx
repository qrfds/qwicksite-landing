import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PricingPage from "../../pricing/page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("meta");

  return {
    title: `${t("title")} | Pricing`,
    description: t("description"),
  };
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
