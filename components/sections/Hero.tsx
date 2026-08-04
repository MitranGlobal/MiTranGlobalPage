"use client";

import { motion } from "framer-motion";
import { site, stats } from "@/lib/site";
import HeroVideo from "./HeroVideo";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
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

            <motion.h1
              variants={item}
              className="mt-6 font-display text-[clamp(2.5rem,4.6vw,4.25rem)] leading-[1.06] tracking-tight"
            >
              A positive teen today, a{" "}
              <span className="gold-text italic">confident leader</span> tomorrow.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-ink-muted"
            >
              We equip teenagers with the mindset, skills, and emotional intelligence
              to thrive — consistently imparting positivity through science-backed
              learning.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={site.urls.positivityScore}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Find your child&apos;s score →
              </a>
              <a
                href={site.urls.checkout}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                ▶ Join the experience
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
          className="mt-16 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-4"
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
