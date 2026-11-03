import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { coach, site } from "@/lib/site";
import {
  ENROLL,
  HERO_BADGES,
  INCLUSIONS,
  OUTCOMES,
  PAINS,
  PILLARS,
  PLANS,
  REASONS,
  SKILLS,
  TESTIMONIALS,
} from "./data";
import { BonusTabs, CurriculumRail } from "./parts";
import "./pm.css";

export const metadata: Metadata = {
  title: "Positive Mind Mastery — MiTran Global",
  description:
    "A scientifically designed mindset mastery course for students aged 11–17 to build confidence, positivity, resilience and success habits.",
};

const ORBIT_INNER = ["Confidence", "Gratitude", "Resilience", "Optimism"];
const ORBIT_OUTER = ["Self-Belief", "Focus", "Motivation", "Mindfulness", "Discipline", "Growth"];
const AV_GRAD = [
  "linear-gradient(135deg,#b58cfa,#6d4fc4)",
  "linear-gradient(135deg,#f5d17a,#c99b3a)",
  "linear-gradient(135deg,#5cc0d6,#2a6f80)",
];

export default function PositiveMindMasteryPage() {
  return (
    <div className="pm">
      {/* ================================================================ */}
      {/*  1. HERO — split, mindset orbit on the right                     */}
      {/* ================================================================ */}
      <section className="pm-hero">
        <div className="pm-hero-glow" aria-hidden />
        <div className="container-x pm-hero-grid">
          <div className="pm-hero-copy">
            <span className="pm-chip">
              <span className="pm-chip-dot" />
              Positive Mind Mastery — For Students Age 11–17
            </span>

            <h1 className="pm-h1">
              Be part of the #1 Positive Mind Mastery course and watch your
              child <em className="pm-em">flourish.</em>
            </h1>

            <p className="pm-lede">
              Raise a positive, resilient &amp; success-oriented child — the
              path to mastering positivity!
            </p>
            <p className="pm-lede-strong">
              A scientifically designed mindset mastery course to boost
              confidence, positivity, and success in your child. Trusted by
              parents, loved by students — give your child the ultimate
              advantage in life!
            </p>

            <div className="pm-cta-row">
              <a href={ENROLL} target="_blank" rel="noreferrer" className="pm-btn pm-btn-gold">
                Enroll now →
              </a>
              <a href="#curriculum" className="pm-btn pm-btn-ghost">
                View curriculum
              </a>
              <span className="pm-reviews">
                <span className="pm-stars" aria-hidden>★★★★★</span>
                <span>5 Star Google Reviews</span>
              </span>
            </div>

            <ul className="pm-hero-badges">
              {HERO_BADGES.map((b) => (
                <li key={b.label}>
                  <span className="pm-hero-badge-i" aria-hidden>{b.icon}</span>
                  <span>
                    <strong>{b.label}</strong>
                    <small>{b.sub}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pm-orbit" aria-hidden>
            <div className="pm-orbit-ring pm-orbit-ring-outer">
              {ORBIT_OUTER.map((w, i) => (
                <span key={w} className="pm-orbit-word" style={{ ["--i" as string]: i, ["--n" as string]: ORBIT_OUTER.length }}>
                  <span>{w}</span>
                </span>
              ))}
            </div>
            <div className="pm-orbit-ring pm-orbit-ring-inner">
              {ORBIT_INNER.map((w, i) => (
                <span key={w} className="pm-orbit-word" style={{ ["--i" as string]: i, ["--n" as string]: ORBIT_INNER.length }}>
                  <span>{w}</span>
                </span>
              ))}
            </div>
            <div className="pm-orbit-core">
              <span className="pm-orbit-core-k">Positive</span>
              <span className="pm-orbit-core-t">Mind</span>
            </div>

            <div className="pm-selftalk">
              <span className="pm-selftalk-old">&ldquo;I can&apos;t do this.&rdquo;</span>
              <span className="pm-selftalk-new">&ldquo;I can&apos;t do this <em>yet</em>.&rdquo;</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  2. LEARN — three joined pillar panels                           */}
      {/* ================================================================ */}
      <section className="pm-sec pm-learn" id="learn">
        <div className="container-x">
          <Reveal className="pm-head pm-head-left">
            <p className="pm-eyebrow">Here&apos;s what your child will learn — and why it matters</p>
            <h2 className="pm-h2">
              Three pillars of a <em className="pm-em">positive mind</em>
            </h2>
          </Reveal>
          <div className="pm-pillars">
            {PILLARS.map((p) => (
              <article key={p.n} className="pm-pillar" style={{ ["--c" as string]: p.c }}>
                <span className="pm-pillar-n" aria-hidden>{p.n}</span>
                <span className="pm-pillar-i" aria-hidden>{p.icon}</span>
                <h3 className="pm-pillar-t">{p.t}</h3>
                <p className="pm-pillar-b">{p.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  3. MASTER — typographic word wall                               */}
      {/* ================================================================ */}
      <section className="pm-sec pm-words-sec">
        <div className="container-x">
          <Reveal className="pm-head">
            <p className="pm-eyebrow">What you&apos;ll master in this course</p>
            <h2 className="pm-h2">
              16 life skills your child will <em className="pm-em">master</em>
            </h2>
          </Reveal>
          <ul className="pm-words">
            {SKILLS.map((s) => (
              <li key={s.s} className={`pm-word pm-word-${s.w}`}>{s.s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  4. CURRICULUM — horizontal journey rail                         */}
      {/* ================================================================ */}
      <section className="pm-sec pm-curr" id="curriculum">
        <div className="container-x">
          <Reveal className="pm-head">
            <p className="pm-eyebrow">Course curriculum</p>
            <h2 className="pm-h2">
              Nine modules, one <em className="pm-em">transformed mindset</em>
            </h2>
            <p className="pm-sub">
              Step into a course that fuels your success! Get expert
              mentorship, exclusive live events, and a network of like-minded
              go-getters who inspire you to thrive. Enjoy personalised
              guidance, lifetime learning (for Premium &amp; Ultimate members),
              and certifications that boost your journey.{" "}
              <em className="pm-sub-em">
                Plus, master real-world success strategies in a positive,
                growth-driven space designed to help you win!
              </em>
            </p>
          </Reveal>
          <CurriculumRail />
          <div className="pm-center">
            <a href={ENROLL} target="_blank" rel="noreferrer" className="pm-btn pm-btn-gold">
              Enroll now →
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  5. ASSESSMENT & CERTIFICATION — three-step stepper              */}
      {/* ================================================================ */}
      <section className="pm-cert">
        <div className="pm-cert-glow" aria-hidden />
        <div className="container-x pm-cert-inner">
          <Reveal className="pm-head">
            <p className="pm-eyebrow">Assessment &amp; certification</p>
            <h2 className="pm-h2">
              Recognised growth, <em className="pm-em">proven results</em>
            </h2>
            <p className="pm-sub">
              Throughout the course, structured progress evaluations and
              self-assessments ensure students actively apply key lessons,
              leading to real growth. Upon successful completion, they receive
              an official course certification — recognising their dedication
              to personal development, mindset transformation, and lifelong
              learning.
            </p>
          </Reveal>

          <ol className="pm-steps">
            <li className="pm-stepc">
              <span className="pm-stepc-ring"><span>📝</span></span>
              <strong>Assess</strong>
              <small>Progress evaluations &amp; self-assessments</small>
            </li>
            <li className="pm-stepc">
              <span className="pm-stepc-ring"><span>🌱</span></span>
              <strong>Apply</strong>
              <small>Key lessons practised in real life</small>
            </li>
            <li className="pm-stepc is-final">
              <span className="pm-stepc-ring"><span>🏅</span></span>
              <strong>Certify</strong>
              <small>Official course certification</small>
            </li>
          </ol>

          <div className="pm-center">
            <a href={ENROLL} target="_blank" rel="noreferrer" className="pm-btn pm-btn-gold">
              Enroll now →
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  6. INCLUSIONS — cards with a large watermark icon               */}
      {/* ================================================================ */}
      <section className="pm-sec pm-inc">
        <div className="container-x">
          <Reveal className="pm-head pm-head-left">
            <p className="pm-eyebrow">Everything that&apos;s included</p>
            <h2 className="pm-h2">
              More than a course — a complete{" "}
              <em className="pm-em">mindset ecosystem</em>
            </h2>
          </Reveal>
          <div className="pm-inc-grid">
            {INCLUSIONS.map((it, i) => (
              <article key={it.t} className="pm-inc-card">
                <span className="pm-inc-bg" aria-hidden>{it.icon}</span>
                <span className="pm-inc-n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="pm-inc-t">{it.t}</h3>
                <p className="pm-inc-b">{it.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  7. TESTIMONIALS — fanned hand of cards                          */}
      {/* ================================================================ */}
      <section className="pm-sec pm-testi">
        <div className="container-x">
          <Reveal className="pm-head">
            <p className="pm-eyebrow">Testimonials</p>
            <h2 className="pm-h2">
              Changing lives, one <em className="pm-em">mindset</em> at a time
            </h2>
          </Reveal>
          <div className="pm-fan">
            {TESTIMONIALS.map((t, i) => (
              <figure key={t.n} className={`pm-fan-card pm-fan-${i}`}>
                <div className="pm-fan-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote className="pm-fan-q">&ldquo;{t.q}&rdquo;</blockquote>
                <figcaption className="pm-fan-foot">
                  <span className="pm-fan-av" style={{ background: AV_GRAD[i] }}>{t.n.charAt(0)}</span>
                  <span>
                    <strong>{t.n}</strong>
                    <small>{t.r}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  8. OUTCOMES — lighting-up chips on a violet panel               */}
      {/* ================================================================ */}
      <section className="pm-outcomes">
        <div className="container-x">
          <div className="pm-outcomes-panel">
            <div className="pm-outcomes-copy">
              <p className="pm-eyebrow">After this course</p>
              <h2 className="pm-h2">
                What your child gains <em className="pm-em">for life</em>
              </h2>
              <p className="pm-sub">
                Every outcome is delivered through 9 powerful modules and the
                Positivity Score Assessment.
              </p>
            </div>
            <ul className="pm-glow-list">
              {OUTCOMES.map((o, i) => (
                <li key={o} style={{ ["--d" as string]: `${i * 0.45}s` }}>
                  <span className="pm-glow-check" aria-hidden>✓</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  9. WHO — inner-voice thought bubbles                            */}
      {/* ================================================================ */}
      <section className="pm-sec pm-who">
        <div className="container-x">
          <Reveal className="pm-head">
            <p className="pm-eyebrow">Who is this course for?</p>
            <h2 className="pm-h2">
              If your child struggles with <em className="pm-em">any of these…</em>
            </h2>
            <p className="pm-sub">
              This course was built for exactly this student. We meet them
              where they are and take them where they deserve to be.
            </p>
          </Reveal>
          <div className="pm-who-grid">
            <ul className="pm-bubbles">
              {PAINS.map((p) => (
                <li key={p} className="pm-bubble">
                  <span className="pm-bubble-ic" aria-hidden>💭</span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="pm-answer">
              <p className="pm-eyebrow">The solution</p>
              <h3 className="pm-answer-t">
                Build a mind that <em className="pm-em">masters positivity</em>
              </h3>
              <p className="pm-answer-b">
                Positive Mind Mastery gives your child the mindset tools,
                emotional skills, and belief systems to face any challenge with
                confidence — and come out stronger every time.
              </p>
              <a href={ENROLL} target="_blank" rel="noreferrer" className="pm-btn pm-btn-gold">
                Enroll now — from ₹499 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  10. WHY — six-step climbing ladder                              */}
      {/* ================================================================ */}
      <section className="pm-sec pm-why">
        <div className="container-x pm-why-grid">
          <Reveal className="pm-why-head">
            <p className="pm-eyebrow">Why this course is a must for your child</p>
            <h2 className="pm-h2">
              Six reasons parents <em className="pm-em">choose this</em>
            </h2>
          </Reveal>
          <ol className="pm-ladder">
            {REASONS.map((r, i) => (
              <li key={r.t} className="pm-rung" style={{ ["--s" as string]: i }}>
                <span className="pm-rung-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="pm-rung-body">
                  <strong>{r.t}</strong>
                  <span>{r.d}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  11. BONUSES — tabbed panel                                      */}
      {/* ================================================================ */}
      <section className="pm-sec pm-bonus">
        <div className="container-x">
          <Reveal className="pm-head">
            <p className="pm-eyebrow">Exclusive bonuses</p>
            <h2 className="pm-h2">
              Two gifts included <em className="pm-em">free</em>
            </h2>
          </Reveal>
          <BonusTabs />
        </div>
      </section>

      {/* ================================================================ */}
      {/*  12. PRICING                                                     */}
      {/* ================================================================ */}
      <section className="pm-sec pm-price" id="pricing">
        <div className="container-x">
          <Reveal className="pm-head">
            <p className="pm-eyebrow">Choose your learning plan</p>
            <h2 className="pm-h2">
              Three plans, one <em className="pm-em">positive mind</em>
            </h2>
            <p className="pm-sub">
              All plans include our 14-day full refund guarantee. Upgrade anytime.
            </p>
          </Reveal>
          <div className="pm-plans">
            {PLANS.map((p) => (
              <div key={p.tier} className={`pm-plan ${p.featured ? "is-featured" : ""}`}>
                {p.featured && <span className="pm-plan-pop">Most popular</span>}
                <div className="pm-plan-top">
                  <span className="pm-plan-tier">{p.tier}</span>
                  <span className="pm-plan-name">Positive Mind Mastery</span>
                  <span className="pm-plan-price">
                    <span className="pm-plan-cur">₹</span>
                    {p.price}
                  </span>
                  <span className="pm-plan-fee">{p.fee}</span>
                </div>
                <ul className="pm-plan-feats">
                  {p.feats.map((f) => (
                    <li key={f.t} className={`${f.on ? "is-on" : "is-off"} ${f.star ? "is-star" : ""}`}>
                      <span className="pm-plan-ic" aria-hidden>{f.star ? "★" : f.on ? "✓" : "—"}</span>
                      <span>
                        {f.t}
                        {!f.on && <span className="pm-sr"> (not included)</span>}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`pm-btn pm-plan-btn ${p.featured ? "pm-btn-gold" : p.tier === "Premium" ? "pm-btn-violet" : "pm-btn-ghost"}`}
                >
                  Enroll now @ ₹{p.price}
                </a>
              </div>
            ))}
          </div>
          <p className="pm-guarantee">
            🛡️ Full refund within 14 days — no questions asked. Your investment
            is completely risk-free.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  13. COACH — photo left, medal row                               */}
      {/* ================================================================ */}
      <section className="pm-coach" id="coach">
        <div className="container-x pm-coach-grid">
          <Reveal className="pm-coach-photo-wrap">
            <div className="pm-coach-photo">
              <Image
                src={coach.photo}
                alt={coach.photoAlt}
                width={778}
                height={778}
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 26rem, 90vw"
                className="pm-coach-img"
              />
              <div className="pm-coach-caption">
                <strong>{coach.name}</strong>
                <span>{coach.designation}</span>
              </div>
            </div>
            <ul className="pm-creds">
              {coach.creds.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="pm-eyebrow">Know your coach</p>
            <h2 className="pm-h2">
              22+ years of transforming <em className="pm-em">young minds</em>
            </h2>
            <p className="pm-coach-desig">{coach.designation}</p>
            <ul className="pm-story">
              {coach.story.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <ul className="pm-medals">
              {coach.awards.map((a) => (
                <li key={a.t} className="pm-medal">
                  <span className="pm-medal-i" aria-hidden>{a.icon}</span>
                  <strong>{a.t}{a.year !== "★" && ` ${a.year}`}</strong>
                  <small>{a.s}</small>
                </li>
              ))}
            </ul>
            <a href={site.urls.booking} target="_blank" rel="noreferrer" className="pm-btn pm-btn-gold">
              Book a one-to-one session →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  14. OVERVIEW — highlighted editorial columns                    */}
      {/* ================================================================ */}
      <section className="pm-sec pm-over">
        <div className="container-x">
          <Reveal className="pm-head">
            <p className="pm-eyebrow">Overview of the course</p>
            <h2 className="pm-h2">
              Everything you need to <em className="pm-em">know</em>
            </h2>
          </Reveal>
          <div className="pm-over-grid">
            <div className="pm-over-col">
              <p>
                The Positive Mind Mastery course is designed for students aged
                11–17 who want to{" "}
                <mark>develop an unstoppable, positive mindset</mark> that
                drives success in academics, relationships, and life. With nine
                powerful modules covering everything from brain science to
                belief systems, this course transforms how your child thinks,
                feels, and acts — every single day.
              </p>
              <p>
                Using NLP techniques, evidence-based psychology, and real-world
                success principles, Vidyashankar Guru has designed a curriculum
                that <mark>meets students exactly where they are</mark> and
                takes them to where they deserve to be. No fluff. No theory for
                theory&apos;s sake. Just real transformation, one module at a
                time.
              </p>
            </div>
            <div className="pm-over-col">
              <p>
                What makes Positive Mind Mastery different is that it
                doesn&apos;t just teach concepts — it{" "}
                <mark>rewires how your child thinks about themselves</mark>.
                From the Power of Brain to the Power of Belief, each module
                builds on the last to create a student who is confident,
                resilient, and purpose-driven.
              </p>
              <p>
                Parents consistently report that after completing this course,
                their children are more motivated, more focused, and more
                emotionally mature.{" "}
                <mark>The mindset shifts are visible, measurable, and lasting.</mark>
              </p>
              <a href={ENROLL} target="_blank" rel="noreferrer" className="pm-btn pm-btn-gold">
                Enroll now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  15. FINAL — gold band                                           */}
      {/* ================================================================ */}
      <section className="pm-band">
        <span className="pm-band-word" aria-hidden>POSITIVITY</span>
        <div className="container-x pm-band-inner">
          <h2 className="pm-band-t">Ready to master positivity?</h2>
          <p className="pm-band-p">
            Join thousands of students aged 11–17 who have already built an
            unstoppable, positive mindset with MiTran Global — starting at just
            ₹499.
          </p>
          <a href={ENROLL} target="_blank" rel="noreferrer" className="pm-btn pm-btn-navy">
            Enroll now — risk free →
          </a>
        </div>
      </section>
    </div>
  );
}
