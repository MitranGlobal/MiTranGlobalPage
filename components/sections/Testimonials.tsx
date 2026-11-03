"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site";
import { cn } from "@/lib/cn";

const INTERVAL_MS = 6000;

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  // Restart the timer whenever the slide changes (auto or by a dot click),
  // so a manual pick always gets a full 6 seconds on screen.
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(
      () => setI((n) => (n + 1) % testimonials.length),
      INTERVAL_MS
    );
    return () => clearTimeout(id);
  }, [i, paused]);

  return (
    <section className="section border-t border-line">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">What Parents Say</p>
          <h2 className="mt-5 text-display-2 font-display">
            Changing lives, one{" "}
            <span className="gold-text italic">mindset</span> at a time
          </h2>
        </Reveal>

        <div
          className="relative mx-auto mt-16 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Every quote sits in the same grid cell, so the card is always as
              tall as the longest quote — no page jump when slides change. */}
          <div className="card grid text-center" aria-live="polite">
            {testimonials.map((t, k) => (
              <figure
                key={t.name}
                aria-hidden={k !== i}
                className={cn(
                  "[grid-area:1/1] transition-all duration-500 ease-out",
                  k === i
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-3 opacity-0"
                )}
              >
                <div className="mb-4 text-gold">★★★★★</div>
                <blockquote className="font-display text-xl md:text-2xl leading-snug">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-ink-muted">
                  <span className="font-medium text-ink">{t.name}</span> — {t.role}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-1">
            {testimonials.map((_, k) => (
              <button
                key={k}
                type="button"
                aria-label={`Show testimonial ${k + 1}`}
                aria-current={k === i}
                onClick={() => setI(k)}
                className="grid h-8 place-items-center px-1"
              >
                <span
                  className={cn(
                    "block h-1.5 rounded-full transition-all",
                    k === i ? "w-8 bg-gold" : "w-2 bg-white/20 hover:bg-white/40"
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
