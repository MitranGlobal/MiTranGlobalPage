"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { HABITS, PILLARS, sessions } from "@/lib/platinum";
import { site } from "@/lib/site";

/* -------------------------------------------------------------------------- */
/*  GEOMETRY                                                                   */
/* -------------------------------------------------------------------------- */

const CX = 310, CY = 310;
const RSI = 150, RSO = 194, RN = 214, RSW = 232, RA = 262, RL = 289;
const ROMAN = ["I", "II", "III", "IV"];

const rad = (deg: number) => (deg * Math.PI) / 180;
const nodeAngle = (i: number) => -90 + i * 15;
const pt = (r: number, deg: number): [number, number] => [
  CX + r * Math.cos(rad(deg)),
  CY + r * Math.sin(rad(deg)),
];

function arcPath(r: number, a1: number, a2: number) {
  const [x1, y1] = pt(r, a1);
  const [x2, y2] = pt(r, a2);
  const delta = ((a2 - a1) % 360 + 360) % 360;
  const largeArc = delta > 180 ? 1 : 0;
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

/**
 * The 24-Session Compass: four pillars, six sessions each. Hover, click or use
 * arrow keys on a node; the panel shows the session, who attends and the daily
 * LevelUp habit. The Platinum logo sits in the centre of the dial.
 */
export default function Compass() {
  const [cur, setCur] = useState(0);
  const [tour, setTour] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);
  const nodeRefs = useRef<Array<SVGGElement | null>>([]);

  useEffect(() => {
    setFadeKey((k) => k + 1);
  }, [cur]);

  useEffect(() => {
    if (!tour) return;
    const id = setInterval(() => setCur((c) => (c + 1) % 24), 2600);
    return () => clearInterval(id);
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

  const curSession = sessions[cur];
  const curPillar = PILLARS[curSession.p];

  const pillarArcs = useMemo(
    () =>
      PILLARS.map((_, p) => {
        const first = p * 6;
        const last = first + 5;
        return arcPath(RA, nodeAngle(first) - 6, nodeAngle(last) + 6);
      }),
    []
  );

  const sweepPath = useMemo(() => (cur === 0 ? "" : arcPath(RSW, nodeAngle(0), nodeAngle(cur))), [cur]);

  return (
    <section id="roadmap" className="pl-compass-sec scroll-mt-20">
      <div className="pl-compass-bg" aria-hidden />
      <div className="container-x pl-compass-inner">
        <div className="pl-head">
          <p className="pl-eyebrow">The 24-Session Compass</p>
          <h2 className="pl-h2">
            Twenty-four steps. <em className="pl-gold">One transformation.</em>
          </h2>
          <p className="pl-sub">
            Four pillars, six sessions each. Explore any session to see what your
            teen will work on and the daily habit that carries it into real life.
          </p>
        </div>

        <div className="pl-compass-grid">
          <div className="pl-dial-wrap">
            <svg viewBox="0 0 620 620" className="pl-dial" role="group" aria-label="24-session compass">
              <defs>
                <filter id="pl-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <circle cx={CX} cy={CY} r={214} fill="none" stroke="rgba(255,255,255,0.06)" />
              <circle cx={CX} cy={CY} r={150} fill="none" stroke="rgba(255,255,255,0.04)" />

              {PILLARS.map((p, i) => (
                <path
                  key={p.name}
                  d={pillarArcs[i]}
                  fill="none"
                  stroke={p.c}
                  strokeWidth={curSession.p === i ? 18 : 14}
                  strokeLinecap="round"
                  opacity={curSession.p === i ? 0.95 : 0.28}
                  style={{ transition: "opacity .3s, stroke-width .3s" }}
                />
              ))}

              {PILLARS.map((p, i) => {
                const mid = (nodeAngle(i * 6) + nodeAngle(i * 6 + 5)) / 2;
                const [x, y] = pt(RL, mid);
                return (
                  <text
                    key={p.name}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="pl-dial-plabel"
                    fill={p.c}
                    opacity={curSession.p === i ? 1 : 0.4}
                  >
                    PILLAR {ROMAN[i]}
                  </text>
                );
              })}

              {sessions.map((_, i) => {
                const a = nodeAngle(i);
                const [x1, y1] = pt(RSI, a);
                const [x2, y2] = pt(RSO, a);
                return <line key={`sp-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.08)" strokeWidth={1} />;
              })}

              {sweepPath && (
                <path d={sweepPath} fill="none" stroke="#e9c46a" strokeWidth={3} strokeLinecap="round" filter="url(#pl-glow)" />
              )}

              {sessions.map((s, i) => {
                const [x, y] = pt(RN, nodeAngle(i));
                const pillar = PILLARS[s.p];
                const isSel = i === cur;
                return (
                  <g key={s.n} transform={`translate(${x} ${y})`}>
                    <g
                      ref={(el) => {
                        nodeRefs.current[i] = el;
                      }}
                      className={`pl-pnode ${isSel ? "pl-pnode-sel" : ""}`}
                      tabIndex={0}
                      role="button"
                      aria-label={`Session ${s.n}: ${s.t}`}
                      aria-current={isSel}
                      onMouseEnter={() => select(i)}
                      onFocus={() => select(i)}
                      onClick={() => select(i, true)}
                      onKeyDown={(e) => onNodeKey(e, i)}
                    >
                      {isSel && <circle r={28} fill="none" stroke={pillar.c} strokeWidth={1.2} opacity={0.55} />}
                      {s.ms && <circle r={25} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth={1} />}
                      <circle r={20} fill="#0d1524" stroke={pillar.c} strokeWidth={2.5} />
                      <text textAnchor="middle" dominantBaseline="middle" className="pl-pnode-t" dy="0.35em">
                        {s.n}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>

            {/* Centre: the Platinum badge */}
            <div className="pl-center">
              <Image
                src="/images/platinum-logo.png"
                alt="MiTran Global Platinum"
                width={783}
                height={786}
                className="pl-center-logo"
                sizes="(min-width: 1024px) 220px, 40vw"
              />
            </div>
          </div>

          {/* Detail panel */}
          <div key={fadeKey} className="pl-rdout pl-rfade">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="pl-chip"
                style={{ background: `${curPillar.c}22`, color: curPillar.c, borderColor: `${curPillar.c}55` }}
              >
                Pillar {ROMAN[curSession.p]} · {curPillar.name}
              </span>
              {curSession.who && (
                <span className="rounded-full border border-white/15 bg-white/[0.05] px-2.5 py-1 text-[11px] text-ink-muted">
                  {curSession.who}
                </span>
              )}
            </div>
            <div className="pl-rdout-num">Session {String(curSession.n).padStart(2, "0")}</div>
            <h3 className="pl-rdout-t">{curSession.t}</h3>
            <p className="pl-rdout-d">{curSession.d}</p>
            <div className="pl-rdout-o">
              <span className="pl-rdout-o-star">★</span>
              <span>
                <strong>Daily habit —</strong>{" "}
                {curSession.habits.length === 4
                  ? "All four LevelUp habits"
                  : curSession.habits.map((h) => HABITS[h].name).join(" + ")}
                {curSession.intro && (
                  <span className="ml-2 rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">
                    New
                  </span>
                )}
              </span>
            </div>

            <div className="pl-rdout-btns">
              <button onClick={() => select((cur - 1 + 24) % 24, true)} className="pl-rdout-btn" aria-label="Previous session">
                ‹ Prev
              </button>
              <button onClick={() => setTour((t) => !t)} className="pl-rdout-btn pl-rdout-btn-tour" aria-pressed={tour}>
                {tour ? "❚❚ Pause" : "▶ Auto-tour"}
              </button>
              <button onClick={() => select((cur + 1) % 24, true)} className="pl-rdout-btn" aria-label="Next session">
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
              style={{ borderColor: curSession.p === i ? `${p.c}88` : "rgba(255,255,255,0.10)" }}
            >
              <span className="pl-legend-dot" style={{ background: p.c }} />
              <span className="pl-legend-name">{p.name}</span>
              <span className="pl-legend-range">{p.range}</span>
            </button>
          ))}
        </div>

        {/* Mobile list */}
        <div className="pl-mlist">
          {PILLARS.map((p, pi) => (
            <div key={p.name} className="pl-mlist-group">
              <div className="pl-mlist-head" style={{ background: `${p.c}22`, color: p.c, borderColor: `${p.c}55` }}>
                <span className="pl-mlist-head-dot" style={{ background: p.c }} />
                Pillar {ROMAN[pi]} · {p.name}
              </div>
              <div className="pl-mlist-items">
                {sessions
                  .filter((s) => s.p === pi)
                  .map((s) => (
                    <div key={s.n} className="pl-mlist-item">
                      <div className="pl-mlist-num" style={{ background: p.c }}>
                        {s.n}
                      </div>
                      <div>
                        <div className="pl-mlist-t">{s.t}</div>
                        {s.who && <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-ink-faint">{s.who}</div>}
                        <div className="pl-mlist-d">{s.d}</div>
                        <div className="pl-mlist-o">
                          Daily habit —{" "}
                          {s.habits.length === 4 ? "All four LevelUp habits" : s.habits.map((h) => HABITS[h].name).join(" + ")}
                          {s.intro ? " (new)" : ""}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* The four LevelUp habits */}
        <div className="mt-16">
          <p className="pl-eyebrow" style={{ display: "flex", justifyContent: "center" }}>
            Between sessions
          </p>
          <h3 className="mt-3 text-center font-display text-2xl md:text-3xl">
            Four daily <em className="pl-gold">LevelUp</em> habits
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-ink-muted">
            Habits are layered, not launched all at once — one for the parent from
            day one, then one new habit for your child in each pillar. Streaks
            reward consistency, not perfection.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(HABITS).map((h) => (
              <div key={h.name} className="pl-card" style={{ borderTop: `2px solid ${h.color}` }}>
                <p className="text-[11px] uppercase tracking-[0.16em]" style={{ color: h.color }}>
                  From session {h.from}
                </p>
                <p className="mt-2 font-display text-lg text-ink">{h.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{h.purpose}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pl-finish">
          <div className="pl-finish-icon">🎓</div>
          <h3 className="pl-finish-h">Graduation &amp; lifelong toolkit</h3>
          <p className="pl-finish-p">
            At session 24 your teen celebrates their growth in marks, confidence
            and strength, and leaves with clear action steps — and the habits
            keep going after the program.
          </p>
          <a href={site.urls.booking} target="_blank" rel="noreferrer" className="pl-btn pl-btn-primary">
            Book a call →
          </a>
        </div>
      </div>
    </section>
  );
}
