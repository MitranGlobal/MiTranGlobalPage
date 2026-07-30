import { pressLogos } from "@/lib/site";

export default function PressMarquee() {
  const items = [...pressLogos, ...pressLogos];
  return (
    <section className="relative border-y border-line bg-bg-soft/40 py-10">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.24em] text-ink-faint">
        As seen in
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10" />
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {items.map((name, i) => (
            <span
              key={i}
              className="font-display text-xl text-ink-muted/60 tracking-wide"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
