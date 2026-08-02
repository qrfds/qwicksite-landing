import type { AppLocale } from "@/i18n/routing";

export type MarketingPageSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type MarketingPageFaq = {
  question: string;
  answer: string;
};

export type MarketingPageContent = {
  title: string;
  eyebrow: string;
  description: string;
  introduction: string;
  sections: MarketingPageSection[];
  faqs?: MarketingPageFaq[];
};

export type MarketingPage = {
  slug: string;
  dateModified: string;
  relatedSlugs: string[];
  content: Record<AppLocale, MarketingPageContent>;
};

export const seoContentSlugs = [
  "what-is-qwicksite",
  "about",
  "history-of-qwicksite",
  "why-qwicksite-was-built",
  "ai-website-builder-egypt",
  "ai-website-builder-saudi-arabia",
  "ai-website-builder-uae",
  "ecommerce-platform-egypt",
  "ecommerce-platform-mena",
  "arabic-website-builder",
  "qwicksite-vs-shopify",
  "qwicksite-vs-wix",
  "qwicksite-vs-wordpress",
  "qwicksite-vs-zid",
  "qwicksite-vs-salla",
  "ai-store-builder",
  "online-store-builder-egypt",
  "qwicksite-not-amazon-quicksight",
] as const;

export const marketingPages: MarketingPage[] = [
  {
    slug: "templates",
    dateModified: "2026-07-25",
    relatedSlugs: ["examples", "features", "ai-store-builder"],
    content: {
      en: {
        title: "QwickSite Templates",
        eyebrow: "Start from a proven structure",
        description:
          "Explore QwickSite templates for service websites, personal brands, and online stores, then customize every section in the visual builder.",
        introduction:
          "Templates give you a useful starting point without locking your business into a fixed design. Pick the closest structure, replace the content, and refine it as your business grows.",
        sections: [
          {
            title: "Choose for the business goal",
            paragraphs: [
              "Start with the page structure that matches what visitors need to do: understand a service, browse products, contact a team, or complete an order.",
            ],
          },
          {
            title: "Make every section yours",
            paragraphs: [
              "QwickSite lets you update copy, media, colors, sections, and calls to action while keeping responsive behavior across desktop, tablet, and mobile.",
            ],
          },
        ],
      },
      ar: {
        title: "قوالب QwickSite",
        eyebrow: "ابدأ من بنية مجرّبة",
        description:
          "استكشف قوالب QwickSite لمواقع الخدمات والعلامات الشخصية والمتاجر الإلكترونية، ثم خصص كل قسم عبر المحرر البصري.",
        introduction:
          "تمنحك القوالب نقطة بداية عملية من دون تقييد نشاطك بتصميم ثابت. اختر البنية الأقرب لهدفك، واستبدل المحتوى، وطوّر الصفحة مع نمو نشاطك.",
        sections: [
          {
            title: "اختر القالب حسب هدف النشاط",
            paragraphs: [
              "ابدأ ببنية الصفحة التي تناسب ما يحتاج الزائر إلى فعله: فهم الخدمة أو تصفح المنتجات أو التواصل مع الفريق أو إكمال الطلب.",
            ],
          },
          {
            title: "خصص كل قسم",
            paragraphs: [
              "يتيح QwickSite تعديل النصوص والوسائط والألوان والأقسام ودعوات الإجراء مع الحفاظ على تجربة متجاوبة على الكمبيوتر والتابلت والجوال.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "examples",
    dateModified: "2026-07-25",
    relatedSlugs: ["templates", "features", "online-store-builder-egypt"],
    content: {
      en: {
        title: "Websites Built with QwickSite",
        eyebrow: "Real layout inspiration",
        description:
          "Review website and online store examples that show how QwickSite layouts organize content, products, and conversion paths.",
        introduction:
          "Use these examples to compare page hierarchy, product presentation, and calls to action before you build your own version.",
        sections: [
          {
            title: "Look beyond the visual style",
            paragraphs: [
              "A useful example shows how a page moves visitors from a clear promise to proof, details, and a relevant next action.",
            ],
          },
          {
            title: "Adapt instead of copying",
            paragraphs: [
              "Reuse the structure that fits your goal, then replace the message, imagery, products, and brand system with content that belongs to your business.",
            ],
          },
        ],
      },
      ar: {
        title: "مواقع مبنية عبر QwickSite",
        eyebrow: "أفكار من تصميمات حقيقية",
        description:
          "استعرض أمثلة لمواقع ومتاجر إلكترونية توضح كيف تنظم تصميمات QwickSite المحتوى والمنتجات ومسارات التحويل.",
        introduction:
          "استخدم هذه الأمثلة لمقارنة تسلسل الصفحة وطريقة عرض المنتجات ودعوات الإجراء قبل بناء نسختك الخاصة.",
        sections: [
          {
            title: "انظر إلى ما وراء الشكل",
            paragraphs: [
              "يوضح المثال الجيد كيف تنتقل الصفحة بالزائر من وعد واضح إلى دليل وتفاصيل وخطوة تالية مناسبة.",
            ],
          },
          {
            title: "طوّر الفكرة ولا تنسخها",
            paragraphs: [
              "أعد استخدام البنية المناسبة لهدفك، ثم استبدل الرسالة والصور والمنتجات ونظام الهوية بمحتوى يعبر عن نشاطك.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "what-is-qwicksite",
    dateModified: "2026-07-25",
    relatedSlugs: ["about", "features", "pricing"],
    content: {
      en: {
        title: "What Is QwickSite?",
        eyebrow: "Product overview",
        description:
          "QwickSite is an AI website builder and ecommerce platform for creating, editing, publishing, and operating business websites and online stores.",
        introduction:
          "QwickSite brings AI-assisted generation, a visual editor, reusable page components, storefront tools, and business operations into one web platform.",
        sections: [
          {
            title: "Build a website or store from one workspace",
            paragraphs: [
              "Start with an AI-generated structure or a ready layout, then edit text, images, sections, colors, and navigation without writing code.",
              "The same workspace supports public business pages and commerce experiences, so teams do not need separate tools for every stage of launch.",
            ],
          },
          {
            title: "Designed for practical business workflows",
            paragraphs: [
              "QwickSite includes responsive previews, reusable content blocks, products, checkout, order operations, multilingual content, Arabic RTL, domains, SEO metadata, and analytics support.",
            ],
          },
          {
            title: "Built for Egypt and MENA growth",
            paragraphs: [
              "The platform focuses on the needs of businesses that want to launch locally, communicate in Arabic and English, and expand their online presence across MENA.",
            ],
          },
        ],
        faqs: [
          {
            question: "Is QwickSite only an AI website builder?",
            answer:
              "No. QwickSite combines AI-assisted website creation with visual editing, reusable components, online store tools, publishing, and business operations.",
          },
          {
            question: "Can QwickSite create Arabic websites?",
            answer:
              "Yes. QwickSite supports Arabic content and right-to-left presentation alongside English experiences.",
          },
        ],
      },
      ar: {
        title: "ما هو QwickSite؟",
        eyebrow: "نظرة عامة على المنتج",
        description:
          "QwickSite هو منشئ مواقع بالذكاء الاصطناعي ومنصة تجارة إلكترونية لإنشاء مواقع الأنشطة والمتاجر وتحريرها ونشرها وتشغيلها.",
        introduction:
          "يجمع QwickSite بين الإنشاء بمساعدة الذكاء الاصطناعي والمحرر البصري ومكونات الصفحات القابلة لإعادة الاستخدام وأدوات المتجر وعمليات النشاط في منصة ويب واحدة.",
        sections: [
          {
            title: "أنشئ موقعاً أو متجراً من مساحة عمل واحدة",
            paragraphs: [
              "ابدأ ببنية يولدها الذكاء الاصطناعي أو بتصميم جاهز، ثم عدل النصوص والصور والأقسام والألوان والتنقل من دون كتابة كود.",
              "تدعم مساحة العمل نفسها صفحات النشاط العامة وتجارب التجارة، فلا يحتاج الفريق إلى أدوات منفصلة لكل مرحلة من مراحل الإطلاق.",
            ],
          },
          {
            title: "مصمم لسير عمل الأنشطة الحقيقي",
            paragraphs: [
              "يشمل QwickSite معاينات متجاوبة ومكونات محتوى ومنتجات وإتمام الطلب وإدارة الطلبات ومحتوى متعدد اللغات واتجاه RTL للعربية والنطاقات وبيانات SEO والتحليلات.",
            ],
          },
          {
            title: "مبني للنمو في مصر والمنطقة",
            paragraphs: [
              "يركز المنتج على احتياجات الأنشطة التي تريد الانطلاق محلياً والتواصل بالعربية والإنجليزية وتوسيع حضورها الرقمي في منطقة الشرق الأوسط وشمال أفريقيا.",
            ],
          },
        ],
        faqs: [
          {
            question: "هل QwickSite مجرد منشئ مواقع بالذكاء الاصطناعي؟",
            answer:
              "لا. يجمع QwickSite بين إنشاء المواقع بمساعدة الذكاء الاصطناعي والتحرير البصري والمكونات القابلة لإعادة الاستخدام وأدوات المتاجر والنشر وعمليات النشاط.",
          },
          {
            question: "هل يستطيع QwickSite إنشاء مواقع عربية؟",
            answer:
              "نعم. يدعم QwickSite المحتوى العربي واتجاه العرض من اليمين إلى اليسار إلى جانب التجارب الإنجليزية.",
          },
        ],
      },
    },
  },
  {
    slug: "about",
    dateModified: "2026-07-25",
    relatedSlugs: ["what-is-qwicksite", "history-of-qwicksite", "why-qwicksite-was-built"],
    content: {
      en: {
        title: "About QwickSite",
        eyebrow: "Our product and mission",
        description:
          "Learn how QwickSite helps businesses in Egypt and MENA create websites and online stores with AI-assisted generation and practical commerce tools.",
        introduction:
          "QwickSite exists to reduce the technical work between a business idea and a useful online presence. The product combines fast creation with the controls teams need after launch.",
        sections: [
          {
            title: "Our mission",
            paragraphs: [
              "We want entrepreneurs and teams to spend more time serving customers and less time coordinating hosting, design, code, plugins, and disconnected commerce tools.",
            ],
          },
          {
            title: "A platform for building and operating",
            paragraphs: [
              "QwickSite supports the public experience and the operational work behind it, including content, products, orders, integrations, domains, localization, and analytics.",
            ],
          },
          {
            title: "Local context with regional ambition",
            paragraphs: [
              "The product is shaped around Egypt and MENA, including Arabic RTL experiences and regional storefront workflows, while keeping the web standards businesses need to grow.",
            ],
          },
        ],
      },
      ar: {
        title: "عن QwickSite",
        eyebrow: "منتجنا ورسالتنا",
        description:
          "تعرّف على كيفية مساعدة QwickSite للأنشطة في مصر والمنطقة على إنشاء المواقع والمتاجر عبر الذكاء الاصطناعي وأدوات التجارة العملية.",
        introduction:
          "أُنشئ QwickSite لتقليل العمل التقني بين فكرة النشاط ووجود رقمي مفيد. يجمع المنتج بين سرعة الإنشاء وعناصر التحكم التي يحتاجها الفريق بعد الإطلاق.",
        sections: [
          {
            title: "رسالتنا",
            paragraphs: [
              "نريد أن يقضي رواد الأعمال والفرق وقتاً أطول في خدمة العملاء ووقتاً أقل في تنسيق الاستضافة والتصميم والكود والإضافات وأدوات التجارة المنفصلة.",
            ],
          },
          {
            title: "منصة للبناء والتشغيل",
            paragraphs: [
              "يدعم QwickSite التجربة العامة والعمل التشغيلي خلفها، بما يشمل المحتوى والمنتجات والطلبات والتكاملات والنطاقات والترجمة والتحليلات.",
            ],
          },
          {
            title: "سياق محلي وطموح إقليمي",
            paragraphs: [
              "يتشكل المنتج حول احتياجات مصر والمنطقة، بما فيها تجارب العربية من اليمين إلى اليسار وسير عمل المتاجر الإقليمي، مع الحفاظ على معايير الويب اللازمة للنمو.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "history-of-qwicksite",
    dateModified: "2026-07-25",
    relatedSlugs: ["about", "why-qwicksite-was-built", "what-is-qwicksite"],
    content: {
      en: {
        title: "History of QwickSite",
        eyebrow: "How the product evolved",
        description:
          "Explore the product history of QwickSite, from faster website creation to a broader AI website builder and ecommerce platform for Egypt and MENA.",
        introduction:
          "QwickSite’s product history is a progression from simplifying public pages to connecting creation, commerce, and ongoing business operations.",
        sections: [
          {
            title: "Starting with the launch problem",
            paragraphs: [
              "The first product direction focused on helping people publish professional pages without needing to assemble a custom technical stack.",
            ],
          },
          {
            title: "Expanding into reusable website operations",
            paragraphs: [
              "The platform grew to include a visual builder, responsive controls, reusable content components, multilingual experiences, forms, media, domains, and analytics support.",
            ],
          },
          {
            title: "Connecting websites with commerce",
            paragraphs: [
              "Products, orders, checkout, shipping, discounts, integrations, and management tools expanded QwickSite from page creation into a broader ecommerce platform.",
              "Specific founding dates, founder details, and verified milestones will be published only after they are approved by the company.",
            ],
          },
        ],
      },
      ar: {
        title: "تاريخ QwickSite",
        eyebrow: "كيف تطور المنتج",
        description:
          "استكشف تطور QwickSite من تسريع إنشاء المواقع إلى منشئ مواقع ومنصة تجارة إلكترونية أوسع لمصر والمنطقة.",
        introduction:
          "يمثل تاريخ منتج QwickSite انتقالاً من تبسيط الصفحات العامة إلى ربط الإنشاء والتجارة وعمليات النشاط المستمرة.",
        sections: [
          {
            title: "البداية من مشكلة الإطلاق",
            paragraphs: [
              "ركز الاتجاه الأول للمنتج على مساعدة الأشخاص في نشر صفحات احترافية من دون الحاجة إلى تجميع بنية تقنية مخصصة.",
            ],
          },
          {
            title: "التوسع إلى عمليات مواقع قابلة لإعادة الاستخدام",
            paragraphs: [
              "تطورت المنصة لتشمل محرراً بصرياً وعناصر تحكم متجاوبة ومكونات محتوى وتجارب متعددة اللغات ونماذج ووسائط ونطاقات ودعم التحليلات.",
            ],
          },
          {
            title: "ربط المواقع بالتجارة",
            paragraphs: [
              "وسعت المنتجات والطلبات وإتمام الشراء والشحن والخصومات والتكاملات وأدوات الإدارة QwickSite من إنشاء الصفحات إلى منصة تجارة إلكترونية أوسع.",
              "لن تُنشر تواريخ التأسيس أو بيانات المؤسس أو المحطات التاريخية المحددة إلا بعد اعتمادها من الشركة.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "why-qwicksite-was-built",
    dateModified: "2026-07-25",
    relatedSlugs: ["about", "history-of-qwicksite", "ai-website-builder-egypt"],
    content: {
      en: {
        title: "Why QwickSite Was Built",
        eyebrow: "The problem behind the platform",
        description:
          "QwickSite was built to make launching and operating a professional website or online store simpler for businesses in Egypt and MENA.",
        introduction:
          "Many small teams lose time moving between designers, developers, hosting settings, content tools, and commerce systems before they can serve a single customer online.",
        sections: [
          {
            title: "Reduce technical coordination",
            paragraphs: [
              "QwickSite combines AI-assisted creation, visual editing, reusable components, publishing, and operational tools so fewer handoffs are required.",
            ],
          },
          {
            title: "Keep control after launch",
            paragraphs: [
              "A fast first version is only useful when the business can continue changing content, offers, products, and pages without restarting the project.",
            ],
          },
          {
            title: "Support the markets businesses operate in",
            paragraphs: [
              "Arabic RTL, regional commerce needs, mobile-first customers, and the realities of Egypt and MENA are product requirements rather than afterthoughts.",
            ],
          },
        ],
      },
      ar: {
        title: "لماذا تم بناء QwickSite؟",
        eyebrow: "المشكلة وراء المنصة",
        description:
          "تم بناء QwickSite لتبسيط إطلاق وتشغيل موقع احترافي أو متجر إلكتروني للأنشطة في مصر والمنطقة.",
        introduction:
          "تفقد فرق صغيرة كثيرة وقتاً في التنقل بين المصممين والمطورين وإعدادات الاستضافة وأدوات المحتوى وأنظمة التجارة قبل خدمة أول عميل عبر الإنترنت.",
        sections: [
          {
            title: "تقليل التنسيق التقني",
            paragraphs: [
              "يجمع QwickSite بين الإنشاء بمساعدة الذكاء الاصطناعي والتحرير البصري والمكونات القابلة لإعادة الاستخدام والنشر وأدوات التشغيل لتقليل عدد عمليات التسليم.",
            ],
          },
          {
            title: "الحفاظ على التحكم بعد الإطلاق",
            paragraphs: [
              "لا تكون النسخة الأولى السريعة مفيدة إلا عندما يستطيع النشاط مواصلة تعديل المحتوى والعروض والمنتجات والصفحات من دون بدء المشروع من جديد.",
            ],
          },
          {
            title: "دعم الأسواق التي تعمل فيها الأنشطة",
            paragraphs: [
              "العربية واتجاه RTL واحتياجات التجارة الإقليمية والعملاء المعتمدون على الجوال وواقع مصر والمنطقة متطلبات أساسية للمنتج وليست إضافات لاحقة.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "ai-website-builder-egypt",
    dateModified: "2026-07-25",
    relatedSlugs: ["ecommerce-platform-egypt", "online-store-builder-egypt", "arabic-website-builder"],
    content: {
      en: {
        title: "AI Website Builder for Egypt",
        eyebrow: "Launch locally with less technical work",
        description:
          "Use QwickSite as an AI website builder for Egypt to create responsive Arabic and English business websites and online stores.",
        introduction:
          "QwickSite helps Egyptian businesses move from an idea to an editable public website while keeping local language, mobile use, commerce, and support needs in view.",
        sections: [
          {
            title: "Generate a practical first version",
            paragraphs: [
              "Describe the business, choose the relevant structure, and use AI-assisted generation to create a starting point that can be edited section by section.",
            ],
          },
          {
            title: "Build for Arabic and English customers",
            paragraphs: [
              "Manage bilingual content, right-to-left Arabic presentation, responsive layouts, and clear contact or commerce actions from the same platform.",
            ],
          },
          {
            title: "Connect the website to growth",
            paragraphs: [
              "Add products, forms, WhatsApp contact, SEO metadata, analytics, domains, and operational tools as the business is ready for them.",
            ],
          },
        ],
        faqs: [
          {
            question: "Can an Egyptian business start with a free QwickSite plan?",
            answer:
              "Yes. The current Launch plan is free, with paid plans available when the business needs additional capacity and services.",
          },
          {
            question: "Does QwickSite support Arabic RTL websites?",
            answer:
              "Yes. QwickSite supports Arabic content and right-to-left page presentation alongside English.",
          },
        ],
      },
      ar: {
        title: "منشئ مواقع بالذكاء الاصطناعي لمصر",
        eyebrow: "أطلق محلياً بعمل تقني أقل",
        description:
          "استخدم QwickSite كمنشئ مواقع بالذكاء الاصطناعي لمصر لإنشاء مواقع ومتاجر متجاوبة بالعربية والإنجليزية.",
        introduction:
          "يساعد QwickSite الأنشطة المصرية على الانتقال من الفكرة إلى موقع عام قابل للتحرير مع مراعاة اللغة المحلية واستخدام الجوال والتجارة والدعم.",
        sections: [
          {
            title: "أنشئ نسخة أولى عملية",
            paragraphs: [
              "صف النشاط واختر البنية المناسبة واستخدم الإنشاء بمساعدة الذكاء الاصطناعي لبناء نقطة بداية يمكن تعديلها قسماً بعد قسم.",
            ],
          },
          {
            title: "ابنِ لعملاء العربية والإنجليزية",
            paragraphs: [
              "أدر المحتوى ثنائي اللغة وعرض العربية من اليمين إلى اليسار والتصميمات المتجاوبة وإجراءات التواصل أو الشراء من المنصة نفسها.",
            ],
          },
          {
            title: "اربط الموقع بالنمو",
            paragraphs: [
              "أضف المنتجات والنماذج والتواصل عبر واتساب وبيانات SEO والتحليلات والنطاقات وأدوات التشغيل عندما يصبح النشاط جاهزاً.",
            ],
          },
        ],
        faqs: [
          {
            question: "هل يمكن لنشاط مصري البدء بخطة مجانية في QwickSite؟",
            answer:
              "نعم. خطة Launch الحالية مجانية، وتتوفر خطط مدفوعة عندما يحتاج النشاط إلى سعة وخدمات إضافية.",
          },
          {
            question: "هل يدعم QwickSite مواقع العربية واتجاه RTL؟",
            answer:
              "نعم. يدعم QwickSite المحتوى العربي وعرض الصفحات من اليمين إلى اليسار إلى جانب الإنجليزية.",
          },
        ],
      },
    },
  },
  {
    slug: "ai-website-builder-saudi-arabia",
    dateModified: "2026-07-25",
    relatedSlugs: ["ecommerce-platform-mena", "arabic-website-builder", "ai-store-builder"],
    content: {
      en: {
        title: "AI Website Builder for Saudi Arabia",
        eyebrow: "Arabic-first creation for Saudi businesses",
        description:
          "QwickSite helps Saudi businesses create Arabic and English websites and storefronts with AI-assisted generation and a visual editor.",
        introduction:
          "Businesses serving Saudi customers need fast mobile pages, clear Arabic content, responsive storefronts, and the ability to update offers without a development cycle.",
        sections: [
          {
            title: "Create and edit in one flow",
            paragraphs: [
              "Use AI assistance for the initial structure, then refine the message, sections, products, and calls to action in the visual builder.",
            ],
          },
          {
            title: "Support Arabic customer journeys",
            paragraphs: [
              "QwickSite supports Arabic RTL presentation and bilingual experiences for businesses that communicate across Arabic and English.",
            ],
          },
          {
            title: "Verify regional integrations before launch",
            paragraphs: [
              "Payment, shipping, tax, and legal requirements vary. Confirm the specific integrations available for the Saudi launch before promising them to customers.",
            ],
          },
        ],
      },
      ar: {
        title: "منشئ مواقع بالذكاء الاصطناعي للسعودية",
        eyebrow: "إنشاء يضع العربية أولاً للأنشطة السعودية",
        description:
          "يساعد QwickSite الأنشطة السعودية على إنشاء مواقع ومتاجر بالعربية والإنجليزية عبر الذكاء الاصطناعي والمحرر البصري.",
        introduction:
          "تحتاج الأنشطة التي تخدم عملاء السعودية إلى صفحات جوال سريعة ومحتوى عربي واضح ومتاجر متجاوبة وقدرة على تحديث العروض من دون دورة تطوير.",
        sections: [
          {
            title: "أنشئ وعدّل في مسار واحد",
            paragraphs: [
              "استخدم مساعدة الذكاء الاصطناعي للبنية الأولى، ثم حسّن الرسالة والأقسام والمنتجات ودعوات الإجراء في المحرر البصري.",
            ],
          },
          {
            title: "ادعم رحلة العميل العربي",
            paragraphs: [
              "يدعم QwickSite عرض العربية من اليمين إلى اليسار وتجارب ثنائية اللغة للأنشطة التي تتواصل بالعربية والإنجليزية.",
            ],
          },
          {
            title: "تحقق من التكاملات الإقليمية قبل الإطلاق",
            paragraphs: [
              "تختلف متطلبات الدفع والشحن والضرائب والقانون. أكد التكاملات المتاحة لإطلاق السعودية قبل تقديم وعود للعملاء.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "ai-website-builder-uae",
    dateModified: "2026-07-25",
    relatedSlugs: ["ecommerce-platform-mena", "arabic-website-builder", "ai-store-builder"],
    content: {
      en: {
        title: "AI Website Builder for the UAE",
        eyebrow: "Bilingual websites for a diverse market",
        description:
          "QwickSite helps UAE businesses create responsive Arabic and English websites and online stores with AI-assisted generation.",
        introduction:
          "The UAE market often requires a business to communicate clearly across languages, devices, and customer groups while keeping website updates fast.",
        sections: [
          {
            title: "Start with AI, finish with business control",
            paragraphs: [
              "Generate an initial structure, then use the visual editor to align the page with the company’s real services, products, and brand.",
            ],
          },
          {
            title: "Publish bilingual experiences",
            paragraphs: [
              "Use Arabic RTL and English content to create clear paths for different audiences without operating separate website platforms.",
            ],
          },
          {
            title: "Confirm UAE-specific operations",
            paragraphs: [
              "Before launch, validate the payment, delivery, tax, currency, and policy configuration required by the specific UAE business.",
            ],
          },
        ],
      },
      ar: {
        title: "منشئ مواقع بالذكاء الاصطناعي للإمارات",
        eyebrow: "مواقع ثنائية اللغة لسوق متنوع",
        description:
          "يساعد QwickSite الأنشطة في الإمارات على إنشاء مواقع ومتاجر متجاوبة بالعربية والإنجليزية عبر الذكاء الاصطناعي.",
        introduction:
          "يتطلب سوق الإمارات غالباً تواصلاً واضحاً عبر لغات وأجهزة وفئات عملاء مختلفة مع الحفاظ على سرعة تحديث الموقع.",
        sections: [
          {
            title: "ابدأ بالذكاء الاصطناعي وأكمل بتحكم النشاط",
            paragraphs: [
              "أنشئ بنية أولية، ثم استخدم المحرر البصري لمواءمة الصفحة مع خدمات الشركة ومنتجاتها وهويتها الفعلية.",
            ],
          },
          {
            title: "انشر تجارب ثنائية اللغة",
            paragraphs: [
              "استخدم العربية باتجاه RTL والمحتوى الإنجليزي لبناء مسارات واضحة لجماهير مختلفة من دون تشغيل منصات مواقع منفصلة.",
            ],
          },
          {
            title: "أكد عمليات الإمارات الخاصة",
            paragraphs: [
              "قبل الإطلاق، تحقق من إعدادات الدفع والتوصيل والضرائب والعملات والسياسات المطلوبة للنشاط المحدد في الإمارات.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "ecommerce-platform-egypt",
    dateModified: "2026-07-25",
    relatedSlugs: ["online-store-builder-egypt", "ai-website-builder-egypt", "ai-store-builder"],
    content: {
      en: {
        title: "Ecommerce Platform for Egypt",
        eyebrow: "Build and operate an Egyptian online store",
        description:
          "QwickSite is an ecommerce platform for Egypt that connects storefront creation with products, checkout, orders, and regional business workflows.",
        introduction:
          "An ecommerce platform should help a team publish the store customers see and manage the work that happens after an order is placed.",
        sections: [
          {
            title: "Create a storefront that explains the offer",
            paragraphs: [
              "Use editable product holders, content sections, navigation, media, FAQs, and contact actions to make products understandable on mobile and desktop.",
            ],
          },
          {
            title: "Manage the commerce flow",
            paragraphs: [
              "QwickSite connects products, categories, discounts, checkout, orders, shipping configuration, and integrations in the broader platform.",
            ],
          },
          {
            title: "Adapt to Egyptian customers",
            paragraphs: [
              "Use Arabic and English content, WhatsApp contact, region-aware pricing presentation, and supported delivery or payment workflows appropriate to the business.",
            ],
          },
        ],
      },
      ar: {
        title: "منصة تجارة إلكترونية لمصر",
        eyebrow: "أنشئ وشغّل متجراً إلكترونياً مصرياً",
        description:
          "QwickSite منصة تجارة إلكترونية لمصر تربط إنشاء واجهة المتجر بالمنتجات وإتمام الطلب وإدارة الطلبات وسير العمل الإقليمي.",
        introduction:
          "يجب أن تساعد منصة التجارة الفريق على نشر المتجر الذي يراه العملاء وإدارة العمل الذي يبدأ بعد تسجيل الطلب.",
        sections: [
          {
            title: "أنشئ واجهة تشرح العرض",
            paragraphs: [
              "استخدم حاويات المنتجات والأقسام والتنقل والوسائط والأسئلة الشائعة وإجراءات التواصل لتوضيح المنتجات على الجوال والكمبيوتر.",
            ],
          },
          {
            title: "أدر مسار التجارة",
            paragraphs: [
              "يربط QwickSite المنتجات والفئات والخصومات وإتمام الشراء والطلبات وإعدادات الشحن والتكاملات داخل المنصة الأوسع.",
            ],
          },
          {
            title: "تكيف مع العميل المصري",
            paragraphs: [
              "استخدم المحتوى العربي والإنجليزي والتواصل عبر واتساب وعرض الأسعار حسب المنطقة وسير الدفع أو التوصيل الذي يدعمه النشاط.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "ecommerce-platform-mena",
    dateModified: "2026-07-25",
    relatedSlugs: ["ecommerce-platform-egypt", "arabic-website-builder", "ai-store-builder"],
    content: {
      en: {
        title: "Ecommerce Platform for MENA",
        eyebrow: "Regional storefronts from one platform",
        description:
          "QwickSite combines an ecommerce platform with AI website building for businesses serving Arabic and English customers across MENA.",
        introduction:
          "Selling across MENA requires more than translating a homepage. Businesses need flexible content, localized storefronts, responsive design, and operational settings that can change by market.",
        sections: [
          {
            title: "Build a regional brand foundation",
            paragraphs: [
              "Create consistent pages and store structures while adapting language, offers, contact options, and market-specific information.",
            ],
          },
          {
            title: "Use Arabic and English intentionally",
            paragraphs: [
              "QwickSite supports bilingual content and Arabic RTL presentation so each audience receives a readable, deliberate experience.",
            ],
          },
          {
            title: "Validate each market’s requirements",
            paragraphs: [
              "Currencies, payments, shipping, taxes, consumer policies, and integrations differ across MENA. Confirm the supported configuration before entering each market.",
            ],
          },
        ],
      },
      ar: {
        title: "منصة تجارة إلكترونية لمنطقة الشرق الأوسط وشمال أفريقيا",
        eyebrow: "متاجر إقليمية من منصة واحدة",
        description:
          "يجمع QwickSite بين منصة تجارة إلكترونية ومنشئ مواقع بالذكاء الاصطناعي للأنشطة التي تخدم عملاء العربية والإنجليزية في المنطقة.",
        introduction:
          "البيع في المنطقة يحتاج إلى أكثر من ترجمة الصفحة الرئيسية. تحتاج الأنشطة إلى محتوى مرن ومتاجر محلية وتصميم متجاوب وإعدادات تشغيل تتغير حسب السوق.",
        sections: [
          {
            title: "ابنِ أساساً لعلامة إقليمية",
            paragraphs: [
              "أنشئ صفحات وبنية متجر متسقة مع تكييف اللغة والعروض وخيارات التواصل والمعلومات الخاصة بكل سوق.",
            ],
          },
          {
            title: "استخدم العربية والإنجليزية بوضوح",
            paragraphs: [
              "يدعم QwickSite المحتوى ثنائي اللغة وعرض العربية باتجاه RTL ليحصل كل جمهور على تجربة مقروءة ومقصودة.",
            ],
          },
          {
            title: "تحقق من متطلبات كل سوق",
            paragraphs: [
              "تختلف العملات والمدفوعات والشحن والضرائب وسياسات المستهلك والتكاملات داخل المنطقة. أكد الإعدادات المدعومة قبل دخول كل سوق.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "arabic-website-builder",
    dateModified: "2026-07-25",
    relatedSlugs: ["ai-website-builder-egypt", "ecommerce-platform-mena", "online-store-builder-egypt"],
    content: {
      en: {
        title: "Arabic Website Builder",
        eyebrow: "Create real right-to-left experiences",
        description:
          "Use QwickSite as an Arabic website builder for RTL business pages, bilingual content, and responsive online stores.",
        introduction:
          "An Arabic website needs more than translated sentences. Direction, spacing, navigation, controls, typography, and customer actions must work naturally from right to left.",
        sections: [
          {
            title: "Arabic RTL throughout the page",
            paragraphs: [
              "QwickSite applies Arabic language and direction to the localized experience while preserving responsive layout behavior across devices.",
            ],
          },
          {
            title: "Manage bilingual content",
            paragraphs: [
              "Keep Arabic and English versions connected with locale-aware navigation, canonical URLs, and language alternates instead of mixing both audiences into one page.",
            ],
          },
          {
            title: "Build websites and stores",
            paragraphs: [
              "Use the same Arabic website builder for service pages, portfolios, product pages, FAQs, forms, contact sections, and storefront experiences.",
            ],
          },
        ],
        faqs: [
          {
            question: "Does an Arabic QwickSite page use right-to-left layout?",
            answer:
              "Yes. Arabic pages use RTL direction, while English pages remain left to right.",
          },
          {
            question: "Can one QwickSite website have Arabic and English versions?",
            answer:
              "Yes. QwickSite supports localized Arabic and English experiences with language-aware navigation.",
          },
        ],
      },
      ar: {
        title: "منشئ مواقع عربية",
        eyebrow: "أنشئ تجربة حقيقية من اليمين إلى اليسار",
        description:
          "استخدم QwickSite كمنشئ مواقع عربية لصفحات الأعمال باتجاه RTL والمحتوى ثنائي اللغة والمتاجر المتجاوبة.",
        introduction:
          "يحتاج الموقع العربي إلى أكثر من جمل مترجمة. يجب أن يعمل الاتجاه والمسافات والتنقل وعناصر التحكم والخطوط وإجراءات العميل بصورة طبيعية من اليمين إلى اليسار.",
        sections: [
          {
            title: "اتجاه RTL في كامل الصفحة",
            paragraphs: [
              "يطبق QwickSite لغة العربية واتجاهها على التجربة المحلية مع الحفاظ على تجاوب التصميم عبر الأجهزة.",
            ],
          },
          {
            title: "إدارة المحتوى ثنائي اللغة",
            paragraphs: [
              "حافظ على ارتباط نسختي العربية والإنجليزية عبر تنقل واعٍ باللغة وروابط أساسية وبدائل لغوية بدلاً من خلط الجمهورين في صفحة واحدة.",
            ],
          },
          {
            title: "أنشئ مواقع ومتاجر",
            paragraphs: [
              "استخدم منشئ المواقع العربية نفسه لصفحات الخدمات والأعمال والمنتجات والأسئلة الشائعة والنماذج والتواصل وتجارب المتجر.",
            ],
          },
        ],
        faqs: [
          {
            question: "هل تستخدم صفحة QwickSite العربية اتجاه اليمين إلى اليسار؟",
            answer:
              "نعم. تستخدم الصفحات العربية اتجاه RTL، بينما تبقى الصفحات الإنجليزية من اليسار إلى اليمين.",
          },
          {
            question: "هل يمكن أن يحتوي موقع QwickSite واحد على العربية والإنجليزية؟",
            answer:
              "نعم. يدعم QwickSite تجارب محلية بالعربية والإنجليزية مع تنقل واعٍ باللغة.",
          },
        ],
      },
    },
  },
  {
    slug: "qwicksite-vs-shopify",
    dateModified: "2026-07-25",
    relatedSlugs: ["qwicksite-vs-wix", "qwicksite-vs-zid", "ecommerce-platform-mena"],
    content: {
      en: {
        title: "QwickSite vs Shopify",
        eyebrow: "Choose the platform that fits the operation",
        description:
          "Compare QwickSite and Shopify across website creation, commerce scope, regional workflows, Arabic support, and operating model.",
        introduction:
          "Shopify is a global hosted commerce platform with a large app ecosystem. QwickSite combines AI-assisted website creation and commerce workflows with a focus on Egypt and MENA.",
        sections: [
          {
            title: "Where QwickSite is focused",
            paragraphs: [
              "QwickSite is suited to teams that want AI-assisted creation, visual page control, Arabic and English experiences, and website and storefront operations in one product.",
            ],
          },
          {
            title: "Where Shopify is focused",
            paragraphs: [
              "Shopify is centered on hosted commerce at global scale, with broad third-party themes, apps, partner services, and market integrations.",
            ],
          },
          {
            title: "How to decide",
            paragraphs: [
              "Compare the exact payment, shipping, catalog, localization, design, integration, support, and total-cost requirements of your business. Verify both products’ current capabilities before purchasing.",
              "Shopify is a trademark of its respective owner. QwickSite is not affiliated with or endorsed by Shopify.",
            ],
          },
        ],
      },
      ar: {
        title: "QwickSite مقابل Shopify",
        eyebrow: "اختر المنصة المناسبة للتشغيل",
        description:
          "قارن بين QwickSite وShopify في إنشاء المواقع ونطاق التجارة وسير العمل الإقليمي ودعم العربية ونموذج التشغيل.",
        introduction:
          "Shopify منصة تجارة مستضافة عالمية ذات منظومة كبيرة من التطبيقات. يجمع QwickSite بين إنشاء المواقع بمساعدة الذكاء الاصطناعي وسير التجارة مع تركيز على مصر والمنطقة.",
        sections: [
          {
            title: "تركيز QwickSite",
            paragraphs: [
              "يناسب QwickSite الفرق التي تريد إنشاءً بمساعدة الذكاء الاصطناعي وتحكماً بصرياً وتجارب بالعربية والإنجليزية وتشغيل الموقع والمتجر في منتج واحد.",
            ],
          },
          {
            title: "تركيز Shopify",
            paragraphs: [
              "يركز Shopify على التجارة المستضافة عالمياً مع مجموعة واسعة من القوالب والتطبيقات والشركاء وتكاملات الأسواق.",
            ],
          },
          {
            title: "كيف تقرر",
            paragraphs: [
              "قارن متطلبات الدفع والشحن والكتالوج والترجمة والتصميم والتكامل والدعم والتكلفة الإجمالية لنشاطك. تحقق من قدرات المنتجين الحالية قبل الشراء.",
              "Shopify علامة تجارية مملوكة لجهتها. لا يرتبط QwickSite بـShopify ولا يحصل على اعتماد منها.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "qwicksite-vs-wix",
    dateModified: "2026-07-25",
    relatedSlugs: ["qwicksite-vs-shopify", "qwicksite-vs-wordpress", "ai-website-builder-egypt"],
    content: {
      en: {
        title: "QwickSite vs Wix",
        eyebrow: "Compare two hosted website builders",
        description:
          "Compare QwickSite and Wix for AI-assisted creation, visual editing, ecommerce, Arabic experiences, and regional business workflows.",
        introduction:
          "Wix is a global hosted website platform with a broad template and application ecosystem. QwickSite focuses its website and commerce experience on fast creation for Egypt and MENA.",
        sections: [
          {
            title: "Creation and editing",
            paragraphs: [
              "Both products provide hosted visual website creation. Evaluate the exact editor workflow, component control, generated starting point, responsive behavior, and team process you need.",
            ],
          },
          {
            title: "Commerce and regional fit",
            paragraphs: [
              "Compare supported payments, shipping, orders, languages, Arabic RTL, currencies, integrations, and support in the specific country where the business operates.",
            ],
          },
          {
            title: "Make a current comparison",
            paragraphs: [
              "Features and prices change. Test both products with the same sample page and store workflow before deciding.",
              "Wix is a trademark of its respective owner. QwickSite is not affiliated with or endorsed by Wix.",
            ],
          },
        ],
      },
      ar: {
        title: "QwickSite مقابل Wix",
        eyebrow: "قارن بين منشئي مواقع مستضافين",
        description:
          "قارن بين QwickSite وWix في الإنشاء بمساعدة الذكاء الاصطناعي والتحرير البصري والتجارة وتجارب العربية وسير العمل الإقليمي.",
        introduction:
          "Wix منصة مواقع مستضافة عالمية ذات منظومة واسعة من القوالب والتطبيقات. يركز QwickSite تجربة الموقع والتجارة على الإنشاء السريع لمصر والمنطقة.",
        sections: [
          {
            title: "الإنشاء والتحرير",
            paragraphs: [
              "يوفر المنتجان إنشاء مواقع بصرياً ومستضافاً. قيّم سير المحرر والتحكم في المكونات ونقطة البداية المولدة والتجاوب وعمل الفريق الذي تحتاجه.",
            ],
          },
          {
            title: "التجارة والملاءمة الإقليمية",
            paragraphs: [
              "قارن المدفوعات والشحن والطلبات واللغات واتجاه العربية والعملات والتكاملات والدعم في الدولة التي يعمل بها النشاط.",
            ],
          },
          {
            title: "أجر مقارنة حالية",
            paragraphs: [
              "تتغير المزايا والأسعار. اختبر المنتجين بالصفحة النموذجية ومسار المتجر نفسه قبل القرار.",
              "Wix علامة تجارية مملوكة لجهتها. لا يرتبط QwickSite بـWix ولا يحصل على اعتماد منها.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "qwicksite-vs-wordpress",
    dateModified: "2026-07-25",
    relatedSlugs: ["qwicksite-vs-wix", "qwicksite-vs-shopify", "what-is-qwicksite"],
    content: {
      en: {
        title: "QwickSite vs WordPress",
        eyebrow: "Hosted platform or open-source CMS",
        description:
          "Compare QwickSite’s hosted AI website builder with WordPress’s open-source CMS model, plugins, hosting, maintenance, and commerce options.",
        introduction:
          "QwickSite is a managed web platform. WordPress is an open-source content management system whose final experience depends on hosting, themes, plugins, and the team maintaining them.",
        sections: [
          {
            title: "Managed QwickSite workflow",
            paragraphs: [
              "QwickSite combines generation, editing, publishing, components, commerce, and operational features under one product and support model.",
            ],
          },
          {
            title: "Flexible WordPress ecosystem",
            paragraphs: [
              "WordPress offers extensive ownership and extensibility through themes, plugins, code, and hosting choices, with corresponding setup and maintenance responsibility.",
            ],
          },
          {
            title: "Choose based on ownership and operations",
            paragraphs: [
              "Decide whether the business values a managed integrated workflow or needs the deeper control and ecosystem of a self-managed CMS stack.",
              "WordPress is a trademark of the WordPress Foundation. QwickSite is not affiliated with or endorsed by the WordPress project.",
            ],
          },
        ],
      },
      ar: {
        title: "QwickSite مقابل WordPress",
        eyebrow: "منصة مستضافة أم نظام محتوى مفتوح المصدر",
        description:
          "قارن منشئ المواقع المستضاف في QwickSite بنموذج WordPress المفتوح المصدر والإضافات والاستضافة والصيانة وخيارات التجارة.",
        introduction:
          "QwickSite منصة ويب مُدارة. WordPress نظام إدارة محتوى مفتوح المصدر تعتمد تجربته النهائية على الاستضافة والقوالب والإضافات والفريق الذي يصونها.",
        sections: [
          {
            title: "سير QwickSite المُدار",
            paragraphs: [
              "يجمع QwickSite الإنشاء والتحرير والنشر والمكونات والتجارة ومزايا التشغيل تحت منتج ونموذج دعم واحد.",
            ],
          },
          {
            title: "منظومة WordPress المرنة",
            paragraphs: [
              "يوفر WordPress ملكية وقابلية توسع كبيرتين عبر القوالب والإضافات والكود وخيارات الاستضافة، مع مسؤولية الإعداد والصيانة المصاحبة.",
            ],
          },
          {
            title: "اختر حسب الملكية والتشغيل",
            paragraphs: [
              "حدد ما إذا كان النشاط يفضل سيراً متكاملاً مُداراً أو يحتاج إلى تحكم أعمق ومنظومة نظام محتوى يديرها بنفسه.",
              "WordPress علامة تجارية لمؤسسة WordPress. لا يرتبط QwickSite بمشروع WordPress ولا يحصل على اعتماد منه.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "qwicksite-vs-zid",
    dateModified: "2026-07-25",
    relatedSlugs: ["qwicksite-vs-salla", "qwicksite-vs-shopify", "ecommerce-platform-mena"],
    content: {
      en: {
        title: "QwickSite vs Zid",
        eyebrow: "Compare MENA commerce platforms",
        description:
          "Compare QwickSite and Zid across AI website creation, storefront management, Arabic experiences, regional operations, and integrations.",
        introduction:
          "Zid is a regional ecommerce platform. QwickSite combines AI-assisted website building with commerce and content tools for businesses in Egypt and MENA.",
        sections: [
          {
            title: "Compare the full customer journey",
            paragraphs: [
              "Review creation, landing pages, catalog, checkout, orders, content, Arabic RTL, analytics, domains, integrations, and post-launch editing rather than comparing one feature.",
            ],
          },
          {
            title: "Check country-specific support",
            paragraphs: [
              "Confirm the exact payment, delivery, tax, currency, policy, and support options available to the business in its operating country.",
            ],
          },
          {
            title: "Validate current product details",
            paragraphs: [
              "Use current demonstrations and written plan details because product capabilities and prices change.",
              "Zid is a trademark of its respective owner. QwickSite is not affiliated with or endorsed by Zid.",
            ],
          },
        ],
      },
      ar: {
        title: "QwickSite مقابل زد",
        eyebrow: "قارن منصات التجارة في المنطقة",
        description:
          "قارن بين QwickSite وزد في إنشاء المواقع بالذكاء الاصطناعي وإدارة المتجر وتجارب العربية والتشغيل الإقليمي والتكاملات.",
        introduction:
          "زد منصة تجارة إلكترونية إقليمية. يجمع QwickSite بين إنشاء المواقع بمساعدة الذكاء الاصطناعي وأدوات التجارة والمحتوى للأنشطة في مصر والمنطقة.",
        sections: [
          {
            title: "قارن رحلة العميل كاملة",
            paragraphs: [
              "راجع الإنشاء وصفحات الهبوط والكتالوج وإتمام الشراء والطلبات والمحتوى واتجاه العربية والتحليلات والنطاقات والتكاملات والتحرير بعد الإطلاق.",
            ],
          },
          {
            title: "تحقق من دعم الدولة",
            paragraphs: [
              "أكد خيارات الدفع والتوصيل والضرائب والعملات والسياسات والدعم المتاحة للنشاط في الدولة التي يعمل بها.",
            ],
          },
          {
            title: "تحقق من تفاصيل المنتج الحالية",
            paragraphs: [
              "استخدم العروض الحالية وتفاصيل الخطط المكتوبة لأن قدرات المنتجات وأسعارها تتغير.",
              "زد علامة تجارية مملوكة لجهتها. لا يرتبط QwickSite بزد ولا يحصل على اعتماد منها.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "qwicksite-vs-salla",
    dateModified: "2026-07-25",
    relatedSlugs: ["qwicksite-vs-zid", "qwicksite-vs-shopify", "ecommerce-platform-mena"],
    content: {
      en: {
        title: "QwickSite vs Salla",
        eyebrow: "Compare regional store-building approaches",
        description:
          "Compare QwickSite and Salla across AI website creation, online store operations, Arabic support, regional workflows, and integrations.",
        introduction:
          "Salla is a regional ecommerce platform. QwickSite connects AI-assisted website creation with content, storefront, and operational tools for Egypt and MENA.",
        sections: [
          {
            title: "Compare website and store control",
            paragraphs: [
              "Test how each platform handles generated starting points, visual page editing, content components, product presentation, checkout, and ongoing changes.",
            ],
          },
          {
            title: "Verify regional requirements",
            paragraphs: [
              "Compare the exact country, payment, shipping, currency, tax, integration, Arabic RTL, and support requirements that matter to the business.",
            ],
          },
          {
            title: "Use current evidence",
            paragraphs: [
              "Run the same sample store through both platforms and review current plan documentation before choosing.",
              "Salla is a trademark of its respective owner. QwickSite is not affiliated with or endorsed by Salla.",
            ],
          },
        ],
      },
      ar: {
        title: "QwickSite مقابل سلة",
        eyebrow: "قارن أساليب بناء المتاجر الإقليمية",
        description:
          "قارن بين QwickSite وسلة في إنشاء المواقع بالذكاء الاصطناعي وتشغيل المتاجر ودعم العربية وسير العمل الإقليمي والتكاملات.",
        introduction:
          "سلة منصة تجارة إلكترونية إقليمية. يربط QwickSite إنشاء المواقع بمساعدة الذكاء الاصطناعي بأدوات المحتوى والمتجر والتشغيل لمصر والمنطقة.",
        sections: [
          {
            title: "قارن التحكم في الموقع والمتجر",
            paragraphs: [
              "اختبر كيفية تعامل كل منصة مع نقطة البداية المولدة والتحرير البصري ومكونات المحتوى وعرض المنتجات وإتمام الشراء والتغييرات المستمرة.",
            ],
          },
          {
            title: "تحقق من المتطلبات الإقليمية",
            paragraphs: [
              "قارن متطلبات الدولة والدفع والشحن والعملات والضرائب والتكامل واتجاه العربية والدعم التي تهم النشاط.",
            ],
          },
          {
            title: "استخدم أدلة حالية",
            paragraphs: [
              "شغّل المتجر النموذجي نفسه على المنصتين وراجع وثائق الخطط الحالية قبل الاختيار.",
              "سلة علامة تجارية مملوكة لجهتها. لا يرتبط QwickSite بسلة ولا يحصل على اعتماد منها.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "ai-store-builder",
    dateModified: "2026-07-25",
    relatedSlugs: ["online-store-builder-egypt", "ecommerce-platform-mena", "features"],
    content: {
      en: {
        title: "AI Store Builder",
        eyebrow: "Create a storefront from a business brief",
        description:
          "QwickSite’s AI store builder helps businesses generate a starting storefront, edit it visually, and connect products and operations.",
        introduction:
          "An AI store builder should shorten the path to a useful first version while leaving the business in control of its real products, policies, content, and customer experience.",
        sections: [
          {
            title: "Generate structure, not final truth",
            paragraphs: [
              "Use AI to propose page sections, layout, and initial copy, then review every claim, price, image, policy, and product detail before publishing.",
            ],
          },
          {
            title: "Edit the storefront visually",
            paragraphs: [
              "Adjust hierarchy, content, media, components, colors, and calls to action while checking responsive views.",
            ],
          },
          {
            title: "Connect store operations",
            paragraphs: [
              "Add products, categories, checkout, orders, discounts, shipping, integrations, SEO metadata, and analytics through the QwickSite platform.",
            ],
          },
        ],
      },
      ar: {
        title: "منشئ متاجر بالذكاء الاصطناعي",
        eyebrow: "أنشئ واجهة متجر من وصف نشاطك",
        description:
          "يساعد منشئ المتاجر بالذكاء الاصطناعي في QwickSite الأنشطة على إنشاء واجهة أولية وتحريرها بصرياً وربط المنتجات والعمليات.",
        introduction:
          "يجب أن يقلل منشئ المتاجر بالذكاء الاصطناعي الطريق إلى نسخة أولى مفيدة مع إبقاء النشاط متحكماً في منتجاته وسياساته ومحتواه وتجربة عملائه.",
        sections: [
          {
            title: "أنشئ البنية لا الحقيقة النهائية",
            paragraphs: [
              "استخدم الذكاء الاصطناعي لاقتراح الأقسام والتصميم والنص الأولي، ثم راجع كل ادعاء وسعر وصورة وسياسة وتفصيل منتج قبل النشر.",
            ],
          },
          {
            title: "حرر واجهة المتجر بصرياً",
            paragraphs: [
              "عدّل التسلسل والمحتوى والوسائط والمكونات والألوان ودعوات الإجراء مع مراجعة الشاشات المتجاوبة.",
            ],
          },
          {
            title: "اربط عمليات المتجر",
            paragraphs: [
              "أضف المنتجات والفئات وإتمام الشراء والطلبات والخصومات والشحن والتكاملات وبيانات SEO والتحليلات عبر منصة QwickSite.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "online-store-builder-egypt",
    dateModified: "2026-07-25",
    relatedSlugs: ["ecommerce-platform-egypt", "ai-store-builder", "arabic-website-builder"],
    content: {
      en: {
        title: "Online Store Builder for Egypt",
        eyebrow: "Launch a store for Egyptian customers",
        description:
          "Use QwickSite as an online store builder for Egypt with editable storefronts, Arabic and English content, products, checkout, and orders.",
        introduction:
          "An Egyptian online store needs a clear mobile storefront and an operating workflow that matches how the business communicates, fulfills orders, and supports customers.",
        sections: [
          {
            title: "Build the customer-facing store",
            paragraphs: [
              "Create product pages, categories, promotional sections, FAQs, policies, contact actions, and a responsive path to checkout.",
            ],
          },
          {
            title: "Operate after the launch",
            paragraphs: [
              "Use product, order, discount, shipping, integration, domain, SEO, and analytics capabilities as the store grows.",
            ],
          },
          {
            title: "Serve Arabic and English audiences",
            paragraphs: [
              "Publish localized content with Arabic RTL and English layouts, and verify the payment and delivery options supported for the exact Egyptian business.",
            ],
          },
        ],
      },
      ar: {
        title: "منشئ متاجر إلكترونية لمصر",
        eyebrow: "أطلق متجراً للعملاء المصريين",
        description:
          "استخدم QwickSite كمنشئ متاجر إلكترونية لمصر بواجهات قابلة للتحرير ومحتوى عربي وإنجليزي ومنتجات وإتمام شراء وطلبات.",
        introduction:
          "يحتاج المتجر المصري إلى واجهة واضحة على الجوال وسير تشغيل يناسب طريقة تواصل النشاط وتنفيذ الطلبات ودعم العملاء.",
        sections: [
          {
            title: "ابنِ المتجر الذي يراه العميل",
            paragraphs: [
              "أنشئ صفحات المنتجات والفئات والأقسام الترويجية والأسئلة والسياسات وإجراءات التواصل ومساراً متجاوباً إلى إتمام الشراء.",
            ],
          },
          {
            title: "شغّل النشاط بعد الإطلاق",
            paragraphs: [
              "استخدم قدرات المنتجات والطلبات والخصومات والشحن والتكامل والنطاقات وSEO والتحليلات مع نمو المتجر.",
            ],
          },
          {
            title: "اخدم جمهور العربية والإنجليزية",
            paragraphs: [
              "انشر محتوى محلياً باتجاه RTL للعربية وتصميمات إنجليزية، وتحقق من خيارات الدفع والتوصيل المدعومة للنشاط المصري المحدد.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "qwicksite-not-amazon-quicksight",
    dateModified: "2026-07-25",
    relatedSlugs: ["what-is-qwicksite", "about", "features"],
    content: {
      en: {
        title: "QwickSite Is an AI Website Builder — Not Amazon QuickSight",
        eyebrow: "Product name disambiguation",
        description:
          "QwickSite is an AI website builder and ecommerce platform for Egypt and MENA. It is not Amazon QuickSight, the AWS business intelligence service.",
        introduction:
          "The names sound similar, but the products, companies, websites, and purposes are different.",
        sections: [
          {
            title: "What QwickSite does",
            paragraphs: [
              "QwickSite helps businesses create and operate websites and online stores with AI-assisted generation, visual editing, multilingual content, commerce, and publishing tools.",
            ],
          },
          {
            title: "What Amazon QuickSight is",
            paragraphs: [
              "Amazon QuickSight is an Amazon Web Services business intelligence and data visualization product. It is not a website or online store builder.",
            ],
          },
          {
            title: "How to find the correct product",
            paragraphs: [
              "Use the spelling QwickSite and the canonical QwickSite website when looking for the AI website builder. Use official AWS properties when looking for Amazon QuickSight.",
              "Amazon, AWS, and QuickSight are trademarks of their respective owners. QwickSite is not affiliated with or endorsed by Amazon Web Services.",
            ],
          },
        ],
        faqs: [
          {
            question: "Is QwickSite part of Amazon or AWS?",
            answer:
              "No. QwickSite is not affiliated with Amazon or AWS.",
          },
          {
            question: "Is QwickSite a business intelligence dashboard?",
            answer:
              "No. QwickSite is an AI website builder and ecommerce platform. Amazon QuickSight is a separate business intelligence product.",
          },
        ],
      },
      ar: {
        title: "QwickSite منشئ مواقع بالذكاء الاصطناعي وليس Amazon QuickSight",
        eyebrow: "توضيح الفرق بين الاسمين",
        description:
          "QwickSite منشئ مواقع ومنصة تجارة إلكترونية لمصر والمنطقة، وليس Amazon QuickSight، خدمة ذكاء الأعمال التابعة لـAWS.",
        introduction:
          "قد يبدو الاسمان متشابهين، لكن المنتجين والشركتين والموقعين والاستخدامات مختلفة.",
        sections: [
          {
            title: "ماذا يقدم QwickSite؟",
            paragraphs: [
              "يساعد QwickSite الأنشطة على إنشاء وتشغيل المواقع والمتاجر عبر الإنشاء بمساعدة الذكاء الاصطناعي والتحرير البصري والمحتوى متعدد اللغات والتجارة والنشر.",
            ],
          },
          {
            title: "ما هو Amazon QuickSight؟",
            paragraphs: [
              "Amazon QuickSight منتج لذكاء الأعمال وعرض البيانات من Amazon Web Services. وهو ليس منشئ مواقع أو متاجر إلكترونية.",
            ],
          },
          {
            title: "كيف تصل إلى المنتج الصحيح؟",
            paragraphs: [
              "استخدم تهجئة QwickSite والموقع الأساسي للمنتج عند البحث عن منشئ المواقع. واستخدم مواقع AWS الرسمية عند البحث عن Amazon QuickSight.",
              "Amazon وAWS وQuickSight علامات تجارية لمالكيها. لا يرتبط QwickSite بخدمات Amazon Web Services ولا يحصل على اعتماد منها.",
            ],
          },
        ],
        faqs: [
          {
            question: "هل QwickSite جزء من Amazon أو AWS؟",
            answer:
              "لا. لا يرتبط QwickSite بـAmazon أو AWS.",
          },
          {
            question: "هل QwickSite لوحة ذكاء أعمال؟",
            answer:
              "لا. QwickSite منشئ مواقع ومنصة تجارة إلكترونية. Amazon QuickSight منتج منفصل لذكاء الأعمال.",
          },
        ],
      },
    },
  },
  {
    slug: "blog",
    dateModified: "2026-07-25",
    relatedSlugs: ["features", "pricing", "about"],
    content: {
      en: {
        title: "QwickSite Blog",
        eyebrow: "Guides and product updates",
        description:
          "Read practical QwickSite guides about AI website building, ecommerce, Arabic websites, online stores, and growth in Egypt and MENA.",
        introduction:
          "The QwickSite Blog publishes useful, reviewed guidance for teams building and operating their online presence.",
        sections: [],
      },
      ar: {
        title: "مدونة QwickSite",
        eyebrow: "أدلة وتحديثات المنتج",
        description:
          "اقرأ أدلة QwickSite العملية عن إنشاء المواقع بالذكاء الاصطناعي والتجارة والمواقع العربية والمتاجر والنمو في مصر والمنطقة.",
        introduction:
          "تنشر مدونة QwickSite إرشادات عملية ومراجعة للفرق التي تبني حضورها الرقمي وتشغله.",
        sections: [],
      },
    },
  },
  {
    slug: "careers",
    dateModified: "2026-07-25",
    relatedSlugs: ["about", "contact"],
    content: {
      en: {
        title: "Careers at QwickSite",
        eyebrow: "Build with us",
        description:
          "Learn about working with the QwickSite team on AI-assisted website creation, commerce, and digital tools for Egypt and MENA.",
        introduction:
          "QwickSite is building practical tools that help businesses launch and operate online. Verified open roles will be published here when available.",
        sections: [
          {
            title: "What we work on",
            paragraphs: [
              "Our product work spans website creation, visual editing, multilingual experiences, commerce, operations, reliability, and customer success.",
            ],
          },
          {
            title: "Open positions",
            paragraphs: [
              "There are no verified public role listings in this repository today. Contact the team for current opportunities rather than relying on an outdated listing.",
            ],
          },
        ],
      },
      ar: {
        title: "العمل في QwickSite",
        eyebrow: "ابنِ معنا",
        description:
          "تعرّف على العمل مع فريق QwickSite في إنشاء المواقع بمساعدة الذكاء الاصطناعي والتجارة والأدوات الرقمية لمصر والمنطقة.",
        introduction:
          "يبني QwickSite أدوات عملية تساعد الأنشطة على الإطلاق والتشغيل عبر الإنترنت. ستُنشر الوظائف المؤكدة هنا عند توفرها.",
        sections: [
          {
            title: "ما الذي نعمل عليه؟",
            paragraphs: [
              "يشمل عمل المنتج إنشاء المواقع والتحرير البصري والتجارب متعددة اللغات والتجارة والتشغيل والموثوقية ونجاح العملاء.",
            ],
          },
          {
            title: "الوظائف المفتوحة",
            paragraphs: [
              "لا توجد حالياً وظائف عامة مؤكدة في هذا المستودع. تواصل مع الفريق لمعرفة الفرص الحالية بدلاً من الاعتماد على إعلان قديم.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "contact",
    dateModified: "2026-07-25",
    relatedSlugs: ["about", "pricing", "help-center"],
    content: {
      en: {
        title: "Contact QwickSite",
        eyebrow: "Talk to the team",
        description:
          "Contact QwickSite about plans, onboarding, website creation, online stores, integrations, or support in Egypt and MENA.",
        introduction:
          "Share your business, target market, timeline, language, website, and commerce requirements so the team can direct you to the relevant next step.",
        sections: [
          {
            title: "Email and phone",
            paragraphs: [
              "Email support@qwicksite.com or call +20 106 203 4597. For faster context, include the website or account name and a concise description of the goal.",
            ],
          },
          {
            title: "Visit or write to us",
            paragraphs: [
              "QwickSite lists its contact address at 17 Abbas El Akkad, Nasr City, Cairo, Egypt.",
            ],
          },
        ],
      },
      ar: {
        title: "تواصل مع QwickSite",
        eyebrow: "تحدث مع الفريق",
        description:
          "تواصل مع QwickSite بخصوص الخطط أو الإعداد أو إنشاء المواقع أو المتاجر أو التكاملات أو الدعم في مصر والمنطقة.",
        introduction:
          "شارك نوع نشاطك والسوق والموعد واللغة ومتطلبات الموقع والتجارة حتى يوجهك الفريق إلى الخطوة المناسبة.",
        sections: [
          {
            title: "البريد والهاتف",
            paragraphs: [
              "راسل support@qwicksite.com أو اتصل على ‎+20 106 203 4597. أضف اسم الموقع أو الحساب ووصفاً مختصراً للهدف لتسريع المساعدة.",
            ],
          },
          {
            title: "العنوان",
            paragraphs: [
              "عنوان التواصل المنشور لـQwickSite هو 17 عباس العقاد، مدينة نصر، القاهرة، مصر.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "help-center",
    dateModified: "2026-07-25",
    relatedSlugs: ["documentation", "contact", "features"],
    content: {
      en: {
        title: "QwickSite Help Center",
        eyebrow: "Find the right support path",
        description:
          "Get QwickSite help for setup, plans, domains, content, products, orders, integrations, and troubleshooting.",
        introduction:
          "Start with the feature and account details involved, then use documentation or contact support with the exact page, action, and error.",
        sections: [
          {
            title: "Before contacting support",
            paragraphs: [
              "Collect the affected website or account, the page URL, the steps taken, the expected result, and a screenshot that contains no private credentials.",
            ],
          },
          {
            title: "Contact support",
            paragraphs: [
              "Use the QwickSite Support Center for WhatsApp, email, phone, and current contact information.",
            ],
          },
        ],
      },
      ar: {
        title: "مركز مساعدة QwickSite",
        eyebrow: "اعثر على مسار الدعم المناسب",
        description:
          "احصل على مساعدة QwickSite في الإعداد والخطط والنطاقات والمحتوى والمنتجات والطلبات والتكاملات وحل المشكلات.",
        introduction:
          "ابدأ بتحديد الميزة والحساب، ثم استخدم التوثيق أو تواصل مع الدعم مع ذكر الصفحة والإجراء والخطأ بالتحديد.",
        sections: [
          {
            title: "قبل التواصل مع الدعم",
            paragraphs: [
              "جهز اسم الموقع أو الحساب ورابط الصفحة والخطوات والنتيجة المتوقعة وصورة لا تحتوي على بيانات دخول خاصة.",
            ],
          },
          {
            title: "تواصل مع الدعم",
            paragraphs: [
              "استخدم مركز دعم QwickSite للوصول إلى واتساب والبريد والهاتف وبيانات التواصل الحالية.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "documentation",
    dateModified: "2026-07-25",
    relatedSlugs: ["help-center", "api-reference", "features"],
    content: {
      en: {
        title: "QwickSite Documentation",
        eyebrow: "Product setup and usage",
        description:
          "Find QwickSite documentation for building pages, managing content, configuring stores, domains, and integrations.",
        introduction:
          "Documentation should describe the current product behavior with clear prerequisites, steps, expected results, and troubleshooting notes.",
        sections: [
          {
            title: "Builder and content",
            paragraphs: [
              "Use the product documentation for page structure, visual editing, responsive controls, media, forms, languages, and publishing.",
            ],
          },
          {
            title: "Commerce and operations",
            paragraphs: [
              "Use the operational guides for products, orders, checkout, shipping, discounts, plans, integrations, analytics, and domains.",
            ],
          },
        ],
      },
      ar: {
        title: "توثيق QwickSite",
        eyebrow: "إعداد المنتج واستخدامه",
        description:
          "اعثر على توثيق QwickSite لبناء الصفحات وإدارة المحتوى وإعداد المتاجر والنطاقات والتكاملات.",
        introduction:
          "يجب أن يصف التوثيق سلوك المنتج الحالي مع المتطلبات والخطوات والنتائج المتوقعة وملاحظات حل المشكلات.",
        sections: [
          {
            title: "المنشئ والمحتوى",
            paragraphs: [
              "استخدم توثيق المنتج لبنية الصفحات والتحرير البصري والتحكم المتجاوب والوسائط والنماذج واللغات والنشر.",
            ],
          },
          {
            title: "التجارة والتشغيل",
            paragraphs: [
              "استخدم أدلة التشغيل للمنتجات والطلبات وإتمام الشراء والشحن والخصومات والخطط والتكاملات والتحليلات والنطاقات.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "api-reference",
    dateModified: "2026-07-25",
    relatedSlugs: ["documentation", "help-center"],
    content: {
      en: {
        title: "QwickSite API Reference",
        eyebrow: "Integration reference",
        description:
          "Review published QwickSite API endpoints, authentication requirements, payloads, responses, and integration behavior.",
        introduction:
          "Only endpoints approved for external use should be documented publicly. Never place private credentials or internal-only routes on this page.",
        sections: [
          {
            title: "Current API availability",
            paragraphs: [
              "No complete public API contract is present in the landing-site repository. Contact QwickSite before building an external integration against undocumented endpoints.",
            ],
          },
          {
            title: "What a public reference will include",
            paragraphs: [
              "Published documentation will include authentication, scope, request fields, examples, response codes, rate limits, versioning, and support contacts.",
            ],
          },
        ],
      },
      ar: {
        title: "مرجع واجهة QwickSite",
        eyebrow: "مرجع التكامل",
        description:
          "راجع نقاط واجهة QwickSite المنشورة ومتطلبات المصادقة والبيانات والاستجابات وسلوك التكامل.",
        introduction:
          "يجب نشر النقاط المعتمدة للاستخدام الخارجي فقط. لا تضع بيانات دخول خاصة أو مسارات داخلية في هذه الصفحة.",
        sections: [
          {
            title: "توفر الواجهة حالياً",
            paragraphs: [
              "لا يحتوي مستودع الموقع التعريفي على عقد API عام كامل. تواصل مع QwickSite قبل بناء تكامل خارجي على نقاط غير موثقة.",
            ],
          },
          {
            title: "ما الذي سيتضمنه المرجع العام؟",
            paragraphs: [
              "سيشمل التوثيق المنشور المصادقة والنطاق وحقول الطلب والأمثلة وأكواد الاستجابة وحدود الاستخدام والإصدارات والدعم.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "status",
    dateModified: "2026-07-25",
    relatedSlugs: ["help-center", "contact"],
    content: {
      en: {
        title: "QwickSite Service Status",
        eyebrow: "Platform availability",
        description:
          "Find the current path for QwickSite service availability, incident communication, and support.",
        introduction:
          "A status page must be connected to live monitoring before it claims real-time availability.",
        sections: [
          {
            title: "Current status source",
            paragraphs: [
              "This landing repository does not contain a live status provider. Contact support for a current incident check until an approved monitoring page is connected.",
            ],
          },
          {
            title: "Incident communication",
            paragraphs: [
              "Future status updates should include affected services, start time, customer impact, mitigation, resolution, and follow-up.",
            ],
          },
        ],
      },
      ar: {
        title: "حالة خدمة QwickSite",
        eyebrow: "توفر المنصة",
        description:
          "اعثر على المسار الحالي لمعرفة توفر خدمة QwickSite والتواصل وقت الأعطال والدعم.",
        introduction:
          "يجب ربط صفحة الحالة بمراقبة حية قبل ادعاء عرض التوفر في الوقت الفعلي.",
        sections: [
          {
            title: "مصدر الحالة الحالي",
            paragraphs: [
              "لا يحتوي مستودع الموقع على مزود حالة حي. تواصل مع الدعم للتحقق من أي عطل حالي حتى يتم ربط صفحة مراقبة معتمدة.",
            ],
          },
          {
            title: "التواصل وقت الأعطال",
            paragraphs: [
              "يجب أن تشمل تحديثات الحالة المستقبلية الخدمات المتأثرة ووقت البداية وتأثير العملاء والإجراء والحل والمتابعة.",
            ],
          },
        ],
      },
    },
  },
];

export function getMarketingPage(slug: string) {
  return marketingPages.find((page) => page.slug === slug);
}

export function getMarketingPageContent(slug: string, locale: AppLocale) {
  return getMarketingPage(slug)?.content[locale];
}
