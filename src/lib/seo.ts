import type { Metadata } from "next";
import type { AppLocale } from "@/i18n/routing";

export type JsonLdNode = Record<string, unknown>;

export type BreadcrumbItem = {
  name: string;
  path: string;
};

type PageMetadataInput = {
  locale: AppLocale;
  path?: string;
  title: string;
  description: string;
  image?: string;
  indexable?: boolean;
};

type WebPageSchemaInput = {
  locale: AppLocale;
  path?: string;
  title: string;
  description: string;
  breadcrumbId?: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "CheckoutPage";
};

type SoftwareOffer = {
  name: string;
  price: number;
  priceCurrency: string;
  url: string;
};

const fallbackSiteUrl = "https://qwicksite.com";
const configuredSiteUrl = process.env.SITE_URL?.trim() || fallbackSiteUrl;

export const SITE_URL = configuredSiteUrl.replace(/\/+$/, "");
export const SITE_NAME = "QwickSite";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SOFTWARE_ID = `${SITE_URL}/#software`;
export const FOUNDER_ID = `${SITE_URL}/en/about#founder`;

export function normalizePath(path = "/") {
  const pathname = path.split(/[?#]/, 1)[0] || "/";
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withLeadingSlash.length > 1 ? withLeadingSlash.replace(/\/+$/, "") : "/";
}

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${normalizePath(path)}`;
}

export function localizedPath(locale: AppLocale, path = "/") {
  const normalized = normalizePath(path);
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function localizedAlternates(locale: AppLocale, path = "/") {
  return {
    canonical: absoluteUrl(localizedPath(locale, path)),
    languages: {
      en: absoluteUrl(localizedPath("en", path)),
      ar: absoluteUrl(localizedPath("ar", path)),
      "x-default": absoluteUrl(localizedPath("en", path)),
    },
  };
}

export function createPageMetadata({
  locale,
  path = "/",
  title,
  description,
  image = "/images/qwicksite-ai-website-builder-social-card.webp",
  indexable = true,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(localizedPath(locale, path));
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: localizedAlternates(locale, path),
    robots: indexable
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 900,
          alt: "QwickSite AI website builder and ecommerce platform",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function createOrganizationSchema(): JsonLdNode {
  const foundingDate = process.env.QWICKSITE_FOUNDING_DATE?.trim();
  const founderName = process.env.QWICKSITE_FOUNDER_NAME?.trim();
  const socialUrls = (process.env.QWICKSITE_SOCIAL_URLS || "")
    .split(",")
    .map((url) => url.trim())
    .filter((url) => /^https:\/\//.test(url));

  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: "QRFDS",
    description:
      "QwickSite is an AI website builder and ecommerce platform for businesses in Egypt and the Middle East and North Africa.",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/qwicksite-logo.webp"),
      contentUrl: absoluteUrl("/images/qwicksite-logo.webp"),
      width: 512,
      height: 493,
    },
    email: "support@qwicksite.com",
    telephone: "+201062034597",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 Abbas El Akkad",
      addressLocality: "Nasr City",
      addressRegion: "Cairo",
      addressCountry: "EG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@qwicksite.com",
      telephone: "+201062034597",
      availableLanguage: ["English", "Arabic"],
      areaServed: ["EG", "Middle East and North Africa"],
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Egypt",
      },
      {
        "@type": "Place",
        name: "Middle East and North Africa",
      },
    ],
    ...(foundingDate ? { foundingDate } : {}),
    ...(founderName ? { founder: { "@id": FOUNDER_ID } } : {}),
    ...(socialUrls.length ? { sameAs: socialUrls } : {}),
  };
}

export function createFounderSchema(): JsonLdNode | null {
  const name = process.env.QWICKSITE_FOUNDER_NAME?.trim();
  if (!name) {
    return null;
  }

  const url = process.env.QWICKSITE_FOUNDER_URL?.trim();

  return {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name,
    ...(url && /^https:\/\//.test(url) ? { url, sameAs: [url] } : {}),
    affiliation: {
      "@id": ORGANIZATION_ID,
    },
    worksFor: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function createWebsiteSchema(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["en", "ar"],
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function createSoftwareApplicationSchema(
  description: string,
  offers: SoftwareOffer[],
): JsonLdNode {
  return {
    "@type": "SoftwareApplication",
    "@id": SOFTWARE_ID,
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "AI Website Builder and Ecommerce Platform",
    operatingSystem: "Web",
    description,
    url: SITE_URL,
    creator: {
      "@id": ORGANIZATION_ID,
    },
    provider: {
      "@id": ORGANIZATION_ID,
    },
    offers: offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      price: offer.price,
      priceCurrency: offer.priceCurrency,
      url: offer.url,
      availability: "https://schema.org/InStock",
    })),
  };
}

export function createWebPageSchema({
  locale,
  path = "/",
  title,
  description,
  breadcrumbId,
  type = "WebPage",
}: WebPageSchemaInput): JsonLdNode {
  const url = absoluteUrl(localizedPath(locale, path));

  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: locale,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": SOFTWARE_ID,
    },
    ...(normalizePath(path) !== "/"
      ? { breadcrumb: { "@id": breadcrumbId || `${url}#breadcrumb` } }
      : {}),
  };
}

export function createBreadcrumbSchema(
  locale: AppLocale,
  path: string,
  items: BreadcrumbItem[],
): JsonLdNode {
  const url = absoluteUrl(localizedPath(locale, path));

  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(localizedPath(locale, item.path)),
    })),
  };
}

export function createFaqSchema(items: Array<{ question: string; answer: string }>): JsonLdNode {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createBlogPostingSchema({
  locale,
  slug,
  title,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
}: {
  locale: AppLocale;
  slug: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorUrl?: string;
}): JsonLdNode {
  const path = `/blog/${slug}`;
  const url = absoluteUrl(localizedPath(locale, path));

  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description,
    image: [absoluteUrl(image)],
    datePublished,
    dateModified,
    inLanguage: locale,
    mainEntityOfPage: {
      "@id": `${url}#webpage`,
    },
    author: {
      "@type": authorUrl ? "Person" : "Organization",
      name: authorName,
      ...(authorUrl ? { url: authorUrl } : { "@id": ORGANIZATION_ID }),
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };
}
