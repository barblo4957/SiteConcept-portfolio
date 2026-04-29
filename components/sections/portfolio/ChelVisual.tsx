"use client";

export default function ChelVisual() {
  const services = [
    { tag: "Machine application", name: "Tynk maszynowy" },
    { tag: "Premium finish", name: "Gładź premium" },
    { tag: "Complete project", name: "Remonty całościowe" },
    { tag: "Fast turnaround", name: "Naprawy i konserwacja" },
  ] as const;

  return (
    <div className="mx-auto w-full max-w-[340px] rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-5 md:p-6">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-sm font-extrabold tracking-[0.08em] text-white">CHEL PROYECTAR</h4>
        <div className="flex items-center gap-1.5">
          <span className="rounded-md bg-[#1e3a5f] px-2 py-1 text-[10px] font-bold text-[#60a5fa]">ES</span>
          <span className="rounded-md bg-[#1a2a1a] px-2 py-1 text-[10px] font-bold text-[#a3e635]">EN</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg bg-[#111] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#a3e635]" />
        <p className="text-[11px] font-medium text-zinc-300">Strona dwujęzyczna — Español / English</p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {services.map((service) => (
          <div key={service.tag} className="rounded-lg bg-[#111] px-3 py-2">
            <p className="text-[10px] font-medium text-zinc-500">{service.tag}</p>
            <p className="mt-1 text-[11px] font-semibold text-zinc-100">{service.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg bg-[#111] p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">REQUEST A FREE QUOTE</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="rounded-md border border-white/10 bg-black/20 px-2 py-1.5 text-[10px] text-zinc-400">Name</div>
          <div className="rounded-md border border-white/10 bg-black/20 px-2 py-1.5 text-[10px] text-zinc-400">Phone</div>
        </div>
        <div className="mt-2 rounded-md border border-white/10 bg-black/20 px-2 py-1.5 text-[10px] text-zinc-400">
          Type of work
        </div>
        <button
          type="button"
          className="mt-3 w-full rounded-md bg-[#25d366] px-3 py-2 text-xs font-semibold text-[#07220f] transition-opacity hover:opacity-90"
        >
          Send via WhatsApp
        </button>
      </div>
    </div>
  );
}
