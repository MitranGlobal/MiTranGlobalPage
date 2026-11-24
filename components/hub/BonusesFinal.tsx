import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { bonuses } from "@/lib/hub";
import { cn } from "@/lib/cn";

/**
 * Shared final section for Positivity Hub and Platinum: "Programmes built for
 * real transformation" (moved from Home) as the three bonus courses, linked to
 * their course pages, then bonuses 4 and 5 — all five clearly numbered.
 */
export default function BonusesFinal({ platinum = false }: { platinum?: boolean }) {
  const courses = bonuses.filter((b) => b.kind === "course");
  const extras = bonuses.filter((b) => b.kind !== "course");

  return (
    <section id="bonuses" className="section border-t border-line">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">
            {platinum ? "Included with Platinum" : "Included with the Positivity Hub"}
          </p>
          <h2 className="mt-5 text-display-2 font-display">
            Programmes built for{" "}
            <span className="gold-text italic">real transformation</span>
          </h2>
          <p className="mt-5 text-ink-muted leading-relaxed md:text-lg">
            On top of the one-to-one sessions, your child gets{" "}
            <span className="text-ink">5 bonuses</span>: three full online
            courses, audio lessons for you, and live group sessions.
          </p>
        </Reveal>

        {/* 1–5 at a glance */}
        <Reveal className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2" stagger>
          {bonuses.map((b) => (
            <a
              key={b.n}
              href={`#bonus-${b.n}`}
              data-reveal-item
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] py-1.5 pl-1.5 pr-4 text-sm text-ink-muted transition-colors hover:border-gold/40 hover:text-ink"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gold-gradient font-display text-xs text-black">
                {b.n}
              </span>
              {b.short ? `${b.short} · ` : ""}
              {b.kind === "course" ? b.title : b.title.split(" — ")[0]}
            </a>
          ))}
        </Reveal>

        {/* Bonus courses 1–3 */}
        <Reveal className="mt-14 grid gap-6 lg:grid-cols-3" stagger>
          {courses.map((c) => (
            <article
              key={c.n}
              id={`bonus-${c.n}`}
              data-reveal-item
              className="card group flex scroll-mt-28 flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl" aria-hidden>
                  {c.icon}
                </span>
                <span className="rounded-full border border-gold/40 bg-gold/[0.08] px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold">
                  {c.label}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl">
                {c.title} {c.short && <span className="text-ink-faint">({c.short})</span>}
              </h3>
              {c.duration && (
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-faint">{c.duration}</p>
              )}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{c.description}</p>
              <div className="mt-5 rounded-xl border border-gold/20 bg-gold/[0.04] p-4 text-sm leading-relaxed">
                <span className="font-medium text-gold">Outcome — </span>
                <span className="text-ink">{c.outcome}</span>
              </div>
              {c.href && (
                <Link href={c.href} className="mt-6 text-sm text-ink transition-colors hover:text-gold">
                  Explore the course →
                </Link>
              )}
            </article>
          ))}
        </Reveal>

        {/* Bonuses 4–5 */}
        <Reveal className="mt-6 grid gap-6 lg:grid-cols-2" stagger>
          {extras.map((b) => (
            <article
              key={b.n}
              id={`bonus-${b.n}`}
              data-reveal-item
              className={cn("card flex scroll-mt-28 flex-col gap-6 sm:flex-row")}
            >
              <div className="flex shrink-0 flex-row items-center gap-3 sm:w-28 sm:flex-col sm:items-start">
                <span className="font-display text-5xl leading-none gold-text">{b.n}</span>
                <span className="text-3xl" aria-hidden>
                  {b.icon}
                </span>
              </div>
              <div className="flex flex-1 flex-col">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">{b.label}</p>
                <h3 className="mt-2 font-display text-xl md:text-2xl">{b.title}</h3>
                {b.duration && (
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-faint">Duration: {b.duration}</p>
                )}
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{b.description}</p>
                <div className="mt-5 rounded-xl border border-gold/20 bg-gold/[0.04] p-4 text-sm leading-relaxed">
                  <span className="font-medium text-gold">Outcome — </span>
                  <span className="text-ink">{b.outcome}</span>
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
