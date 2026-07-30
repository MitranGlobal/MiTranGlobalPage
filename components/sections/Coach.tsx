import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const tags = [
  "NLP Practitioner",
  "Teen Psychology",
  "10K+ Learners",
  "5★ Rated",
];

export default function Coach() {
  return (
    <section id="coach" className="section border-t border-line">
      <div className="container-x grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">Meet the Coach</p>
          <h2 className="mt-5 text-display-2 font-display">
            Transforming teens through{" "}
            <span className="gold-text italic">science &amp; heart</span>
          </h2>
          <p className="mt-6 max-w-xl text-ink-muted leading-relaxed md:text-lg">
            Our Transformation Coach brings together NLP, human psychology, and
            years of experience working with thousands of teenagers and parents
            across India. Every session is designed not just to inform, but to
            genuinely change how a teenager sees themselves and their potential.
          </p>
          <a
            href={site.urls.calendly}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-8"
          >
            Book a one-to-one session →
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card relative overflow-hidden">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
            <div className="flex items-center gap-5">
              <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gold-gradient font-display text-3xl text-black">
                M
              </div>
              <div>
                <p className="font-display text-xl">MiTran Global Coach</p>
                <p className="text-sm text-ink-muted">
                  Transformation Coach &amp; Founder
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-white/[0.02] px-3 py-1 text-xs text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
