// All copy for the site lives here. Edit this file to update the portfolio.

// Screenshots of the live sites, captured at 1440x900 and saved at 1200x750.
// A project with an `image` shows as a screenshot card; one without shows as a text row.
import shotVephlaUni from "../assets/work/vephla-university.jpg";
import shotQnduit from "../assets/work/qnduit.jpg";
import shotVephlaGroup from "../assets/work/vephla-group.jpg";
import shotGlow from "../assets/work/glow-luxury.jpg";

export const PROFILE = {
  name: "Peter Adeleke",
  fullName: "Adeleke Peter Adewale",
  role: "Full-stack software engineer",
  location: "Ibadan, Nigeria",
  timezone: "WAT, UTC+1",
  email: "adelekepeterpierre@gmail.com",
  phone: "+234 903 250 3870",
  linkedin: "https://www.linkedin.com/in/adelekepeter/",
  linkedinLabel: "linkedin.com/in/adelekepeter",
  availability: "Open to remote roles and freelance projects",
};

export const HERO = {
  headline: "I build web products end to end.",
  lede: "Payment and enrolment systems, admin dashboards, talent marketplaces and the sites that sell them. I came to software from mechanical engineering, so I read the spec closely, find the gaps early and document what ships.",
  stack: "React, Node.js, Express, MongoDB",
};

// Screenshot cards appear in this order; text rows follow in theirs.
export const PROJECTS = [
  {
    name: "Qnduit",
    kind: "Talent marketplace",
    summary:
      "A live marketplace connecting employers with professionals. I built the public pages and the talent dashboard with a backend developer, including job discovery, profiles and paid public listings.",
    stack: ["React", "REST APIs", "Three.js"],
    link: "https://qnduit.com",
    linkLabel: "qnduit.com",
    image: shotQnduit,
    imageAlt: "Home page of qnduit.com",
  },
  {
    name: "Glow Luxury Nails",
    kind: "Salon website",
    summary:
      "Service listings, online appointment booking and a product showcase for a luxury nail salon, designed mobile-first.",
    stack: ["React", "Vercel"],
    link: "https://glowluxury.vercel.app",
    linkLabel: "glowluxury.vercel.app",
    image: shotGlow,
    imageAlt: "Home page of the Glow Luxury Nails site",
  },
  {
    name: "Vephla Group",
    kind: "Corporate website",
    summary:
      "The group's main site, covering its energy, technology and digital education businesses. Built with React Router and tuned for load speed.",
    stack: ["React", "React Router"],
    link: "https://vephla.com",
    linkLabel: "vephla.com",
    image: shotVephlaGroup,
    imageAlt: "Home page of vephla.com",
  },
  {
    name: "Vephla University",
    kind: "EdTech platform",
    summary:
      "Frontend of an accredited online school with 15,900+ graduates across 15+ countries: course listings, enrolment, certification tests and student dashboards, all wired to a REST API.",
    stack: ["React", "REST APIs", "Node.js"],
    link: "https://vephlauni.com",
    linkLabel: "vephlauni.com",
    image: shotVephlaUni,
    imageAlt: "Home page of vephlauni.com",
  },
  {
    name: "AEIPOS",
    kind: "Enrolment and instalment payments",
    summary:
      "Takes a student from sign-up to paid enrolment to portal access, with fees split into instalments. I co-wrote the engineering brief, then built it: Paystack with webhook recovery, duplicate-payment checks, reminder-led instalments, JWT auth and admin dashboards.",
    stack: ["React", "Express", "MongoDB", "Paystack", "MySQL"],
    note: "Internal system",
  },
  {
    name: "Vephla Certification Tests",
    kind: "Assessment platform",
    summary:
      "Secure online exams with per-question timing, tab-switch flagging, results the moment a candidate submits, and automatic certificates.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    note: "Internal system",
  },
  {
    name: "Vephla Admin and Staff portals",
    kind: "Workforce management",
    summary:
      "Sole frontend developer on two connected dashboards for the whole Vephla Group: an admin portal for HR, roles and departments, and a staff portal for attendance and day-to-day work.",
    stack: ["React", "Tailwind CSS", "REST APIs"],
    note: "Internal system",
  },
  {
    name: "CoolRunningsFitness",
    kind: "Fitness tracking app",
    summary:
      "Built from scratch: run tracking, accounts, a blog, community forums and an admin dashboard, shipped with Docker and a CI/CD pipeline.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Docker"],
    note: "Personal build",
  },
  {
    name: "The Living Expression Church",
    kind: "Church website",
    summary:
      "An audio-first teachings library, live broadcasts through Mixlr, events, and simple giving by card or bank transfer. Light and dark themes.",
    stack: ["React", "Express", "MongoDB", "Paystack"],
    note: "In progress",
  },
];

export const SERVICES = [
  {
    title: "Web applications",
    body: "Full-stack React and Node.js apps, from the database schema to the last loading state.",
  },
  {
    title: "Payments and enrolment flows",
    body: "Paystack and Stripe checkouts, instalment plans, webhooks that recover from failures, and receipts people trust.",
  },
  {
    title: "Dashboards and internal tools",
    body: "Admin panels, staff portals and reporting views shaped around how your team actually works, with role-based access.",
  },
  {
    title: "APIs and integrations",
    body: "Express APIs with JWT auth, validation, rate limiting and transactional email, plus third-party services like Cloudinary and SMS gateways.",
  },
  {
    title: "Marketing sites with motion",
    body: "Fast landing pages with considered animation and Three.js where it helps the story.",
  },
  {
    title: "Code review and hardening",
    body: "Security passes on existing apps: auth, input sanitising, rate limits, headers, and fixing what turns up.",
  },
];

export const TOOLKIT = [
  {
    group: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux, Zustand",
      "Vite, Next.js",
      "Three.js",
    ],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "Socket.io"],
  },
  { group: "Data", items: ["MongoDB", "Mongoose", "MySQL", "Redis"] },
  {
    group: "Delivery",
    items: [
      "Git and GitHub",
      "Docker",
      "CI/CD",
      "Railway, Render, Vercel",
      "cPanel",
    ],
  },
];

// Ordered newest first. This is a real sequence, so the order is meaningful.
export const EXPERIENCE = [
  {
    when: "Mar 2025 to now",
    role: "Software Engineering Executive III",
    org: "Vephla Group",
    body: "Production UI and API integration across Vephla University, the admin and staff portals, Qnduit and AEIPOS. Wrote technical documentation for 13 of the group’s products.",
    current: true,
  },
  {
    when: "Sep 2024 to now",
    role: "Frontend Development Instructor",
    org: "Vephla University",
    body: "Built the frontend curriculum and teach cohorts from first HTML tag to job-ready JavaScript, with live API demos, responsive projects and Git workflows.",
    current: true,
  },
  {
    when: "Oct 2024 to Mar 2025",
    role: "Software Engineer Intern",
    org: "Zcriptta",
    body: "Shipped frontend features and API integrations in a fast-moving team.",
  },
  {
    when: "Jul 2023 to Apr 2024",
    role: "Frontend Engineering Nano-Degree",
    org: "Vephla University",
    body: "React, modern JavaScript, REST APIs and production UI development.",
  },
  {
    when: "2019 to 2022",
    role: "HND, Mechanical Engineering",
    org: "The Polytechnic, Ibadan",
    body: "Graduated with Distinction.",
  },
];

export const BACKGROUND = {
  paragraphs: [
    "I started in mechanical engineering and worked in oil and gas, with time at Dangote Oil Refinery and Power & Energy Oil Tools Limited. I hold Well Control and EHS certifications, and I’m finishing a BEng at Federal University Oye-Ekiti.",
    "Safety-critical work left me with habits I bring to every codebase: read the requirements before building, check before release, and write down what shipped. On AEIPOS that meant finding the gaps in the brief around instalment schedules, webhook recovery and duplicate payments before a line of code was written.",
    "Teaching keeps me honest. If I can’t explain the event loop or CSS specificity to a beginner, I don’t understand it well enough yet.",
  ],
};

export const PROJECT_TYPES = [
  "Full-stack web application",
  "Frontend only",
  "Backend or API",
  "Payments integration",
  "Full-time or contract role",
  "Something else",
];
