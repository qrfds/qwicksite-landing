"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Examples", href: "#examples" },
    { name: "Support", href: "#support" },
  ];

  return (
    <header className="relative top-4 z-50 w-full max-w-7xl mx-auto rounded-2xl border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg">
      <div className="container flex items-center justify-between h-24 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/QRFDLOGO.png" 
            alt="QRFD Logo" 
            className="h-20 w-auto"
          />
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost">Sign In</Button>
          <Button asChild variant="hero" size="sm" className="px-4 py-2">
            <Link href="https://vcboard.qrfds.com/register" target="_blank" rel="noopener noreferrer">
              Start Free Now
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-border/50">
          <div className="space-y-4 text-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-muted-foreground hover:text-foreground transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full">Sign In</Button>
              <Button asChild variant="hero" size="sm" className="w-full px-4 py-2">
                <Link href="https://vcboard.qrfds.com/register" target="_blank" rel="noopener noreferrer">
                  Start Free Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;