import { setRequestLocale } from "next-intl/server";
import DeliveryPage from "../../delivery/page";

export default async function LocalizedDeliveryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DeliveryPage />;
}
