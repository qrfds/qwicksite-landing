import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound, permanentRedirect } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { getBlogPage, getBlogPageCount } from "@/lib/blog-posts";
import {
  createBreadcrumbSchema,
  createPageMetadata,
  createWebPageSchema,
} from "@/lib/seo";

function resolveLocale(locale: string): AppLocale {
  return locale === "ar" ? "ar" : "en";
}

export function generateStaticParams() {
  const pages = Array.from({ length: Math.max(0, getBlogPageCount() - 1) }, (_, index) =>
    String(index + 2),
  );
  return routing.locales.flatMap((locale) => pages.map((page) => ({ locale, page })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; page: string }>;
}): Promise<Metadata> {
  const { locale, page } = await params;
  const pageNumber = Number(page);
  if (
    !hasLocale(routing.locales, locale) ||
    !Number.isInteger(pageNumber) ||
    pageNumber < 2 ||
    pageNumber > getBlogPageCount()
  ) {
    return {};
  }

  const localeKey = resolveLocale(locale);
  return createPageMetadata({
    locale: localeKey,
    path: `/blog/page/${pageNumber}`,
    title:
      localeKey === "ar"
        ? `مدونة QwickSite — الصفحة ${pageNumber}`
        : `QwickSite Blog — Page ${pageNumber}`,
    description:
      localeKey === "ar"
        ? `مقالات وأدلة QwickSite، الصفحة ${pageNumber}.`
        : `QwickSite articles and guides, page ${pageNumber}.`,
  });
}

export default async function PaginatedBlogPage({
  params,
}: {
  params: Promise<{ locale: string; page: string }>;
}) {
  const { locale, page } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const pageNumber = Number(page);
  if (pageNumber === 1) {
    permanentRedirect(`/${locale}/blog`);
  }
  if (
    !Number.isInteger(pageNumber) ||
    pageNumber < 2 ||
    pageNumber > getBlogPageCount()
  ) {
    notFound();
  }

  const localeKey = resolveLocale(locale);
  setRequestLocale(localeKey);
  const posts = getBlogPage(pageNumber);
  const pageCount = getBlogPageCount();
  const path = `/blog/page/${pageNumber}`;
  const title =
    localeKey === "ar" ? `مدونة QwickSite — الصفحة ${pageNumber}` : `QwickSite Blog — Page ${pageNumber}`;
  const description =
    localeKey === "ar"
      ? `مقالات وأدلة QwickSite، الصفحة ${pageNumber}.`
      : `QwickSite articles and guides, page ${pageNumber}.`;
  const breadcrumbs = [
    { name: localeKey === "ar" ? "الرئيسية" : "Home", path: "/" },
    { name: localeKey === "ar" ? "المدونة" : "Blog", path: "/blog" },
    { name: localeKey === "ar" ? `الصفحة ${pageNumber}` : `Page ${pageNumber}`, path },
  ];

  return (
    <div className="min-h-screen">
      <JsonLd
        id={`qwicksite-blog-page-${pageNumber}-schema`}
        data={[
          createWebPageSchema({
            locale: localeKey,
            path,
            title,
            description,
            type: "CollectionPage",
          }),
          createBreadcrumbSchema(localeKey, path, breadcrumbs),
        ]}
      />
      <Header />
      <Breadcrumbs items={breadcrumbs} />
      <main className="container pb-16 pt-8">
        <h1 className="text-center text-4xl font-bold md:text-5xl">{title}</h1>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Card key={post.slug} className="border-border/60 bg-card/50">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold">
                  <Link href={`/blog/${post.slug}`}>{post.content[localeKey].title}</Link>
                </h2>
                <p className="mt-3 text-muted-foreground">
                  {post.content[localeKey].description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <nav aria-label="Blog pagination" className="mt-10 flex justify-center gap-4">
          <Link
            href={pageNumber === 2 ? "/blog" : `/blog/page/${pageNumber - 1}`}
            className="rounded-md border border-border px-4 py-2"
          >
            {localeKey === "ar" ? "السابق" : "Previous"}
          </Link>
          {pageNumber < pageCount ? (
            <Link
              href={`/blog/page/${pageNumber + 1}`}
              className="rounded-md border border-border px-4 py-2"
            >
              {localeKey === "ar" ? "التالي" : "Next"}
            </Link>
          ) : null}
        </nav>
      </main>
      <Footer />
    </div>
  );
}
