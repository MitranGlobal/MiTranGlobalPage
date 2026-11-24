import Reveal from "@/components/ui/Reveal";
import {
  bonuses,
  clarityCall,
  dearParents,
  handholding,
  handholdingSessions,
} from "@/lib/hub";
import { site } from "@/lib/site";

/**
 * Positivity Hub program: the "Dear Parents" letter, an at-a-glance list of
 * everything included (1 core + 5 bonuses), then the three handholding
 * sessions in detail (Clarity Call + the two Parent Live agenda sessions).
 */
export default function ProgramDetails() {
  return (
    <>
      {/* ───────── Dear Parents + what you get ───────── */}
      <section id="program" className="section border-t border-line">
        <div className="container-x grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">The program</p>
            <p className="mt-6 font-display text-xl italic text-ink-muted">{dearParents.salutation}</p>
            <h2 className="mt-4 text-display-2 font-display">
              Build confidence. Strengthen emotional well-being.{" "}
              <span className="gold-text italic">Prepare your child for life.</span>
            </h2>
            {dearParents.paragraphs.map((p) => (
              <p key={p} className="mt-6 max-w-xl leading-relaxed text-ink-muted md:text-lg">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card">
              <p className="text-xs uppercase tracking-[0.18em] text-ink-faint">In this program you will get</p>
              <ol className="mt-5 divide-y divide-line">
                <li className="flex items-start gap-4 py-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold/40 bg-gold/[0.10] text-xl">
                    {handholding.icon}
                  </span>
                  <div>
                    <p className="font-display text-lg text-ink">{handholding.title}</p>
                    <p className="mt-0.5 text-sm text-ink-muted">{handholding.duration}</p>
                  </div>
                  <span className="ml-auto self-center rounded-full border border-gold/40 bg-gold/[0.10] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                    Core
                  </span>
                </li>
                {bonuses.map((b) => (
                  <li key={b.n} className="flex items-start gap-4 py-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-white/[0.04] text-xl">
                      {b.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-gold">{b.label}</p>
                      <p className="mt-0.5 text-ink">{b.title}</p>
                    </div>
                    <span className="ml-auto self-center font-display text-2xl text-white/10">{b.n}</span>
                  </li>
                ))}
              </ol>
              <a href="#bonuses" className="btn-ghost mt-4 w-full">
                See all 5 bonuses ↓
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── 3 handholding sessions ───────── */}
      <section id="sessions" className="section border-t border-line">
        <div className="container-x">
          <Reveal className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">
                <span aria-hidden>{handholding.icon}</span> Core of the program
              </p>
              <h2 className="mt-5 text-display-2 font-display">
                3 handholding{" "}
                <span className="gold-text italic">one-to-one sessions</span>
              </h2>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-white/[0.02] p-5">
                <dt className="text-xs uppercase tracking-[0.16em] text-ink-faint">Duration</dt>
                <dd className="mt-2 font-display text-xl">{handholding.duration}</dd>
              </div>
              <div className="rounded-2xl border border-gold/25 bg-gold/[0.05] p-5">
                <dt className="text-xs uppercase tracking-[0.16em] text-gold">Outcome</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">{handholding.outcome}</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-3xl leading-relaxed text-ink-muted md:text-lg">{handholding.description}</p>
          </Reveal>

          {/* Session 1: Clarity Call */}
          <Reveal className="mt-14">
            <article className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/[0.08] via-bg-card to-bg-card p-7 md:p-10">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" aria-hidden />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr]">
                <div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-5xl gold-text">{clarityCall.n}</span>
                    <span className="text-xs uppercase tracking-[0.18em] text-gold">Session 1</span>
                  </div>
                  <h3 className="mt-4 text-display-3 font-display">{clarityCall.title}</h3>
                  <p className="mt-2 text-ink">{clarityCall.question}</p>
                  <p className="mt-5 leading-relaxed text-ink-muted">{clarityCall.intro}</p>

                  <div className="mt-6 rounded-2xl border border-line bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-ink-faint">Who should attend?</p>
                    <p className="mt-2 text-ink">{clarityCall.attend}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-ink-faint">During the session, we will</p>
                  <ol className="mt-4 grid gap-3">
                    {clarityCall.during.map((d, i) => (
                      <li key={d.t} className="flex gap-4 rounded-2xl border border-line bg-white/[0.02] p-4">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-gradient font-display text-sm text-black">
                          {i + 1}
                        </span>
                        <span>
                          <span className="block text-ink">{d.t}</span>
                          <span className="mt-0.5 block text-sm text-ink-muted">{d.d}</span>
                        </span>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-6 border-t border-line pt-6">
                    <p className="text-xs uppercase tracking-[0.16em] text-ink-faint">How to book the call</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{clarityCall.book}</p>
                    <a
                      href={site.urls.booking}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary mt-5"
                    >
                      Book your Clarity Call →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Sessions 2 & 3 */}
          <Reveal className="mt-6 grid gap-6 lg:grid-cols-2" stagger>
            {handholdingSessions.map((s, i) => (
              <article key={s.title} data-reveal-item className="card flex flex-col">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-4xl gold-text">{s.n}</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-gold">Session {i + 2}</span>
                </div>
                <h3 className="mt-4 text-display-3 font-display">{s.title}</h3>
                <p className="mt-2 text-ink">{s.question}</p>
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-snug text-ink-muted">
                      <span className="mt-0.5 shrink-0 text-gold" aria-hidden>
                        ✓
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
