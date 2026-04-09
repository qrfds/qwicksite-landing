import LegalPage from "@/components/legal/LegalPage";
import { getLocale } from "next-intl/server";

const sections = [
  {
    title: "Overview",
    paragraphs: [
      "QwickSite is a digital platform providing website building services. This policy outlines our approach to service delivery and account management.",
      "As a digital service provider, we do not ship physical products. This policy governs how we deliver and manage our subscription-based services.",
    ],
  },
  {
    title: "Service Delivery",
    bullets: [
      "Account activation occurs immediately upon successful registration and payment confirmation.",
      "Access to all purchased features and tools is granted instantly through your dashboard.",
      "You will receive a confirmation email with login details and getting started guides.",
      "Technical support is available through our help center and email support channels.",
    ],
  },
  {
    title: "Service Availability",
    paragraphs: [
      "We strive to maintain 99.9% uptime for our platform. Scheduled maintenance is communicated in advance via email and dashboard notifications.",
      "Service updates and new features are deployed automatically to ensure you always have access to the latest improvements.",
    ],
  },
  {
    title: "Account Management",
    bullets: [
      "You can upgrade, downgrade, or modify your subscription at any time from your account settings.",
      "Plan changes take effect immediately, with prorated billing adjustments applied automatically.",
      "Service notifications and billing receipts are delivered to your registered email address.",
    ],
  },
  {
    title: "Digital Deliverables",
    paragraphs: [
      "All templates, themes, and assets provided through QwickSite are delivered digitally through your account dashboard.",
      "You retain access to your created websites and content for the duration of your active subscription.",
      "Export functionality is available for you to download your website content and data at any time.",
    ],
  },
  {
    title: "Support Response Times",
    bullets: [
      "General inquiries: Response within 24-48 business hours.",
      "Technical issues: Initial response within 12-24 business hours.",
      "Critical platform issues: Prioritized handling with dedicated support channels.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "For questions about service delivery or account management, contact us at support@qrfds.com.",
    ],
  },
];

export default async function DeliveryPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  const localizedSections = isArabic
    ? [
        {
          title: "نظرة عامة",
          paragraphs: [
            "QwickSite منصة رقمية تقدم خدمات إنشاء المواقع. توضح هذه السياسة نهجنا في تقديم الخدمة وإدارة الحسابات.",
            "بصفتنا مزود خدمة رقمية، لا نقوم بشحن منتجات مادية. هذه السياسة تنظم كيفية تقديم وإدارة خدماتنا المبنية على الاشتراكات.",
          ],
        },
        {
          title: "تقديم الخدمة",
          bullets: [
            "يتم تفعيل الحساب فوراً عند التسجيل الناجح وتأكيد الدفع.",
            "يتم منح الوصول إلى جميع الميزات والأدوات المشتراة فوراً عبر لوحة التحكم.",
            "ستتلقى بريداً إلكترونياً تأكيدياً يحتوي على بيانات تسجيل الدخول وأدلة البدء.",
            "الدعم الفني متاح عبر مركز المساعدة وقنوات الدعم عبر البريد الإلكتروني.",
          ],
        },
        {
          title: "توفر الخدمة",
          paragraphs: [
            "نسعى للحفاظ على توفر بنسبة 99.9% لمنصتنا. يتم الإعلان عن الصيانة المجدولة مسبقاً عبر البريد الإلكتروني وإشعارات لوحة التحكم.",
            "يتم نشر تحديثات الخدمة والميزات الجديدة تلقائياً لضمان حصولك دائماً على أحدث التحسينات.",
          ],
        },
        {
          title: "إدارة الحساب",
          bullets: [
            "يمكنك ترقية أو تخفيض أو تعديل اشتراكك في أي وقت من إعدادات حسابك.",
            "تسري تغييرات الخطة فوراً، مع تعديلات الفوترة النسبية المطبقة تلقائياً.",
            "يتم إرسال إشعارات الخدمة وإيصالات الدفع إلى بريدك الإلكتروني المسجل.",
          ],
        },
        {
          title: "المحتوى الرقمي",
          paragraphs: [
            "جميع القوالب والسمات والأصول المقدمة عبر QwickSite يتم تسليمها رقمياً عبر لوحة تحكم حسابك.",
            "تحتفظ بإمكانية الوصول إلى مواقعك ومحتواك طوال مدة اشتراكك النشط.",
            "تتوفر وظيفة التصدير لتحميل محتوى موقعك وبياناتك في أي وقت.",
          ],
        },
        {
          title: "أوقات استجابة الدعم",
          bullets: [
            "الاستفسارات العامة: الرد خلال 24-48 ساعة عمل.",
            "المشكلات التقنية: الرد الأولي خلال 12-24 ساعة عمل.",
            "المشكلات الحرجة للمنصة: معالجة ذات أولوية مع قنوات دعم مخصصة.",
          ],
        },
        {
          title: "التواصل",
          paragraphs: [
            "للاستفسارات حول تقديم الخدمة أو إدارة الحساب، تواصل معنا عبر support@qrfds.com.",
          ],
        },
      ]
    : sections;

  return (
    <LegalPage
      title={isArabic ? "سياسة التوصيل والشحن" : "Delivery and Shipping Policy"}
      subtitle={
        isArabic
          ? "كيف نقدم خدماتنا وندير حسابك."
          : "How we deliver our services and manage your account."
      }
      lastUpdated="April 9, 2026"
      sections={localizedSections}
      badgeLabel={isArabic ? "قانوني" : "Legal"}
      lastUpdatedLabel={isArabic ? "آخر تحديث" : "Last updated"}
    />
  );
}
