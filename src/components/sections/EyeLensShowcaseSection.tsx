"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type LensOption = {
  id: string;
  label: string;
  swatch: string;
  imageSrc: string;
};

type EyeLensShowcaseSectionProps = {
  badge: string;
  title: string;
  description: string;
  productName: string;
  productDescription: string;
  priceLabel: string;
  priceValue: string;
  ctaLabel: string;
  builderChrome: {
    preview: string;
    layers: string;
    inspector: string;
    selectedState: string;
    livePreview: string;
  };
  colorsLabel: string;
  lensOptions: LensOption[];
};

function hexToRgba(hex: string, alpha: number) {
  const normalizedHex = hex.replace("#", "");
  const value =
    normalizedHex.length === 3
      ? normalizedHex
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : normalizedHex;

  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function EyeLensShowcaseSection({
  badge,
  title,
  description,
  productName,
  productDescription,
  priceLabel,
  priceValue,
  ctaLabel,
  builderChrome,
  colorsLabel,
  lensOptions,
}: EyeLensShowcaseSectionProps) {
  const [selectedLensId, setSelectedLensId] = useState(lensOptions[0]?.id ?? "");

  const selectedLens = useMemo(
    () => lensOptions.find((option) => option.id === selectedLensId) ?? lensOptions[0],
    [lensOptions, selectedLensId]
  );

  if (!selectedLens) {
    return null;
  }

  return (
    <div className="mt-14 rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
      <div className="mx-auto mb-8 max-w-3xl text-center space-y-3">
        <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {badge}
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-xl border border-border/70 bg-background/70 p-3">
          <div className="mb-3 flex items-center justify-between rounded-lg border border-border/60 bg-card/50 px-3 py-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary/80" />
              <span className="h-2 w-2 rounded-full bg-primary/50" />
              <span className="h-2 w-2 rounded-full bg-primary/20" />
            </div>
            <div className="flex items-center gap-2">
              <span>{builderChrome.preview}</span>
              <span>•</span>
              <span>{builderChrome.layers}</span>
              <span>•</span>
              <span>{builderChrome.inspector}</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-dashed border-primary/40 bg-gradient-to-br from-background to-card p-4 md:p-6">
            <span className="absolute right-3 top-3 rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
              {builderChrome.livePreview}
            </span>
            <span className="absolute left-3 top-3 rounded-md bg-background/85 px-2 py-1 text-[11px] text-muted-foreground">
              {builderChrome.selectedState}
            </span>

            <div className="mx-auto mt-8 w-full max-w-[650px] rounded-3xl border border-border/60 bg-card/50 p-4 shadow-inner">
              <div className="relative overflow-hidden rounded-2xl border border-black/10">
                <Image
                  src={selectedLens.imageSrc}
                  alt={`${selectedLens.label} lens preview`}
                  width={920}
                  height={620}
                  className="h-[343px] w-[613px] object-cover"
                  priority={false}
                />
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">{colorsLabel}</p>
              <div className="flex flex-wrap gap-2">
                {lensOptions.map((option) => {
                  const isActive = option.id === selectedLens.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedLensId(option.id)}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      style={{
                        backgroundColor: hexToRgba(option.swatch, isActive ? 0.25 : 0.14),
                        borderColor: hexToRgba(option.swatch, isActive ? 0.7 : 0.35),
                      }}
                    >
                      <span
                        aria-hidden
                        className="h-3 w-3 rounded-full border border-black/20"
                        style={{ backgroundColor: option.swatch }}
                      />
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border/60 bg-background/50 p-5 md:p-6">
          <h3 className="text-2xl font-semibold">{productName}</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">{productDescription}</p>
          <div className="mt-6 rounded-lg border border-border/60 bg-card/50 p-4">
            <p className="text-sm text-muted-foreground">{priceLabel}</p>
            <p className="mt-1 text-3xl font-bold tracking-tight">{priceValue}</p>
          </div>
          <Button className="mt-6 w-full" size="lg">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
