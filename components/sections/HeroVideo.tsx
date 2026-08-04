"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const VIDEO_SRC =
  "https://res.cloudinary.com/twteccae/video/upload/STUDENT_MONTAGE1_su3ezx.mp4";

/**
 * Poster is a single frame extracted straight from the video by Cloudinary
 * (so_0 = start offset 0s). It gives us a lightweight first paint that blends
 * with the background while the actual video streams in.
 */
const POSTER_SRC =
  "https://res.cloudinary.com/twteccae/video/upload/so_0/STUDENT_MONTAGE1_su3ezx.jpg";

export default function HeroVideo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // The <source> is only mounted once the video is near/inside the viewport,
  // so nothing downloads while it's off-screen (lazy loading).
  const [shouldLoad, setShouldLoad] = useState(false);
  // Drives the smooth fade-in — we only reveal once a frame is actually ready.
  const [isReady, setIsReady] = useState(false);
  const reduceMotion = useReducedMotion();

  // Lazy-load the source + pause/resume playback based on visibility.
  useEffect(() => {
    const el = wrapRef.current;
    const video = videoRef.current;
    if (!el) return;

    // Very old browsers without IntersectionObserver: just load eagerly.
    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true); // download starts the first time we're near view
          video?.play().catch(() => {});
        } else {
          video?.pause(); // stop decoding frames while off-screen (saves CPU/battery)
        }
      },
      // Start loading a little before it scrolls into view for a seamless entrance.
      { rootMargin: "200px 0px", threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // When the source is first attached, force the element to pick it up and play.
  useEffect(() => {
    const video = videoRef.current;
    if (!shouldLoad || !video) return;
    video.load();
    video.play().catch(() => {});
  }, [shouldLoad]);

  return (
    <motion.div
      ref={wrapRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isReady ? 1 : 0 }}
      transition={{
        duration: reduceMotion ? 0 : 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full"
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="none"
        poster={POSTER_SRC}
        aria-hidden="true"
        onCanPlay={() => setIsReady(true)}
        className="hero-video-mask block h-auto w-full"
      >
        {shouldLoad && <source src={VIDEO_SRC} type="video/mp4" />}
      </video>

      {/* Soft tint that ties the feathered edges back into the page background. */}
      <div className="hero-video-blend pointer-events-none absolute inset-0" />
    </motion.div>
  );
}
