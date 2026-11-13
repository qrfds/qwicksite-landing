import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import WebMcpProvider from "@/components/WebMcpProvider";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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
      <WebMcpProvider />
      <section lang={locale} dir={isArabic ? "rtl" : "ltr"} className={isArabic ? "font-[var(--font-cairo)]" : ""}>
        {children}
      </section>
    </NextIntlClientProvider>
  );
}
