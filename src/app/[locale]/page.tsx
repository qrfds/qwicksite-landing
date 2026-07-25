import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { routing, type AppLocale } from "@/i18n/routing";
import { getPricingPlans } from "@/lib/pricing-plans";
import {
  createFaqSchema,
  createFounderSchema,
  createOrganizationSchema,
  createPageMetadata,
  createSoftwareApplicationSchema,
  createWebPageSchema,
  createWebsiteSchema,
  absoluteUrl,
  localizedPath,
} from "@/lib/seo";
import HomePage from "../_home/HomePage";

function resolveLocale(locale: string): AppLocale {
  return locale === "ar" ? "ar" : "en";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  setRequestLocale(locale);
  const t = await getTranslations("meta");

  return createPageMetadata({
    locale: resolveLocale(locale),
    title: t("title"),
    description: t("description"),
  });
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const localeKey = resolveLocale(locale);
  setRequestLocale(localeKey);
  const meta = await getTranslations("meta");
  const faq = await getTranslations("home.faq");
  const pricing = await getTranslations("pricingPage");
  const plans = getPricingPlans(pricing);
  const description = meta("description");

  return (
    <>
      <JsonLd
        id="qwicksite-homepage-schema"
        data={[
          createOrganizationSchema(),
          createFounderSchema(),
          createWebsiteSchema(),
          createSoftwareApplicationSchema(
            description,
            plans.map((plan) => ({
              name: plan.name,
              price: plan.pricing.egypt.monthly,
              priceCurrency: plan.pricing.egypt.currency,
              url: `${absoluteUrl(localizedPath(localeKey, "/pricing"))}#${plan.id}`,
            })),
          ),
          createWebPageSchema({
            locale: localeKey,
            title: meta("title"),
            description,
          }),
          createFaqSchema(
            faq.raw("items") as Array<{ question: string; answer: string }>,
          ),
        ]}
      />
      <HomePage />
    </>
  );
}
