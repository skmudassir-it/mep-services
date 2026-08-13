import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { FadeUp, SectionHeading } from "@/components/motion";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected HVAC, MEP and duct manufacturing projects delivered by MEP Services — commercial, healthcare, manufacturing and institutional.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-12">
        <div className="blob right-[-8%] top-[-10%] h-[28rem] w-[28rem] bg-primary/12" />
        <div className="container-site relative">
          <SectionHeading
            eyebrow="Portfolio"
            title="Projects we're proud of"
            subtitle="Filter by sector — every project below was delivered coordinated, documented and on time."
          />
        </div>
      </section>

      <section className="section-pad !pt-4">
        <div className="container-site">
          <PortfolioGrid />
        </div>
      </section>

      <section className="section-pad !pt-10">
        <div className="container-site">
          <FadeUp>
            <div className="glass rounded-3xl p-10 text-center">
              <h2 className="text-2xl font-bold text-primary">Interested in a similar project?</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Tell us about your building and we'll show you what coordinated MEP engineering looks like.
              </p>
              <Link href="/contact" className="btn-gradient mt-6">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
