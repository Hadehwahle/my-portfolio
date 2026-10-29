import { PROFILE } from '../data/content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <p>
          © {new Date().getFullYear()} {PROFILE.fullName}. Built with React and Node.js.
        </p>
        <ul>
          <li>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${PROFILE.email}`}>Email</a>
          </li>
          <li>
            <a href="#top">Back to top</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
