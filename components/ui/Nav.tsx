"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  navLinks,
  programs,
  resources,
  site,
  type NavItem,
  type ProgramItem,
  type ResourceItem,
} from "@/lib/site";
import { cn } from "@/lib/cn";

const LOGO_WHITE =
  "https://res.cloudinary.com/twteccae/image/upload/Logo_White_szjcqg.svg";

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
      if (e.key === "Escape") setOpenDropdown(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Hover open with a small close delay so the mouse can travel to the panel
  const openWithHover = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(id);
  };
  const closeWithHover = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 140);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
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
              className="h-16 w-auto md:h-20"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((item) =>
              item.type === "link" ? (
                <DesktopLink
                  key={item.label}
                  item={item}
                  active={
                    item.href === "/"
                      ? pathname === "/"
                      : item.href !== "/" && pathname.startsWith(item.href.split("#")[0])
                  }
                />
              ) : (
                <DesktopDropdown
                  key={item.label}
                  item={item}
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
              href={site.urls.contact}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex btn-primary px-5 py-2.5 text-sm"
            >
              Contact Us
            </a>
            <button
              aria-label="Menu"
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
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-bg/95 backdrop-blur-xl xl:hidden"
          >
            <div className="container-x pb-16 pt-24">
              <ul className="flex flex-col gap-2">
                {navLinks.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    {item.type === "link" ? (
                      <MobileLink item={item} active={item.href === pathname} />
                    ) : (
                      <MobileDropdown item={item} />
                    )}
                  </motion.li>
                ))}
              </ul>

              <a
                href={site.urls.contact}
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
/*  Desktop: simple link                                                       */
/* -------------------------------------------------------------------------- */

function DesktopLink({
  item,
  active,
}: {
  item: Extract<NavItem, { type: "link" }>;
  active: boolean;
}) {
  const linkClass = cn(
    "relative rounded-full px-3.5 py-1.5 text-sm text-ink-muted transition-colors hover:text-ink",
    active && "text-ink"
  );
  const pill = active && (
    <motion.span
      layoutId="nav-pill"
      className="absolute inset-0 -z-10 rounded-full border border-line bg-white/[0.06]"
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
    />
  );

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" className={linkClass}>
        {item.label}
        {pill}
      </a>
    );
  }
  return (
    <Link href={item.href} className={linkClass}>
      {item.label}
      {pill}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  Desktop: card dropdown                                                     */
/* -------------------------------------------------------------------------- */

function DesktopDropdown({
  item,
  isOpen,
  onOpen,
  onClose,
  onClick,
}: {
  item: Extract<NavItem, { type: "dropdown" }>;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onClick: () => void;
}) {
  const items = item.group === "programs" ? programs : resources;
  const wide = item.group === "programs";

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={cn(
          "relative flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm transition-colors",
          isOpen ? "text-ink" : "text-ink-muted hover:text-ink"
        )}
      >
        {item.label}
        <svg
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
          viewBox="0 0 12 12" fill="none" aria-hidden
        >
          <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            role="menu"
            className={cn(
              "absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 rounded-2xl border border-line bg-bg-card/95 p-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl",
              wide ? "w-[640px]" : "w-[520px]"
            )}
          >
            {/* Notch arrow */}
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-line bg-bg-card/95" />

            <div className="grid grid-cols-2 gap-2">
              {items.map((entry) => (
                <DropdownCard key={entry.label} entry={entry} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownCard({ entry }: { entry: ProgramItem | ResourceItem }) {
  const isFlagship = "flagship" in entry && entry.flagship;
  const content = (
    <div className="flex items-start gap-3">
      <div
        className={cn(
          "grid h-10 w-10 shrink-0 place-items-center rounded-lg border text-lg",
          isFlagship
            ? "border-gold/40 bg-gold/[0.10]"
            : "border-line bg-white/[0.04]"
        )}
      >
        {entry.icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "text-sm font-medium",
              isFlagship ? "text-gold" : "text-ink"
            )}
          >
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
  );

  const wrapperClass = cn(
    "group rounded-xl border p-3 transition-all",
    isFlagship
      ? "border-gold/25 bg-gradient-to-br from-gold/[0.08] to-transparent hover:border-gold/50 hover:bg-gold/[0.10]"
      : "border-transparent hover:border-line hover:bg-white/[0.03]"
  );

  return entry.external ? (
    <a href={entry.href} target="_blank" rel="noreferrer" className={wrapperClass} role="menuitem">
      {content}
    </a>
  ) : (
    <Link href={entry.href} className={wrapperClass} role="menuitem">
      {content}
    </Link>
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
  const cls = cn(
    "block rounded-2xl border border-line bg-bg-card px-5 py-4 text-lg font-medium",
    active && "border-gold/40 text-gold"
  );
  return item.external ? (
    <a href={item.href} target="_blank" rel="noreferrer" className={cls}>
      {item.label} <span aria-hidden>↗</span>
    </a>
  ) : (
    <Link href={item.href} className={cls}>
      {item.label}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mobile: expandable dropdown                                                */
/* -------------------------------------------------------------------------- */

function MobileDropdown({
  item,
}: {
  item: Extract<NavItem, { type: "dropdown" }>;
}) {
  const [open, setOpen] = useState(false);
  const items = item.group === "programs" ? programs : resources;

  return (
    <div className="rounded-2xl border border-line bg-bg-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-5 py-4 text-left text-lg font-medium text-ink"
        aria-expanded={open}
      >
        {item.label}
        <svg
          className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")}
          viewBox="0 0 12 12" fill="none" aria-hidden
        >
          <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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
            <div className="grid gap-1.5 border-t border-line px-3 py-3">
              {items.map((entry) => (
                <MobileDropdownItem key={entry.label} entry={entry} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDropdownItem({ entry }: { entry: ProgramItem | ResourceItem }) {
  const isFlagship = "flagship" in entry && entry.flagship;
  const content = (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-md border text-base",
          isFlagship
            ? "border-gold/40 bg-gold/[0.10]"
            : "border-line bg-white/[0.04]"
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
  );
  const cls = cn(
    "rounded-lg px-3 py-2.5 transition-colors",
    isFlagship ? "bg-gold/[0.06] hover:bg-gold/[0.10]" : "hover:bg-white/[0.03]"
  );
  return entry.external ? (
    <a href={entry.href} target="_blank" rel="noreferrer" className={cls}>
      {content}
    </a>
  ) : (
    <Link href={entry.href} className={cls}>
      {content}
    </Link>
  );
}
