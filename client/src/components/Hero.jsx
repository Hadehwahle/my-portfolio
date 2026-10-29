import { PROFILE, HERO } from '../data/content';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap">
        <h1 id="hero-title" className="hero-title rise" style={{ '--i': 0 }}>
          {HERO.headline}
        </h1>
        <p className="hero-lede rise" style={{ '--i': 1 }}>
          {HERO.lede}
        </p>

        <div className="hero-actions rise" style={{ '--i': 2 }}>
          <a className="btn btn-primary" href="#work">
            See my work
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14">
              <path d="M7 2v10M3 8l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </a>
          <a className="btn" href={`mailto:${PROFILE.email}`}>
            Email me
          </a>
        </div>

        <dl className="hero-facts rise" style={{ '--i': 3 }} aria-label="At a glance">
          <div>
            <dt className="visually-hidden">Status</dt>
            <dd>
              <span className="live-dot" aria-hidden="true" />
              {PROFILE.availability}
            </dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>
              {PROFILE.location} ({PROFILE.timezone})
            </dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{HERO.stack}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
