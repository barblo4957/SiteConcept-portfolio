"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSuccess(false);
    setIsError(null);

    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // Simple validation: email must contain "@", message cannot be empty.
    if (!trimmedEmail.includes("@")) {
      setIsError(t("errors.invalidEmail"));
      return;
    }
    if (!trimmedMessage) {
      setIsError(t("errors.emptyMessage"));
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: trimmedEmail, message: trimmedMessage }),
      });

      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (!res.ok || !data?.ok) {
        const serverError = data?.error ?? "";
        if (serverError.toLowerCase().includes("invalid email")) {
          setIsError(t("errors.invalidEmail"));
        } else if (serverError.toLowerCase().includes("message")) {
          setIsError(t("errors.emptyMessage"));
        } else {
          setIsError(t("errors.generic"));
        }
        return;
      }

      setIsSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setIsError(t("errors.generic"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.section
      id="kontakt"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="w-full py-24 md:py-32 bg-zinc-950 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Lewa strona — CTA tekst */}
          <div>
            <h2 className="text-4xl font-semibold text-white max-w-xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-zinc-300 max-w-md leading-relaxed">
              {t("description")}
            </p>
            <a
              href="mailto:hello@siteconcept.pl"
              className="mt-6 inline-block text-lime-400 font-medium hover:text-lime-300 transition-colors"
            >
              hello@siteconcept.pl
            </a>
          </div>

          {/* Prawa strona — formularz */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="contact-name">{t("fields.name.label")}</label>
            <input
              id="contact-name"
              type="text"
              placeholder={t("fields.name.placeholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition"
            />
            <label className="sr-only" htmlFor="contact-email">{t("fields.email.label")}</label>
            <input
              id="contact-email"
              type="email"
              placeholder={t("fields.email.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition"
            />
            <label className="sr-only" htmlFor="contact-message">{t("fields.message.label")}</label>
            <textarea
              id="contact-message"
              rows={4}
              placeholder={t("fields.message.placeholder")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition"
            />
            <button
              type="submit"
              className="mt-2 w-fit rounded-lg bg-lime-400 px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-lime-300 transition-colors"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            >
              {isSubmitting ? t("submit.sending") : t("submit.label")}
            </button>

            {isSuccess && (
              <p className="mt-2 text-sm text-lime-400 font-medium">
                {t("success")}
              </p>
            )}

            {isError && (
              <p className="mt-2 text-sm text-red-400 font-medium">
                {isError}
              </p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  );
}
