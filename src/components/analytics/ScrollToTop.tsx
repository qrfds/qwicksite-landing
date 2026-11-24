"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scrolls to the top when the route changes. The pages start with a sticky header, which makes Next.js think the
 * new page is already in view (the header sits at top: 0), so after clicking an in-page link such as "Explore more"
 * the next page opened scrolled down at the old position. Skipped when the URL has a #hash (anchor links).
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
