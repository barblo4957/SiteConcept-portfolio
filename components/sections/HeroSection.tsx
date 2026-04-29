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
    <section
      id="onas"
      className="relative flex min-h-[420px] w-full items-center overflow-hidden scroll-mt-24 bg-[linear-gradient(135deg,_#050d05_0%,_#081808_40%,_#040a04_100%)] py-24 md:py-28"
    >

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
