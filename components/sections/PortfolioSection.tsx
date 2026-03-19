"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function PortfolioSection() {
  const t = useTranslations("portfolio");

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionReveal}
      id="portfolio"
      className="relative w-full overflow-hidden bg-black py-24 md:py-32 scroll-mt-24"
    >
      {/* Mesh gradient (behind content) */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden
          animate={{ x: [0, 36, -20, 0], y: [0, -22, 18, 0], scale: [1, 1.06, 0.98, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-28 -top-28 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22)_0%,rgba(59,130,246,0.12)_35%,rgba(15,23,42,0)_70%)] blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{ x: [0, -26, 22, 0], y: [0, 16, -18, 0], scale: [1, 0.95, 1.04, 1] }}
          transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10rem] top-1/3 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.22)_0%,rgba(79,70,229,0.12)_38%,rgba(15,23,42,0)_72%)] blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{ x: [0, 18, -16, 0], y: [0, -10, 14, 0], opacity: [0.16, 0.22, 0.15, 0.16] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -right-20 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.18)_0%,rgba(163,230,53,0.08)_35%,rgba(15,23,42,0)_68%)] blur-3xl"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.p variants={cardReveal} className="text-lime-400 font-bold tracking-widest text-sm">
          {t("eyebrow")}
        </motion.p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          <motion.div variants={cardReveal} className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl text-white font-semibold max-w-3xl">
              {t("title")}
            </h2>
            <div className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-lime-400">
              {t("tag")}
            </div>
            <p className="mt-4 text-zinc-300 text-base leading-relaxed max-w-2xl">
              {t("description")}
            </p>
          </motion.div>

          {/* Glass card mockup */}
          <motion.div
            variants={cardReveal}
            className="rounded-2xl border border-lime-400/20 bg-zinc-900/50 backdrop-blur-sm p-5 md:p-6 shadow-lg shadow-black/20"
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-lime-400">
                    {t("title")}
                  </span>
                  <span className="text-[10px] text-zinc-500">CAL.COM</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-2/3 bg-lime-400/50" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] text-zinc-400">Automatyzacja Rezerwacji</span>
                    <span className="text-[11px] text-lime-400 font-semibold">AUTO</span>
                  </div>
                  <div className="h-3 rounded bg-white/10" />
                  <div className="h-3 rounded bg-white/10" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="h-14 rounded-xl bg-white/5 border border-white/10" />
                  <div className="h-14 rounded-xl bg-lime-400/10 border border-lime-400/25" />
                </div>
              </div>
              <div className="hidden sm:block w-14">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-lime-400/25 to-violet-500/10 border border-white/10 blur-0" />
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400">Rezerwacje</span>
                <span className="text-xs text-lime-400 font-semibold">CAL</span>
              </div>
              <div className="mt-3 h-3 rounded bg-white/10 overflow-hidden">
                <div className="h-full w-4/5 bg-lime-400/45" />
              </div>
            </div>

            <a
              href="https://integra-automatyka.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-lime-400/40 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-200 hover:bg-lime-400/20 transition-colors"
            >
              Zobacz online
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

