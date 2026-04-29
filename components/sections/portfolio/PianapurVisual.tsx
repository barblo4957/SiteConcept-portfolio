"use client";

export default function PianapurVisual() {
  const stats = [
    { value: "300m²", label: "/ dzień" },
    { value: "5.0★", label: "Google" },
    { value: "100+", label: "opinii" },
  ] as const;

  const services = ["Piana PUR", "Celuloza", "Dachy skośne", "Stropy"] as const;
  const regions = [
    { name: "Śląskie", status: "główny" },
    { name: "Opolskie", status: "aktywny" },
    { name: "Małopolskie", status: "aktywny" },
  ] as const;

  return (
    <div className="mx-auto w-full max-w-[340px] rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-5 md:p-6">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-xl font-extrabold tracking-tight text-white">
          Piana<span className="text-[#f59e0b]">Pur</span>
        </h4>
        <span className="rounded-md bg-[#111] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-zinc-400">
          Izolacja pianą PUR
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {stats.map((stat) => (
          <div key={stat.value} className="rounded-lg bg-[#111] px-2 py-2.5 text-center">
            <p className="text-base font-bold leading-none text-[#a3e635]">{stat.value}</p>
            <p className="mt-1 text-[10px] font-medium leading-none text-zinc-400">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {services.map((service) => (
          <div key={service} className="flex items-center gap-2 rounded-lg bg-[#111] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#a3e635]" />
            <span className="text-[11px] font-semibold text-zinc-200">{service}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-[#a3e635] bg-[#0d1a0d] p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#a3e635]">Zasięg działania</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {regions.map((region) => (
            <div key={region.name} className="rounded-lg border border-[#a3e635] bg-[#0d1a0d] px-2 py-2">
              <p className="text-[11px] font-bold leading-tight text-zinc-100">{region.name}</p>
              <p className="mt-1 text-[10px] font-medium leading-tight text-zinc-400">{region.status}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="mt-4 w-full rounded-lg bg-[#25d366] px-3 py-2.5 text-sm font-semibold text-[#07220f] transition-opacity hover:opacity-90"
      >
        Wyślij zapytanie przez WhatsApp
      </button>

      <div className="mt-3 inline-flex rounded-full bg-[#0d1a0d] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#a3e635]">
        Darmowa wycena i dojazd
      </div>
    </div>
  );
}
