import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { blogPosts, getBlogPageCount } from "@/lib/blog-posts";
import { marketingPages } from "@/lib/marketing-pages";
import { absoluteUrl, localizedPath } from "@/lib/seo";

const fixedPaths = [
  "/",
  "/features",
  "/pricing",
  "/support",
  "/blog",
  "/privacy",
  "/terms",
  "/delivery",
  "/refund",
  "/cookie-policy",
  "/licenses",
];

const contentUpdatedAt = new Date("2026-07-25T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...fixedPaths,
    ...marketingPages
      .map((page) => `/${page.slug}`)
      .filter((path) => !fixedPaths.includes(path)),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    ...Array.from({ length: Math.max(0, getBlogPageCount() - 1) }, (_, index) =>
      `/blog/page/${index + 2}`,
    ),
  ];

  return routing.locales.flatMap((locale) =>
    paths.map((path) => {
      const article = blogPosts.find((post) => `/blog/${post.slug}` === path);
      const marketingPage = marketingPages.find((page) => `/${page.slug}` === path);

      return {
        url: absoluteUrl(localizedPath(locale, path)),
        lastModified: article
          ? new Date(article.dateModified)
          : marketingPage
            ? new Date(marketingPage.dateModified)
            : contentUpdatedAt,
        changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
        priority: path === "/" ? 1 : path === "/pricing" || path === "/features" ? 0.9 : 0.7,
        alternates: {
          languages: {
            en: absoluteUrl(localizedPath("en", path)),
            ar: absoluteUrl(localizedPath("ar", path)),
          },
        },
      };
    }),
  );
}
