"use client";

type IntegraVisualProps = {
  portfolioLabel: string;
  automationLabel: string;
  reservationsLabel: string;
  ctaHref: string;
  ctaLabel: string;
};

export default function IntegraVisual({
  portfolioLabel,
  automationLabel,
  reservationsLabel,
  ctaHref,
  ctaLabel,
}: IntegraVisualProps) {
  return (
    <div className="rounded-2xl border border-lime-400/20 bg-zinc-900/50 p-5 shadow-lg shadow-black/20 backdrop-blur-sm md:p-6">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-lime-400">
              {portfolioLabel}
            </span>
            <span className="text-[10px] text-zinc-500">CAL.COM</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-2/3 bg-lime-400/50" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] text-zinc-400">{automationLabel}</span>
              <span className="text-[11px] font-semibold text-lime-400">AUTO</span>
            </div>
            <div className="h-3 rounded bg-white/10" />
            <div className="h-3 rounded bg-white/10" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="h-14 rounded-xl border border-white/10 bg-white/5" />
            <div className="h-14 rounded-xl border border-lime-400/25 bg-lime-400/10" />
          </div>
        </div>
        <div className="hidden w-14 shrink-0 sm:block">
          <div className="h-14 w-14 rounded-2xl border border-white/10 bg-gradient-to-br from-lime-400/25 to-violet-500/10" />
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-zinc-400">{reservationsLabel}</span>
          <span className="text-xs font-semibold text-lime-400">CAL</span>
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded bg-white/10">
          <div className="h-full w-4/5 bg-lime-400/45" />
        </div>
      </div>

      <a
        href={ctaHref}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-lime-400/40 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-200 transition-colors hover:bg-lime-400/20"
      >
        {ctaLabel}
      </a>
    </div>
  );
}
