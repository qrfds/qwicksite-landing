import type { AppLocale } from "@/i18n/routing";

export type BlogPostSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPostContent = {
  title: string;
  description: string;
  introduction: string;
  sections: BlogPostSection[];
  faqs?: Array<{ question: string; answer: string }>;
};

export type BlogPost = {
  slug: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorUrl?: string;
  content: Record<AppLocale, BlogPostContent>;
};

export const blogPosts: BlogPost[] = [];
export const BLOG_PAGE_SIZE = 9;

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPageCount() {
  return Math.max(1, Math.ceil(blogPosts.length / BLOG_PAGE_SIZE));
}

export function getBlogPage(page: number) {
  const start = (page - 1) * BLOG_PAGE_SIZE;
  return blogPosts.slice(start, start + BLOG_PAGE_SIZE);
}
