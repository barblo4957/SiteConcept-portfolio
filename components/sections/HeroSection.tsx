"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const wordReveal = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  const t = useTranslations("hero");
  const headline = t("headline").split(" ");

  return (
    <section id="onas" className="relative w-full py-24 md:py-32 overflow-hidden scroll-mt-24">
      {/* Mesh teal → cyan → głęboki niebieski (stały odcień + lekka fala) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        {/* Bazowy radial — bez animacji = stabilny kolor „docelowy” w każdej klatce */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_75%_at_12%_8%,rgba(45,212,191,0.28)_0%,rgba(34,211,238,0.17)_38%,rgba(15,118,110,0.09)_55%,transparent_72%)]" />
        <div
          className="absolute -top-1/2 -left-[20%] h-[130%] w-[88%] rounded-full bg-teal-400/[0.24] blur-[88px] md:blur-[94px]"
          style={{ animation: "hero-mesh-drift 22s ease-in-out infinite" }}
        />
        <div
          className="absolute top-[38%] left-1/2 h-[70%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.22] blur-[84px] md:blur-[92px]"
          style={{ animation: "hero-mesh-drift 26s ease-in-out infinite 0.8s" }}
        />
        <div
          className="absolute -bottom-[28%] -right-[18%] h-[95%] w-[72%] rounded-full bg-sky-950/[0.34] blur-[104px] md:blur-[110px]"
          style={{ animation: "hero-mesh-drift 24s ease-in-out infinite 1.4s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-white text-4xl md:text-6xl font-semibold tracking-tight font-sans"
        >
          {headline.map((word, i) => (
            <motion.span
              key={i}
              variants={wordReveal}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-zinc-300 text-lg font-sans"
        >
          {t("subtitle")}
        </motion.p>
      </div>
    </section>
  );
}
