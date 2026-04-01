import { setRequestLocale } from "next-intl/server";
import LicensesPage from "../../licenses/page";

export default async function LocalizedLicensesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LicensesPage />;
}
