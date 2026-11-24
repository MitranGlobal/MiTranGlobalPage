import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { missingSkill } from "@/lib/hub";

/** "That missing skill is what we build." — Positivity Hub introduced. */
export default function MissingSkill() {
  return (
    <section id="missing-skill" className="section relative overflow-hidden border-t border-line">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_25%_45%,rgba(233,196,106,0.14),transparent_70%)]"
        aria-hidden
      />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-20">
        <Reveal className="mx-auto lg:mx-0">
          <div className="relative grid place-items-center">
            <span
              className="absolute inset-[-14%] animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-gold/40"
              aria-hidden
            />
            <Image
              src="/images/positivity-hub-logo.png"
              alt="MiTran Global #positivity hub, for ages 11 to 17"
              width={640}
              height={640}
              className="relative h-auto w-[220px] drop-shadow-2xl sm:w-[280px] lg:w-[320px]"
              sizes="(min-width: 1024px) 320px, 280px"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg text-gold-bright">{missingSkill.bridge}</p>
          <h2 className="mt-3 text-display-2 font-display">{missingSkill.name}</h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-muted">{missingSkill.lead}</p>

          <ul className="mt-8 grid max-w-[36rem] grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {missingSkill.practices.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-xs text-gold">✓</span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-8 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm text-ink-faint">{missingSkill.proofLabel}</p>
              <dl className="mt-3 flex flex-wrap gap-x-10 gap-y-4">
                {missingSkill.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-3xl gold-text">{s.value}</dd>
                    <dd className="text-sm text-ink-faint">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <a href="#program" className="btn-primary self-start sm:self-auto">
              {missingSkill.cta} ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
