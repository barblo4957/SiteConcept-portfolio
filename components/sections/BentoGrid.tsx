"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Rocket, Shield, Zap, Target, Sparkles } from "lucide-react";
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

const BENTO_KEYS = [
  { key: "main", icon: Rocket, className: "md:col-span-2 md:row-span-2" },
  { key: "data", icon: Shield, className: "" },
  { key: "interface", icon: Zap, className: "" },
  { key: "growth", icon: Target, className: "md:col-span-2" },
  { key: "ecosystem", icon: Sparkles, className: "md:col-span-3" },
] as const;

function AutonomyTradeVisualization() {
  const counterBase = 2150;
  const counterTarget = 2175;
  const motionValue = useMotionValue(counterBase);
  const formatted = useTransform(motionValue, (v) => `${Math.round(v)} PLN`);

  useEffect(() => {
    const step = 0.5; // slow increment
    const interval = 220; // ms
    let value = counterBase;
    let timeoutId: number | null = null;

    const tick = () => {
      const next = value + step;
      if (next >= counterTarget) {
        motionValue.set(counterTarget);
        // small hold at the top, then restart
        timeoutId = window.setTimeout(() => {
          value = counterBase;
          motionValue.set(counterBase);
          tick();
        }, 900);
        return;
      }

      value = next;
      motionValue.set(value);
      timeoutId = window.setTimeout(tick, interval);
    };

    tick();

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [motionValue]);

  const bars = [
    { label: "01h", value: 62 },
    { label: "02h", value: 44 },
    { label: "03h", value: 56 },
    { label: "04h", value: 38 },
    { label: "05h", value: 50 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 0.6, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-6 rounded-2xl border border-white/10 bg-zinc-900/35 backdrop-blur-md p-4 md:p-5 shadow-lg shadow-black/20"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-[8rem]">
          <div className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400">
            Autonomous Sales
          </div>
          <motion.div className="mt-2 text-lime-300/90 font-mono text-3xl sm:text-2xl md:text-3xl drop-shadow-[0_0_24px_rgba(163,230,53,0.10)]">
            {formatted}
          </motion.div>
          <div className="mt-1 text-[11px] text-zinc-500">
            night trade / agentic flow
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-end gap-2 h-16 opacity-60">
            {bars.map((bar) => (
              <div key={bar.label} className="flex-1 flex flex-col items-center justify-end">
                <div className="w-full rounded-full bg-white/5 border border-white/10 overflow-hidden">
                  <div
                    className="w-full bg-lime-400/30"
                    style={{ height: `${bar.value}%` }}
                  />
                </div>
                <div className="mt-2 text-[10px] text-zinc-600/90">{bar.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 hidden sm:flex items-center gap-3 opacity-60">
        <svg
          viewBox="0 0 320 90"
          className="w-full max-w-[18rem] sm:max-w-[20rem] text-lime-300"
          role="img"
          aria-label="Agentic flow"
        >
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(163, 230, 53, 0.9)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
            </linearGradient>
          </defs>
          <rect x="10" y="12" width="300" height="66" rx="18" fill="rgba(0,0,0,0.15)" stroke="rgba(255,255,255,0.10)" />

          {/* AI icon */}
          <g transform="translate(128,22)">
            <circle cx="32" cy="23" r="18" fill="rgba(163,230,53,0.12)" stroke="rgba(163,230,53,0.55)" strokeWidth="2" />
            <path
              d="M25 23h14M32 16v14"
              stroke="rgba(163,230,53,0.75)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M20 18c3-4 12-4 14 1"
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* labels */}
          <text x="30" y="40" fill="rgba(161,161,170,0.95)" fontSize="12" fontFamily="ui-sans-serif, system-ui">
            Revenue
          </text>
          <text x="190" y="40" fill="rgba(161,161,170,0.95)" fontSize="12" fontFamily="ui-sans-serif, system-ui">
            Clients
          </text>

          {/* arrows */}
          <path d="M86 44H128" stroke="url(#g)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M160 44H234" stroke="url(#g)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        <div className="text-[11px] text-zinc-500">
          AI processes → autonomously sells
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
  const items = BENTO_KEYS.map((def) => getBentoItem(t, def));
  const validItems = items.filter(
    (item) => typeof item.title === "string" && typeof item.description === "string" && item.title.length > 0 && item.description.length > 0
  );

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionReveal}
      id="zalety"
      className="relative w-full overflow-hidden bg-black py-24 md:py-32 scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden
          animate={{ x: [0, 40, -24, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 -top-32 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.2)_0%,rgba(59,130,246,0.12)_35%,rgba(15,23,42,0)_70%)] blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{ x: [0, -34, 22, 0], y: [0, 20, -24, 0], scale: [1, 0.94, 1.06, 1] }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-9rem] top-1/3 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.2)_0%,rgba(79,70,229,0.12)_38%,rgba(15,23,42,0)_72%)] blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{ x: [0, 18, -16, 0], y: [0, -12, 16, 0], opacity: [0.18, 0.25, 0.16, 0.18] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
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
              whileHover={{ y: -10 }}
              className={`rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-white/30 hover:shadow-lg hover:shadow-black/20 ${className}`}
            >
              <Icon className="h-7 w-7 text-lime-400" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-zinc-300 text-sm leading-relaxed">{description}</p>
              {id === "main" && <AutonomyTradeVisualization />}
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
