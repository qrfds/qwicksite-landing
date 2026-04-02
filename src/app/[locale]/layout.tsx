import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale,
      type: "website",
      images: [
        {
          url: "/quicksite-hero.jpg",
          width: 1200,
          height: 630,
          alt: "QwickSite homepage hero preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/quicksite-hero.jpg"],
    },
    alternates: {
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = (await import(`../../locales/${locale}.json`)).default;
  const isArabic = locale === "ar";

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <section lang={locale} dir={isArabic ? "rtl" : "ltr"} className={isArabic ? "font-[var(--font-cairo)]" : ""}>
        {children}
      </section>
    </NextIntlClientProvider>
  );
}
