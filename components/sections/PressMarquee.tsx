import LogoMarquee from "@/components/ui/LogoMarquee";

export default function PressMarquee() {
  return (
    <section className="relative border-y border-line bg-bg-soft/40 py-10">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.24em] text-ink-faint">
        As seen in
      </p>
      <LogoMarquee />
    </section>
  );
}
