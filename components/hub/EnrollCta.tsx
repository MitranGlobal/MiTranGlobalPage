import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Positivity Hub enrol button: "Enroll your child", with the highlighted
 * "Unlock Today's Special Price" flag above it. Links to the Positivity Hub
 * checkout.
 */
export default function EnrollCta({
  label = "Enroll your child",
  full = false,
  align = "start",
  className,
}: {
  label?: string;
  /** Stretch the button to the container width. */
  full?: boolean;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2.5",
        align === "center" ? "items-center" : "items-start",
        full && "items-stretch",
        className
      )}
    >
      <span
        className={cn(
          "inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-gold/[0.12] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold-bright",
          full && "self-center"
        )}
      >
        <span className="relative flex h-2 w-2" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75 motion-reduce:hidden" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
        </span>
        Unlock Today&apos;s Special Price
      </span>
      <a
        href={site.urls.hubCheckout}
        target="_blank"
        rel="noreferrer"
        className={cn("btn-primary px-8 py-4 text-base", full && "w-full")}
      >
        {label} →
      </a>
    </div>
  );
}
