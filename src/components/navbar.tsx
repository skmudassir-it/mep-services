"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-12 z-50 px-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6",
          scrolled
            ? "border-white/70 bg-white/80 shadow-[0_8px_32px_rgba(30,58,95,0.12)] backdrop-blur-xl"
            : "border-white/40 bg-white/40 backdrop-blur-md"
        )}
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#2a5a92] text-white shadow-md shadow-primary/25">
            <Building2 className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-primary">
            minilamisam
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-white/60 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-gradient !px-5 !py-2.5">
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-primary md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-white/70 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link href="/contact" className="btn-gradient w-full">
                Get a Quote
              </Link>
            </li>
          </ul>
        </motion.div>
      ) : null}
    </header>
  );
}
