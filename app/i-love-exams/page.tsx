"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/* -------------------------------------------------------------------------- */
/*  DATA                                                                       */
/* -------------------------------------------------------------------------- */

const PILLARS_3 = [
  {
    n: "01",
    icon: "🦁",
    t: "Unshakable Exam Confidence & Self-Belief",
    b: "Your child will learn proven techniques to conquer exam fear, eliminate self-doubt, and walk into every exam with calm assurance and clarity.",
    accent: "#e9c46a",
  },
  {
    n: "02",
    icon: "🧠",
    t: "Mind Reprogramming for Exam Success",
    b: "They will replace anxiety-driven thoughts with powerful affirmations, focus techniques, and emotional regulation tools to keep their energy and mindset in peak condition.",
    accent: "#b58cfa",
  },
  {
    n: "03",
    icon: "🚀",
    t: "Success-Driven Thinking & Study Habits",
    b: "Through visualisation, micro-goals, and positivity triggers, your child will discover how to stay focused, manage time, and love the process of preparation.",
    accent: "#5cc0d6",
  },
];

const MASTER_SKILLS = [
  "Mastering Exam Mindset", "Overcome Exam Fear", "Time Management for Students",
  "Goal Setting for Academic Success", "Exam & Test-Taking Strategies",
  "Managing Exam Stress & Anxiety", "Growth Mindset", "Overcoming Learning Blocks",
  "Turn Stress to Strength", "Peak Exam Performance", "Resilience", "Boosting Focus",
  "Break the Fear-of-Failure Loop", "Approach Exams as a Challenge",
  "Positive Belief", "Optimism",
];

const MODULES = [
  {
    n: "01",
    name: "Introduction",
    tag: "The Foundation of Exam Success",
    why: "Before tackling strategies and techniques, students must understand their learning potential and what it takes to thrive in exams. This module lays the groundwork.",
    keys: [
      "How exams are opportunities, not obstacles",
      "The real reason students struggle — and how to change that",
      "Understanding your learning style and study personality",
    ],
    benefit: "Students shift from fear to confidence and step into their learning journey with clarity, direction, and motivation.",
  },
  {
    n: "02",
    name: "State of Mind",
    tag: "Building a Powerful Exam Mindset",
    why: "Success in exams starts with the right attitude. A strong mindset helps students stay focused, motivated, and resilient under pressure.",
    keys: [
      "How to create a positive self-image and banish exam fear",
      "The role of affirmations, visualisation, and self-talk",
      "Training your brain to think success, not stress",
    ],
    benefit: "Students gain mental strength, emotional control, and confidence to approach studies and exams with a winning mindset.",
  },
  {
    n: "03",
    name: "Time Management",
    tag: "Learn More in Less Time",
    why: "Smart time management means less stress and better results. This module helps students plan and study efficiently — without last-minute panic.",
    keys: [
      "How to design a powerful daily & weekly study plan",
      "The myth of multitasking — and what to do instead",
      "Time-blocking and distraction-busting techniques",
    ],
    benefit: "Students learn to balance studies, activities, and rest — maximising results with smarter effort, not more hours.",
  },
  {
    n: "04",
    name: "Goal Setting",
    tag: "Study With Purpose",
    why: "Clear goals lead to focused efforts. This module empowers students to aim higher, track progress, and stay driven.",
    keys: [
      "How to set specific, measurable, and motivating goals",
      "The science of commitment and how to stick to your targets",
      "Using progress trackers and micro-wins for daily motivation",
    ],
    benefit: "Students move from confusion to clarity — knowing what to do, why they're doing it, and how close they are to their dream outcomes.",
  },
  {
    n: "05",
    name: "I Love Exams!",
    tag: "Transforming Exam Preparation into a Superpower",
    why: "Most students see exams as stressful hurdles, but this module flips that belief on its head — learning to approach exams with enthusiasm and positivity.",
    keys: [
      "Replace fear with confidence",
      "Transform pressure into peak performance",
      "Exams become opportunities, not obstacles",
    ],
    benefit: "Students don't just prepare — they master exam performance, building habits that make them smarter, faster, and more focused learners.",
  },
];

const INCLUSIONS = [
  { icon: "🎬", t: "40+ Live Video Content", b: "Five high-impact, self-paced modules packed with powerful techniques that help students study smarter, not harder. Each module develops exam confidence, boosts retention, and improves focus.", featured: true },
  { icon: "🏕️", t: "2-Day Live Camp",       b: "Exclusive two-day live training led by expert coaches. Deeper insights, real-world strategies, personalised guidance, and a certification on completion." },
  { icon: "📊", t: "Positivity Score (PST)", b: "A research-backed assessment measuring key life skills, study habits, and leadership qualities — with a personalised growth strategy." },
  { icon: "📖", t: "Free eBook",             b: "A complimentary copy of the I Love Exams eBook by Vidyashankar Guru — proven strategies to overcome anxiety and build a success mindset." },
  { icon: "🔄", t: "Free Course Updates",    b: "As we refine and expand content, you receive free updates automatically. Always the most up-to-date strategies." },
  { icon: "🛡️", t: "14-Day Refund",         b: "If the course isn't the right fit, request a full refund within 14 days — no questions asked. Completely risk-free." },
];

const TESTIMONIALS = [
  { q: "Since I started using MiTran Global, everything took a turn. I love exams, accelerated learning, positive mind mastery — all the stuff a student needs. I especially thank the whole MiTran Global team for making my life much easier.", n: "Banshika Kumari", r: "9th Grade · Jammu Sanskriti School, Jammu" },
  { q: "Working at the foundational level, the system created by Vidyashankar has instilled in Siddharth a drive for success and a belief in failure as a stepping stone. The coaching has been fundamental in shaping his trajectory.",                        n: "Raju Adnani",     r: "Father of Siddharth, 11th Grade · Dubai English School, UAE" },
  { q: "I have learned many new things from these classes. The courses made me believe exams are easy once we love the same. Positive Mind Mastery changed me from feeling negative to thinking positive. Thank you MiTran Global!",                             n: "Mahathi",         r: "8th Grade · KRM Public School, Chennai" },
];

const OUTCOMES = [
  "Replace exam fear with calm confidence",
  "Unlock hidden potential",
  "Break limiting beliefs",
  "Shape a positive mindset towards exams",
  "Gain clarity and direction",
  "Embrace growth and resilience",
  "Enhance self-belief — permanently",
];

const PAIN_POINTS = [
  "Feels anxious hearing the word \"exam\"",
  "Doubts their own ability to succeed",
  "Feels like marks define their worth",
  "Fear of failing and disappointing others",
  "Struggling academically despite effort",
  "Struggles to stay motivated to study",
  "Feels misunderstood in their academic journey",
  "Seeking direction and clarity",
];

const REASONS = [
  { t: "Transforms Exam Anxiety into Exam Confidence", d: "Helps students feel calm, clear-headed, and prepared before every test." },
  { t: "Builds a Strong Learning Mindset",             d: "Encourages growth, self-belief, and resilience in the face of academic challenges." },
  { t: "Teaches Smarter Study Techniques",             d: "Proven strategies to study less and understand more — without last-minute stress." },
  { t: "Boosts Time Management & Focus",               d: "Makes study time more effective, so your child doesn't feel overwhelmed." },
  { t: "Encourages Joyful Learning",                   d: "Shifts the narrative from \"I hate exams\" to \"I know I can handle this.\"" },
];

const BONUSES = [
  {
    n: "Bonus 1",
    t: "I Love Exams — The Book",
    lead: "The #1 reason students dislike exams: they feel like an evaluation of ability, not a tool for self-improvement.",
    body: "This book is a comprehensive guide to excelling in exams — developing the right mindset, staying composed, managing time effectively, and cultivating a positive attitude. Included FREE when you enroll today.",
  },
  {
    n: "Bonus 2",
    t: "2-Day Live Camp with Certification",
    lead: "Join an exclusive two-day live training led by expert coaches — hands-on learning, personalised guidance.",
    body: "",
    bullets: [
      { s: "Live Expert Training",        r: "Engaging sessions with top coaches" },
      { s: "Comprehensive Workbook",       r: "Exercises, activities, and reflections" },
      { s: "Personalised Guidance",        r: "Individual attention from expert mentors" },
      { s: "Official Certification",       r: "Recognised certificate on completion" },
    ],
  },
  {
    n: "Bonus 3",
    t: "Journey to Positivity — Full Course",
    lead: "FREE access to our Journey to Positivity course — a transformational programme for young minds. Valued at ₹2,990, included free.",
    body: "",
    bullets: [
      { s: "Multiple Interactive Modules",   r: "Essential life skills & success mindset" },
      { s: "Exciting Challenges & Activities", r: "Making learning fun" },
      { s: "Proven Strategies for Success",  r: "A strong, positive foundation for life" },
      { s: "Structured Step-by-Step Learning", r: "At your child's own pace" },
    ],
  },
];

type Feature = { yes: boolean; t: string; highlight?: boolean };
type Plan = {
  tier: string;
  price: string;
  fee: string;
  popular?: boolean;
  feat: Feature[];
  href: string;
  btn: string;
  style: "gold" | "ghost" | "dark";
};

const PLANS: Plan[] = [
  {
    tier: "Silver",
    price: "499",
    fee: "One-time fee",
    feat: [
      { yes: true,  t: "I Love Exams eBook" },
      { yes: true,  t: "Certificate of Completion" },
      { yes: false, t: "Video Lessons" },
      { yes: false, t: "Assessment" },
      { yes: false, t: "Live Camp" },
      { yes: false, t: "One-to-One Coaching" },
    ],
    href: "https://hub.mitranglobal.com/l/8398ed5b9d",
    btn: "Enroll @ ₹499",
    style: "ghost",
  },
  {
    tier: "Ultimate",
    price: "999",
    fee: "One-time fee · Best value",
    popular: true,
    feat: [
      { yes: true,  t: "Video Lessons" },
      { yes: true,  t: "I Love Exams eBook" },
      { yes: true,  t: "Assessment" },
      { yes: true,  t: "Resources" },
      { yes: true,  t: "Certificate of Completion" },
      { yes: true,  t: "Positivity Score" },
      { yes: true,  t: "One-to-One Coaching", highlight: true },
      { yes: true,  t: "101 Parenting Audio Lessons", highlight: true },
      { yes: true,  t: "Bonus 1: I Love Exams Book", highlight: true },
      { yes: true,  t: "Bonus 2: Live Camp", highlight: true },
      { yes: true,  t: "Bonus 3: Journey to Positivity", highlight: true },
    ],
    href: "https://hub.mitranglobal.com/l/3eabcdba43",
    btn: "Enroll @ ₹999",
    style: "gold",
  },
  {
    tier: "Premium",
    price: "899",
    fee: "One-time fee",
    feat: [
      { yes: true,  t: "Video Lessons" },
      { yes: true,  t: "I Love Exams eBook" },
      { yes: true,  t: "Assessment" },
      { yes: true,  t: "Certificate of Completion" },
      { yes: true,  t: "Positivity Score" },
      { yes: false, t: "One-to-One Coaching" },
      { yes: false, t: "Bonuses & Live Camp" },
    ],
    href: "https://hub.mitranglobal.com/l/53a0224711",
    btn: "Enroll @ ₹899",
    style: "dark",
  },
];

const REFUND_CONDS = [
  "Less than 25% of the course content has been viewed",
  "No programme assessments have been attempted",
  "The course completion certificate hasn't been downloaded",
];

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function ILoveExamsPage() {
  const [openMod, setOpenMod] = useState<number>(0);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: IL_CSS }} />

      {/* ================================================================== */}
      {/*  1. HERO                                                           */}
      {/* ================================================================== */}
      <section className="il-hero">
        <div className="il-hero-glow" aria-hidden />
        <div className="container-x">
          <div className="il-hero-grid">
            <div>
              <span className="il-hero-pill">
                <span className="il-hero-pill-dot" />
                I Love Exams · For Ages 11–17
              </span>

              <h1 className="il-h1">
                Be part of the #1{" "}
                <em className="il-gold">I Love Exams</em>{" "}
                course, and watch your child <em className="il-gold">excel.</em>
              </h1>

              <p className="il-hero-sub">
                Unlock your child&apos;s learning potential — the path to
                mastering peak exam performance. A scientifically designed
                course to help students develop exam confidence, emotional
                resilience, and top-tier preparation habits.
              </p>

              <div className="il-cta-row">
                <a href={site.urls.enroll} target="_blank" rel="noreferrer" className="il-btn il-btn-gold">
                  Enroll now →
                </a>
                <a href="#curriculum" className="il-btn il-btn-ghost">View curriculum</a>
              </div>

              <div className="il-hero-badges">
                {[
                  { i: "🎬", t: "40+ Live Videos",   s: "Self-paced modules" },
                  { i: "🏅", t: "Certification",     s: "On completion" },
                  { i: "🛡️", t: "14-Day Refund",     s: "No questions asked" },
                  { i: "🏕️", t: "2-Day Live Camp",   s: "With expert coaches" },
                ].map(b => (
                  <div key={b.t} className="il-hero-badge">
                    <div className="il-hero-badge-icon">{b.i}</div>
                    <div>
                      <div className="il-hero-badge-t">{b.t}</div>
                      <div className="il-hero-badge-s">{b.s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Exam paper visual */}
            <div className="il-hero-visual-wrap">
              <div className="il-paper">
                <div className="il-paper-lines">
                  <div className="il-paper-l" style={{ width: "88%" }} />
                  <div className="il-paper-l" style={{ width: "72%" }} />
                  <div className="il-paper-l" style={{ width: "80%" }} />
                  <div className="il-paper-l" style={{ width: "60%" }} />
                  <div className="il-paper-l" style={{ width: "74%" }} />
                </div>
                <div className="il-paper-q">
                  <div className="il-paper-qh">Q4. Confidence check</div>
                  <div className="il-paper-l" style={{ width: "90%" }} />
                  <div className="il-paper-l" style={{ width: "68%" }} />
                </div>
                <div className="il-paper-answer">
                  <div className="il-paper-answer-t">I&apos;ve got this.</div>
                  <div className="il-paper-answer-tick">✓</div>
                </div>
                <div className="il-paper-grade">A+</div>
              </div>

              <div className="il-hero-float il-hero-float-tl">
                <span className="il-hero-float-num">+47%</span>
                <span className="il-hero-float-lbl">Confidence</span>
              </div>
              <div className="il-hero-float il-hero-float-br">
                <span className="il-hero-float-num">10K+</span>
                <span className="il-hero-float-lbl">Students</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  2. WHAT WILL LEARN — 3 pillars, asymmetric bento                  */}
      {/* ================================================================== */}
      <section className="il-sec il-learn" id="learn">
        <div className="container-x">
          <div className="il-head">
            <p className="il-eyebrow">Here&apos;s what your child will learn</p>
            <h2 className="il-h2">
              Three pillars of{" "}
              <em className="il-gold">exam mastery</em>
            </h2>
          </div>

          <div className="il-learn-grid">
            {PILLARS_3.map(p => (
              <div key={p.n} className="il-learn-card" style={{ ["--il-accent" as any]: p.accent }}>
                <div className="il-learn-bignum">{p.n}</div>
                <div className="il-learn-icon">{p.icon}</div>
                <h3 className="il-learn-t">{p.t}</h3>
                <p className="il-learn-b">{p.b}</p>
                <div className="il-learn-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  3. MASTER 16 SKILLS — pill cloud                                  */}
      {/* ================================================================== */}
      <section className="il-sec il-master">
        <div className="il-master-glow" aria-hidden />
        <div className="container-x il-master-inner">
          <div className="il-head il-head-tight">
            <p className="il-eyebrow">What you&apos;ll master in this course</p>
            <h2 className="il-h2">
              16 skills your child will{" "}
              <em className="il-gold">own</em>
            </h2>
          </div>

          <div className="il-cloud">
            {MASTER_SKILLS.map((s, i) => (
              <span key={s} className="il-cloud-pill" style={{ animationDelay: `${(i * 0.15) % 2.4}s` }}>
                <span className="il-cloud-tick">✓</span>{s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  4. CURRICULUM — timeline accordion                                */}
      {/* ================================================================== */}
      <section className="il-sec il-curr" id="curriculum">
        <div className="container-x">
          <div className="il-head">
            <p className="il-eyebrow">Course curriculum</p>
            <h2 className="il-h2">
              Five modules, one complete{" "}
              <em className="il-gold">transformation</em>
            </h2>
            <p className="il-sub">
              From personalised guidance to lifetime access, this course is
              packed with tools to boost confidence, reduce stress, and ignite
              a love for learning. Your child masters real-world exam skills
              in a positive, fun-filled environment.
            </p>
          </div>

          <div className="il-timeline">
            <div className="il-timeline-rail" aria-hidden>
              <div className="il-timeline-line" />
              {MODULES.map((m, i) => (
                <button
                  key={m.n}
                  className={`il-timeline-dot ${openMod === i ? "il-timeline-dot-active" : ""}`}
                  onClick={() => setOpenMod(i)}
                  aria-label={`Open module ${m.n}: ${m.name}`}
                >
                  <span>{m.n}</span>
                </button>
              ))}
            </div>

            <div className="il-timeline-body">
              {MODULES.map((m, i) => {
                const open = openMod === i;
                return (
                  <div key={m.n} className={`il-mod ${open ? "il-mod-open" : ""}`}>
                    <button
                      className="il-mod-head"
                      onClick={() => setOpenMod(open ? -1 : i)}
                      aria-expanded={open}
                    >
                      <div>
                        <div className="il-mod-name">{m.name}</div>
                        <div className="il-mod-tag">{m.tag}</div>
                      </div>
                      <span className="il-mod-arrow" aria-hidden>{open ? "−" : "+"}</span>
                    </button>
                    <div className="il-mod-body">
                      <p className="il-mod-why">{m.why}</p>
                      <div className="il-mod-keys">
                        {m.keys.map(k => (
                          <div key={k} className="il-mod-key">
                            <span className="il-mod-key-arrow">→</span>{k}
                          </div>
                        ))}
                      </div>
                      <p className="il-mod-benefit">{m.benefit}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="il-curr-cta">
            <a href={site.urls.enroll} target="_blank" rel="noreferrer" className="il-btn il-btn-gold">
              Enroll now →
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  5. CERTIFICATION — dark hero + medallion                          */}
      {/* ================================================================== */}
      <section className="il-cert">
        <div className="il-cert-halo" aria-hidden />
        <div className="il-cert-halo il-cert-halo-2" aria-hidden />
        <div className="container-x il-cert-inner">
          <div className="il-medallion" aria-hidden>
            <svg viewBox="0 0 200 200" width="180" height="180">
              <defs>
                <linearGradient id="il-med-g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#f5d17a" />
                  <stop offset="0.6" stopColor="#e9c46a" />
                  <stop offset="1" stopColor="#c99b3a" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="82" fill="none" stroke="url(#il-med-g)" strokeWidth="3" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="url(#il-med-g)" strokeWidth="1" opacity="0.5" />
              <text x="100" y="86" textAnchor="middle" fill="#f5d17a" fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="3">CERTIFIED</text>
              <text x="100" y="112" textAnchor="middle" fill="#fff" fontFamily="Georgia, serif" fontSize="30" fontStyle="italic">MG</text>
              <text x="100" y="130" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontFamily="ui-monospace, monospace" fontSize="7" letterSpacing="2">MITRAN GLOBAL</text>
              {/* ribbon */}
              <path d="M 65 165 L 100 145 L 135 165 L 128 195 L 100 175 L 72 195 Z" fill="#c99b3a" />
              <path d="M 65 165 L 100 145 L 135 165 L 100 175 Z" fill="#e9c46a" />
            </svg>
          </div>

          <p className="il-eyebrow il-eyebrow-center">Assessment &amp; Certification</p>
          <h2 className="il-h2 il-h2-center">
            Recognised growth,{" "}
            <em className="il-gold">proven results</em>
          </h2>
          <p className="il-sub il-sub-center">
            Structured progress evaluations and self-assessments ensure students
            actively apply key lessons, leading to real growth. On completion,
            they receive an official course certification — recognising their
            dedication to personal development, mindset transformation, and
            lifelong learning.
          </p>
          <div className="il-cta-row il-cta-row-center">
            <a href={site.urls.enroll} target="_blank" rel="noreferrer" className="il-btn il-btn-gold">
              Enroll now →
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  6. INCLUSIONS — bento grid                                        */}
      {/* ================================================================== */}
      <section className="il-sec il-inc">
        <div className="container-x">
          <div className="il-head">
            <p className="il-eyebrow">Everything that&apos;s included</p>
            <h2 className="il-h2">
              More than a course — a complete{" "}
              <em className="il-gold">ecosystem</em>
            </h2>
          </div>

          <div className="il-bento">
            {INCLUSIONS.map((it, i) => (
              <div key={it.t} className={`il-bento-card ${it.featured ? "il-bento-hero" : ""} il-bento-${i}`}>
                <div className="il-bento-icon">{it.icon}</div>
                <h3 className="il-bento-t">{it.t}</h3>
                <p className="il-bento-b">{it.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  7. TESTIMONIALS — featured centre + 2 side                        */}
      {/* ================================================================== */}
      <section className="il-sec il-testi">
        <div className="container-x">
          <div className="il-head">
            <p className="il-eyebrow">What families say</p>
            <h2 className="il-h2">
              Changing lives, one{" "}
              <em className="il-gold">mindset</em> at a time.
            </h2>
          </div>

          <div className="il-testi-stage">
            <div className="il-testi-card il-testi-side">
              <div className="il-testi-stars">★★★★★</div>
              <p className="il-testi-q">{TESTIMONIALS[0].q}</p>
              <div className="il-testi-foot">
                <span className="il-testi-av" style={{ background: "linear-gradient(135deg,#5cc0d6,#2a6f80)" }}>
                  {TESTIMONIALS[0].n.charAt(0)}
                </span>
                <div>
                  <div className="il-testi-n">{TESTIMONIALS[0].n}</div>
                  <div className="il-testi-r">{TESTIMONIALS[0].r}</div>
                </div>
              </div>
            </div>

            <div className="il-testi-card il-testi-featured">
              <div className="il-testi-quote-mark">&ldquo;</div>
              <div className="il-testi-stars">★★★★★</div>
              <p className="il-testi-q">{TESTIMONIALS[1].q}</p>
              <div className="il-testi-foot">
                <span className="il-testi-av" style={{ background: "linear-gradient(135deg,#f5d17a,#c99b3a)" }}>
                  {TESTIMONIALS[1].n.charAt(0)}
                </span>
                <div>
                  <div className="il-testi-n">{TESTIMONIALS[1].n}</div>
                  <div className="il-testi-r">{TESTIMONIALS[1].r}</div>
                </div>
              </div>
            </div>

            <div className="il-testi-card il-testi-side">
              <div className="il-testi-stars">★★★★★</div>
              <p className="il-testi-q">{TESTIMONIALS[2].q}</p>
              <div className="il-testi-foot">
                <span className="il-testi-av" style={{ background: "linear-gradient(135deg,#b58cfa,#7a5ad1)" }}>
                  {TESTIMONIALS[2].n.charAt(0)}
                </span>
                <div>
                  <div className="il-testi-n">{TESTIMONIALS[2].n}</div>
                  <div className="il-testi-r">{TESTIMONIALS[2].r}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  8. OUTCOMES — split with receipt-style checklist                  */}
      {/* ================================================================== */}
      <section className="il-outcomes">
        <div className="container-x il-outcomes-grid">
          <div>
            <p className="il-eyebrow">After this course</p>
            <h2 className="il-h2">
              What your child gains{" "}
              <em className="il-gold">for life</em>
            </h2>
            <p className="il-sub">
              Every outcome is backed by our Positivity Framework™ and
              delivered through 40+ video lessons and live coaching.
            </p>
          </div>

          <div className="il-receipt">
            <div className="il-receipt-head">
              <span className="il-receipt-code">MG-24 · OUTCOMES</span>
              <span className="il-receipt-x">×{OUTCOMES.length}</span>
            </div>
            {OUTCOMES.map((o, i) => (
              <div key={o} className="il-receipt-row">
                <span className="il-receipt-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="il-receipt-t">{o}</span>
                <span className="il-receipt-tick">✓</span>
              </div>
            ))}
            <div className="il-receipt-foot">
              <span>Delivered</span>
              <span className="il-receipt-thanks">— for life</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  9. WHO IS THIS FOR — pain vs. solution                            */}
      {/* ================================================================== */}
      <section className="il-sec il-who">
        <div className="container-x">
          <div className="il-head">
            <p className="il-eyebrow">Who is this course for?</p>
            <h2 className="il-h2">
              If your child struggles with{" "}
              <em className="il-gold">any of these…</em>
            </h2>
          </div>

          <div className="il-who-grid">
            <div className="il-who-pain">
              {PAIN_POINTS.map(p => (
                <div key={p} className="il-who-pain-row">
                  <span className="il-who-x">✗</span>{p}
                </div>
              ))}
            </div>

            <div className="il-who-cta">
              <div className="il-who-cta-glow" aria-hidden />
              <div className="il-who-cta-inner">
                <p className="il-eyebrow il-eyebrow-onwarm">The Solution</p>
                <h3 className="il-who-cta-t">
                  Turn every obstacle into{" "}
                  <em className="il-gold-warm">exam power.</em>
                </h3>
                <p className="il-who-cta-b">
                  I Love Exams gives your child the mindset tools, study
                  systems, and emotional resilience to face any exam with
                  confidence — and actually enjoy the process.
                </p>
                <a href={site.urls.enroll} target="_blank" rel="noreferrer" className="il-btn il-btn-dark">
                  Enroll now — from ₹499 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  10. WHY THIS COURSE — reasons + stat block                         */}
      {/* ================================================================== */}
      <section className="il-sec il-why">
        <div className="container-x il-why-grid">
          <div>
            <p className="il-eyebrow">Why parents choose this</p>
            <h2 className="il-h2">
              Five reasons families{" "}
              <em className="il-gold">choose I Love Exams</em>
            </h2>
            <p className="il-sub">
              Trusted by parents, appreciated by students — this is your
              child&apos;s edge in a high-pressure academic world.
            </p>

            <div className="il-reasons">
              {REASONS.map((r, i) => (
                <div key={r.t} className="il-reason">
                  <div className="il-reason-n">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <div className="il-reason-t">{r.t}</div>
                    <div className="il-reason-d">{r.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="il-stat">
            <div className="il-stat-num">10K+</div>
            <div className="il-stat-lbl">Students Transformed</div>
            <p className="il-stat-quote">
              &ldquo;A positive teen today, a confident leader tomorrow.&rdquo;
            </p>
            <div className="il-stat-rows">
              <div className="il-stat-row">
                <span>Nationalities</span>
                <strong>40+</strong>
              </div>
              <div className="il-stat-row">
                <span>Google Rating</span>
                <strong>5 / 5 ★</strong>
              </div>
              <div className="il-stat-row">
                <span>Refund Policy</span>
                <strong>14 days</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  11. BONUSES — wide horizontal cards                                */}
      {/* ================================================================== */}
      <section className="il-sec il-bonus">
        <div className="container-x">
          <div className="il-head">
            <p className="il-eyebrow">Exclusive bonuses</p>
            <h2 className="il-h2">
              Three gifts,{" "}
              <em className="il-gold">included free</em>
            </h2>
          </div>

          <div className="il-bonus-list">
            {BONUSES.map(b => (
              <div key={b.n} className="il-bonus-card">
                <div className="il-bonus-side">
                  <span className="il-bonus-badge">{b.n}</span>
                </div>
                <div className="il-bonus-body">
                  <h3 className="il-bonus-t">{b.t}</h3>
                  {b.lead && <p className="il-bonus-lead">{b.lead}</p>}
                  {b.body && <p className="il-bonus-p">{b.body}</p>}
                  {b.bullets && (
                    <ul className="il-bonus-ul">
                      {b.bullets.map(bl => (
                        <li key={bl.s}>
                          <strong>{bl.s}</strong>
                          <span> — {bl.r}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  12. PRICING                                                        */}
      {/* ================================================================== */}
      <section className="il-sec il-price" id="pricing">
        <div className="container-x">
          <div className="il-head">
            <p className="il-eyebrow">Choose your learning plan</p>
            <h2 className="il-h2">
              Three plans, one{" "}
              <em className="il-gold">goal</em>
            </h2>
            <p className="il-sub">
              All plans include our 14-day full refund guarantee. Upgrade
              anytime.
            </p>
          </div>

          <div className="il-plans">
            {PLANS.map(p => (
              <div key={p.tier} className={`il-plan ${p.popular ? "il-plan-featured" : ""}`}>
                {p.popular && <div className="il-plan-ribbon">Most Popular</div>}
                <div className="il-plan-tier">{p.tier}</div>
                <div className="il-plan-name">I Love Exams</div>
                <div className="il-plan-price">
                  <span className="il-plan-cur">₹</span>
                  <span className="il-plan-amt">{p.price}</span>
                </div>
                <div className="il-plan-fee">{p.fee}</div>
                <div className="il-plan-div" />
                <ul className="il-plan-feat">
                  {p.feat.map((f, i) => (
                    <li key={i} className={`${f.yes ? "il-yes" : "il-no"} ${f.highlight ? "il-hl" : ""}`}>
                      <span className="il-plan-pfi">{f.highlight ? "★" : f.yes ? "✓" : "—"}</span>
                      {f.t}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`il-btn ${p.style === "gold" ? "il-btn-gold" : p.style === "ghost" ? "il-btn-ghost" : "il-btn-dark"} il-plan-cta`}
                >
                  {p.btn}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  13. KNOW YOUR COACH                                                */}
      {/* ================================================================== */}
      <section className="il-coach" id="coach">
        <div className="container-x il-coach-grid">
          <div>
            <p className="il-eyebrow">Know your coach</p>
            <h2 className="il-h2">
              Two decades of transforming{" "}
              <em className="il-gold">young minds</em>
            </h2>
            <p className="il-sub">
              Vidyashankar Guru has two decades of experience training students,
              teachers, and parents from 40+ nationalities. Co-Founder &amp;
              Chief Vision Officer of MiTran Global, TedX speaker, and author
              of &ldquo;One Untold Secret of Success&rdquo;, &ldquo;Sweep Through Your
              Interviews&rdquo;, &ldquo;Be a Champ&rdquo;, and &ldquo;101 Secrets of Effective
              Parenting&rdquo;.
            </p>

            <div className="il-coach-awards">
              {[
                { i: "🏆", t: "Indian Achievers Award for Industrial Excellence 2011", s: "Indian Economic Development & Research Association" },
                { i: "🏅", t: "Edupreneur of the Year 2012",                             s: "Times Group" },
                { i: "🌟", t: "Lifetime Achievement Award",                              s: "Global Education Conclave" },
              ].map(a => (
                <div key={a.t} className="il-coach-award">
                  <span className="il-coach-award-i">{a.i}</span>
                  <div>
                    <strong>{a.t}</strong>
                    <span> — {a.s}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={site.urls.calendly}
              target="_blank"
              rel="noreferrer"
              className="il-btn il-btn-gold il-coach-cta"
            >
              Book a one-to-one session →
            </a>
          </div>

          <div className="il-coach-card">
            <div className="il-coach-avatar" aria-hidden>V</div>
            <div className="il-coach-name">Vidyashankar Guru</div>
            <div className="il-coach-role">Co-Founder &amp; Chief Vision Officer</div>
            <div className="il-coach-creds">
              {["NLP Practitioner", "Teen Psychology", "40+ Nationalities", "TedX Speaker", "5★ Rated"].map(c => (
                <span key={c} className="il-cred">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  14. COURSE OVERVIEW — editorial two-column                        */}
      {/* ================================================================== */}
      <section className="il-sec il-over">
        <div className="container-x">
          <div className="il-head">
            <p className="il-eyebrow">Overview of the course</p>
            <h2 className="il-h2">
              Everything you need to{" "}
              <em className="il-gold">know</em>
            </h2>
          </div>

          <div className="il-over-grid">
            <div className="il-over-col">
              <p className="il-over-p">
                <span className="il-drop">T</span>he I Love Exams course is
                designed for students aged 11–17 to{" "}
                <strong>transform exam fear into exam power.</strong> With
                proven techniques in mindset, focus, and emotional regulation,
                this programme helps students overcome anxiety and approach
                studies with a calm, strategic mindset.
              </p>
              <p className="il-over-p">
                Through engaging tools and reflective activities, your child
                will learn how to manage pressure, stay motivated, and give
                their best — every single time. In the course, students explore{" "}
                <strong>
                  memory tricks, confidence boosters, and emotional-clarity
                  tools
                </strong>{" "}
                that make prep uplifting rather than draining.
              </p>
            </div>
            <div className="il-over-col">
              <p className="il-over-p">
                <span className="il-drop">I</span> Love Exams isn&apos;t just
                about study tips — it&apos;s about{" "}
                <strong>changing the way students think about exams.</strong>{" "}
                The course helps your child replace fear with confidence,
                self-doubt with clarity, and pressure with purpose.
              </p>
              <p className="il-over-p">
                The future belongs to learners who can handle challenges with
                resilience and positivity — and this course builds exactly that
                mindset.
              </p>
              <a
                href={site.urls.enroll}
                target="_blank"
                rel="noreferrer"
                className="il-btn il-btn-gold il-over-cta"
              >
                Enroll now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  15. REFUND POLICY                                                  */}
      {/* ================================================================== */}
      <section className="il-sec il-refund">
        <div className="container-x">
          <div className="il-head">
            <p className="il-eyebrow">Refund policy</p>
            <h2 className="il-h2">
              Your investment is{" "}
              <em className="il-gold">completely protected</em>
            </h2>
          </div>

          <div className="il-refund-grid">
            <div>
              <p className="il-sub">
                We believe in delivering high-quality learning experiences that
                genuinely benefit our students. If the course isn&apos;t the
                right fit, we offer a hassle-free, no-risk refund. You&apos;re
                eligible for a full refund within 14 days if:
              </p>
              <div className="il-refund-conds">
                {REFUND_CONDS.map(c => (
                  <div key={c} className="il-refund-cond">
                    <span className="il-refund-tick">✓</span>{c}
                  </div>
                ))}
              </div>
              <p className="il-refund-note">
                Simply reach out and we&apos;ll process your refund — quick and
                easy. We&apos;re committed to helping you grow, and our
                risk-free approach ensures you only continue if you truly find
                value.
              </p>
            </div>

            <div className="il-guarantee">
              <div className="il-guarantee-14">14</div>
              <div className="il-guarantee-lbl">Day money-back guarantee</div>
              <p className="il-guarantee-txt">
                Full refund within 14 days. No questions asked. Your
                child&apos;s growth is our commitment.
              </p>
              <a
                href={site.urls.enroll}
                target="_blank"
                rel="noreferrer"
                className="il-btn il-btn-gold il-guarantee-cta"
              >
                Enroll risk-free →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  FINAL CTA                                                          */}
      {/* ================================================================== */}
      <section className="il-sec">
        <div className="container-x">
          <div className="il-final">
            <div className="il-final-glow" aria-hidden />
            <div className="il-final-inner">
              <p className="il-eyebrow il-eyebrow-center">Ready to begin?</p>
              <h2 className="il-h2 il-h2-center">
                Give your child the{" "}
                <em className="il-gold">exam-mastery mindset</em> — for life.
              </h2>
              <div className="il-cta-row il-cta-row-center">
                <a href={site.urls.enroll} target="_blank" rel="noreferrer" className="il-btn il-btn-gold">
                  Enroll now →
                </a>
                <a href={site.urls.calendly} target="_blank" rel="noreferrer" className="il-btn il-btn-ghost">
                  Book a discovery call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  CSS                                                                        */
/* -------------------------------------------------------------------------- */

const IL_CSS = `
/* ================================================================
   TOKENS
================================================================ */
:root {
  --il-bg:        #08090c;
  --il-card:      #12141a;
  --il-elev:      #171a22;
  --il-warm:      #1e1a12;
  --il-line:      rgba(255,255,255,0.08);
  --il-line-2:    rgba(255,255,255,0.14);
  --il-ink:       #f5f4ef;
  --il-ink-mute:  #a3a5ad;
  --il-ink-faint: #6b6d76;
  --il-gold:      #e9c46a;
  --il-gold-2:    #f5d17a;
  --il-gold-deep: #c99b3a;
  --il-teal:      #5cc0d6;
  --il-purple:    #b58cfa;
  --il-mono:      ui-monospace, SFMono-Regular, Menlo, monospace;
}

/* ================================================================
   COMMON
================================================================ */
.il-gold {
  background: linear-gradient(135deg, #f5d17a 0%, #e9c46a 40%, #c99b3a 100%);
  -webkit-background-clip: text;
          background-clip: text;
  color: transparent;
  font-style: italic;
}
.il-gold-warm {
  color: #4c3410;
  font-style: italic;
  font-weight: 500;
}

.il-sec {
  position: relative;
  padding: 96px 0;
  border-top: 1px solid var(--il-line);
}
@media (max-width: 700px){ .il-sec { padding: 64px 0; } }

.il-head { max-width: 780px; margin: 0 auto 56px; text-align: center; }
.il-head-tight { margin-bottom: 40px; }
.il-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--il-mono);
  font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(245,244,239,0.72);
  margin: 0;
}
.il-eyebrow::before {
  content: ""; display: inline-block;
  width: 22px; height: 1px; background: var(--il-gold);
}
.il-eyebrow-center { justify-content: center; }
.il-eyebrow-onwarm { color: rgba(30,26,18,0.7); }
.il-eyebrow-onwarm::before { background: rgba(30,26,18,0.5); }

.il-h2 {
  font-family: var(--font-display), Georgia, serif;
  font-size: clamp(2rem, 4.6vw, 3.4rem);
  line-height: 1.1; letter-spacing: -0.02em;
  margin: 20px 0 0;
  color: var(--il-ink);
  font-weight: 500;
}
.il-h2-center { text-align: center; }
.il-sub {
  margin: 20px 0 0;
  color: var(--il-ink-mute);
  line-height: 1.65;
  font-size: 17px;
}
.il-sub-center { text-align: center; max-width: 640px; margin-left: auto; margin-right: auto; }

.il-btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 8px;
  padding: 13px 22px; border-radius: 999px;
  font-size: 14px; font-weight: 500; text-decoration: none;
  transition: transform .25s ease, box-shadow .25s ease, background .25s ease, border-color .25s ease;
  cursor: pointer; border: 0;
  font-family: inherit;
  white-space: nowrap;
}
.il-btn-gold {
  background: linear-gradient(135deg, #f5d17a, #e9c46a 45%, #c99b3a);
  color: #0b0f1a;
  box-shadow: 0 0 60px -12px rgba(233,196,106,0.4);
}
.il-btn-gold:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 80px -8px rgba(233,196,106,0.55);
}
.il-btn-ghost {
  border: 1px solid var(--il-line-2);
  background: rgba(255,255,255,0.02);
  color: var(--il-ink);
}
.il-btn-ghost:hover {
  border-color: rgba(255,255,255,0.28);
  background: rgba(255,255,255,0.06);
}
.il-btn-dark {
  background: #0e1220;
  color: var(--il-gold);
  border: 1px solid rgba(0,0,0,0.3);
}
.il-btn-dark:hover { background: #171d2f; transform: translateY(-1px); }

.il-cta-row {
  display: flex; flex-wrap: wrap; gap: 10px;
  margin-top: 28px;
}
.il-cta-row-center { justify-content: center; }

/* ================================================================
   1. HERO
================================================================ */
.il-hero {
  position: relative;
  padding: 140px 0 60px;
  overflow: hidden;
}
@media (max-width: 900px){ .il-hero { padding: 110px 0 40px; } }
.il-hero-glow {
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(600px 500px at 15% 30%, rgba(233,196,106,0.14), transparent 60%),
    radial-gradient(500px 400px at 85% 70%, rgba(92,192,214,0.10), transparent 60%);
}
.il-hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 56px;
  align-items: center;
}
@media (max-width: 1024px){
  .il-hero-grid { grid-template-columns: 1fr; gap: 60px; }
}

.il-hero-pill {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(233,196,106,0.10);
  color: var(--il-gold);
  border: 1px solid rgba(233,196,106,0.25);
  padding: 6px 14px; border-radius: 999px;
  font-family: var(--il-mono);
  font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
}
.il-hero-pill-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--il-gold);
  animation: il-pulse 2.4s infinite;
}
@keyframes il-pulse {
  0%,100% { opacity: 1; transform: scale(1); }
  50%     { opacity: 0.4; transform: scale(0.7); }
}

.il-h1 {
  font-family: var(--font-display), Georgia, serif;
  font-size: clamp(2.5rem, 6vw, 4.6rem);
  line-height: 1.03; letter-spacing: -0.03em;
  margin: 22px 0 0;
  color: var(--il-ink);
  font-weight: 500;
}
.il-hero-sub {
  margin: 22px 0 0;
  color: var(--il-ink-mute);
  font-size: 17px; line-height: 1.65;
  max-width: 560px;
}

.il-hero-badges {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 44px;
  padding-top: 32px;
  border-top: 1px solid var(--il-line);
  max-width: 560px;
}
@media (max-width: 500px){ .il-hero-badges { grid-template-columns: 1fr; } }
.il-hero-badge { display: flex; align-items: center; gap: 12px; }
.il-hero-badge-icon {
  width: 40px; height: 40px; border-radius: 10px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--il-line);
  display: flex; align-items: center; justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}
.il-hero-badge-t { color: var(--il-ink); font-size: 13.5px; font-weight: 500; }
.il-hero-badge-s { color: var(--il-ink-faint); font-size: 11.5px; margin-top: 2px; }

/* Exam paper visual */
.il-hero-visual-wrap {
  position: relative;
  padding: 30px;
  display: flex; align-items: center; justify-content: center;
}
.il-paper {
  position: relative;
  width: 100%; max-width: 380px;
  background: #f5f1e6;
  color: #2c2416;
  border-radius: 12px;
  padding: 32px 28px;
  box-shadow: 0 40px 80px -30px rgba(0,0,0,0.7),
              0 2px 0 rgba(255,255,255,0.4) inset;
  transform: rotate(-2deg);
  animation: il-paper-float 6s ease-in-out infinite;
}
@keyframes il-paper-float {
  0%,100% { transform: rotate(-2deg) translateY(0); }
  50%     { transform: rotate(-1.5deg) translateY(-6px); }
}
.il-paper::before {
  content: "MID-TERM · YEAR 9";
  position: absolute; top: 14px; left: 28px;
  font-family: var(--il-mono);
  font-size: 9px; letter-spacing: 0.24em;
  color: rgba(44,36,22,0.4);
}
.il-paper-lines { margin-top: 18px; display: flex; flex-direction: column; gap: 10px; }
.il-paper-l {
  height: 8px;
  background: linear-gradient(90deg, rgba(44,36,22,0.12), rgba(44,36,22,0.06));
  border-radius: 3px;
}
.il-paper-q {
  margin-top: 22px; padding-top: 18px;
  border-top: 1px dashed rgba(44,36,22,0.15);
  display: flex; flex-direction: column; gap: 10px;
}
.il-paper-qh {
  font-family: var(--font-display), Georgia, serif;
  font-size: 15px; font-weight: 600;
  color: #2c2416;
}
.il-paper-answer {
  margin-top: 18px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px;
  background: rgba(233,196,106,0.22);
  border: 1px dashed rgba(201,155,58,0.4);
  border-radius: 8px;
}
.il-paper-answer-t {
  font-family: var(--font-display), Georgia, serif;
  font-style: italic; font-size: 16px; color: #4c3410;
}
.il-paper-answer-tick {
  width: 26px; height: 26px; border-radius: 50%;
  background: var(--il-gold);
  color: #0b0f1a; font-weight: 700;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 13px;
}
.il-paper-grade {
  position: absolute; top: -20px; right: -20px;
  width: 74px; height: 74px; border-radius: 50%;
  background: radial-gradient(circle, #ff5b5b 0%, #c93434 100%);
  color: #fff;
  display: inline-flex; align-items: center; justify-content: center;
  font-family: var(--font-display), Georgia, serif;
  font-size: 32px; font-weight: 700; font-style: italic;
  box-shadow: 0 10px 30px -8px rgba(255,91,91,0.4);
  transform: rotate(15deg);
}

.il-hero-float {
  position: absolute;
  background: #ffffff; color: #0b0f1a;
  padding: 12px 16px;
  border-radius: 14px;
  display: flex; flex-direction: column; gap: 2px;
  box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5);
  animation: il-floaty 5s ease-in-out infinite;
  z-index: 2;
}
.il-hero-float-tl { top: 10px; left: 0; }
.il-hero-float-br { bottom: 10px; right: 0; animation-delay: 1.4s; }
.il-hero-float-num {
  font-family: var(--font-display), Georgia, serif;
  font-size: 22px; line-height: 1; font-weight: 600;
  color: var(--il-gold-deep);
}
.il-hero-float-lbl {
  font-size: 11px; color: #6b7280;
  font-family: var(--il-mono);
  letter-spacing: 0.14em; text-transform: uppercase;
}
@keyframes il-floaty {
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-8px); }
}
@media (max-width: 480px){
  .il-hero-float { display: none; }
  .il-paper-grade { top: -15px; right: -8px; width: 60px; height: 60px; font-size: 26px; }
}

/* ================================================================
   2. LEARN — 3 asymmetric cards
================================================================ */
.il-learn-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr 1fr;
  gap: 20px;
}
@media (max-width: 900px){ .il-learn-grid { grid-template-columns: 1fr; } }

.il-learn-card {
  position: relative;
  background: var(--il-card);
  border: 1px solid var(--il-line);
  border-radius: 22px;
  padding: 34px 28px 30px;
  overflow: hidden;
  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
}
.il-learn-card::before {
  content: "";
  position: absolute; top: -40%; right: -30%;
  width: 300px; height: 300px; border-radius: 50%;
  background: radial-gradient(circle, var(--il-accent), transparent 60%);
  opacity: 0.10;
  pointer-events: none;
  transition: opacity .3s;
}
.il-learn-card:hover {
  transform: translateY(-4px);
  border-color: var(--il-accent);
  box-shadow: 0 30px 60px -30px rgba(0,0,0,0.6);
}
.il-learn-card:hover::before { opacity: 0.18; }
.il-learn-bignum {
  position: absolute;
  top: -14px; right: 18px;
  font-family: var(--font-display), Georgia, serif;
  font-size: 120px; line-height: 1;
  color: rgba(255,255,255,0.03);
  font-weight: 500;
  pointer-events: none;
}
.il-learn-icon {
  width: 54px; height: 54px; border-radius: 14px;
  display: inline-flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--il-line);
  font-size: 26px;
  position: relative;
}
.il-learn-t {
  font-family: var(--font-display), Georgia, serif;
  font-size: 21px; font-weight: 500;
  line-height: 1.25;
  margin: 22px 0 0;
  color: var(--il-ink);
  position: relative;
}
.il-learn-b {
  margin: 12px 0 0;
  color: var(--il-ink-mute);
  font-size: 14.5px; line-height: 1.6;
  position: relative;
}
.il-learn-line {
  margin-top: 22px;
  height: 2px; width: 40px;
  background: var(--il-accent);
  border-radius: 2px;
  position: relative;
}

/* ================================================================
   3. MASTER — pill cloud
================================================================ */
.il-master {
  position: relative;
  background: linear-gradient(180deg, transparent 0%, rgba(233,196,106,0.03) 50%, transparent 100%);
  overflow: hidden;
}
.il-master-glow {
  position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(600px 300px at 50% 50%, rgba(233,196,106,0.08), transparent 65%);
}
.il-master-inner { position: relative; }
.il-cloud {
  display: flex; flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 900px;
  margin: 0 auto;
}
.il-cloud-pill {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--il-line);
  color: var(--il-ink);
  padding: 10px 18px; border-radius: 999px;
  font-size: 13.5px;
  transition: border-color .25s, box-shadow .25s, transform .25s;
  animation: il-cloud-float 4.5s ease-in-out infinite;
  cursor: default;
}
.il-cloud-pill:hover {
  border-color: rgba(233,196,106,0.5);
  box-shadow: 0 8px 24px -10px rgba(233,196,106,0.35);
  transform: translateY(-2px);
}
.il-cloud-tick {
  color: var(--il-gold);
  font-weight: 700;
  font-size: 12px;
}
@keyframes il-cloud-float {
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-4px); }
}

/* ================================================================
   4. CURRICULUM — timeline
================================================================ */
.il-curr .il-head { margin-bottom: 40px; }
.il-timeline {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 32px;
  max-width: 920px;
  margin: 0 auto;
}
@media (max-width: 700px){
  .il-timeline { grid-template-columns: 60px 1fr; gap: 20px; }
}
.il-timeline-rail {
  position: relative;
  display: flex; flex-direction: column;
  align-items: center;
  gap: 22px;
  padding-top: 6px;
}
.il-timeline-line {
  position: absolute;
  top: 24px; bottom: 24px;
  left: 50%; transform: translateX(-50%);
  width: 1px;
  background: linear-gradient(180deg, transparent, var(--il-line-2) 15%, var(--il-line-2) 85%, transparent);
}
.il-timeline-dot {
  position: relative;
  width: 48px; height: 48px; border-radius: 50%;
  background: var(--il-card);
  border: 1px solid var(--il-line-2);
  color: var(--il-ink-mute);
  font-family: var(--il-mono);
  font-size: 12px; letter-spacing: 0.08em;
  display: inline-flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: border-color .25s, background .25s, color .25s, transform .25s;
  margin-bottom: 32px;
}
.il-timeline-dot:last-of-type { margin-bottom: 0; }
.il-timeline-dot:hover {
  border-color: var(--il-gold);
  color: var(--il-ink);
}
.il-timeline-dot-active {
  background: linear-gradient(135deg, #f5d17a, #c99b3a);
  border-color: transparent;
  color: #0b0f1a;
  transform: scale(1.08);
  box-shadow: 0 0 30px -8px rgba(233,196,106,0.5);
}

.il-timeline-body { display: flex; flex-direction: column; gap: 8px; }
.il-mod {
  background: var(--il-card);
  border: 1px solid var(--il-line);
  border-radius: 14px;
  transition: border-color .3s;
}
.il-mod-open { border-color: rgba(233,196,106,0.35); }
.il-mod-head {
  width: 100%;
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 18px 22px;
  background: none;
  border: 0;
  color: var(--il-ink);
  cursor: pointer;
  font-family: inherit;
  text-align: left;
}
.il-mod-name {
  font-family: var(--font-display), Georgia, serif;
  font-size: 18px; font-weight: 500;
  color: var(--il-ink);
}
.il-mod-tag {
  font-size: 13px; color: var(--il-ink-mute);
  margin-top: 3px;
}
.il-mod-arrow {
  width: 32px; height: 32px; border-radius: 50%;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--il-line);
  color: var(--il-ink); font-size: 16px;
  display: inline-flex; align-items: center; justify-content: center;
  transition: background .25s, transform .25s;
  flex-shrink: 0;
}
.il-mod-open .il-mod-arrow {
  background: var(--il-gold); color: #0b0f1a; border-color: transparent;
}

.il-mod-body {
  max-height: 0; overflow: hidden;
  transition: max-height .4s ease;
  padding: 0 22px;
}
.il-mod-open .il-mod-body {
  max-height: 600px;
  padding: 0 22px 22px;
}
.il-mod-why { color: var(--il-ink-mute); font-size: 14.5px; line-height: 1.7; margin: 0 0 14px; }
.il-mod-keys { display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px; }
.il-mod-key { display: flex; gap: 10px; align-items: flex-start; color: var(--il-ink); font-size: 14px; line-height: 1.55; }
.il-mod-key-arrow { color: var(--il-gold); flex-shrink: 0; }
.il-mod-benefit {
  color: var(--il-gold);
  font-family: var(--font-display), Georgia, serif;
  font-style: italic; font-size: 15px;
  line-height: 1.55;
  padding-top: 14px;
  border-top: 1px solid var(--il-line);
  margin: 0;
}

.il-curr-cta { display: flex; justify-content: center; margin-top: 40px; }

/* ================================================================
   5. CERTIFICATION
================================================================ */
.il-cert {
  position: relative;
  padding: 100px 0;
  background: linear-gradient(180deg, #0d1524 0%, #0a1220 100%);
  border-top: 1px solid var(--il-line);
  overflow: hidden;
  text-align: center;
}
.il-cert-halo, .il-cert-halo-2 {
  position: absolute; top: 50%; left: 50%;
  width: 700px; height: 700px; border-radius: 50%;
  background: radial-gradient(circle, rgba(233,196,106,0.14), transparent 60%);
  transform: translate(-50%, -50%);
  animation: il-spin 30s linear infinite;
  pointer-events: none;
}
.il-cert-halo-2 {
  width: 900px; height: 900px;
  background: radial-gradient(circle, rgba(92,192,214,0.06), transparent 60%);
  animation-duration: 45s; animation-direction: reverse;
}
@keyframes il-spin { to { transform: translate(-50%, -50%) rotate(360deg); } }

.il-cert-inner { position: relative; max-width: 700px; margin: 0 auto; }
.il-medallion {
  display: inline-block;
  margin-bottom: 32px;
  animation: il-med-float 6s ease-in-out infinite;
}
@keyframes il-med-float {
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-6px); }
}

/* ================================================================
   6. INCLUSIONS — bento
================================================================ */
/* Bento layout (6-col base for clean tiling of 6 cards):
   ┌───────────┬───────────┐
   │           │     1     │
   │   HERO    ├───────────┤
   │           │     2     │
   ├─────┬─────┴─────┬─────┤
   │  3  │     4     │  5  │
   └─────┴───────────┴─────┘
*/
.il-bento {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(180px, auto);
  gap: 18px;
}
.il-bento-0 { grid-column: span 3; grid-row: span 2; }     /* HERO */
.il-bento-1 { grid-column: span 3; }
.il-bento-2 { grid-column: span 3; }
.il-bento-3 { grid-column: span 2; }
.il-bento-4 { grid-column: span 2; }
.il-bento-5 { grid-column: span 2; }
@media (max-width: 900px){
  .il-bento { grid-template-columns: 1fr; grid-auto-rows: auto; }
  .il-bento-0, .il-bento-1, .il-bento-2, .il-bento-3, .il-bento-4, .il-bento-5 {
    grid-column: auto; grid-row: auto;
  }
}
.il-bento-card {
  background: var(--il-card);
  border: 1px solid var(--il-line);
  border-radius: 20px;
  padding: 26px 24px;
  transition: transform .3s, border-color .3s, box-shadow .3s;
  display: flex; flex-direction: column;
}
.il-bento-card:hover {
  transform: translateY(-4px);
  border-color: var(--il-line-2);
  box-shadow: 0 24px 40px -24px rgba(0,0,0,0.6);
}
.il-bento-hero {
  background: linear-gradient(160deg, rgba(233,196,106,0.10) 0%, var(--il-card) 60%);
  border-color: rgba(233,196,106,0.24);
  padding: 36px 34px;
}
.il-bento-icon {
  width: 44px; height: 44px; border-radius: 12px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--il-line);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 22px;
}
.il-bento-hero .il-bento-icon {
  width: 60px; height: 60px; border-radius: 16px;
  font-size: 30px;
  background: rgba(233,196,106,0.15);
  border-color: rgba(233,196,106,0.3);
}
.il-bento-t {
  font-family: var(--font-display), Georgia, serif;
  font-size: 18px; line-height: 1.25;
  margin: 18px 0 0;
  color: var(--il-ink);
  font-weight: 500;
}
.il-bento-hero .il-bento-t { font-size: 26px; }
.il-bento-b {
  margin: 10px 0 0;
  color: var(--il-ink-mute);
  font-size: 14px; line-height: 1.6;
}
.il-bento-hero .il-bento-b { font-size: 15px; margin-top: 14px; }

/* ================================================================
   7. TESTIMONIALS — featured centre
================================================================ */
.il-testi-stage {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 20px;
  align-items: start;
}
@media (max-width: 900px){ .il-testi-stage { grid-template-columns: 1fr; } }
.il-testi-card {
  position: relative;
  background: var(--il-card);
  border: 1px solid var(--il-line);
  border-radius: 20px;
  padding: 28px 26px;
  display: flex; flex-direction: column; gap: 14px;
  transition: transform .3s ease;
}
.il-testi-side { margin-top: 24px; }
.il-testi-featured {
  background: linear-gradient(160deg, rgba(233,196,106,0.12), var(--il-card) 65%);
  border-color: rgba(233,196,106,0.35);
  box-shadow: 0 30px 60px -30px rgba(233,196,106,0.2);
  padding-top: 40px;
}
.il-testi-quote-mark {
  position: absolute;
  top: 6px; left: 22px;
  font-family: var(--font-display), Georgia, serif;
  font-size: 68px; line-height: 1;
  color: var(--il-gold);
  opacity: 0.7;
  height: 24px; overflow: hidden;
}
.il-testi-stars { color: var(--il-gold); font-size: 13px; letter-spacing: 1px; }
.il-testi-q {
  font-family: var(--font-display), Georgia, serif;
  font-style: italic; font-weight: 400;
  font-size: 15px; line-height: 1.6;
  color: var(--il-ink);
  margin: 0;
}
.il-testi-featured .il-testi-q { font-size: 17px; }
.il-testi-foot { display: flex; align-items: center; gap: 12px; margin-top: 6px; }
.il-testi-av {
  flex-shrink: 0;
  width: 42px; height: 42px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 16px;
}
.il-testi-n { color: var(--il-ink); font-size: 14px; font-weight: 500; }
.il-testi-r { color: var(--il-ink-faint); font-size: 12px; margin-top: 2px; }

/* ================================================================
   8. OUTCOMES — receipt
================================================================ */
.il-outcomes {
  position: relative;
  padding: 96px 0;
  background:
    linear-gradient(180deg, #0a1220 0%, #08090c 100%);
  border-top: 1px solid var(--il-line);
  overflow: hidden;
}
.il-outcomes::before {
  content: "";
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}
@media (max-width: 700px){ .il-outcomes { padding: 64px 0; } }
.il-outcomes-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}
@media (max-width: 900px){ .il-outcomes-grid { grid-template-columns: 1fr; gap: 40px; } }
.il-outcomes-grid .il-h2 { text-align: left; }

.il-receipt {
  background: #fbf7ee;
  color: #2c2416;
  border-radius: 4px;
  padding: 26px 24px 22px;
  font-family: var(--il-mono);
  box-shadow: 0 30px 60px -30px rgba(0,0,0,0.8);
  position: relative;
}
.il-receipt::before, .il-receipt::after {
  content: "";
  position: absolute;
  left: 0; right: 0;
  height: 10px;
  background: radial-gradient(circle at 6px 0, transparent 4px, #fbf7ee 4px) 0 0/12px 10px;
}
.il-receipt::before { top: -8px; transform: rotate(180deg); }
.il-receipt::after  { bottom: -8px; }
.il-receipt-head {
  display: flex; justify-content: space-between;
  font-size: 10.5px; letter-spacing: 0.2em; text-transform: uppercase;
  color: rgba(44,36,22,0.6);
  padding-bottom: 12px;
  border-bottom: 1px dashed rgba(44,36,22,0.25);
  margin-bottom: 14px;
}
.il-receipt-row {
  display: grid; grid-template-columns: 32px 1fr 20px;
  gap: 10px;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px dashed rgba(44,36,22,0.15);
  font-size: 13px;
}
.il-receipt-n { color: rgba(44,36,22,0.55); font-size: 11px; }
.il-receipt-t {
  color: #2c2416;
  font-family: var(--font-display), Georgia, serif;
  font-style: italic;
  font-size: 14px;
}
.il-receipt-tick { color: var(--il-gold-deep); font-weight: 700; text-align: right; }
.il-receipt-foot {
  display: flex; justify-content: space-between;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px dashed rgba(44,36,22,0.25);
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em;
  color: rgba(44,36,22,0.6);
}
.il-receipt-thanks { color: var(--il-gold-deep); font-style: italic; text-transform: none; letter-spacing: 0; font-family: var(--font-display), Georgia, serif; }

/* ================================================================
   9. WHO IS THIS FOR — pain vs solution
================================================================ */
.il-who-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}
@media (max-width: 900px){ .il-who-grid { grid-template-columns: 1fr; } }

.il-who-pain { display: flex; flex-direction: column; gap: 10px; }
.il-who-pain-row {
  display: flex; align-items: center; gap: 12px;
  background: rgba(220,60,60,0.04);
  border: 1px solid rgba(220,60,60,0.15);
  padding: 14px 18px; border-radius: 12px;
  color: var(--il-ink-mute);
  font-size: 14.5px;
  transition: border-color .2s, background .2s;
}
.il-who-pain-row:hover {
  border-color: rgba(220,60,60,0.3);
  background: rgba(220,60,60,0.07);
}
.il-who-x {
  flex-shrink: 0;
  width: 24px; height: 24px; border-radius: 50%;
  background: rgba(220,60,60,0.15);
  border: 1px solid rgba(220,60,60,0.3);
  color: #ff7070;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 700;
}

.il-who-cta {
  position: relative;
  overflow: hidden;
  background: linear-gradient(140deg, #f5d17a 0%, #e9c46a 40%, #c99b3a 100%);
  border-radius: 22px;
  padding: 40px 32px;
  color: #2c2416;
}
.il-who-cta-glow {
  position: absolute; top: -100px; right: -100px;
  width: 300px; height: 300px; border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.25), transparent 60%);
  pointer-events: none;
}
.il-who-cta-inner { position: relative; }
.il-who-cta-t {
  font-family: var(--font-display), Georgia, serif;
  font-size: clamp(1.6rem, 3vw, 2rem);
  line-height: 1.15;
  color: #2c2416;
  font-weight: 500;
  margin: 16px 0 0;
}
.il-who-cta-b {
  color: rgba(44,36,22,0.75);
  font-size: 15px; line-height: 1.6;
  margin: 14px 0 24px;
}

/* ================================================================
   10. WHY — reasons + stat
================================================================ */
.il-why-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: start;
}
@media (max-width: 900px){ .il-why-grid { grid-template-columns: 1fr; } }
.il-why-grid .il-h2 { text-align: left; }

.il-reasons { margin-top: 36px; }
.il-reason {
  display: grid; grid-template-columns: 50px 1fr;
  gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid var(--il-line);
}
.il-reason:last-child { border-bottom: 0; }
.il-reason-n {
  font-family: var(--font-display), Georgia, serif;
  font-style: italic;
  font-size: 32px;
  line-height: 1;
  color: rgba(233,196,106,0.4);
  font-weight: 500;
}
.il-reason-t { color: var(--il-ink); font-weight: 500; font-size: 15.5px; }
.il-reason-d { color: var(--il-ink-mute); font-size: 14px; line-height: 1.6; margin-top: 4px; }

.il-stat {
  background: linear-gradient(160deg, #17243a 0%, #0b1220 100%);
  border: 1px solid var(--il-line-2);
  border-radius: 22px;
  padding: 40px 32px;
  text-align: center;
  color: #fff;
}
.il-stat-num {
  font-family: var(--font-display), Georgia, serif;
  font-size: clamp(4rem, 8vw, 6.5rem);
  line-height: 1; letter-spacing: -0.04em;
  background: linear-gradient(135deg, #f5d17a, #c99b3a);
  -webkit-background-clip: text;
          background-clip: text;
  color: transparent;
  font-weight: 500;
}
.il-stat-lbl {
  font-family: var(--il-mono);
  font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(255,255,255,0.6);
  margin-top: 8px;
}
.il-stat-quote {
  font-family: var(--font-display), Georgia, serif;
  font-style: italic; font-size: 16px;
  color: rgba(255,255,255,0.85);
  margin: 20px 0 26px;
  line-height: 1.5;
}
.il-stat-rows { display: flex; flex-direction: column; gap: 8px; }
.il-stat-row {
  display: flex; justify-content: space-between;
  padding: 10px 14px;
  background: rgba(255,255,255,0.04);
  border-radius: 10px;
  font-size: 13px;
  color: rgba(255,255,255,0.7);
}
.il-stat-row strong {
  font-family: var(--font-display), Georgia, serif;
  font-weight: 500;
  color: #fff;
  font-size: 15px;
}

/* ================================================================
   11. BONUSES — wide horizontal cards
================================================================ */
.il-bonus-list { display: flex; flex-direction: column; gap: 16px; max-width: 1000px; margin: 0 auto; }
.il-bonus-card {
  display: grid;
  grid-template-columns: 180px 1fr;
  background: var(--il-card);
  border: 1px solid var(--il-line);
  border-radius: 20px;
  overflow: hidden;
  transition: border-color .3s, transform .3s;
}
.il-bonus-card:hover { border-color: rgba(233,196,106,0.4); transform: translateY(-2px); }
@media (max-width: 700px){ .il-bonus-card { grid-template-columns: 1fr; } }
.il-bonus-side {
  background: linear-gradient(160deg, rgba(233,196,106,0.14), rgba(233,196,106,0.02));
  border-right: 1px solid var(--il-line);
  padding: 28px 24px;
  display: flex; align-items: center; justify-content: center;
}
@media (max-width: 700px){
  .il-bonus-side { border-right: 0; border-bottom: 1px solid var(--il-line); padding: 18px; }
}
.il-bonus-badge {
  font-family: var(--il-mono);
  font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--il-gold);
  border: 1px solid rgba(233,196,106,0.4);
  padding: 6px 14px; border-radius: 999px;
  background: rgba(233,196,106,0.08);
  font-weight: 700;
}
.il-bonus-body { padding: 28px 32px; }
@media (max-width: 700px){ .il-bonus-body { padding: 22px; } }
.il-bonus-t {
  font-family: var(--font-display), Georgia, serif;
  font-size: 22px; font-weight: 500;
  color: var(--il-ink);
  margin: 0 0 12px;
  line-height: 1.2;
}
.il-bonus-lead { color: var(--il-ink); font-size: 14.5px; line-height: 1.6; margin: 0; }
.il-bonus-p { color: var(--il-ink-mute); font-size: 14px; line-height: 1.65; margin: 12px 0 0; }
.il-bonus-ul {
  list-style: none; padding: 0;
  margin: 16px 0 0;
  display: flex; flex-direction: column; gap: 8px;
}
.il-bonus-ul li {
  display: flex; gap: 8px;
  padding-left: 20px; position: relative;
  color: var(--il-ink-mute); font-size: 14px; line-height: 1.55;
}
.il-bonus-ul li::before {
  content: "→";
  position: absolute; left: 0; top: 0;
  color: var(--il-gold);
}
.il-bonus-ul li strong { color: var(--il-ink); font-weight: 500; }

/* ================================================================
   12. PRICING
================================================================ */
.il-plans {
  display: grid;
  grid-template-columns: 1fr 1.15fr 1fr;
  gap: 20px;
  align-items: start;
  max-width: 1100px; margin: 0 auto;
}
@media (max-width: 900px){ .il-plans { grid-template-columns: 1fr; } }
.il-plan {
  position: relative;
  background: var(--il-card);
  border: 1px solid var(--il-line);
  border-radius: 22px;
  padding: 30px 26px;
  transition: transform .3s, box-shadow .3s;
}
.il-plan:hover { transform: translateY(-4px); box-shadow: 0 24px 40px -24px rgba(0,0,0,0.6); }
.il-plan-featured {
  background: linear-gradient(160deg, #17243a 0%, #0b1220 100%);
  border-color: rgba(233,196,106,0.4);
  box-shadow: 0 30px 60px -30px rgba(233,196,106,0.2);
  padding: 40px 28px 30px;
}
.il-plan-ribbon {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
  background: linear-gradient(135deg, #f5d17a, #c99b3a);
  color: #0b0f1a;
  font-family: var(--il-mono);
  font-size: 10.5px; letter-spacing: 0.2em; text-transform: uppercase;
  font-weight: 700;
  padding: 6px 16px; border-radius: 999px;
  white-space: nowrap;
}
.il-plan-tier {
  font-family: var(--il-mono);
  font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--il-ink-faint);
}
.il-plan-name {
  font-family: var(--font-display), Georgia, serif;
  font-size: 20px; margin-top: 6px;
  color: var(--il-ink); font-weight: 500;
}
.il-plan-price { display: flex; align-items: baseline; gap: 2px; margin-top: 10px; }
.il-plan-cur { font-size: 18px; color: var(--il-gold); font-weight: 500; align-self: flex-start; margin-top: 8px; }
.il-plan-amt {
  font-family: var(--font-display), Georgia, serif;
  font-size: 50px; letter-spacing: -0.03em;
  color: var(--il-ink);
  font-weight: 500;
}
.il-plan-featured .il-plan-amt { color: var(--il-gold); }
.il-plan-fee { color: var(--il-ink-faint); font-size: 12.5px; margin-top: 4px; }
.il-plan-div { height: 1px; background: var(--il-line); margin: 22px 0 20px; }
.il-plan-featured .il-plan-div { background: rgba(255,255,255,0.10); }

.il-plan-feat { list-style: none; padding: 0; margin: 0 0 24px; display: flex; flex-direction: column; gap: 9px; }
.il-plan-feat li {
  display: flex; gap: 10px;
  font-size: 13.5px;
  color: var(--il-ink-mute);
  line-height: 1.4;
}
.il-plan-feat .il-yes { color: var(--il-ink); }
.il-plan-feat .il-no { color: var(--il-ink-faint); text-decoration: line-through; text-decoration-color: rgba(255,255,255,0.15); }
.il-plan-feat .il-hl { color: var(--il-gold); font-weight: 500; }
.il-plan-pfi { flex-shrink: 0; color: var(--il-gold); font-size: 12px; margin-top: 1px; width: 14px; text-align: center; }
.il-plan-feat .il-no .il-plan-pfi { color: rgba(255,255,255,0.15); }
.il-plan-cta { width: 100%; }

/* ================================================================
   13. COACH
================================================================ */
.il-coach {
  position: relative;
  padding: 96px 0;
  background: linear-gradient(180deg, #0b1220 0%, #0a1220 100%);
  border-top: 1px solid var(--il-line);
}
@media (max-width: 700px){ .il-coach { padding: 64px 0; } }
.il-coach-grid {
  display: grid; grid-template-columns: 1.15fr 1fr;
  gap: 60px; align-items: center;
}
@media (max-width: 900px){ .il-coach-grid { grid-template-columns: 1fr; } }
.il-coach-grid .il-h2 { text-align: left; }
.il-coach-grid .il-eyebrow { justify-content: flex-start; }

.il-coach-awards { display: flex; flex-direction: column; gap: 10px; margin-top: 28px; }
.il-coach-award {
  display: flex; gap: 12px;
  padding: 14px 16px;
  border: 1px solid var(--il-line);
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
  color: var(--il-ink-mute);
  font-size: 13.5px; line-height: 1.5;
}
.il-coach-award-i { font-size: 20px; flex-shrink: 0; }
.il-coach-award strong { color: var(--il-gold); font-weight: 500; display: block; margin-bottom: 2px; }
.il-coach-cta { margin-top: 28px; }

.il-coach-card {
  background: linear-gradient(160deg, #17243a 0%, #0b1220 100%);
  border: 1px solid var(--il-line-2);
  border-radius: 22px;
  padding: 40px 30px;
  text-align: center;
  color: #fff;
}
.il-coach-avatar {
  width: 140px; height: 140px; border-radius: 24px;
  margin: 0 auto 22px;
  background: linear-gradient(135deg, #f5d17a, #c99b3a);
  color: #0b0f1a;
  display: inline-flex; align-items: center; justify-content: center;
  font-family: var(--font-display), Georgia, serif;
  font-size: 68px; font-style: italic;
  font-weight: 500;
  box-shadow: 0 20px 40px -15px rgba(233,196,106,0.35);
}
.il-coach-name {
  font-family: var(--font-display), Georgia, serif;
  font-size: 24px; font-weight: 500;
}
.il-coach-role {
  font-family: var(--il-mono);
  font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  margin-top: 8px;
}
.il-coach-creds {
  display: flex; flex-wrap: wrap; gap: 6px;
  justify-content: center;
  margin-top: 20px;
}
.il-cred {
  font-size: 11.5px;
  padding: 5px 12px; border-radius: 999px;
  border: 1px solid rgba(233,196,106,0.3);
  color: var(--il-gold);
  background: rgba(233,196,106,0.06);
}

/* ================================================================
   14. OVERVIEW — editorial
================================================================ */
.il-over-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 48px;
  max-width: 1000px; margin: 0 auto;
}
@media (max-width: 900px){ .il-over-grid { grid-template-columns: 1fr; gap: 32px; } }
.il-over-col { display: flex; flex-direction: column; }
.il-over-p {
  color: var(--il-ink-mute);
  font-size: 15.5px; line-height: 1.75;
  margin: 0 0 18px;
}
.il-over-p:last-of-type { margin-bottom: 0; }
.il-over-p strong { color: var(--il-ink); font-weight: 500; }
.il-drop {
  float: left;
  font-family: var(--font-display), Georgia, serif;
  font-size: 54px; line-height: 0.9;
  color: var(--il-gold);
  padding-right: 10px;
  padding-top: 8px;
  font-style: italic;
  font-weight: 500;
}
.il-over-cta { margin-top: 20px; align-self: flex-start; }

/* ================================================================
   15. REFUND
================================================================ */
.il-refund-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1000px; margin: 0 auto;
  align-items: start;
}
@media (max-width: 900px){ .il-refund-grid { grid-template-columns: 1fr; } }
.il-refund-conds { display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
.il-refund-cond {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 12px 16px; border-radius: 12px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--il-line);
  color: var(--il-ink-mute);
  font-size: 14px; line-height: 1.5;
}
.il-refund-tick {
  color: var(--il-gold);
  font-weight: 700;
  flex-shrink: 0;
}
.il-refund-note {
  color: var(--il-ink-faint);
  font-size: 13.5px;
  line-height: 1.65;
  margin: 18px 0 0;
}

.il-guarantee {
  position: relative;
  background: linear-gradient(160deg, #17243a 0%, #0b1220 100%);
  border: 1px solid rgba(233,196,106,0.35);
  border-radius: 22px;
  padding: 40px 32px;
  text-align: center;
  color: #fff;
  overflow: hidden;
}
.il-guarantee::before {
  content: "";
  position: absolute; top: -100px; right: -100px;
  width: 280px; height: 280px; border-radius: 50%;
  background: radial-gradient(circle, rgba(233,196,106,0.2), transparent 60%);
  pointer-events: none;
}
.il-guarantee-14 {
  position: relative;
  font-family: var(--font-display), Georgia, serif;
  font-size: 100px; line-height: 1; letter-spacing: -0.05em;
  background: linear-gradient(135deg, #f5d17a, #c99b3a);
  -webkit-background-clip: text;
          background-clip: text;
  color: transparent;
  font-style: italic;
  font-weight: 500;
}
.il-guarantee-lbl {
  position: relative;
  font-family: var(--il-mono);
  font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  margin-top: 8px;
}
.il-guarantee-txt {
  position: relative;
  color: rgba(255,255,255,0.72);
  font-size: 14.5px; line-height: 1.6;
  margin: 18px 0 22px;
}
.il-guarantee-cta { width: 100%; }

/* ================================================================
   FINAL CTA
================================================================ */
.il-final {
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  background: linear-gradient(160deg, #17243a 0%, #0b1220 100%);
  padding: 64px 40px;
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 40px 80px -30px rgba(0,0,0,0.6);
}
.il-final-glow {
  position: absolute; top: -140px; right: -140px;
  width: 480px; height: 480px; border-radius: 50%;
  background: radial-gradient(circle, rgba(233,196,106,0.22), transparent 60%);
  pointer-events: none;
}
.il-final-inner {
  position: relative;
  max-width: 780px; margin: 0 auto; text-align: center;
}

/* ================================================================
   REDUCED MOTION
================================================================ */
@media (prefers-reduced-motion: reduce) {
  .il-paper, .il-cloud-pill, .il-hero-float, .il-medallion,
  .il-cert-halo, .il-cert-halo-2, .il-hero-pill-dot {
    animation: none !important;
    transition: none !important;
  }
}
`;
