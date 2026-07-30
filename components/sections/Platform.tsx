import Reveal from "@/components/ui/Reveal";
import { platformFeatures } from "@/lib/site";

export default function Platform() {
  return (
    <section className="section border-t border-line">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">The Platform</p>
          <h2 className="mt-5 text-display-2 font-display">
            Everything your child needs, in{" "}
            <span className="gold-text italic">one place</span>
          </h2>
        </Reveal>

        <Reveal className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger>
          {platformFeatures.map((f) => (
            <div
              key={f.title}
              data-reveal-item
              className="card group relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/5 blur-2xl transition-opacity group-hover:bg-gold/10" />
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-6 font-display text-xl">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {f.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
