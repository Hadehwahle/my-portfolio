import { BACKGROUND, EXPERIENCE } from '../data/content';
import './About.css';

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap about">
        <div className="about-copy">
          <h2 id="about-title">From oil tools to React components</h2>
          {BACKGROUND.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="about-timeline">
          <h3>Experience and education</h3>
          <ol className="timeline dim-group">
            {EXPERIENCE.map((e) => (
              <li key={e.role + e.when} className={e.current ? 'is-current' : undefined}>
                <p className="tl-when">{e.when}</p>
                <div>
                  <p className="tl-role">
                    {e.role} <span>· {e.org}</span>
                  </p>
                  <p className="tl-body">{e.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
