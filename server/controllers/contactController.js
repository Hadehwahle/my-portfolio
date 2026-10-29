const nodemailer = require('nodemailer');

// Escape user input before it goes into email HTML, so a visitor can't inject markup or links.
const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const LINKEDIN_URL = process.env.LINKEDIN_URL || 'https://www.linkedin.com/in/adelekepeter/';

// ─── Transporter ──────────────────────────────────────────────────────────────
const createTransporter = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Gmail App Password (not your account password)
    },
  });

// ─── Email design ─────────────────────────────────────────────────────────────
// Mirrors the portfolio (see DESIGN.md): cool paper ground, white card with a
// hairline, near-black ink, one blue for the action. Email clients ignore most
// modern CSS, so layout is tables with inline styles, and the font is a system
// stack (web fonts don't load in most inboxes).
const C = {
  paper: '#f8f9fb',
  surface: '#ffffff',
  ink: '#0d1117',
  ink2: '#3a4150',
  muted: '#5c6473',
  rule: '#e3e6eb',
  accent: '#2a57dc',
  ok: '#12804a',
};
const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

// Shared page shell: preheader, paper ground, a 560px white card, and a footer line.
const layout = ({ title, preheader, body, footer }) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="color-scheme" content="light"/>
<meta name="supported-color-schemes" content="light"/>
<title>${title}</title>
</head>
<body style="margin:0;padding:0;background:${C.paper};-webkit-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${C.paper};">${preheader}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.paper};">
    <tr><td align="center" style="padding:40px 16px;">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:100%;max-width:560px;">
        <tr>
          <td style="padding:0 4px 16px;font-family:${FONT};font-size:15px;font-weight:600;color:${C.ink};letter-spacing:-0.01em;">Peter Adeleke</td>
        </tr>
        <tr>
          <td style="background:${C.surface};border:1px solid ${C.rule};border-radius:16px;padding:36px 36px 32px;font-family:${FONT};color:${C.ink};">
            ${body}
          </td>
        </tr>
        <tr>
          <td style="padding:20px 4px 0;font-family:${FONT};font-size:12px;line-height:1.6;color:${C.muted};">${footer}</td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

const button = (href, label) => `
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
  <tr><td style="background:${C.accent};border-radius:10px;">
    <a href="${href}" style="display:inline-block;padding:12px 20px;font-family:${FONT};font-size:15px;font-weight:500;line-height:1;color:#ffffff;text-decoration:none;border-radius:10px;">${label}</a>
  </td></tr>
</table>`;

// ─── HTML: Email to Developer ──────────────────────────────────────────────────
const buildInboundEmail = (raw) => {
  const name = escapeHtml(raw.name);
  const email = escapeHtml(raw.email);
  const subject = escapeHtml(raw.subject);
  const message = escapeHtml(raw.message);

  const row = (label, value, last) => `
    <tr>
      <td width="120" style="padding:12px 0;${last ? '' : `border-bottom:1px solid ${C.rule};`}font-family:${FONT};font-size:14px;color:${C.muted};vertical-align:top;">${label}</td>
      <td style="padding:12px 0;${last ? '' : `border-bottom:1px solid ${C.rule};`}font-family:${FONT};font-size:14px;color:${C.ink};vertical-align:top;word-break:break-word;">${value}</td>
    </tr>`;

  const body = `
    <h1 style="margin:0;font-family:${FONT};font-size:24px;line-height:1.2;font-weight:600;letter-spacing:-0.02em;color:${C.ink};">New message from ${name}</h1>
    <p style="margin:8px 0 0;font-size:15px;line-height:1.6;color:${C.ink2};">Someone used the contact form on your portfolio.</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;border-top:1px solid ${C.rule};">
      ${row('Name', name)}
      ${row('Email', `<a href="mailto:${email}" style="color:${C.accent};text-decoration:underline;">${email}</a>`)}
      ${row('Needs', subject, true)}
    </table>

    <div style="margin-top:20px;padding:20px;background:${C.paper};border:1px solid ${C.rule};border-radius:12px;">
      <p style="margin:0 0 8px;font-size:13px;font-weight:500;color:${C.muted};">Message</p>
      <p style="margin:0;font-size:15px;line-height:1.65;color:${C.ink};white-space:pre-wrap;">${message}</p>
    </div>

    ${button(`mailto:${email}`, `Reply to ${name}`)}`;

  return layout({
    title: 'New portfolio message',
    preheader: `${name} sent a message about: ${subject}`,
    body,
    footer: `Sent from your portfolio contact form on ${escapeHtml(new Date().toUTCString())}. Replying to this email goes straight to ${email}.`,
  });
};

// ─── HTML: Auto-Reply to Visitor ───────────────────────────────────────────────
const buildAutoReply = (raw) => {
  const name = escapeHtml(raw.name);
  const firstName = escapeHtml(String(raw.name).split(' ')[0]);

  const body = `
    <p style="margin:0;font-size:14px;font-weight:500;color:${C.ok};">
      <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${C.ok};margin-right:8px;vertical-align:1px;"></span>Message received
    </p>
    <h1 style="margin:16px 0 0;font-family:${FONT};font-size:24px;line-height:1.2;font-weight:600;letter-spacing:-0.02em;color:${C.ink};">Thanks, ${firstName}.</h1>
    <p style="margin:16px 0 0;font-size:15px;line-height:1.65;color:${C.ink2};">Your message has landed safely. I read every message myself and usually reply within a day.</p>
    <p style="margin:12px 0 0;font-size:15px;line-height:1.65;color:${C.ink2};">In the meantime, you can see what I'm working on over on LinkedIn.</p>

    ${button(LINKEDIN_URL, 'Connect on LinkedIn')}

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;border-top:1px solid ${C.rule};">
      <tr><td style="padding-top:20px;font-family:${FONT};">
        <p style="margin:0;font-size:15px;font-weight:600;color:${C.ink};">Peter Adeleke</p>
        <p style="margin:2px 0 0;font-size:14px;color:${C.muted};">Full-stack software engineer, Ibadan, Nigeria</p>
      </td></tr>
    </table>`;

  return layout({
    title: 'Thanks for reaching out',
    preheader: `Thanks ${name}, your message reached me. I usually reply within a day.`,
    body,
    footer: "This is an automatic confirmation that your message arrived. You don't need to reply to it.",
  });
};

// Plain-text versions, for clients that don't render HTML (and better deliverability).
const inboundText = ({ name, email, subject, message }) =>
  `New message from ${name}\n\nName: ${name}\nEmail: ${email}\nNeeds: ${subject}\n\n${message}\n`;

const autoReplyText = ({ name }) =>
  `Thanks, ${name.split(' ')[0]}.\n\nYour message has landed safely. I read every message myself and usually reply within a day.\n\nIn the meantime, you can find me on LinkedIn: ${LINKEDIN_URL}\n\nPeter Adeleke\nFull-stack software engineer, Ibadan, Nigeria\n`;

// ─── Controller ───────────────────────────────────────────────────────────────
const sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.contactData;

  try {
    const transporter = createTransporter();

    // 1. Email to developer
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject.replace(/[\r\n]+/g, ' ')}`,
      html: buildInboundEmail({ name, email, subject, message }),
      text: inboundText({ name, email, subject, message }),
    });

    // 2. Auto-reply to visitor
    await transporter.sendMail({
      from: `"Peter Adeleke" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Got your message, ${name.split(' ')[0].replace(/[\r\n]+/g, '')}. I'll be in touch`,
      html: buildAutoReply({ name }),
      text: autoReplyText({ name }),
    });

    console.log(`[Contact] Email sent from ${email} (${name})`);
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent. I\'ll reply within 24 hours.',
    });
  } catch (err) {
    console.error('[Contact] Email send error:', err.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try reaching me directly at your email client.',
    });
  }
};

module.exports = { sendContactEmail, buildInboundEmail, buildAutoReply };
