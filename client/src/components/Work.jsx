import { PROJECTS } from '../data/content';
import './Work.css';

const SHOWN = PROJECTS.filter((p) => p.image);
const UNLISTED = PROJECTS.filter((p) => !p.image);

export default function Work() {
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="work-title">Selected work</h2>
          <p>
            Production systems people use every day, most of them for the Vephla Group of
            companies, plus client and personal builds.
          </p>
        </div>

        <ul className="work-grid dim-group">
          {SHOWN.map((p, i) => (
            <li className={`work-card${i < 2 ? ' rise' : ''}`} style={{ '--i': i + 4 }} key={p.name}>
              <div className="work-shot">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  width="1200"
                  height="750"
                  loading={i < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
              <div className="work-body">
                <h3>
                  <a className="work-title" href={p.link} target="_blank" rel="noopener noreferrer">
                    {p.name}
                    <span className="visually-hidden"> (opens {p.linkLabel} in a new tab)</span>
                  </a>
                </h3>
                <p className="work-kind">{p.kind}</p>
                <p className="work-summary">{p.summary}</p>
                <Stack items={p.stack} />
                <p className="work-url" aria-hidden="true">
                  {p.linkLabel}
                  <ArrowIcon />
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="unlisted">
          <h3 className="unlisted-title">Internal and in-progress builds</h3>
          <ul className="unlisted-list dim-group">
            {UNLISTED.map((p) => (
              <li className="unlisted-row" key={p.name}>
                <div className="unlisted-name">
                  <h4>{p.name}</h4>
                  <p>{p.kind}</p>
                </div>
                <div>
                  <p className="work-summary">{p.summary}</p>
                  <Stack items={p.stack} />
                </div>
                <p className="unlisted-note">{p.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Stack({ items }) {
  return (
    <ul className="stack" aria-label="Built with">
      {items.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12">
      <path d="M3 9L9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
