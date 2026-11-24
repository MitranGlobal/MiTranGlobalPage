"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { vsl, vslSection } from "@/lib/hub";
import { validateLead, type LeadErrors, type LeadField } from "@/lib/lead";
import { hasSignedUp, rememberSignUp } from "@/lib/leadStorage";

/**
 * "Build confidence, strengthen your mind" with the Positivity Hub video,
 * from the Positivity Hub site. The video plays only after a short sign-up
 * (sent to ClarityConvert via /api/leads). Visitors who already signed up on
 * this device — through this popup or the quiz — play it straight away.
 */
export default function VideoSection() {
  return (
    <section id="video" className="section border-t border-line">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">A message for parents</p>
          <h2 className="mt-5 text-display-2 font-display">
            Build confidence,{" "}
            <span className="gold-text italic">strengthen your mind</span>
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-muted">{vslSection.lead}</p>
        </Reveal>

        <Reveal className="mt-12">
          <GatedVideo />
        </Reveal>

        <Reveal className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8" stagger>
          {vslSection.pillars.map((p) => (
            <div key={p.title} data-reveal-item>
              <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/30 bg-gold/[0.08] text-xl" aria-hidden>
                {p.icon}
              </span>
              <h3 className="mt-5 font-display text-xl">{p.title}</h3>
              <p className="mt-2 max-w-[34ch] leading-relaxed text-ink-muted">{p.body}</p>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <p className="mt-14 max-w-prose text-lg font-medium leading-relaxed">{vslSection.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}

type Phase = "locked" | "tap" | "playing" | "error";

function GatedVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const resumeAt = useRef(0);
  const [phase, setPhase] = useState<Phase>("locked");
  const [gateOpen, setGateOpen] = useState(false);

  // Attach the source and play inside the visitor's click (lets audio start).
  const play = () => {
    const v = video.current;
    if (!v) return;
    if (!v.getAttribute("src") || v.error) {
      const from = resumeAt.current;
      v.src = vsl.src;
      v.preload = "auto";
      if (from > 0) v.addEventListener("loadedmetadata", () => (v.currentTime = from), { once: true });
    }
    v.controls = true;
    setPhase("playing");
    v.play().catch(() => {
      v.controls = false;
      setPhase(v.error ? "error" : "tap");
    });
  };

  const request = () => {
    if (phase !== "locked" || hasSignedUp()) play();
    else setGateOpen(true);
  };

  const onWatchNow = () => {
    const rect = frame.current?.getBoundingClientRect();
    if (rect && (rect.top < 0 || rect.bottom > window.innerHeight)) {
      frame.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    request();
  };

  return (
    <div>
      <div
        ref={frame}
        className="relative aspect-video w-full overflow-hidden rounded-3xl border border-line bg-bg-card shadow-card"
      >
        {/* Shown until the poster loads */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_70%,rgba(233,196,106,0.35),transparent_70%),linear-gradient(#0e1015,#08090c)]" aria-hidden />
        <video
          ref={video}
          poster={vsl.poster}
          preload="none"
          playsInline
          controlsList="nodownload"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          onTimeUpdate={(e) => (resumeAt.current = e.currentTarget.currentTime)}
          onError={(e) => {
            if (!e.currentTarget.getAttribute("src")) return;
            e.currentTarget.controls = false;
            setPhase("error");
          }}
          aria-label={vsl.title}
          className="absolute inset-0 h-full w-full bg-transparent object-cover"
        />

        {phase !== "playing" && (
          <button
            type="button"
            onClick={request}
            className="group absolute inset-0 grid place-items-center bg-black/25 transition-colors hover:bg-black/10 focus-visible:outline-none"
            aria-label={phase === "error" ? "Connection lost. Retry the video" : `Play the video: ${vsl.title}`}
          >
            <span className="relative grid h-16 w-16 place-items-center rounded-full bg-gold-gradient text-black shadow-glow transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24">
              <span
                className="absolute inset-0 animate-ping rounded-full bg-gold/40 motion-reduce:hidden"
                style={{ animationDuration: "2.4s" }}
                aria-hidden
              />
              <svg viewBox="0 0 24 24" className="relative ml-1 h-7 w-7 sm:h-9 sm:w-9" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            {phase === "error" && (
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/80 px-4 py-2 text-sm font-medium sm:bottom-6">
                Connection lost. Tap to try again.
              </span>
            )}
          </button>
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <button type="button" onClick={onWatchNow} className="btn-primary min-h-[48px] px-8 text-base">
          ▶ {vsl.cta}
        </button>
      </div>

      <SignUpPopup
        open={gateOpen}
        onClose={() => setGateOpen(false)}
        onDone={() => {
          setGateOpen(false);
          play();
        }}
      />
    </div>
  );
}

const fields: {
  name: LeadField;
  label: string;
  type: string;
  autoComplete: string;
  inputMode?: "tel" | "email";
  placeholder: string;
}[] = [
  { name: "childName", label: "Child’s name", type: "text", autoComplete: "off", placeholder: "e.g. Aarav" },
  { name: "parentName", label: "Parent’s name", type: "text", autoComplete: "name", placeholder: "e.g. Priya Sharma" },
  { name: "mobile", label: "Mobile number", type: "tel", autoComplete: "tel", inputMode: "tel", placeholder: "e.g. 98765 43210" },
  { name: "email", label: "Email", type: "email", autoComplete: "email", inputMode: "email", placeholder: "e.g. priya@example.com" },
];

const newKey = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

function SignUpPopup({
  open,
  onClose,
  onDone,
}: {
  open: boolean;
  onClose: () => void;
  onDone: () => void;
}) {
  const reduced = useReducedMotion();
  const id = useId();
  const [values, setValues] = useState<Record<LeadField, string>>({ childName: "", parentName: "", mobile: "", email: "" });
  const [errors, setErrors] = useState<LeadErrors>({});
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");
  const honeypot = useRef<HTMLInputElement>(null);
  const firstInput = useRef<HTMLInputElement>(null);
  const attemptKey = useRef(newKey());

  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const t = window.setTimeout(() => firstInput.current?.focus(), 200);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && !saving && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [open, onClose, saving]);

  const update = (name: LeadField, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (saving) return;
    setFormError("");
    const result = validateLead(values);
    if (!result.ok) {
      setErrors(result.errors);
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          company: honeypot.current?.value ?? "",
          source: "positivity-hub-video",
          landingPage: window.location.href,
          referrer: document.referrer,
          idempotencyKey: attemptKey.current,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        rememberSignUp();
        attemptKey.current = newKey();
        onDone();
        return;
      }
      if (res.status === 422 && data.errors) setErrors(data.errors);
      else setFormError(data.error || "We couldn’t save your details. Please try again.");
    } catch {
      setFormError("We couldn’t reach the server. Check your internet connection and try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[85] overflow-y-auto bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => e.target === e.currentTarget && !saving && onClose()}
        >
          <div
            className="flex min-h-full items-center justify-center px-4 py-8"
            onMouseDown={(e) => e.target === e.currentTarget && !saving && onClose()}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${id}-title`}
              className="relative w-full max-w-[400px] rounded-3xl border border-line bg-bg-card p-6 shadow-glow sm:p-7"
              initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 12 }}
              animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 6 }}
              transition={reduced ? { duration: 0.15 } : { type: "spring", stiffness: 420, damping: 28 }}
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full text-ink-muted hover:bg-white/10 hover:text-ink"
                aria-label="Close"
              >
                ×
              </button>
              <p className="eyebrow">Positivity Hub</p>
              <h2 id={`${id}-title`} className="mt-4 font-display text-2xl">
                Almost there
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                Share a few details and the video will start right away.
              </p>

              <form className="mt-5 space-y-3" onSubmit={onSubmit} noValidate>
                {fields.map((f, i) => {
                  const err = errors[f.name];
                  const inputId = `${id}-${f.name}`;
                  return (
                    <div key={f.name}>
                      <label htmlFor={inputId} className="block text-[13px] font-medium text-ink-muted">
                        {f.label}
                      </label>
                      <input
                        ref={i === 0 ? firstInput : undefined}
                        id={inputId}
                        name={f.name}
                        type={f.type}
                        inputMode={f.inputMode}
                        autoComplete={f.autoComplete}
                        placeholder={f.placeholder}
                        value={values[f.name]}
                        onChange={(e) => update(f.name, e.target.value)}
                        aria-invalid={err ? true : undefined}
                        aria-describedby={err ? `${inputId}-error` : undefined}
                        maxLength={f.name === "email" ? 254 : 60}
                        className={`mt-1 block h-11 w-full rounded-xl border bg-bg px-3.5 text-[15px] text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-gold ${
                          err ? "border-red-400/80" : "border-line hover:border-white/25"
                        }`}
                      />
                      {err && (
                        <p id={`${inputId}-error`} className="mt-1 text-xs text-red-300">
                          {err}
                        </p>
                      )}
                    </div>
                  );
                })}

                <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor={`${id}-company`}>Company</label>
                  <input ref={honeypot} id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                {formError && (
                  <p role="alert" className="rounded-xl border border-red-400/40 bg-red-500/10 px-3 py-2 text-[13px] text-red-200">
                    {formError}
                  </p>
                )}

                <button type="submit" className="btn-primary mt-1 min-h-[46px] w-full disabled:opacity-70" disabled={saving}>
                  {saving ? "Saving…" : "Continue"}
                </button>
                <p className="text-center text-[11px] leading-relaxed text-ink-faint">
                  We’ll use these details only to share Positivity Hub information with you.
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
