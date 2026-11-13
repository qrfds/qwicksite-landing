import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import {routing} from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const configuredSiteUrl = process.env.SITE_URL?.trim();
  const destination = request.nextUrl.clone();
  let shouldRedirect = false;

  if (configuredSiteUrl) {
    const canonicalUrl = new URL(configuredSiteUrl);
    const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0].trim();
    const requestProtocol = forwardedProtocol ? `${forwardedProtocol}:` : request.nextUrl.protocol;

    if (
      request.nextUrl.host !== canonicalUrl.host ||
      requestProtocol !== canonicalUrl.protocol
    ) {
      destination.protocol = canonicalUrl.protocol;
      destination.host = canonicalUrl.host;
      shouldRedirect = true;
    }
  }

  const demoMatch = destination.pathname.match(/^\/(en|ar)\/hero-section-1\/?$/);
  const firstBlogPageMatch = destination.pathname.match(/^\/(en|ar)\/blog\/page\/1\/?$/);
  if (destination.pathname === "/hero-section-1" || destination.pathname === "/hero-section-1/") {
    destination.pathname = "/en";
    destination.search = "";
    shouldRedirect = true;
  } else if (demoMatch) {
    destination.pathname = `/${demoMatch[1]}`;
    destination.search = "";
    shouldRedirect = true;
  } else if (firstBlogPageMatch) {
    destination.pathname = `/${firstBlogPageMatch[1]}/blog`;
    destination.search = "";
    shouldRedirect = true;
  } else if (destination.pathname.length > 1 && destination.pathname.endsWith("/")) {
    destination.pathname = destination.pathname.replace(/\/+$/, "");
    shouldRedirect = true;
  }

  if (
    shouldRedirect &&
    !/^\/(en|ar)(?:\/|$)/.test(destination.pathname) &&
    !destination.pathname.startsWith("/api/")
  ) {
    destination.pathname =
      destination.pathname === "/" ? "/en" : `/en${destination.pathname}`;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(destination, 301);
  }

  const response = intlMiddleware(request);
  const location = response.headers.get("location");

  if (location && (response.status === 307 || response.status === 308)) {
    return NextResponse.redirect(new URL(location, request.url), 301);
  }

  return response;
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
