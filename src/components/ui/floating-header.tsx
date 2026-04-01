'use client';

import React from 'react';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FloatingHeader() {
  const [open, setOpen] = React.useState(false);

  const links = [
    {
      label: 'Features',
      href: '/features',
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
    {
      label: 'About',
      href: '/about',
    },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 md:top-5 z-50',
        'mx-auto w-full max-w-3xl rounded-lg border shadow',
        'bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg'
      )}
    >
      <nav className="mx-auto relative flex items-center justify-between p-1.5">
        <Link
          href="/"
          className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100"
        >
          <img
            src="/QRFDLOGO.png"
            alt="QwickSite Logo"
            className="h-14 w-auto"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.label}
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" asChild>
            <Link href="/support">Login</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            >
              <MenuIcon className="size-4" />
            </Button>
            <SheetContent
              className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
              showClose={false}
              side="left"
            >
              <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    className={buttonVariants({
                      variant: 'ghost',
                      className: 'justify-start',
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <SheetFooter>
                <Button asChild variant="outline">
                  <Link href="/support">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="https://vcboard.qrfds.com/register" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </Link>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
