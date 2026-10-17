import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { HeroBannerBackground } from '@/components/ui/hero-banner-background';
import { Link } from '@/i18n/navigation';

export async function HeroSection() {
  const locale = await getLocale();
  const isArabic = locale === 'ar';
  const t = await getTranslations('hero');
  const tc = await getTranslations('common');
  const heroFont = isArabic ? 'font-[family-name:var(--font-cairo)]' : 'font-[family-name:var(--font-display)]';

  return (
    <div className="relative overflow-hidden bg-[#050508] text-white">
      <HeroBannerBackground />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_50%_35%,transparent_0%,rgba(0,0,0,0.35)_85%)]"
      />
      <section className="relative z-10">
        <div className="relative pt-0 md:pt-0">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:me-auto lg:mt-0">
              <div>
                <Link
                  href="/features"
                  className="hover:bg-background dark:hover:border-border bg-muted group mx-auto mt-12 flex w-fit items-center gap-4 rounded-full border border-border/70 p-1 ps-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-white/15 dark:shadow-zinc-950"
                >
                  <span className="text-foreground text-sm">{t('badge')}</span>
                  <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700" />

                  <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                    </div>
                  </div>
                </Link>

                <h1
                  className={`mx-auto mt-8 max-w-5xl text-balance md:mt-12 lg:mt-14 ${heroFont}`}
                >
                  <span className="block text-[clamp(1.75rem,3.8vw,2.65rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white/90 md:font-semibold">
                    {t('title')}
                  </span>
                  <span className="mt-1 block bg-gradient-to-br from-[#BFDBFE] via-[#3B82F6] to-[#14B8A6] bg-clip-text text-[clamp(2.75rem,8vw,5.25rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-transparent drop-shadow-[0_0_50px_rgba(59,130,246,0.4)] md:mt-2">
                    {t('titleAccent')}
                  </span>
                </h1>
                <p className={`mx-auto mt-7 max-w-xl text-balance text-[clamp(1rem,2.2vw,1.2rem)] font-medium leading-relaxed text-white/70 md:mt-8 ${heroFont}`}>
                  {t('description')}
                </p>
              </div>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                <div key={1} className="bg-foreground/10 rounded-[14px] border p-0.5">
                  <Button asChild size="lg" className="rounded-xl px-5 text-base">
                    <Link href="https://app.qwicksite.com/register" target="_blank" rel="noopener noreferrer">
                      <span className="text-nowrap">{tc('startFree')}</span>
                    </Link>
                  </Button>
                </div>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-10.5 rounded-xl px-5"
                >
                  <Link href="/pricing">
                    <span className="text-nowrap">{tc('seePricing')}</span>
                  </Link>
                </Button>
              </div>
              <p className="mx-auto mt-6 max-w-2xl text-balance text-sm text-muted-foreground">
                {t('footnote')}
              </p>
            </div>
          </div>

          <div>
            <div className="relative mt-8 px-2 sm:mt-12 md:mt-20">
              <div className="inset-shadow-2xs ring-black/20 dark:inset-shadow-white/20 relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-4 shadow-lg shadow-zinc-950/15 ring-1 backdrop-blur-[2px]">
                <Image
                  className="z-2 border-border/25 aspect-15/8 relative w-full rounded-2xl border object-cover"
                  src="/images/qwicksite-ai-website-builder-dashboard.webp"
                  alt="QwickSite AI website builder dashboard for an ecommerce storefront"
                  width={1800}
                  height={1039}
                  sizes="(max-width: 768px) 100vw, 1152px"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
