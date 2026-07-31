import Link from "next/link";
import { site } from "@/lib/site";

const LOGO_WHITE =
  "https://res.cloudinary.com/twteccae/image/upload/Logo_White_szjcqg.svg";

const cols = [
  {
    title: "Courses",
    links: [
      { label: "Accelerated Learning", href: "/accelerated-learning" },
      { label: "Positive Mind Mastery", href: "/positive-mind-mastery" },
      { label: "I Love Exams", href: "/i-love-exams" },
      { label: "All Courses", href: site.urls.allCourses, external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Free Ebook", href: site.urls.ebook, external: true },
      { label: "Podcast", href: site.urls.spotify, external: true },
      { label: "Posters", href: site.urls.posters, external: true },
      { label: "Newsletter", href: site.urls.newsletter, external: true },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "WhatsApp Community", href: site.urls.whatsapp, external: true },
      { label: "Book a Session", href: site.urls.calendly, external: true },
      { label: "Positivity Score", href: site.urls.positivityScore, external: true },
      { label: "Login to Hub", href: site.urls.hub, external: true },
    ],
  },
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
