import Image from "next/image";
import type { BandItem } from "@/lib/bands";
import { cn } from "@/lib/cn";

// Card shapes repeat wide → tall → square-ish (same rhythm as the source page)
const widths = [
  "w-[78vw] sm:w-[440px] lg:w-[520px]",
  "w-[64vw] sm:w-[280px] lg:w-[300px]",
  "w-[72vw] sm:w-[380px] lg:w-[400px]",
];

/**
 * Endless, always-moving row of rounded image cards with a text overlay.
 * The row is rendered twice so the loop is seamless (track slides -50%).
 */
export default function ImageBand({
  items,
  label,
  reverse = false,
  marker,
  className,
}: {
  items: BandItem[];
  label: string;
  reverse?: boolean;
  /** Optional symbol shown before each card title, e.g. "✦" */
  marker?: string;
  className?: string;
}) {
  const cards = (copy: number) =>
    items.map((item, i) => (
      <figure
        key={`${copy}-${item.title}`}
        className={cn(
          "relative h-[280px] shrink-0 overflow-hidden rounded-[20px] border border-line bg-bg-card md:h-[340px]",
          widths[i % widths.length]
        )}
      >
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 520px, 78vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" aria-hidden />
        <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-7">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-gold-bright md:text-[13px]">
            {marker && <span aria-hidden className="mr-1.5">{marker}</span>}
            {item.title}
          </p>
          <p className="mt-2.5 max-w-[30ch] font-display text-xl leading-tight text-ink md:text-[23px]">
            {item.body}
          </p>
        </figcaption>
      </figure>
    ));

  return (
    <div role="region" aria-label={label} className={cn("image-band overflow-hidden", className)}>
      <div className={cn("image-band-track flex w-max", reverse && "image-band-reverse")}>
        <div className="flex gap-5 pr-5">{cards(0)}</div>
        <div className="flex gap-5 pr-5" aria-hidden>
          {cards(1)}
        </div>
      </div>
    </div>
  );
}
