import type { Metadata } from "next";
import { COMPANY } from "@/lib/site-data";
import { FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="blob left-[-8%] top-[-5%] h-[26rem] w-[26rem] bg-primary/10" />
      <div className="container-site relative max-w-3xl">
        <FadeUp>
          <h1 className="text-4xl font-extrabold tracking-tight text-primary">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="glass mt-8 space-y-6 rounded-3xl p-8 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-lg font-bold text-primary">Information we collect</h2>
              <p className="mt-2">
                When you use our contact or quote form, we collect your name, email address, phone
                number, company name and the details of your enquiry. We only use this information
                to respond to your request.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">How we use your information</h2>
              <p className="mt-2">
                Your details are used solely to answer your enquiry, prepare quotes, and provide the
                services you request. We never sell or share your personal information with third
                parties for marketing purposes.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">Data retention</h2>
              <p className="mt-2">
                We retain enquiry records for as long as needed to provide our services and meet
                legal obligations. You may request deletion of your data at any time by emailing{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-primary underline-offset-2 hover:underline">{COMPANY.email}</a>.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">Cookies</h2>
              <p className="mt-2">
                This site uses only essential cookies required for core functionality. We do not use
                third-party tracking cookies.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">Contact</h2>
              <p className="mt-2">
                Questions about this policy? Reach us at{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-primary underline-offset-2 hover:underline">{COMPANY.email}</a>.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
