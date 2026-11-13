import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Coins, Gift, LayoutDashboard, Medal, Megaphone, Repeat, Share2, Trophy, UserPlus, Users, Wallet } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PartnerJoinLink from "@/components/layout/PartnerJoinLink";
import PartnerHeroCopy from "@/components/partners/PartnerHeroCopy";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AppLocale } from "@/i18n/routing";
import { PARTNER_JOIN_URL, PARTNER_LOGIN_URL, fetchPartnerProgram, partnerEarnRate } from "@/lib/partner-program";
import { createBreadcrumbSchema, createPageMetadata, createWebPageSchema } from "@/lib/seo";

export const revalidate = 300;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return createPageMetadata({
    locale: locale as AppLocale,
    path: "/partners",
    title: ar ? "برنامج شركاء QwickSite: اربح من كل عميل تجلبه" : "QwickSite Partner Program: Earn From Every Customer You Bring",
    description: ar
      ? "انضم مجانًا واحصل على كود خصم خاص بك. يحصل عملاؤك على خصم وتربح أنت عمولة، وتستمر في الربح عند تجديدهم. مستويات ومهام ومكافآت نقدية."
      : "Join free and get your own discount code. Your customers save, you earn a commission, and you keep earning when they renew. Tiers, missions and cash rewards.",
  });
}

const fmt = (n: number) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(n);

export default async function PartnersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const localeKey = locale as AppLocale;
  const ar = localeKey === "ar";
  const program = await fetchPartnerProgram();
  const t = (en: string, arText: string) => (ar ? arText : en);

  const title = t("Earn every time your customers pay", "اربح كل مرة يدفع فيها عملاؤك");
  const description = t(
    "Share your personal code. People who use it save on their first payment, you earn a commission, and the more customers you bring, the more you both get.",
    "شارك كودك الخاص. من يستخدمه يحصل على خصم في أول دفعة، وتربح أنت عمولة، وكلما زاد عدد عملائك زادت المكافآت للطرفين."
  );
  const breadcrumbs = [
    { name: t("Home", "الرئيسية"), path: "/" },
    { name: t("Partner program", "برنامج الشركاء"), path: "/partners" },
  ];

  const steps = [
    { icon: UserPlus, title: t("Join free in a minute", "انضم مجانًا في دقيقة"), text: t("No website, store or subscription needed. You only get a partner dashboard and your personal code.", "لا تحتاج موقعًا أو متجرًا أو اشتراكًا. تحصل فقط على لوحة شريك وكودك الخاص.") },
    { icon: Share2, title: t("Share your code or link", "شارك كودك أو رابطك"), text: t("It works on any QwickSite plan. Customers get a discount on their first payment.", "يعمل على أي باقة في QwickSite. يحصل العميل على خصم في أول دفعة.") },
    { icon: Coins, title: t("Earn, and keep earning", "اربح واستمر في الربح"), text: program.recurring
        ? t("You earn on their first payment and on their renewals too, so a good customer keeps paying you back.", "تربح من أول دفعة ومن التجديدات أيضًا، فيستمر العميل الجيد في مكافأتك.")
        : t("You earn a commission on every customer's first payment, and you level up as you grow.", "تربح عمولة على أول دفعة لكل عميل، وترتقي بمستواك كلما زاد عدد عملائك.") },
  ];

  const perks = [
    { icon: LayoutDashboard, title: t("A dashboard you will want to open", "لوحة تحب أن تفتحها"), text: t("See customers, earnings and progress at a glance, in English or Arabic.", "تابع العملاء والأرباح والتقدم بنظرة واحدة، بالعربية أو الإنجليزية.") },
    { icon: Medal, title: t("Tiers that grow with you", "مستويات تكبر معك"), text: t("Reach a higher tier and your customers get a bigger discount and you get a bigger share.", "عند الوصول لمستوى أعلى يحصل عملاؤك على خصم أكبر وتحصل أنت على نسبة أكبر.") },
    { icon: Trophy, title: t("Missions, challenges and badges", "مهام وتحديات وشارات"), text: t("Hit a goal like your first 10 customers and a cash reward is added to your earnings.", "حقق هدفًا مثل أول 10 عملاء وتُضاف مكافأة نقدية إلى أرباحك.") },
    { icon: Wallet, title: t("Paid your way", "استلم أرباحك بطريقتك"), text: t("InstaPay, mobile wallets or bank transfer, in EGP or USD.", "إنستاباي أو المحافظ الإلكترونية أو التحويل البنكي، بالجنيه أو الدولار.") },
  ];

  const audiences = [
    t("Agencies and freelancers building sites for clients", "الوكالات والمستقلون الذين يبنون مواقع للعملاء"),
    t("Creators and educators with an audience", "صناع المحتوى والمدربون أصحاب الجمهور"),
    t("Consultants and communities of store owners", "المستشارون ومجتمعات أصحاب المتاجر"),
    t("Anyone who knows a business that needs a website", "أي شخص يعرف نشاطًا يحتاج موقعًا"),
  ];

  const faqs = [
    { q: t("Does it cost anything to join?", "هل الانضمام مجاني؟"), a: t("No. Joining is free and you do not need a QwickSite plan.", "نعم مجاني، ولا تحتاج إلى باقة في QwickSite.") },
    { q: t("When and how do I get paid?", "متى وكيف أستلم أرباحي؟"), a: t("Each commission is held for a short period to cover refunds, then becomes payable. You choose how to be paid and we pay in the currency the customer paid in.", "تُحجز كل عمولة لفترة قصيرة لتغطية المرتجعات ثم تصبح قابلة للدفع. تختار طريقة الاستلام وندفع بنفس عملة دفع العميل.") },
    { q: t("What counts as a customer?", "ما الذي يُحتسب كعميل؟"), a: t("A business that completes a paid plan payment with your code. Refunded or charged-back payments do not count.", "نشاط يُتمّ دفعة باقة مدفوعة باستخدام كودك. لا تُحتسب الدفعات المستردة.") },
    { q: t("Is there a limit on how much I can earn?", "هل يوجد حد لما يمكنني ربحه؟"), a: t("No cap on the number of customers. Commission rules, what is not allowed and how renewals work are all in the partner terms, which you can read before you join.", "لا يوجد حد لعدد العملاء. قواعد العمولة والممنوعات وطريقة التجديدات كلها في شروط الشركاء التي يمكنك قراءتها قبل الانضمام.") },
  ];

  return (
    <div className="min-h-screen">
      <JsonLd
        id="qwicksite-partners-schema"
        data={[
          createWebPageSchema({ locale: localeKey, path: "/partners", title, description }),
          createBreadcrumbSchema(localeKey, "/partners", breadcrumbs),
          { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        ]}
      />
      <Header />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pb-20">
        {/* Hero */}
        <section className="container pt-8 md:pt-14">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-card/40 border-primary/30">
              <Megaphone className="w-4 h-4 me-2" aria-hidden="true" />
              {t("Partner program", "برنامج الشركاء")}
            </Badge>
            <PartnerHeroCopy
              a={{ title, description }}
              b={{
                title: t("Find shops with no website. Help them get one.", "دوّر على المحلات اللي مالهاش موقع. وساعدها تبقى أونلاين."),
                description: t(
                  "Open Google Maps, spot a business that is invisible online, show it a free draft, and earn a commission when it joins.",
                  "افتح خرائط جوجل، لاقي نشاط مش موجود أونلاين، وريه مسودة مجانية، وتكسب عمولة لما ينضم."
                ),
              }}
            />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <PartnerJoinLink href={PARTNER_JOIN_URL} size="lg" className="w-full sm:w-auto">
                {t("Join the partner program", "انضم إلى برنامج الشركاء")}
                <ArrowRight className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" />
              </PartnerJoinLink>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href={PARTNER_LOGIN_URL}>{t("Already a partner? Sign in", "شريك بالفعل؟ سجّل الدخول")}</a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">{t("Free to join. No store or plan needed.", "الانضمام مجاني. لا حاجة إلى متجر أو باقة.")}</p>
          </div>
        </section>

        {/* How it works */}
        <section className="container mt-16 md:mt-24" aria-labelledby="how-title">
          <h2 id="how-title" className="text-2xl md:text-4xl font-bold text-center mb-10">{t("How it works", "كيف يعمل")}</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Card className="h-full border-border/60 bg-card/60 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><s.icon className="w-5 h-5 text-primary" aria-hidden="true" /></span>
                      <span className="text-sm font-semibold text-muted-foreground">{t("Step", "الخطوة")} {i + 1}</span>
                    </div>
                    <CardTitle className="text-xl pt-2">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">{s.text}</CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </section>

        {/* Tiers */}
        <section className="container mt-16 md:mt-24" aria-labelledby="tiers-title">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
            <h2 id="tiers-title" className="text-2xl md:text-4xl font-bold">{t("The more customers, the better it gets", "كلما زاد العملاء زادت المكافآت")}</h2>
            <p className="text-muted-foreground">{t("Your tier is based on how many paying customers you bring. Each step up gives your customers a bigger discount and you a bigger share.", "يعتمد مستواك على عدد العملاء الدافعين الذين تجلبهم. كل مستوى أعلى يمنح عملاءك خصمًا أكبر ويمنحك نسبة أكبر.")}</p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {program.tiers.map((tier, i) => (
              <li key={tier.name}>
                <Card className={`h-full border-border/60 bg-card/60 backdrop-blur-sm ${i === program.tiers.length - 1 ? "border-primary/50" : ""}`}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {tier.min === 0 ? t("From your first customer", "من أول عميل") : <>{t("From", "من")} <bdi>{fmt(tier.min)}</bdi> {t("customers", "عميل")}</>}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="flex items-center gap-2"><Gift className="w-4 h-4 text-primary" aria-hidden="true" /><span><strong><bdi>{fmt(tier.rate)}%</bdi></strong> {t("off for your customers", "خصم لعملائك")}</span></p>
                    <p className="flex items-center gap-2"><Coins className="w-4 h-4 text-primary" aria-hidden="true" /><span><strong><bdi>{fmt(partnerEarnRate(tier.rate, program.commissionRatio))}%</bdi></strong> {t("of each sale's net for you", "من صافي كل عملية بيع لك")}</span></p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
          {program.recurring && (
            <div className="max-w-3xl mx-auto mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-5 flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Repeat className="w-5 h-5 text-primary" aria-hidden="true" /></span>
              <div>
                <h3 className="font-semibold">{t("Not a one-time reward", "ليست مكافأة لمرة واحدة")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-1">{t("Customers you bring can keep earning you commission when they renew. Terms apply, and you can read them before you join.", "العملاء الذين تجلبهم قد يستمرون في منحك عمولة عند التجديد. تُطبّق الشروط ويمكنك قراءتها قبل الانضمام.")}</p>
              </div>
            </div>
          )}
        </section>

        {/* Perks */}
        <section className="container mt-16 md:mt-24" aria-labelledby="perks-title">
          <h2 id="perks-title" className="text-2xl md:text-4xl font-bold text-center mb-10">{t("Built to keep you motivated", "مصمم ليحفزك")}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {perks.map((p) => (
              <li key={p.title} className="flex gap-4 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-6">
                <span className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><p.icon className="w-5 h-5 text-primary" aria-hidden="true" /></span>
                <div><h3 className="font-semibold text-lg">{p.title}</h3><p className="text-muted-foreground mt-1 leading-relaxed">{p.text}</p></div>
              </li>
            ))}
          </ul>
        </section>

        {/* Audience */}
        <section className="container mt-16 md:mt-24" aria-labelledby="who-title">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-8">
            <h2 id="who-title" className="text-2xl md:text-3xl font-bold flex items-center gap-3"><Users className="w-6 h-6 text-primary" aria-hidden="true" />{t("Who it is for", "لمن هذا البرنامج")}</h2>
            <ul className="mt-5 space-y-3">
              {audiences.map((a) => (
                <li key={a} className="flex items-start gap-3 text-muted-foreground"><BadgeCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />{a}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mt-16 md:mt-24" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-2xl md:text-4xl font-bold text-center mb-8">{t("Questions", "أسئلة شائعة")}</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm px-5 py-4 open:border-primary/40">
                <summary className="cursor-pointer list-none font-medium flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-primary transition-transform group-open:rotate-45 text-xl leading-none" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mt-16 md:mt-24">
          <div className="max-w-3xl mx-auto text-center rounded-3xl border border-primary/30 bg-primary/5 px-6 py-12 space-y-5">
            <h2 className="text-2xl md:text-4xl font-bold text-balance">{t("Ready to start earning?", "جاهز لتبدأ الربح؟")}</h2>
            <p className="text-muted-foreground">{t("Get your code in a minute. It is free.", "احصل على كودك في دقيقة. مجانًا.")}</p>
            <PartnerJoinLink href={PARTNER_JOIN_URL} size="lg">
              {t("Join the partner program", "انضم إلى برنامج الشركاء")}
              <ArrowRight className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" />
            </PartnerJoinLink>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
