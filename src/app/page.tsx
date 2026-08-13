import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SERVICES, STATS, TESTIMONIALS, FAQS, COMPANY } from "@/lib/site-data";
import { FadeUp, Stagger, StaggerItem, SectionHeading } from "@/components/motion";
import { EmblaCarousel } from "@/components/embla-carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Architecture, MEP & BIM Services in Revit",
  description:
    "AMS BIM Services delivers architectural design, MEP engineering and BIM coordination in Revit — perfect solutions for owners, architects and builders.",
};

const FEATURES = [
  {
    title: "Architecture + MEP under one roof",
    text: "Design and engineering that talk to each other from day one — no handoff gaps, no coordination surprises.",
    image: "/images/card-coordination.jpg",
  },
  {
    title: "Revit-first, always",
    text: "Every project lives in an intelligent Revit model: clash-free, data-rich, and ready for construction.",
    image: "/images/service-bim.jpg",
  },
  {
    title: "Precision manufacturing",
    text: "CNC-precision ductwork and fabrication delivered from the same coordinated model we design in.",
    image: "/images/card-manufacturing.jpg",
  },
];

export default function HomePage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AMS BIM Services",
    description:
      "Architectural design, MEP engineering and BIM coordination in Revit — perfect solutions for owners, architects and builders.",
    url: "https://mep-services.amsitservices.com",
    image: "https://mep-services.amsitservices.com/images/hero.jpg",
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: { "@type": "PostalAddress", streetAddress: COMPANY.address },
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: "$$",
    knowsAbout: ["Architecture", "MEP Engineering", "BIM", "Revit Modeling", "Construction Coordination"],
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
                Architecture · MEP · BIM
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
                From concept sketches to coordinated Revit models, we deliver architecture, MEP
                and BIM as one seamless workflow.
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
                alt="Architecture and MEP engineering facility by AMS BIM Services"
                width={1200}
                height={675}
                priority
                className="h-[24rem] w-full object-cover sm:h-[28rem]"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/70 p-4 backdrop-blur-xl">
                <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  Fully coordinated Revit delivery
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
            eyebrow="Why AMS BIM Services"
            title="One team. Every trade. Zero finger-pointing."
            subtitle="Architecture, MEP and BIM working from one coordinated Revit model."
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {FEATURES.map((f) => (
              <StaggerItem key={f.title}>
                <div className="glass-card group h-full overflow-hidden">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={f.image}
                      alt={f.title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-lg font-semibold text-primary">{f.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  </div>
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
              title="Architecture, MEP & BIM — coordinated"
            />
            <FadeUp>
              <Link href="/services" className="btn-glass">
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeUp>
          </div>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`} className="glass-card group block h-full overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-sm font-bold text-white drop-shadow">
                      {s.title}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
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

      {/* ================= GALLERY ================= */}
      <section className="section-pad relative">
        <div className="container-site">
          <SectionHeading
            eyebrow="Gallery"
            title="Our work, in pictures"
            subtitle="Real projects, real systems — HVAC plants, coordinated BIM models and precision ductwork."
          />
          <Stagger className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              { src: "/images/hero.jpg", alt: "Commercial HVAC facility" },
              { src: "/images/service-hvac.jpg", alt: "VRF rooftop unit" },
              { src: "/images/project3.jpg", alt: "Duct manufacturing workshop" },
              { src: "/images/service-bim.jpg", alt: "BIM clash detection screen" },
              { src: "/images/gallery-1.jpg", alt: "Hotel lobby with exposed HVAC diffusers" },
              { src: "/images/gallery-2.jpg", alt: "Rooftop chillers and solar panels at sunset" },
              { src: "/images/service-mep.jpg", alt: "MEP Revit model review" },
              { src: "/images/about.jpg", alt: "Engineering team collaboration" },
            ].map((g) => (
              <StaggerItem key={g.src}>
                <div className="glass-card group relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/60 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-xs font-semibold text-white">{g.alt}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
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
