import type { MarketingPage } from "./marketing-pages";

/**
 * Restaurant menu, Saudi/UAE store and social-selling landing pages (docs/community-growth-channels-plan.md 10.3).
 * Claims are limited to what ships today: a digital menu (sections, filters, QR), stores with cart and checkout, per-country shipping,
 * Instagram DM commerce. Online food ordering and WhatsApp automation are NOT claimed (still planned); payment methods are always "verify".
 */
export const sellingPages: MarketingPage[] = [
  {
    slug: "restaurant-digital-menu-website",
    dateModified: "2026-11-24",
    relatedSlugs: ["arabic-website-builder", "booking-website-builder", "ai-website-builder-egypt"],
    content: {
      en: {
        title: "Restaurant and Cafe Website with a Digital Menu",
        eyebrow: "A menu people open from a QR code or a link",
        description:
          "Build a restaurant or cafe website with an interactive digital menu, sections, photos, tags, and a QR code, in Arabic and English.",
        introduction:
          "Printed menus get outdated and PDFs are hard to read on a phone. A digital menu on your own website stays current and is easy to share.",
        sections: [
          {
            title: "An interactive menu that works on phones",
            paragraphs: [
              "Organize items into sections with sticky tabs, photos, prices, descriptions, and tags such as vegetarian or spicy, with sold-out states, so guests find what they want quickly.",
            ],
          },
          {
            title: "One QR code and one link",
            paragraphs: [
              "Put your menu link on tables, packaging, Instagram, and Google Maps. Update an item once and every place shows the change.",
            ],
          },
          {
            title: "Your website, not just a menu",
            paragraphs: [
              "Add opening hours, location, photos, reviews, and contact buttons in Arabic and English. If you also take table or event reservations, you can add a booking page.",
            ],
          },
          {
            title: "Be clear about ordering",
            paragraphs: [
              "The menu shows your food and prices. Check which ordering and payment features are available on your plan before announcing online ordering to customers.",
            ],
          },
        ],
      },
      ar: {
        title: "موقع مطعم أو كافيه مع منيو رقمي",
        eyebrow: "منيو يفتحه الناس من QR أو رابط",
        description:
          "أنشئ موقعاً لمطعمك أو الكافيه مع منيو رقمي تفاعلي وأقسام وصور ووسوم ورمز QR بالعربية والإنجليزية.",
        introduction:
          "المنيو المطبوع يتقادم وملفات PDF صعبة القراءة على الجوال. المنيو الرقمي على موقعك يبقى محدثاً وسهل المشاركة.",
        sections: [
          {
            title: "منيو تفاعلي مناسب للجوال",
            paragraphs: [
              "نظّم الأصناف في أقسام بتبويبات ثابتة وصور وأسعار ووصف ووسوم مثل نباتي أو حار وحالة غير متوفر، ليجد الضيف ما يريد بسرعة.",
            ],
          },
          {
            title: "رمز QR واحد ورابط واحد",
            paragraphs: [
              "ضع رابط المنيو على الطاولات والعبوات وإنستجرام وخرائط جوجل. عدّل الصنف مرة واحدة فيظهر التغيير في كل مكان.",
            ],
          },
          {
            title: "موقع كامل وليس منيو فقط",
            paragraphs: [
              "أضف ساعات العمل والموقع والصور والتقييمات وأزرار التواصل بالعربية والإنجليزية. ولو تستقبل حجوزات طاولات أو مناسبات يمكنك إضافة صفحة حجز.",
            ],
          },
          {
            title: "كن واضحاً بشأن الطلب",
            paragraphs: [
              "المنيو يعرض أصنافك وأسعارها. راجع ميزات الطلب والدفع المتاحة في باقتك قبل أن تعلن للعملاء عن الطلب أونلاين.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "online-store-builder-saudi-arabia",
    dateModified: "2026-11-24",
    relatedSlugs: ["ai-website-builder-saudi-arabia", "qwicksite-vs-salla", "qwicksite-vs-zid"],
    content: {
      en: {
        title: "Online Store Builder for Saudi Arabia",
        eyebrow: "An Arabic-first store for Saudi customers",
        description:
          "Create an online store for Saudi Arabia with Arabic right-to-left pages, products, cart, checkout, shipping by country and city, and orders.",
        introduction:
          "Saudi customers shop on mobile and expect Arabic, clear delivery information, and a simple checkout. QwickSite lets you build and edit that store visually.",
        sections: [
          {
            title: "Arabic and English storefront",
            paragraphs: [
              "Publish right-to-left Arabic pages and English pages, with product pages, categories, offers, and policies you can edit visually.",
            ],
          },
          {
            title: "Shipping and tax set up for where you sell",
            paragraphs: [
              "Choose the countries and cities you deliver to and set shipping rates. Configure tax rules for your business and confirm requirements such as VAT with your accountant.",
            ],
          },
          {
            title: "Compare before you switch",
            paragraphs: [
              "If you are weighing QwickSite against Salla or Zid, compare plan limits, fees, payment and delivery integrations, and Arabic support using your own order volume.",
            ],
          },
          {
            title: "Verify payment options",
            paragraphs: [
              "Check which payment methods, such as local cards or wallets, are supported for your store and plan before launch, and test a real order.",
            ],
          },
        ],
      },
      ar: {
        title: "منشئ متاجر إلكترونية للسعودية",
        eyebrow: "متجر عربي أولاً للعملاء في السعودية",
        description:
          "أنشئ متجراً إلكترونياً للسعودية بصفحات عربية من اليمين لليسار ومنتجات وسلة وإتمام شراء وشحن حسب الدولة والمدينة وطلبات.",
        introduction:
          "العميل السعودي يتسوق من الجوال ويتوقع العربية ومعلومات توصيل واضحة وخطوات شراء بسيطة. يتيح لك QwickSite بناء هذا المتجر وتحريره بصرياً.",
        sections: [
          {
            title: "واجهة بالعربية والإنجليزية",
            paragraphs: [
              "انشر صفحات عربية من اليمين لليسار وأخرى إنجليزية، مع صفحات منتجات وفئات وعروض وسياسات تحررها بصرياً.",
            ],
          },
          {
            title: "شحن وضرائب حسب مكان بيعك",
            paragraphs: [
              "اختر الدول والمدن التي توصل إليها وحدد أسعار الشحن. اضبط قواعد الضريبة لنشاطك وتأكد من متطلبات مثل ضريبة القيمة المضافة مع محاسبك.",
            ],
          },
          {
            title: "قارن قبل أن تنتقل",
            paragraphs: [
              "لو تقارن QwickSite بسلة أو زد فقارن حدود الباقات والرسوم وتكاملات الدفع والتوصيل ودعم العربية بحسب حجم طلباتك أنت.",
            ],
          },
          {
            title: "تحقق من خيارات الدفع",
            paragraphs: [
              "تأكد من طرق الدفع المدعومة لمتجرك وباقتك مثل البطاقات المحلية أو المحافظ قبل الإطلاق، وجرّب طلباً حقيقياً.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "online-store-builder-uae",
    dateModified: "2026-11-24",
    relatedSlugs: ["ai-website-builder-uae", "ecommerce-platform-mena", "qwicksite-vs-shopify"],
    content: {
      en: {
        title: "Online Store Builder for the UAE",
        eyebrow: "A bilingual store for Dubai, Abu Dhabi, and beyond",
        description:
          "Build an online store for the UAE with English and Arabic pages, products, checkout, shipping by emirate or city, and orders.",
        introduction:
          "UAE shoppers are international and mobile-first. A store that works in English and Arabic, shows clear delivery terms, and loads quickly helps convert them.",
        sections: [
          {
            title: "Bilingual from day one",
            paragraphs: [
              "Create English and Arabic storefronts with product pages, categories, offers, and policies, edited visually without code.",
            ],
          },
          {
            title: "Sell locally and internationally",
            paragraphs: [
              "Choose the countries and cities you ship to, set shipping rates, and show prices in a currency your customers recognize. Confirm tax and customs obligations for your business.",
            ],
          },
          {
            title: "Compare with Shopify",
            paragraphs: [
              "If you are considering Shopify, compare monthly cost, transaction fees, apps you would need, and Arabic support using your expected sales.",
            ],
          },
          {
            title: "Verify payments",
            paragraphs: [
              "Check which payment methods are available for your store and plan, and test a full order before you advertise.",
            ],
          },
        ],
      },
      ar: {
        title: "منشئ متاجر إلكترونية للإمارات",
        eyebrow: "متجر ثنائي اللغة لدبي وأبوظبي وغيرهما",
        description:
          "أنشئ متجراً إلكترونياً للإمارات بصفحات إنجليزية وعربية ومنتجات وإتمام شراء وشحن حسب الإمارة أو المدينة وطلبات.",
        introduction:
          "المتسوق في الإمارات متنوع الجنسيات ويعتمد على الجوال. متجر بالإنجليزية والعربية بشروط توصيل واضحة وسرعة تحميل يرفع فرص الشراء.",
        sections: [
          {
            title: "ثنائي اللغة من اليوم الأول",
            paragraphs: [
              "أنشئ واجهات إنجليزية وعربية بصفحات منتجات وفئات وعروض وسياسات، وحررها بصرياً بدون كود.",
            ],
          },
          {
            title: "بِع محلياً ودولياً",
            paragraphs: [
              "اختر الدول والمدن التي تشحن إليها وحدد أسعار الشحن واعرض الأسعار بعملة يعرفها عملاؤك. وتأكد من الالتزامات الضريبية والجمركية لنشاطك.",
            ],
          },
          {
            title: "قارن مع شوبيفاي",
            paragraphs: [
              "لو تفكر في شوبيفاي فقارن التكلفة الشهرية ورسوم المعاملات والتطبيقات التي ستحتاجها ودعم العربية بحسب مبيعاتك المتوقعة.",
            ],
          },
          {
            title: "تحقق من الدفع",
            paragraphs: [
              "راجع طرق الدفع المتاحة لمتجرك وباقتك وجرّب طلباً كاملاً قبل الإعلان.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "sell-on-instagram-and-whatsapp",
    dateModified: "2026-11-24",
    relatedSlugs: ["ai-store-builder", "online-store-builder-egypt", "ecommerce-platform-mena"],
    content: {
      en: {
        title: "Sell from Instagram and WhatsApp with a Real Store",
        eyebrow: "Stop managing orders in chat threads",
        description:
          "Turn Instagram and WhatsApp followers into orders with a real online store: products, cart, checkout, and order tracking in one place.",
        introduction:
          "Selling only by direct message means retyping prices, losing orders in long threads, and answering the same questions all day. A store gives customers one link where they can see, choose, and order.",
        sections: [
          {
            title: "One link for every chat and story",
            paragraphs: [
              "Share your store link in your Instagram bio, stories, and WhatsApp chats and status. Customers browse products, add to cart, and check out without waiting for a reply.",
            ],
          },
          {
            title: "Orders in one list",
            paragraphs: [
              "Every order lands in your admin area with its details and status, instead of being scattered across messages and screenshots.",
            ],
          },
          {
            title: "Instagram message shopping",
            paragraphs: [
              "Connect your Instagram business account so customers who message you can be guided to products. Review the setup requirements and availability for your account type first.",
            ],
          },
          {
            title: "Keep the personal touch",
            paragraphs: [
              "Add WhatsApp and phone contact buttons so customers can still ask a question before buying.",
            ],
          },
        ],
      },
      ar: {
        title: "بِع من إنستجرام وواتساب عبر متجر حقيقي",
        eyebrow: "كفاية إدارة الطلبات في المحادثات",
        description:
          "حوّل متابعيك على إنستجرام وواتساب إلى طلبات عبر متجر إلكتروني حقيقي: منتجات وسلة وإتمام شراء ومتابعة طلبات في مكان واحد.",
        introduction:
          "البيع بالرسائل فقط معناه كتابة الأسعار كل مرة وضياع الطلبات في محادثات طويلة والرد على نفس الأسئلة طول اليوم. المتجر يعطي العميل رابطاً واحداً يشاهد منه ويختار ويطلب.",
        sections: [
          {
            title: "رابط واحد لكل محادثة وستوري",
            paragraphs: [
              "شارك رابط متجرك في بايو إنستجرام والستوري ومحادثات واتساب وحالته. يتصفح العميل المنتجات ويضيف للسلة ويُتم الشراء بدون انتظار رد.",
            ],
          },
          {
            title: "كل الطلبات في قائمة واحدة",
            paragraphs: [
              "تصل كل طلبية إلى لوحة التحكم بتفاصيلها وحالتها بدل أن تتفرق بين الرسائل ولقطات الشاشة.",
            ],
          },
          {
            title: "التسوق عبر رسائل إنستجرام",
            paragraphs: [
              "اربط حسابك التجاري على إنستجرام ليتم توجيه العملاء الذين يراسلونك إلى المنتجات. راجع متطلبات الإعداد وتوفرها لنوع حسابك أولاً.",
            ],
          },
          {
            title: "احتفظ باللمسة الشخصية",
            paragraphs: [
              "أضف أزرار واتساب والاتصال ليظل بإمكان العميل أن يسأل قبل أن يشتري.",
            ],
          },
        ],
      },
    },
  },
];
