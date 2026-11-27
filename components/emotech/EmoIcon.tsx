import { cn } from "@/lib/cn";

/** Line icons for the EmoTech sections (inherit `currentColor`). */
export default function EmoIcon({ name, className }: { name: string; className?: string }) {
  const p = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cn("h-8 w-8", className),
    "aria-hidden": true,
  };
  switch (name) {
    case "family":
      return (
        <svg {...p}>
          <circle cx="15" cy="10" r="4" />
          <circle cx="31" cy="10" r="4" />
          <circle cx="38" cy="25" r="3" />
          <path d="M9 42V24a6 6 0 0 1 12 0v18M25 42V24a6 6 0 0 1 12 0M15 42V30M31 42V30M34 42V34a4 4 0 0 1 8 0v8" />
        </svg>
      );
    case "checklist":
      return (
        <svg {...p}>
          <rect x="11" y="6" width="26" height="36" rx="3" />
          <path d="M17 16l2 2 4-4M17 26l2 2 4-4M17 36l2 2 4-4M27 16h5M27 26h5M27 36h5" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...p}>
          <path d="M8 34a16 16 0 1 1 32 0" />
          <path d="M24 34l8-10" />
          <circle cx="24" cy="34" r="2.5" />
          <path d="M12 26l2 1M24 18v2M36 26l-2 1" />
        </svg>
      );
    case "report":
      return (
        <svg {...p}>
          <path d="M14 6h14l8 8v28H14z" />
          <path d="M28 6v8h8M19 22h12M19 28h12M19 34h8" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...p}>
          <path d="M4 20l7-7 7 4 6-4 7 4 7-4 6 7" />
          <path d="M10 24l9 9a3 3 0 0 0 4-4M16 28l6 6a3 3 0 0 0 4-4M22 26l6 6a3 3 0 0 0 4-4l-9-9-4 3a3 3 0 0 1-4-4l5-4" />
        </svg>
      );
    case "brain":
      return (
        <svg {...p}>
          <path d="M18 8a6 6 0 0 0-6 6 6 6 0 0 0-4 10 6 6 0 0 0 4 10 6 6 0 0 0 10 4V10a4 4 0 0 0-4-2zM30 8a6 6 0 0 1 6 6 6 6 0 0 1 4 10 6 6 0 0 1-4 10 6 6 0 0 1-10 4V10a4 4 0 0 1 4-2z" />
          <path d="M22 18h-4M26 26h4M22 30h-3" />
        </svg>
      );
    case "group":
      return (
        <svg {...p}>
          <circle cx="24" cy="12" r="4" />
          <circle cx="12" cy="16" r="3.5" />
          <circle cx="36" cy="16" r="3.5" />
          <path d="M6 36c0-6 12-12 18-12s18 6 18 12" />
          <path d="M10 40h28" />
        </svg>
      );
    case "principal":
      return (
        <svg {...p}>
          <circle cx="18" cy="12" r="5" />
          <path d="M8 40V28a10 10 0 0 1 20 0v12" />
          <rect x="26" y="26" width="16" height="14" rx="1.5" />
          <path d="M34 26v14M29 31h2M37 31h2M4 18l6 6" />
        </svg>
      );
    case "student":
      return (
        <svg {...p}>
          <circle cx="24" cy="14" r="6" />
          <path d="M18 9c3-4 9-4 12 0" />
          <path d="M12 42v-6a12 12 0 0 1 24 0v6M24 30v6" />
        </svg>
      );
    case "laptop":
      return (
        <svg {...p}>
          <rect x="10" y="12" width="28" height="20" rx="2" />
          <path d="M4 38h40l-3-6H7z" />
        </svg>
      );
    case "camera":
      return (
        <svg {...p}>
          <circle cx="24" cy="20" r="12" />
          <circle cx="24" cy="20" r="5" />
          <path d="M18 32l-3 8h18l-3-8" />
        </svg>
      );
    case "smile":
      return (
        <svg {...p}>
          <circle cx="24" cy="24" r="17" />
          <circle cx="18" cy="20" r="1.8" fill="currentColor" stroke="none" />
          <circle cx="30" cy="20" r="1.8" fill="currentColor" stroke="none" />
          <path d="M16 28c4 5 12 5 16 0" />
        </svg>
      );
    default:
      return null;
  }
}
