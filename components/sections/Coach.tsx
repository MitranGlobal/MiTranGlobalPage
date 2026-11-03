import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { coach, site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Shared "Meet the Coach" section — used on Home, Platinum, Free Training and
 * Success Stories. Course pages render the same `coach` data in their own
 * page styles. All content comes from `coach` in lib/site.ts.
 */
export default function Coach({
  className,
  ctaLabel = "Book a call →",
}: {
  className?: string;
  ctaLabel?: string;
}) {
  const [first, ...rest] = coach.name.split(" ");

  return (
    <section id="coach" className={cn("section border-t border-line", className)}>
      <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
        {/* Story */}
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow">Meet the Coach</p>
          <h2 className="mt-5 text-display-2 font-display">
            {first} <span className="gold-text italic">{rest.join(" ")}</span>
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.16em] text-gold md:text-base">
            {coach.designation}
          </p>

          <ul className="mt-8 space-y-4">
            {coach.story.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-ink-muted leading-relaxed md:text-lg"
              >
                <span aria-hidden className="mt-[0.1em] shrink-0 text-gold">
                  ✦
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <a
            href={site.urls.booking}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-10 px-8 py-4 text-base"
          >
            {ctaLabel}
          </a>
        </Reveal>

        {/* Photo card */}
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gold/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-line bg-black shadow-card">
              <Image
                src={coach.photo}
                alt={coach.photoAlt}
                width={778}
                height={778}
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
                className="h-auto w-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-6 pb-6 pt-16">
                <p className="font-display text-2xl">{coach.name}</p>
                <p className="mt-1 text-sm text-ink-muted">{coach.tagline}</p>
              </div>
            </div>

            <div className="relative mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {coach.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-line bg-white/[0.02] px-3 py-4 text-center"
                >
                  <div className="font-display text-2xl gold-text">{h.value}</div>
                  <div className="mt-1 text-[10.5px] uppercase leading-tight tracking-widest text-ink-faint">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>

            <ul className="relative mt-4 grid gap-2">
              {coach.awards.map((a) => (
                <li
                  key={a.t}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-white/[0.02] px-4 py-3"
                >
                  <span aria-hidden className="text-lg leading-6">{a.icon}</span>
                  <span className="text-sm leading-6">
                    <span className="text-ink">
                      {a.t}
                      {a.year !== "★" && ` ${a.year}`}
                    </span>
                    <span className="block text-xs text-ink-faint">{a.s}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
