import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight, Snowflake, Wrench, Factory, Boxes, ShieldCheck, Award, Users, Settings, Gauge,
} from "lucide-react";
import { SERVICES, STATS, TESTIMONIALS, FAQS, COMPANY } from "@/lib/site-data";
import { FadeUp, Stagger, StaggerItem, SectionHeading } from "@/components/motion";
import { EmblaCarousel } from "@/components/embla-carousel";
import { StarRating } from "@/components/star-rating";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "HVAC, MEP Engineering & Duct Manufacturing",
  description:
    "MEP Services delivers HVAC design and installation, MEP engineering, BIM coordination, duct manufacturing and energy audits — precision solutions from one team.",
};

const ICONS: Record<string, typeof Snowflake> = {
  Snowflake,
  Wrench,
  Factory,
  Boxes,
  Settings,
  Gauge,
};

const FEATURES = [
  {
    icon: Factory,
    title: "Design. Build. Manufacture.",
    text: "HVAC design, MEP engineering and in-house duct manufacturing under one roof — one team accountable for the whole job.",
  },
  {
    icon: Boxes,
    title: "Revit-coordinated delivery",
    text: "Every MEP package is coordinated in Revit with architecture and structure, so clashes die in the model, not on site.",
  },
  {
    icon: ShieldCheck,
    title: "98% client satisfaction",
    text: "500+ projects, 15+ years, and a maintenance network that answers the phone at 2am.",
  },
];

export default function HomePage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    description: COMPANY.description,
    url: "https://mep-services.amsitservices.com",
    image: "https://mep-services.amsitservices.com/images/hero.jpg",
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: { "@type": "PostalAddress", streetAddress: COMPANY.address },
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: "$$",
    knowsAbout: ["HVAC Design", "MEP Engineering", "Duct Manufacturing", "BIM Coordination", "Energy Audits"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28">
        <div className="blob left-[-10%] top-[-5%] h-[32rem] w-[32rem] bg-accent/20" />
        <div className="blob right-[-8%] top-[10%] h-[28rem] w-[28rem] bg-primary/15" />
        <div className="blob bottom-[-20%] left-[30%] h-[30rem] w-[30rem] bg-[#6ea8dc]/15" />

        <div className="container-site relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeUp>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                HVAC · MEP · Duct Manufacturing
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Engineered comfort, <br />
                <span className="bg-gradient-to-r from-primary via-[#2a5a92] to-accent bg-clip-text text-transparent">
                  manufactured with precision
                </span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                From load calculations to CNC-cut ductwork, we deliver HVAC and MEP projects
                that are designed, coordinated and built to perform — by one accountable team.
              </p>
            </FadeUp>
            <FadeUp delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-gradient">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="btn-glass">
                  Explore Services
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                {STATS.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-primary">{s.value}</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/70 shadow-[0_24px_80px_rgba(30,58,95,0.18)]">
              <Image
                src="/images/hero.jpg"
                alt="Commercial HVAC and MEP engineering facility by MEP Services"
                width={1200}
                height={675}
                priority
                className="h-[24rem] w-full object-cover sm:h-[28rem]"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/70 p-4 backdrop-blur-xl">
                <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Factory className="h-4 w-4 text-accent" />
                  In-house duct manufacturing · Revit-coordinated delivery
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="section-pad relative">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why MEP Services"
            title="One team. Every trade. Zero finger-pointing."
            subtitle="Design, engineering, manufacturing and service working from one coordinated model."
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {FEATURES.map((f) => (
              <StaggerItem key={f.title}>
                <div className="glass-card h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#2a5a92] text-white shadow-md shadow-primary/25">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-primary">{f.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section-pad relative">
        <div className="blob right-[-10%] top-[10%] h-[26rem] w-[26rem] bg-accent/15" />
        <div className="container-site relative">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="What we do"
              title="HVAC, MEP & manufacturing — coordinated"
            />
            <FadeUp>
              <Link href="/services" className="btn-glass">
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeUp>
          </div>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = ICONS[s.icon] ?? Snowflake;
              return (
                <StaggerItem key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="glass-card block h-full p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-white/60 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-primary">{s.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="section-pad !py-14">
        <div className="container-site">
          <Stagger className="glass grid gap-8 rounded-3xl px-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-extrabold text-transparent">
                  {s.value}
                </p>
                <p className="mt-1.5 text-sm uppercase tracking-wider text-muted-foreground">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section-pad relative">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="Testimonials"
              title="What our clients say"
            />
            <FadeUp>
              <Link href="/testimonials" className="btn-glass">
                All testimonials <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeUp>
          </div>
          <FadeUp className="mt-12">
            <EmblaCarousel items={TESTIMONIALS.map((t) => ({ quote: t.quote, name: t.name, role: t.role }))} />
          </FadeUp>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="section-pad relative">
        <div className="blob left-[-10%] top-[20%] h-[24rem] w-[24rem] bg-primary/10" />
        <div className="container-site relative max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <FadeUp className="mt-10">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="glass rounded-2xl border !border-primary/10 px-5"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-pad relative">
        <div className="container-site">
          <FadeUp>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#244b7a] to-[#2a5a92] px-8 py-14 text-center shadow-2xl shadow-primary/30 sm:px-16">
              <div className="blob left-[10%] top-[-30%] h-64 w-64 bg-accent/30" />
              <div className="blob bottom-[-40%] right-[10%] h-72 w-72 bg-white/10" />
              <h2 className="relative text-3xl font-bold text-white sm:text-4xl">
                Ready to work with us?
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-white/80">
                Tell us about your building — we'll show you how coordinated MEP engineering and
                in-house manufacturing can save you time, money and site headaches.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-primary shadow-lg transition-all hover:bg-amber-50 active:scale-[0.98]"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-[0.98]"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
