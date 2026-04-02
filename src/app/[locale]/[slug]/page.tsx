import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

type StaticPageConfig = {
  title: string;
  subtitle: string;
  description: string;
  body: string;
};

const staticPages: Record<string, Record<"en" | "ar", StaticPageConfig>> = {
  features: {
    en: {
      title: "Features",
      subtitle: "Build faster with AI",
      description:
        "QwickSite gives you AI generation, visual editing, and e-commerce tools so you can launch quickly and keep improving.",
      body: "Compare core capabilities, see practical use-cases, and pick the feature set that fits your growth stage.",
    },
    ar: {
      title: "المزايا",
      subtitle: "أنشئ أسرع بالذكاء الاصطناعي",
      description:
        "يوفر QwickSite إنشاءً بالذكاء الاصطناعي وتحريراً بصرياً وأدوات تجارة إلكترونية لتطلق موقعك بسرعة وتواصل تحسينه.",
      body: "استعرض القدرات الأساسية وحالات الاستخدام العملية واختر المزايا الأنسب لمرحلة نمو نشاطك.",
    },
  },
  templates: {
    en: {
      title: "Templates",
      subtitle: "Start from proven layouts",
      description:
        "Explore ready-to-use templates designed for stores, services, and personal brands, then customize everything in minutes.",
      body: "Choose a layout designed for your business model, then tailor sections, colors, and content to match your brand.",
    },
    ar: {
      title: "القوالب",
      subtitle: "ابدأ بتصميمات مجربة",
      description:
        "استعرض قوالب جاهزة للمتاجر والخدمات والعلامات الشخصية، ثم خصص كل التفاصيل خلال دقائق.",
      body: "اختر قالباً مناسباً لنشاطك، ثم عدل الأقسام والألوان والمحتوى بما يعكس هوية علامتك.",
    },
  },
  examples: {
    en: {
      title: "Examples",
      subtitle: "See what is possible",
      description:
        "Browse real layout and design examples to understand how businesses use QwickSite to convert visitors into customers.",
      body: "Review real examples to spot proven structures and messaging patterns you can apply to your own pages.",
    },
    ar: {
      title: "أمثلة",
      subtitle: "اكتشف الإمكانيات",
      description:
        "تصفح أمثلة تصميم حقيقية لتفهم كيف تستخدم الشركات QwickSite لتحويل الزوار إلى عملاء.",
      body: "تصفح نماذج حقيقية لتتعرف على البنية والرسائل التي ترفع التحويل ويمكن تطبيقها مباشرة على موقعك.",
    },
  },
  about: {
    en: {
      title: "About",
      subtitle: "Why QwickSite exists",
      description:
        "We help founders and teams go live without technical complexity, so they can focus on product, marketing, and growth.",
      body: "Learn our mission, product vision, and how we are building faster website operations for modern teams.",
    },
    ar: {
      title: "من نحن",
      subtitle: "لماذا أطلقنا QwickSite",
      description:
        "نساعد رواد الأعمال والفرق على الإطلاق بدون تعقيد تقني ليركزوا على المنتج والتسويق والنمو.",
      body: "تعرّف على رسالتنا ورؤيتنا للمنتج وكيف نبني تجربة أسرع لإطلاق وإدارة المواقع للشركات الحديثة.",
    },
  },
  blog: {
    en: {
      title: "Blog",
      subtitle: "Guides and product updates",
      description:
        "Read practical growth tips, website best practices, and updates from the QwickSite team.",
      body: "Stay current with launch playbooks, conversion tactics, and product updates you can implement immediately.",
    },
    ar: {
      title: "المدونة",
      subtitle: "أدلة وتحديثات المنتج",
      description:
        "اقرأ نصائح عملية للنمو وأفضل ممارسات المواقع وآخر تحديثات فريق QwickSite.",
      body: "تابع أدلة الإطلاق وتكتيكات رفع التحويل وتحديثات المنتج التي يمكنك تطبيقها مباشرة.",
    },
  },
  careers: {
    en: {
      title: "Careers",
      subtitle: "Build with us",
      description:
        "Join a team focused on making website creation faster, smarter, and more accessible for businesses worldwide.",
      body: "Explore open roles and help us build the next generation of AI-powered website tools for global markets.",
    },
    ar: {
      title: "الوظائف",
      subtitle: "انضم إلى فريقنا",
      description:
        "كن جزءاً من فريق يهدف لجعل إنشاء المواقع أسرع وأذكى وأسهل للشركات في كل مكان.",
      body: "اطلع على الفرص المتاحة وشاركنا بناء الجيل القادم من أدوات إنشاء المواقع بالذكاء الاصطناعي.",
    },
  },
  contact: {
    en: {
      title: "Contact",
      subtitle: "Talk to our team",
      description:
        "Questions about onboarding, sales, or integrations? Reach out and we will get back to you as soon as possible.",
      body: "Share your use-case, timeline, and goals so our team can recommend the best setup for your business.",
    },
    ar: {
      title: "تواصل معنا",
      subtitle: "تحدث مع فريقنا",
      description:
        "للاستفسار عن الاشتراك أو المبيعات أو التكاملات، تواصل معنا وسنرد عليك في أقرب وقت.",
      body: "شاركنا نوع نشاطك وأهدافك الزمنية لنقترح عليك الإعداد الأنسب لتحقيق نتائج أسرع.",
    },
  },
  "help-center": {
    en: {
      title: "Help Center",
      subtitle: "Find quick answers",
      description:
        "Get step-by-step support for setup, billing, domains, and troubleshooting all in one place.",
      body: "Find quick solutions for onboarding, billing, domain setup, and common technical questions.",
    },
    ar: {
      title: "مركز المساعدة",
      subtitle: "اعثر على إجابات سريعة",
      description:
        "احصل على دعم خطوة بخطوة للإعداد والفوترة والنطاقات وحل المشكلات من مكان واحد.",
      body: "اعثر على حلول سريعة للإعداد والفوترة وربط النطاقات وأكثر الأسئلة التقنية شيوعاً.",
    },
  },
  documentation: {
    en: {
      title: "Documentation",
      subtitle: "Developer and user docs",
      description:
        "Learn how to configure your site, connect services, and get the most out of QwickSite features.",
      body: "Access implementation guides, setup references, and best practices for using the platform effectively.",
    },
    ar: {
      title: "التوثيق",
      subtitle: "توثيق للمستخدمين والمطورين",
      description:
        "تعرّف على كيفية إعداد موقعك وربط الخدمات والاستفادة القصوى من مزايا QwickSite.",
      body: "اطلع على أدلة التنفيذ ومرجع الإعداد وأفضل الممارسات لتحقيق أقصى استفادة من المنصة.",
    },
  },
  "api-reference": {
    en: {
      title: "API Reference",
      subtitle: "Integrate QwickSite",
      description:
        "View endpoint details, request formats, and implementation notes for integrating with the QwickSite API.",
      body: "Browse endpoint behavior, payload formats, and integration examples for faster engineering delivery.",
    },
    ar: {
      title: "مرجع API",
      subtitle: "تكامل مع QwickSite",
      description:
        "اطّلع على تفاصيل النقاط الطرفية وصيغ الطلبات وملاحظات التكامل مع واجهة QwickSite.",
      body: "استعرض سلوك النقاط الطرفية وصيغ البيانات وأمثلة التكامل لتسريع التنفيذ لدى فريقك.",
    },
  },
  status: {
    en: {
      title: "Status",
      subtitle: "Service health updates",
      description:
        "Monitor platform uptime and incident updates to stay informed about service availability.",
      body: "Track real-time uptime, incident timelines, and maintenance notices for transparent operational visibility.",
    },
    ar: {
      title: "حالة الخدمة",
      subtitle: "تحديثات جاهزية المنصة",
      description:
        "تابع توفر المنصة والتحديثات المتعلقة بالأعطال لتبقى على اطلاع دائم.",
      body: "تابع جاهزية الخدمة لحظياً وجدول الأعطال والتنبيهات المخطط لها بشفافية كاملة.",
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy",
      subtitle: "Your data and your rights",
      description:
        "Learn what data we collect, how we process it, and which controls you have over your information.",
      body: "Review how we handle personal data, what controls you have, and how to contact us for privacy requests.",
    },
    ar: {
      title: "سياسة الخصوصية",
      subtitle: "بياناتك وحقوقك",
      description:
        "تعرّف على البيانات التي نجمعها وكيف نعالجها وما هي صلاحياتك للتحكم في معلوماتك.",
      body: "راجع طريقة تعاملنا مع البيانات الشخصية وحقوقك في التحكم وكيفية التواصل لطلبات الخصوصية.",
    },
  },
  terms: {
    en: {
      title: "Terms of Service",
      subtitle: "Platform usage terms",
      description:
        "Review the terms and responsibilities that apply when using QwickSite products and services.",
      body: "Read platform usage conditions, account responsibilities, and legal terms that govern your subscription.",
    },
    ar: {
      title: "شروط الاستخدام",
      subtitle: "ضوابط استخدام المنصة",
      description:
        "راجع الشروط والمسؤوليات المطبقة عند استخدام منتجات وخدمات QwickSite.",
      body: "اطّلع على شروط الاستخدام ومسؤوليات الحساب والبنود القانونية التي تنظّم اشتراكك.",
    },
  },
  "cookie-policy": {
    en: {
      title: "Cookie Policy",
      subtitle: "How cookies are used",
      description:
        "Understand the cookies and tracking technologies used to improve performance, analytics, and personalization.",
      body: "See which cookies we use, why we use them, and how you can manage cookie preferences in your browser.",
    },
    ar: {
      title: "سياسة الكوكيز",
      subtitle: "كيف نستخدم ملفات تعريف الارتباط",
      description:
        "افهم كيف نستخدم الكوكيز وتقنيات التتبع لتحسين الأداء والتحليلات والتخصيص.",
      body: "تعرّف على أنواع الكوكيز التي نستخدمها وأسباب استخدامها وكيفية التحكم بها من متصفحك.",
    },
  },
  licenses: {
    en: {
      title: "Licenses",
      subtitle: "Open-source attributions",
      description:
        "Review third-party licenses and attribution information for technologies used in QwickSite.",
      body: "View open-source license categories and attribution details for the third-party technologies we rely on.",
    },
    ar: {
      title: "التراخيص",
      subtitle: "إشعارات المصادر المفتوحة",
      description:
        "راجع تراخيص الأطراف الثالثة ومعلومات الإسناد للتقنيات المستخدمة في QwickSite.",
      body: "اطلع على فئات تراخيص المصادر المفتوحة وتفاصيل الإسناد للتقنيات الخارجية المستخدمة في المنصة.",
    },
  },
};

const reservedSlugs = new Set(["features", "privacy", "terms", "cookie-policy", "licenses"]);

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    Object.keys(staticPages)
      .filter((slug) => !reservedSlugs.has(slug))
      .map((slug) => ({ locale, slug })),
  );
}

export default async function LocalizedStaticContentPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  if (reservedSlugs.has(slug)) {
    notFound();
  }

  const pageConfigByLocale = staticPages[slug];
  const localeKey: "en" | "ar" = locale === "ar" ? "ar" : "en";
  const pageConfig = pageConfigByLocale?.[localeKey];
  if (!pageConfig) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <section className="container">
          <div className="max-w-3xl mx-auto text-center space-y-5 mb-10">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-card/40 border-primary/30">
              {pageConfig.subtitle}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{pageConfig.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{pageConfig.description}</p>
          </div>

          <div className="max-w-2xl mx-auto rounded-2xl border border-border/60 bg-card/50 p-8 text-center">
            <p className="text-muted-foreground mb-6">{pageConfig.body}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild variant="hero">
                <Link href="/">{locale === "ar" ? "العودة للرئيسية" : "Go to Home"}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/support">{locale === "ar" ? "تواصل مع الدعم" : "Contact Support"}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
