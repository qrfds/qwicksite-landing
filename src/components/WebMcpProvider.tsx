"use client";

import { useEffect, useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import {
  formatAmount,
  getPriceMultiplier,
  getPricingPlans,
  type BillingCycle,
  type CurrencyView,
} from "@/lib/pricing-plans";

type ToolInput = Record<string, unknown>;

type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (input: ToolInput) => unknown | Promise<unknown>;
  annotations?: {
    readOnlyHint?: boolean;
  };
};

type ModelContext = {
  registerTool?: (
    tool: WebMcpTool,
    options?: { signal?: AbortSignal },
  ) => void | Promise<void>;
  provideContext?: (context: { tools: WebMcpTool[] }) => void;
};

const siteRoutes = {
  home: "/",
  features: "/features",
  pricing: "/pricing",
  templates: "/templates",
  examples: "/examples",
  about: "/about",
  blog: "/blog",
  support: "/support",
  contact: "/contact",
} as const;

const destinations = Object.keys(siteRoutes) as Array<keyof typeof siteRoutes>;
const currencyViews = ["egypt", "global"] as const;
const billingCycles = ["monthly", "yearly"] as const;

function readEnum<T extends string>(
  value: unknown,
  options: readonly T[],
  field: string,
): T {
  if (typeof value !== "string" || !options.includes(value as T)) {
    throw new TypeError(`${field} must be one of: ${options.join(", ")}`);
  }

  return value as T;
}

function registerWebMcpTools(tools: WebMcpTool[]) {
  const documentContext = (document as Document & { modelContext?: ModelContext })
    .modelContext;
  const navigatorContext = (navigator as Navigator & { modelContext?: ModelContext })
    .modelContext;
  const modelContext = documentContext ?? navigatorContext;

  if (modelContext?.registerTool) {
    const controller = new AbortController();

    for (const tool of tools) {
      Promise.resolve(
        modelContext.registerTool(tool, { signal: controller.signal }),
      ).catch((error) => {
        if (!controller.signal.aborted) {
          console.warn(`Unable to register WebMCP tool "${tool.name}".`, error);
        }
      });
    }

    return () => controller.abort();
  }

  if (navigatorContext?.provideContext) {
    navigatorContext.provideContext({ tools });
    return () => navigatorContext.provideContext?.({ tools: [] });
  }

  return undefined;
}

export default function WebMcpProvider() {
  const locale = useLocale();
  const pricing = useTranslations("pricingPage");
  const router = useRouter();

  const tools = useMemo<WebMcpTool[]>(() => {
    const plans = getPricingPlans(pricing);

    return [
      {
        name: "navigate_qwicksite",
        description:
          "Navigate to a key page on the QwickSite marketing website in the visitor's current language.",
        inputSchema: {
          type: "object",
          properties: {
            destination: {
              type: "string",
              enum: destinations,
              description: "The QwickSite page to open.",
            },
          },
          required: ["destination"],
          additionalProperties: false,
        },
        execute: async (input) => {
          const destination = readEnum(
            input.destination,
            destinations,
            "destination",
          );
          const path = siteRoutes[destination];

          router.push(path);

          return {
            success: true,
            destination,
            path: `/${locale}${path === "/" ? "" : path}`,
          };
        },
        annotations: { readOnlyHint: false },
      },
      {
        name: "get_qwicksite_pricing",
        description:
          "Return QwickSite plans, prices, included features, and localized checkout URLs for a market and billing cycle.",
        inputSchema: {
          type: "object",
          properties: {
            market: {
              type: "string",
              enum: currencyViews,
              description:
                "Use egypt for prices in EGP or global for prices in USD.",
            },
            billingCycle: {
              type: "string",
              enum: billingCycles,
              description: "Show monthly or discounted yearly totals.",
            },
          },
          required: ["market", "billingCycle"],
          additionalProperties: false,
        },
        execute: async (input) => {
          const market = readEnum(
            input.market,
            currencyViews,
            "market",
          ) as CurrencyView;
          const billingCycle = readEnum(
            input.billingCycle,
            billingCycles,
            "billingCycle",
          ) as BillingCycle;
          const multiplier = getPriceMultiplier(billingCycle);

          return {
            market,
            billingCycle,
            yearlyDiscountPercent: billingCycle === "yearly" ? 20 : 0,
            plans: plans.map((plan) => {
              const pricingForMarket = plan.pricing[market];
              const amount = Math.round(pricingForMarket.monthly * multiplier);

              return {
                id: plan.id,
                name: plan.name,
                description: plan.description,
                amount,
                currency: pricingForMarket.currency,
                formattedAmount: formatAmount(
                  pricingForMarket.currency,
                  amount,
                  locale,
                ),
                features: plan.features,
                checkoutUrl: `/${locale}/checkout/${plan.id}?billing=${billingCycle}`,
              };
            }),
          };
        },
        annotations: { readOnlyHint: true },
      },
      {
        name: "start_qwicksite_website",
        description:
          "Open QwickSite registration to start building a website, optionally prefilled with a description of the desired website.",
        inputSchema: {
          type: "object",
          properties: {
            prompt: {
              type: "string",
              maxLength: 500,
              description:
                "Optional description of the business and website to create.",
            },
          },
          additionalProperties: false,
        },
        execute: async (input) => {
          if (input.prompt !== undefined && typeof input.prompt !== "string") {
            throw new TypeError("prompt must be a string");
          }

          const prompt = input.prompt?.trim();
          if (prompt && prompt.length > 500) {
            throw new TypeError("prompt must be 500 characters or fewer");
          }

          const registrationUrl = new URL(
            "https://app.qwicksite.com/register",
          );
          if (prompt) {
            registrationUrl.searchParams.set("prompt", prompt);
          }

          window.setTimeout(() => window.location.assign(registrationUrl), 0);

          return {
            success: true,
            registrationUrl: registrationUrl.toString(),
          };
        },
        annotations: { readOnlyHint: false },
      },
    ];
  }, [locale, pricing, router]);

  useEffect(() => registerWebMcpTools(tools), [tools]);

  return null;
}
