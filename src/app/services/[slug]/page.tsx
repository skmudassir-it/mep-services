import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Check, Snowflake, Wrench, Factory, Boxes, Settings, Gauge } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";

const ICON_MAP: Record<string, typeof Snowflake> = {
  Snowflake,
  Wrench,
  Factory,
  Boxes,
  Settings,
  Gauge,
};

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.tagline,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = ICON_MAP[service.icon] ?? Snowflake;
  const others = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-12">
        <div className="blob right-[-10%] top-[-5%] h-[30rem] w-[30rem] bg-accent/15" />
        <div className="container-site relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeUp>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#2a5a92] text-white shadow-lg shadow-primary/25">
                <Icon className="h-7 w-7" />
              </span>
            </FadeUp>
            <FadeUp delay={0.06}>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our service</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                {service.title}
              </h1>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{service.description}</p>
            </FadeUp>
            <FadeUp delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-gradient">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="btn-glass">
                  All services
                </Link>
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={0.18}>
            <div className="relative overflow-hidden rounded-3xl border border-white/70 shadow-[0_24px_80px_rgba(30,58,95,0.18)]">
              <Image
                src={service.image}
                alt={`${service.title} — delivered by MEP Services`}
                width={1200}
                height={675}
                className="h-[22rem] w-full object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-pad !pt-6">
        <div className="container-site grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <FadeUp>
              <h2 className="text-2xl font-bold text-primary">What&apos;s included</h2>
            </FadeUp>
            <Stagger className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.features.map((f) => (
                <StaggerItem key={f}>
                  <div className="glass-card flex items-start gap-3 p-5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{f}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeUp className="mt-10">
              <h2 className="text-2xl font-bold text-primary">Deliverables</h2>
            </FadeUp>
            <Stagger className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.deliverables.map((d) => (
                <StaggerItem key={d}>
                  <div className="glass-card p-5">
                    <p className="text-sm font-medium text-foreground">{d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <aside className="lg:col-span-2">
            <FadeUp>
              <div className="glass rounded-3xl p-7">
                <h3 className="text-lg font-bold text-primary">Other services</h3>
                <ul className="mt-4 space-y-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/services/${o.slug}`}
                        className="group flex items-center justify-between rounded-xl border border-primary/10 bg-white/40 px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/25 hover:bg-white/70"
                      >
                        {o.title}
                        <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl bg-gradient-to-br from-primary to-[#2a5a92] p-5 text-white">
                  <p className="font-semibold">Need a combined package?</p>
                  <p className="mt-1.5 text-sm text-white/80">
                    Most projects combine design, engineering and in-house manufacturing. Get one coordinated quote.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-primary transition-all hover:bg-amber-50"
                  >
                    Get a quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </aside>
        </div>
      </section>
    </>
  );
}
