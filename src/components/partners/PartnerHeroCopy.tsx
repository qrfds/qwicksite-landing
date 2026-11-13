"use client";

import { useEffect, useState } from "react";
import { getAssignment, track, type PartnerVariant } from "@/lib/partner-ab";

type Copy = { title: string; description: string };

/** The page's headline and sub-line. Variant "a" is what the server renders; a visitor assigned "b" sees the alternative after load (and counts as a view). */
export default function PartnerHeroCopy({ a, b }: { a: Copy; b: Copy }) {
  const [variant, setVariant] = useState<PartnerVariant>("a");

  useEffect(() => {
    setVariant(getAssignment().variant);
    track("view");
  }, []);

  const copy = variant === "b" ? b : a;
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">{copy.title}</h1>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">{copy.description}</p>
    </>
  );
}
