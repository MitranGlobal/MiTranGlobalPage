import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export default function Cta() {
  return (
    <section className="section border-t border-line">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-bg-card p-10 md:p-16 shadow-card">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

          <div className="relative">
            <p className="eyebrow">For Schools</p>
            <h2 className="mt-5 max-w-2xl text-display-2 font-display">
              Bring the Positivity Framework™ to your{" "}
              <span className="gold-text italic">entire school</span>
            </h2>
            <p className="mt-5 max-w-2xl text-ink-muted leading-relaxed md:text-lg">
              We partner with schools to implement whole-campus emotional
              wellness programmes — with detailed school-level and individual
              student reports.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@mitranglobal.com"
                className="btn-primary"
              >
                Partner with us →
              </a>
              <a
                href={site.urls.spotify}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                🎙 Listen to the podcast
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
