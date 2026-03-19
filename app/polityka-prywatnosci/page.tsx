"use client";

import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacy");

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 scroll-mt-24">
        <h1 className="text-4xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="mt-4 text-zinc-300 leading-relaxed">{t("intro")}</p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">{t("dataProtection.heading")}</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">{t("dataProtection.text")}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">{t("cookies.heading")}</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">{t("cookies.text")}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">{t("contactForm.heading")}</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">{t("contactForm.text")}</p>
        </section>

        <p className="mt-10 text-xs text-zinc-500">{t("lastUpdated")}</p>
      </div>
    </main>
  );
}

