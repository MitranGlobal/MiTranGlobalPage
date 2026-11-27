import Link from "next/link";
import { site } from "@/lib/site";
import SocialIcon from "@/components/ui/SocialIcon";

const LOGO_WHITE =
  "https://res.cloudinary.com/twteccae/image/upload/Logo_White_szjcqg.svg";

const cols = [
  {
    title: "For Parents",
    links: [
      { label: "Positivity Hub", href: "/positivity-hub" },
      { label: "Positivity Hub Platinum", href: "/platinum" },
      { label: "Positive Mind Mastery", href: "/positive-mind-mastery" },
      { label: "Accelerated Learning", href: "/accelerated-learning" },
      { label: "I Love Exams", href: "/i-love-exams" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Podcast", href: site.urls.spotify, external: true },
      { label: "Newsletter", href: site.urls.newsletter, external: true },
      { label: "WhatsApp Community", href: site.urls.whatsapp, external: true },
      { label: "Take the Quiz", href: "/quiz" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Real Life Real Stories", href: "/real-life-real-stories" },
      { label: "YellowZone Schools", href: site.urls.yellowZoneSchools },
      { label: "Book a call", href: site.urls.booking, external: true },
      { label: "Login to Hub", href: site.urls.hub, external: true },
    ],
  },
];

const socials = [
  { name: "instagram", label: "Instagram", href: site.urls.instagram },
  { name: "youtube", label: "YouTube", href: site.urls.youtube },
  { name: "linkedin", label: "LinkedIn", href: site.urls.linkedin },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg-soft/60">
      <div className="container-x grid gap-12 py-20 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_WHITE}
            alt={site.name}
            className="h-20 w-auto"
            loading="lazy"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
            Consistently imparting positivity — building confident, resilient,
            and future-ready teenagers through science-backed learning.
          </p>
          <p className="mt-6 text-xs text-ink-faint">
            234, Spaces Shantiniketan, Prestige Shantiniketan, 2nd Floor,
            Crescent Tower 4, Krishnarajapuram, Bangalore-560066, Karnataka,
            India.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map((sc) => (
              <a
                key={sc.name}
                href={sc.href}
                target="_blank"
                rel="noreferrer"
                aria-label={sc.label}
                title={sc.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/[0.03] text-ink-muted transition-colors hover:border-gold/40 hover:text-gold"
              >
                <SocialIcon name={sc.name} />
              </a>
            ))}
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs uppercase tracking-[0.18em] text-ink-faint">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {col.links.map((l) =>
                "external" in l && l.external ? (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink-muted transition-colors hover:text-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-ink-muted transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-faint md:flex-row">
          <p>© {new Date().getFullYear()} MiTran Global. All rights reserved.</p>
          <p className="italic">
            &quot;A positive teen today, a confident leader tomorrow.&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}
