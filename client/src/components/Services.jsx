import { SERVICES, TOOLKIT } from '../data/content';
import './Services.css';

export default function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="services-title">What I can build for you</h2>
          <p>
            I take work from a rough brief to a deployed product, and I write down what I
            built so your team can keep running it.
          </p>
        </div>

        <ul className="services">
          {SERVICES.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>

        <div className="toolkit" aria-labelledby="toolkit-title">
          <h3 id="toolkit-title">Toolkit</h3>
          <div className="toolkit-grid">
            {TOOLKIT.map((t) => (
              <div key={t.group}>
                <h4>{t.group}</h4>
                <ul>
                  {t.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
