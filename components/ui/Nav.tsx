"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/cn";

const LOGO_WHITE =
  "https://res.cloudinary.com/twteccae/image/upload/Logo_White_szjcqg.svg";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-bg/70 backdrop-blur-xl border-b border-line"
            : "bg-transparent"
        )}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center" aria-label={site.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_WHITE}
              alt={site.name}
              className="h-8 w-auto md:h-9"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm text-ink-muted transition-colors hover:text-ink",
                    active && "text-ink"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.06] border border-line"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.urls.enroll}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex btn-primary py-2 text-xs"
            >
              Enroll
            </a>
            <button
              aria-label="Menu"
              className="lg:hidden grid h-9 w-9 place-items-center rounded-full border border-line bg-white/[0.03]"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="relative block h-2.5 w-4">
                <span
                  className={cn(
                    "absolute left-0 right-0 top-0 h-px bg-ink transition-transform",
                    mobileOpen && "translate-y-[5px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 right-0 bottom-0 h-px bg-ink transition-transform",
                    mobileOpen && "-translate-y-[5px] -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x pt-24">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-2xl border border-line bg-bg-card px-5 py-4 text-lg font-medium",
                        pathname === link.href && "border-gold/40 text-gold"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <a
                href={site.urls.enroll}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6 w-full"
              >
                Enroll →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
