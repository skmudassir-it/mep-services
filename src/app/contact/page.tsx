"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send, Loader2, Zap } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().min(10, "Please tell us a bit more (at least 10 characters)"),
  // honeypot — bots fill this; humans never see it
  website: z.string().optional(),
});

type QuoteForm = z.infer<typeof quoteSchema>;

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<QuoteForm>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { service: "" },
  });

  async function onSubmit(data: QuoteForm) {
    // honeypot check — silently drop bot submissions
    if (data.website && data.website.length > 0) {
      toast.success("Message sent!");
      reset();
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Message sent!", {
        description: "We'll respond within 24 hours.",
      });
      reset({ name: "", email: "", phone: "", company: "", service: "", message: "", website: "" });
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again, or email us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-12">
        <div className="blob right-[-10%] top-[-8%] h-[30rem] w-[30rem] bg-accent/15" />
        <div className="container-site relative text-center">
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
              Let&apos;s talk about your project
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Get a free, no-obligation quote — we respond within 24 hours.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-pad !pt-6">
        <div className="container-site grid gap-10 lg:grid-cols-5">
          {/* Info column */}
          <Stagger className="space-y-5 lg:col-span-2">
            {[
              { icon: Mail, title: "Email us", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
              { icon: Phone, title: "Call us", value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/[^+\d]/g, "")}` },
              { icon: MapPin, title: "Visit us", value: COMPANY.address },
              { icon: Clock, title: "Working hours", value: COMPANY.hours },
            ].map((c) => (
              <StaggerItem key={c.title}>
                <a
                  href={c.href ?? "#"}
                  className={`glass-card flex items-start gap-4 p-6 ${c.href ? "" : "cursor-default"}`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#2a5a92] text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-semibold text-primary">{c.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{c.value}</p>
                  </div>
                </a>
              </StaggerItem>
            ))}
            <StaggerItem>
              <div className="glass rounded-3xl p-6">
                <h2 className="flex items-center gap-2 font-semibold text-primary">
                  <Zap className="h-4 w-4 text-accent" /> Quick response guarantee
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  We reply to every enquiry within 24 hours — and our emergency line is staffed
                  24/7 for existing clients.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="overflow-hidden rounded-3xl border border-white/60 shadow-[0_8px_32px_rgba(30,58,95,0.08)]">
                <iframe
                  title="AMS BIM Services office location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-95.42%2C29.68%2C-95.30%2C29.78&layer=mapnik&marker=29.73%2C-95.36"
                  className="h-64 w-full border-0"
                  loading="lazy"
                />
              </div>
            </StaggerItem>
          </Stagger>

          {/* Form */}
          <FadeUp className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-3xl p-8" noValidate>
              {/* honeypot — hidden from humans */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <Label htmlFor="website">Website</Label>
                <Input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name *</Label>
                  <Input id="name" placeholder="John Smith" {...register("name")} aria-invalid={!!errors.name} />
                  {errors.name ? <p className="text-xs text-destructive">{errors.name.message}</p> : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" {...register("email")} aria-invalid={!!errors.email} />
                  {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" {...register("phone")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Acme Properties" {...register("company")} />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="service">Service interest *</Label>
                  <Select
                    onValueChange={(value: string | null) => setValue("service", value ?? "", { shouldValidate: true })}
                  >
                    <SelectTrigger id="service" className="w-full">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
                        <SelectItem key={s.slug} value={s.slug}>
                          {s.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="other">Other / Not sure</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service ? <p className="text-xs text-destructive">{errors.service.message}</p> : null}
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project — building type, size, timeline, and what you need…"
                    {...register("message")}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message ? <p className="text-xs text-destructive">{errors.message.message}</p> : null}
                </div>
              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="btn-gradient mt-7 w-full !rounded-xl !text-base"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send message
                  </>
                )}
              </Button>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                We respect your privacy — your details are only used to respond to your enquiry.
              </p>
            </form>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
