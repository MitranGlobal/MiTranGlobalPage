import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import { stories } from "@/lib/stories";
import { videoStories } from "@/lib/videoStories";
import VideoBento from "@/components/stories/VideoBento";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Real Life Real Stories — MiTran Global",
  description:
    "Students from schools across India and abroad on what changed for them with MiTran Global.",
};

const meta = [
  { n: "10,000+", l: "Learners on the Hub" },
  { n: "1000+", l: "Video lessons" },
  { n: "11–17", l: "The age that shapes a life" },
];

export default function RealLifeRealStoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-32 md:pb-14 md:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade" aria-hidden />
        <div className="container-x">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Real families · Real change</p>
            <h1 className="mt-6 text-display-1 font-display">
              Real life. <span className="gold-text italic">Real stories.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              Students from schools across India and abroad, in their own words,
              on what changed for them with MiTran Global. Tap any story to watch.
            </p>
          </Reveal>
          <Reveal className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-4" stagger>
            {meta.map((m) => (
              <div key={m.l} data-reveal-item className="rounded-2xl border border-line bg-white/[0.02] px-4 py-5 text-center">
                <div className="font-display text-2xl gold-text md:text-4xl">{m.n}</div>
                <div className="mt-1 text-[10.5px] uppercase tracking-widest text-ink-faint md:text-xs">{m.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Stories */}
      <section className="pb-16 md:pb-20">
        <div className="container-x">
          <VideoBento videos={videoStories} quotes={stories} />

          {/* CTA */}
          <Reveal className="relative mt-16 overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/[0.10] via-bg-card to-bg-card px-8 py-14 text-center md:px-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" aria-hidden />
            <p className="eyebrow relative">Your child could be next</p>
            <h2 className="relative mt-5 text-display-2 font-display">
              Start your own <span className="gold-text italic">success story.</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-ink-muted md:text-lg">
              Book a call with our coach to find the right next step for your child.
            </p>
            <a href={site.urls.booking} target="_blank" rel="noreferrer" className="btn-primary relative mt-8 px-8 py-4 text-base">
              Book a call →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
