import Reveal from "@/components/ui/Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: React.ReactNode;
};

export default function PageShell({
  eyebrow,
  title,
  intro,
  primaryCta,
  secondaryCta,
  children,
}: Props) {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-48">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade" />
        <div className="container-x">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-6 text-display-1 font-display">{title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-ink-muted">
              {intro}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  {primaryCta.label}
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>
      {children}
    </>
  );
}
