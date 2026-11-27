"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { driveThumb, drivePreview, type TileSize, type VideoStory } from "@/lib/videoStories";
import type { Story } from "@/lib/stories";

const SPAN: Record<TileSize, string> = {
  big: "col-span-2 row-span-2",
  tall: "row-span-2",
  wide: "col-span-2",
  sm: "",
};

type Brick = { kind: "video"; v: VideoStory } | { kind: "quote"; s: Story };

/** Videos laid brick by brick, with a written story dropped in every few tiles. */
function interleave(videos: VideoStory[], quotes: Story[]): Brick[] {
  const out: Brick[] = [];
  let q = 0;
  videos.forEach((v, i) => {
    out.push({ kind: "video", v });
    if ((i + 1) % 6 === 3 && q < quotes.length) out.push({ kind: "quote", s: quotes[q++] });
  });
  while (q < quotes.length) out.push({ kind: "quote", s: quotes[q++] });
  return out;
}

function VideoTile({ v, onOpen, onRatio }: { v: VideoStory; onOpen: () => void; onRatio: (portrait: boolean) => void }) {
  const [failed, setFailed] = useState(false);
  const img = useRef<HTMLImageElement>(null);
  const big = v.size === "big";
  // The image may finish (or fail) before React hydrates and attaches handlers.
  useEffect(() => {
    const el = img.current;
    if (!el || !el.complete) return;
    if (el.naturalWidth === 0) setFailed(true);
    else onRatio(el.naturalHeight > el.naturalWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Play ${v.name}'s story`}
      className={`group relative overflow-hidden rounded-2xl border border-line bg-bg-card text-left ${SPAN[v.size]}`}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={img}
          src={driveThumb(v.id, big ? 900 : 600)}
          alt=""
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={(e) => onRatio(e.currentTarget.naturalHeight > e.currentTarget.naturalWidth)}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.18] via-bg-card to-bg" aria-hidden />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" aria-hidden />

      <span
        className={`absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-bg shadow-[0_0_0_6px_rgba(233,196,106,0.18)] transition-transform duration-300 group-hover:scale-110 ${
          big ? "h-16 w-16" : "h-11 w-11"
        }`}
        aria-hidden
      >
        <Play className={big ? "ml-1 h-7 w-7" : "ml-0.5 h-5 w-5"} fill="currentColor" strokeWidth={0} />
      </span>

      <span className="absolute inset-x-0 bottom-0 p-3 md:p-4">
        <span className={`block font-medium leading-tight text-white ${big ? "text-lg md:text-xl" : "text-sm"}`}>
          {v.name}
        </span>
      </span>
    </button>
  );
}

function QuoteTile({ s }: { s: Story }) {
  return (
    <article className="relative col-span-2 row-span-2 flex flex-col overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/[0.08] via-bg-card to-bg-card p-5 md:p-6">
      <span className="pointer-events-none absolute right-5 top-0 font-display text-7xl leading-none text-gold/15" aria-hidden>
        &ldquo;
      </span>
      <p className="font-display text-lg leading-snug md:text-xl">&ldquo;{s.pull}&rdquo;</p>
      <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-ink-muted md:line-clamp-6">{s.quote}</p>
      <div className="mt-auto flex items-center gap-3 pt-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={s.photo} alt={s.name} className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-gold/70" />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-ink">{s.name}</p>
          <p className="truncate text-xs text-ink-faint">{s.role}</p>
        </div>
      </div>
    </article>
  );
}

export default function VideoBento({ videos, quotes }: { videos: VideoStory[]; quotes: Story[] }) {
  const [open, setOpen] = useState<VideoStory | null>(null);
  const [portrait, setPortrait] = useState<Record<string, boolean>>({});
  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const bricks = interleave(videos, quotes);
  const isPortrait = open ? portrait[open.id] ?? open.size === "tall" : false;

  return (
    <>
      <div className="grid grid-flow-dense auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[180px] md:grid-cols-4 md:gap-4 xl:grid-cols-6">
        {bricks.map((b) =>
          b.kind === "video" ? (
            <VideoTile
              key={b.v.id}
              v={b.v}
              onOpen={() => setOpen(b.v)}
              onRatio={(p) => setPortrait((m) => (m[b.v.id] === p ? m : { ...m, [b.v.id]: p }))}
            />
          ) : (
            <QuoteTile key={b.s.name} s={b.s} />
          )
        )}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${open.name}'s story`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className={`relative w-full ${isPortrait ? "max-w-[min(420px,calc((100vh-8rem)*9/16))]" : "max-w-5xl"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="font-display text-xl text-white">{open.name}</p>
              <button
                type="button"
                onClick={close}
                aria-label="Close video"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className={`overflow-hidden rounded-2xl border border-line bg-black ${isPortrait ? "aspect-[9/16]" : "aspect-video"}`}>
              <iframe
                src={drivePreview(open.id)}
                title={`${open.name}'s story`}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
