import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "QuickSite - AI Website Builder | Launch in Minutes",
  description: "AI builds your site instantly, so you can focus on growing your business, not building tech. Create a professional website or online store in minutes — no coding needed.",
  keywords: ["AI website builder", "website builder", "e-commerce", "no-code", "AI", "website creation"],
  authors: [{ name: "QuickSite Team" }],
  openGraph: {
    title: "QuickSite - AI Website Builder",
    description: "Launch a professional website or online store in minutes — no coding needed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
