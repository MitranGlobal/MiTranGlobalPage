import { ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import EmoIcon from "@/components/emotech/EmoIcon";
import { technology } from "@/lib/emotech";

const card = "relative rounded-2xl border border-line bg-bg-card p-6 shadow-card";

function Num({ n }: { n: string }) {
  return <span className="font-mono text-xs font-semibold tracking-[0.12em] text-gold">{n}</span>;
}

/** Arrow between flow stages: right on desktop, down on mobile. */
function Arrow() {
  return (
    <span aria-hidden className="grid place-items-center text-gold">
      <ChevronRight className="h-6 w-6 rotate-90 lg:rotate-0" strokeWidth={2.25} />
    </span>
  );
}

/**
 * Slide 3 · "Turning Emotional Signals Into Actionable Insight." — the EPPT
 * flow from questionnaire and camera to the report, then parent and
 * principal views.
 */
export default function Technology() {
  const { questionnaire: q, camera, report, outcomes } = technology;

  return (
    <section id="technology" className="section border-t border-line">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{technology.eyebrow}</p>
          <h2 className="mt-5 text-display-2 font-display">
            Turning Emotional Signals Into{" "}
            <span className="gold-text italic">Actionable Insight.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-14 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {/* 01 Questionnaire */}
          <div className={card}>
            <Num n={q.n} />
            <div className="mt-4 flex items-center gap-4 text-ink">
              <EmoIcon name="student" className="h-12 w-12" />
              <EmoIcon name="laptop" className="h-12 w-12 text-gold" />
            </div>
            <p className="mt-6 font-display text-6xl leading-none gold-text">{q.big}</p>
            <p className="mt-1 text-sm text-ink-muted">{q.bigLabel}</p>
            <h3 className="mt-6 font-display text-lg leading-snug">{q.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{q.d}</p>
          </div>

          <Arrow />

          {/* 02 Facial analysis */}
          <div className={`${card} lg:mt-24`}>
            <Num n={camera.n} />
            <div className="mt-4 flex items-start gap-4">
              <EmoIcon name="camera" className="h-11 w-11 shrink-0 text-gold" />
              <div>
                <h3 className="font-display text-lg leading-snug">{camera.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{camera.d}</p>
              </div>
            </div>
          </div>

          <Arrow />

          {/* 03 Report */}
          <div className={card}>
            <Num n={report.n} />
            <div className="mt-4 rounded-xl border border-gold/60 bg-black/30 p-5 text-center">
              <EmoIcon name="smile" className="mx-auto h-14 w-14 text-gold" />
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">Positivity Score</p>
              <div className="mx-auto mt-4 space-y-2" aria-hidden>
                <div className="h-1.5 w-full rounded-full bg-white/15"><div className="h-full w-1/2 rounded-full bg-white/40" /></div>
                <div className="h-1.5 w-full rounded-full bg-white/15"><div className="h-full w-4/5 rounded-full bg-white/40" /></div>
                <div className="h-1.5 w-full rounded-full bg-white/15"><div className="h-full w-2/3 rounded-full bg-white/40" /></div>
              </div>
            </div>
            <h3 className="mt-6 font-display text-lg leading-snug">{report.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{report.d}</p>
          </div>

          <Arrow />

          {/* 04a / 04b */}
          <div className="grid gap-4">
            {outcomes.map((o) => (
              <div key={o.n} className={`${card} flex flex-col`}>
                <Num n={o.n} />
                <div className="mt-4 flex items-start gap-4">
                  <EmoIcon name={o.icon} className="h-11 w-11 shrink-0 text-ink" />
                  <div>
                    <h3 className="font-display text-lg leading-snug">{o.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{o.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
