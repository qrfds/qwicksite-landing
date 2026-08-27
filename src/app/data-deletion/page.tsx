import LegalPage from "@/components/legal/LegalPage";
import { getLocale } from "next-intl/server";

const sections = [
  {
    title: "1. Data We May Store",
    paragraphs: [
      "Depending on how you use Qwicksite (as a merchant using our platform, or as a customer interacting with a merchant's store, including via Instagram/Facebook chat-commerce features), we may store:",
    ],
    bullets: [
      "Account information (name, email address, business details)",
      "Store, product, and order data",
      "Chat conversation data from connected Instagram/Facebook integrations (e.g. message history, sender ID, order status linked to a conversation)",
      "Payment-related metadata (we do not store full card numbers; payments are processed by our payment providers)",
    ],
  },
  {
    title: "2. How to Request Deletion of Your Data",
    paragraphs: [
      "To request that we delete your personal data from Qwicksite's systems, please send an email to info@qrfds.com with the subject line \"Data Deletion Request\", including:",
    ],
    bullets: [
      "Your full name and the email address associated with your account (or the Instagram/Facebook username, if your request relates to chat data)",
      "A description of the data you would like deleted",
    ],
    concludingParagraphs: [
      "We will verify your request and confirm deletion within 30 days. Some data may be retained for a limited period where required for legal, accounting, or fraud prevention purposes, after which it will be permanently deleted.",
    ],
  },
  {
    title: "3. Removing Instagram/Facebook Access",
    paragraphs: [
      "If you connected your Instagram or Facebook account to a Qwicksite-powered store, you can revoke that connection at any time from your Meta account:",
    ],
    steps: [
      "Go to your Instagram or Facebook account settings",
      "Open \"Apps and Websites\" (or \"Business Integrations\")",
      "Find \"Qwicksite\" and select \"Remove\"",
    ],
    concludingParagraphs: [
      "Removing access stops any future data sharing with Qwicksite. To also delete data already collected, please submit a request as described in Section 2 above.",
    ],
  },
  {
    title: "4. Contact",
    paragraphs: [
      "For any questions about this policy or your data, contact us at info@qrfds.com.",
    ],
  },
];

export default async function DataDeletionPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  const localizedSections = isArabic
    ? [
        {
          title: "1. البيانات التي قد نحتفظ بها",
          paragraphs: [
            "اعتماداً على كيفية استخدامك لـ Qwicksite (سواء بصفتك تاجراً يستخدم منصتنا، أو عميلاً يتفاعل مع متجر أحد التجار، بما في ذلك عبر ميزات التجارة بالمحادثة في Instagram/Facebook)، قد نحتفظ بما يلي:",
          ],
          bullets: [
            "معلومات الحساب (الاسم وعنوان البريد الإلكتروني وبيانات النشاط التجاري)",
            "بيانات المتجر والمنتجات والطلبات",
            "بيانات المحادثات من عمليات تكامل Instagram/Facebook المتصلة (مثل سجل الرسائل ومعرّف المرسل وحالة الطلب المرتبطة بالمحادثة)",
            "البيانات الوصفية المتعلقة بالدفع (لا نحتفظ بأرقام البطاقات كاملة؛ إذ يعالج مزودو خدمات الدفع لدينا عمليات الدفع)",
          ],
        },
        {
          title: "2. كيفية طلب حذف بياناتك",
          paragraphs: [
            "لطلب حذف بياناتك الشخصية من أنظمة Qwicksite، يرجى إرسال رسالة بريد إلكتروني إلى info@qrfds.com بعنوان \"طلب حذف البيانات\"، على أن تتضمن:",
          ],
          bullets: [
            "اسمك الكامل وعنوان البريد الإلكتروني المرتبط بحسابك (أو اسم المستخدم على Instagram/Facebook إذا كان طلبك يتعلق ببيانات المحادثة)",
            "وصفاً للبيانات التي ترغب في حذفها",
          ],
          concludingParagraphs: [
            "سنتحقق من طلبك ونؤكد الحذف خلال 30 يوماً. قد نحتفظ ببعض البيانات لفترة محدودة إذا كان ذلك مطلوباً لأغراض قانونية أو محاسبية أو لمنع الاحتيال، وبعدها ستُحذف نهائياً.",
          ],
        },
        {
          title: "3. إلغاء وصول Instagram/Facebook",
          paragraphs: [
            "إذا ربطت حسابك على Instagram أو Facebook بمتجر يعمل بواسطة Qwicksite، فيمكنك إلغاء هذا الربط في أي وقت من حسابك على Meta:",
          ],
          steps: [
            "انتقل إلى إعدادات حسابك على Instagram أو Facebook",
            "افتح \"التطبيقات ومواقع الويب\" (أو \"عمليات التكامل مع الأنشطة التجارية\")",
            "ابحث عن \"Qwicksite\" واختر \"إزالة\"",
          ],
          concludingParagraphs: [
            "يؤدي إلغاء الوصول إلى إيقاف أي مشاركة مستقبلية للبيانات مع Qwicksite. ولحذف البيانات التي جُمعت بالفعل أيضاً، يرجى تقديم طلب كما هو موضح في القسم 2 أعلاه.",
          ],
        },
        {
          title: "4. التواصل",
          paragraphs: [
            "لأي أسئلة حول هذه السياسة أو بياناتك، تواصل معنا عبر info@qrfds.com.",
          ],
        },
      ]
    : sections;

  return (
    <LegalPage
      slug="data-deletion"
      title={isArabic ? "تعليمات حذف البيانات" : "Data Deletion Instructions"}
      subtitle={
        isArabic
          ? "تدير شركة QRFDS منصة Qwicksite (ويُشار إليها بضمائر \"نحن\" أو \"لنا\"). توضح هذه الصفحة كيفية طلب حذف بياناتك الشخصية، بما في ذلك أي بيانات مرتبطة من خلال عمليات تكامل جهات خارجية مثل Instagram أو تسجيل الدخول باستخدام Facebook."
          : 'Qwicksite ("we", "us", "our") is operated by QRFDS. This page explains how you can request the deletion of your personal data, including any data connected through third-party integrations such as Instagram or Facebook Login.'
      }
      lastUpdated={isArabic ? "26 أغسطس 2026" : "August 26, 2026"}
      sections={localizedSections}
      badgeLabel={isArabic ? "قانوني" : "Legal"}
      lastUpdatedLabel={isArabic ? "آخر تحديث" : "Last updated"}
    />
  );
}
