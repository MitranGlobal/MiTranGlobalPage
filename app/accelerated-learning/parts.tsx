"use client";

import { useState } from "react";
import { MODULES } from "./data";

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
