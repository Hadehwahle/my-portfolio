# Peter Adeleke · Portfolio

Personal portfolio of Peter Adeleke, a full-stack software engineer in Ibadan, Nigeria. It has a React site and a small Express API that sends contact form messages by email.

## Stack

- **Client:** React 18, Vite 5, plain CSS, Geist font (self-hosted)
- **Server:** Node.js, Express, Nodemailer (Gmail SMTP), Helmet, rate limiting

## Project structure

```
client/                React site
  src/data/content.js  All site copy and projects. Edit this to update the portfolio
  src/components/      One component and stylesheet per section
  src/assets/work/     Project screenshots
server/                Contact form API
  server.js            Express app
  api/index.js         Entry point used on Vercel
  controllers/         Email sending and templates
```

## Run it locally

You need Node.js 18 or newer.

**1. Start the API**

```bash
cd server
npm install
cp .env.example .env    # then fill in your values
npm run dev             # http://localhost:5000
```

**2. Start the site** (in a second terminal)

```bash
cd client
npm install
cp .env.example .env    # VITE_API_URL=http://localhost:5000
npm run dev             # http://localhost:5173
```

## Environment variables

**Server** (`server/.env`)

| Name             | Purpose                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------- |
| `PORT`           | Port for local development (default `5000`)                                               |
| `EMAIL_USER`     | Gmail address that sends the emails                                                       |
| `EMAIL_PASS`     | Gmail [app password](https://myaccount.google.com/apppasswords), not your normal password |
| `RECEIVER_EMAIL` | Where contact messages are delivered                                                      |
| `CLIENT_URL`     | Site address(es) allowed to call the API, comma-separated                                 |
| `TRUST_PROXY`    | Set to `1` when hosted (e.g. on Vercel)                                                   |
| `LINKEDIN_URL`   | Linked from the auto-reply email                                                          |

**Client** (`client/.env`)

| Name           | Purpose                                |
| -------------- | -------------------------------------- |
| `VITE_API_URL` | Base URL of the API, no trailing slash |

Never commit `.env` files. They are ignored by git.

## Updating content

All text, projects, services and experience live in `client/src/data/content.js`. Projects with an `image` show as screenshot cards; projects without one show in the "Internal and in-progress builds" list. Cards appear in the order they are listed.

## Deployment

Both folders deploy to Vercel as two separate projects from this one repository:

1. **Server:** root directory `server`, framework "Other", with the server environment variables above.
2. **Client:** root directory `client`, framework Vite, with `VITE_API_URL` set to the deployed server URL.
3. Set the server's `CLIENT_URL` to the deployed site URL, then redeploy the server.

Check the API is up at `/api/health`.
