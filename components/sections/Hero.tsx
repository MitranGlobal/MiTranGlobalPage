"use client";

import { motion } from "framer-motion";
import { site, stats } from "@/lib/site";
import HeroVideo from "./HeroVideo";
import { useQuiz } from "@/store/quiz";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const showQuiz = useQuiz((s) => s.show);

  return (
    <section className="relative overflow-hidden pt-28 md:pt-40">
      {/* Grounding gradient + a subtle warm bloom behind the video so it blends in */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-bg/0 via-bg/0 to-bg" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[60%] w-1/2 rounded-full bg-gold/[0.06] blur-[120px]" />

      <div className="container-x">
        {/* Left: text + CTA · Right: video (slightly wider than the text column) */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
          {/* LEFT — all hero content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="text-left"
          >
            <motion.p variants={item} className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Positivity Framework™ · Ages 11–17
            </motion.p>

            {/* Main hero content: the "1 in 7" science block from Platinum */}
            <motion.h1
              variants={item}
              className="mt-6 font-display text-[clamp(2.25rem,4.2vw,3.75rem)] leading-[1.08] tracking-tight"
            >
              Why early positive intervention{" "}
              <span className="gold-text italic">changes everything</span>
            </motion.h1>

            <motion.div variants={item} className="mt-8 max-w-xl">
              <div className="font-display text-[clamp(4.5rem,9vw,7.5rem)] leading-[0.9] tracking-tight gold-text">
                1 in 7
              </div>
              <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
                adolescents (10–19) faces a mental health challenge — most go
                unaddressed. Positivity, resilience and confidence can be
                trained, and 11–17 is when lifelong habits lock in.
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-ink-faint">
                Source: World Health Organisation
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              {site.features.quiz && (
                <button
                  type="button"
                  onClick={showQuiz}
                  className="btn-primary px-8 py-4 text-base"
                >
                  Take a Quiz →
                </button>
              )}
              <a
                href={site.urls.booking}
                target="_blank"
                rel="noreferrer"
                className={`${site.features.quiz ? "btn-ghost" : "btn-primary"} px-8 py-4 text-base`}
              >
                {site.features.quiz ? "Book a call" : "Book a call →"}
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — video */}
          <div className="w-full">
            <HeroVideo />
          </div>
        </div>

        {/* Stats row spanning the full width below the hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-20"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-white/[0.02] px-5 py-6 text-center backdrop-blur-sm"
            >
              <div className="font-display text-3xl md:text-4xl gold-text">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-ink-faint">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
