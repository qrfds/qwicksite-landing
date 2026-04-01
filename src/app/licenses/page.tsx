import LegalPage from "@/components/legal/LegalPage";
import { getLocale } from "next-intl/server";

const sections = [
  {
    title: "Open-Source Software Notice",
    paragraphs: [
      "QwickSite uses open-source software components in its application and infrastructure.",
      "Each component remains subject to its own license terms. This page summarizes key categories and attribution obligations.",
    ],
  },
  {
    title: "Primary Frontend and Platform Dependencies",
    bullets: [
      "Next.js, React, and related ecosystem libraries.",
      "Tailwind CSS and UI utility packages.",
      "Radix UI components and accessibility primitives.",
      "Icon and animation libraries used in the interface.",
    ],
  },
  {
    title: "License Types in Use",
    bullets: [
      "MIT License",
      "Apache License 2.0",
      "BSD-style licenses",
      "Other permissive licenses bundled by specific dependencies",
    ],
  },
  {
    title: "Attribution and Compliance",
    paragraphs: [
      "We maintain dependency records through package management lockfiles and preserve copyright notices where required.",
      "Where a dependency license requires attribution, the relevant notices are retained in source distributions and/or accompanying documentation.",
    ],
  },
  {
    title: "How to Request Full Attribution List",
    paragraphs: [
      "To request a complete third-party attribution list for a specific release, contact support@qrfds.com and include your release version or deployment date.",
    ],
  },
];

export default async function LicensesPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  const localizedSections = isArabic
    ? [
        {
          title: "إشعار البرامج مفتوحة المصدر",
          paragraphs: [
            "يستخدم QwickSite مكونات برمجية مفتوحة المصدر ضمن التطبيق والبنية التحتية.",
            "كل مكوّن يخضع لشروط ترخيصه الخاصة. وتلخص هذه الصفحة الفئات الرئيسية ومتطلبات الإسناد.",
          ],
        },
        {
          title: "أهم الاعتمادات التقنية",
          bullets: [
            "Next.js وReact ومكتبات النظام البيئي المرتبطة.",
            "Tailwind CSS وحزم الواجهة المساعدة.",
            "مكونات Radix UI وعناصر الوصول.",
            "مكتبات الأيقونات والحركة المستخدمة في الواجهة.",
          ],
        },
        {
          title: "أنواع التراخيص المستخدمة",
          bullets: [
            "MIT License",
            "Apache License 2.0",
            "BSD-style licenses",
            "تراخيص مرنة أخرى تتضمنها بعض الاعتمادات",
          ],
        },
        {
          title: "الإسناد والامتثال",
          paragraphs: [
            "نحتفظ بسجلات الاعتمادات عبر ملفات القفل الخاصة بمدير الحزم ونحافظ على إشعارات حقوق النشر عند الحاجة.",
            "عند تطلب أي ترخيص للإسناد، يتم حفظ الإشعارات ذات الصلة ضمن توزيعات المصدر و/أو الوثائق المصاحبة.",
          ],
        },
        {
          title: "طلب قائمة إسناد كاملة",
          paragraphs: [
            "لطلب قائمة كاملة بمكونات الطرف الثالث لإصدار محدد، تواصل معنا عبر support@qrfds.com مع ذكر رقم الإصدار أو تاريخ النشر.",
          ],
        },
      ]
    : sections;

  return (
    <LegalPage
      title={isArabic ? "التراخيص" : "Licenses"}
      subtitle={
        isArabic
          ? "معلومات البرامج الخارجية والتراخيص المستخدمة في QwickSite."
          : "Third-party software and licensing information used by QwickSite."
      }
      lastUpdated="March 27, 2026"
      sections={localizedSections}
      badgeLabel={isArabic ? "قانوني" : "Legal"}
      lastUpdatedLabel={isArabic ? "آخر تحديث" : "Last updated"}
    />
  );
}
