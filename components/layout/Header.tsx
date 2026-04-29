"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocaleSwitcher } from "../providers/IntlProvider";
import { useIsMobile } from "../../src/lib/useIsMobile";

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="group relative text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300 py-1"
    >
      {label}
      <span className="absolute bottom-0 left-1/2 h-px w-0 bg-white transition-all duration-300 -translate-x-1/2 group-hover:w-full" />
    </a>
  );
}

function MagneticButton({ label }: { label: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { type: "spring" as const, stiffness: 150, damping: 15 };
  const xSpring = useSpring(x, spring);
  const ySpring = useSpring(y, spring);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = 50;
      if (dist < radius) {
        const force = (radius - dist) / radius;
        x.set(dx * force * 0.3);
        y.set(dy * force * 0.3);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleLeave = () => {
      x.set(0);
      y.set(0);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y]);

  return (
    <motion.a
      ref={ref}
      href="#kontakt"
      style={{ x: xSpring, y: ySpring }}
      className="relative rounded-lg border border-lime-400/50 px-4 py-2 text-sm font-medium text-white hover:bg-lime-400/10 transition-colors duration-300 [animation:glow-pulse_2.5s_ease-in-out_infinite]"
    >
      {label}
    </motion.a>
  );
}

export default function Header() {
  const t = useTranslations("nav");
  const { locale, setLocale } = useLocaleSwitcher();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: t("services"), href: "#cennik" },
    { label: t("strategy"), href: "#strategia" },
    { label: t("portfolio"), href: "#portfolio" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const menuStagger = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * i + 0.15, duration: 0.35, ease: "easeOut" as const },
    }),
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full py-6 backdrop-blur-md bg-black/50 transition-all duration-300 ${
          isScrolled ? "border-b border-white/5" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <nav className="flex items-center justify-between">
            {/* Logo — lewa */}
            <Link
              href="/"
              className="group relative text-2xl font-semibold tracking-tight text-white py-1 z-10"
            >
              SiteConcept
              <span className="absolute bottom-0 left-1/2 h-px w-0 bg-white transition-all duration-300 -translate-x-1/2 group-hover:w-full" />
            </Link>

            {/* Środek — linki (desktop) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink key={link.href} label={link.label} href={link.href} />
              ))}
            </div>

            {/* Prawa — Kontakt (desktop) + Hamburger (mobile) */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center text-xs font-medium uppercase tracking-widest text-zinc-400">
                  <button
                    type="button"
                    onClick={() => setLocale("pl")}
                    className={`transition-colors ${locale === "pl" ? "text-white" : "hover:text-white"}`}
                    aria-label="Przełącz na język polski"
                  >
                    PL
                  </button>
                  <span className="mx-2 text-zinc-600">|</span>
                  <button
                    type="button"
                    onClick={() => setLocale("en")}
                    className={`transition-colors ${locale === "en" ? "text-white" : "hover:text-white"}`}
                    aria-label="Switch to English"
                  >
                    EN
                  </button>
                </div>
                <MagneticButton label={t("contact")} />
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                className="relative flex md:hidden h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 text-white"
                aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
                aria-expanded={menuOpen}
              >
                {isMobile ? (
                  <>
                    <span className={`h-0.5 w-5 origin-center bg-current ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
                    <span className={`h-0.5 w-5 bg-current ${menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}`} />
                    <span className={`h-0.5 w-5 origin-center bg-current ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
                  </>
                ) : (
                  <>
                    <motion.span
                      animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="h-0.5 w-5 origin-center bg-current"
                    />
                    <motion.span
                      animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                      className="h-0.5 w-5 bg-current"
                    />
                    <motion.span
                      animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="h-0.5 w-5 origin-center bg-current"
                    />
                  </>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Pełnoekranowe menu mobilne */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} ${isMobile ? "" : "transition-opacity duration-200"}`}
      >
        <div
          className="absolute inset-0 backdrop-blur-xl bg-black/60"
          onClick={() => setMenuOpen(false)}
          aria-hidden
        />
        <div className="relative flex min-h-full flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link, i) => (
            isMobile ? (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <motion.a
                key={link.href}
                href={link.href}
                custom={i}
                initial="hidden"
                animate={menuOpen ? "visible" : "hidden"}
                variants={menuStagger}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
              >
                {link.label}
              </motion.a>
            )
          ))}
          {isMobile ? (
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg border border-lime-400/50 px-5 py-2.5 text-sm font-medium text-white"
            >
              {t("contact")}
            </a>
          ) : (
            <motion.a
              href="#kontakt"
              custom={navLinks.length}
              initial="hidden"
              animate={menuOpen ? "visible" : "hidden"}
              variants={menuStagger}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg border border-lime-400/50 px-5 py-2.5 text-sm font-medium text-white"
            >
              {t("contact")}
            </motion.a>
          )}

          {isMobile ? (
            <div className="flex items-center text-xs font-medium uppercase tracking-widest text-zinc-400">
              <button
                type="button"
                onClick={() => {
                  setLocale("pl");
                  setMenuOpen(false);
                }}
                className={`transition-colors ${locale === "pl" ? "text-white" : "hover:text-white"}`}
                aria-label="Przełącz na język polski"
              >
                PL
              </button>
              <span className="mx-2 text-zinc-600">|</span>
              <button
                type="button"
                onClick={() => {
                  setLocale("en");
                  setMenuOpen(false);
                }}
                className={`transition-colors ${locale === "en" ? "text-white" : "hover:text-white"}`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
          ) : (
            <motion.div
              custom={navLinks.length + 1}
              initial="hidden"
              animate={menuOpen ? "visible" : "hidden"}
              variants={menuStagger}
              className="flex items-center text-xs font-medium uppercase tracking-widest text-zinc-400"
            >
            <button
              type="button"
              onClick={() => {
                setLocale("pl");
                setMenuOpen(false);
              }}
              className={`transition-colors ${locale === "pl" ? "text-white" : "hover:text-white"}`}
              aria-label="Przełącz na język polski"
            >
              PL
            </button>
            <span className="mx-2 text-zinc-600">|</span>
            <button
              type="button"
              onClick={() => {
                setLocale("en");
                setMenuOpen(false);
              }}
              className={`transition-colors ${locale === "en" ? "text-white" : "hover:text-white"}`}
              aria-label="Switch to English"
            >
              EN
            </button>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
