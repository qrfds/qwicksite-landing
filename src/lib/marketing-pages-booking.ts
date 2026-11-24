import type { MarketingPage } from "./marketing-pages";

/**
 * Booking-led landing pages (docs/community-growth-channels-plan.md 10.3). Claims stay to what the product does:
 * services with duration and weekly availability, buffers, notice and booking window, confirmation emails, optional price and deposit.
 */
export const bookingPages: MarketingPage[] = [
  {
    slug: "booking-website-builder",
    dateModified: "2026-11-24",
    relatedSlugs: ["salon-booking-website", "clinic-appointment-website", "coach-consultant-booking-website"],
    content: {
      en: {
        title: "Booking Website Builder",
        eyebrow: "Let clients book online instead of through endless messages",
        description:
          "Build a business website with online appointment booking: services, available hours, confirmations, and an Arabic or English booking page.",
        introduction:
          "If bookings arrive by WhatsApp and phone, you lose time on back-and-forth and risk double booking. QwickSite combines a business website with a booking page where clients pick a service and a free time slot.",
        sections: [
          {
            title: "Define services and availability once",
            paragraphs: [
              "Create each service with its duration, weekly working hours, days off, buffer time between appointments, minimum notice, and how far ahead clients can book.",
            ],
            bullets: ["Different hours per service", "Date overrides for holidays", "Only free slots are shown to clients"],
          },
          {
            title: "Confirmations without chasing",
            paragraphs: [
              "Clients receive a confirmation after booking, and you are notified of each new appointment. You can see and cancel appointments from the admin area.",
            ],
          },
          {
            title: "Price or deposit, if you want it",
            paragraphs: [
              "Keep services free, show a price, or ask for a deposit where payments are enabled on your plan. Check the exact options available to your plan before promising them to clients.",
            ],
          },
          {
            title: "A real website around the booking page",
            paragraphs: [
              "Add your services, gallery, prices, location, reviews, and contact buttons, in Arabic and English with mobile-first layouts, on a subdomain or your own domain.",
            ],
          },
        ],
        faqs: [
          {
            question: "Do I need a developer?",
            answer: "No. You edit the site and set up services visually. A first version can be live the same day.",
          },
          {
            question: "Can clients book from their phones?",
            answer: "Yes. The booking page is built for mobile, which is how most clients will use it.",
          },
          {
            question: "Can I use it in Arabic?",
            answer: "Yes. Pages support Arabic right-to-left layouts and English. Booking confirmation emails may differ in language, so test your own flow before launch.",
          },
        ],
      },
      ar: {
        title: "منشئ موقع مع حجز مواعيد أونلاين",
        eyebrow: "خلّي العملاء يحجزون بنفسهم بدل رسائل لا تنتهي",
        description:
          "أنشئ موقعاً لنشاطك مع حجز مواعيد أونلاين: خدمات وأوقات عمل وتأكيدات وصفحة حجز بالعربية أو الإنجليزية.",
        introduction:
          "لو الحجوزات بتوصلك على واتساب والتليفون، بتضيع وقتك في الذهاب والإياب وبيحصل تعارض في المواعيد. QwickSite يجمع موقع نشاطك مع صفحة حجز يختار فيها العميل الخدمة والموعد المتاح.",
        sections: [
          {
            title: "عرّف الخدمات والمواعيد مرة واحدة",
            paragraphs: [
              "أضف كل خدمة بمدتها وساعات العمل الأسبوعية وأيام الإجازة والفاصل بين المواعيد وأقل مهلة للحجز وإلى أي مدى مسموح بالحجز مقدماً.",
            ],
            bullets: ["ساعات مختلفة لكل خدمة", "استثناءات للإجازات والمناسبات", "يظهر للعميل المتاح فقط من المواعيد"],
          },
          {
            title: "تأكيدات بدون مطاردة",
            paragraphs: [
              "يصل العميل تأكيد بعد الحجز، وتصلك إشعارات بكل موعد جديد. وتقدر تتابع المواعيد وتلغيها من لوحة التحكم.",
            ],
          },
          {
            title: "سعر أو عربون لو تحب",
            paragraphs: [
              "اترك الخدمات مجانية أو اعرض سعراً أو اطلب عربوناً حيث تتوفر المدفوعات في باقتك. راجع الخيارات المتاحة في باقتك قبل أن تعد بها عملاءك.",
            ],
          },
          {
            title: "موقع كامل حول صفحة الحجز",
            paragraphs: [
              "أضف خدماتك ومعرض الأعمال والأسعار والموقع والتقييمات وأزرار التواصل، بالعربية والإنجليزية وبتصميم يناسب الجوال، على نطاق فرعي أو نطاقك الخاص.",
            ],
          },
        ],
        faqs: [
          {
            question: "هل أحتاج مطوراً؟",
            answer: "لا. تعدّل الموقع وتضبط الخدمات بصرياً، ويمكن إطلاق نسخة أولى في نفس اليوم.",
          },
          {
            question: "هل يحجز العملاء من الجوال؟",
            answer: "نعم، صفحة الحجز مصممة للجوال لأنه الأكثر استخداماً بين العملاء.",
          },
          {
            question: "هل يدعم العربية؟",
            answer: "نعم، الصفحات تدعم العربية من اليمين لليسار والإنجليزية. جرّب مسار الحجز كاملاً قبل الإطلاق للتأكد من لغة رسائل التأكيد.",
          },
        ],
      },
    },
  },
  {
    slug: "salon-booking-website",
    dateModified: "2026-11-24",
    relatedSlugs: ["booking-website-builder", "clinic-appointment-website", "arabic-website-builder"],
    content: {
      en: {
        title: "Website with Online Booking for Salons and Beauty Studios",
        eyebrow: "Fewer DMs, fewer no-shows, a fuller calendar",
        description:
          "Create a salon or beauty studio website with a service menu and online booking so clients choose a service and time themselves.",
        introduction:
          "Salons often take bookings in Instagram messages and WhatsApp. A booking page lets clients see services and free times without waiting for a reply.",
        sections: [
          {
            title: "A service menu that sells",
            paragraphs: [
              "List services with duration and optional prices, show your gallery and team, and send people to book from Instagram with one link.",
            ],
          },
          {
            title: "Timing that matches real work",
            paragraphs: [
              "Set different durations per service, buffer time for cleaning or preparation, working days, and holidays, so the calendar reflects what you can actually deliver.",
            ],
          },
          {
            title: "Reduce no-shows",
            paragraphs: [
              "Clients get a confirmation, and you can ask for a deposit on services where payments are enabled on your plan.",
            ],
          },
        ],
        faqs: [
          {
            question: "Can I put the booking link in my Instagram bio?",
            answer: "Yes. Your site has a normal web address that you can place in your bio, stories, and WhatsApp status.",
          },
        ],
      },
      ar: {
        title: "موقع مع حجز أونلاين للصالونات واستوديوهات التجميل",
        eyebrow: "رسائل أقل، تغيّب أقل، ومواعيد أكثر امتلاءً",
        description:
          "أنشئ موقعاً لصالونك أو استوديو التجميل مع قائمة خدمات وحجز أونلاين يختار فيه العميل الخدمة والموعد بنفسه.",
        introduction:
          "كثير من الصالونات تستقبل الحجوزات في رسائل إنستجرام وواتساب. صفحة الحجز تجعل العميل يرى الخدمات والأوقات المتاحة بدون انتظار رد.",
        sections: [
          {
            title: "قائمة خدمات تبيع",
            paragraphs: [
              "اعرض الخدمات بمدتها وأسعارها اختيارياً، وأضف معرض الأعمال والفريق، وأرسل العملاء للحجز من إنستجرام برابط واحد.",
            ],
          },
          {
            title: "توقيت يطابق الشغل الفعلي",
            paragraphs: [
              "حدد مدة مختلفة لكل خدمة، ووقتاً فاصلاً للتجهيز والتنظيف، وأيام العمل والإجازات، فيعكس التقويم ما تستطيع تنفيذه فعلاً.",
            ],
          },
          {
            title: "قلّل التغيّب",
            paragraphs: [
              "يصل العميل تأكيد بعد الحجز، ويمكنك طلب عربون على الخدمات حيث تتوفر المدفوعات في باقتك.",
            ],
          },
        ],
        faqs: [
          {
            question: "هل أضع رابط الحجز في بايو إنستجرام؟",
            answer: "نعم، لموقعك رابط ويب عادي يمكنك وضعه في البايو والستوري وحالة واتساب.",
          },
        ],
      },
    },
  },
  {
    slug: "clinic-appointment-website",
    dateModified: "2026-11-24",
    relatedSlugs: ["booking-website-builder", "salon-booking-website", "arabic-website-builder"],
    content: {
      en: {
        title: "Clinic Website with Online Appointment Booking",
        eyebrow: "A professional site and a calendar patients can use",
        description:
          "Create a clinic or practice website with services, doctors, location, and online appointment booking in Arabic and English.",
        introduction:
          "Patients search online, compare, and want to book quickly. A clear website with an appointment page makes your clinic easier to choose and reduces phone load for reception.",
        sections: [
          {
            title: "Show who you are and where you are",
            paragraphs: [
              "Present services, doctors, working hours, location, and contact buttons in Arabic and English, optimized for mobile search.",
            ],
          },
          {
            title: "Appointments by service",
            paragraphs: [
              "Create a service for each visit type with its own duration, hours, and notice period, so patients only see slots you can offer.",
            ],
          },
          {
            title: "Handle personal data carefully",
            paragraphs: [
              "Collect only the details you need to book, such as name, phone, and a short note. Do not ask patients to put sensitive medical information in free-text fields, and follow the privacy rules that apply to your practice.",
            ],
          },
        ],
      },
      ar: {
        title: "موقع عيادة مع حجز مواعيد أونلاين",
        eyebrow: "موقع احترافي وتقويم يستخدمه المرضى",
        description:
          "أنشئ موقعاً لعيادتك أو مركزك الطبي مع الخدمات والأطباء والموقع وحجز المواعيد أونلاين بالعربية والإنجليزية.",
        introduction:
          "المرضى يبحثون ويقارنون ويريدون الحجز بسرعة. موقع واضح مع صفحة حجز يجعل عيادتك أسهل في الاختيار ويخفف ضغط المكالمات على الاستقبال.",
        sections: [
          {
            title: "اعرض من أنت وأين تجدك",
            paragraphs: [
              "اعرض الخدمات والأطباء وساعات العمل والموقع وأزرار التواصل بالعربية والإنجليزية بتصميم مناسب للجوال والبحث.",
            ],
          },
          {
            title: "مواعيد لكل خدمة",
            paragraphs: [
              "أنشئ خدمة لكل نوع زيارة بمدتها وساعاتها ومهلة الحجز الخاصة بها، فيرى المريض المواعيد التي تقدمها فقط.",
            ],
          },
          {
            title: "تعامل بحذر مع البيانات الشخصية",
            paragraphs: [
              "اجمع فقط ما يلزم للحجز كالاسم والهاتف وملاحظة قصيرة. لا تطلب من المرضى كتابة معلومات طبية حساسة في الحقول النصية، والتزم بقواعد الخصوصية المنطبقة على نشاطك.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "coach-consultant-booking-website",
    dateModified: "2026-11-24",
    relatedSlugs: ["booking-website-builder", "ai-website-builder-uae", "ai-website-builder-saudi-arabia"],
    content: {
      en: {
        title: "Website with Booking for Coaches and Consultants",
        eyebrow: "Turn profile visits into booked sessions",
        description:
          "Build a coach or consultant website with services, credibility sections, and online session booking, in Arabic and English.",
        introduction:
          "Coaches and consultants win clients through trust. A personal website shows your approach and results, and a booking page turns interest into a scheduled session.",
        sections: [
          {
            title: "Build trust first",
            paragraphs: [
              "Add your story, services, client testimonials with permission, articles, and clear next steps, in Arabic and English for regional and international clients.",
            ],
          },
          {
            title: "Sessions across time zones",
            paragraphs: [
              "Set the time zone and working hours for each service, with a location such as phone, in person, or a meeting link that you provide.",
            ],
          },
          {
            title: "Free intro call or paid session",
            paragraphs: [
              "Offer a free discovery call, show a price, or collect a deposit where payments are enabled on your plan.",
            ],
          },
        ],
      },
      ar: {
        title: "موقع مع حجز للمدربين والاستشاريين",
        eyebrow: "حوّل زيارات صفحتك إلى جلسات محجوزة",
        description:
          "أنشئ موقعاً للمدرب أو الاستشاري مع الخدمات وأقسام المصداقية وحجز الجلسات أونلاين بالعربية والإنجليزية.",
        introduction:
          "المدربون والاستشاريون يكسبون العملاء بالثقة. الموقع الشخصي يعرض أسلوبك ونتائجك، وصفحة الحجز تحول الاهتمام إلى جلسة مجدولة.",
        sections: [
          {
            title: "ابنِ الثقة أولاً",
            paragraphs: [
              "أضف قصتك وخدماتك وآراء العملاء بإذنهم ومقالاتك وخطوات واضحة تالية، بالعربية والإنجليزية للعملاء في المنطقة وخارجها.",
            ],
          },
          {
            title: "جلسات عبر المناطق الزمنية",
            paragraphs: [
              "حدد المنطقة الزمنية وساعات العمل لكل خدمة، مع مكان الجلسة كالهاتف أو بشكل حضوري أو رابط اجتماع تضيفه أنت.",
            ],
          },
          {
            title: "مكالمة تعارف مجانية أو جلسة مدفوعة",
            paragraphs: [
              "قدّم مكالمة استكشافية مجانية أو اعرض سعراً أو اطلب عربوناً حيث تتوفر المدفوعات في باقتك.",
            ],
          },
        ],
      },
    },
  },
];
