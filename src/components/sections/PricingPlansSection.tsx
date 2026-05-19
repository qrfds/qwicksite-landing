"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Check, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { BillingCycle, CurrencyView, Plan } from "@/lib/pricing-plans";
import { formatAmount, getPriceMultiplier } from "@/lib/pricing-plans";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";

type Props = {
  plans: Plan[];
  currencyView: CurrencyView;
};

export default function PricingPlansSection({ plans, currencyView }: Props) {
  const t = useTranslations("pricingPage");
  const locale = useLocale();
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const periodLabel =
    billingCycle === "yearly"
      ? t.has("periodYearly")
        ? t("periodYearly")
        : "/yr"
      : t.has("periodMonthly")
        ? t("periodMonthly")
        : "/mo";
  const billingLabel = t.has("billingLabel") ? t("billingLabel") : "Billing";
  const billingMonthly = t.has("billingMonthly") ? t("billingMonthly") : "Monthly";
  const billingYearly = t.has("billingYearly") ? t("billingYearly") : "Yearly";
  const yearlyDiscountBadge = t.has("yearlyDiscountBadge")
    ? t("yearlyDiscountBadge")
    : "Save 20% yearly";

  const priceMultiplier = useMemo(() => getPriceMultiplier(billingCycle), [billingCycle]);

  return (
    <>
      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        <span className="text-sm font-medium text-muted-foreground">{billingLabel}</span>
        <div className="inline-flex items-center rounded-full border border-border/70 bg-card/40 p-1">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              billingCycle === "monthly" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            {billingMonthly}
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("yearly")}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              billingCycle === "yearly" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            {billingYearly}
          </button>
        </div>
        <Badge variant="secondary" className="border-primary/30 bg-primary/10 text-primary">
          {yearlyDiscountBadge}
        </Badge>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 mt-12">
        {plans.map((plan) => {
          const pricing = plan.pricing[currencyView];
          const calculated = Math.round(pricing.monthly * priceMultiplier);
          const displayedAmount = formatAmount(pricing.currency, calculated, locale);
          const yearlyBase = Math.round(pricing.monthly * 12);

          return (
            <Card
              key={plan.name}
              className={`relative h-full border-border/60 bg-card/60 backdrop-blur-sm ${
                plan.popular
                  ? "border-primary/60 shadow-medium lg:-translate-y-2"
                  : "hover:border-primary/30 hover:shadow-soft"
              }`}
            >
              {plan.popular ? (
                <Badge className="absolute -top-3 start-1/2 -translate-x-1/2 px-3 py-1">
                  <Star className="me-1 h-3.5 w-3.5" />
                  {t("mostPopular")}
                </Badge>
              ) : null}

              <CardHeader className="space-y-3">
                <div className="space-y-1">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-sm font-medium text-primary">{plan.tagline}</p>
                </div>
                <CardDescription className="min-h-[48px] text-base leading-relaxed">
                  {plan.description}
                </CardDescription>
                <div className="flex items-end gap-1 pt-2">
                  <span className="text-4xl font-bold">{displayedAmount}</span>
                  <span className="mb-1 text-muted-foreground">{periodLabel}</span>
                </div>
                {billingCycle === "yearly" && pricing.monthly > 0 ? (
                  <p className="text-xs font-medium text-primary">
                    {t.has("yearlySavingsLine")
                      ? t("yearlySavingsLine", {
                          base: formatAmount(pricing.currency, yearlyBase, locale),
                        })
                      : `Regular yearly total: ${formatAmount(pricing.currency, yearlyBase, locale)}`}
                  </p>
                ) : null}
                {pricing.note ? <p className="text-xs font-medium text-muted-foreground">{pricing.note}</p> : null}
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm md:text-base">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.uniqueHighlights?.length ? (
                  <div className="mt-5 rounded-xl border border-primary/30 bg-primary/10 p-3">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">
                      {t("highlights")}
                    </p>
                    <ul className="space-y-1">
                      {plan.uniqueHighlights.map((item) => (
                        <li key={item} className="text-sm text-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </CardContent>

              <CardFooter className="mt-auto">
                <Button asChild variant={plan.popular ? "hero" : "outline"} size="lg" className="w-full">
                  <Link href={`/checkout/${plan.id}?billing=${billingCycle}`}>
                    {plan.cta}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
