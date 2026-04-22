import LegalPage from "@/components/legal/LegalPage";
import { getLocale } from "next-intl/server";

const sections = [
  {
    title: "Overview",
    paragraphs: [
      "This policy outlines our approach to refunds and cancellations for QwickSite subscription services.",
      "We aim to provide fair and transparent policies while maintaining the sustainability of our platform.",
    ],
  },
  {
    title: "Cancellation Policy",
    bullets: [
      "You may cancel your subscription at any time from your account settings.",
      "Cancellation takes effect at the end of your current billing period.",
      "You will continue to have access to paid features until the end of the billing cycle.",
      "No cancellation fees or penalties apply.",
      "Upon cancellation, your websites will enter read-only mode, and you can export your data.",
    ],
  },
  {
    title: "Refund Policy",
    bullets: [
      "Full refunds are available within 7 days of initial purchase for new subscribers.",
      "Refunds are processed within 5-10 business days to the original payment method.",
      "Subscription renewals are non-refundable unless required by applicable law.",
      "Partial refunds may be considered for documented technical issues that significantly impaired service.",
      "Refund requests must be submitted through support@qrfds.com with account details and reason.",
    ],
  },
  {
    title: "Non-Refundable Situations",
    bullets: [
      "Subscriptions canceled after the 7-day initial period.",
      "Downgrades from a higher-tier plan to a lower-tier plan.",
      "Unused time remaining on a subscription after cancellation.",
      "Services terminated due to violation of Terms of Service.",
      "Third-party integrations or add-ons purchased separately.",
    ],
  },
  {
    title: "Plan Changes",
    paragraphs: [
      "When upgrading to a higher-tier plan, the new rate applies immediately with prorated billing.",
      "When downgrading to a lower-tier plan, the change takes effect at the next billing cycle.",
      "No refunds are provided for price differences when downgrading mid-cycle.",
    ],
  },
  {
    title: "Account Deletion and Data",
    paragraphs: [
      "Upon account deletion, all your data including websites and content will be permanently removed after a 30-day grace period.",
      "You may request a data export before account deletion through support@qrfds.com.",
      "Data recovery after the grace period is not possible.",
    ],
  },
  {
    title: "Disputes and Chargebacks",
    paragraphs: [
      "If you have billing concerns, please contact us directly before initiating a chargeback.",
      "We reserve the right to suspend accounts with active chargebacks pending resolution.",
      "Fraudulent chargebacks may result in permanent account termination.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "For refund requests or cancellation assistance, contact us at support@qrfds.com.",
      "Please include your account email and subscription details in your request.",
    ],
  },
];

export default async function RefundPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  const localizedSections = isArabic
    ? [
        {
          title: "نظرة عامة",
          paragraphs: [
            "توضح هذه السياسة نهجنا في الاستردادات والإلغاءات لخدمات الاشتراك في QwickSite.",
            "نسعى لتقديم سياسات عادلة وشفافة مع الحفاظ على استدامة منصتنا.",
          ],
        },
        {
          title: "سياسة الإلغاء",
          bullets: [
            "يمكنك إلغاء اشتراكك في أي وقت من إعدادات حسابك.",
            "يسري الإلغاء في نهاية فترة الفوترة الحالية.",
            "ستستمر في الوصول إلى الميزات المدفوعة حتى نهاية دورة الفوترة.",
            "لا توجد رسوم أو عقوبات على الإلغاء.",
            "عند الإلغاء، ستنتقل مواقعك إلى وضع القراءة فقط، ويمكنك تصدير بياناتك.",
          ],
        },
        {
          title: "سياسة الاسترداد",
          bullets: [
            "الاسترداد الكامل متاح خلال 7 أيام من الشراء الأولي للمشتركين الجدد.",
            "تتم معالجة الاستردادات خلال 5-10 أيام عمل إلى طريقة الدفع الأصلية.",
            "تجديدات الاشتراك غير قابلة للاسترداد ما لم يقتضي القانون خلاف ذلك.",
            "قد يُنظر في الاستردادات الجزبية للمشكلات التقنية الموثقة التي أثرت بشكل كبير على الخدمة.",
            "يجب تقديم طلبات الاسترداد عبر support@qrfds.com مع تفاصيل الحساب والسبب.",
          ],
        },
        {
          title: "حالات عدم الاسترداد",
          bullets: [
            "الاشتراكات الملغاة بعد فترة الـ 7 أيام الأولى.",
            "الانتقال من خطة أعلى إلى خطة أقل.",
            "الوقت غير المستخدم المتبقي على الاشتراك بعد الإلغاء.",
            "الخدمات المُنهاة بسبب مخالفة شروط الاستخدام.",
            "التكاملات أو الإضافات الخارجية المشتراة بشكل منفصل.",
          ],
        },
        {
          title: "تغييرات الخطة",
          paragraphs: [
            "عند الترقية إلى خطة أعلى، يُطبق السعر الجديد فوراً مع فوترة نسبية.",
            "عند الانتقال إلى خطة أقل، يسري التغيير في دورة الفوترة التالية.",
            "لا يوجد استرداد لفروق الأسعار عند الانتقال لخطة أقل في منتصف الدورة.",
          ],
        },
        {
          title: "حذف الحساب والبيانات",
          paragraphs: [
            "عند حذف الحساب، ستُزال جميع بياناتك بما في ذلك المواقع والمحتوى بشكل دائم بعد فترة سماح مدتها 30 يوماً.",
            "يمكنك طلب تصدير البيانات قبل حذف الحساب عبر support@qrfds.com.",
            "استعادة البيانات بعد فترة السماح غير ممكنة.",
          ],
        },
        {
          title: "النزاعات والسحب البنكي",
          paragraphs: [
            "إذا كانت لديك مخاوف تتعلق بالفوترة، يرجى التواصل معنا مباشرة قبل بدء السحب البنكي.",
            "نحتفظ بالحق في تعليق الحسابات التي لديها سحوبات بنكية نشطة في انتظار الحل.",
            "السحوبات البنكية الاحتيالية قد تؤدي إلى إنهاء الحساب نهائياً.",
          ],
        },
        {
          title: "التواصل",
          paragraphs: [
            "لطلبات الاسترداد أو مساعدة الإلغاء، تواصل معنا عبر support@qrfds.com.",
            "يرجى تضمين بريد حسابك وتفاصيل الاشتراك في طلبك.",
          ],
        },
      ]
    : sections;

  return (
    <LegalPage
      title={isArabic ? "سياسة الاسترداد والإلغاء" : "Refund and Cancellation Policy"}
      subtitle={
        isArabic
          ? "شروط وأحكام الاستردادات والإلغاءات."
          : "Terms and conditions for refunds and cancellations."
      }
      lastUpdated="April 9, 2026"
      sections={localizedSections}
      badgeLabel={isArabic ? "قانوني" : "Legal"}
      lastUpdatedLabel={isArabic ? "آخر تحديث" : "Last updated"}
    />
  );
}
