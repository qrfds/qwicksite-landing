import type { Metadata } from "next";
import type { AppLocale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/seo";

const legalSeo = {
  privacy: {
    en: ["Privacy Policy | QwickSite", "How QwickSite collects, uses, and protects personal information."],
    ar: ["سياسة الخصوصية | QwickSite", "كيف يجمع QwickSite المعلومات الشخصية ويستخدمها ويحميها."],
  },
  terms: {
    en: ["Terms of Service | QwickSite", "Rules and conditions governing use of the QwickSite platform."],
    ar: ["شروط الاستخدام | QwickSite", "القواعد والشروط المنظمة لاستخدام منصة QwickSite."],
  },
  delivery: {
    en: ["Delivery Policy | QwickSite", "How QwickSite delivers digital services and manages account access."],
    ar: ["سياسة التوصيل | QwickSite", "كيفية تقديم QwickSite للخدمات الرقمية وإدارة الوصول إلى الحساب."],
  },
  refund: {
    en: ["Refund Policy | QwickSite", "Terms and conditions for QwickSite refunds and cancellations."],
    ar: ["سياسة الاسترداد | QwickSite", "شروط وأحكام الاسترداد والإلغاء في QwickSite."],
  },
  "cookie-policy": {
    en: ["Cookie Policy | QwickSite", "How QwickSite uses cookies and similar technologies."],
    ar: ["سياسة ملفات تعريف الارتباط | QwickSite", "كيفية استخدام QwickSite للكوكيز والتقنيات المشابهة."],
  },
  licenses: {
    en: ["Licenses | QwickSite", "Third-party software and licensing information used by QwickSite."],
    ar: ["التراخيص | QwickSite", "معلومات البرامج الخارجية والتراخيص المستخدمة في QwickSite."],
  },
  "data-deletion": {
    en: ["Data Deletion Instructions | QwickSite", "How to request deletion of your personal data from QwickSite."],
    ar: ["تعليمات حذف البيانات | QwickSite", "كيفية طلب حذف بياناتك الشخصية من QwickSite."],
  },
} satisfies Record<string, Record<AppLocale, [string, string]>>;

export function createLegalMetadata(locale: AppLocale, slug: keyof typeof legalSeo): Metadata {
  const [title, description] = legalSeo[slug][locale];
  return createPageMetadata({ locale, path: `/${slug}`, title, description });
}
