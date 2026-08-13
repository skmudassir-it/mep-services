import type { Metadata } from "next";
import { COMPANY } from "@/lib/site-data";
import { FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="blob right-[-8%] top-[-5%] h-[26rem] w-[26rem] bg-accent/10" />
      <div className="container-site relative max-w-3xl">
        <FadeUp>
          <h1 className="text-4xl font-extrabold tracking-tight text-primary">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="glass mt-8 space-y-6 rounded-3xl p-8 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-lg font-bold text-primary">Agreement</h2>
              <p className="mt-2">
                By engaging {COMPANY.name} for design, engineering, manufacturing or service work,
                you agree to the terms outlined here and in your individual project contract.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">Quotes & proposals</h2>
              <p className="mt-2">
                All quotes are valid for 30 days unless stated otherwise. Final scope, deliverables
                and timelines are confirmed in a written proposal before work begins.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">Intellectual property</h2>
              <p className="mt-2">
                Deliverables (models, drawings, reports) remain the property of the client upon full
                payment. Our standard tools, methods and internal processes remain the property of
                {COMPANY.name}.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">Warranty & liability</h2>
              <p className="mt-2">
                Our work is performed in accordance with applicable codes and professional
                standards. Liability is limited to the fees paid for the specific service provided.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">Contact</h2>
              <p className="mt-2">
                Questions about these terms? Email{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-primary underline-offset-2 hover:underline">{COMPANY.email}</a>.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
