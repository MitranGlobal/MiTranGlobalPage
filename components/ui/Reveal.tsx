"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Scroll reveal that can never leave content stuck invisible.
 *
 * The previous ScrollTrigger version only played when the visitor scrolled
 * *into* a section from above. If the page opened already scrolled down
 * (reload / back button / scroll restoration), jumped via an anchor link, or a
 * fast phone fling skipped past a section in one frame, the trigger landed in
 * its "already left" state, never played, and the section stayed blank.
 *
 * Now the rule is simply: as soon as an element's top is inside the viewport
 * OR above it (i.e. it has been seen or scrolled past), it fades in. Checked
 * on mount, on every scroll/resize (rAF-throttled, one shared listener), and
 * after load — so layout shifts from images/video/fonts can't break it.
 * Content below the fold still animates in as you reach it. With reduced
 * motion, nothing is ever hidden.
 */

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Pending = { el: HTMLElement; reveal: () => void };
const pending = new Set<Pending>();
let listening = false;
let frame = 0;

// Reveal anything whose top has reached 92% of the viewport height — this
// includes everything ABOVE the viewport, which is what fixes the blank bug.
function check() {
  frame = 0;
  const limit = window.innerHeight * 0.92;
  pending.forEach((p) => {
    if (p.el.getBoundingClientRect().top < limit) {
      pending.delete(p);
      p.reveal();
    }
  });
}
function schedule() {
  if (!frame) frame = requestAnimationFrame(check);
}
function listen() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  window.addEventListener("load", schedule);
  window.addEventListener("pageshow", schedule); // back/forward cache
  document.fonts?.ready.then(schedule).catch(() => {});
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets: Element[] = stagger
      ? Array.from(el.querySelectorAll(staggerSelector))
      : [el];
    if (!targets.length) return;

    // Hide before first paint, then fade in when seen.
    gsap.set(targets, { opacity: 0, y });

    let tween: gsap.core.Tween | null = null;
    const entry: Pending = {
      el,
      reveal: () => {
        tween = gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: stagger ? 0.09 : 0,
          delay,
          // Drop inline styles afterwards so nothing lingers (e.g. hover
          // transforms on cards work normally).
          clearProps: "opacity,transform",
        });
      },
    };

    pending.add(entry);
    listen();
    check(); // already on screen or scrolled past? reveal right away

    return () => {
      pending.delete(entry);
      tween?.kill();
      gsap.set(targets, { clearProps: "opacity,transform" });
    };
  }, [delay, y, stagger, staggerSelector]);

  const Comp = Tag as React.ElementType;
  return (
    <Comp ref={ref as React.RefObject<HTMLElement>} className={className}>
      {children}
    </Comp>
  );
}
