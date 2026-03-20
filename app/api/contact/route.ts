import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Wszystkie pola są wymagane." }, { status: 400 });
    }

    // 1. Powiadomienie do Ciebie
    await resend.emails.send({
      from: "Formularz SiteConcept <noreply@siteconcept.pl>",
      to: process.env.CONTACT_EMAIL!,
      subject: `📩 Nowa wiadomość od ${name}`,
      html: `
        <h2>Nowa wiadomość z formularza</h2>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // 2. Autoresponder do klienta
    await resend.emails.send({
      from: "Bartek | SiteConcept <noreply@siteconcept.pl>",
      to: email,
      subject: "Dziękuję za wiadomość — odezwę się wkrótce!",
      html: `
        <h2>Cześć ${name}! 👋</h2>
        <p>Dziękuję za kontakt. Otrzymałem Twoją wiadomość i odezwę się
        najczęściej w ciągu <strong>24 godzin</strong>.</p>
        <p>Jeśli sprawa jest pilna, możesz napisać bezpośrednio na
        <a href="mailto:hello@siteconcept.pl">hello@siteconcept.pl</a>.</p>
        <br>
        <p>Pozdrawiam,<br>
        <strong>Bartek</strong><br>
        SiteConcept — Nowoczesne strony internetowe<br>
        <a href="https://siteconcept.pl">siteconcept.pl</a></p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Błąd serwera. Spróbuj ponownie później." }, { status: 500 });
  }
}

