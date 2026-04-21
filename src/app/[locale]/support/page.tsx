import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, LifeBuoy, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { TypingEffect } from "@/components/ui/typing-effect";

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
    href: "mailto:support@qrfds.com",
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
              <TypingEffect text="QwickSite Support Center" speed={60} />
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

          <section className="mt-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-border/40 bg-primary/5">
                <h2 className="text-lg font-semibold">Contact Information</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
                <div className="flex items-center gap-4 px-6 py-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</p>
                    <p className="text-sm text-foreground">support@qrfds.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-6 py-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Phone</p>
                    <p className="text-sm text-foreground">+201062034597</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-6 py-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Address</p>
                    <p className="text-sm text-foreground">17 Abbas el Akkad, Nasr City, Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
