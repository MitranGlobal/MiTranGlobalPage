/* eslint-disable @next/next/no-img-element */
import { pressLogos } from "@/lib/site";

export default function PressMarquee() {
  const items = [...pressLogos, ...pressLogos];
  return (
    <section className="relative border-y border-line bg-bg-soft/40 py-10">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.24em] text-ink-faint">
        As seen in
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap">
          {items.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.name}
              className="h-14 w-auto opacity-80 transition-opacity duration-300 hover:opacity-100 md:h-16"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
