import Reveal from "@/components/ui/Reveal";
import { pillars } from "@/lib/site";

export default function Framework() {
  return (
    <section id="pillars" className="section border-t border-line">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Framework</p>
          <h2 className="mt-5 text-display-2 font-display">
            Three pillars, one{" "}
            <span className="gold-text italic">thriving</span> teenager
          </h2>
          <p className="mt-5 text-ink-muted leading-relaxed md:text-lg">
            Like legs of a stool — without one, everything wobbles. Our
            Positivity Framework™ balances all three simultaneously.
          </p>
        </Reveal>

        <Reveal className="mt-16 grid gap-6 md:grid-cols-3" stagger>
          {pillars.map((p) => (
            <article
              key={p.n}
              data-reveal-item
              className="card group flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl gold-text">{p.n}</span>
                <span className="text-2xl">{p.icon}</span>
              </div>
              <h3 className="mt-6 text-display-3 font-display">{p.title}</h3>
              <p className="mt-4 flex-1 text-ink-muted leading-relaxed">
                {p.body}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink-muted">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
