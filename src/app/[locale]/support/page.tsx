import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, LifeBuoy } from "lucide-react";
import Link from "next/link";

const supportOptions = [
  {
    title: "WhatsApp",
    description: "Chat with our team on WhatsApp for fast answers during business hours.",
    icon: MessageSquare,
    cta: "Chat on WhatsApp",
    href: "https://wa.me/201062034597",
  },
  {
    title: "Email Support",
    description: "Send us details and we will get back within 24 hours.",
    icon: Mail,
    cta: "Email Us",
    href: "mailto:sales@qrfds.com",
  },
  {
    title: "Help Center",
    description: "Browse setup guides, tutorials, and troubleshooting steps.",
    icon: LifeBuoy,
    cta: "View Resources",
    href: "/help-center",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20 pb-16">
        <section className="container">
          <div className="max-w-3xl mx-auto text-center space-y-5 mb-12 md:mb-16">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-card/40 border-primary/30">
              We are here to help
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              QwickSite{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/90 bg-clip-text text-transparent">
                Support Center
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Need help with setup, billing, or your website? Reach out and our team will assist
              you quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportOptions.map((option) => (
              <Card
                key={option.title}
                className="h-full border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:shadow-soft transition-all"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <option.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-muted-foreground leading-relaxed">{option.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href={option.href}
                      target={option.href.startsWith("http") ? "_blank" : undefined}
                      rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {option.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
