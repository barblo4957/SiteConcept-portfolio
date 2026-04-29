"use client";

import { motion } from "framer-motion";
import { Rocket, Shield, Zap, Target, Sparkles } from "lucide-react";
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

const cardReveal = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" as const } },
};

const BENTO_KEYS = [
  { key: "main", icon: Rocket, className: "md:col-span-2 md:row-span-2" },
  { key: "data", icon: Shield, className: "" },
  { key: "interface", icon: Zap, className: "" },
  { key: "growth", icon: Target, className: "md:col-span-2" },
  { key: "ecosystem", icon: Sparkles, className: "md:col-span-3" },
] as const;

function AutonomyTradeVisualization({ isMobile }: { isMobile: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={isMobile ? undefined : { opacity: 0.6, y: 0 }}
      transition={isMobile ? undefined : { duration: 0.25, ease: "easeOut" }}
      className="mt-6 rounded-[10px] border border-[#1a1a1a] bg-[#0d0d0d] p-4 shadow-lg shadow-black/20"
    >
      <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs">
        <span className="font-medium text-[#a3e635]">●</span>
        <span className="font-semibold text-white">Odwiedzający</span>
        <span className="text-zinc-500">→</span>
        <span className="font-medium text-[#a3e635]">●</span>
        <span className="font-semibold text-white">Formularz</span>
        <span className="text-zinc-500">→</span>
        <span className="font-medium text-[#a3e635]">●</span>
        <span className="font-semibold text-white">Lead u klienta</span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs">
        <span className="font-medium text-zinc-500">○</span>
        <span className="text-zinc-400">Kanał dostawy</span>
        <span className="text-zinc-500">→</span>
        <span className="rounded-md bg-[#25d366]/20 px-2 py-1 font-semibold text-[#25d366]">WhatsApp</span>
        <span className="rounded-md bg-[#1a1a1a] px-2 py-1 font-semibold text-zinc-400">E-mail</span>
        <span className="rounded-md bg-[#1a1a1a] px-2 py-1 font-semibold text-zinc-400">CRM</span>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="rounded-lg bg-[#1a1a1a] px-3 py-2">
          <p className="text-sm font-bold text-[#a3e635] sm:text-base">Natychmiastowy</p>
          <p className="mt-1 text-[10px] text-zinc-500 sm:text-[11px]">czas dostarczenia</p>
        </div>
        <div className="rounded-lg bg-[#1a1a1a] px-3 py-2">
          <p className="text-sm font-bold text-[#a3e635] sm:text-base">Zero pośredników</p>
          <p className="mt-1 text-[10px] text-zinc-500 sm:text-[11px]">prosto do klienta</p>
        </div>
      </div>
    </motion.div>
  );
}

function getBentoItem(
  t: (key: string) => string,
  { key, icon: Icon, className }: (typeof BENTO_KEYS)[number]
) {
  const title = t(`${key}_title`);
  const description = t(`${key}_description`);
  return { id: key, icon: Icon, title, description, className };
}

export default function BentoGrid() {
  const t = useTranslations("bento");
  const isMobile = useIsMobile();
  const items = BENTO_KEYS.map((def) => getBentoItem(t, def));
  const validItems = items.filter(
    (item) => typeof item.title === "string" && typeof item.description === "string" && item.title.length > 0 && item.description.length > 0
  );

  return (
    <motion.section
      initial={isMobile ? false : "visible"}
      animate={isMobile ? undefined : "visible"}
      variants={sectionReveal}
      id="zalety"
      className="relative w-full overflow-hidden bg-black py-24 md:py-32 scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <motion.div
          aria-hidden
          animate={isMobile ? undefined : { x: [0, 40, -24, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={isMobile ? undefined : { duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 -top-32 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.2)_0%,rgba(59,130,246,0.12)_35%,rgba(15,23,42,0)_70%)] blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={isMobile ? undefined : { x: [0, -34, 22, 0], y: [0, 20, -24, 0], scale: [1, 0.94, 1.06, 1] }}
          transition={isMobile ? undefined : { duration: 32, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-9rem] top-1/3 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.2)_0%,rgba(79,70,229,0.12)_38%,rgba(15,23,42,0)_72%)] blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={isMobile ? undefined : { x: [0, 18, -16, 0], y: [0, -12, 16, 0], opacity: [0.18, 0.25, 0.16, 0.18] }}
          transition={isMobile ? undefined : { duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -right-20 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.18)_0%,rgba(163,230,53,0.08)_35%,rgba(15,23,42,0)_68%)] blur-3xl"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.p variants={cardReveal} className="text-lime-400 font-bold tracking-widest text-sm">
          {t("eyebrow")}
        </motion.p>
        <motion.h2
          variants={cardReveal}
          className="mt-4 text-4xl text-white font-semibold max-w-4xl"
        >
          {t("headline")}
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 md:auto-rows-[minmax(140px,auto)]">
          {validItems.map(({ id, icon: Icon, title, description, className }) => (
            <motion.article
              key={id}
              variants={cardReveal}
              whileHover={isMobile ? undefined : { y: -10 }}
              className={`rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-white/30 hover:shadow-lg hover:shadow-black/20 ${className}`}
            >
              <Icon className="h-7 w-7 text-lime-400" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-zinc-300 text-sm leading-relaxed">{description}</p>
              {id === "main" && <AutonomyTradeVisualization isMobile={isMobile} />}
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
