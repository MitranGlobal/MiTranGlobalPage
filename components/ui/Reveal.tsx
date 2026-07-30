"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
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

  useEffect(() => {
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
