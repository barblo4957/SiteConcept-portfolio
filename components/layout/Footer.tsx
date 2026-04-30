"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const handleBrandClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-zinc-950 border-t border-white/5 py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex-1 text-center md:text-left">
            <Link
              href="/"
              scroll
              onClick={handleBrandClick}
              className="text-lg font-semibold tracking-tight text-zinc-100 hover:text-zinc-200 transition-colors"
            >
              SiteConcept
            </Link>

            <p className="mt-3 text-xs text-zinc-400 tracking-widest uppercase">
              Building the future with AI
            </p>
          </div>

          <nav className="flex-1 w-full flex flex-col gap-4 items-center md:items-start md:justify-start">
            <div className="flex w-full justify-center md:justify-start">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <a
                  href="#cennik"
                  className="text-xs font-medium uppercase tracking-widest text-zinc-500 hover:text-zinc-100 transition-colors"
                >
                {t("links.services")}
                </a>
                <a
                  href="#strategia"
                  className="text-xs font-medium uppercase tracking-widest text-zinc-500 hover:text-zinc-100 transition-colors"
                >
                {t("links.strategy")}
                </a>
                <a
                  href="#portfolio"
                  className="text-xs font-medium uppercase tracking-widest text-zinc-500 hover:text-zinc-100 transition-colors"
                >
                {t("links.portfolio")}
                </a>
                <a
                  href="#kontakt"
                  className="text-xs font-medium uppercase tracking-widest text-zinc-500 hover:text-zinc-100 transition-colors"
                >
                {t("links.contact")}
                </a>
              <Link
                href="/polityka-prywatnosci"
                className="text-xs font-medium uppercase tracking-widest text-zinc-500 hover:text-zinc-100 transition-colors"
              >
                {t("links.privacyPolicy")}
              </Link>
              </div>
            </div>
          </nav>

          <div className="flex-1 w-full flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-zinc-500">{t("copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
