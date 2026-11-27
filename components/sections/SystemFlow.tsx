import Reveal from "@/components/ui/Reveal";
import EmoIcon from "@/components/emotech/EmoIcon";
import { systemFlow } from "@/lib/emotech";
import { cn } from "@/lib/cn";

/** Slide 1 · "One Platform, From Signal to Support." — five-step system flow. */
export default function SystemFlow() {
  return (
    <section id="system-flow" className="section border-t border-line">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{systemFlow.eyebrow}</p>
          <h2 className="mt-5 text-display-2 font-display">
            One Platform, <span className="gold-text italic">From Signal to Support.</span>
          </h2>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {systemFlow.steps.map((s, i) => (
            <div key={s.n} data-reveal-item className="relative flex flex-col items-center text-center">
              {/* Chevron to the next step (desktop row) */}
              {i < systemFlow.steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[calc(50%+3.75rem)] right-[calc(-50%+3.75rem)] top-12 hidden items-center justify-center text-2xl text-gold lg:flex"
                >
                  ›
                </span>
              )}
              <span
                className={cn(
                  "grid h-24 w-24 place-items-center rounded-full border-2",
                  s.highlight
                    ? "border-gold bg-gold-gradient text-black shadow-glow"
                    : "border-gold/70 bg-bg-elev text-ink"
                )}
              >
                <EmoIcon name={s.icon} className="h-10 w-10" />
              </span>
              <p className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-lg text-gold">{s.n}</span>
                <span className="text-sm font-semibold uppercase tracking-[0.14em]">{s.t}</span>
              </p>
              <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-ink-muted">{s.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
