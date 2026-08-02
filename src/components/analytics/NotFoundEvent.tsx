"use client";

import { useEffect } from "react";

export default function NotFoundEvent() {
  useEffect(() => {
    let attempts = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const report = () => {
      if (window.gtag) {
        window.gtag("event", "page_not_found", {
          page_path: window.location.pathname,
          page_title: document.title,
        });
        return;
      }

      attempts += 1;
      if (attempts < 10) {
        timer = setTimeout(report, 500);
      }
    };

    report();

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return null;
}
