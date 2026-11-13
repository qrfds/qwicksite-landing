"use client";

import { useReportWebVitals } from "next/web-vitals";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function WebVitals() {
  useReportWebVitals((metric) => {
    window.gtag?.("event", metric.name, {
      event_category: "Web Vitals",
      event_label: metric.id,
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      metric_delta: metric.delta,
      metric_rating: metric.rating,
      metric_value: metric.value,
      non_interaction: true,
    });
  });

  return null;
}
