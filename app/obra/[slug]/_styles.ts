export const styles = {
  shell:
    "min-h-dvh px-5 py-14 text-foreground relative overflow-hidden",
  watermark:
    "pointer-events-none select-none fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 text-[18vw] font-black tracking-tight text-white/5",
  container: "mx-auto max-w-3xl relative z-10",
  header: "border-b border-white/10 pb-8 mb-10",
  eyebrow:
    "text-[12px] font-semibold tracking-[0.3em] uppercase text-[color:var(--bunker-cta)]",
  title:
    "mt-3 text-5xl md:text-6xl font-black tracking-[-0.06em] leading-[0.9]",
  author: "mt-3 text-base text-white/60",
  section: "space-y-3 text-[18px] leading-relaxed text-white/85",
  sectionLabel:
    "text-[10px] tracking-[0.2em] uppercase text-white/45",
  statusCard:
    "mt-12 rounded-xl border border-white/10 bg-white/5 px-6 py-5",
  footer:
    "mt-20 text-center text-[10px] tracking-[0.2em] uppercase text-white/30",
  empty:
    "min-h-dvh grid place-items-center bg-background text-foreground",
  emptyText: "text-sm text-white/50",
} as const;

