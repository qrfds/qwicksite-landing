import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import CheckoutPage from "../../../checkout/[plan]/page";
import JsonLd from "@/components/seo/JsonLd";
import type { AppLocale } from "@/i18n/routing";
import {
  createBreadcrumbSchema,
  createPageMetadata,
  createWebPageSchema,
} from "@/lib/seo";

type LocalizedCheckoutPageProps = {
  params: Promise<{ locale: string; plan: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; plan: string }>;
}): Promise<Metadata> {
  const { locale, plan } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("checkoutPage");

  return createPageMetadata({
    locale: locale as AppLocale,
    path: `/checkout/${plan}`,
    title: t("metaTitle"),
    description: t("metaDescription"),
    indexable: false,
  });
}

export default async function LocalizedCheckoutPage({
  params,
  searchParams,
}: LocalizedCheckoutPageProps) {
  const { locale, plan } = await params;
  setRequestLocale(locale);
  const localeKey = locale as AppLocale;
  const checkout = await getTranslations("checkoutPage");
  const path = `/checkout/${plan}`;

  return (
    <>
      <JsonLd
        id="qwicksite-checkout-schema"
        data={[
          createWebPageSchema({
            locale: localeKey,
            path,
            title: checkout("metaTitle"),
            description: checkout("metaDescription"),
            type: "CheckoutPage",
          }),
          createBreadcrumbSchema(localeKey, path, [
            { name: localeKey === "ar" ? "الرئيسية" : "Home", path: "/" },
            { name: localeKey === "ar" ? "الأسعار" : "Pricing", path: "/pricing" },
            { name: checkout("badge"), path },
          ]),
        ]}
      />
      <CheckoutPage params={Promise.resolve({ plan })} searchParams={searchParams} />
    </>
  );
}
