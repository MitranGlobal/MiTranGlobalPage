import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import YzHero from "@/components/yellowzone/YzHero";
import VideoPlayer from "@/components/yellowzone/VideoPlayer";
import TallyEmbed from "@/components/yellowzone/TallyEmbed";
import Technology from "@/components/yellowzone/Technology";
import { about, criteria, explainer, gap, gates, methodology, yz } from "@/lib/yellowzone";

export const metadata: Metadata = {
  title: "YellowZone Schools — emotional wellbeing certification | MiTran Global",
  description:
    "Yellow Zone assesses your campus with Emotion AI, scores it against a defined standard, and certifies it. Apply for a free Campus Readiness Audit.",
};

export default function YellowZoneSchoolsPage() {
  return (
    <>
      {/* 1. Hero — from the Lead Capture page */}
      <YzHero />

      {/* 2. What is YellowZone? — short explainer video for first-time visitors */}
      <section id="what-is-yellowzone" className="section scroll-mt-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">New to YellowZone?</p>
            <h2 className="mt-5 text-display-2 font-display">
              What is <span className="gold-text italic">YellowZone?</span>
            </h2>
            <p className="mt-4 text-ink-muted md:text-lg">
              A quick look at how schools measure and certify the emotional
              wellbeing of their students.
            </p>
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-4xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line bg-bg-card shadow-card">
              <iframe
                src={explainer.src}
                title={explainer.title}
                loading="lazy"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Every school measures marks */}
      <section className="section border-t border-line">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">{gap.eyebrow}</p>
            <h2 className="mt-5 text-display-2 font-display">
              Every school measures marks.{" "}
              <span className="gold-text italic">Almost none measure how students feel.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="self-end">
            {gap.paragraphs.map((p) => (
              <p key={p} className="mb-5 leading-relaxed text-ink-muted md:text-lg">
                {p}
              </p>
            ))}
            <p className="font-display text-2xl text-ink">{gap.closing}</p>
          </Reveal>
        </div>
      </section>

      {/* 4. About — Building the emotional wellbeing infrastructure */}
      <section className="section border-t border-line">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-bg-card p-8 shadow-card md:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
              <div>
                <p className="eyebrow">{about.eyebrow}</p>
                <h2 className="mt-5 text-display-2 font-display">
                  Building the emotional wellbeing{" "}
                  <span className="gold-text italic">infrastructure for education</span>
                </h2>
              </div>
              <p className="leading-relaxed text-ink-muted md:text-lg">{about.lede}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. The Methodology — EPPT */}
      <section className="section border-t border-line">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">{methodology.eyebrow}</p>
            <h2 className="mt-5 text-display-2 font-display">
              <span className="gold-text">EPPT</span> — the Emotion AI Powered Positivity Tracker
            </h2>
            {methodology.paragraphs.map((p) => (
              <p key={p} className="mt-6 max-w-xl leading-relaxed text-ink-muted md:text-lg">
                {p}
              </p>
            ))}
            <p className="mt-5 max-w-xl text-ink md:text-lg">{methodology.emphasis}</p>
          </Reveal>
          <Reveal stagger className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-2xl border border-line bg-line">
            {methodology.factors.map((f, i) => (
              <div key={f} data-reveal-item className="bg-bg-card px-5 py-5">
                <span className="font-mono text-[0.68rem] text-gold">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-sm leading-snug text-ink">{f}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 6. Technology — how EPPT turns signals into insight (presentation slide) */}
      <Technology />

      {/* 7. Criteria — from the Lead Capture page */}
      <section id="criteria" className="section border-t border-line">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">The criteria</p>
            <h2 className="mt-5 max-w-3xl text-display-2 font-display">
              Five things we check.{" "}
              <span className="gold-text italic">A certified school has all of them.</span>
            </h2>
          </Reveal>
          <Reveal stagger className="mt-12 border-t border-line">
            {criteria.map((c) => (
              <div
                key={c.code}
                data-reveal-item
                className="flex flex-col gap-1.5 border-b border-line py-5 sm:flex-row sm:items-baseline sm:gap-8 sm:py-6"
              >
                <span className="font-mono text-sm tracking-[0.1em] text-gold sm:w-12 sm:shrink-0">{c.code}</span>
                <h3 className="font-display text-xl leading-snug sm:w-[22rem] sm:shrink-0">{c.title}</h3>
                <p className="leading-relaxed text-ink-muted">{c.line}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 8. Find out where your campus actually stands */}
      <section className="section border-t border-line">
        <div className="container-x">
          <Reveal className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/[0.10] via-bg-card to-bg-card px-8 py-14 text-center md:px-14">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" aria-hidden />
            <h2 className="relative text-display-2 font-display">
              Find out where your campus <span className="gold-text italic">actually stands.</span>
            </h2>
            <p className="relative mt-4 text-ink-muted md:text-lg">
              Applications for the {yz.cohortName} are open.
            </p>
            <a href="#apply" className="btn-primary relative mt-8 px-8 py-4 text-base">
              Apply now →
            </a>
            <p className="relative mt-6 text-sm text-ink-faint">
              Or call{" "}
              <a href={yz.phoneHref} className="text-gold underline-offset-4 hover:underline">
                {yz.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* 9. YellowZone briefing video */}
      <section id="briefing" className="section scroll-mt-20 border-t border-line">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Briefing · {yz.briefingMinutes} minutes</p>
            <h2 className="mt-5 text-display-2 font-display">
              Watch this, then <span className="gold-text italic">apply below.</span>
            </h2>
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-line shadow-card">
            <VideoPlayer />
          </Reveal>
        </div>
      </section>

      {/* 10. Application */}
      <section id="apply" className="section scroll-mt-20 border-t border-line">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Free · No payment</p>
            <h2 className="mt-5 text-display-2 font-display">
              Apply and <span className="gold-text italic">pick your time</span>
            </h2>
            <p className="mt-4 text-ink-muted md:text-lg">
              A 60-minute session with our assessment team, at your school.
            </p>
          </Reveal>

          <Reveal className="mx-auto mt-8 max-w-3xl rounded-xl border-l-2 border-gold bg-white/[0.04] px-5 py-4">
            <p className="text-[0.95rem] leading-relaxed text-ink-muted">
              <strong className="font-semibold text-gold">Please note:</strong>{" "}
              This meeting will be conducted in person, on the school premises,
              and we strongly recommend that an authoritative decision-maker from
              the school complete this form and attend the meeting.
            </p>
          </Reveal>

          {/* Tally's form is light-on-white, so it sits on its own light panel. */}
          <Reveal className="mx-auto mt-8 max-w-3xl rounded-2xl bg-[#f5f4ef] p-4 shadow-card sm:p-6">
            <TallyEmbed />
          </Reveal>
        </div>
      </section>

      {/* 11. Before you apply */}
      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <Reveal stagger className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {gates.map((g) => (
              <article key={g.title} data-reveal-item className="bg-bg-card p-7">
                <div className="h-px w-10 bg-gold" aria-hidden />
                <h3 className="mt-5 font-display text-xl leading-snug">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{g.body}</p>
              </article>
            ))}
          </Reveal>
          <p className="mt-6 text-center text-sm text-ink-faint">
            Questions? Call{" "}
            <a href={yz.phoneHref} className="text-gold underline-offset-4 hover:underline">
              {yz.phone}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${yz.email}`} className="text-gold underline-offset-4 hover:underline">
              {yz.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
