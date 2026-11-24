import Reveal from "@/components/ui/Reveal";

export const REFUND_CONDS = [
  "Less than 25% of the course content has been viewed",
  "No programme assessments have been attempted",
  "The course completion certificate hasn't been downloaded",
];

/**
 * 14-day refund policy — the I Love Exams refund section, shared so every
 * course page shows the same policy and the same design.
 */
export default function RefundSection({ enrollHref }: { enrollHref: string }) {
  return (
    <section id="refund" className="section border-t border-line">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Refund policy</p>
          <h2 className="mt-5 text-display-2 font-display">
            Your investment is{" "}
            <span className="gold-text italic">completely protected</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[1000px] items-start gap-10 md:grid-cols-2">
          <Reveal>
            <p className="leading-relaxed text-ink-muted md:text-lg">
              We believe in delivering high-quality learning experiences that
              genuinely benefit our students. If the course isn&apos;t the right
              fit, we offer a hassle-free, no-risk refund. You&apos;re eligible
              for a full refund within 14 days if:
            </p>
            <div className="mt-5 flex flex-col gap-2.5">
              {REFUND_CONDS.map((c) => (
                <div
                  key={c}
                  className="flex items-start gap-2.5 rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-ink-muted"
                >
                  <span className="shrink-0 font-bold text-gold">✓</span>
                  {c}
                </div>
              ))}
            </div>
            <p className="mt-5 text-[13.5px] leading-relaxed text-ink-faint">
              Simply reach out and we&apos;ll process your refund — quick and
              easy. We&apos;re committed to helping you grow, and our risk-free
              approach ensures you only continue if you truly find value.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[22px] border border-gold/35 bg-[linear-gradient(160deg,#17243a_0%,#0b1220_100%)] px-8 py-10 text-center">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(233,196,106,0.2),transparent_60%)]"
                aria-hidden
              />
              <div className="relative font-display text-[100px] italic leading-none tracking-[-0.05em] gold-text">
                14
              </div>
              <div className="relative mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
                Day money-back guarantee
              </div>
              <p className="relative mb-6 mt-5 text-[14.5px] leading-relaxed text-white/70">
                Full refund within 14 days. No questions asked. Your child&apos;s
                growth is our commitment.
              </p>
              <a href={enrollHref} target="_blank" rel="noreferrer" className="btn-primary relative w-full">
                Enroll risk-free →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
