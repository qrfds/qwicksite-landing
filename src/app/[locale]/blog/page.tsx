import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { getBlogPage, getBlogPageCount } from "@/lib/blog-posts";
import {
  getMarketingPageContent,
  marketingPages,
  seoContentSlugs,
} from "@/lib/marketing-pages";
import {
  absoluteUrl,
  createBreadcrumbSchema,
  createPageMetadata,
  createWebPageSchema,
  localizedPath,
} from "@/lib/seo";

function resolveLocale(locale: string): AppLocale {
  return locale === "ar" ? "ar" : "en";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const localeKey = resolveLocale(locale);
  const content = getMarketingPageContent("blog", localeKey);

  return createPageMetadata({
    locale: localeKey,
    path: "/blog",
    title:
      localeKey === "ar"
        ? "مدونة QwickSite | إنشاء المواقع والمتاجر بالذكاء الاصطناعي"
        : "QwickSite Blog | AI Website Builder & Ecommerce Guides",
    description: content?.description || "",
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const localeKey = resolveLocale(locale);
  setRequestLocale(localeKey);
  const content = getMarketingPageContent("blog", localeKey);
  if (!content) {
    notFound();
  }

  const breadcrumbs = [
    { name: localeKey === "ar" ? "الرئيسية" : "Home", path: "/" },
    { name: localeKey === "ar" ? "المدونة" : "Blog", path: "/blog" },
  ];
  const url = absoluteUrl(localizedPath(localeKey, "/blog"));
  const posts = getBlogPage(1);
  const resourcePages = marketingPages.filter((page) =>
    seoContentSlugs.includes(page.slug as (typeof seoContentSlugs)[number]),
  );

  return (
    <div className="min-h-screen">
      <JsonLd
        id="qwicksite-blog-schema"
        data={[
          createWebPageSchema({
            locale: localeKey,
            path: "/blog",
            title: content.title,
            description: content.description,
            breadcrumbId: `${url}#breadcrumb`,
            type: "CollectionPage",
          }),
          createBreadcrumbSchema(localeKey, "/blog", breadcrumbs),
        ]}
      />
      <Header />
      <Breadcrumbs items={breadcrumbs} />
      <main className="pb-16 pt-8">
        <section className="container">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <Badge variant="outline" className="mb-5 border-primary/30 bg-card/40">
              {content.eyebrow}
            </Badge>
            <h1 className="text-balance text-4xl font-bold md:text-6xl">{content.title}</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
              {content.description}
            </p>
          </div>

          {posts.length ? (
            <>
              <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                {posts.map((post) => (
                  <Card key={post.slug} className="border-border/60 bg-card/50">
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground">
                        {new Intl.DateTimeFormat(localeKey, { dateStyle: "long" }).format(
                          new Date(post.datePublished),
                        )}
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold">
                        <Link href={`/blog/${post.slug}`}>{post.content[localeKey].title}</Link>
                      </h2>
                      <p className="mt-3 text-muted-foreground">
                        {post.content[localeKey].description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {getBlogPageCount() > 1 ? (
                <nav aria-label="Blog pagination" className="mt-10 text-center">
                  <Link
                    href="/blog/page/2"
                    className="inline-flex rounded-md border border-border px-4 py-2"
                  >
                    {localeKey === "ar" ? "المقالات التالية" : "Next articles"}
                  </Link>
                </nav>
              ) : null}
            </>
          ) : null}

          <section className="mx-auto mt-12 max-w-5xl">
            <h2 className="text-3xl font-semibold">
              {localeKey === "ar" ? "أدلة QwickSite" : "QwickSite guides"}
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {resourcePages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="rounded-2xl border border-border/60 bg-card/50 p-5 transition-colors hover:border-primary/50"
                >
                  <h3 className="text-lg font-semibold">{page.content[localeKey].title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {page.content[localeKey].description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
