import LegalPage from "@/components/legal/LegalPage";
import { getLocale } from "next-intl/server";

const sections = [
  {
    title: "Agreement to Terms",
    paragraphs: [
      "These Terms of Service govern your use of QwickSite. By accessing or using our services, you agree to be bound by these terms.",
      "If you do not agree, do not use the platform.",
    ],
  },
  {
    title: "Eligibility and Accounts",
    bullets: [
      "You must provide accurate account information and keep it up to date.",
      "You are responsible for maintaining the confidentiality of your login credentials.",
      "You are responsible for all activities that occur under your account.",
    ],
  },
  {
    title: "Subscriptions and Billing",
    bullets: [
      "Paid plans are billed on a recurring basis unless canceled before renewal.",
      "Fees are non-refundable except where required by law or explicitly stated in a written policy.",
      "We may change pricing with prior notice for future billing periods.",
      "Failure to pay may result in suspension or termination of paid features.",
    ],
  },
  {
    title: "Acceptable Use",
    bullets: [
      "Do not use QwickSite for unlawful, harmful, fraudulent, or deceptive activity.",
      "Do not upload malware, exploit vulnerabilities, or interfere with platform security.",
      "Do not infringe intellectual property or privacy rights of others.",
      "Do not attempt unauthorized access to other accounts, systems, or data.",
    ],
  },
  {
    title: "Content and Intellectual Property",
    paragraphs: [
      "You retain ownership of content you upload. You grant us a limited license to host, process, and display that content solely to provide the service.",
      "QwickSite, including software, branding, and platform materials, is owned by QRFDS and protected by applicable intellectual property laws.",
    ],
  },
  {
    title: "Service Availability",
    paragraphs: [
      "We work to keep services reliable but do not guarantee uninterrupted availability.",
      "We may modify, suspend, or discontinue features as part of product improvements, maintenance, or security operations.",
    ],
  },
  {
    title: "Termination",
    paragraphs: [
      "You may stop using the service at any time. We may suspend or terminate access for violations of these Terms, security risks, or legal requirements.",
      "Certain provisions, including payment obligations, liability limitations, and dispute-related terms, survive termination.",
    ],
  },
  {
    title: "Disclaimer and Limitation of Liability",
    paragraphs: [
      "The service is provided on an 'as is' and 'as available' basis to the maximum extent permitted by law.",
      "To the extent permitted by law, QRFDS is not liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "If you have questions about these Terms, contact support@qrfds.com.",
    ],
  },
];

export default async function TermsPage() {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  const localizedSections = isArabic
    ? [
        {
          title: "الموافقة على الشروط",
          paragraphs: [
            "تنظم شروط الاستخدام هذه استخدامك لمنصة QwickSite. باستخدامك للخدمة فإنك توافق على الالتزام بهذه الشروط.",
            "إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام المنصة.",
          ],
        },
        {
          title: "الأهلية والحسابات",
          bullets: [
            "يجب تقديم معلومات حساب دقيقة وتحديثها بشكل مستمر.",
            "أنت مسؤول عن الحفاظ على سرية بيانات تسجيل الدخول.",
            "أنت مسؤول عن جميع الأنشطة التي تتم عبر حسابك.",
          ],
        },
        {
          title: "الاشتراكات والفوترة",
          bullets: [
            "الخطط المدفوعة تُجدَّد تلقائياً ما لم يتم الإلغاء قبل موعد التجديد.",
            "الرسوم غير قابلة للاسترداد إلا إذا نص القانون أو سياسة مكتوبة على خلاف ذلك.",
            "قد نقوم بتعديل الأسعار مع إشعار مسبق للفترات القادمة.",
            "عدم السداد قد يؤدي إلى تعليق أو إيقاف الميزات المدفوعة.",
          ],
        },
        {
          title: "الاستخدام المقبول",
          bullets: [
            "يُمنع استخدام QwickSite في أنشطة غير قانونية أو ضارة أو احتيالية أو مضللة.",
            "يُمنع رفع البرمجيات الخبيثة أو استغلال الثغرات أو تعطيل أمن المنصة.",
            "يُمنع انتهاك حقوق الملكية الفكرية أو الخصوصية للآخرين.",
            "يُمنع محاولة الوصول غير المصرح به إلى حسابات أو أنظمة أو بيانات الآخرين.",
          ],
        },
        {
          title: "المحتوى والملكية الفكرية",
          paragraphs: [
            "تبقى ملكية المحتوى الذي ترفعه لك. وتمنحنا ترخيصاً محدوداً لاستضافة هذا المحتوى ومعالجته وعرضه فقط لتقديم الخدمة.",
            "تعود ملكية QwickSite، بما في ذلك البرمجيات والهوية والمواد، إلى QRFDS وهي محمية وفق القوانين المعمول بها.",
          ],
        },
        {
          title: "توفر الخدمة",
          paragraphs: [
            "نسعى للحفاظ على موثوقية الخدمة، لكننا لا نضمن التوفر دون انقطاع.",
            "قد نقوم بتعديل الميزات أو تعليقها أو إيقافها ضمن تحسينات المنتج أو أعمال الصيانة أو متطلبات الأمن.",
          ],
        },
        {
          title: "إنهاء الخدمة",
          paragraphs: [
            "يمكنك التوقف عن استخدام الخدمة في أي وقت. وقد نعلق أو ننهي الوصول عند مخالفة الشروط أو وجود مخاطر أمنية أو متطلبات قانونية.",
            "بعض البنود، مثل الالتزامات المالية وحدود المسؤولية وبنود النزاعات، تستمر بعد الإنهاء.",
          ],
        },
        {
          title: "إخلاء المسؤولية وحدودها",
          paragraphs: [
            "تُقدَّم الخدمة \"كما هي\" و\"حسب التوفر\" إلى أقصى حد يسمح به القانون.",
            "إلى الحد الذي يسمح به القانون، لا تتحمل QRFDS مسؤولية الأضرار غير المباشرة أو العرضية أو التبعية أو خسائر الأرباح أو البيانات أو السمعة.",
          ],
        },
        {
          title: "التواصل",
          paragraphs: [
            "إذا كان لديك أي استفسار حول هذه الشروط، تواصل معنا عبر support@qrfds.com.",
          ],
        },
      ]
    : sections;

  return (
    <LegalPage
      title={isArabic ? "شروط الاستخدام" : "Terms of Service"}
      subtitle={isArabic ? "القواعد والشروط المنظمة لاستخدام QwickSite." : "Rules and conditions for using QwickSite."}
      lastUpdated="March 27, 2026"
      sections={localizedSections}
      badgeLabel={isArabic ? "قانوني" : "Legal"}
      lastUpdatedLabel={isArabic ? "آخر تحديث" : "Last updated"}
    />
  );
}
