import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, Building2, Calendar, Ruler, Timer } from "lucide-react";
import { PROJECTS } from "@/lib/site-data";
import { FadeUp } from "@/components/motion";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.challenge.slice(0, 150),
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = PROJECTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-10">
        <div className="blob right-[-10%] top-[-5%] h-[30rem] w-[30rem] bg-accent/15" />
        <div className="container-site relative">
          <FadeUp>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> Back to portfolio
            </Link>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">{project.title}</h1>
          </FadeUp>
          <FadeUp delay={0.12}>
            <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="rounded-full border border-primary/15 bg-white/50 px-3 py-1 font-semibold text-primary backdrop-blur-md">{project.category}</span>
              <span className="flex items-center gap-1.5"><Building2 className="h-4 w-4 text-accent" /> {project.service}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-accent" /> {project.year}</span>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-pad !pt-6">
        <div className="container-site">
          <FadeUp>
            <div className="relative overflow-hidden rounded-3xl border border-white/70 shadow-[0_24px_80px_rgba(30,58,95,0.18)]">
              <Image
                src={project.image}
                alt={`${project.title} — ${project.category} project`}
                width={1600}
                height={900}
                className="h-[22rem] w-full object-cover sm:h-[28rem]"
              />
            </div>
          </FadeUp>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <FadeUp>
                <div className="glass rounded-3xl p-7">
                  <h2 className="text-xl font-bold text-primary">The Challenge</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{project.challenge}</p>
                </div>
              </FadeUp>
              <FadeUp delay={0.08}>
                <div className="glass rounded-3xl p-7">
                  <h2 className="text-xl font-bold text-primary">Our Solution</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{project.solution}</p>
                </div>
              </FadeUp>
              <FadeUp delay={0.16}>
                <div className="glass rounded-3xl p-7">
                  <h2 className="text-xl font-bold text-primary">The Results</h2>
                  <ul className="mt-4 space-y-3">
                    {project.results.map((r) => (
                      <li key={r} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                          <Check className="h-4 w-4" />
                        </span>
                        <span className="font-medium text-foreground">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            </div>

            <aside className="space-y-6">
              <FadeUp>
                <div className="glass rounded-3xl p-7">
                  <h2 className="text-lg font-bold text-primary">Project Details</h2>
                  <dl className="mt-4 space-y-4">
                    {[
                      { icon: Building2, label: "Client", value: project.client },
                      { icon: Ruler, label: "Project size", value: project.size },
                      { icon: Timer, label: "Duration", value: project.duration },
                      { icon: Calendar, label: "Completed", value: project.year },
                    ].map((m) => (
                      <div key={m.label} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-white/60 text-primary">
                          <m.icon className="h-4 w-4" />
                        </span>
                        <div>
                          <dt className="text-xs uppercase tracking-wider text-muted-foreground">{m.label}</dt>
                          <dd className="font-semibold text-primary">{m.value}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
              </FadeUp>
              <FadeUp delay={0.08}>
                <div className="rounded-3xl bg-gradient-to-br from-primary to-[#2a5a92] p-7 text-white">
                  <p className="font-semibold">Interested in a similar project?</p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-primary transition-all hover:bg-amber-50"
                  >
                    Get a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </FadeUp>
            </aside>
          </div>

          {related.length > 0 ? (
            <div className="mt-16">
              <FadeUp>
                <h2 className="text-2xl font-bold text-primary">Related projects</h2>
              </FadeUp>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {related.map((p) => (
                  <FadeUp key={p.slug} delay={0.06}>
                    <Link href={`/projects/${p.slug}`} className="glass-card group flex items-center gap-5 p-5">
                      <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={p.image}
                          alt={p.title}
                          width={480}
                          height={270}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">{p.title}</h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</p>
                        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                          View <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  </FadeUp>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
