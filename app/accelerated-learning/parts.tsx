"use client";

import { useState } from "react";
import { MODULES, TESTIMONIALS } from "./data";

/* -------------------------------------------------------------------------- */
/*  Curriculum: two-pane module explorer (desktop) / accordion (mobile)        */
/* -------------------------------------------------------------------------- */

export function ModuleExplorer() {
  const [active, setActive] = useState(0);
  const m = MODULES[active];

  return (
    <div className="al-explorer">
      <ol className="al-explorer-list" role="tablist" aria-label="Course modules">
        {MODULES.map((mod, i) => {
          const on = i === active;
          return (
            <li key={mod.n} className={`al-explorer-item ${on ? "is-on" : ""}`}>
              <button
                type="button"
                role="tab"
                id={`al-tab-${i}`}
                aria-selected={on}
                aria-controls="al-module-panel"
                className="al-explorer-btn"
                onClick={() => setActive(i)}
              >
                <span className="al-explorer-n">{mod.n}</span>
                <span className="al-explorer-text">
                  <span className="al-explorer-name">{mod.name}</span>
                  <span className="al-explorer-tag">{mod.tag}</span>
                </span>
                <span className="al-explorer-chev" aria-hidden>
                  →
                </span>
              </button>

              {/* Mobile: the panel renders inline under the open module */}
              {on && (
                <div className="al-explorer-inline">
                  <ModuleBody mod={mod} />
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {/* Desktop: one panel beside the list */}
      <div
        className="al-explorer-panel"
        role="tabpanel"
        id="al-module-panel"
        aria-labelledby={`al-tab-${active}`}
      >
        <div key={m.n} className="al-explorer-fade">
          <div className="al-explorer-panel-head">
            <span className="al-explorer-panel-n">Module {m.n}</span>
            <span className="al-explorer-panel-of">of 08</span>
          </div>
          <h3 className="al-explorer-panel-t">{m.name}</h3>
          <p className="al-explorer-panel-tag">{m.tag}</p>
          <ModuleBody mod={m} />
          <div className="al-explorer-progress" aria-hidden>
            {MODULES.map((x, i) => (
              <span key={x.n} className={i <= active ? "is-done" : ""} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ModuleBody({ mod }: { mod: (typeof MODULES)[number] }) {
  return (
    <>
      <p className="al-mod-why">{mod.why}</p>
      <ul className="al-mod-keys">
        {mod.keys.map((k) => (
          <li key={k}>{k}</li>
        ))}
      </ul>
      <p className="al-mod-benefit">
        <span className="al-mod-benefit-lbl">Outcome</span>
        {mod.benefit}
      </p>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Testimonials: one large quote, people as selector tabs                     */
/* -------------------------------------------------------------------------- */

const AV_GRAD = [
  "linear-gradient(135deg,#5cc0d6,#2a6f80)",
  "linear-gradient(135deg,#f5d17a,#c99b3a)",
  "linear-gradient(135deg,#b58cfa,#6d4fc4)",
];

export function TestimonialSwitcher() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <div className="al-voice">
      <figure key={t.n} className="al-voice-stage al-explorer-fade">
        <div className="al-voice-mark" aria-hidden>
          &ldquo;
        </div>
        <div className="al-voice-stars" aria-label="5 out of 5 stars">
          ★★★★★
        </div>
        <blockquote className="al-voice-q">{t.q}</blockquote>
        <figcaption className="al-voice-cap">
          <strong>{t.n}</strong>
          <span>{t.r}</span>
        </figcaption>
      </figure>

      <div className="al-voice-tabs" role="tablist" aria-label="Choose a testimonial">
        {TESTIMONIALS.map((p, idx) => (
          <button
            key={p.n}
            type="button"
            role="tab"
            aria-selected={idx === i}
            className={`al-voice-tab ${idx === i ? "is-on" : ""}`}
            onClick={() => setI(idx)}
          >
            <span className="al-voice-av" style={{ background: AV_GRAD[idx] }}>
              {p.n.charAt(0)}
            </span>
            <span className="al-voice-tab-text">
              <span className="al-voice-tab-n">{p.n}</span>
              <span className="al-voice-tab-r">{p.r}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
