import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { coach, site } from "@/lib/site";
import "@/app/positive-mind-mastery/pm.css";

/**
 * "Meet the Coach" — the Positive Mind Mastery design (photo left, story and
 * medal row right), reused on the About page. Styles come from pm.css, which
 * scopes its tokens to the `.pm` wrapper.
 */
export default function MeetTheCoach() {
  return (
    <div className="pm">
      <section className="pm-coach" id="coach">
        <div className="container-x pm-coach-grid">
          <Reveal className="pm-coach-photo-wrap">
            <div className="pm-coach-photo">
              <Image
                src={coach.photo}
                alt={coach.photoAlt}
                width={778}
                height={778}
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 26rem, 90vw"
                className="pm-coach-img"
              />
              <div className="pm-coach-caption">
                <strong>{coach.name}</strong>
                <span>{coach.designation}</span>
              </div>
            </div>
            <ul className="pm-creds">
              {coach.creds.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="pm-eyebrow">Meet the coach</p>
            <h2 className="pm-h2">
              22+ years of transforming <em className="pm-em">young minds</em>
            </h2>
            <p className="pm-coach-desig">{coach.designation}</p>
            <ul className="pm-story">
              {coach.story.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <ul className="pm-medals">
              {coach.awards.map((a) => (
                <li key={a.t} className="pm-medal">
                  <span className="pm-medal-i" aria-hidden>
                    {a.icon}
                  </span>
                  <strong>
                    {a.t}
                    {a.year !== "★" && ` ${a.year}`}
                  </strong>
                  <small>{a.s}</small>
                </li>
              ))}
            </ul>
            <a href={site.urls.booking} target="_blank" rel="noreferrer" className="pm-btn pm-btn-gold">
              Book a one-to-one session →
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
