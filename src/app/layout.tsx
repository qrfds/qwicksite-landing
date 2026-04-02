import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "QwickSite - AI Website Builder | Launch in Minutes",
  description: "AI builds your site instantly, so you can focus on growing your business, not building tech. Create a professional website or online store in minutes — no coding needed.",
  keywords: ["AI website builder", "website builder", "e-commerce", "no-code", "AI", "website creation"],
  authors: [{ name: "QwickSite Team" }],
  icons: {
    icon: "/qrfd.ico",
    shortcut: "/qrfd.ico",
    apple: "/qrfd.ico",
  },
  openGraph: {
    title: "QwickSite - AI Website Builder",
    description: "Launch a professional website or online store in minutes — no coding needed.",
    type: "website",
    images: [
      {
        url: "/quicksite-hero.jpg",
        width: 1200,
        height: 630,
        alt: "QwickSite AI website builder hero preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QwickSite - AI Website Builder",
    description: "Launch a professional website or online store in minutes — no coding needed.",
    images: ["/quicksite-hero.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
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
      </body>
    </html>
  );
}
