import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/i18n/navigation";
import {
  formatAmount,
  getPriceMultiplier,
  getPricingPlans,
  isPlanId,
  normalizeBillingCycle,
  normalizeCurrencyView,
} from "@/lib/pricing-plans";
import { getDefaultCurrencyView } from "@/lib/visitor-region";
import { Check, CreditCard, Globe2, MessageCircle, ReceiptText, ShieldCheck } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

type CheckoutPageProps = {
  params: Promise<{ plan: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CheckoutPage({ params, searchParams }: CheckoutPageProps) {
  const [{ plan: planParam }, query, t, locale, defaultCurrencyView] = await Promise.all([
    params,
    searchParams ?? Promise.resolve({}),
    getTranslations("pricingPage"),
    getLocale(),
    getDefaultCurrencyView(),
  ]);

  if (!isPlanId(planParam)) {
    notFound();
  }

  const billingCycle = normalizeBillingCycle(query.billing);
  const currencyView = normalizeCurrencyView(query.region, defaultCurrencyView);
  const plans = getPricingPlans(t);
  const plan = plans.find((item) => item.id === planParam);

  if (!plan) {
    notFound();
  }

  const checkout = await getTranslations("checkoutPage");
  const pricing = plan.pricing[currencyView];
  const subtotal = Math.round(pricing.monthly * getPriceMultiplier(billingCycle));
  const monthlyEquivalent =
    billingCycle === "yearly" && pricing.monthly > 0 ? Math.round(subtotal / 12) : pricing.monthly;
  const regularYearly = Math.round(pricing.monthly * 12);
  const dueToday = formatAmount(pricing.currency, subtotal, locale);
  const periodLabel = billingCycle === "yearly" ? t("periodYearly") : t("periodMonthly");
  const serviceHighlights = checkout.raw("serviceHighlights") as string[];
  const nextSteps = checkout.raw("nextSteps") as string[];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pb-16">
        <section className="container pt-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl space-y-4">
                <Badge variant="outline" className="border-primary/30 bg-card/40 px-3 py-1 text-sm">
                  {checkout("badge")}
                </Badge>
                <div className="space-y-3">
                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    {checkout("title", { plan: plan.name })}
                  </h1>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {checkout("description")}
                  </p>
                </div>
              </div>
              <Button asChild variant="outline">
                <Link href="/pricing">{checkout("backToPricing")}</Link>
              </Button>
            </div>

            <form
              action={plan.href}
              method="get"
              className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]"
            >
              <input type="hidden" name="plan" value={plan.id} />
              <input type="hidden" name="billing" value={billingCycle} />
              <input type="hidden" name="region" value={currencyView} />
              <div className="space-y-6">
                <Card className="border-border/60 bg-card/60">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <ReceiptText className="h-5 w-5 text-primary" />
                      {checkout("checkoutDetails")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">{checkout("fields.fullName")}</Label>
                      <Input id="fullName" name="fullName" placeholder={checkout("placeholders.fullName")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{checkout("fields.email")}</Label>
                      <Input id="email" name="email" type="email" placeholder={checkout("placeholders.email")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">{checkout("fields.company")}</Label>
                      <Input id="company" name="company" placeholder={checkout("placeholders.company")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{checkout("fields.phone")}</Label>
                      <Input id="phone" name="phone" placeholder={checkout("placeholders.phone")} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="notes">{checkout("fields.notes")}</Label>
                      <textarea
                        id="notes"
                        name="notes"
                        placeholder={checkout("placeholders.notes")}
                        className="min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/60 bg-card/60">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Globe2 className="h-5 w-5 text-primary" />
                      {checkout("servicesTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {serviceHighlights.map((item) => (
                        <div key={item} className="flex gap-3 rounded-lg border border-border/60 bg-background/40 p-4">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/60 bg-card/60">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      {checkout("nextStepsTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="grid gap-3 md:grid-cols-3">
                      {nextSteps.map((item, index) => (
                        <li key={item} className="rounded-lg border border-border/60 bg-background/40 p-4">
                          <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                            {index + 1}
                          </span>
                          <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                <Card className="border-primary/30 bg-card/80 shadow-lg">
                  <CardHeader className="space-y-2">
                    {plan.popular ? (
                      <Badge className="w-fit">{t("mostPopular")}</Badge>
                    ) : null}
                    <div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <p className="mt-1 text-sm font-medium text-primary">{plan.tagline}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{checkout("dueToday")}</p>
                      <div className="mt-1 flex items-end gap-1">
                        <span className="text-4xl font-bold">{dueToday}</span>
                        <span className="mb-1 text-muted-foreground">{periodLabel}</span>
                      </div>
                      {billingCycle === "yearly" && pricing.monthly > 0 ? (
                        <p className="mt-1 text-xs font-medium text-primary">
                          {checkout("yearlyBreakdown", {
                            monthly: formatAmount(pricing.currency, monthlyEquivalent, locale),
                            regular: formatAmount(pricing.currency, regularYearly, locale),
                          })}
                        </p>
                      ) : null}
                      {pricing.note ? (
                        <p className="mt-1 text-xs font-medium text-muted-foreground">{pricing.note}</p>
                      ) : null}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{checkout("billingCycle")}</span>
                        <span className="font-medium">
                          {billingCycle === "yearly" ? t("billingYearly") : t("billingMonthly")}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Button asChild variant={billingCycle === "monthly" ? "default" : "outline"} size="sm">
                          <Link href={`/checkout/${plan.id}?billing=monthly&region=${currencyView}`}>
                            {t("billingMonthly")}
                          </Link>
                        </Button>
                        <Button asChild variant={billingCycle === "yearly" ? "default" : "outline"} size="sm">
                          <Link href={`/checkout/${plan.id}?billing=yearly&region=${currencyView}`}>
                            {t("billingYearly")}
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{checkout("priceRegion")}</span>
                        <span className="font-medium">{checkout(`regions.${currencyView}`)}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Button asChild variant={currencyView === "egypt" ? "default" : "outline"} size="sm">
                          <Link href={`/checkout/${plan.id}?billing=${billingCycle}&region=egypt`}>
                            {checkout("regions.egypt")}
                          </Link>
                        </Button>
                        <Button asChild variant={currencyView === "gulf" ? "default" : "outline"} size="sm">
                          <Link href={`/checkout/${plan.id}?billing=${billingCycle}&region=gulf`}>
                            {checkout("regions.gulf")}
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-lg border border-border/60 bg-background/40 p-4">
                      <h2 className="text-sm font-semibold">{checkout("includedTitle")}</h2>
                      <ul className="mt-3 space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 rounded-lg border border-border/60 bg-background/40 p-4 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">{checkout("subtotal")}</span>
                        <span className="font-medium">{dueToday}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">{checkout("taxes")}</span>
                        <span className="font-medium">{checkout("calculatedLater")}</span>
                      </div>
                      <div className="border-t border-border/60 pt-3">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{checkout("totalDue")}</span>
                          <span className="font-semibold">{dueToday}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <CreditCard className="h-3.5 w-3.5 text-primary" />
                        {checkout("paymentNote")}
                      </span>
                      <span className="flex items-center gap-2">
                        <MessageCircle className="h-3.5 w-3.5 text-primary" />
                        {checkout("supportNote")}
                      </span>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      {checkout("continue")}
                    </Button>
                  </CardContent>
                </Card>
              </aside>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
