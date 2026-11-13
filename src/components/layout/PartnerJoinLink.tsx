"use client";

import type { ComponentProps, ReactNode } from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { EXPERIMENT_KEY, abEnabled, getAssignment, track } from "@/lib/partner-ab";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

type Props = {
  href: string;
  children: ReactNode;
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
  className?: string;
};

/** Carries the campaign values (utm_*) from the page the visitor landed on to the partner signup link, so we can tell which video brought which partner. */
function WithCampaign({ href, children, variant, size, className }: Props) {
  const params = useSearchParams();
  const url = new URL(href);
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) url.searchParams.set(key, value);
  }
  if (abEnabled()) {
    // Which headline the visitor saw rides along to the signup, so the test can count signups and sellers per variant.
    url.searchParams.set("exp", EXPERIMENT_KEY);
    url.searchParams.set("var", getAssignment().variant);
  }
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={url.toString()} onClick={() => track("cta_click")}>{children}</a>
    </Button>
  );
}

export default function PartnerJoinLink(props: Props) {
  const { href, children, variant, size, className } = props;
  return (
    <Suspense
      fallback={
        <Button asChild variant={variant} size={size} className={className}>
          <a href={href}>{children}</a>
        </Button>
      }
    >
      <WithCampaign {...props} />
    </Suspense>
  );
}
