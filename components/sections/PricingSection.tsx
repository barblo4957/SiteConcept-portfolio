"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

const FEATURES_COUNT = 4;
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

function usePricingTier(
  t: (key: string) => string,
  key: "starter" | "business" | "enterprise"
) {
  const name = t(`${key}.name`);
  const tagline = t(`${key}.tagline`);
  const description = t(`${key}.description`);
  const badge = key === "business" ? t(`${key}.badge`) : null;
  const features = Array.from({ length: FEATURES_COUNT }, (_, i) =>
    t(`${key}.feature${i + 1}`)
  ).filter(Boolean);
  return { name, tagline, description, badge, features };
}

export default function PricingSection() {
  const t = useTranslations("pricing");
  const starter = usePricingTier(t, "starter");
  const business = usePricingTier(t, "business");
  const enterprise = usePricingTier(t, "enterprise");
  const tiers = [
    { ...starter, highlighted: false },
    { ...business, highlighted: true },
    { ...enterprise, highlighted: false },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionReveal}
      id="cennik"
      className="relative w-full overflow-hidden bg-black py-24 md:py-32 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.p
          variants={cardReveal}
          className="text-lime-400 font-bold tracking-widest text-sm"
        >
          {t("eyebrow")}
        </motion.p>
        <motion.h2
          variants={cardReveal}
          className="mt-4 text-4xl text-white font-semibold max-w-4xl"
        >
          {t("headline")}
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map(({ name, tagline, description, badge, features, highlighted }) => (
            <motion.article
              key={name}
              variants={cardReveal}
              className={`rounded-2xl border p-6 transition-all duration-300 ${
                highlighted
                  ? "border-lime-400/60 bg-zinc-900/60 shadow-lg shadow-lime-500/10 hover:border-lime-400/80"
                  : "border-white/10 bg-zinc-900/50 hover:border-white/20 hover:shadow-lg hover:shadow-black/20"
              }`}
            >
              {badge && (
                <span className="inline-block rounded-full bg-lime-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime-400">
                  {badge}
                </span>
              )}
              <h3 className="mt-3 text-xl font-semibold text-white">{name}</h3>
              <p className="mt-1 text-sm font-medium text-lime-400">{tagline}</p>
              <p className="mt-4 text-zinc-300 text-sm leading-relaxed">
                {description}
              </p>
              <ul className="mt-6 space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check
                      className="h-5 w-5 shrink-0 text-lime-400"
                      aria-hidden
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.p
          variants={cardReveal}
          className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-zinc-500"
        >
          {t("saasExample")}
        </motion.p>
      </div>
    </motion.section>
  );
}
