"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";

type Option = { label: string; type: "R" | "L" | "S" | "F" };
type Q = { q: string; options: Option[] };

const questions: Q[] = [
  {
    q: "When you face a tough problem, you usually…",
    options: [
      { label: "Break it down step-by-step", type: "S" },
      { label: "Trust your gut and try", type: "F" },
      { label: "Ask people you trust", type: "L" },
      { label: "Push through no matter what", type: "R" },
    ],
  },
  {
    q: "In a group project, you naturally…",
    options: [
      { label: "Take charge and delegate", type: "L" },
      { label: "Do the planning and structure", type: "S" },
      { label: "Bring energy and ideas", type: "F" },
      { label: "Deliver whatever it takes", type: "R" },
    ],
  },
  {
    q: "Your favourite kind of win is…",
    options: [
      { label: "Solving something no one else could", type: "S" },
      { label: "Bringing a team together", type: "L" },
      { label: "Doing something creative and new", type: "F" },
      { label: "Beating your own last record", type: "R" },
    ],
  },
  {
    q: "When you fail at something, you…",
    options: [
      { label: "Study what went wrong", type: "S" },
      { label: "Ask for feedback", type: "L" },
      { label: "Try a completely different angle", type: "F" },
      { label: "Get right back up and go again", type: "R" },
    ],
  },
  {
    q: "You feel most alive when you're…",
    options: [
      { label: "Building or making something", type: "F" },
      { label: "Leading or inspiring others", type: "L" },
      { label: "Learning something new", type: "S" },
      { label: "Competing and pushing limits", type: "R" },
    ],
  },
];

const results: Record<Option["type"], { title: string; body: string }> = {
  R: {
    title: "The Resilient Achiever",
    body: "You thrive under pressure and turn setbacks into fuel. Your edge is discipline — pair it with reflection to unlock even more.",
  },
  L: {
    title: "The Natural Leader",
    body: "You lift people and hold vision. Your edge is influence — pair it with deep listening to lead even further.",
  },
  S: {
    title: "The Strategic Thinker",
    body: "You see systems others miss. Your edge is analysis — pair it with action to make ideas real.",
  },
  F: {
    title: "The Creative Force",
    body: "You bring energy and originality. Your edge is imagination — pair it with structure to compound your impact.",
  },
};

export default function QuizFlow() {
  const [i, setI] = useState(0);
  const [tally, setTally] = useState<Record<Option["type"], number>>({
    R: 0,
    L: 0,
    S: 0,
    F: 0,
  });
  const [done, setDone] = useState(false);

  const pick = (t: Option["type"]) => {
    const next = { ...tally, [t]: tally[t] + 1 };
    setTally(next);
    if (i + 1 >= questions.length) setDone(true);
    else setI(i + 1);
  };

  const reset = () => {
    setI(0);
    setTally({ R: 0, L: 0, S: 0, F: 0 });
    setDone(false);
  };

  const winner = (Object.entries(tally) as [Option["type"], number][]).sort(
    (a, b) => b[1] - a[1]
  )[0][0];
  const progress = ((i + (done ? 1 : 0)) / questions.length) * 100;

  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              className="h-full bg-gold-gradient"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="card">
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="eyebrow">
                    Question {i + 1} of {questions.length}
                  </p>
                  <h2 className="mt-5 font-display text-2xl md:text-3xl leading-snug">
                    {questions[i].q}
                  </h2>
                  <div className="mt-8 grid gap-3">
                    {questions[i].options.map((o) => (
                      <button
                        key={o.label}
                        onClick={() => pick(o.type)}
                        className="w-full rounded-2xl border border-line bg-white/[0.02] px-5 py-4 text-left text-ink transition-all hover:border-gold/40 hover:bg-white/[0.05] hover:-translate-y-[1px]"
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <p className="eyebrow mx-auto">Your personality type</p>
                  <h2 className="mt-5 font-display text-3xl md:text-4xl gold-text">
                    {results[winner].title}
                  </h2>
                  <p className="mt-5 text-ink-muted leading-relaxed md:text-lg">
                    {results[winner].body}
                  </p>
                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <a
                      href={site.urls.positivityScore}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      Take the full Positivity Score →
                    </a>
                    <button onClick={reset} className="btn-ghost">
                      Retake quiz
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
