import Reveal from "@/components/ui/Reveal";

const items = [
  {
    tag: "World Health Organisation",
    body: "1 in 7 adolescents (10–19) faces a mental health challenge — the vast majority go unaddressed. Early positive intervention creates lifelong behavioural change.",
  },
  {
    tag: "Stanford University",
    body: "Research confirms positivity directly boosts academic performance, mental health, and social relationships. Students with a positive mindset dramatically outperform their peers.",
  },
  {
    tag: "Neuro-Linguistic Programming",
    body: "We harness the science of NLP and human psychology — giving children and parents the tools to cultivate confidence, resilience, and lifelong success.",
  },
];

export default function Science() {
  return (
    <section id="science" className="section border-t border-line">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">The Science</p>
          <h2 className="mt-5 text-display-2 font-display">
            The science behind why positivity{" "}
            <span className="gold-text italic">changes everything</span>
          </h2>
        </Reveal>

        <Reveal className="mt-16 grid gap-6 md:grid-cols-3" stagger>
          {items.map((it) => (
            <div key={it.tag} data-reveal-item className="card">
              <p className="text-xs uppercase tracking-[0.18em] gold-text">
                {it.tag}
              </p>
              <p className="mt-5 text-ink-muted leading-relaxed">{it.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
