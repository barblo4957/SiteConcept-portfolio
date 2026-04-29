"use client";

import { motion } from "framer-motion";
import { Search, Layout, BarChart3 } from "lucide-react";
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

export default function StrategySection() {
  const t = useTranslations("strategy");
  const isMobile = useIsMobile();
  const items = [
    {
      id: "analysis",
      icon: Search,
      title: t("method.analysis.title"),
      description: t("method.analysis.description"),
    },
    {
      id: "design",
      icon: Layout,
      title: t("method.design.title"),
      description: t("method.design.description"),
    },
    {
      id: "results",
      icon: BarChart3,
      title: t("method.results.title"),
      description: t("method.results.description"),
    },
  ];

  return (
    <motion.section
      initial={isMobile ? false : "visible"}
      animate={isMobile ? undefined : "visible"}
      variants={sectionReveal}
      id="strategia"
      className="w-full py-24 md:py-32 bg-zinc-950 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.p variants={itemReveal} className="text-lime-400 font-bold tracking-widest text-sm">
          {t("eyebrow")}
        </motion.p>
        <motion.h2
          variants={itemReveal}
          className="mt-4 text-4xl text-white font-semibold max-w-4xl"
        >
          {t("headline")}
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ id, icon: Icon, title, description }) => (
            <motion.article
              key={id}
              variants={itemReveal}
              className="rounded-2xl border border-white/10 p-6 bg-zinc-950/70"
            >
              <Icon className="h-6 w-6 text-lime-400" aria-hidden />
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-zinc-300 leading-relaxed">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
