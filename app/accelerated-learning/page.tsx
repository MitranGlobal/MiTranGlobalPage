import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { coach, site } from "@/lib/site";
import {
  BONUS_PAINS,
  ENROLL,
  HERO_BADGES,
  INCLUSIONS,
  JTP_POINTS,
  OUTCOMES,
  PAINS,
  PLANS,
  REASONS,
  SKILLS,
} from "./data";
import { ModuleExplorer, TestimonialSwitcher } from "./parts";
import "./al.css";

export const metadata: Metadata = {
  title: "Accelerated Learning Methodology — MiTran Global",
  description:
    "Super-smart learning strategies for students aged 11–17: speed reading, mind mapping, memory techniques and exam skills.",
};

export default function AcceleratedLearningPage() {
  return (
    <div className="al">
      {/* ================================================================ */}
      {/*  1. HERO — split, reading-speed gauge on the right               */}
      {/* ================================================================ */}
      <section className="al-hero">
        <div className="al-hero-glow" aria-hidden />
        <div className="al-speedlines" aria-hidden>
          <span /><span /><span /><span /><span />
        </div>
        <div className="container-x al-hero-grid">
          <div className="al-hero-copy">
            <span className="al-chip">
              <span className="al-chip-dot" />
              Accelerated Learning Methodology — For Students Age 11–17
            </span>

            <h1 className="al-h1">
              Be part of the #1 Accelerated Learning course and watch your
              child <em className="al-em">flourish.</em>
            </h1>

            <p className="al-lede">
              Unlock your child&apos;s full learning potential. Why take the
              slow road? Unlock your child&apos;s learning potential with
              proven accelerated techniques!
            </p>
            <p className="al-lede-strong">
              A course that delivers super-smart strategies to learn — for
              school students aged 11–17. Boost memory, enhance focus, and
              accelerate comprehension using brain-based techniques, mind
              mapping, speed reading, and powerful recall methods.
            </p>

            <div className="al-cta-row">
              <a href={ENROLL} target="_blank" rel="noreferrer" className="al-btn al-btn-gold">
                Enroll now →
              </a>
              <a href="#curriculum" className="al-btn al-btn-ghost">
                View curriculum
              </a>
              <span className="al-reviews">
                <span className="al-stars" aria-hidden>★★★★★</span>
                <span>5 Google Reviews</span>
              </span>
            </div>

            <ul className="al-hero-badges">
              {HERO_BADGES.map((b) => (
                <li key={b.label}>
                  <span className="al-hero-badge-i" aria-hidden>{b.icon}</span>
                  <span>
                    <strong>{b.label}</strong>
                    <small>{b.sub}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="al-gauge-wrap" aria-hidden>
            <div className="al-gauge-card">
              <div className="al-gauge-top">
                <span className="al-mono">Reading speed</span>
                <span className="al-gauge-live">● Live</span>
              </div>
              <svg viewBox="0 0 300 170" className="al-gauge-svg">
                <defs>
                  <linearGradient id="al-g-arc" x1="0" x2="1">
                    <stop offset="0" stopColor="#5cc0d6" />
                    <stop offset="1" stopColor="#e9c46a" />
                  </linearGradient>
                </defs>
                <path d="M 30 150 A 120 120 0 0 1 270 150" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="14" strokeLinecap="round" />
                <path className="al-gauge-fill" d="M 30 150 A 120 120 0 0 1 270 150" fill="none" stroke="url(#al-g-arc)" strokeWidth="14" strokeLinecap="round" pathLength={100} />
                {Array.from({ length: 11 }).map((_, i) => {
                  const a = Math.PI + (i / 10) * Math.PI;
                  const x1 = 150 + Math.cos(a) * 98;
                  const y1 = 150 + Math.sin(a) * 98;
                  const x2 = 150 + Math.cos(a) * (i % 5 === 0 ? 84 : 90);
                  const y2 = 150 + Math.sin(a) * (i % 5 === 0 ? 84 : 90);
                  return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.25)" strokeWidth={i % 5 === 0 ? 2 : 1} />;
                })}
                <g className="al-gauge-needle">
                  <line x1="150" y1="150" x2="150" y2="62" stroke="#f5f4ef" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="150" cy="150" r="9" fill="#0b1220" stroke="#e9c46a" strokeWidth="3" />
                </g>
              </svg>
              <div className="al-gauge-read">
                <div>
                  <span className="al-gauge-from">250</span>
                  <span className="al-gauge-unit">wpm · before</span>
                </div>
                <span className="al-gauge-arrow">→</span>
                <div>
                  <span className="al-gauge-to">750</span>
                  <span className="al-gauge-unit">wpm · after</span>
                </div>
              </div>
            </div>

            <div className="al-float al-float-a">
              <span className="al-float-i" style={{ background: "#5cc0d6" }}>🧠</span>
              <span><strong>92%</strong><small>Recall rate</small></span>
            </div>
            <div className="al-float al-float-b">
              <span className="al-float-i" style={{ background: "#e9c46a" }}>⚡</span>
              <span><strong>3× faster</strong><small>Revision time</small></span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  2. MASTER 16 SKILLS — key-cap matrix                            */}
      {/* ================================================================ */}
      <section className="al-sec al-keys-sec">
        <div className="container-x">
          <Reveal className="al-head">
            <p className="al-eyebrow">What you&apos;ll master in this course</p>
            <h2 className="al-h2">
              16 skills your child will <em className="al-em">own for life</em>
            </h2>
          </Reveal>
          <ul className="al-keys">
            {SKILLS.map((s, i) => (
              <li key={s} className="al-key">
                <span className="al-key-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="al-key-t">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  3. CURRICULUM — module explorer                                 */}
      {/* ================================================================ */}
      <section className="al-sec al-curr" id="curriculum">
        <div className="container-x">
          <Reveal className="al-head">
            <p className="al-eyebrow">Course curriculum</p>
            <h2 className="al-h2">
              Eight modules, one complete <em className="al-em">transformation</em>
            </h2>
            <p className="al-sub">
              Step into a course that transforms the way you learn. Gain expert
              mentorship, attend exclusive live sessions, and connect with a
              community of motivated learners who push you to excel. Master
              brain-based learning techniques, memory hacks, and rapid study
              methods that make studying easier and more effective.{" "}
              <em className="al-sub-em">
                Develop real-world learning strategies in a positive,
                growth-driven environment designed for academic and personal
                success.
              </em>
            </p>
          </Reveal>
          <ModuleExplorer />
          <div className="al-center">
            <a href={ENROLL} target="_blank" rel="noreferrer" className="al-btn al-btn-gold">
              Enroll now →
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  4. THE ULTIMATE EXPERIENCE — certificate mock                   */}
      {/* ================================================================ */}
      <section className="al-cert">
        <div className="al-cert-glow" aria-hidden />
        <div className="container-x al-cert-grid">
          <Reveal>
            <p className="al-eyebrow">The ultimate experience</p>
            <h2 className="al-h2">
              Assessed, certified, and <em className="al-em">transformed</em>
            </h2>
            <p className="al-sub">
              Throughout the Accelerated Learning Methodology course,
              structured progress evaluations and self-assessments ensure
              students actively apply key techniques, leading to real and
              measurable growth. Upon successful completion, they receive an
              official course certification — recognising their dedication to
              enhanced learning strategies, cognitive development, and academic
              excellence.
            </p>
            <div className="al-cta-row">
              <a href={ENROLL} target="_blank" rel="noreferrer" className="al-btn al-btn-gold">
                Enroll now →
              </a>
            </div>
          </Reveal>

          <div className="al-certificate" aria-hidden>
            <div className="al-certificate-inner">
              <span className="al-certificate-kicker">Certificate of Completion</span>
              <span className="al-certificate-title">Accelerated Learning Methodology</span>
              <span className="al-certificate-presented">Presented to</span>
              <span className="al-certificate-name">Your Child&apos;s Name</span>
              <span className="al-certificate-line" />
              <span className="al-certificate-foot">
                <span>
                  <span className="al-certificate-sig">V. Guru</span>
                  <small>Chief Vision Officer</small>
                </span>
                <span className="al-certificate-seal">MG</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  5. INCLUSIONS — two-column spec sheet                           */}
      {/* ================================================================ */}
      <section className="al-sec al-inc">
        <div className="container-x">
          <Reveal className="al-head al-head-left">
            <p className="al-eyebrow">Everything that&apos;s included</p>
            <h2 className="al-h2">
              More than a course — a complete{" "}
              <em className="al-em">learning ecosystem</em>
            </h2>
          </Reveal>
          <dl className="al-spec">
            {INCLUSIONS.map((it, i) => (
              <div key={it.t} className="al-spec-row">
                <span className="al-spec-idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="al-spec-i" aria-hidden>{it.icon}</span>
                <div className="al-spec-body">
                  <dt>
                    {it.t}
                    <span className="al-spec-tag">{it.tag}</span>
                  </dt>
                  <dd>{it.b}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  6. TESTIMONIALS — switcher                                      */}
      {/* ================================================================ */}
      <section className="al-sec al-testi">
        <div className="container-x">
          <Reveal className="al-head">
            <p className="al-eyebrow">Testimonials</p>
            <h2 className="al-h2">
              Changing lives, one <em className="al-em">learner</em> at a time
            </h2>
          </Reveal>
          <TestimonialSwitcher />
        </div>
      </section>

      {/* ================================================================ */}
      {/*  7. OUTCOMES — level-up staircase                                */}
      {/* ================================================================ */}
      <section className="al-outcomes">
        <div className="container-x">
          <Reveal className="al-head">
            <p className="al-eyebrow">After this course</p>
            <h2 className="al-h2">
              What your child gains <em className="al-em">for life</em>
            </h2>
            <p className="al-sub">
              Every outcome is delivered through 8 brain-based modules and a
              Learning Behaviour Assessment.
            </p>
          </Reveal>
          <ol className="al-stairs">
            {OUTCOMES.map((o, i) => (
              <li key={o} className="al-stair" style={{ ["--lvl" as string]: i }}>
                <span className="al-stair-lvl">Level {i + 1}</span>
                <span className="al-stair-t">{o}</span>
                <span className="al-stair-check" aria-hidden>✓</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  8. WHO IS THIS FOR — sticky notes + solution card               */}
      {/* ================================================================ */}
      <section className="al-sec al-who">
        <div className="container-x">
          <Reveal className="al-head">
            <p className="al-eyebrow">Who is this course for?</p>
            <h2 className="al-h2">
              If your child struggles with <em className="al-em">any of these…</em>
            </h2>
            <p className="al-sub">
              This course was built for exactly this student. We meet them
              where they are and take them where they deserve to be.
            </p>
          </Reveal>

          <div className="al-who-grid">
            <ul className="al-notes">
              {PAINS.map((p, i) => (
                <li key={p} className="al-note" style={{ ["--tilt" as string]: `${[-2.2, 1.6, -1, 2.4, 1.2, -2, 2, -1.4][i]}deg` }}>
                  <span className="al-note-pin" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>

            <div className="al-solve">
              <p className="al-eyebrow al-eyebrow-teal">The solution</p>
              <h3 className="al-solve-t">
                Study <em className="al-em">smarter</em>, not harder
              </h3>
              <p className="al-solve-b">
                Accelerated Learning Methodology gives your child the
                brain-based tools, memory systems, and study strategies to
                learn faster, retain more, and perform better — in every
                subject.
              </p>
              <a href={ENROLL} target="_blank" rel="noreferrer" className="al-btn al-btn-gold">
                Enroll now — from ₹499 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  9. WHY — nine reasons, editorial columns                        */}
      {/* ================================================================ */}
      <section className="al-sec al-why">
        <div className="container-x">
          <Reveal className="al-head al-head-left">
            <p className="al-eyebrow">Why this course is a must for your child</p>
            <h2 className="al-h2">
              Nine reasons parents <em className="al-em">choose this</em>
            </h2>
          </Reveal>
          <ol className="al-reasons">
            {REASONS.map((r, i) => (
              <li key={r.t} className="al-reason">
                <span className="al-reason-n">{String(i + 1).padStart(2, "0")}</span>
                <strong>{r.t}</strong>
                <span>{r.d}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  10. BONUSES — two gift boxes                                    */}
      {/* ================================================================ */}
      <section className="al-sec al-gifts-sec">
        <div className="container-x">
          <Reveal className="al-head">
            <p className="al-eyebrow">Exclusive bonuses</p>
            <h2 className="al-h2">
              Two gifts included <em className="al-em">free</em>
            </h2>
          </Reveal>

          <div className="al-gifts">
            <article className="al-gift">
              <div className="al-gift-ribbon" aria-hidden><span>Bonus 1</span></div>
              <h3 className="al-gift-t">Unlocking Exam Success: The Missing &ldquo;Why&rdquo; Behind Studying</h3>
              <p className="al-gift-p">
                Students learn &ldquo;What to Study&rdquo; from books and
                &ldquo;How to Study&rdquo; from teachers — but the crucial
                &ldquo;Why to Study&rdquo; is often overlooked. As a parent,
                does your child:
              </p>
              <ul className="al-gift-q">
                {BONUS_PAINS.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <p className="al-gift-p al-gift-close">
                This eBook is a comprehensive guide to excelling in exams — get
                this exclusive guide as a FREE Bonus when you enrol today!
              </p>
            </article>

            <article className="al-gift">
              <div className="al-gift-ribbon" aria-hidden><span>Bonus 2</span></div>
              <h3 className="al-gift-t">Journey to Positivity Course — FREE Access</h3>
              <p className="al-gift-p">
                A life-changing gift for your child — FREE access to our
                Journey to Positivity course, an engaging transformational
                programme designed just for young minds.
              </p>
              <span className="al-gift-value">Valued at ₹2,990 · included free</span>
              <ul className="al-gift-list">
                {JTP_POINTS.map((p) => (
                  <li key={p.s}><strong>{p.s}</strong> — {p.r}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  11. PRICING                                                     */}
      {/* ================================================================ */}
      <section className="al-sec al-price" id="pricing">
        <div className="container-x">
          <Reveal className="al-head">
            <p className="al-eyebrow">Choose your learning plan</p>
            <h2 className="al-h2">
              Three plans, one <em className="al-em">goal</em>
            </h2>
            <p className="al-sub">
              All plans include our 14-day full refund guarantee. Upgrade anytime.
            </p>
          </Reveal>

          <div className="al-plans">
            {PLANS.map((p) => (
              <div key={p.tier} className={`al-plan ${p.featured ? "is-featured" : ""}`}>
                {p.featured && <span className="al-plan-pop">Most popular</span>}
                <span className="al-plan-tier">{p.tier}</span>
                <span className="al-plan-name">Accelerated Learning</span>
                <span className="al-plan-price">
                  <span className="al-plan-cur">₹</span>
                  {p.price}
                </span>
                <span className="al-plan-fee">{p.fee}</span>
                <ul className="al-plan-feats">
                  {p.feats.map((f) => (
                    <li key={f.t} className={`${f.on ? "is-on" : "is-off"} ${f.star ? "is-star" : ""}`}>
                      <span className="al-plan-ic" aria-hidden>{f.star ? "★" : f.on ? "✓" : "—"}</span>
                      <span>
                        {f.t}
                        {!f.on && <span className="al-sr"> (not included)</span>}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`al-btn al-plan-btn ${p.featured ? "al-btn-gold" : p.tier === "Premium" ? "al-btn-teal" : "al-btn-ghost"}`}
                >
                  Enroll now @ ₹{p.price}
                </a>
              </div>
            ))}
          </div>
          <p className="al-guarantee">
            🛡️ Full refund within 14 days — no questions asked. Your investment
            is completely risk-free.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  12. COACH — photo + award timeline                              */}
      {/* ================================================================ */}
      <section className="al-coach" id="coach">
        <div className="container-x al-coach-grid">
          <Reveal>
            <p className="al-eyebrow">Know your coach</p>
            <h2 className="al-h2">
              22+ years of transforming <em className="al-em">young learners</em>
            </h2>
            <p className="al-coach-desig">{coach.designation}</p>
            <ul className="al-story">
              {coach.story.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <ol className="al-awards">
              {coach.awards.map((a) => (
                <li key={a.t}>
                  <span className="al-award-y">{a.year}</span>
                  <span>
                    <strong>{a.t}</strong>
                    <small>{a.s}</small>
                  </span>
                </li>
              ))}
            </ol>

            <a href={site.urls.booking} target="_blank" rel="noreferrer" className="al-btn al-btn-gold">
              Book a one-to-one session →
            </a>
          </Reveal>

          <Reveal delay={0.1} className="al-coach-card">
            <div className="al-coach-photo">
              <Image
                src={coach.photo}
                alt={coach.photoAlt}
                width={778}
                height={778}
                sizes="(min-width: 1024px) 34vw, (min-width: 640px) 24rem, 90vw"
                className="al-coach-img"
              />
            </div>
            <div className="al-coach-name">{coach.name}</div>
            <div className="al-coach-role">{coach.designation}</div>
            <ul className="al-creds">
              {coach.creds.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  13. OVERVIEW — pull quote + prose                               */}
      {/* ================================================================ */}
      <section className="al-sec al-over">
        <div className="container-x">
          <Reveal className="al-head al-head-left">
            <p className="al-eyebrow">Overview of the course</p>
            <h2 className="al-h2">
              Everything you need to <em className="al-em">know</em>
            </h2>
          </Reveal>

          <div className="al-over-grid">
            <aside className="al-pull">
              <span className="al-pull-mark" aria-hidden>&ldquo;</span>
              <p>
                It doesn&apos;t just teach techniques — it rewires how your
                child thinks about learning itself.
              </p>
              <span className="al-pull-meta">Accelerated Learning Methodology</span>
            </aside>

            <div className="al-over-prose">
              <p>
                Want to supercharge your child&apos;s learning ability?{" "}
                <strong>Accelerated Learning Methodology</strong> is a
                game-changing course designed for children aged 11–17 to master
                the art of learning faster and smarter! With proven techniques
                in memory enhancement, speed reading, and focus improvement,
                this course empowers students to absorb information effortlessly
                and retain it longer. Through interactive lessons and
                brain-boosting strategies, your child will develop the skills
                needed to excel in academics and beyond.
              </p>
              <p>
                This course is packed with engaging activities, memory hacks,
                and smart study strategies that transform how students approach
                their education. No more cramming, no more frustration — just{" "}
                <strong>effective, enjoyable learning</strong> that produces
                real results.
              </p>
              <p>
                The Accelerated Learning Methodology course doesn&apos;t just
                teach techniques — it{" "}
                <strong>rewires how your child thinks about learning itself</strong>.
                From speed reading to superpower memory, from smart note-making
                to exam mastery, every module builds on the last to create a
                complete, confident learner.
              </p>
              <p>
                Students who complete this course don&apos;t just perform better
                academically — they develop a{" "}
                <strong>lifelong love of learning</strong> that will serve them
                in every area of life, career, and personal growth.
              </p>
              <a href={ENROLL} target="_blank" rel="noreferrer" className="al-btn al-btn-gold">
                Enroll now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  14. FINAL — gold band                                           */}
      {/* ================================================================ */}
      <section className="al-band">
        <span className="al-band-word" aria-hidden>LEARN</span>
        <div className="container-x al-band-inner">
          <h2 className="al-band-t">Ready to learn smarter?</h2>
          <p className="al-band-p">
            Join thousands of students aged 11–17 who have already unlocked
            their full learning potential with MiTran Global — from ₹499.
          </p>
          <a href={ENROLL} target="_blank" rel="noreferrer" className="al-btn al-btn-navy">
            Enroll now — risk free →
          </a>
        </div>
      </section>
    </div>
  );
}
