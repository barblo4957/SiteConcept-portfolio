"use client";

import { motion } from "framer-motion";
import { Monitor, Zap, Box } from "lucide-react";
import { useTranslations } from "next-intl";
import { useIsMobile } from "../../src/lib/useIsMobile";

const sectionReveal = {
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut" as const,
      staggerChildren: 0.04,
    },
  },
};

const itemReveal = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" as const } },
};

export default function ServicesSection() {
  const t = useTranslations("servicesSection");
  const isMobile = useIsMobile();

  const items = [
    {
      id: "websites",
      icon: Monitor,
      title: t("cards.websites.title"),
      description: t("cards.websites.description"),
    },
    {
      id: "integrations",
      icon: Zap,
      title: t("cards.integrations.title"),
      description: t("cards.integrations.description"),
    },
    {
      id: "products",
      icon: Box,
      title: t("cards.products.title"),
      description: t("cards.products.description"),
    },
  ];

  return (
    <motion.section
      initial={isMobile ? false : "visible"}
      animate={isMobile ? undefined : "visible"}
      variants={sectionReveal}
      id="uslugi"
      className="w-full bg-zinc-950 py-24 md:py-32 scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <motion.p variants={itemReveal} className="text-sm font-bold tracking-widest text-lime-400">
          {t("eyebrow")}
        </motion.p>
        <motion.h2 variants={itemReveal} className="mt-4 max-w-4xl text-4xl font-semibold text-white">
          {t("headline")}
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map(({ id, icon: Icon, title, description }) => (
            <motion.article key={id} variants={itemReveal} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6">
              <Icon className="h-6 w-6 text-lime-400" aria-hidden />
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-300">{description}</p>
            </motion.article>
          ))}
        </div>

        <motion.a
          variants={itemReveal}
          href="#cennik"
          className="mt-10 inline-flex items-center justify-center rounded-lg border border-lime-400/40 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-200 transition-colors hover:bg-lime-400/20"
        >
          {t("cta")}
        </motion.a>
      </div>
    </motion.section>
  );
}
