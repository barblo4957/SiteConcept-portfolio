import { NextResponse } from "next/server";

type SendPayload = {
  name?: string;
  email: string;
  message: string;
};

export async function POST(req: Request) {
  let payload: SendPayload;

  try {
    payload = (await req.json()) as SendPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const contactEmail = process.env.CONTACT_EMAIL;
  if (!contactEmail) {
    return NextResponse.json({ ok: false, error: "CONTACT_EMAIL is not configured" }, { status: 500 });
  }

  const email = (payload?.email ?? "").trim();
  const message = (payload?.message ?? "").trim();

  // Basic validation (client-side also validates; server-side prevents bad requests).
  if (!email.includes("@")) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  if (!message) {
    return NextResponse.json({ ok: false, error: "Message is required" }, { status: 400 });
  }

  // Ready for Resend integration:
  // - Install `resend` and add `RESEND_API_KEY` to .env
  // - Replace this mock with the actual Resend call.
  //
  // Example (pseudo):
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "onboarding@resend.dev",
  //   to: contactEmail,
  //   subject: `New inquiry from ${email}`,
  //   html: `<p>${message}</p>`,
  // });

  // Mock successful send for now.
  console.log("[send] received inquiry", { email, messageLength: message.length, contactEmail });

  return NextResponse.json({ ok: true });
}

