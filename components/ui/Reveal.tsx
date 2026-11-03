"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// useLayoutEffect sets the hidden start state before the browser paints,
// avoiding a visible flash of content that then disappears and fades back in.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

let refreshHooked = false;
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  // Trigger positions are measured on mount, before images, video and web
  // fonts have loaded and shifted the layout. Re-measure once everything is
  // in, otherwise some sections reveal late or stay hidden while on screen.
  if (!refreshHooked) {
    refreshHooked = true;
    const refresh = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") setTimeout(refresh, 0);
    else window.addEventListener("load", refresh, { once: true });
    document.fonts?.ready.then(refresh).catch(() => {});
  }
}

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  y?: number;
  stagger?: boolean;
  staggerSelector?: string;
};

export default function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  y = 30,
  stagger = false,
  staggerSelector = "[data-reveal-item]",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (stagger) {
        const items = el.querySelectorAll(staggerSelector);
        gsap.from(items, {
          y,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.09,
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            once: true,
          },
        });
      } else {
        gsap.from(el, {
          y,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            once: true,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [delay, y, stagger, staggerSelector]);

  const Comp = Tag as React.ElementType;
  return (
    <Comp ref={ref as React.RefObject<HTMLElement>} className={className}>
      {children}
    </Comp>
  );
}
