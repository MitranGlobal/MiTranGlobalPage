"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { site } from "@/lib/site";

/* -------------------------------------------------------------------------- */
/*  DATA                                                                       */
/* -------------------------------------------------------------------------- */

const PILLARS = [
  { name: "Foundation",  short: "Foundation",  c: "#4fb1c8", range: "1–6"   },
  { name: "Strengthen",  short: "Strengthen",  c: "#b58cfa", range: "7–12"  },
  { name: "Elevate",     short: "Elevate",     c: "#f0a465", range: "13–18" },
  { name: "Master",      short: "Master",      c: "#e9c46a", range: "19–24" },
];

type Session = { t: string; d: string; o: string; ms?: boolean; tag?: string };

const S: Session[] = [
  // Pillar I — Foundation
  { t: "The Positivity Score",     d: "A baseline assessment that maps where your teen stands today — mindset, confidence, and emotional patterns.", o: "A personal starting point everyone agrees on.", ms: true, tag: "Kick-off" },
  { t: "Meet Your Mind",           d: "Understand how thoughts, feelings, and behaviour interact — the mechanics of a growing brain.",                 o: "Language to describe the inner world."                                                                    },
  { t: "Emotions as Signals",      d: "Reframe emotions as data. Learn to notice, name, and navigate them without being swept away.",                 o: "Faster emotional recovery under pressure."                                                                },
  { t: "Values That Anchor You",   d: "Identify the 3–5 values your teen actually lives by — the compass behind every important decision.",           o: "Decisions become easier and steadier."                                                                    },
  { t: "Strengths & Growth Zones", d: "Map the strengths to lean into and the growth zones to build up — with an honest, kind lens.",                 o: "A clear personal profile."                                                                                 },
  { t: "Foundation Milestone",     d: "Review the first six sessions and lock in the mindset shifts that will carry through the year.",                o: "Signed off: solid Foundation.", ms: true                                                                    },
  // Pillar II — Strengthen
  { t: "Growth Mindset Reset",     d: "Retire fixed self-labels. Practise the language and behaviour of a growth mindset — for real, not on posters.", o: "Willingness to try hard things.", ms: true                                                                  },
  { t: "Handling Setbacks",        d: "Build a personal recovery routine for failures, disappointments, and off-days — so they don't spiral.",         o: "Bounce-back time drops dramatically."                                                                     },
  { t: "Focus & Attention",        d: "Attention as a trainable muscle. Techniques for deep work, distraction control, and mental stamina.",           o: "Longer, deeper focus sessions."                                                                           },
  { t: "Habits That Compound",     d: "Design 2–3 tiny daily habits engineered to hold under stress and hard weeks.",                                  o: "Habits that survive real life."                                                                           },
  { t: "Time & Energy",            d: "Move from time-management to energy-management — the model students actually need at this age.",                o: "More output, less burnout."                                                                               },
  { t: "Strengthen Milestone",     d: "Consolidate the resilience toolkit and set the stage for outward-facing leadership work.",                      o: "Signed off: resilient Strengthen.", ms: true                                                              },
  // Pillar III — Elevate
  { t: "Voice & Presence",         d: "How to walk into a room, hold a conversation, and be heard — without pretending to be someone else.",           o: "Visible confidence in real settings.", ms: true                                                          },
  { t: "Speaking with Confidence", d: "Structure a message, handle nerves, and speak clearly — from classroom answers to full presentations.",         o: "Comfortable speaking to any audience."                                                                    },
  { t: "Teamwork & Collaboration", d: "The unwritten rules of group work: contributing, listening, disagreeing well, sharing credit.",                 o: "A teammate people want to work with."                                                                     },
  { t: "Leading Yourself First",   d: "Before leading others, lead yourself. Standards, ownership, and self-accountability without self-criticism.",   o: "Self-driven, no external nag needed."                                                                     },
  { t: "Feedback Without Fear",    d: "Give feedback that lands. Receive feedback without shrinking. Turn both into leverage.",                        o: "Feedback becomes a growth tool."                                                                          },
  { t: "Elevate Milestone",        d: "Bring together voice, teamwork, and self-leadership into a real-world leadership plan.",                        o: "Signed off: confident Elevate.", ms: true                                                                 },
  // Pillar IV — Master
  { t: "Learning How You Learn",   d: "Meta-learning: identify your teen's real learning style and the study patterns that actually stick.",           o: "Study time becomes far more efficient.", ms: true                                                        },
  { t: "Exam Mastery Mindset",     d: "Rewrite the emotional story around exams — from threat to challenge, from anxiety to preparation.",             o: "Exam weeks feel dramatically calmer."                                                                     },
  { t: "Study Systems That Work",  d: "Spaced repetition, active recall, and personal revision systems — tailored, not generic.",                      o: "Structured, repeatable study plan."                                                                       },
  { t: "Purpose & Direction",      d: "First honest exploration of what your teen wants to build — school, career, and beyond — without pressure.",    o: "Direction becomes personal, not imposed."                                                                 },
  { t: "Design Your Year",         d: "Turn everything into a 12-month plan: goals, milestones, review rhythm, and support system.",                   o: "A concrete, owned personal roadmap."                                                                      },
  { t: "Graduation & Vision",      d: "Celebrate the transformation, re-take the Positivity Score, and set the vision for the next chapter.",          o: "Full transformation captured and honoured.", ms: true, tag: "Grad" },
];

// Attach helpers
const sessions = S.map((s, i) => ({ ...s, n: i + 1, p: Math.floor(i / 6) }));

/* -------------------------------------------------------------------------- */
/*  GEOMETRY                                                                   */
/* -------------------------------------------------------------------------- */

const CX = 310;
const CY = 310;
const RSI = 150; // spoke inner
const RSO = 194; // spoke outer
const RN  = 214; // node ring
const RSW = 232; // sweep arc
const RA  = 262; // pillar arc
const RL  = 289; // pillar label

const rad     = (deg: number) => (deg * Math.PI) / 180;
const nodeAngle = (i: number) => -90 + i * 15;
const pt = (r: number, deg: number): [number, number] => [
  CX + r * Math.cos(rad(deg)),
  CY + r * Math.sin(rad(deg)),
];

/** Build an SVG arc "M ... A ..." path between two angles at radius r. */
function arcPath(r: number, a1: number, a2: number) {
  const [x1, y1] = pt(r, a1);
  const [x2, y2] = pt(r, a2);
  const delta = ((a2 - a1) + 360) % 360;
  const largeArc = delta > 180 ? 1 : 0;
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function PlatinumPage() {
  /* ---- Compass state ---------------------------------------------------- */
  const [cur, setCur]   = useState(0);
  const [tour, setTour] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);
  const nodeRefs = useRef<Array<SVGGElement | null>>([]);
  const tourRef  = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => { setFadeKey(k => k + 1); }, [cur]);

  useEffect(() => {
    if (!tour) return;
    tourRef.current = setInterval(() => {
      setCur(c => (c + 1) % 24);
    }, 2300);
    return () => { if (tourRef.current) clearInterval(tourRef.current); };
  }, [tour]);

  const select = useCallback((i: number, stopTour = false) => {
    setCur(i);
    if (stopTour) setTour(false);
  }, []);

  const onNodeKey = (e: React.KeyboardEvent<SVGGElement>, i: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = (i + 1) % 24;
      setCur(next);
      nodeRefs.current[next]?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (i - 1 + 24) % 24;
      setCur(prev);
      nodeRefs.current[prev]?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      select(i, true);
    }
  };

  /* ---- Derived compass values ------------------------------------------ */
  const curSession = sessions[cur];
  const curPillar  = PILLARS[curSession.p];

  const pillarArcs = useMemo(
    () =>
      PILLARS.map((_, p) => {
        // 6 nodes per pillar; span from just before first node to just after last node
        const first = p * 6;
        const last  = first + 5;
        const a1 = nodeAngle(first) - 6;
        const a2 = nodeAngle(last)  + 6;
        return arcPath(RA, a1, a2);
      }),
    []
  );

  const sweepPath = useMemo(() => {
    if (cur === 0) return "";
    return arcPath(RSW, nodeAngle(0), nodeAngle(cur));
  }, [cur]);

  /* ---------------------------------------------------------------------- */
  /*  RENDER                                                                */
  /* ---------------------------------------------------------------------- */

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PL_CSS }} />

      {/* ================================================================== */}
      {/*  2. HERO                                                           */}
      {/* ================================================================== */}
      <section className="pl-hero">
        <div className="container-x">
          <div className="pl-hero-grid">
            {/* Left column */}
            <div className="pl-hero-left">
              <span className="pl-badge">
                <span className="pl-badge-dot" />
                The Positivity Hub · Platinum Programme
              </span>

              <h1 className="pl-h1">
                A positive teen today,{" "}
                <em className="pl-gold">a confident leader</em>{" "}
                tomorrow.
              </h1>

              <p className="pl-lede">
                The life-changing Positivity Framework™ — a 90-day, 24-session,
                1-on-1 transformation journey that nurtures confidence,
                resilience, and success habits for a brighter future.
              </p>

              <div className="pl-mini-pills">
                <span className="pl-mp">🎯 24 Sessions</span>
                <span className="pl-mp">💬 1-on-1 Coaching</span>
                <span className="pl-mp">📊 Scientific Assessments</span>
                <span className="pl-mp">🎓 6 Online Courses</span>
              </div>

              <div className="pl-cta-row">
                <a
                  href={site.urls.checkout}
                  target="_blank"
                  rel="noreferrer"
                  className="pl-btn pl-btn-primary"
                >
                  Begin the journey →
                </a>
                <a href="#roadmap" className="pl-btn pl-btn-ghost">
                  See the 24 sessions
                </a>
              </div>

              <div className="pl-rating">
                <div className="pl-avatars">
                  <span className="pl-av" style={{ background: "linear-gradient(135deg,#f5d17a,#c99b3a)" }}>P</span>
                  <span className="pl-av" style={{ background: "linear-gradient(135deg,#b58cfa,#7a5ad1)" }}>R</span>
                  <span className="pl-av" style={{ background: "linear-gradient(135deg,#4fb1c8,#2a6f80)" }}>A</span>
                  <span className="pl-av" style={{ background: "linear-gradient(135deg,#f0a465,#b7743e)" }}>L</span>
                </div>
                <div className="pl-stars">★★★★★</div>
                <div className="pl-rating-txt">
                  <strong>10,000+</strong> learners · 5.0 on Google
                </div>
              </div>
            </div>

            {/* Right column — Score Card */}
            <div className="pl-score-wrap">
              <div className="pl-score">
                <div className="pl-score-head">
                  <div className="pl-score-head-left">
                    <div className="pl-score-tile">A</div>
                    <div>
                      <div className="pl-score-name">Arjun · Grade 9</div>
                      <div className="pl-score-sub">Week 6 of 24</div>
                    </div>
                  </div>
                  <span className="pl-tag">On Track</span>
                </div>

                <div className="pl-score-label">
                  <span>Overall Positivity</span>
                  <strong>72%</strong>
                </div>
                <div className="pl-bar"><div className="pl-bar-fill" style={{ width: "72%" }} /></div>

                <div className="pl-metrics">
                  <div className="pl-metric">
                    <div className="pl-metric-n">86</div>
                    <div className="pl-metric-l">Mindset</div>
                  </div>
                  <div className="pl-metric">
                    <div className="pl-metric-n">74</div>
                    <div className="pl-metric-l">Confidence</div>
                  </div>
                  <div className="pl-metric">
                    <div className="pl-metric-n">68</div>
                    <div className="pl-metric-l">Focus</div>
                  </div>
                  <div className="pl-metric">
                    <div className="pl-metric-n">81</div>
                    <div className="pl-metric-l">Resilience</div>
                  </div>
                </div>

                {/* Floating tags */}
                <div className="pl-float pl-float-tr">
                  <div className="pl-float-icon" style={{ background: "#e9c46a" }}>★</div>
                  <div>
                    <div className="pl-float-val">+18%</div>
                    <div className="pl-float-lbl">This month</div>
                  </div>
                </div>
                <div className="pl-float pl-float-bl">
                  <div className="pl-float-icon" style={{ background: "#4fb1c8" }}>✓</div>
                  <div>
                    <div className="pl-float-val">12 / 24</div>
                    <div className="pl-float-lbl">Sessions done</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  3. TRUST / MARQUEE                                                */}
      {/* ================================================================== */}
      <section className="pl-trust">
        <p className="pl-trust-label">Trusted by families across India</p>
        <div className="pl-marquee">
          <div className="pl-marquee-track">
            {[...Array(2)].flatMap((_, k) =>
              ["The Hindu", "Deccan Herald", "EdTech Review", "Hindustan Times", "Times of India", "YourStory", "The Economic Times"].map((n, i) => (
                <span key={`${k}-${i}`} className="pl-marquee-item">{n}</span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  4. PLATFORM (4-up cards)                                          */}
      {/* ================================================================== */}
      <section className="pl-section">
        <div className="container-x">
          <div className="pl-head">
            <p className="pl-eyebrow">The All-in-One Platform</p>
            <h2 className="pl-h2">
              Everything your child needs, in{" "}
              <em className="pl-gold">one hub</em>
            </h2>
            <p className="pl-sub">
              Course access, live coaching, assessments, and certificates —
              stitched into one uninterrupted journey.
            </p>
          </div>

          <div className="pl-4up">
            {[
              { n: "01", i: "🎓", t: "Course Access",  b: "All six online courses covering essential skills for academic and personal growth."                          },
              { n: "02", i: "🎥", t: "Live Sessions",  b: "Expert-led live sessions aligned to each module, featuring transformational coaching every week."             },
              { n: "03", i: "📊", t: "Assessments",    b: "Structured, scientific evaluations to track progress and celebrate every measurable step of growth."         },
              { n: "04", i: "🏅", t: "Certificates",   b: "Official certification on completion — validating your learning for school, university, and beyond."         },
            ].map(f => (
              <div key={f.n} className="pl-fcard">
                <span className="pl-fcard-num">{f.n}</span>
                <div className="pl-fcard-icon">{f.i}</div>
                <h3 className="pl-fcard-t">{f.t}</h3>
                <p className="pl-fcard-b">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  5. SCIENCE / PROBLEM (split)                                      */}
      {/* ================================================================== */}
      <section className="pl-section pl-science">
        <div className="container-x">
          <div className="pl-split">
            <div className="pl-split-left">
              <p className="pl-eyebrow">The Science</p>
              <h2 className="pl-h2">
                Why early positive intervention{" "}
                <em className="pl-gold">changes everything</em>
              </h2>
              <div className="pl-stat">1 in 7</div>
              <small className="pl-stat-sub">
                adolescents (10–19) faces a mental health challenge — most go
                unaddressed. Source: World Health Organisation.
              </small>
            </div>

            <div className="pl-split-right">
              {[
                { h: "Positivity is a skill.",             d: "Neuroscience shows that positivity, resilience, and confidence can be trained — like any other skill."      },
                { h: "Habits form fastest at this age.",  d: "The 11–17 window is where lifelong behavioural patterns lock in. Early inputs have outsized long-term impact." },
                { h: "Structured beats sporadic.",         d: "A weekly cadence with a coach, curriculum, and measurable milestones outperforms occasional counselling."     },
                { h: "Measured, not guessed.",             d: "The Positivity Score turns a subjective concept into a real, comparable, before-and-after number."           },
              ].map(item => (
                <div key={item.h} className="pl-check">
                  <span className="pl-check-tick">✓</span>
                  <div>
                    <strong className="pl-check-h">{item.h}</strong>{" "}
                    <span className="pl-check-d">{item.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  6. THREE PILLARS                                                  */}
      {/* ================================================================== */}
      <section className="pl-section">
        <div className="container-x">
          <div className="pl-head">
            <p className="pl-eyebrow">Our Framework</p>
            <h2 className="pl-h2">
              Three pillars, one{" "}
              <em className="pl-gold">thriving</em> teenager
            </h2>
          </div>

          <div className="pl-3up">
            {[
              {
                lbl: "PILLAR 01",
                grad: "linear-gradient(160deg, #244d5c 0%, #0e2a35 100%)",
                h: "Life Skills",
                p: "Emotional intelligence, decision-making, problem-solving, and time management — the resilient foundation every teenager needs.",
                b: ["Emotional intelligence", "Decision-making", "Problem-solving", "Time & stress management"],
              },
              {
                lbl: "PILLAR 02",
                grad: "linear-gradient(160deg, #4a3573 0%, #241a3d 100%)",
                h: "Leadership Skills",
                p: "Self-confidence, communication, teamwork, and purposeful decision-making. We nurture the leader within every child.",
                b: ["Self-confidence to speak up", "Effective communication", "Teamwork & collaboration", "Clear, purposeful decisions"],
              },
              {
                lbl: "PILLAR 03",
                grad: "linear-gradient(160deg, #7a4a20 0%, #3a2210 100%)",
                h: "Academic Performance",
                p: "Focus, growth mindset, smart study techniques, and sustained motivation. When positivity meets learning, students excel.",
                b: ["Focus & concentration", "Growth mindset", "Smart learning strategies", "Motivation & confidence"],
              },
            ].map(p => (
              <div key={p.lbl} className="pl-pillar" style={{ background: p.grad }}>
                <div className="pl-pillar-lbl">{p.lbl}</div>
                <h3 className="pl-pillar-h">{p.h}</h3>
                <p className="pl-pillar-p">{p.p}</p>
                <ul className="pl-pillar-ul">
                  {p.b.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  7. THE 24-SESSION COMPASS                                         */}
      {/* ================================================================== */}
      <section id="roadmap" className="pl-compass-sec">
        <div className="pl-compass-bg" aria-hidden />
        <div className="container-x">
          <div className="pl-head">
            <p className="pl-eyebrow">The 24-Session Compass</p>
            <h2 className="pl-h2">
              Twenty-four steps.{" "}
              <em className="pl-gold">One transformation.</em>
            </h2>
            <p className="pl-sub">
              Four pillars, six sessions each. Explore any node to see what
              your teen will learn, what the outcome looks like, and how it
              connects to the rest of the journey.
            </p>
          </div>

          <div className="pl-compass-grid">
            {/* SVG DIAL */}
            <div className="pl-dial-wrap">
              <svg
                viewBox="0 0 620 620"
                className="pl-dial"
                role="group"
                aria-label="24-session compass"
              >
                <defs>
                  <filter id="pl-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Decorative background rings */}
                <circle cx={CX} cy={CY} r={214} fill="none" stroke="rgba(255,255,255,0.06)" />
                <circle cx={CX} cy={CY} r={150} fill="none" stroke="rgba(255,255,255,0.04)" />

                {/* Pillar arcs */}
                {PILLARS.map((p, i) => (
                  <path
                    key={i}
                    d={pillarArcs[i]}
                    fill="none"
                    stroke={p.c}
                    strokeWidth={curSession.p === i ? 18 : 14}
                    strokeLinecap="round"
                    opacity={curSession.p === i ? 1 : 0.32}
                    style={{ transition: "opacity .3s, stroke-width .3s" }}
                  />
                ))}

                {/* Pillar labels */}
                {PILLARS.map((p, i) => {
                  const first = i * 6;
                  const last  = first + 5;
                  const mid   = (nodeAngle(first) + nodeAngle(last)) / 2;
                  const [x, y] = pt(RL, mid);
                  return (
                    <text
                      key={i}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="pl-dial-plabel"
                      fill={p.c}
                      opacity={curSession.p === i ? 1 : 0.45}
                    >
                      PILLAR {["I", "II", "III", "IV"][i]}
                    </text>
                  );
                })}

                {/* Spokes */}
                {sessions.map((_, i) => {
                  const a = nodeAngle(i);
                  const [x1, y1] = pt(RSI, a);
                  const [x2, y2] = pt(RSO, a);
                  return (
                    <line
                      key={`sp-${i}`}
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth={1}
                    />
                  );
                })}

                {/* Sweep arc */}
                {sweepPath && (
                  <path
                    d={sweepPath}
                    fill="none"
                    stroke="#e9c46a"
                    strokeWidth={3}
                    strokeLinecap="round"
                    filter="url(#pl-glow)"
                    style={{ transition: "d .4s" }}
                  />
                )}

                {/* Nodes */}
                {sessions.map((s, i) => {
                  const a = nodeAngle(i);
                  const [x, y] = pt(RN, a);
                  const pillar = PILLARS[s.p];
                  const isSel = i === cur;
                  return (
                    <g
                      key={s.n}
                      ref={el => { nodeRefs.current[i] = el; }}
                      className={`pl-pnode ${isSel ? "pl-pnode-sel" : ""}`}
                      transform={`translate(${x} ${y})`}
                      tabIndex={0}
                      role="button"
                      aria-label={`Session ${s.n}: ${s.t}`}
                      aria-current={isSel}
                      onMouseEnter={() => select(i)}
                      onFocus={() => select(i)}
                      onClick={() => select(i, true)}
                      onKeyDown={e => onNodeKey(e, i)}
                    >
                      {s.ms && (
                        <circle
                          r={25}
                          fill="none"
                          stroke="rgba(255,255,255,0.35)"
                          strokeWidth={1}
                        />
                      )}
                      <circle
                        r={20}
                        fill="#0e1a2c"
                        stroke={pillar.c}
                        strokeWidth={2.5}
                      />
                      <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="pl-pnode-t"
                        dy="0.35em"
                      >
                        {s.n}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Center readout */}
              <div className="pl-center" style={{ color: curPillar.c }}>
                <div className="pl-center-n">{String(curSession.n).padStart(2, "0")}</div>
                <div className="pl-center-c">SESSION</div>
                <div className="pl-center-h">Hover · click · arrow keys</div>
              </div>
            </div>

            {/* Right detail panel */}
            <div key={fadeKey} className="pl-rdout pl-rfade">
              <span className="pl-chip" style={{ background: `${curPillar.c}22`, color: curPillar.c, borderColor: `${curPillar.c}55` }}>
                {curPillar.name}
              </span>
              <div className="pl-rdout-num">Session {String(curSession.n).padStart(2, "0")}</div>
              <h3 className="pl-rdout-t">{curSession.t}</h3>
              <p className="pl-rdout-d">{curSession.d}</p>
              <div className="pl-rdout-o">
                <span className="pl-rdout-o-star">★</span>
                <span><strong>Outcome:</strong> {curSession.o}</span>
              </div>

              <div className="pl-rdout-btns">
                <button
                  onClick={() => select((cur - 1 + 24) % 24, true)}
                  className="pl-rdout-btn"
                  aria-label="Previous session"
                >
                  ‹ Prev
                </button>
                <button
                  onClick={() => setTour(t => !t)}
                  className="pl-rdout-btn pl-rdout-btn-tour"
                  aria-pressed={tour}
                >
                  {tour ? "❚❚ Pause" : "▶ Auto-tour"}
                </button>
                <button
                  onClick={() => select((cur + 1) % 24, true)}
                  className="pl-rdout-btn"
                  aria-label="Next session"
                >
                  Next ›
                </button>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="pl-legend">
            {PILLARS.map((p, i) => (
              <button
                key={p.name}
                className={`pl-legend-pill ${curSession.p === i ? "pl-legend-lit" : ""}`}
                onMouseEnter={() => select(i * 6)}
                onClick={() => select(i * 6, true)}
                style={{ borderColor: `${p.c}55` }}
              >
                <span className="pl-legend-dot" style={{ background: p.c }} />
                <span className="pl-legend-name">{p.name}</span>
                <span className="pl-legend-range">{p.range}</span>
              </button>
            ))}
          </div>

          {/* Mobile fallback list */}
          <div className="pl-mlist" aria-hidden={false}>
            {PILLARS.map((p, pi) => (
              <div key={p.name} className="pl-mlist-group">
                <div className="pl-mlist-head" style={{ background: `${p.c}22`, color: p.c, borderColor: `${p.c}55` }}>
                  <span className="pl-mlist-head-dot" style={{ background: p.c }} />
                  Pillar {["I", "II", "III", "IV"][pi]} · {p.name}
                </div>
                <div className="pl-mlist-items">
                  {sessions.filter(s => s.p === pi).map(s => (
                    <div key={s.n} className="pl-mlist-item">
                      <div className="pl-mlist-num" style={{ background: p.c }}>{s.n}</div>
                      <div>
                        <div className="pl-mlist-t">{s.t}</div>
                        <div className="pl-mlist-d">{s.d}</div>
                        <div className="pl-mlist-o">Outcome — {s.o}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Finish cap card */}
          <div className="pl-finish">
            <div className="pl-finish-icon">🎓</div>
            <h3 className="pl-finish-h">Graduation & lifelong toolkit</h3>
            <p className="pl-finish-p">
              At session 24, your teen re-takes the Positivity Score, receives
              a personal transformation report, and walks away with a lifelong
              toolkit for confidence, resilience and success.
            </p>
            <a
              href={site.urls.checkout}
              target="_blank"
              rel="noreferrer"
              className="pl-btn pl-btn-primary"
            >
              Enrol in Platinum →
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  8. POSITIVITY PATH (4 tiers)                                      */}
      {/* ================================================================== */}
      <section className="pl-section">
        <div className="container-x">
          <div className="pl-head">
            <p className="pl-eyebrow">The Positivity Path</p>
            <h2 className="pl-h2">
              Four tiers. Meet your child where they{" "}
              <em className="pl-gold">are.</em>
            </h2>
          </div>

          <div className="pl-4up pl-path">
            {[
              {
                n: "01 · UNDERSTAND",
                t: "Imparting Positivity Experience",
                tag: "Discover where your child stands today.",
                b: ["Positivity Score Test", "One-to-one with the coach", "7-Day Challenge every Sunday", "Journey to Positivity course"],
              },
              {
                n: "02 · TRANSFORM",
                t: "Positivity Hub Subscription",
                tag: "Build the core skills that last.",
                b: ["Positivity Score & review", "3 flagship online courses", "Weekly Power-Up Live", "Needs-based 1-on-1 coaching"],
              },
              {
                n: "03 · ACT",
                t: "Positivity Hub Gold",
                tag: "Go deeper across six courses.",
                b: ["Everything in Transform", "6 online courses in total", "Weekly Power-Up Live", "4 needs-based 1-on-1 sessions"],
              },
              {
                n: "04 · MENTORING",
                t: "Positivity Hub Platinum",
                tag: "The full 24-session journey.",
                b: ["24 one-on-one sessions / year", "Everything in Gold subscription", "All 6 online courses", "Live Hub & Expression Mastery Hub"],
                featured: true,
              },
            ].map(tier => (
              <div key={tier.n} className={`pl-tier ${tier.featured ? "pl-tier-featured" : ""}`}>
                {tier.featured && <div className="pl-ribbon">FLAGSHIP</div>}
                <span className="pl-fcard-num">{tier.n}</span>
                <h3 className="pl-fcard-t">{tier.t}</h3>
                <p className="pl-fcard-b">{tier.tag}</p>
                <ul className="pl-tier-ul">
                  {tier.b.map(x => <li key={x}>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  9. WHY CHOOSE                                                     */}
      {/* ================================================================== */}
      <section className="pl-section">
        <div className="container-x">
          <div className="pl-head">
            <p className="pl-eyebrow">Why Choose MiTran Global</p>
            <h2 className="pl-h2">
              A programme built for{" "}
              <em className="pl-gold">real change.</em>
            </h2>
          </div>

          <div className="pl-3up-plain">
            {[
              { i: "🧭", t: "Structured, not sporadic", b: "A 24-session curriculum with clear milestones — not scattered advice. Every session builds on the last." },
              { i: "📈", t: "Measured, not guessed",    b: "The Positivity Score gives a before-and-after number, so parents and teens see the actual change."   },
              { i: "🎯", t: "Personal, not generic",    b: "Every plan is tuned to your teen — strengths, growth zones, values, and real life at school and home." },
            ].map(w => (
              <div key={w.t} className="pl-why">
                <div className="pl-why-icon">{w.i}</div>
                <h3 className="pl-fcard-t">{w.t}</h3>
                <p className="pl-fcard-b">{w.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  10. TESTIMONIALS (masonry)                                        */}
      {/* ================================================================== */}
      <section className="pl-section">
        <div className="container-x">
          <div className="pl-head">
            <p className="pl-eyebrow">What Parents Say</p>
            <h2 className="pl-h2">
              Changing lives, one{" "}
              <em className="pl-gold">mindset</em> at a time.
            </h2>
          </div>

          <div className="pl-masonry">
            {[
              { q: "My daughter went from dreading exams to actually looking forward to them. The mindset shift is remarkable.",                                            n: "Priya M.",     r: "Parent, Bangalore",     c: "#4fb1c8" },
              { q: "MiTran gave my son the confidence he was missing. His teachers have noticed a complete transformation over the last six months.",                     n: "Ramesh K.",    r: "Parent, Chennai",       c: "#b58cfa" },
              { q: "The Positivity Score was an eye-opener — we had no idea our daughter was struggling with self-doubt at that level.",                                    n: "Anitha S.",    r: "Parent, Hyderabad",     c: "#f0a465" },
              { q: "As a school principal, I've seen many programmes. MiTran's approach is the most systematic and genuinely effective I've encountered.",                 n: "Dr. Venkat R.", r: "Principal, MG School", c: "#e9c46a" },
              { q: "My son used to give up at the first sign of difficulty. Now he approaches challenges with a completely different mindset.",                             n: "Lakshmi P.",   r: "Parent, Mumbai",        c: "#4fb1c8" },
              { q: "The one-on-one sessions gave my daughter a private space to talk about things she wouldn't share at home. Priceless.",                                  n: "Kavya N.",     r: "Parent, Pune",          c: "#b58cfa" },
              { q: "What I loved was how much the coach adapted to my son — this was not a script, it was a real relationship with a plan behind it.",                     n: "Suresh A.",    r: "Parent, Delhi",         c: "#f0a465" },
              { q: "The change in our home is quiet but real. Fewer arguments, more conversation, and a teenager who actually plans her week.",                             n: "Meera J.",     r: "Parent, Kochi",         c: "#e9c46a" },
            ].map((t, i) => (
              <div key={i} className="pl-tcard">
                <span className="pl-tcard-quote">“</span>
                <div className="pl-tcard-stars">★★★★★</div>
                <p className="pl-tcard-q">{t.q}</p>
                <div className="pl-tcard-foot">
                  <span className="pl-tcard-av" style={{ background: `linear-gradient(135deg, ${t.c}, ${t.c}80)` }}>
                    {t.n.charAt(0)}
                  </span>
                  <div>
                    <div className="pl-tcard-n">{t.n}</div>
                    <div className="pl-tcard-r">{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  11. CTA BANNER                                                    */}
      {/* ================================================================== */}
      <section className="pl-section">
        <div className="container-x">
          <div className="pl-cta-banner">
            <div className="pl-cta-glow" aria-hidden />
            <div className="pl-cta-inner">
              <p className="pl-eyebrow pl-eyebrow-on-dark">Ready when you are</p>
              <h2 className="pl-h2 pl-h2-on-dark">
                Give your teen the{" "}
                <em className="pl-gold">24-session journey</em> that changes everything.
              </h2>
              <p className="pl-sub pl-sub-on-dark">
                A 90-day, 1-on-1 transformation programme. Guided by a coach,
                measured by the Positivity Score, and built around your child.
              </p>
              <div className="pl-cta-row pl-cta-row-center">
                <a
                  href={site.urls.checkout}
                  target="_blank"
                  rel="noreferrer"
                  className="pl-btn pl-btn-primary"
                >
                  Enrol in Platinum →
                </a>
                <a
                  href={site.urls.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="pl-btn pl-btn-ghost pl-btn-ghost-on-dark"
                >
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

const PL_CSS = `
/* ============ tokens ============ */
:root {
  --pl-navy:      #0e1a2c;
  --pl-navy-2:    #142338;
  --pl-gold:      #e9c46a;
  --pl-gold-2:    #f5d17a;
  --pl-gold-deep: #c99b3a;
  --pl-white:     #ffffff;
  --pl-cream:     #fbf7ee;
  --pl-line:      rgba(255,255,255,0.10);
  --pl-line-dk:   rgba(10,20,35,0.10);
  --pl-ink:       #0b1220;
  --pl-ink-mute:  #4b5566;
  --pl-mono:      "SFMono-Regular", ui-monospace, Menlo, monospace;
}

/* ============ shared bits ============ */
.pl-gold {
  background: linear-gradient(135deg, #f5d17a 0%, #e9c46a 40%, #c99b3a 100%);
  -webkit-background-clip: text;
          background-clip: text;
  color: transparent;
  font-style: italic;
}

.pl-section { position: relative; padding: 96px 0; border-top: 1px solid var(--pl-line); }
@media (max-width: 700px){ .pl-section { padding: 64px 0; } }

.pl-head { max-width: 780px; margin: 0 auto 56px; text-align: center; }
.pl-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--pl-mono);
  font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(245,244,239,0.72);
}
.pl-eyebrow::before {
  content: ""; display:inline-block;
  width: 22px; height: 1px; background: var(--pl-gold);
}
.pl-eyebrow-on-dark { color: rgba(255,255,255,0.75); }
.pl-h2 {
  font-family: var(--font-display), Georgia, serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.08; letter-spacing: -0.02em;
  margin: 18px 0 0; color: var(--pl-white);
}
.pl-h2-on-dark { color: #fff; }
.pl-sub { margin: 20px 0 0; color: rgba(245,244,239,0.72); line-height: 1.65; font-size: 17px; }
.pl-sub-on-dark { color: rgba(255,255,255,0.78); }

.pl-btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 8px; padding: 12px 22px; border-radius: 999px;
  font-size: 14px; font-weight: 500; text-decoration: none;
  transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
  cursor: pointer; border: 0;
}
.pl-btn-primary {
  background: linear-gradient(135deg, #f5d17a, #e9c46a 45%, #c99b3a);
  color: #0b0f1a;
  box-shadow: 0 0 60px -12px rgba(233,196,106,0.4);
}
.pl-btn-primary:hover { transform: translateY(-1px); box-shadow: 0 0 80px -8px rgba(233,196,106,0.55); }
.pl-btn-ghost {
  border: 1px solid var(--pl-line); background: rgba(255,255,255,0.02);
  color: var(--pl-white);
}
.pl-btn-ghost:hover { border-color: rgba(255,255,255,0.24); background: rgba(255,255,255,0.06); }
.pl-btn-ghost-on-dark { color: #fff; border-color: rgba(255,255,255,0.28); }

/* ============ HERO ============ */
.pl-hero { position: relative; padding: 140px 0 60px; overflow: hidden; }
@media (max-width: 900px){ .pl-hero { padding: 110px 0 40px; } }

.pl-hero-grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 56px; align-items: center;
}
@media (max-width: 1024px){
  .pl-hero-grid { grid-template-columns: 1fr; gap: 60px; }
}

.pl-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: #fff; color: #0b0f1a;
  padding: 8px 14px; border-radius: 999px;
  font-size: 12px; font-weight: 500;
  box-shadow: 0 4px 14px rgba(0,0,0,0.18);
}
.pl-badge-dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; }

.pl-h1 {
  font-family: var(--font-display), Georgia, serif;
  font-size: clamp(2.75rem, 7vw, 5rem);
  line-height: 1.02; letter-spacing: -0.03em;
  margin: 22px 0 0; color: #fff;
}
.pl-lede {
  margin: 22px 0 0; color: rgba(245,244,239,0.72);
  font-size: 17px; line-height: 1.65; max-width: 560px;
}

.pl-mini-pills {
  display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px;
}
.pl-mp {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(255,255,255,0.04); border: 1px solid var(--pl-line);
  color: rgba(255,255,255,0.85);
  padding: 6px 12px; border-radius: 999px; font-size: 12.5px;
}

.pl-cta-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
.pl-cta-row-center { justify-content: center; }

.pl-rating { display: flex; align-items: center; gap: 14px; margin-top: 30px; }
.pl-avatars { display: flex; }
.pl-av {
  width: 34px; height: 34px; border-radius: 50%;
  border: 2px solid var(--pl-navy);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 600; color: #0b0f1a;
  margin-left: -10px;
}
.pl-av:first-child { margin-left: 0; }
.pl-stars { color: var(--pl-gold); font-size: 15px; letter-spacing: 1px; }
.pl-rating-txt { color: rgba(245,244,239,0.72); font-size: 13px; }
.pl-rating-txt strong { color: #fff; }

/* Score card */
.pl-score-wrap { position: relative; padding: 20px; }
.pl-score {
  position: relative;
  background: linear-gradient(160deg, #142338 0%, #0a1220 100%);
  border-radius: 28px;
  padding: 32px;
  color: #fff;
  box-shadow: 0 40px 80px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05) inset;
}
.pl-score::before {
  content:""; position: absolute; top: -80px; right: -80px;
  width: 260px; height: 260px; border-radius: 50%;
  background: radial-gradient(circle, rgba(79,177,200,0.35), transparent 60%);
  pointer-events: none;
}

.pl-score-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
.pl-score-head-left { display: flex; align-items: center; gap: 12px; }
.pl-score-tile {
  width: 44px; height: 44px; border-radius: 12px;
  background: linear-gradient(135deg, #f5d17a, #c99b3a);
  color: #0b0f1a;
  display: inline-flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 18px;
}
.pl-score-name { font-weight: 600; font-size: 14px; }
.pl-score-sub { color: rgba(255,255,255,0.55); font-size: 12px; margin-top: 2px; }
.pl-tag {
  font-family: var(--pl-mono);
  font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--pl-gold);
  border: 1px solid rgba(233,196,106,0.35);
  padding: 4px 10px; border-radius: 999px;
}

.pl-score-label { display: flex; justify-content: space-between; align-items: baseline; margin-top: 6px; }
.pl-score-label span { color: rgba(255,255,255,0.7); font-size: 13px; }
.pl-score-label strong { font-size: 20px; }

.pl-bar {
  height: 8px; background: rgba(255,255,255,0.08); border-radius: 999px;
  margin: 10px 0 26px; overflow: hidden;
}
.pl-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #4fb1c8, #e9c46a);
  border-radius: 999px;
}

.pl-metrics {
  display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
}
.pl-metric {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px; padding: 16px 18px;
}
.pl-metric-n {
  font-family: var(--font-display), Georgia, serif;
  font-size: 32px; line-height: 1; color: #fff;
}
.pl-metric-l {
  font-family: var(--pl-mono);
  font-size: 10.5px; letter-spacing: 0.16em; text-transform: uppercase;
  color: rgba(255,255,255,0.55); margin-top: 6px;
}

/* Floating tags */
.pl-float {
  position: absolute;
  background: #fff; color: #0b0f1a;
  border-radius: 14px; padding: 10px 14px;
  display: flex; align-items: center; gap: 10px;
  box-shadow: 0 20px 40px -15px rgba(0,0,0,0.35);
  animation: pl-floaty 5s ease-in-out infinite;
}
.pl-float-tr { top: -6px; right: -14px; animation-delay: 0s; }
.pl-float-bl { bottom: -6px; left: -14px; animation-delay: 1.4s; }
.pl-float-icon {
  width: 30px; height: 30px; border-radius: 8px;
  display: inline-flex; align-items: center; justify-content: center;
  color: #0b0f1a; font-weight: 700; font-size: 15px;
}
.pl-float-val { font-weight: 700; font-size: 14px; line-height: 1; }
.pl-float-lbl { font-size: 11px; color: #6b7280; margin-top: 3px; }

@keyframes pl-floaty {
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-8px); }
}

/* ============ TRUST / MARQUEE ============ */
.pl-trust {
  padding: 40px 0;
  border-top: 1px solid var(--pl-line);
  border-bottom: 1px solid var(--pl-line);
  background: rgba(255,255,255,0.015);
}
.pl-trust-label {
  text-align: center;
  font-family: var(--pl-mono);
  font-size: 11.5px; letter-spacing: 0.24em; text-transform: uppercase;
  color: rgba(245,244,239,0.55); margin: 0 0 22px;
}
.pl-marquee {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 12%, #000 88%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0, #000 12%, #000 88%, transparent 100%);
}
.pl-marquee-track {
  display: inline-flex; gap: 64px; width: max-content;
  animation: pl-marquee 32s linear infinite;
  will-change: transform;
}
.pl-marquee:hover .pl-marquee-track { animation-play-state: paused; }
.pl-marquee-item {
  font-family: var(--font-display), Georgia, serif;
  font-size: 22px; color: rgba(245,244,239,0.55);
  white-space: nowrap;
}
@keyframes pl-marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ============ 4-UP grids ============ */
.pl-4up {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
}
@media (max-width: 1024px){ .pl-4up { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .pl-4up { grid-template-columns: 1fr; } }

.pl-fcard {
  position: relative;
  background: #fff; color: var(--pl-ink);
  border: 1px solid var(--pl-line-dk);
  border-radius: 20px; padding: 28px 24px;
  transition: transform .3s ease, box-shadow .3s ease;
}
.pl-fcard:hover { transform: translateY(-6px); box-shadow: 0 30px 50px -30px rgba(0,0,0,0.35); }
.pl-fcard-num {
  position: absolute; top: 16px; right: 20px;
  font-family: var(--pl-mono);
  font-size: 11px; color: rgba(11,18,32,0.4); letter-spacing: 0.14em;
}
.pl-fcard-icon {
  width: 52px; height: 52px; border-radius: 14px;
  background: var(--pl-cream);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 26px;
}
.pl-fcard-t { font-family: var(--font-display), Georgia, serif; font-size: 21px; margin: 20px 0 0; color: var(--pl-ink); }
.pl-fcard-b { margin: 12px 0 0; color: var(--pl-ink-mute); line-height: 1.6; font-size: 14.5px; }

/* ============ SCIENCE SPLIT ============ */
.pl-split {
  display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;
}
@media (max-width: 900px){ .pl-split { grid-template-columns: 1fr; gap: 40px; } }
.pl-split-left .pl-h2 { text-align: left; }
.pl-split-left { text-align: left; }
.pl-stat {
  font-family: var(--font-display), Georgia, serif;
  font-size: clamp(4.5rem, 12vw, 8.5rem);
  color: #e94b4b;
  line-height: 1; letter-spacing: -0.04em;
  margin-top: 32px;
}
.pl-stat-sub { display: block; color: rgba(245,244,239,0.6); margin-top: 12px; font-size: 14px; max-width: 340px; }

.pl-split-right { display: flex; flex-direction: column; gap: 18px; }
.pl-check {
  display: flex; gap: 14px; align-items: flex-start;
}
.pl-check-tick {
  flex-shrink: 0;
  width: 28px; height: 28px; border-radius: 8px;
  background: rgba(233,196,106,0.16); color: var(--pl-gold);
  display: inline-flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 14px;
  margin-top: 2px;
}
.pl-check-h { color: #fff; font-weight: 600; }
.pl-check-d { color: rgba(245,244,239,0.7); line-height: 1.6; }

/* ============ THREE PILLARS ============ */
.pl-3up {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
}
@media (max-width: 900px){ .pl-3up { grid-template-columns: 1fr; } }
.pl-pillar {
  color: #fff; border-radius: 22px; padding: 28px;
  display: flex; flex-direction: column; min-height: 340px;
  box-shadow: 0 30px 60px -30px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06) inset;
}
.pl-pillar-lbl {
  font-family: var(--pl-mono);
  font-size: 11px; letter-spacing: 0.22em; color: rgba(255,255,255,0.7);
}
.pl-pillar-h { font-family: var(--font-display), Georgia, serif; font-size: 26px; margin: 16px 0 0; }
.pl-pillar-p { margin: 14px 0 0; color: rgba(255,255,255,0.78); line-height: 1.6; font-size: 14.5px; }
.pl-pillar-ul {
  list-style: none; padding: 0; margin: 24px 0 0 0; margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.14);
  display: flex; flex-direction: column; gap: 8px;
}
.pl-pillar-ul li {
  color: rgba(255,255,255,0.85); font-size: 14px;
  position: relative; padding-left: 18px;
}
.pl-pillar-ul li::before {
  content: "✦"; position: absolute; left: 0; top: 0;
  color: var(--pl-gold);
}

/* ============ COMPASS ============ */
.pl-compass-sec {
  position: relative; padding: 96px 0;
  background: linear-gradient(180deg, #0a1220 0%, #0b1424 100%);
  border-top: 1px solid var(--pl-line);
  overflow: hidden;
}
.pl-compass-bg {
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(600px 500px at 85% 10%, rgba(79,177,200,0.18), transparent 60%),
    radial-gradient(500px 400px at 10% 90%, rgba(233,196,106,0.14), transparent 60%);
}
.pl-compass-grid {
  display: grid; grid-template-columns: minmax(0, 1fr) 370px;
  gap: 46px; align-items: center; margin-top: 20px;
}
@media (max-width: 1080px){ .pl-compass-grid { grid-template-columns: 1fr; } }

.pl-dial-wrap { position: relative; width: 100%; max-width: 620px; margin: 0 auto; }
.pl-dial { width: 100%; height: auto; display: block; }

.pl-pnode {
  cursor: pointer;
  outline: none;
  transform-box: fill-box;
  transform-origin: center;
  transition: transform .34s cubic-bezier(.2,.8,.2,1);
}
.pl-pnode-t {
  fill: #fff; font-size: 15px; font-weight: 600;
  font-family: var(--font-sans), system-ui, sans-serif;
  pointer-events: none;
}
.pl-pnode:hover, .pl-pnode:focus-visible, .pl-pnode-sel {
  transform: scale(1.32);
}
.pl-pnode:focus-visible circle:nth-of-type(1),
.pl-pnode:focus-visible circle:only-of-type {
  stroke: #fff;
}
.pl-dial-plabel {
  font-family: var(--pl-mono);
  font-size: 11.5px; letter-spacing: 0.24em; text-transform: uppercase;
  font-weight: 600;
  transition: opacity .3s;
}

.pl-center {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  pointer-events: none; text-align: center;
}
.pl-center-n {
  font-family: var(--font-display), Georgia, serif;
  font-size: clamp(3rem, 8vw, 5rem);
  line-height: 1; letter-spacing: -0.03em;
  transition: color .3s;
}
.pl-center-c {
  font-family: var(--pl-mono);
  font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase;
  color: rgba(255,255,255,0.65); margin-top: 8px;
}
.pl-center-h {
  color: rgba(255,255,255,0.4); font-size: 11px; margin-top: 6px;
}

.pl-rdout {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 22px; padding: 26px;
  min-height: 400px;
  display: flex; flex-direction: column;
  color: #fff;
}
.pl-chip {
  display: inline-block; align-self: flex-start;
  padding: 4px 12px; border-radius: 999px;
  border: 1px solid; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
  font-family: var(--pl-mono); font-weight: 600;
}
.pl-rdout-num {
  font-family: var(--pl-mono);
  font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
  color: rgba(255,255,255,0.6); margin-top: 16px;
}
.pl-rdout-t {
  font-family: var(--font-display), Georgia, serif;
  font-size: 26px; line-height: 1.15; letter-spacing: -0.01em;
  margin: 8px 0 0;
}
.pl-rdout-d { margin: 14px 0 0; color: rgba(255,255,255,0.72); line-height: 1.6; font-size: 14.5px; }
.pl-rdout-o {
  margin-top: auto; padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
  display: flex; gap: 10px; align-items: flex-start;
  color: rgba(255,255,255,0.85); font-size: 13.5px; line-height: 1.55;
}
.pl-rdout-o-star { color: var(--pl-gold); font-size: 15px; }

.pl-rdout-btns {
  display: flex; justify-content: space-between; gap: 8px; margin-top: 18px;
}
.pl-rdout-btn {
  flex: 1; padding: 10px 12px; border-radius: 10px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: #fff; font-size: 13px; font-family: inherit;
  cursor: pointer; transition: background .2s;
}
.pl-rdout-btn:hover { background: rgba(255,255,255,0.1); }
.pl-rdout-btn-tour { color: var(--pl-gold); font-weight: 600; }

@keyframes pl-rfIn {
  0%   { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
}
.pl-rfade { animation: pl-rfIn .38s ease-out both; }

/* Legend */
.pl-legend {
  display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;
  margin-top: 40px;
}
.pl-legend-pill {
  display: inline-flex; align-items: center; gap: 10px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 10px 16px; border-radius: 999px;
  color: #fff; font-size: 13px;
  cursor: pointer; font-family: inherit;
  transition: background .2s, border-color .2s;
}
.pl-legend-pill:hover, .pl-legend-lit {
  background: rgba(255,255,255,0.08);
}
.pl-legend-dot { width: 10px; height: 10px; border-radius: 50%; }
.pl-legend-name { font-weight: 600; }
.pl-legend-range { font-family: var(--pl-mono); font-size: 11px; letter-spacing: 0.14em; color: rgba(255,255,255,0.55); }

/* Mobile list (compass fallback) */
.pl-mlist { display: none; margin-top: 30px; }
.pl-mlist-group { margin-bottom: 26px; }
.pl-mlist-head {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 8px 16px; border-radius: 999px; border: 1px solid;
  font-family: var(--pl-mono); font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;
  font-weight: 600; margin-bottom: 14px;
}
.pl-mlist-head-dot { width: 8px; height: 8px; border-radius: 50%; }
.pl-mlist-items { display: flex; flex-direction: column; gap: 12px; }
.pl-mlist-item {
  display: flex; gap: 14px; align-items: flex-start;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px; padding: 14px;
}
.pl-mlist-num {
  flex-shrink: 0;
  width: 34px; height: 34px; border-radius: 8px;
  display: inline-flex; align-items: center; justify-content: center;
  color: #0b0f1a; font-weight: 700; font-size: 15px;
}
.pl-mlist-t { color: #fff; font-weight: 600; font-size: 15px; }
.pl-mlist-d { color: rgba(255,255,255,0.7); font-size: 13.5px; margin-top: 4px; line-height: 1.5; }
.pl-mlist-o { color: var(--pl-gold); font-size: 12.5px; margin-top: 6px; }

@media (max-width: 760px){
  .pl-dial-wrap, .pl-legend { display: none; }
  .pl-compass-grid { grid-template-columns: 1fr; }
  .pl-rdout { display: none; }
  .pl-mlist { display: block; }
}

/* Finish cap */
.pl-finish {
  margin-top: 60px; text-align: center;
  background: linear-gradient(160deg, rgba(20,35,56,0.6), rgba(10,18,32,0.6));
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 22px; padding: 40px 28px; color: #fff;
}
.pl-finish-icon { font-size: 32px; }
.pl-finish-h { font-family: var(--font-display), Georgia, serif; font-size: 24px; margin: 14px 0 0; }
.pl-finish-p { color: rgba(255,255,255,0.7); max-width: 560px; margin: 12px auto 24px; line-height: 1.6; }

/* ============ POSITIVITY PATH ============ */
.pl-path .pl-fcard { display: flex; flex-direction: column; }
.pl-tier { position: relative; }
.pl-tier .pl-fcard-num { color: rgba(11,18,32,0.5); }
.pl-tier-ul {
  list-style: none; padding: 0; margin: 18px 0 0 0;
  display: flex; flex-direction: column; gap: 8px;
  font-size: 14px; color: var(--pl-ink-mute);
}
.pl-tier-ul li {
  padding-left: 22px; position: relative; line-height: 1.5;
}
.pl-tier-ul li::before {
  content: "✓"; position: absolute; left: 0; top: 0;
  color: var(--pl-gold-deep); font-weight: 700;
}
.pl-tier-featured {
  background: linear-gradient(160deg, #142338 0%, #0a1220 100%);
  color: #fff;
  border-color: rgba(255,255,255,0.08);
}
.pl-tier-featured .pl-fcard-t { color: #fff; }
.pl-tier-featured .pl-fcard-b { color: rgba(255,255,255,0.7); }
.pl-tier-featured .pl-tier-ul { color: rgba(255,255,255,0.8); }
.pl-tier-featured .pl-tier-ul li::before { color: var(--pl-gold); }
.pl-tier-featured .pl-fcard-num { color: rgba(255,255,255,0.5); }

.pl-ribbon {
  position: absolute; top: 18px; right: 0;
  background: linear-gradient(135deg, #f5d17a, #c99b3a);
  color: #0b0f1a; font-family: var(--pl-mono);
  font-size: 10.5px; letter-spacing: 0.2em; font-weight: 700;
  padding: 6px 14px 6px 12px;
  border-radius: 999px 0 0 999px;
}

/* copy of .pl-fcard-* for tier reuse handled above */
.pl-tier .pl-fcard-t,
.pl-tier .pl-fcard-b { color: inherit; }
.pl-tier { color: var(--pl-ink); }
.pl-tier .pl-fcard-t { color: var(--pl-ink); }
.pl-tier .pl-fcard-b { color: var(--pl-ink-mute); }

/* ============ WHY CHOOSE ============ */
.pl-3up-plain { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
@media (max-width: 900px){ .pl-3up-plain { grid-template-columns: 1fr; } }
.pl-why {
  background: #fff; color: var(--pl-ink);
  border: 1px solid var(--pl-line-dk); border-radius: 20px;
  padding: 28px 24px; transition: transform .3s ease, box-shadow .3s ease, border-color .3s;
}
.pl-why:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 50px -30px rgba(0,0,0,0.35);
  border-color: rgba(201,155,58,0.35);
}
.pl-why-icon {
  width: 54px; height: 54px; border-radius: 14px;
  background: linear-gradient(160deg, #142338, #0a1220);
  color: var(--pl-gold);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 26px;
}

/* ============ TESTIMONIALS ============ */
.pl-masonry { columns: 3; column-gap: 20px; }
@media (max-width: 900px){ .pl-masonry { columns: 2; } }
@media (max-width: 560px){ .pl-masonry { columns: 1; } }
.pl-tcard {
  break-inside: avoid;
  background: #fff; color: var(--pl-ink);
  border: 1px solid var(--pl-line-dk); border-radius: 20px;
  padding: 26px; margin-bottom: 20px;
}
.pl-tcard-quote {
  display: block;
  font-family: var(--font-display), Georgia, serif;
  font-size: 52px; line-height: 1; color: var(--pl-gold-deep);
  margin-bottom: -6px;
}
.pl-tcard-stars { color: var(--pl-gold); font-size: 13px; letter-spacing: 1px; margin: 4px 0 12px; }
.pl-tcard-q { font-size: 15px; line-height: 1.6; color: var(--pl-ink); }
.pl-tcard-foot { display: flex; align-items: center; gap: 12px; margin-top: 20px; }
.pl-tcard-av {
  width: 40px; height: 40px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 15px;
}
.pl-tcard-n { font-weight: 600; font-size: 14px; color: var(--pl-ink); }
.pl-tcard-r { font-size: 12.5px; color: var(--pl-ink-mute); }

/* ============ CTA BANNER ============ */
.pl-cta-banner {
  position: relative; overflow: hidden;
  border-radius: 32px;
  background: linear-gradient(160deg, #142338 0%, #0a1220 100%);
  padding: 60px 40px;
  box-shadow: 0 40px 80px -30px rgba(0,0,0,0.6);
}
.pl-cta-banner::before {
  content:""; position: absolute; top: -100px; right: -100px;
  width: 400px; height: 400px; border-radius: 50%;
  background: radial-gradient(circle, rgba(233,196,106,0.25), transparent 60%);
  pointer-events: none;
}
.pl-cta-glow { display: none; }
.pl-cta-inner { position: relative; max-width: 760px; margin: 0 auto; text-align: center; }
`;
