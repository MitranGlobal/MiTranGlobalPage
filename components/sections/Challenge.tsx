import Reveal from "@/components/ui/Reveal";
import ImageBand from "@/components/ui/ImageBand";
import { familiarBand, outcomeBand } from "@/lib/bands";
import { site } from "@/lib/site";

/**
 * "The hidden obstacles" — framed by two moving image bands from the Parent
 * Live Sessions page: the familiar struggles above, what home can feel like
 * after, below.
 */
export default function Challenge() {
  return (
    <section className="section overflow-hidden">
      <Reveal className="container-x mb-8 flex items-baseline justify-between gap-4 md:mb-10">
        <p className="eyebrow">Sound familiar?</p>
        <p className="hidden text-sm text-ink-faint md:block">
          What parents tell us most often
        </p>
      </Reveal>
      <ImageBand items={familiarBand} label="Situations parents tell us about" />

      <div className="container-x grid gap-12 py-14 md:py-20 lg:grid-cols-[1fr_1.2fr] lg:items-center">
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
            href={site.urls.booking}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-8"
          >
            Book a call →
          </a>
        </Reveal>
      </div>

      <Reveal className="container-x mb-8 flex items-baseline justify-between gap-4 md:mb-10">
        <p className="eyebrow">After the change</p>
        <p className="hidden text-sm text-ink-faint md:block">
          What home can start to feel like
        </p>
      </Reveal>
      <ImageBand
        items={outcomeBand}
        label="What can change at home"
        reverse
        marker="✦"
      />
    </section>
  );
}
