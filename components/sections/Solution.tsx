import Reveal from "@/components/ui/Reveal";
import EmoIcon from "@/components/emotech/EmoIcon";
import { FACTORS, solution } from "@/lib/emotech";

/** Slide 2 · "Measure the Emotion, Mentor the Gap." — 3 steps + the 10 factors. */
export default function Solution() {
  return (
    <section id="solution" className="section border-t border-line">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{solution.eyebrow}</p>
          <h2 className="mt-5 text-display-2 font-display">
            Measure the Emotion, <span className="gold-text italic">Mentor the Gap.</span>
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-muted md:text-lg">{solution.lead}</p>
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {solution.pillars.map((p) => (
            <article key={p.n} data-reveal-item className="card flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                  <span className="text-gold">{p.n}</span>
                  <span className="ml-2 text-ink">{p.kicker}</span>
                </p>
                <EmoIcon name={p.icon} className="h-8 w-8 shrink-0 text-gold/80" />
              </div>
              <h3 className="mt-3 font-display text-xl">{p.t}</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>

        {/* The 10 Emotional Factors We Measure */}
        <Reveal className="mt-5 overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/[0.07] via-bg-card to-bg-card">
          <div className="grid gap-8 p-7 md:p-9 lg:grid-cols-[0.8fr_2fr] lg:items-center lg:gap-12">
            <div className="lg:border-r lg:border-line lg:pr-10">
              <h3 className="font-display text-2xl leading-tight gold-text">{solution.factorsTitle}</h3>
              <p className="mt-3 text-sm text-ink-muted">{solution.factorsNote}</p>
            </div>
            <ol className="grid gap-x-10 gap-y-3 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-5">
              {FACTORS.map((f, i) => (
                <li key={f} className="flex items-baseline gap-3 text-[15px]">
                  <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-ink">{f}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
