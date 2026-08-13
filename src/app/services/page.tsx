import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Snowflake, Wrench, Factory, Boxes, Settings, Gauge } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { FadeUp, Stagger, StaggerItem, SectionHeading } from "@/components/motion";

export const metadata: Metadata = {
  title: "Services",
  description:
    "HVAC design and installation, MEP engineering, BIM & Revit coordination, duct manufacturing, maintenance and energy audits.",
};

const ICON_MAP: Record<string, typeof Snowflake> = {
  Snowflake,
  Wrench,
  Factory,
  Boxes,
  Settings,
  Gauge,
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-12">
        <div className="blob left-[-8%] top-[-10%] h-[28rem] w-[28rem] bg-accent/15" />
        <div className="container-site relative text-center">
          <SectionHeading
            eyebrow="Services"
            title="Design, engineering, manufacturing & service"
            subtitle="Six service lines that work as one coordinated team — from load calculations to CNC-cut ductwork."
          />
        </div>
      </section>

      <section className="section-pad !pt-4">
        <div className="container-site">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = ICON_MAP[s.icon] ?? Snowflake;
              return (
                <StaggerItem key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="glass-card flex h-full flex-col p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#2a5a92] text-white shadow-md shadow-primary/25">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-primary">{s.title}</h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
                    <ul className="mt-4 space-y-1.5">
                      {s.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      View service <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section-pad !pt-10">
        <div className="container-site">
          <FadeUp>
            <div className="glass rounded-3xl p-10 text-center">
              <h2 className="text-2xl font-bold text-primary">Not sure which service you need?</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Book a free consultation — we'll map your project to the right combination of
                HVAC, MEP and manufacturing services.
              </p>
              <Link href="/contact" className="btn-gradient mt-6">
                Talk to us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
