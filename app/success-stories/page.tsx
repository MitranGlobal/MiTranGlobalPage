import { site } from "@/lib/site";

/* -------------------------------------------------------------------------- */
/*  DATA — placeholder success stories                                         */
/*                                                                             */
/*  Edit this array to add / remove stories. Each `story` has a `type`         */
/*  (image | video | quote) and a `size` that positions it in the bento.      */
/*                                                                             */
/*  Sizes on the 6-column base grid:                                           */
/*    xl   = 6 cols  × 2 rows  (full width)                                    */
/*    lg   = 4 cols  × 2 rows                                                  */
/*    md   = 3 cols  × 1 row                                                   */
/*    tall = 2 cols  × 2 rows                                                  */
/*    sm   = 2 cols  × 1 row                                                   */
/*                                                                             */
/*  To use a real image or video, replace the `media` placeholder with a URL:  */
/*    { ..., media: "/success/arjun.jpg"  }   // image                        */
/*    { ..., media: "/success/arjun.mp4"  }   // video                        */
/*  Or drop the files into /public/success/ and reference by path.            */
/* -------------------------------------------------------------------------- */

type Story = {
  id: string;
  size: "xl" | "lg" | "md" | "tall" | "sm";
  type: "image" | "video" | "quote";
  name: string;
  role: string;
  quote: string;
  media?: string;  // path or URL; leave undefined to show the placeholder
  duration?: string; // video length e.g. "1:24"
  accent?: "teal" | "purple" | "orange" | "gold" | "red";
};

const STORIES: Story[] = [
  {
    id: "arjun-hero",
    size: "xl",
    type: "video",
    name: "Arjun's Journey",
    role: "Class 10 · Bangalore",
    quote: "I used to freeze during exams. Now I walk in knowing exactly what to do.",
    duration: "2:14",
    accent: "gold",
  },
  {
    id: "priya",
    size: "lg",
    type: "image",
    name: "Priya M.",
    role: "Class 9 · Mumbai",
    quote: "The confidence shift is unbelievable. My daughter is a different person at exam time.",
    accent: "teal",
  },
  {
    id: "ramesh",
    size: "md",
    type: "quote",
    name: "Ramesh K.",
    role: "Parent · Chennai",
    quote: "Best investment we made for our son's education. The transformation is measurable.",
    accent: "purple",
  },
  {
    id: "banshika",
    size: "tall",
    type: "video",
    name: "Banshika",
    role: "Class 9 · Jammu",
    quote: "MiTran Global made my life much easier — from anxiety to actually loving what I study.",
    duration: "1:48",
    accent: "orange",
  },
  {
    id: "siddharth",
    size: "sm",
    type: "quote",
    name: "Siddharth's family",
    role: "Class 11 · Dubai",
    quote: "A drive for success and belief in failure as a stepping stone.",
    accent: "gold",
  },
  {
    id: "mahathi",
    size: "md",
    type: "image",
    name: "Mahathi",
    role: "Class 8 · Chennai",
    quote: "I learned that exams are easy once we love the same. Positive Mind Mastery changed me.",
    accent: "teal",
  },
  {
    id: "lakshmi",
    size: "sm",
    type: "quote",
    name: "Lakshmi P.",
    role: "Parent · Mumbai",
    quote: "Fewer arguments, more conversation, a teenager who actually plans her week.",
    accent: "purple",
  },
  {
    id: "kavya",
    size: "md",
    type: "video",
    name: "Kavya's Story",
    role: "Class 10 · Pune",
    quote: "The one-on-one sessions gave me a private space to talk through what I really needed.",
    duration: "1:32",
    accent: "red",
  },
  {
    id: "principal",
    size: "lg",
    type: "quote",
    name: "Dr. Venkat R.",
    role: "Principal · MG School",
    quote: "As a school principal, I've seen many programmes. MiTran's approach is the most systematic and genuinely effective I've encountered in two decades of educational leadership.",
    accent: "gold",
  },
  {
    id: "suresh",
    size: "sm",
    type: "image",
    name: "Suresh A.",
    role: "Parent · Delhi",
    quote: "Not a script. A real relationship with a plan behind it.",
    accent: "orange",
  },
];

const ACCENT: Record<NonNullable<Story["accent"]>, string> = {
  teal:   "#5cc0d6",
  purple: "#b58cfa",
  orange: "#f0a465",
  gold:   "#e9c46a",
  red:    "#ff7070",
};

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function SuccessStoriesPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SS_CSS }} />

      {/* ================================================================== */}
      {/*  HERO                                                              */}
      {/* ================================================================== */}
      <section className="ss-hero">
        <div className="ss-hero-glow" aria-hidden />
        <div className="container-x ss-hero-inner">
          <span className="ss-eyebrow ss-eyebrow-center">Real families · Real change</span>
          <h1 className="ss-h1">
            Success stories from{" "}
            <em className="ss-gold">MiTran families.</em>
          </h1>
          <p className="ss-lede">
            Every story here is a real transformation — a student who moved
            from anxiety to confidence, a parent who saw their child re-engage
            with learning, a teacher who watched a whole classroom shift.
          </p>

          <div className="ss-hero-meta">
            <div className="ss-meta">
              <div className="ss-meta-n">10,000+</div>
              <div className="ss-meta-l">Students transformed</div>
            </div>
            <div className="ss-meta">
              <div className="ss-meta-n">40+</div>
              <div className="ss-meta-l">Nationalities</div>
            </div>
            <div className="ss-meta">
              <div className="ss-meta-n">5.0★</div>
              <div className="ss-meta-l">Google rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  BENTO GRID                                                        */}
      {/* ================================================================== */}
      <section className="ss-sec">
        <div className="container-x">
          <div className="ss-bento">
            {STORIES.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  CTA                                                                */}
      {/* ================================================================== */}
      <section className="ss-sec">
        <div className="container-x">
          <div className="ss-cta">
            <div className="ss-cta-glow" aria-hidden />
            <div className="ss-cta-inner">
              <span className="ss-eyebrow ss-eyebrow-center">Your child could be next</span>
              <h2 className="ss-h2">
                Start your own{" "}
                <em className="ss-gold">success story.</em>
              </h2>
              <p className="ss-lede-center">
                Book a discovery call, take the free Positivity Score
                assessment, or explore the flagship 24-session Platinum
                journey.
              </p>
              <div className="ss-cta-row">
                <a href={site.urls.calendly} target="_blank" rel="noreferrer" className="ss-btn ss-btn-gold">
                  Book a discovery call →
                </a>
                <a href="/platinum" className="ss-btn ss-btn-ghost">
                  Explore Platinum
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  STORY CARD                                                                 */
/* -------------------------------------------------------------------------- */

function StoryCard({ story }: { story: Story }) {
  const accentColor = ACCENT[story.accent ?? "gold"];

  if (story.type === "quote") {
    return (
      <article
        className={`ss-card ss-quote ss-size-${story.size}`}
        style={{ ["--ss-accent" as string]: accentColor }}
      >
        <div className="ss-quote-mark" aria-hidden>&ldquo;</div>
        <p className="ss-quote-txt">{story.quote}</p>
        <div className="ss-foot">
          <div className="ss-avatar" style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}77)` }}>
            {story.name.charAt(0)}
          </div>
          <div>
            <div className="ss-name">{story.name}</div>
            <div className="ss-role">{story.role}</div>
          </div>
        </div>
      </article>
    );
  }

  // image or video
  const isVideo = story.type === "video";
  return (
    <article
      className={`ss-card ss-media ss-size-${story.size}`}
      style={{ ["--ss-accent" as string]: accentColor }}
    >
      <div className="ss-media-frame">
        {story.media ? (
          isVideo ? (
            <video className="ss-media-el" src={story.media} controls playsInline preload="metadata" />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img className="ss-media-el" src={story.media} alt={story.name} loading="lazy" />
          )
        ) : (
          <div className="ss-placeholder" style={{ ["--ss-accent" as string]: accentColor }}>
            <div className="ss-placeholder-icon">
              {isVideo ? (
                <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <circle cx="8.5" cy="10" r="1.5" />
                  <path d="M21 15l-5-5-4 4-3-3-6 6" />
                </svg>
              )}
            </div>
            <div className="ss-placeholder-lbl">
              {isVideo ? "VIDEO PLACEHOLDER" : "IMAGE PLACEHOLDER"}
            </div>
            <div className="ss-placeholder-hint">
              Replace via <code>media:</code> prop
            </div>
          </div>
        )}

        {isVideo && story.duration && (
          <span className="ss-duration">{story.duration}</span>
        )}
        <span className="ss-type-badge">{isVideo ? "▶ Video" : "📷 Photo"}</span>
      </div>

      <div className="ss-media-body">
        <p className="ss-media-quote">&ldquo;{story.quote}&rdquo;</p>
        <div className="ss-foot">
          <div className="ss-name">{story.name}</div>
          <div className="ss-role">{story.role}</div>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*  CSS                                                                        */
/* -------------------------------------------------------------------------- */

const SS_CSS = `
:root {
  --ss-card:      #12141a;
  --ss-line:      rgba(255,255,255,0.08);
  --ss-line-2:    rgba(255,255,255,0.14);
  --ss-ink:       #f5f4ef;
  --ss-ink-mute:  #a3a5ad;
  --ss-ink-faint: #6b6d76;
  --ss-gold:      #e9c46a;
  --ss-mono:      ui-monospace, SFMono-Regular, Menlo, monospace;
}

.ss-gold {
  background: linear-gradient(135deg, #f5d17a 0%, #e9c46a 40%, #c99b3a 100%);
  -webkit-background-clip: text;
          background-clip: text;
  color: transparent;
  font-style: italic;
}

.ss-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--ss-mono);
  font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(245,244,239,0.72);
}
.ss-eyebrow::before {
  content: ""; display: inline-block;
  width: 22px; height: 1px; background: var(--ss-gold);
}
.ss-eyebrow-center { justify-content: center; }

.ss-h1 {
  font-family: var(--font-display), Georgia, serif;
  font-size: clamp(2.5rem, 6vw, 4.6rem);
  line-height: 1.05; letter-spacing: -0.03em;
  margin: 22px 0 0; color: var(--ss-ink);
  font-weight: 500;
  text-align: center;
}
.ss-h2 {
  font-family: var(--font-display), Georgia, serif;
  font-size: clamp(2rem, 4.6vw, 3.4rem);
  line-height: 1.1; letter-spacing: -0.02em;
  margin: 20px 0 0; color: var(--ss-ink);
  font-weight: 500;
  text-align: center;
}
.ss-lede {
  max-width: 640px;
  margin: 22px auto 0;
  color: var(--ss-ink-mute);
  font-size: 17px; line-height: 1.65;
  text-align: center;
}
.ss-lede-center {
  max-width: 560px;
  margin: 20px auto 0;
  color: var(--ss-ink-mute);
  font-size: 16px; line-height: 1.65;
  text-align: center;
}

.ss-btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 8px;
  padding: 13px 22px; border-radius: 999px;
  font-size: 14px; font-weight: 500; text-decoration: none;
  transition: transform .25s, box-shadow .25s, background .25s, border-color .25s;
  cursor: pointer; border: 0;
  font-family: inherit;
  white-space: nowrap;
}
.ss-btn-gold {
  background: linear-gradient(135deg, #f5d17a, #e9c46a 45%, #c99b3a);
  color: #0b0f1a;
  box-shadow: 0 0 60px -12px rgba(233,196,106,0.4);
}
.ss-btn-gold:hover { transform: translateY(-1px); box-shadow: 0 0 80px -8px rgba(233,196,106,0.55); }
.ss-btn-ghost {
  border: 1px solid var(--ss-line-2);
  background: rgba(255,255,255,0.02);
  color: var(--ss-ink);
}
.ss-btn-ghost:hover { border-color: rgba(255,255,255,0.28); background: rgba(255,255,255,0.06); }

.ss-cta-row { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 30px; }

/* ============ HERO ============ */
.ss-hero {
  position: relative;
  padding: 160px 0 60px;
  overflow: hidden;
  text-align: center;
}
@media (max-width: 900px){ .ss-hero { padding: 120px 0 40px; } }
.ss-hero-glow {
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(600px 500px at 50% 30%, rgba(233,196,106,0.14), transparent 60%),
    radial-gradient(500px 400px at 10% 80%, rgba(92,192,214,0.08), transparent 60%),
    radial-gradient(500px 400px at 90% 80%, rgba(181,140,250,0.08), transparent 60%);
}
.ss-hero-inner { position: relative; }

.ss-hero-meta {
  display: flex; justify-content: center; gap: 44px;
  margin-top: 44px; flex-wrap: wrap;
}
.ss-meta { text-align: center; }
.ss-meta-n {
  font-family: var(--font-display), Georgia, serif;
  font-size: 28px; line-height: 1;
  color: var(--ss-gold);
  font-weight: 500;
}
.ss-meta-l {
  font-family: var(--ss-mono);
  font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--ss-ink-faint);
  margin-top: 6px;
}

/* ============ SECTION ============ */
.ss-sec {
  position: relative;
  padding: 60px 0 96px;
}
@media (max-width: 700px){ .ss-sec { padding: 40px 0 64px; } }

/* ============ BENTO ============ */
.ss-bento {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(140px, auto);
  gap: 16px;
}
@media (max-width: 900px){
  .ss-bento { grid-template-columns: repeat(2, 1fr); }
  .ss-size-xl, .ss-size-lg, .ss-size-tall, .ss-size-md, .ss-size-sm {
    grid-column: span 2;
    grid-row: auto;
  }
}
@media (max-width: 560px){
  .ss-bento { grid-template-columns: 1fr; }
  .ss-size-xl, .ss-size-lg, .ss-size-tall, .ss-size-md, .ss-size-sm {
    grid-column: auto;
  }
}
.ss-size-xl   { grid-column: span 6; grid-row: span 2; }
.ss-size-lg   { grid-column: span 4; grid-row: span 2; }
.ss-size-tall { grid-column: span 2; grid-row: span 2; }
.ss-size-md   { grid-column: span 3; grid-row: span 1; }
.ss-size-sm   { grid-column: span 2; grid-row: span 1; }

/* ============ CARD BASE ============ */
.ss-card {
  position: relative;
  background: var(--ss-card);
  border: 1px solid var(--ss-line);
  border-radius: 20px;
  overflow: hidden;
  transition: border-color .3s, transform .3s, box-shadow .3s;
  display: flex;
  min-height: 0;
}
.ss-card:hover {
  border-color: var(--ss-line-2);
  transform: translateY(-4px);
  box-shadow: 0 24px 40px -24px rgba(0,0,0,0.6);
}

/* ============ QUOTE CARD ============ */
.ss-quote {
  flex-direction: column;
  justify-content: space-between;
  padding: 26px 24px;
  background: linear-gradient(160deg, rgba(255,255,255,0.02) 0%, var(--ss-card) 60%);
}
.ss-quote::before {
  content: "";
  position: absolute; top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--ss-accent), transparent);
  opacity: 0.4;
}
.ss-quote-mark {
  font-family: var(--font-display), Georgia, serif;
  font-size: 60px; line-height: 0.6;
  color: var(--ss-accent);
  opacity: 0.5;
  margin-bottom: -14px;
  height: 22px; overflow: hidden;
}
.ss-quote-txt {
  font-family: var(--font-display), Georgia, serif;
  font-style: italic;
  font-size: 17px; line-height: 1.55;
  color: var(--ss-ink);
  margin: 12px 0 20px;
}
.ss-size-lg .ss-quote-txt { font-size: 22px; }
.ss-size-xl .ss-quote-txt { font-size: 24px; }
.ss-size-sm .ss-quote-txt { font-size: 15px; }

/* ============ MEDIA CARD ============ */
.ss-media {
  flex-direction: column;
  padding: 0;
}
.ss-size-xl.ss-media, .ss-size-lg.ss-media, .ss-size-tall.ss-media {
  flex-direction: column;
}
.ss-media-frame {
  position: relative;
  flex: 1;
  min-height: 200px;
  background: #0a0d15;
  overflow: hidden;
}
.ss-size-sm.ss-media .ss-media-frame,
.ss-size-md.ss-media .ss-media-frame {
  min-height: 160px;
}
.ss-media-el {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
}
.ss-type-badge {
  position: absolute;
  top: 12px; left: 12px;
  padding: 4px 10px;
  background: rgba(11,15,26,0.75);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 999px;
  font-family: var(--ss-mono);
  font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase;
  backdrop-filter: blur(6px);
  z-index: 2;
}
.ss-duration {
  position: absolute;
  top: 12px; right: 12px;
  padding: 4px 10px;
  background: rgba(11,15,26,0.75);
  color: var(--ss-gold);
  border: 1px solid rgba(233,196,106,0.35);
  border-radius: 6px;
  font-family: var(--ss-mono);
  font-size: 11px; letter-spacing: 0.06em;
  backdrop-filter: blur(6px);
  z-index: 2;
}

/* ============ PLACEHOLDER ============ */
.ss-placeholder {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 10px;
  background:
    linear-gradient(160deg, rgba(255,255,255,0.03) 0%, transparent 60%),
    radial-gradient(circle at 50% 40%, rgba(255,255,255,0.04), transparent 60%);
  border-bottom: 1px solid var(--ss-line);
  color: var(--ss-accent);
}
.ss-placeholder::before {
  content: "";
  position: absolute; inset: 12px;
  border: 1px dashed rgba(255,255,255,0.12);
  border-radius: 12px;
  pointer-events: none;
}
.ss-placeholder-icon {
  width: 60px; height: 60px; border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  background: color-mix(in srgb, var(--ss-accent) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--ss-accent) 30%, transparent);
  color: var(--ss-accent);
}
/* fallback for browsers without color-mix */
@supports not (background: color-mix(in srgb, red, blue)){
  .ss-placeholder-icon {
    background: rgba(233,196,106,0.12);
    border-color: rgba(233,196,106,0.30);
  }
}
.ss-placeholder-lbl {
  font-family: var(--ss-mono);
  font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(255,255,255,0.5);
}
.ss-placeholder-hint {
  font-size: 11px;
  color: var(--ss-ink-faint);
}
.ss-placeholder-hint code {
  padding: 1px 6px;
  background: rgba(255,255,255,0.06);
  border-radius: 4px;
  color: var(--ss-ink);
  font-family: var(--ss-mono);
  font-size: 10.5px;
}

/* ============ MEDIA CARD BODY ============ */
.ss-media-body {
  padding: 18px 20px 20px;
  display: flex; flex-direction: column;
  gap: 12px;
}
.ss-size-sm .ss-media-body,
.ss-size-md .ss-media-body { padding: 14px 16px 16px; gap: 8px; }
.ss-media-quote {
  font-family: var(--font-display), Georgia, serif;
  font-style: italic;
  font-size: 15px;
  line-height: 1.5;
  color: var(--ss-ink);
  margin: 0;
}
.ss-size-xl .ss-media-quote, .ss-size-lg .ss-media-quote { font-size: 18px; }
.ss-size-sm .ss-media-quote { font-size: 13.5px; }

/* ============ FOOT (name / role) ============ */
.ss-foot {
  display: flex; align-items: center; gap: 12px;
  margin-top: auto;
}
.ss-quote .ss-foot { border-top: 1px solid var(--ss-line); padding-top: 14px; }
.ss-avatar {
  width: 36px; height: 36px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  color: #fff; font-weight: 700; font-size: 14px;
  flex-shrink: 0;
}
.ss-name {
  color: var(--ss-ink);
  font-size: 13.5px;
  font-weight: 500;
}
.ss-role {
  color: var(--ss-ink-faint);
  font-size: 12px;
  margin-top: 1px;
}

/* ============ CTA ============ */
.ss-cta {
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  background: linear-gradient(160deg, #17243a 0%, #0b1220 100%);
  padding: 60px 40px;
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 40px 80px -30px rgba(0,0,0,0.6);
}
.ss-cta-glow {
  position: absolute; top: -140px; right: -140px;
  width: 480px; height: 480px; border-radius: 50%;
  background: radial-gradient(circle, rgba(233,196,106,0.22), transparent 60%);
  pointer-events: none;
}
.ss-cta-inner {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}
`;
