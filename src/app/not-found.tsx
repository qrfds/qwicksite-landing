import Link from "next/link";
import type { Metadata } from "next";
import NotFoundEvent from "@/components/analytics/NotFoundEvent";

export const metadata: Metadata = {
  title: "Page Not Found | QwickSite",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <NotFoundEvent />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link 
            href="/" 
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors inline-block"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}
