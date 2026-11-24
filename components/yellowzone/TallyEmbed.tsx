"use client";

import { useEffect, useState } from "react";
import { yz } from "@/lib/yellowzone";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

/**
 * Tally embed (from the YellowZone Lead Capture page): application questions
 * and appointment slot in one form. Tally's script handles the height; if it
 * fails to load the iframe gets a plain `src` so the form still appears.
 * On submit we fire the conversion events and show a thank-you message.
 */
export default function TallyEmbed() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const src = "https://tally.so/widgets/embed.js";
    const ensureLoaded = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
        return;
      }
      document
        .querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])")
        .forEach((el) => {
          el.src = el.dataset.tallySrc as string;
        });
    };
    if (document.querySelector(`script[src="${src}"]`)) {
      ensureLoaded();
    } else {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = ensureLoaded;
      script.onerror = ensureLoaded;
      document.body.appendChild(script);
    }
    const timer = window.setTimeout(ensureLoaded, 3000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (typeof e.origin !== "string" || !e.origin.includes("tally.so")) return;
      let event: string | undefined;
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : (e.data as { event?: string });
        event = data?.event;
      } catch {
        return;
      }
      if (event !== "Tally.FormSubmitted") return;
      const w = window as unknown as { dataLayer?: unknown[]; fbq?: (...args: unknown[]) => void };
      w.dataLayer?.push({ event: "application_submitted" });
      w.fbq?.("track", "Schedule");
      setDone(true);
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (done) {
    return (
      <div className="px-4 py-12 text-center text-[#2a2416]">
        <p className="font-display text-3xl">Thank you — application received.</p>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-[#2a2416]/70">
          Our assessment team will confirm your slot shortly. Questions? Call{" "}
          <a href={yz.phoneHref} className="font-medium underline underline-offset-4">
            {yz.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <iframe
      data-tally-src={yz.tallySrc}
      loading="lazy"
      width="100%"
      height="500"
      title="Apply for a campus readiness audit"
      className="w-full border-0 bg-transparent"
    />
  );
}
