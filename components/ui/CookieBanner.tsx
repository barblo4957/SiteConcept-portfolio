"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const STORAGE_KEY = "siteconcept_cookie_accepted_v1";

export default function CookieBanner() {
  const t = useTranslations("cookies");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      queueMicrotask(() => setIsOpen(true));
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ y: 28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 28, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed left-4 bottom-4 z-[60] w-[calc(100%-2rem)] sm:w-[360px] rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4 shadow-lg shadow-black/20"
      role="dialog"
      aria-live="polite"
    >
      <p className="text-xs leading-relaxed text-zinc-200">
        {t("text")}
      </p>

      <div className="mt-3 flex gap-3">
        <button
          type="button"
          onClick={accept}
          className="flex-1 rounded-lg bg-lime-400 px-3 py-2 text-xs font-semibold text-zinc-900 hover:bg-lime-300 transition-colors"
        >
          {t("accept")}
        </button>
      </div>
    </motion.div>
  );
}

