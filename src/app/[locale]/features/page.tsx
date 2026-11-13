import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import FeaturesPage from "../../features/page";
import { createPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("featuresPage");
  return createPageMetadata({
    locale: locale as AppLocale,
    path: "/features",
    title: `${t("title")} | QwickSite`,
    description: t("description"),
  });
}

export default async function LocalizedFeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FeaturesPage />;
}
