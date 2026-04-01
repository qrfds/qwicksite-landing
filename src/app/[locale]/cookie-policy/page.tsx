import { setRequestLocale } from "next-intl/server";
import CookiePolicyPage from "../../cookie-policy/page";

export default async function LocalizedCookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookiePolicyPage />;
}
