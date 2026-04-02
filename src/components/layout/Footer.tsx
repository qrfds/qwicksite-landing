"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const t = useTranslations("footer");
  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/201062034597",
      icon: MessageCircle,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ];

  const links = {
    product: [
      { name: t("features"), href: "/features" },
      { name: t("pricing"), href: "/pricing" },
      { name: t("templates"), href: "/templates" },
      { name: t("examples"), href: "/examples" },
    ],
    company: [
      { name: t("about"), href: "/about" },
      { name: t("blog"), href: "/blog" },
      { name: t("careers"), href: "/careers" },
      { name: t("contact"), href: "/contact" },
    ],
    support: [
      { name: t("helpCenter"), href: "/help-center" },
      { name: t("documentation"), href: "/documentation" },
      { name: t("apiReference"), href: "/api-reference" },
      { name: t("status"), href: "/status" },
    ],
    legal: [
      { name: t("privacy"), href: "/privacy" },
      { name: t("terms"), href: "/terms" },
      { name: t("cookiePolicy"), href: "/cookie-policy" },
      { name: t("licenses"), href: "/licenses" },
    ],
  };

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="Go to homepage" className="inline-block mb-4">
              <img
                src="/QRFDLOGO.png"
                alt="QwickSite Logo"
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              {t("tagline")}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-card/40 text-muted-foreground transition-colors hover:text-foreground hover:border-primary/50"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("product")}</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("company")}</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("support")}</h3>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("legal")}</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            {t("copyright")}
          </p>
          {/* <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            Made with ❤️ for entrepreneurs worldwide
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;