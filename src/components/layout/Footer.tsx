import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.6 6.8a4.8 4.8 0 0 1-3-1.1 4.8 4.8 0 0 1-1.6-2.7h-3.2v12.4a2.6 2.6 0 1 1-1.9-2.5V9.7a5.8 5.8 0 1 0 5.1 5.7V9.3a8 8 0 0 0 4.6 1.5z" />
  </svg>
);

// Replace each "link_here" with the real profile URL (or set the NEXT_PUBLIC_SOCIAL_<NAME>_URL env var).
const SOCIAL_PROFILES: {
  name: string;
  href: string;
  icon: LucideIcon | typeof TikTokIcon;
}[] = [
  { name: "Facebook", href: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL || "https://www.facebook.com/qwicksite", icon: Facebook },
  { name: "Instagram", href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL || "https://www.instagram.com/qwicksiteai", icon: Instagram },
  { name: "TikTok", href: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK_URL || "https://www.tiktok.com/@qwicksite", icon: TikTokIcon },
  { name: "YouTube", href: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE_URL || "https://www.youtube.com/@qwicksite", icon: Youtube },
  { name: "LinkedIn", href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL || "https://www.linkedin.com/showcase/qwicksite-ai", icon: Linkedin },
];

const Footer = async () => {
  const t = await getTranslations("footer");
  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/201062034597",
      icon: MessageCircle,
    },
    ...SOCIAL_PROFILES,
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
      { name: t("partners"), href: "/partners" },
    ] as { name: string; href: string; external?: boolean }[],
    support: [
      { name: t("helpCenter"), href: "/help-center" },
      { name: t("documentation"), href: "/documentation" },
      { name: t("apiReference"), href: "/api-reference" },
      { name: t("status"), href: "/status" },
    ],
    legal: [
      { name: t("privacy"), href: "/privacy" },
      { name: t("terms"), href: "/terms" },
      { name: t("delivery"), href: "/delivery" },
      { name: t("refund"), href: "/refund" },
      { name: t("cookiePolicy"), href: "/cookie-policy" },
      { name: t("licenses"), href: "/licenses" },
    ],
  };

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="h-card col-span-2 md:col-span-1">
            <p className="p-name mb-3 text-sm font-semibold text-foreground">QwickSite Team</p>
            <Link href="/" aria-label="Go to homepage" className="u-url inline-block mb-4">
              <Image
                src="/images/qwicksite-logo.webp"
                alt="QwickSite AI website builder and ecommerce platform logo"
                width={160}
                height={154}
                className="h-20 w-auto"
              />
            </Link>
            <p className="p-note text-sm text-muted-foreground mb-4">
              {t("tagline")}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/60 bg-card/40 text-muted-foreground transition-colors hover:text-foreground hover:border-primary/50"
                >
                  <social.icon className="h-4 w-4 shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t("contactUs")}</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@qwicksite.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  {t("email")}
                </a>
              </li>
              <li>
                <a href="tel:+201062034597" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  {t("phone")}
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground flex items-start gap-2">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  {t("address")}
                </span>
              </li>
            </ul>
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
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  )}
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
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            Powered By QRFDS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
