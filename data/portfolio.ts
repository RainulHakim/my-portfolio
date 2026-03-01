export const siteConfig = {
  name: "Rainul Hakim",
  role: "Web Designer & CS Student",
  tagline: "I design digital experiences that connect and inspire.",
  subHeadline:
    "CS freshman at Davidson College — passionate about web design, visual storytelling, and building community-driven projects.",
  email: "rahakim@davidson.edu",
  github: "https://github.com/RainulHakim",
  linkedin: "https://linkedin.com/in/rainulhakim",
  resumeUrl: "/Resume of Rainul (Resume).pdf",

  heroHeadline: {
    before: "I design, build,",
    middle: "and lead with ",
    accent: "purpose.",
  },

  typewriterRoles: [
    "Web Designer",
    "Graphic Designer",
    "CS @ Davidson College",
    "Community Builder",
  ],

  availabilityText: "Open to Summer 2026 Internships",

  contactBlurb:
    "I'm a CS freshman at Davidson College actively seeking internship opportunities in web design, marketing, and community-driven roles. If you're hiring or just want to connect, I'd love to hear from you.",
};

export const heroStats = [
  { value: 40, suffix: "+", label: "Designs created" },
  { value: 1000, suffix: "+", label: "Community members reached" },
  { value: 99, suffix: "%", label: "Satisfaction rate" },
];

// ─── Projects ──────────────────────────────────────────────────────────────

export type Project = {
  name: string;
  impact: string;
  tech: string[];
  bullets: string[];
  liveUrl: string;
  githubUrl: string;
  /** CSS gradient string shown in the browser preview mockup */
  previewGradient: string;
  /** Optional image path or URL — shown as the browser preview instead of abstract sketch */
  previewImage?: string;
  /** Use object-contain (centered) instead of object-cover — better for logos */
  previewImageContain?: boolean;
  /** Multiple live URLs for projects with more than one site */
  additionalUrls?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    name: "Left No Crumbs",
    impact:
      "IdeaSprint Winner ($1,000) — campus app that alerts Davidson students to free catered meals via push notifications on Davidson One.",
    tech: ["Mobile App", "Push Notifications", "UX Design", "Davidson One", "Entrepreneurship"],
    bullets: [
      "Won Davidson College's IdeaSprint competition, beating 4 finalist teams for a $1,000 prize at the 2025 Innovation Showcase",
      "Designed a solution to reduce campus food waste by surfacing real-time alerts for available free catered meals",
      "Collaborated with a 5-person interdisciplinary team on pitching, prototyping, and UX design under competition time pressure",
      "Presented to Davidson Entrepreneurship Network judges — recognized as the most impactful student venture of the showcase",
    ],
    liveUrl:
      "https://hurthub.davidson.edu/davidson-entrepreneurship-network-innovation-showcase-2025-celebrating-student-entrepreneurs-and-community-innovators/",
    githubUrl: "#",
    previewGradient:
      "linear-gradient(135deg, #1a0f00 0%, #451a03 40%, #78350f 75%, #d97706 100%)",
    previewImage:
      "https://hurthub.davidson.edu/wp-content/uploads/2025/11/IdeaSprintWinner-Elijah-Arrington-Photography-354-scaled.jpg",
  },
  {
    name: "AlternAte",
    impact:
      "AI-powered nutrition assistant that analyzes any meal, suggests smarter swaps, scores your full-day diet, and gamifies healthy eating with a social leaderboard.",
    tech: ["Next.js", "TypeScript", "AI / LLM", "Server-side API", "Framer Motion"],
    bullets: [
      "Analyzes any typed meal in seconds — returns calories, macros (protein, carbs, fat), fiber, sugar, sodium, and health flags like high sodium or low fiber",
      "Generates 3 AI-powered smarter swaps tailored to the user's goal: weight loss, muscle gain, heart health, or balanced eating",
      "Side-by-side meal comparison explains which meal better fits your goal and how to improve either one",
      "Full-day diet check scores your entire day of eating from 0–100 across sodium, fiber, protein balance, variety, and calorie control — with a suggested improved version",
      "Weekly health score and social leaderboard turn nutrition tracking into a competitive, points-based experience",
    ],
    liveUrl: "https://alternate-app-pi.vercel.app",
    githubUrl: "https://github.com/RainulHakim/alternate-app",
    previewGradient:
      "linear-gradient(135deg, #041f1e 0%, #065f46 35%, #059669 65%, #34d399 100%)",
    previewImage: "/AlternAte-preview.png",
  },
  {
    name: "Faculty Websites",
    impact:
      "Designed and built two professional faculty websites for Davidson College professors, improving their academic online presence, usability, and accessibility.",
    tech: ["WordPress", "HTML/CSS", "Web Design", "Accessibility", "UI/UX"],
    bullets: [
      "Built eng.andrewrippeon.com for Dr. Andrew Rippeon — Associate Professor of Writing & English — showcasing his Letterpress Lab and collaborations with acclaimed authors including Colson Whitehead, Anne Carson, and Ocean Vuong",
      "Built english.shireencampbell.com for Dr. Shireen Campbell — Director of Davidson's First-Year Writing Program — featuring her research on writing pedagogy, multilingual writers, and book censorship",
      "Collaborated with each faculty member to gather requirements, incorporate iterative feedback, and deliver clean, user-centered designs",
      "Implemented responsive layouts and accessibility standards ensuring usability for students, colleagues, and academic peers",
    ],
    liveUrl: "https://eng.andrewrippeon.com/",
    githubUrl: "#",
    previewGradient:
      "linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #1d4ed8 75%, #60a5fa 100%)",
    previewImage: "/Andrew Rippeon preview.png",
    additionalUrls: [
      { label: "Dr. Rippeon", url: "https://eng.andrewrippeon.com/" },
      { label: "Dr. Campbell", url: "https://english.shireencampbell.com/" },
    ],
  },
  {
    name: "Project BeWell",
    impact:
      "Co-founded a community health initiative that reached 1,000+ members and achieved a 90% improvement in hygiene habits.",
    tech: [
      "Project Management",
      "Community Outreach",
      "Health Education",
      "Fundraising",
    ],
    bullets: [
      "Launched a one-month health & hygiene initiative with a 12-member cross-disciplinary team reaching 1,000+ community members",
      "Achieved a 90% improvement in hygiene habits through surveys, educational sessions, and awareness campaigns",
      "Secured 10,000+ BDT in funding through brand partnerships and collaborated with local authorities on public health initiatives",
      "Organized free medical camps providing check-ups, medicines, and snacks — achieving a 99% participant satisfaction rate",
    ],
    liveUrl: "https://be-well-theta.vercel.app/",
    githubUrl: "https://github.com/RainulHakim/BeWell",
    previewGradient:
      "linear-gradient(135deg, #052e16 0%, #14532d 40%, #16a34a 75%, #86efac 100%)",
    previewImage: "/BeWell Cover.png",
  },
  {
    name: "Travel Time International",
    impact:
      "Built the brand identity and first-ever online presence for a travel agency, expanding their B2B network and client reach.",
    tech: ["Brand Identity", "Canva", "Social Media", "B2B Marketing", "SEO"],
    bullets: [
      "Designed complete brand identity — logo, business cards, banners, and calendars — strengthening market recognition",
      "Built and managed the company's first online presence from scratch, scheduling 20+ social media posts to boost visibility",
      "Expanded the B2B network by partnering with top agencies, securing broader flight deals and travel options for clients",
      "Contributed to measurable growth in client inquiries through consistent visual branding and online engagement",
    ],
    liveUrl: "#",
    githubUrl: "#",
    previewGradient:
      "linear-gradient(135deg, #1c0533 0%, #4a0e8f 40%, #7c3aed 75%, #c4b5fd 100%)",
    previewImage: "/TravelTimeint.jpeg",
    previewImageContain: true,
  },
];

// ─── Experience ─────────────────────────────────────────────────────────────

export type Experience = {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Student Web Designer",
    company: "Davidson College",
    dates: "Oct 2025 – Present",
    bullets: [
      "Designed and developed a faculty personal website to enhance professional online presence, usability, and accessibility",
      "Collaborated with faculty to gather requirements, incorporate feedback, and deliver user-centered web solutions",
    ],
  },
  {
    role: "Program Assistant & Social Media Manager",
    company: "Chidsey Program for Leadership Development",
    dates: "Nov 2025 – Present",
    bullets: [
      "Designed promotional graphics to support program outreach, generating consistent audience engagement across multiple social media posts",
      "Collaborated with program staff to maintain consistent visual branding and assist with ongoing leadership program operations",
    ],
  },
  {
    role: "Business Development Associate",
    company: "Travel Time International",
    dates: "Mar 2024 – Jun 2025",
    bullets: [
      "Designed brand identity (logo, business cards, banners, calendars), strengthening market presence and client recognition",
      "Expanded the B2B network by partnering with top agencies, securing broader flight deals and travel options for clients",
      "Built and managed the company's first online presence, producing and scheduling 20+ social media posts to boost visibility",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Bloodbag",
    dates: "Apr 2024 – Jun 2025",
    bullets: [
      "Designed 40+ promotional and awareness posters to support blood donation campaigns and increase community engagement",
      "Contributed to grant applications by crafting impact statements, writing proposals, and highlighting organizational goals",
    ],
  },
];

// ─── Leadership & Involvement ───────────────────────────────────────────────

export type Involvement = {
  title: string;
  organization: string;
  dates?: string;
  description: string;
  /** If provided, the entire card links here */
  link?: string;
  tags: string[];
  /** Renders the card with a gold award accent */
  award?: boolean;
};

export const involvement: Involvement[] = [
  {
    title: "IdeaSprint Winner — $1,000",
    organization: "Davidson Entrepreneurship Network",
    dates: "2025",
    description:
      "Won Davidson College's IdeaSprint competition with 'Left No Crumbs' — a campus app alerting students to free catered meals via push notifications. Competed against 5 finalist teams at the 2025 Innovation Showcase.",
    link: "https://hurthub.davidson.edu/davidson-entrepreneurship-network-innovation-showcase-2025-celebrating-student-entrepreneurs-and-community-innovators/",
    tags: ["🏆 Winner", "$1,000 Prize", "Entrepreneurship"],
    award: true,
  },
  {
    title: "E-Board Member",
    organization: "Davidson Entrepreneurship Club",
    dates: "Nov 2025 – Present",
    description:
      "Designed visual content to support event promotion and student engagement. Assist in planning and coordinating entrepreneurship-focused events and initiatives at Davidson College.",
    tags: ["Leadership", "Events", "Design"],
  },
  {
    title: "Publication & Promotion Officer",
    organization: "Mohsin College Debating Club",
    dates: "Oct 2024 – Aug 2025",
    description:
      "Revitalized the club's social media presence after years of inactivity. Designed 25+ promotional visuals and supported logistics for the club's first intra-debate competition in four years.",
    tags: ["Social Media", "Design", "Events"],
  },
  {
    title: "Co-Founder",
    organization: "Project BeWell",
    dates: "Aug 2023 – Sep 2023",
    description:
      "Launched a one-month health & hygiene initiative with a 12-member cross-disciplinary team, reaching 1,000+ community members. Secured 10K+ BDT in funding and organized free medical camps with a 99% satisfaction rate.",
    tags: ["Leadership", "Community", "Health"],
  },
];

// ─── Skills ─────────────────────────────────────────────────────────────────

export type Skill = { name: string; level: number };

export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Design",
    skills: [
      { name: "Canva", level: 95 },
      { name: "Poster Design", level: 92 },
      { name: "Infographic Design", level: 88 },
      { name: "Brand Identity", level: 85 },
      { name: "Visual Storytelling", level: 88 },
    ],
  },
  {
    label: "Web",
    skills: [
      { name: "WordPress", level: 82 },
      { name: "HTML / CSS", level: 75 },
      { name: "Web Design", level: 85 },
      { name: "Accessibility", level: 78 },
      { name: "Google Workspace", level: 90 },
    ],
  },
  {
    label: "Business",
    skills: [
      { name: "Social Media Mgmt", level: 90 },
      { name: "Marketing", level: 85 },
      { name: "Event Planning", level: 88 },
      { name: "Sales", level: 80 },
      { name: "Partnership Dev.", level: 82 },
    ],
  },
  {
    label: "Languages",
    skills: [
      { name: "English", level: 100 },
      { name: "Bangla", level: 100 },
      { name: "Hindi", level: 70 },
      { name: "Urdu", level: 65 },
    ],
  },
];

// ─── Tech marquee ────────────────────────────────────────────────────────────

export const marqueeItems = [
  "Web Design",
  "Canva",
  "WordPress",
  "HTML / CSS",
  "Brand Identity",
  "Social Media",
  "Leadership",
  "Event Planning",
  "Marketing",
  "Google Workspace",
  "Poster Design",
  "Community Outreach",
  "Sales",
  "Partnership Dev",
  "Figma",
  "Accessibility",
];
