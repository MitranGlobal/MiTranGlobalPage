"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  navLinks,
  site,
  type MenuGroup,
  type MenuItem,
  type NavItem,
} from "@/lib/site";
import { cn } from "@/lib/cn";

const LOGO_WHITE =
  "https://res.cloudinary.com/twteccae/image/upload/Logo_White_szjcqg.svg";

/** Decide whether a nav link should render with an active pill. */
function isActive(item: Extract<NavItem, { type: "link" }>, pathname: string) {
  // External URLs never highlight
  if (item.external) return false;
  // Home is active only on the exact root path
  if (item.href === "/") return pathname === "/";
  // Anchor-only links (e.g. "/#framework") don't highlight from any page
  if (item.href.startsWith("/#")) return false;
  // Otherwise: exact match or a subroute of this link
  const base = item.href.split("#")[0];
  return pathname === base || pathname.startsWith(base + "/");
}

/** A dropdown is "active" when the current page is one of its internal links. */
function dropdownActive(groups: MenuGroup[], pathname: string) {
  return groups.some((g) =>
    g.items.some((i) => !i.external && pathname === i.href)
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock page scroll behind the full-screen mobile menu so the page
  // doesn't scroll underneath it on touch devices.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Close the mobile menu if the viewport grows to the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const onChange = () => mq.matches && setMobileOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    []
  );

  // Hover open with a small close delay so the mouse can travel to the panel
  const openWithHover = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(id);
  };
  const closeWithHover = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 160);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled || mobileOpen
            ? "bg-bg/80 backdrop-blur-xl border-b border-line"
            : "bg-transparent"
        )}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label={site.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_WHITE}
              alt={site.name}
              className="h-14 w-auto md:h-20"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((item) =>
              item.type === "link" ? (
                <DesktopLink
                  key={item.label}
                  item={item}
                  active={isActive(item, pathname)}
                />
              ) : (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  active={dropdownActive(item.groups, pathname)}
                  isOpen={openDropdown === item.label}
                  onOpen={() => openWithHover(item.label)}
                  onClose={closeWithHover}
                  onClick={() =>
                    setOpenDropdown((prev) => (prev === item.label ? null : item.label))
                  }
                />
              )
            )}
          </nav>

          {/* Right side: Contact CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={site.urls.booking}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex btn-primary px-5 py-2.5 text-sm"
            >
              Contact Us
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="xl:hidden grid h-10 w-10 place-items-center rounded-full border border-line bg-white/[0.03]"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="relative block h-3 w-4">
                <span
                  className={cn(
                    "absolute left-0 right-0 top-0 h-px bg-ink transition-transform",
                    mobileOpen && "translate-y-[6px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 right-0 bottom-0 h-px bg-ink transition-transform",
                    mobileOpen && "-translate-y-[6px] -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-bg/95 backdrop-blur-xl xl:hidden"
          >
            <div
              className="container-x pb-16 pt-24"
              // Close on any link tap — same-page anchors (e.g. /#framework)
              // don't change the pathname, so the effect above won't fire.
              onClick={(e) => {
                if ((e.target as HTMLElement).closest("a")) setMobileOpen(false);
              }}
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    {item.type === "link" ? (
                      <MobileLink item={item} active={isActive(item, pathname)} />
                    ) : (
                      <MobileDropdown item={item} />
                    )}
                  </motion.li>
                ))}
              </ul>

              <a
                href={site.urls.booking}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6 w-full"
              >
                Contact Us →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shared: internal vs external anchor                                        */
/* -------------------------------------------------------------------------- */

function SmartLink({
  href,
  external,
  className,
  children,
  role,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  role?: string;
}) {
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={className} role={role}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className} role={role}>
      {children}
    </Link>
  );
}

function Chevron({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      className={cn("transition-transform duration-300", open && "rotate-180", className)}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GroupTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-3 pb-1.5 pt-1 text-[10.5px] font-medium uppercase tracking-[0.2em] text-ink-faint">
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*  Desktop: simple link                                                       */
/* -------------------------------------------------------------------------- */

function DesktopLink({
  item,
  active,
}: {
  item: Extract<NavItem, { type: "link" }>;
  active: boolean;
}) {
  return (
    <SmartLink
      href={item.href}
      external={item.external}
      className={cn(
        "relative rounded-full px-3.5 py-1.5 text-sm text-ink-muted transition-colors hover:text-ink",
        active && "text-ink"
      )}
    >
      {item.label}
      {active && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 -z-10 rounded-full border border-line bg-white/[0.06]"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </SmartLink>
  );
}

/* -------------------------------------------------------------------------- */
/*  Desktop: grouped dropdown panel                                            */
/* -------------------------------------------------------------------------- */

function DesktopDropdown({
  item,
  active,
  isOpen,
  onOpen,
  onClose,
  onClick,
}: {
  item: Extract<NavItem, { type: "dropdown" }>;
  active: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onClick: () => void;
}) {
  const columns = item.groups.filter((g) => !g.compact);
  const strips = item.groups.filter((g) => g.compact);

  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={cn(
          "relative flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm transition-colors",
          isOpen || active ? "text-ink" : "text-ink-muted hover:text-ink"
        )}
      >
        {item.label}
        <Chevron open={isOpen} className="h-3.5 w-3.5" />
        {active && (
          <span className="absolute inset-0 -z-10 rounded-full border border-line bg-white/[0.06]" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            // The horizontal offset lives in the animation (x) — Framer Motion
            // writes an inline transform that would override a Tailwind
            // translate class, leaving the panel off-centre.
            initial={{ opacity: 0, x: "-60%", y: 8 }}
            animate={{ opacity: 1, x: "-60%", y: 0 }}
            exit={{ opacity: 0, x: "-60%", y: 6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            role="menu"
            // Outer wrapper owns the centering + an invisible hover bridge
            // (pt-3) so the pointer can travel from the button to the panel
            // without the menu closing. Shifted 60% left (notch at 60%) so the
            // panel stays inside the viewport at the 1280px breakpoint.
            className="absolute left-1/2 top-full z-50 w-[720px] pt-3"
          >
            <div className="relative rounded-2xl border border-line bg-bg-card/95 p-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              {/* Notch arrow */}
              <span className="absolute -top-1.5 left-[60%] h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-line bg-bg-card" />

              <div className="grid grid-cols-2 gap-2">
                {columns.map((group) => (
                  <div key={group.title}>
                    <GroupTitle>{group.title}</GroupTitle>
                    <div className="grid gap-1">
                      {group.items.map((entry) => (
                        <DropdownCard key={entry.label} entry={entry} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {strips.map((group) => (
                <div
                  key={group.title}
                  className="mt-2 flex items-center gap-2 border-t border-line px-1 pt-3"
                >
                  <span className="shrink-0 px-2 text-[10.5px] font-medium uppercase tracking-[0.2em] text-ink-faint">
                    {group.title}
                  </span>
                  <div className="flex flex-1 flex-wrap gap-2">
                    {group.items.map((entry) => (
                      <SmartLink
                        key={entry.label}
                        href={entry.href}
                        external={entry.external}
                        role="menuitem"
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-sm text-ink-muted transition-colors hover:border-white/20 hover:text-ink"
                      >
                        <span aria-hidden>{entry.icon}</span>
                        {entry.label}
                      </SmartLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownCard({ entry }: { entry: MenuItem }) {
  const isFlagship = !!entry.flagship;
  return (
    <SmartLink
      href={entry.href}
      external={entry.external}
      role="menuitem"
      className={cn(
        "group rounded-xl border p-3 transition-all",
        isFlagship
          ? "border-gold/25 bg-gradient-to-br from-gold/[0.08] to-transparent hover:border-gold/50 hover:bg-gold/[0.10]"
          : "border-transparent hover:border-line hover:bg-white/[0.03]"
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "grid h-10 w-10 shrink-0 place-items-center rounded-lg border text-lg",
            isFlagship ? "border-gold/40 bg-gold/[0.10]" : "border-line bg-white/[0.04]"
          )}
        >
          {entry.icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className={cn("text-sm font-medium", isFlagship ? "text-gold" : "text-ink")}>
              {entry.label}
            </span>
            {isFlagship && (
              <span className="rounded-full border border-gold/40 bg-gold/[0.10] px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-gold">
                Flagship
              </span>
            )}
          </div>
          <p className="mt-1 text-xs leading-relaxed text-ink-muted">
            {entry.description}
          </p>
        </div>
      </div>
    </SmartLink>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mobile: link                                                               */
/* -------------------------------------------------------------------------- */

function MobileLink({
  item,
  active,
}: {
  item: Extract<NavItem, { type: "link" }>;
  active: boolean;
}) {
  return (
    <SmartLink
      href={item.href}
      external={item.external}
      className={cn(
        "block rounded-2xl border border-line bg-bg-card px-5 py-4 text-lg font-medium",
        active && "border-gold/40 text-gold"
      )}
    >
      {item.label} {item.external && <span aria-hidden>↗</span>}
    </SmartLink>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mobile: expandable grouped dropdown                                        */
/* -------------------------------------------------------------------------- */

function MobileDropdown({
  item,
}: {
  item: Extract<NavItem, { type: "dropdown" }>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-line bg-bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-5 py-4 text-left text-lg font-medium text-ink"
        aria-expanded={open}
      >
        {item.label}
        <Chevron open={open} className="h-4 w-4" />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-3 border-t border-line px-3 py-3">
              {item.groups.map((group) => (
                <div key={group.title}>
                  <GroupTitle>{group.title}</GroupTitle>
                  {group.compact ? (
                    <div className="flex flex-wrap gap-2 px-3 pt-1">
                      {group.items.map((entry) => (
                        <SmartLink
                          key={entry.label}
                          href={entry.href}
                          external={entry.external}
                          className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-2 text-sm text-ink-muted"
                        >
                          <span aria-hidden>{entry.icon}</span>
                          {entry.label}
                        </SmartLink>
                      ))}
                    </div>
                  ) : (
                    <div className="grid gap-1">
                      {group.items.map((entry) => (
                        <MobileDropdownItem key={entry.label} entry={entry} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDropdownItem({ entry }: { entry: MenuItem }) {
  const isFlagship = !!entry.flagship;
  return (
    <SmartLink
      href={entry.href}
      external={entry.external}
      className={cn(
        "rounded-lg px-3 py-2.5 transition-colors",
        isFlagship ? "bg-gold/[0.06] hover:bg-gold/[0.10]" : "hover:bg-white/[0.03]"
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "grid h-9 w-9 shrink-0 place-items-center rounded-md border text-base",
            isFlagship ? "border-gold/40 bg-gold/[0.10]" : "border-line bg-white/[0.04]"
          )}
        >
          {entry.icon}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className={cn("text-sm font-medium", isFlagship ? "text-gold" : "text-ink")}>
              {entry.label}
            </span>
            {isFlagship && (
              <span className="rounded-full border border-gold/40 bg-gold/[0.10] px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-gold">
                Flagship
              </span>
            )}
          </div>
          <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
            {entry.description}
          </p>
        </div>
      </div>
    </SmartLink>
  );
}
