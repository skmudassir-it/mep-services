import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { FadeUp, Stagger, StaggerItem, SectionHeading } from "@/components/motion";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architectural design, MEP engineering, BIM & Revit coordination and construction support — delivered as one coordinated workflow.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-12">
        <div className="blob left-[-8%] top-[-10%] h-[28rem] w-[28rem] bg-accent/15" />
        <div className="container-site relative text-center">
          <SectionHeading
            eyebrow="Services"
            title="Architecture, MEP & BIM — one coordinated workflow"
            subtitle="From concept design to coordinated Revit models and construction support."
          />
        </div>
      </section>

      <section className="section-pad !pt-4">
        <div className="container-site">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`} className="glass-card group flex h-full flex-col overflow-hidden">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-base font-bold text-white drop-shadow">
                      {s.title}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
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
                  </div>
                </Link>
              </StaggerItem>
            ))}
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
