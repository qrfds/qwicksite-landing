"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { images } from "@/components/scrolling-card-section/images";

type ImageTile = {
  id: number;
  src: string;
  alt: string;
};

const baseTiles: ImageTile[] = images.slice(0, 16).map((img, index) => ({
  id: index + 1,
  src: img.src,
  alt: img.alt,
}));

const shuffle = (array: ImageTile[]) => {
  const copied = [...array];
  let currentIndex = copied.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [copied[currentIndex], copied[randomIndex]] = [copied[randomIndex], copied[currentIndex]];
  }

  return copied;
};

const generateSquares = (items: ImageTile[]) =>
  items.map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 0.9, type: "spring" }}
      className="h-full w-full overflow-hidden rounded-md bg-muted"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label={sq.alt}
      role="img"
    />
  ));

const contentByLocale = {
  en: {
    badge: "Live examples from QwickSite",
    title: "Launch pages that actually convert",
    description:
      "See real storefront and landing page visuals built with QwickSite. Mix proven layouts, strong messaging, and clear CTAs to ship faster.",
    cta: "Start building free",
  },
  ar: {
    badge: "نماذج حية من QwickSite",
    title: "أطلق صفحات تحقق نتائج فعلية",
    description:
      "شاهد نماذج متاجر وصفحات هبوط حقيقية مبنية عبر QwickSite. استخدم تصميمات مجربة ورسائل واضحة ودعوات إجراء قوية للإطلاق أسرع.",
    cta: "ابدأ البناء مجاناً",
  },
} as const;

export const ShuffleHero = () => {
  const locale = useLocale();
  const copy = locale === "ar" ? contentByLocale.ar : contentByLocale.en;

  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-8 py-12 md:grid-cols-2">
      <div>
        <span className="mb-4 block text-xs font-medium text-primary md:text-sm">{copy.badge}</span>
        <h3 className="text-foreground text-4xl font-semibold md:text-6xl">{copy.title}</h3>
        <p className="my-4 text-base text-muted-foreground md:my-6 md:text-lg">{copy.description}</p>
        <a
          href="https://vcboard.qrfds.com/register"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "bg-primary text-primary-foreground inline-flex rounded-md px-4 py-2 font-medium",
            "transition-all hover:bg-primary/90 active:scale-95",
            "focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          )}
        >
          {copy.cta}
        </a>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [tiles, setTiles] = useState<ImageTile[]>(baseTiles);

  useEffect(() => {
    const shuffleSquares = () => {
      setTiles(shuffle(baseTiles));
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    timeoutRef.current = setTimeout(shuffleSquares, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return <div className="grid h-[450px] grid-cols-4 grid-rows-4 gap-1">{generateSquares(tiles)}</div>;
};
