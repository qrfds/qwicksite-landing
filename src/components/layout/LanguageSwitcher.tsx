"use client";

import {useLocale, useTranslations} from "next-intl";
import {Button} from "@/components/ui/button";
import {usePathname, useRouter} from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("header");
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === "ar" ? "en" : "ar";

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="h-9 px-3"
      aria-label={t("languageLabel")}
      onClick={() => router.replace(pathname, {locale: nextLocale})}
    >
      {nextLocale === "ar" ? t("switchToArabic") : t("switchToEnglish")}
    </Button>
  );
}
