import type { Metadata } from "next";
import { Cairo, Geist } from "next/font/google";
import { getLocale } from "next-intl/server";
import Analytics from "@/components/analytics/Analytics";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "QwickSite | AI Website Builder & Ecommerce Platform",
    template: "%s",
  },
  description:
    "QwickSite is an AI website builder and ecommerce platform for businesses in Egypt and MENA.",
  applicationName: "QwickSite",
  keywords: [
    "QwickSite",
    "AI website builder",
    "ecommerce platform",
    "online store builder",
    "Egypt",
    "MENA",
    "Arabic website builder",
  ],
  authors: [{ name: "QwickSite Team" }],
  creator: "QwickSite",
  publisher: "QwickSite",
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/qwicksite.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const isArabic = locale === "ar";

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${cairo.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen w-full relative">
            {/* Dark Mode Background */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background: "var(--bg-dark)",
                display: "var(--dark-display, none)",
              }}
            />

            {/* Light Mode Background */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background: "var(--bg-light)",
                backgroundImage: "var(--bg-light-glow)",
                filter: "blur(80px)",
                backgroundRepeat: "no-repeat",
                display: "var(--light-display, block)",
              }}
            />

            {/* Your Content/Components */}
            <div className="relative z-10">{children}</div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
