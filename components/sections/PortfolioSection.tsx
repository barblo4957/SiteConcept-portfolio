"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ChelVisual from "./portfolio/ChelVisual";
import PianapurVisual from "./portfolio/PianapurVisual";
import TenisligaVisual from "./portfolio/TenisligaVisual";
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

const cardReveal = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" as const } },
};

function ProjectTag({ text }: { text: string }) {
  return (
    <div className="mt-3 inline-flex max-w-full rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-left text-[11px] font-semibold uppercase leading-snug tracking-widest text-lime-400 sm:text-xs">
      {text}
    </div>
  );
}

export default function PortfolioSection() {
  const t = useTranslations("portfolio");
  const isMobile = useIsMobile();

  return (
    <motion.section
      initial={isMobile ? false : "visible"}
      animate={isMobile ? undefined : "visible"}
      variants={sectionReveal}
      id="portfolio"
      className="relative w-full overflow-hidden bg-black py-24 md:py-32 scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden
          animate={isMobile ? undefined : { x: [0, 36, -20, 0], y: [0, -22, 18, 0], scale: [1, 1.06, 0.98, 1] }}
          transition={isMobile ? undefined : { duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-28 -top-28 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22)_0%,rgba(59,130,246,0.12)_35%,rgba(15,23,42,0)_70%)] blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={isMobile ? undefined : { x: [0, -26, 22, 0], y: [0, 16, -18, 0], scale: [1, 0.95, 1.04, 1] }}
          transition={isMobile ? undefined : { duration: 34, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10rem] top-1/3 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.22)_0%,rgba(79,70,229,0.12)_38%,rgba(15,23,42,0)_72%)] blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={isMobile ? undefined : { x: [0, 18, -16, 0], y: [0, -10, 14, 0], opacity: [0.16, 0.22, 0.15, 0.16] }}
          transition={isMobile ? undefined : { duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -right-20 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.18)_0%,rgba(163,230,53,0.08)_35%,rgba(15,23,42,0)_68%)] blur-3xl"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        <motion.p variants={cardReveal} className="text-sm font-bold tracking-widest text-lime-400">
          {t("eyebrow")}
        </motion.p>
        <motion.h2 variants={cardReveal} className="mt-4 max-w-3xl text-3xl font-semibold text-white md:text-4xl">
          {t("sectionTitle")}
        </motion.h2>

        {/* Tenisliga */}
        <motion.div
          variants={cardReveal}
          className="mt-14 grid grid-cols-1 items-center gap-10 md:mt-16 md:grid-cols-3 md:gap-8"
        >
          <div className="md:col-span-2">
            <div className="flex flex-wrap items-baseline gap-3">
              <h3 className="text-3xl font-semibold text-white md:text-4xl">{t("tenisliga.title")}</h3>
              <span className="rounded-md border border-lime-400/30 bg-lime-400/10 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-lime-400">
                {t("tenisliga.badge")}
              </span>
            </div>
            <ProjectTag text={t("tenisliga.tag")} />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300">{t("tenisliga.description")}</p>
            <a
              href="https://www.tenisliga.pl"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-lg border border-lime-400/40 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-200 transition-colors hover:bg-lime-400/20"
            >
              {t("cta")}
            </a>
          </div>
          <div className="md:col-span-1">
            <div className="rounded-2xl border border-lime-400/15 bg-zinc-900/40 p-5 backdrop-blur-sm md:p-6">
              <TenisligaVisual
                qrCaption={t("tenisliga.qrCaption")}
                rankingHeading={t("tenisliga.mockRankingHeading")}
                pointsUnit={t("tenisliga.mockPointsUnit")}
              />
            </div>
          </div>
        </motion.div>

        {/* Tenisliga case study */}
        <motion.div
          variants={cardReveal}
          className="mt-20 rounded-2xl border border-white/10 bg-zinc-950/60 p-6 md:p-10"
        >
          <p className="text-sm font-bold tracking-widest text-lime-400">{t("caseStudy.eyebrow")}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{t("caseStudy.title")}</h3>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{t("caseStudy.problemLabel")}</p>
              <p className="mt-3 leading-relaxed text-zinc-300">{t("caseStudy.problem")}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{t("caseStudy.solutionLabel")}</p>
              <p className="mt-3 leading-relaxed text-zinc-300">{t("caseStudy.solution")}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{t("caseStudy.effectLabel")}</p>
              <p className="mt-3 leading-relaxed text-zinc-300">{t("caseStudy.effect")}</p>
            </div>
          </div>
        </motion.div>

        {/* Pianapur */}
        <motion.div
          variants={cardReveal}
          className="mt-20 grid grid-cols-1 items-center gap-10 border-t border-white/[0.06] pt-20 md:grid-cols-3 md:gap-8"
        >
          <div className="md:col-span-2">
            <h3 className="text-3xl font-semibold text-white md:text-4xl">{t("pianapur.title")}</h3>
            <ProjectTag text={t("pianapur.tag")} />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300">{t("pianapur.description")}</p>
            <a
              href="https://pianapur.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-lg border border-lime-400/40 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-200 transition-colors hover:bg-lime-400/20"
            >
              {t("cta")}
            </a>
          </div>
          <div className="md:col-span-1">
            <PianapurVisual />
          </div>
        </motion.div>

        {/* Pianapur case study */}
        <motion.div
          variants={cardReveal}
          className="mt-20 rounded-2xl border border-white/10 bg-zinc-950/60 p-6 md:p-10"
        >
          <p className="text-sm font-bold tracking-widest text-lime-400">{t("pianapurCaseStudy.eyebrow")}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{t("pianapurCaseStudy.title")}</h3>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{t("pianapurCaseStudy.problemLabel")}</p>
              <p className="mt-3 leading-relaxed text-zinc-300">{t("pianapurCaseStudy.problem")}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{t("pianapurCaseStudy.solutionLabel")}</p>
              <p className="mt-3 leading-relaxed text-zinc-300">{t("pianapurCaseStudy.solution")}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{t("pianapurCaseStudy.effectLabel")}</p>
              <p className="mt-3 leading-relaxed text-zinc-300">{t("pianapurCaseStudy.effect")}</p>
            </div>
          </div>
        </motion.div>

        {/* Chel Proyectar */}
        <motion.div
          variants={cardReveal}
          className="mt-20 grid grid-cols-1 items-center gap-10 border-t border-white/[0.06] pt-20 md:grid-cols-3 md:gap-8"
        >
          <div className="md:col-span-2">
            <h3 className="text-3xl font-semibold text-white md:text-4xl">{t("chel.title")}</h3>
            <ProjectTag text={t("chel.tag")} />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300">{t("chel.description")}</p>
            <a
              href="https://chel-proyectar-acht.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-lg border border-lime-400/40 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-200 transition-colors hover:bg-lime-400/20"
            >
              {t("cta")}
            </a>
          </div>
          <div className="md:col-span-1">
            <ChelVisual />
          </div>
        </motion.div>

        {/* Chel Proyectar case study */}
        <motion.div
          variants={cardReveal}
          className="mt-20 rounded-2xl border border-white/10 bg-zinc-950/60 p-6 md:p-10"
        >
          <p className="text-sm font-bold tracking-widest text-lime-400">{t("chelCaseStudy.eyebrow")}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{t("chelCaseStudy.title")}</h3>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{t("chelCaseStudy.problemLabel")}</p>
              <p className="mt-3 leading-relaxed text-zinc-300">{t("chelCaseStudy.problem")}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{t("chelCaseStudy.solutionLabel")}</p>
              <p className="mt-3 leading-relaxed text-zinc-300">{t("chelCaseStudy.solution")}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{t("chelCaseStudy.effectLabel")}</p>
              <p className="mt-3 leading-relaxed text-zinc-300">{t("chelCaseStudy.effect")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
