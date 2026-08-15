import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export async function HeroSection() {
  const t = await getTranslations('hero');
  const tc = await getTranslations('common');

  return (
    <div className="overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
      >
        <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <section>
        <div className="relative pt-0 md:pt-0">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,#000_75%)]"
          />
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

                <h1 className="mt-10 max-w-4xl mx-auto text-balance text-6xl md:mt-14 md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                  {t('title')}
                </h1>
                <p className="mx-auto mt-4 max-w-4xl text-balance text-2xl font-medium text-white/90 md:text-4xl">
                  {t('subtitle')}
                </p>
                <p className="mx-auto mt-8 max-w-2xl text-balance text-lg">
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
            <div className="relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20">
              <div
                aria-hidden
                className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
              />
              <div className="inset-shadow-2xs ring-black dark:inset-shadow-white/20 bg-black relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                <Image
                  className="z-2 border-border/25 aspect-15/8 relative w-full rounded-2xl border object-cover"
                  src="/images/qwicksite-ai-website-builder-dashboard.webp"
                  alt="QwickSite AI website builder dashboard for an ecommerce storefront"
                  width={1800}
                  height={1039}
                  sizes="(max-width: 768px) 100vw, 1152px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
