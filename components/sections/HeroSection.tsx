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
      {/* Animowany Mesh Gradient — ciemne fiolety/błękity/limonka */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        <div
          className="absolute -top-1/2 -left-1/4 h-[120%] w-[80%] rounded-full bg-violet-600/20 blur-[100px]"
          style={{ animation: "mesh-wave 18s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-1/3 -right-1/4 h-[100%] w-[70%] rounded-full bg-blue-900/25 blur-[120px]"
          style={{ animation: "mesh-wave 22s ease-in-out infinite 1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-[60%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-500/10 blur-[80px]"
          style={{ animation: "mesh-wave 20s ease-in-out infinite 0.5s" }}
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
