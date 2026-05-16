import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import CheckoutPage from "../../../checkout/[plan]/page";

type LocalizedCheckoutPageProps = {
  params: Promise<{ locale: string; plan: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; plan: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("checkoutPage");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function LocalizedCheckoutPage({
  params,
  searchParams,
}: LocalizedCheckoutPageProps) {
  const { locale, plan } = await params;
  setRequestLocale(locale);

  return <CheckoutPage params={Promise.resolve({ plan })} searchParams={searchParams} />;
}
