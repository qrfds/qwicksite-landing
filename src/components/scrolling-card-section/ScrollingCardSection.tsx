"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { images } from "./images";

type CardSpec = {
  src: string;
  alt: string;
};

export default function ScrollingCardSection() {
  const { scrollY } = useViewportScroll();
  
  // Create scroll-based transforms for each card
  // All cards rotate at the same time and stay aligned in their grid positions
  
  const card0Transforms = {
    y: useTransform(scrollY, [0, 1000, 1200, 1500], [0, 0, 0, -100]),
    rotateX: useTransform(scrollY, [200, 1200], [90, 0]),
    scale: useTransform(scrollY, [0, 1000], [0.8, 1.2]),
  };

  const card1Transforms = {
    y: useTransform(scrollY, [0, 1000, 1200, 1500], [0, 0, 0, 100]),
    rotateX: useTransform(scrollY, [200, 1200], [90, 0]),
    scale: useTransform(scrollY, [0, 1000], [0.8, 1.2]),
  };

  const card2Transforms = {
    y: useTransform(scrollY, [0, 1000, 1200, 1500], [0, 0, 0, -100]),
    rotateX: useTransform(scrollY, [200, 1200], [90, 0]),
    scale: useTransform(scrollY, [0, 1000], [0.8, 1.2]),
  };

  const card3Transforms = {
    y: useTransform(scrollY, [0, 1000, 1200, 1500], [0, 0, 0, -100]),
    rotateX: useTransform(scrollY, [200, 1200], [90, 0]),
    scale: useTransform(scrollY, [0, 1000], [0.8, 1.2]),
  };

  const card4Transforms = {
    y: useTransform(scrollY, [0, 1000, 1200, 1500], [0, 0, 0, 100]),
    rotateX: useTransform(scrollY, [200, 1200], [90, 0]),
    scale: useTransform(scrollY, [0, 1000], [0.8, 1.2]),
  };

  const card5Transforms = {
    y: useTransform(scrollY, [0, 1000, 1200, 1500], [0, 0, 0, -100]),
    rotateX: useTransform(scrollY, [200, 1200], [90, 0]),
    scale: useTransform(scrollY, [0, 1000], [0.8, 1.2]),
  };

  const card6Transforms = {
    y: useTransform(scrollY, [0, 1000, 1200, 1500], [0, 0, 0, -100]),
    rotateX: useTransform(scrollY, [200, 1200], [90, 0]),
    scale: useTransform(scrollY, [0, 1000], [0.8, 1.2]),
  };

  const card7Transforms = {
    y: useTransform(scrollY, [0, 1000, 1200, 1500], [0, 0, 0, 100]),
    rotateX: useTransform(scrollY, [200, 1200], [90, 0]),
    scale: useTransform(scrollY, [0, 1000], [0.8, 1.2]),
  };

  const card8Transforms = {
    y: useTransform(scrollY, [0, 1000, 1200, 1500], [0, 0, 0, -100]),
    rotateX: useTransform(scrollY, [200, 1200], [90, 0]),
    scale: useTransform(scrollY, [0, 1000], [0.8, 1.2]),
  };

  const allCardTransforms = [
    card0Transforms, card1Transforms, card2Transforms,
    card3Transforms, card4Transforms, card5Transforms,
    card6Transforms, card7Transforms, card8Transforms
  ];

  // Debug scroll value
  React.useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      console.log("Scroll Y:", latest);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <section className="relative h-[150vh] w-full hidden md:block overflow-visible">
      {/* Cards Grid */}
      <div className="w-full px-4">
        <div
          className="
            grid gap-2 sm:gap-4 md:gap-6
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            items-center justify-items-center
          "
          style={{ perspective: "1000px" }}
        >
          {images.slice(0, 9).map((img: CardSpec, idx: number) => {
            const transforms = allCardTransforms[idx];
            
            return (
              <motion.div
                key={img.src + idx}
                className="w-full h-full flex items-center justify-center"
                style={{
                  y: transforms.y,
                  rotateX: transforms.rotateX,
                  scale: transforms.scale,
                  transformStyle: "preserve-3d",
                }}
              >
                <Card className="overflow-visible rounded-2xl border border-white/10 bg-neutral-900/40 shadow-lg ring-1 ring-white/5 h-80 w-[480px]">
                  <div className="relative aspect-[21/9] h-full w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={false}
                    />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
