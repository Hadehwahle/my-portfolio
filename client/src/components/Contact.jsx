import { useState } from 'react';
import { PROFILE, PROJECT_TYPES } from '../data/content';
import './Contact.css';

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');
const EMPTY = { name: '', email: '', subject: PROJECT_TYPES[0], message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Enter your name (at least 2 characters).';
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Enter an email address like name@example.com.';
  if (v.message.trim().length < 10) e.message = 'Add a few more details (at least 10 characters).';
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', text: '' });

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({ state: 'error', text: 'Check the highlighted fields, then send again.' });
      return;
    }

    setStatus({ state: 'sending', text: 'Sending your message…' });
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));

      if (res.status === 400 && data.errors) {
        setErrors(data.errors);
        setStatus({ state: 'error', text: 'Check the highlighted fields, then send again.' });
        return;
      }
      if (!res.ok) throw new Error(data.message || 'Request failed');

      setValues(EMPTY);
      setStatus({
        state: 'sent',
        text: 'Message sent. A confirmation is on its way to your inbox, and I’ll reply within a day.',
      });
    } catch (err) {
      setStatus({
        state: 'error',
        text: `The message didn’t go through. Email me directly at ${PROFILE.email}.`,
      });
    }
  }

  const sending = status.state === 'sending';

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact">
        <div className="contact-copy">
          <h2 id="contact-title">Have something worth building?</h2>
          <p>
            I’m open to full-stack roles, remote or in Nigeria, and to freelance projects for
            teams anywhere. Tell me what you’re working on and I’ll reply within a day.
          </p>

          <dl className="contact-list">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`}>{PROFILE.phone}</a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
                  {PROFILE.linkedinLabel}
                </a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>
                {PROFILE.location}, working remotely ({PROFILE.timezone})
              </dd>
            </div>
          </dl>
        </div>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="field-row">
            <Field id="cf-name" label="Your name" error={errors.name}>
              <input
                id="cf-name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={update('name')}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'cf-name-err' : undefined}
              />
            </Field>
            <Field id="cf-email" label="Your email" error={errors.email}>
              <input
                id="cf-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={update('email')}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'cf-email-err' : undefined}
              />
            </Field>
          </div>

          <Field id="cf-subject" label="What do you need?" error={errors.subject}>
            <select id="cf-subject" name="subject" value={values.subject} onChange={update('subject')}>
              {PROJECT_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>

          <Field id="cf-message" label="Tell me about the project" error={errors.message}>
            <textarea
              id="cf-message"
              name="message"
              rows={6}
              placeholder="What you’re building, rough timeline and budget, and any links."
              value={values.message}
              onChange={update('message')}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'cf-message-err' : undefined}
            />
          </Field>

          <div className="form-foot">
            <button className="btn btn-primary btn-send" type="submit" disabled={sending}>
              {sending ? 'Sending…' : 'Send message'}
            </button>
            <p className={`form-status is-${status.state}`} role="status" aria-live="polite">
              {status.text}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ id, label, error, children }) {
  return (
    <div className={`field${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <p className="field-error" id={`${id}-err`}>
          {error}
        </p>
      )}
    </div>
  );
}
