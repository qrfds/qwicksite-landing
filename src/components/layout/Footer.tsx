"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const Footer = () => {
  const t = useTranslations("footer");

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
            <div className="flex gap-4">
              <div className="w-6 h-6 bg-primary/20 rounded"></div>
              <div className="w-6 h-6 bg-primary/20 rounded"></div>
              <div className="w-6 h-6 bg-primary/20 rounded"></div>
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