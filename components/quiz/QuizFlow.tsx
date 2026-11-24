"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  QUIZ_MAX,
  bandFor,
  focusQuestion,
  quizIntro,
  quizQuestions,
} from "@/lib/quiz";
import { validateLead, type LeadErrors, type LeadField, type LeadInput } from "@/lib/lead";
import { rememberSignUp } from "@/lib/leadStorage";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Typeform-style parent quiz: one question per screen, progress bar,
 * keyboard shortcuts (A–D or 1–4, Backspace/← to go back), then contact
 * details, then the result. Details are sent to ClarityConvert through
 * /api/leads with the quiz result attached.
 */

type Step =
  | { kind: "intro" }
  | { kind: "q"; i: number }
  | { kind: "focus" }
  | { kind: "contact" }
  | { kind: "result" };

const LETTERS = ["A", "B", "C", "D"];
const EMPTY: LeadInput = { parentName: "", childName: "", mobile: "", email: "" };

export default function QuizFlow({ onClose }: { onClose?: () => void }) {
  const reduce = useReducedMotion();
  const [step, setStep] = useState<Step>({ kind: "intro" });
  const [answers, setAnswers] = useState<(number | null)[]>(() => quizQuestions.map(() => null));
  const [focus, setFocus] = useState<string | null>(null);
  const [form, setForm] = useState<LeadInput>(EMPTY);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const idemKey = useRef<string>("");

  const score = useMemo(() => answers.reduce<number>((t, a) => t + (a ?? 0), 0), [answers]);
  const band = bandFor(score);

  // progress: intro 0 → each question → focus → contact → result 100
  const totalSteps = quizQuestions.length + 2;
  const position =
    step.kind === "intro" ? 0
    : step.kind === "q" ? step.i
    : step.kind === "focus" ? quizQuestions.length
    : step.kind === "contact" ? quizQuestions.length + 1
    : totalSteps;
  const progress = (position / totalSteps) * 100;

  const choose = useCallback(
    (optIndex: number) => {
      if (step.kind === "q") {
        const opt = quizQuestions[step.i].options[optIndex];
        if (!opt) return;
        setAnswers((prev) => prev.map((a, k) => (k === step.i ? opt.score : a)));
        // small pause so the selection is visible before moving on
        window.setTimeout(() => {
          setStep(step.i + 1 < quizQuestions.length ? { kind: "q", i: step.i + 1 } : { kind: "focus" });
        }, reduce ? 0 : 260);
      } else if (step.kind === "focus") {
        const f = focusQuestion.options[optIndex];
        if (!f) return;
        setFocus(f);
        window.setTimeout(() => setStep({ kind: "contact" }), reduce ? 0 : 260);
      }
    },
    [step, reduce]
  );

  const back = useCallback(() => {
    setStep((s) => {
      if (s.kind === "q") return s.i === 0 ? { kind: "intro" } : { kind: "q", i: s.i - 1 };
      if (s.kind === "focus") return { kind: "q", i: quizQuestions.length - 1 };
      if (s.kind === "contact") return { kind: "focus" };
      return s;
    });
  }, []);

  // Keyboard shortcuts on question screens
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (step.kind !== "q" && step.kind !== "focus") return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const k = e.key.toUpperCase();
      const byLetter = LETTERS.indexOf(k);
      const byNumber = ["1", "2", "3", "4"].indexOf(k);
      const idx = byLetter >= 0 ? byLetter : byNumber;
      if (idx >= 0) {
        e.preventDefault();
        choose(idx);
      } else if (e.key === "Backspace" || e.key === "ArrowLeft") {
        e.preventDefault();
        back();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, choose, back]);

  const setField = (f: LeadField, v: string) => {
    setForm((p) => ({ ...p, [f]: v }));
    if (errors[f]) setErrors((p) => ({ ...p, [f]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError(null);
    const check = validateLead(form);
    if (!check.ok) {
      setErrors(check.errors);
      return;
    }
    if (!idemKey.current) {
      idemKey.current =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `q-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    setSending(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...check.value,
          company: honeypot,
          source: "quiz",
          quiz: { band: band.key, score, max: QUIZ_MAX, focus },
          landingPage: `${window.location.origin}/quiz`,
          referrer: document.referrer || undefined,
          idempotencyKey: idemKey.current,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; errors?: LeadErrors; error?: string };
      if (res.ok && data.ok) {
        rememberSignUp();
        setStep({ kind: "result" });
        return;
      }
      if (data.errors) setErrors(data.errors);
      else setSendError(data.error ?? "We couldn’t save your details. Please try again.");
    } catch {
      setSendError("We couldn’t reach our server. Check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  const restart = () => {
    setAnswers(quizQuestions.map(() => null));
    setFocus(null);
    setStep({ kind: "q", i: 0 });
  };

  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -24 },
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
      };

  const stepKey = step.kind === "q" ? `q${step.i}` : step.kind;

  return (
    <div className="relative mx-auto flex w-full max-w-2xl flex-col">
      {/* Progress */}
      <div className="mb-10 flex items-center gap-4">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
          <motion.div
            className="h-full bg-gold-gradient"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close quiz"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-white/[0.03] text-ink-muted hover:text-ink"
          >
            ×
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={stepKey} {...anim}>
          {step.kind === "intro" && (
            <div>
              <p className="eyebrow">{quizIntro.eyebrow}</p>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.08]">
                {quizIntro.title}
              </h2>
              <p className="mt-5 max-w-xl text-ink-muted leading-relaxed md:text-lg">{quizIntro.body}</p>
              <button
                type="button"
                onClick={() => setStep({ kind: "q", i: 0 })}
                className="btn-primary mt-9 px-8 py-4 text-base"
              >
                {quizIntro.cta} →
              </button>
              <p className="mt-4 text-xs text-ink-faint">Takes about 2 minutes · press A–D to answer</p>
            </div>
          )}

          {(step.kind === "q" || step.kind === "focus") && (
            <QuestionScreen
              number={step.kind === "q" ? step.i + 1 : quizQuestions.length + 1}
              total={quizQuestions.length + 1}
              question={step.kind === "q" ? quizQuestions[step.i].q : focusQuestion.q}
              options={
                step.kind === "q"
                  ? quizQuestions[step.i].options.map((o) => o.label)
                  : focusQuestion.options
              }
              selected={
                step.kind === "q"
                  ? (() => {
                      const a = answers[step.i];
                      return a === null ? -1 : quizQuestions[step.i].options.findIndex((o) => o.score === a);
                    })()
                  : focus
                    ? focusQuestion.options.indexOf(focus)
                    : -1
              }
              onChoose={choose}
              onBack={back}
            />
          )}

          {step.kind === "contact" && (
            <form onSubmit={submit} noValidate>
              <p className="eyebrow">Almost done</p>
              <h2 className="mt-6 font-display text-[clamp(1.75rem,4vw,2.6rem)] leading-tight">
                Where should we send your child&apos;s result?
              </h2>
              <p className="mt-4 text-ink-muted leading-relaxed">
                Your result appears on the next screen. Our coach may follow up on
                WhatsApp to explain it — no spam, ever.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Field label="Your name" name="parentName" value={form.parentName} error={errors.parentName} onChange={setField} autoComplete="name" />
                <Field label="Your child's name" name="childName" value={form.childName} error={errors.childName} onChange={setField} autoComplete="off" />
                <Field label="Mobile (WhatsApp)" name="mobile" type="tel" value={form.mobile} error={errors.mobile} onChange={setField} autoComplete="tel" inputMode="tel" />
                <Field label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={setField} autoComplete="email" inputMode="email" />
              </div>

              {/* Honeypot — hidden from people */}
              <input
                type="text"
                name="company"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              {sendError && (
                <p role="alert" className="mt-5 rounded-xl border border-red-400/30 bg-red-400/[0.06] px-4 py-3 text-sm text-red-200">
                  {sendError}
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button type="submit" disabled={sending} className="btn-primary px-8 py-4 text-base disabled:opacity-60">
                  {sending ? "Saving…" : "See my child's result →"}
                </button>
                <button type="button" onClick={back} className="btn-ghost">
                  ← Back
                </button>
              </div>
              <p className="mt-4 text-xs text-ink-faint">
                We use your details only to share the result and next steps.
              </p>
            </form>
          )}

          {step.kind === "result" && (
            <div>
              <p className="eyebrow">Your Positivity Check result</p>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.08]">
                <span className="gold-text italic">{band.title}</span>
              </h2>

              <div className="mt-7 rounded-2xl border border-line bg-white/[0.02] p-5">
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-ink-muted">Score</span>
                  <span className="font-display text-2xl gold-text">
                    {score} <span className="text-base text-ink-faint">/ {QUIZ_MAX}</span>
                  </span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                  <div className="h-full rounded-full bg-gold-gradient" style={{ width: `${(score / QUIZ_MAX) * 100}%` }} />
                </div>
                {focus && (
                  <p className="mt-4 text-sm text-ink-muted">
                    Where you want to start: <span className="text-ink">{focus}</span>
                  </p>
                )}
              </div>

              <p className="mt-6 text-ink-muted leading-relaxed md:text-lg">{band.summary}</p>
              <p className="mt-4 text-ink leading-relaxed md:text-lg">{band.next}</p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={site.urls.booking} target="_blank" rel="noreferrer" className="btn-primary px-8 py-4 text-base">
                  Book a call →
                </a>
                <Link href="/positivity-hub" onClick={onClose} className="btn-ghost px-8 py-4 text-base">
                  Explore the Positivity Hub
                </Link>
              </div>
              <button type="button" onClick={restart} className="mt-6 text-sm text-ink-faint underline-offset-4 hover:text-ink hover:underline">
                Retake the quiz
              </button>
              <p className="mt-8 text-xs leading-relaxed text-ink-faint">
                This quiz is for awareness only. It is not a psychological assessment or diagnosis.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function QuestionScreen({
  number,
  total,
  question,
  options,
  selected,
  onChoose,
  onBack,
}: {
  number: number;
  total: number;
  question: string;
  options: string[];
  selected: number;
  onChoose: (i: number) => void;
  onBack: () => void;
}) {
  return (
    <div>
      <p className="flex items-center gap-2 text-sm text-gold">
        <span className="font-display text-base">{number}</span>
        <span aria-hidden>→</span>
        <span className="text-ink-faint">of {total}</span>
      </p>
      <h2 className="mt-4 font-display text-[clamp(1.6rem,4vw,2.5rem)] leading-tight">{question}</h2>
      <div className="mt-8 grid gap-3" role="radiogroup" aria-label={question}>
        {options.map((label, i) => {
          const isSel = selected === i;
          return (
            <button
              key={label}
              type="button"
              role="radio"
              aria-checked={isSel}
              onClick={() => onChoose(i)}
              className={cn(
                "group flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all md:px-5",
                isSel
                  ? "border-gold/60 bg-gold/[0.10] text-ink"
                  : "border-line bg-white/[0.02] text-ink hover:-translate-y-[1px] hover:border-gold/35 hover:bg-white/[0.05]"
              )}
            >
              <span
                className={cn(
                  "grid h-8 w-8 shrink-0 place-items-center rounded-lg border font-mono text-xs",
                  isSel ? "border-gold bg-gold text-black" : "border-line text-ink-muted group-hover:border-gold/40"
                )}
              >
                {LETTERS[i]}
              </span>
              <span className="leading-snug">{label}</span>
              {isSel && <span className="ml-auto text-gold" aria-hidden>✓</span>}
            </button>
          );
        })}
      </div>
      <button type="button" onClick={onBack} className="mt-8 text-sm text-ink-faint hover:text-ink">
        ← Back
      </button>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
  inputMode,
}: {
  label: string;
  name: LeadField;
  value: string;
  error?: string;
  onChange: (f: LeadField, v: string) => void;
  type?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  const id = `quiz-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm text-ink-muted">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        onChange={(e) => onChange(name, e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={cn(
          "w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-gold/60",
          error ? "border-red-400/60" : "border-line"
        )}
      />
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
