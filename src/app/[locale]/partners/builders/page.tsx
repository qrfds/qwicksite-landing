import type { Metadata } from "next";
import { ArrowRight, Calculator, Code2, MapPinned, MessageSquareText, ShieldCheck, Terminal } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import PartnerJoinLink from "@/components/layout/PartnerJoinLink";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { PARTNER_JOIN_URL, fetchPartnerProgram, partnerEarnRate } from "@/lib/partner-program";
import { createBreadcrumbSchema, createPageMetadata, createWebPageSchema } from "@/lib/seo";

export const revalidate = 300;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return createPageMetadata({
    locale: locale as AppLocale,
    path: "/partners/builders",
    title: ar ? "برنامج الشركاء للمبرمجين والمستقلين: كيف يعمل بالتفصيل" : "QwickSite Partner Program for Builders: How It Works, in Detail",
    description: ar
      ? "الحلقة كاملة بدون تسويق: دور على نشاط بدون موقع، اعمله مسودة مجانية، تواصل بأدب، واكسب عمولة. الأرقام والقواعد والحدود بوضوح."
      : "The whole loop without the marketing: find a business with no website, make a free draft, reach out politely, earn a commission. The numbers, the rules and the limits, stated plainly.",
  });
}

const fmt = (n: number) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(n);

export default async function BuildersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const localeKey = locale as AppLocale;
  const ar = localeKey === "ar";
  const t = (en: string, arText: string) => (ar ? arText : en);
  const program = await fetchPartnerProgram();

  const title = t("The partner program, explained like a spec", "برنامج الشركاء، مشروح زي المواصفات");
  const description = t(
    "No pitch deck. Here is the loop, the maths, the rules and what we have not built yet.",
    "من غير عرض تسويقي. دي الحلقة، والحسابات، والقواعد، واللي لسه معملناهوش."
  );
  const breadcrumbs = [
    { name: t("Home", "الرئيسية"), path: "/" },
    { name: t("Partner program", "برنامج الشركاء"), path: "/partners" },
    { name: t("For builders", "للمبرمجين"), path: "/partners/builders" },
  ];

  const loop = [
    { icon: MapPinned, title: t("1. Find", "١. دوّر"), text: t("Search Google Maps for a kind of business in an area. Businesses whose profile lists no website are your candidates. It is a normal search; nothing is scraped for you and we do not hand out lists.", "ابحث في خرائط جوجل عن نوع نشاط في منطقة. الأنشطة اللي بروفايلها مفيهوش موقع هي المرشحة. ده بحث عادي؛ مفيش سحب بيانات ومبنديش قوائم.") },
    { icon: Code2, title: t("2. Draft", "٢. اعمل مسودة"), text: t("Build a free draft site for that business in QwickSite. Minutes, not days (we aim for 3 to 5 at most, and you can time it yourself).", "اعمل مسودة موقع مجانية للنشاط في QwickSite. دقايق مش أيام (بنستهدف من ٣ لـ ٥ دقايق بحد أقصى، وتقدر تقيسها بنفسك).") },
    { icon: MessageSquareText, title: t("3. Reach out", "٣. تواصل"), text: t("One short, personal message with the draft link and an easy way to say no. No bulk sending. The portal has a message template for this.", "رسالة قصيرة شخصية فيها رابط المسودة وطريقة سهلة للرفض. مفيش إرسال جماعي. في اللوحة قالب رسالة لده.") },
    { icon: Calculator, title: t("4. Earn", "٤. اكسب"), text: t("If the business pays for a plan using your code, you earn a commission. It is computed on the net amount, in the open, below.", "لو النشاط دفع لباقة بكودك، بتكسب عمولة. بتتحسب على الصافي، وبوضوح، تحت.") },
  ];

  return (
    <div className="min-h-screen">
      <JsonLd
        id="qwicksite-partners-builders-schema"
        data={[
          createWebPageSchema({ locale: localeKey, path: "/partners/builders", title, description }),
          createBreadcrumbSchema(localeKey, "/partners/builders", breadcrumbs),
        ]}
      />
      <Header />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pb-20">
        <section className="container pt-8 md:pt-14">
          <div className="max-w-3xl mx-auto space-y-5">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-card/40 border-primary/30">
              <Terminal className="w-4 h-4 me-2" aria-hidden="true" />
              {t("For builders and freelancers", "للمبرمجين والمستقلين")}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">{title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <PartnerJoinLink href={PARTNER_JOIN_URL} size="lg" className="w-full sm:w-auto">
                {t("Read the terms and join (free)", "اقرأ الشروط وانضم (مجانًا)")}
                <ArrowRight className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" />
              </PartnerJoinLink>
            </div>
            <p className="text-sm text-muted-foreground">{t("The partner terms are shown on the signup page before you accept anything.", "شروط الشركاء بتظهر في صفحة التسجيل قبل ما توافق على أي حاجة.")}</p>
          </div>
        </section>

        <section className="container mt-14" aria-labelledby="loop-title">
          <h2 id="loop-title" className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto mb-6">{t("The loop", "الحلقة")}</h2>
          <ol className="max-w-3xl mx-auto grid gap-4">
            {loop.map((s) => (
              <li key={s.title} className="flex gap-4 rounded-2xl border border-border/60 bg-card/60 p-5">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><s.icon className="w-5 h-5 text-primary" aria-hidden="true" /></span>
                <div><h3 className="font-semibold">{s.title}</h3><p className="text-muted-foreground mt-1 leading-relaxed">{s.text}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="container mt-14" aria-labelledby="math-title">
          <div className="max-w-3xl mx-auto">
            <h2 id="math-title" className="text-2xl md:text-3xl font-bold mb-3">{t("The maths", "الحسابات")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                "Customers who use a partner's code get a discount on their first payment. The partner's commission is a share of that discount rate, applied to the net amount: what the customer paid, minus tax, minus the payment provider's fee, minus our direct costs of serving the payment. So it is smaller than the discount, and on a very small payment it can be near zero. Your dashboard shows the exact amount for every sale.",
                "العميل اللي بيستخدم كود الشريك بياخد خصم على أول دفعة. عمولة الشريك نسبة من معدل الخصم ده، مطبقة على المبلغ الصافي: اللي دفعه العميل ناقص الضريبة ورسوم مزود الدفع وتكلفتنا المباشرة لخدمة الدفعة. فهي أقل من الخصم، وعلى دفعة صغيرة جدًا ممكن تقرب من الصفر. لوحتك بتوضح المبلغ بالظبط لكل عملية."
              )}
            </p>
            <div className="overflow-x-auto rounded-2xl border border-border/60">
              <table className="w-full text-sm">
                <caption className="sr-only">{t("Tiers", "المستويات")}</caption>
                <thead className="bg-card/60 text-start"><tr>
                  <th scope="col" className="px-4 py-3 text-start">{t("Tier", "المستوى")}</th>
                  <th scope="col" className="px-4 py-3 text-start">{t("From", "من")}</th>
                  <th scope="col" className="px-4 py-3 text-start">{t("Customer discount", "خصم العميل")}</th>
                  <th scope="col" className="px-4 py-3 text-start">{t("Your share of the net", "نصيبك من الصافي")}</th>
                </tr></thead>
                <tbody>
                  {program.tiers.map((tier) => (
                    <tr key={tier.name} className="border-t border-border/40">
                      <td className="px-4 py-3 font-medium">{tier.name}</td>
                      <td className="px-4 py-3">{tier.min === 0 ? t("first customer", "أول عميل") : <><bdi>{fmt(tier.min)}</bdi> {t("customers", "عميل")}</>}</td>
                      <td className="px-4 py-3"><bdi>{fmt(tier.rate)}%</bdi></td>
                      <td className="px-4 py-3"><bdi>{fmt(partnerEarnRate(tier.rate, program.commissionRatio))}%</bdi></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-4 space-y-2 text-muted-foreground leading-relaxed list-disc ps-5">
              <li>{t("Each commission is held for a short period to cover refunds, then becomes payable. A refunded payment cancels its commission.", "كل عمولة بتتحجز فترة قصيرة لتغطية المرتجعات، وبعدها بتبقى قابلة للدفع. الدفعة المستردة بتلغي عمولتها.")}</li>
              {program.recurring && <li>{t("Later payments by the same customer earn a smaller share each time, then stop. The terms list the exact schedule.", "الدفعات اللاحقة لنفس العميل بتكسبك نسبة أقل كل مرة، وبعدين بتقف. الشروط بتوضح الجدول بالظبط.")}</li>}
              <li>{t("Tiers only go up: a refund never takes a tier back.", "المستويات بتطلع بس: المرتجع مش بياخد مستوى منك.")}</li>
              <li>{t("Payouts: InstaPay, mobile wallet, bank transfer or other, in the currency the customer paid in.", "الدفع: إنستاباي أو محفظة أو تحويل بنكي أو غيره، بعملة دفع العميل.")}</li>
            </ul>
          </div>
        </section>

        <section className="container mt-14" aria-labelledby="rules-title">
          <div className="max-w-3xl mx-auto rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h2 id="rules-title" className="text-xl md:text-2xl font-bold flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />{t("Rules we hold you to", "القواعد اللي بنلتزمك بيها")}</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground leading-relaxed list-disc ps-5">
              <li>{t("Say you earn a commission whenever you share your code or link.", "قول إنك بتكسب عمولة كل ما تشارك كودك أو رابطك.")}</li>
              <li>{t("One-to-one messages only, with an easy way to say no. No bulk sending, no bought lists.", "رسائل فردية بس، مع طريقة سهلة للرفض. مفيش إرسال جماعي ولا قوائم مشتراة.")}</li>
              <li>{t("No income promises. We do not make any, so you cannot either.", "مفيش وعود بدخل. إحنا مبنوعدش، فمينفعش إنت كمان.")}</li>
              <li>{t("No using your own code to buy a plan, and no fake accounts.", "ممنوع تستخدم كودك لشراء باقة، وممنوع الحسابات الوهمية.")}</li>
            </ul>
          </div>
        </section>

        <section className="container mt-14" aria-labelledby="limits-title">
          <div className="max-w-3xl mx-auto">
            <h2 id="limits-title" className="text-2xl md:text-3xl font-bold mb-3">{t("What does not exist yet", "اللي لسه مش موجود")}</h2>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc ps-5">
              <li>{t("There is no partner API. If you would automate something, tell us what.", "مفيش API للشركاء. لو عايز تعمل أتمتة لحاجة، قولنا إيه هي.")}</li>
              <li>{t("The program is new. We have few partner results to show, and we will publish real ones, with permission, as they arrive.", "البرنامج جديد. عندنا نتائج شركاء قليلة، وهننشر الحقيقية منها، بإذن أصحابها، لما توصل.")}</li>
              <li>{t("We do not provide lead lists. Finding the business is the part you do.", "مبنقدمش قوائم عملاء محتملين. إيجاد النشاط هو الجزء اللي بتعمله إنت.")}</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <PartnerJoinLink href={PARTNER_JOIN_URL} size="lg" className="w-full sm:w-auto">
                {t("Join the partner program", "انضم إلى برنامج الشركاء")}
                <ArrowRight className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" />
              </PartnerJoinLink>
              <Link href="/partners" className="inline-flex items-center justify-center rounded-md border border-border/60 px-4 py-2 text-sm hover:border-primary/40">{t("The short version", "النسخة المختصرة")}</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
