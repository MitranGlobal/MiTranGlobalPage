"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((n) => (n + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

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

        <div className="relative mx-auto mt-16 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="card text-center"
            >
              <div className="mb-4 text-gold">★★★★★</div>
              <blockquote className="font-display text-xl md:text-2xl leading-snug">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 text-sm text-ink-muted">
                <span className="font-medium text-ink">{t.name}</span>{" "}
                — {t.role}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k}
                aria-label={`Testimonial ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-8 bg-gold" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
