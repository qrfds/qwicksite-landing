import { setRequestLocale } from "next-intl/server";
import RefundPage from "../../refund/page";

export default async function LocalizedRefundPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <RefundPage />;
}
