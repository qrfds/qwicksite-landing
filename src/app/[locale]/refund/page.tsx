import { setRequestLocale } from "next-intl/server";
import RefundPage from "../../refund/page";
import type { Metadata } from "next";
import type { AppLocale } from "@/i18n/routing";
import { createLegalMetadata } from "@/lib/legal-seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return createLegalMetadata(locale as AppLocale, "refund");
}

export default async function LocalizedRefundPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <RefundPage />;
}
