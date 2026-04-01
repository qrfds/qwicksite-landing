import LegalPage from "@/components/legal/LegalPage";
import { getLocale } from "next-intl/server";

const sections = [
  {
    title: "Who We Are",
    paragraphs: [
      "QwickSite is a website-building platform operated by QRFDS. This Privacy Policy explains how we collect, use, disclose, and protect personal information when you use our website, products, and services.",
      "If you have privacy questions, you can contact us at support@qrfds.com.",
    ],
  },
  {
    title: "Information We Collect",
    bullets: [
      "Account data such as your name, email address, company name, and login credentials.",
      "Billing data such as subscription plan, payment status, and transaction metadata provided by our payment processors.",
      "Usage data such as pages visited, actions performed, browser type, device identifiers, and performance logs.",
      "Content data you upload or publish, including text, images, and settings for your website.",
      "Support data from messages, tickets, and attachments you send to our team.",
    ],
  },
  {
    title: "How We Use Information",
    bullets: [
      "Provide, maintain, and secure the QwickSite platform.",
      "Process subscriptions, invoices, and payment-related operations.",
      "Improve product quality, reliability, and user experience.",
      "Respond to support requests and technical issues.",
      "Send essential service notices and, where allowed, product updates and marketing communications.",
      "Detect abuse, fraud, and policy violations.",
    ],
  },
  {
    title: "Legal Bases for Processing",
    paragraphs: [
      "Where required by applicable law, we process personal data based on one or more legal grounds: performance of a contract, legitimate interests, consent, and compliance with legal obligations.",
    ],
  },
  {
    title: "Sharing and Disclosure",
    paragraphs: [
      "We do not sell personal data. We may share data with service providers that support hosting, analytics, payments, customer support, and security monitoring.",
      "We may also disclose information if required by law, to enforce our Terms, or to protect our rights, users, and platform.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We retain personal information for as long as needed to provide services, meet legal obligations, resolve disputes, and enforce agreements.",
      "When retention is no longer required, we delete or anonymize the data.",
    ],
  },
  {
    title: "Your Rights",
    bullets: [
      "Request access to personal data we hold about you.",
      "Request correction of inaccurate or incomplete data.",
      "Request deletion of your personal data, subject to legal exceptions.",
      "Object to or restrict certain processing activities where applicable.",
      "Request portability of data where technically feasible.",
    ],
  },
  {
    title: "International Transfers",
    paragraphs: [
      "Your information may be processed in countries other than your own. Where required, we apply safeguards for cross-border transfers consistent with applicable data protection laws.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "To exercise privacy rights or ask a privacy-related question, contact us at support@qrfds.com.",
    ],
  },
];

export default async function PrivacyPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  const localizedSections = isArabic
    ? [
        {
          title: "من نحن",
          paragraphs: [
            "QwickSite منصة لإنشاء المواقع تديرها QRFDS. توضح هذه السياسة كيف نجمع البيانات الشخصية ونستخدمها ونحميها عند استخدامك لموقعنا وخدماتنا.",
            "لأي استفسارات تتعلق بالخصوصية يمكنك التواصل عبر support@qrfds.com.",
          ],
        },
        {
          title: "البيانات التي نجمعها",
          bullets: [
            "بيانات الحساب مثل الاسم والبريد الإلكتروني واسم الشركة وبيانات تسجيل الدخول.",
            "بيانات الفوترة مثل الخطة وحالة الدفع وبيانات العمليات من مزودي الدفع.",
            "بيانات الاستخدام مثل الصفحات التي تزورها والإجراءات التي تقوم بها ونوع المتصفح ومعرفات الجهاز وسجلات الأداء.",
            "المحتوى الذي ترفعه أو تنشره مثل النصوص والصور وإعدادات موقعك.",
            "بيانات الدعم من الرسائل والتذاكر والمرفقات التي ترسلها لفريقنا.",
          ],
        },
        {
          title: "كيف نستخدم البيانات",
          bullets: [
            "تقديم منصة QwickSite وصيانتها وتأمينها.",
            "معالجة الاشتراكات والفواتير وعمليات الدفع.",
            "تحسين جودة المنتج والاعتمادية وتجربة المستخدم.",
            "الرد على طلبات الدعم والمشكلات التقنية.",
            "إرسال إشعارات الخدمة الأساسية، وعند السماح قانونياً، تحديثات المنتج والمواد التسويقية.",
            "اكتشاف إساءة الاستخدام والاحتيال ومخالفات السياسات.",
          ],
        },
        {
          title: "الأساس القانوني للمعالجة",
          paragraphs: [
            "عند الحاجة وفق القوانين المعمول بها، نعالج البيانات بالاستناد إلى تنفيذ العقد والمصلحة المشروعة والموافقة والالتزامات القانونية.",
          ],
        },
        {
          title: "المشاركة والإفصاح",
          paragraphs: [
            "نحن لا نبيع البيانات الشخصية. وقد نشارك البيانات مع مزودي خدمات يدعمون الاستضافة والتحليلات والدفع والدعم والأمن.",
            "قد نفصح عن المعلومات إذا طُلب منا قانونياً، أو لتطبيق الشروط، أو لحماية حقوقنا ومستخدمينا والمنصة.",
          ],
        },
        {
          title: "الاحتفاظ بالبيانات",
          paragraphs: [
            "نحتفظ بالبيانات الشخصية طالما كان ذلك ضرورياً لتقديم الخدمة والوفاء بالالتزامات القانونية وحل النزاعات وتطبيق الاتفاقيات.",
            "وعند انتفاء الحاجة للاحتفاظ، نقوم بحذف البيانات أو إخفاء هويتها.",
          ],
        },
        {
          title: "حقوقك",
          bullets: [
            "طلب الوصول إلى بياناتك الشخصية التي نحتفظ بها.",
            "طلب تصحيح البيانات غير الدقيقة أو غير المكتملة.",
            "طلب حذف بياناتك الشخصية ضمن الحدود التي يسمح بها القانون.",
            "الاعتراض على بعض أنشطة المعالجة أو تقييدها عند الاقتضاء.",
            "طلب نقل البيانات عندما يكون ذلك ممكناً تقنياً.",
          ],
        },
        {
          title: "النقل الدولي للبيانات",
          paragraphs: [
            "قد تتم معالجة معلوماتك في دول أخرى غير دولتك. وعند الحاجة، نطبق الضمانات المناسبة للنقل عبر الحدود بما يتوافق مع قوانين حماية البيانات.",
          ],
        },
        {
          title: "التواصل",
          paragraphs: [
            "لممارسة حقوق الخصوصية أو للاستفسارات المتعلقة بها، تواصل معنا عبر support@qrfds.com.",
          ],
        },
      ]
    : sections;

  return (
    <LegalPage
      title={isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
      subtitle={
        isArabic
          ? "كيف يجمع QwickSite معلوماتك ويستخدمها ويحميها."
          : "How QwickSite collects, uses, and protects your information."
      }
      lastUpdated="March 27, 2026"
      sections={localizedSections}
      badgeLabel={isArabic ? "قانوني" : "Legal"}
      lastUpdatedLabel={isArabic ? "آخر تحديث" : "Last updated"}
    />
  );
}
