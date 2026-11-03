"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CAMP_POINTS, JTP_POINTS, MODULES } from "./data";

/* -------------------------------------------------------------------------- */
/*  Curriculum: horizontal journey rail (scroll-snap) with prev / next        */
/* -------------------------------------------------------------------------- */

export function CurriculumRail() {
  const rail = useRef<HTMLOListElement>(null);
  const [idx, setIdx] = useState(0);

  // Track which card is nearest the left edge as the rail scrolls
  const onScroll = useCallback(() => {
    const el = rail.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const left = el.scrollLeft;
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - el.offsetLeft - left);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setIdx(best);
  }, []);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const go = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const next = Math.max(0, Math.min(MODULES.length - 1, idx + dir));
    const card = el.children[next] as HTMLElement | undefined;
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <div className="pm-rail-wrap">
      <div className="pm-rail-bar">
        <span className="pm-rail-count">
          <strong>{String(idx + 1).padStart(2, "0")}</strong> / {String(MODULES.length).padStart(2, "0")}
        </span>
        <span className="pm-rail-track" aria-hidden>
          <span style={{ width: `${((idx + 1) / MODULES.length) * 100}%` }} />
        </span>
        <span className="pm-rail-btns">
          <button type="button" onClick={() => go(-1)} disabled={idx === 0} aria-label="Previous module">
            ←
          </button>
          <button type="button" onClick={() => go(1)} disabled={idx === MODULES.length - 1} aria-label="Next module">
            →
          </button>
        </span>
      </div>

      <ol ref={rail} className="pm-rail" aria-label="Course modules">
        {MODULES.map((m) => (
          <li key={m.n} className="pm-step">
            <div className="pm-step-head">
              <span className="pm-step-n">{m.n}</span>
              <span className="pm-step-dot" aria-hidden />
            </div>
            <h3 className="pm-step-name">{m.name}</h3>
            <p className="pm-step-tag">{m.tag}</p>
            <p className="pm-step-why">{m.why}</p>
            <ul className="pm-step-keys">
              {m.keys.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
            <p className="pm-step-benefit">{m.benefit}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Bonuses: tabbed panel                                                      */
/* -------------------------------------------------------------------------- */

const TABS = [
  { k: "Bonus 1", t: "Transform Your Child into a Super Achiever!" },
  { k: "Bonus 2", t: "2-Day Live Camp with Certification" },
  { k: "Bonus 3", t: "Journey to Positivity Course — FREE Access" },
];

export function BonusTabs() {
  const [i, setI] = useState(0);

  const onKey = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const n = (idx + 1) % TABS.length;
      setI(n);
      document.getElementById(`pm-bonus-tab-${n}`)?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const n = (idx - 1 + TABS.length) % TABS.length;
      setI(n);
      document.getElementById(`pm-bonus-tab-${n}`)?.focus();
    }
  };

  return (
    <div className="pm-tabs">
      <div className="pm-tabs-list" role="tablist" aria-label="Bonuses">
        {TABS.map((tab, idx) => (
          <button
            key={tab.k}
            id={`pm-bonus-tab-${idx}`}
            type="button"
            role="tab"
            aria-selected={i === idx}
            aria-controls="pm-bonus-panel"
            tabIndex={i === idx ? 0 : -1}
            className={`pm-tab ${i === idx ? "is-on" : ""}`}
            onClick={() => setI(idx)}
            onKeyDown={(e) => onKey(e, idx)}
          >
            <span className="pm-tab-k">{tab.k}</span>
            <span className="pm-tab-t">{tab.t}</span>
          </button>
        ))}
      </div>

      <div
        id="pm-bonus-panel"
        role="tabpanel"
        aria-labelledby={`pm-bonus-tab-${i}`}
        className="pm-tab-panel"
      >
        <div key={i} className="pm-fade">
          <span className="pm-tab-panel-k">{TABS[i].k} · Included free</span>
          <h3 className="pm-tab-panel-t">{TABS[i].t}</h3>

          {i === 0 && (
            <>
              <p>
                Will you be able to shape your child&apos;s future for success?
                This powerful eBook reveals{" "}
                <strong>7 Simple &amp; Effective Ways</strong> to positively
                influence your child&apos;s mindset, unlocking their true
                potential.
              </p>
              <div className="pm-triangle">
                <svg viewBox="0 0 200 172" aria-hidden className="pm-triangle-svg">
                  <polygon points="100,8 192,164 8,164" fill="none" stroke="url(#pm-tri)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="pm-tri" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#f5d17a" />
                      <stop offset="1" stopColor="#b58cfa" />
                    </linearGradient>
                  </defs>
                  <text x="100" y="118" textAnchor="middle" fill="#f5f4ef" fontSize="15" fontStyle="italic" fontFamily="Georgia, serif">Success</text>
                </svg>
                <span className="pm-tri-l pm-tri-top">Mindset</span>
                <span className="pm-tri-l pm-tri-left">Skills</span>
                <span className="pm-tri-l pm-tri-right">Knowledge</span>
              </div>
              <p>
                <strong>The Success Triangle Concept:</strong> Success isn&apos;t
                just about Skills and Knowledge — it&apos;s the Mindset that
                completes the equation. While education provides knowledge, the
                right mindset amplifies success.
              </p>
              <p>
                Equip your child with a Powerful Mindset to help them thrive in
                academics, career, and life. Get this exclusive eBook as a FREE
                Bonus when you enrol today!
              </p>
            </>
          )}

          {i === 1 && (
            <>
              <p>
                Join an exclusive two-day live training session led by expert
                coaches — going beyond theory with hands-on learning and
                personalised guidance.
              </p>
              <ul className="pm-tab-list">
                {CAMP_POINTS.map((p) => (
                  <li key={p.s}>
                    <strong>{p.s}</strong>
                    <span>{p.r}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {i === 2 && (
            <>
              <p>
                A life-changing gift — FREE access to our Journey to Positivity
                course, an engaging transformational programme designed just for
                young minds. <strong>Valued at ₹2,990, now included free.</strong>
              </p>
              <ul className="pm-tab-list">
                {JTP_POINTS.map((p) => (
                  <li key={p.s}>
                    <strong>{p.s}</strong>
                    <span>{p.r}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
