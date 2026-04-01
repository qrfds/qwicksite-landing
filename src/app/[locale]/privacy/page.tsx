import { setRequestLocale } from "next-intl/server";
import PrivacyPage from "../../privacy/page";

export default async function LocalizedPrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacyPage />;
}
