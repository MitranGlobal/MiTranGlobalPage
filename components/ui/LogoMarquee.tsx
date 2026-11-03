/* eslint-disable @next/next/no-img-element */
import { pressLogos } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Seamless, constant-speed logo carousel.
 *
 * How it stays glitch-free:
 *  - The track holds two IDENTICAL groups and slides by exactly one group
 *    (-50%). Spacing lives inside each slot (padding), not as a flex `gap`,
 *    so both halves are pixel-identical and the loop point is invisible.
 *  - Each group repeats the logos enough times to be wider than any screen,
 *    so there's never an empty stretch before the loop resets.
 *  - Speed is set per breakpoint (see .logo-marquee in globals.css) so it
 *    moves at a calm, similar pace on phones and desktops.
 *  - Logos load eagerly with fixed slot sizes, so nothing pops in mid-scroll.
 *  - With "reduce motion" on, a static row is shown instead.
 */
export default function LogoMarquee({
  size = "lg",
  className,
}: {
  size?: "md" | "lg";
  className?: string;
}) {
  const group = [...pressLogos, ...pressLogos];
  const slot =
    size === "lg"
      ? "h-24 w-40 px-5 md:h-32 md:w-60 md:px-7"
      : "h-20 w-36 px-5 md:h-28 md:w-56 md:px-7";

  return (
    <div className={cn("logo-marquee relative", className)}>
      {/* Animated version */}
      <div className="logo-marquee-viewport overflow-hidden motion-reduce:hidden">
        <div className="logo-marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center"
              aria-hidden={copy === 1 || undefined}
            >
              {group.map((logo, i) => (
                <div
                  key={`${copy}-${i}`}
                  className={cn("flex shrink-0 items-center justify-center", slot)}
                >
                  <img
                    src={logo.src}
                    alt={copy === 0 && i < pressLogos.length ? logo.name : ""}
                    className="max-h-full max-w-full object-contain opacity-85 transition-opacity duration-300 hover:opacity-100"
                    decoding="async"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Static version for reduced motion */}
      <div className="hidden flex-wrap items-center justify-center gap-4 px-6 motion-reduce:flex">
        {pressLogos.map((logo) => (
          <div
            key={logo.name}
            className={cn("flex shrink-0 items-center justify-center", slot)}
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
