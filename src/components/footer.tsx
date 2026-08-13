import Link from "next/link";
import { Building2, Mail, Phone, MapPin, Clock, Globe, Share2, Rss, Send } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative mt-8 px-4 pb-6">
      <div className="glass mx-auto max-w-7xl rounded-3xl p-8 sm:p-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#2a5a92] text-white">
                <Building2 className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight text-primary">{COMPANY.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{COMPANY.description}</p>
            <form className="mt-5" aria-label="Newsletter signup">
              <label htmlFor="newsletter-email" className="text-xs font-semibold uppercase tracking-wider text-primary">
                Newsletter
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email"
                  className="h-10 w-full rounded-xl border border-primary/15 bg-white/60 px-3 text-sm outline-none backdrop-blur-md transition-colors placeholder:text-muted-foreground focus:border-accent/60"
                />
                <button
                  type="submit"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#2a5a92] text-white transition-all hover:brightness-110"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/about", label: "About us" },
                { href: "/projects", label: "Projects" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {COMPANY.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`} className="hover:text-primary">{COMPANY.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-primary">{COMPANY.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-accent" />
                {COMPANY.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.{" "}
            <Link href="/privacy" className="underline-offset-2 hover:underline">Privacy Policy</Link> ·{" "}
            <Link href="/terms" className="underline-offset-2 hover:underline">Terms of Service</Link>
          </p>
          <div className="flex items-center gap-3">
            {[Globe, Share2, Rss].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-white/40 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
                aria-label="Social link"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
