import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export default function Challenge() {
  return (
    <section className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">The Challenge</p>
          <h2 className="mt-5 text-display-2 font-display">
            The hidden obstacles your child faces{" "}
            <span className="gold-text italic">every day</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-ink-muted leading-relaxed md:text-lg">
            Children aged 11–17 face growing pressures — mobile addiction, peer
            pressure, academic stress, and pervasive negativity. WHO reports
            that 1 in 7 children in this age group faces mental health
            challenges, often untreated.
          </p>
          <p className="mt-5 text-ink-muted leading-relaxed md:text-lg">
            The most crucial skill of our era isn&apos;t coding or leadership —
            it&apos;s{" "}
            <span className="font-medium text-ink">positivity</span>. At MiTran
            Global, we&apos;ve built the framework to instil it systematically.
          </p>
          <a
            href={site.urls.positivityScore}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-8"
          >
            Assess your child now →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
