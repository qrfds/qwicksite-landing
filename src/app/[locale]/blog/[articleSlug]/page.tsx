import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";
import {
  absoluteUrl,
  createBlogPostingSchema,
  createBreadcrumbSchema,
  createFaqSchema,
  createPageMetadata,
  createWebPageSchema,
  localizedPath,
} from "@/lib/seo";

function resolveLocale(locale: string): AppLocale {
  return locale === "ar" ? "ar" : "en";
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, articleSlug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; articleSlug: string }>;
}): Promise<Metadata> {
  const { locale, articleSlug } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const localeKey = resolveLocale(locale);
  const post = getBlogPost(articleSlug);
  if (!post) {
    return {};
  }

  const content = post.content[localeKey];
  return createPageMetadata({
    locale: localeKey,
    path: `/blog/${articleSlug}`,
    title: `${content.title} | QwickSite`,
    description: content.description,
    image: post.image,
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; articleSlug: string }>;
}) {
  const { locale, articleSlug } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const localeKey = resolveLocale(locale);
  setRequestLocale(localeKey);
  const post = getBlogPost(articleSlug);
  if (!post) {
    notFound();
  }

  const content = post.content[localeKey];
  const path = `/blog/${articleSlug}`;
  const url = absoluteUrl(localizedPath(localeKey, path));
  const breadcrumbs = [
    { name: localeKey === "ar" ? "الرئيسية" : "Home", path: "/" },
    { name: localeKey === "ar" ? "المدونة" : "Blog", path: "/blog" },
    { name: content.title, path },
  ];

  return (
    <div className="min-h-screen">
      <JsonLd
        id={`qwicksite-blog-${articleSlug}-schema`}
        data={[
          createWebPageSchema({
            locale: localeKey,
            path,
            title: content.title,
            description: content.description,
            breadcrumbId: `${url}#breadcrumb`,
          }),
          createBreadcrumbSchema(localeKey, path, breadcrumbs),
          createBlogPostingSchema({
            locale: localeKey,
            slug: articleSlug,
            title: content.title,
            description: content.description,
            image: post.image,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            authorName: post.authorName,
            authorUrl: post.authorUrl,
          }),
          content.faqs?.length ? createFaqSchema(content.faqs) : null,
        ]}
      />
      <Header />
      <Breadcrumbs items={breadcrumbs} />
      <main className="pb-16 pt-8">
        <article className="container max-w-4xl">
          <header className="mb-10 text-center">
            <p className="text-sm text-muted-foreground">
              {new Intl.DateTimeFormat(localeKey, { dateStyle: "long" }).format(
                new Date(post.datePublished),
              )}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-bold md:text-6xl">{content.title}</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
              {content.description}
            </p>
          </header>
          <div className="space-y-8">
            <p className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-lg leading-relaxed">
              {content.introduction}
            </p>
            {content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold md:text-3xl">{section.title}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-5 list-disc space-y-2 ps-5 text-muted-foreground">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
            {content.faqs?.length ? (
              <section>
                <h2 className="text-2xl font-semibold md:text-3xl">
                  {localeKey === "ar" ? "الأسئلة الشائعة" : "Frequently asked questions"}
                </h2>
                <div className="mt-5 space-y-4">
                  {content.faqs.map((faq) => (
                    <details key={faq.question} className="rounded-xl border border-border/60 p-4">
                      <summary className="cursor-pointer font-medium">{faq.question}</summary>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
          <aside className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <h2 className="text-xl font-semibold">
              {localeKey === "ar" ? "روابط QwickSite الأساسية" : "Essential QwickSite links"}
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="outline"><Link href="/">QwickSite</Link></Button>
              <Button asChild variant="outline"><Link href="/pricing">QwickSite Ecommerce Platform</Link></Button>
              <Button asChild variant="outline"><Link href="/features">QwickSite AI Website Builder</Link></Button>
              <Button asChild variant="outline"><Link href="/about">{localeKey === "ar" ? "عن QwickSite" : "About QwickSite"}</Link></Button>
              <Button asChild variant="outline"><Link href="/contact">{localeKey === "ar" ? "تواصل مع QwickSite" : "Contact QwickSite"}</Link></Button>
            </div>
          </aside>
        </article>
      </main>
      <Footer />
    </div>
  );
}
