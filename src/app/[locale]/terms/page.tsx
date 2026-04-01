import { setRequestLocale } from "next-intl/server";
import TermsPage from "../../terms/page";

export default async function LocalizedTermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TermsPage />;
}
