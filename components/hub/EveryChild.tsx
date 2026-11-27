import Reveal from "@/components/ui/Reveal";
import { bonuses, everyChild, formatINR } from "@/lib/hub";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * "Every Child Deserves the Opportunity to Grow from Within" with the price.
 * `was` shows a struck-through price before the offer price.
 */
export default function EveryChild({
  plan,
  price,
  was,
  core,
  platinum = false,
}: {
  plan: string;
  /** Omit to show no price (Platinum). */
  price?: number;
  was?: number;
  /** First line of the "what's included" list. */
  core: string;
  platinum?: boolean;
}) {
  const included = [core, ...bonuses.map((b) => `${b.label}: ${b.title.split(" — ")[0]}`)];

  return (
    <section id="enroll" className="section border-t border-line">
      <div className="container-x grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
        <Reveal>
          <p className="eyebrow">Enroll your teen</p>
          <h2 className="mt-5 text-display-2 font-display">
            Every Child Deserves the Opportunity to{" "}
            <span className="gold-text italic">Grow from Within</span>
          </h2>
          {everyChild.paragraphs.map((p) => (
            <p key={p} className="mt-6 max-w-xl leading-relaxed text-ink-muted md:text-lg">
              {p}
            </p>
          ))}
          <div className="mt-8 space-y-2 border-l-2 border-gold pl-5">
            {everyChild.emphasis.map((e) => (
              <p key={e} className="font-medium text-ink md:text-lg">
                {e}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl border p-7 shadow-glow md:p-9",
              platinum
                ? "border-white/25 bg-gradient-to-br from-white/[0.08] via-bg-card to-bg-card"
                : "border-gold/35 bg-gradient-to-br from-gold/[0.10] via-bg-card to-bg-card"
            )}
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold/15 blur-3xl" aria-hidden />
            <div className="relative">
              <p className={cn("text-xs font-semibold uppercase tracking-[0.2em]", platinum ? "platinum-text" : "text-gold")}>
                {plan}
              </p>
              {price !== undefined && (
              <div className="mt-5 flex flex-wrap items-end gap-x-4 gap-y-1">
                {was && (
                  <span className="font-display text-2xl text-ink-faint line-through decoration-red-400/80 decoration-2 md:text-3xl">
                    {formatINR(was)}/-
                  </span>
                )}
                <span className="font-display text-[clamp(3rem,7vw,4.5rem)] leading-none gold-text">
                  {formatINR(price)}/-
                </span>
              </div>
              )}
              {was && price !== undefined && (
                <p className="mt-3 inline-flex rounded-full bg-gold/[0.12] px-3 py-1 text-xs font-medium text-gold">
                  You save {formatINR(was - price)}
                </p>
              )}

              <ul className={cn("space-y-2.5", price !== undefined ? "mt-7 border-t border-line pt-6" : "mt-5")}>
                {included.map((line, i) => (
                  <li key={line} className="flex gap-3 text-sm leading-snug">
                    <span className={cn("mt-0.5 shrink-0", i === 0 ? "text-gold" : "text-ink-muted")} aria-hidden>
                      {i === 0 ? "★" : "✓"}
                    </span>
                    <span className={i === 0 ? "text-ink" : "text-ink-muted"}>{line}</span>
                  </li>
                ))}
              </ul>

              <a
                href={site.urls.booking}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-8 w-full px-8 py-4 text-base"
              >
                Book a call to enroll →
              </a>
              <p className="mt-3 text-center text-xs text-ink-faint">
                Start with a Clarity Call — no obligation.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
