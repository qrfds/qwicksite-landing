import LegalPage from "@/components/legal/LegalPage";
import { getLocale } from "next-intl/server";

const sections = [
  {
    title: "What Are Cookies",
    paragraphs: [
      "Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember preferences, and measure usage.",
    ],
  },
  {
    title: "How We Use Cookies",
    bullets: [
      "Essential cookies required for authentication, security, and core platform functionality.",
      "Performance and analytics cookies used to understand usage patterns and improve reliability.",
      "Preference cookies used to remember settings such as theme or language options.",
      "Support-related cookies used to maintain session context for help and troubleshooting.",
    ],
  },
  {
    title: "Third-Party Technologies",
    paragraphs: [
      "Some cookies and similar technologies may be set by trusted third-party providers that help us with analytics, hosting, support, and security.",
      "These providers process data under contractual obligations and applicable privacy requirements.",
    ],
  },
  {
    title: "Managing Cookies",
    bullets: [
      "Most browsers let you delete existing cookies and block future cookies.",
      "You can typically manage cookie settings through browser privacy controls.",
      "Disabling essential cookies may impact platform functionality and account access.",
    ],
  },
  {
    title: "Updates to This Policy",
    paragraphs: [
      "We may update this Cookie Policy to reflect legal, technical, or business changes. Material updates will be posted on this page with a revised date.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "If you have cookie or tracking questions, contact support@qrfds.com.",
    ],
  },
];

export default async function CookiePolicyPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  const localizedSections = isArabic
    ? [
        {
          title: "ما هي ملفات تعريف الارتباط",
          paragraphs: [
            "الكوكيز هي ملفات نصية صغيرة تُخزن على جهازك عند زيارة الموقع. تساعد على تشغيل الموقع بشكل صحيح وتذكر التفضيلات وقياس الاستخدام.",
          ],
        },
        {
          title: "كيف نستخدم الكوكيز",
          bullets: [
            "كوكيز أساسية للمصادقة والأمان والوظائف الجوهرية للمنصة.",
            "كوكيز الأداء والتحليلات لفهم أنماط الاستخدام وتحسين الاعتمادية.",
            "كوكيز التفضيلات لتذكر الإعدادات مثل السمة أو اللغة.",
            "كوكيز مرتبطة بالدعم للحفاظ على سياق الجلسة أثناء المساعدة وحل المشكلات.",
          ],
        },
        {
          title: "تقنيات الأطراف الثالثة",
          paragraphs: [
            "قد تُضبط بعض الكوكيز والتقنيات المشابهة بواسطة مزودين موثوقين يدعموننا في التحليلات والاستضافة والدعم والأمن.",
            "يعالج هؤلاء المزودون البيانات وفق التزامات تعاقدية ومتطلبات الخصوصية المعمول بها.",
          ],
        },
        {
          title: "إدارة الكوكيز",
          bullets: [
            "تتيح معظم المتصفحات حذف الكوكيز الحالية ومنع المستقبلية.",
            "يمكنك عادةً إدارة إعدادات الكوكيز من خيارات الخصوصية في المتصفح.",
            "تعطيل الكوكيز الأساسية قد يؤثر على وظائف المنصة والوصول للحساب.",
          ],
        },
        {
          title: "تحديثات هذه السياسة",
          paragraphs: [
            "قد نقوم بتحديث سياسة الكوكيز لتعكس التغييرات القانونية أو التقنية أو التشغيلية، وسيتم نشر التحديثات الجوهرية في هذه الصفحة مع تاريخ محدث.",
          ],
        },
        {
          title: "التواصل",
          paragraphs: [
            "لأي استفسار متعلق بالكوكيز أو التتبع، تواصل معنا عبر support@qrfds.com.",
          ],
        },
      ]
    : sections;

  return (
    <LegalPage
      title={isArabic ? "سياسة الكوكيز" : "Cookie Policy"}
      subtitle={
        isArabic
          ? "كيف يستخدم QwickSite ملفات تعريف الارتباط والتقنيات المشابهة."
          : "How QwickSite uses cookies and similar technologies."
      }
      lastUpdated="March 27, 2026"
      sections={localizedSections}
      badgeLabel={isArabic ? "قانوني" : "Legal"}
      lastUpdatedLabel={isArabic ? "آخر تحديث" : "Last updated"}
    />
  );
}
