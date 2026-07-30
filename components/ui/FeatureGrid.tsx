import Reveal from "@/components/ui/Reveal";

type Feature = { icon?: string; title: string; body: string };

export default function FeatureGrid({
  eyebrow,
  heading,
  features,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  features: Feature[];
}) {
  return (
    <section className="section border-t border-line">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-5 text-display-2 font-display">{heading}</h2>
        </Reveal>
        <Reveal className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger>
          {features.map((f) => (
            <div key={f.title} data-reveal-item className="card">
              {f.icon && <div className="text-3xl">{f.icon}</div>}
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
