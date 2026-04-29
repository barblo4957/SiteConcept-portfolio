"use client";

import { QrCode } from "lucide-react";

type TenisligaVisualProps = {
  qrCaption: string;
  rankingHeading: string;
  pointsUnit: string;
};

const RANKING = [
  { place: 1, name: "Kowalski J.", pts: 24, highlight: true },
  { place: 2, name: "Nowak P.", pts: 21, highlight: false },
  { place: 3, name: "Wiśniewski T.", pts: 18, highlight: false },
  { place: 4, name: "Zając M.", pts: 15, highlight: false },
] as const;

export default function TenisligaVisual({ qrCaption, rankingHeading, pointsUnit }: TenisligaVisualProps) {
  return (
    <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:items-end sm:justify-end">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-[radial-gradient(circle_at_60%_80%,rgba(190,242,100,0.14)_0%,rgba(15,23,42,0)_55%)] blur-2xl"
      />

      <div className="relative z-10 w-[min(100%,240px)] shrink-0 rounded-[2.25rem] border border-zinc-600/80 bg-zinc-900/90 p-2 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.65)]">
        <div className="overflow-hidden rounded-[1.85rem] bg-[#070707] ring-1 ring-white/[0.08]">
          <div className="flex items-center justify-between px-4 pb-2 pt-3">
            <span className="text-[11px] font-extrabold tracking-[0.12em] text-white">
              TENIS<span className="text-lime-400">LIGA</span>
            </span>
            <span className="text-[10px] font-semibold tabular-nums text-lime-400">● LIVE</span>
          </div>
          <div className="border-t border-white/[0.06] px-3 pb-4 pt-2">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{rankingHeading}</p>
            <ul className="mt-3 space-y-2.5">
              {RANKING.map((row) => (
                <li
                  key={row.place}
                  className="flex items-center justify-between gap-2 text-[11px] leading-none"
                >
                  <span className="flex min-w-0 items-center gap-2 text-zinc-200">
                    <span className="w-4 shrink-0 text-center font-mono text-[10px] text-zinc-500">
                      {row.place}
                    </span>
                    <span className="truncate font-medium">{row.name}</span>
                  </span>
                  <span
                    className={`shrink-0 font-semibold tabular-nums ${
                      row.highlight ? "text-lime-400" : "text-zinc-400"
                    }`}
                  >
                    {row.pts} {pointsUnit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex shrink-0 flex-col items-center">
        <div className="flex h-[5.5rem] w-[5.5rem] flex-col items-center justify-center rounded-2xl border border-lime-400/45 bg-zinc-950/90 shadow-[0_0_28px_rgba(190,242,100,0.28),inset_0_1px_0_rgba(255,255,255,0.06)]">
          <QrCode className="h-9 w-9 text-lime-400" strokeWidth={1.75} aria-hidden />
          <span className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-lime-400/90">
            QR
          </span>
        </div>
        <p className="mt-2 max-w-[9rem] text-center text-[10px] leading-snug text-zinc-500">{qrCaption}</p>
      </div>
    </div>
  );
}
