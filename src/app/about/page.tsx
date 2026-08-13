import Image from "next/image";
import type { Metadata } from "next";
import { Award, Handshake, Clock, TrendingUp, Users } from "lucide-react";
import { TEAM, TIMELINE } from "@/lib/site-data";
import { FadeUp, Stagger, StaggerItem, SectionHeading } from "@/components/motion";

export const metadata: Metadata = {
  title: "About",
  description:
    "AMS BIM Services — 15+ years of architecture, MEP engineering and BIM. Meet the team behind 500+ coordinated projects.",
};

const WHY = [
  {
    icon: Award,
    title: "15+ years of experience",
    text: "500+ projects across commercial, healthcare, manufacturing and institutional sectors.",
  },
  {
    icon: Handshake,
    title: "One accountable team",
    text: "Design, engineering, manufacturing and service under one roof — no finger-pointing between subcontractors.",
  },
  {
    icon: Clock,
    title: "On-time, documented",
    text: "93% of projects delivered on or ahead of schedule, with full documentation at every milestone.",
  },
  {
    icon: TrendingUp,
    title: "Proven results",
    text: "Clients average 30% energy savings from our audits and retrofits — and 98% satisfaction across the board.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-12">
        <div className="blob left-[-8%] top-[-5%] h-[30rem] w-[30rem] bg-accent/15" />
        <div className="container-site relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeUp>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">About us</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                Precision is our <span className="text-accent">manufacturing standard</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                AMS BIM Services started as a two-person architecture and BIM consultancy. Today we're a
                40-person team that designs, engineers, manufactures and services complete
                mechanical, electrical and plumbing systems.
              </p>
            </FadeUp>
            <FadeUp delay={0.24}>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                Everything we do is coordinated in Revit and manufactured in our own CNC shop —
                which means the ductwork that arrives on site is exactly what the model promised.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl border border-white/70 shadow-[0_24px_80px_rgba(30,58,95,0.18)]">
              <Image
                src="/images/about.jpg"
                alt="AMS BIM Services engineering team reviewing Revit models"
                width={1200}
                height={675}
                className="h-[24rem] w-full object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============ WHY PARTNER ============ */}
      <section className="section-pad !pt-8">
        <div className="container-site">
          <SectionHeading eyebrow="Why partner with us" title="Four reasons clients stay for years" />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <StaggerItem key={w.title}>
                <div className="glass-card h-full p-7 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#2a5a92] text-white">
                    <w.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-primary">{w.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section className="section-pad !pt-8">
        <div className="container-site">
          <SectionHeading
            eyebrow="The team"
            title="Meet the people behind the projects"
            subtitle="Engineers, BIM specialists and fabricators who take ownership of every delivery."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <StaggerItem key={m.name}>
                <div className="glass-card h-full overflow-hidden text-center">
                  <div className="relative h-56 w-full">
                    <Image src={m.image} alt={`${m.name} — ${m.title} at AMS BIM Services`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary">{m.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">{m.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="section-pad !pt-8">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our journey"
            title="Milestones that built the company"
          />
          <div className="relative mx-auto mt-14 max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent/60 via-primary/20 to-transparent sm:left-1/2" />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <FadeUp key={t.year} delay={0.04 * i}>
                  <div className={`relative flex items-start gap-6 pl-12 sm:w-1/2 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"}`}>
                    <span className={`absolute left-4 top-1 flex h-4 w-4 -translate-x-1/2 items-center justify-center sm:left-auto ${i % 2 === 0 ? "sm:right-0 sm:translate-x-1/2" : "sm:left-0 sm:-translate-x-1/2"}`}>
                      <span className="h-4 w-4 rounded-full border-2 border-accent bg-white shadow" />
                    </span>
                    <div className="glass-card flex-1 p-6">
                      <p className="text-sm font-bold text-accent">{t.year}</p>
                      <h3 className="mt-1 text-lg font-bold text-primary">{t.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATIONS ============ */}
      <section className="section-pad !pt-8">
        <div className="container-site">
          <FadeUp>
            <div className="glass flex flex-wrap items-center justify-center gap-8 rounded-3xl px-8 py-8">
              {[
                { icon: Award, label: "ISO 9001 Certified" },
                { icon: Users, label: "PE-Licensed Engineers" },
                { icon: Award, label: "SMACNA Member" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="font-semibold text-primary">{c.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
