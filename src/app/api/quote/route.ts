import { NextResponse } from "next/server";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(10),
  website: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = quoteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, company, service, message, website } = parsed.data;

    // Honeypot: if a bot filled the hidden field, pretend success but drop it.
    if (website && website.length > 0) {
      return NextResponse.json(
        { ok: true, message: "Message sent." },
        { status: 201 }
      );
    }

    // TODO: wire into an email provider (Resend/Postmark) or a CRM webhook.
    console.log("[quote-request]", JSON.stringify({
      name, email, phone, company, service, message,
      receivedAt: new Date().toISOString(),
    }, null, 2));

    return NextResponse.json(
      {
        ok: true,
        message: "Message received. We'll respond within 24 hours.",
        reference: `Q-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body" },
      { status: 400 }
    );
  }
}
