"use client";

import { BackgroundPathsBackground } from "@/components/ui/background-paths";

export function HeroBannerBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1]">
      <BackgroundPathsBackground />
    </div>
  );
}
