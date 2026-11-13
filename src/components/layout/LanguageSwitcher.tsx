"use client";

import {useLocale, useTranslations} from "next-intl";
import {ChevronDown, Languages} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {usePathname, useRouter} from "@/i18n/navigation";
import type {AppLocale} from "@/i18n/routing";

const languages = [
  {locale: "en", label: "English"},
  {locale: "ar", label: "العربية"},
] as const satisfies ReadonlyArray<{locale: AppLocale; label: string}>;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("header");
  const pathname = usePathname();
  const router = useRouter();

  const currentLanguage = languages.find((language) => language.locale === locale) ?? languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 gap-2 px-3"
          aria-label={`${t("languageLabel")}: ${currentLanguage.label}`}
        >
          <Languages className="size-4" />
          <span>{currentLanguage.label}</span>
          <ChevronDown className="size-3.5 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(nextLocale) =>
            router.replace(pathname, {locale: nextLocale as AppLocale})
          }
        >
          {languages.map((language) => (
            <DropdownMenuRadioItem key={language.locale} value={language.locale}>
              {language.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
