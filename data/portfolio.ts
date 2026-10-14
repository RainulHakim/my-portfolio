export const siteConfig = {
  name: "Rainul Hakim",
  role: "Computer Science at Davidson College, class of 2029",
  tagline: "i like building sometimes.",

  email: "rahakim@davidson.edu",
  github: "https://github.com/RainulHakim",
  linkedin: "https://www.linkedin.com/in/rainulhakim/",
  resumeUrl: "/Rainul_Hakim_Resume.pdf",
  location: "Davidson, North Carolina",
  headshot: "/Rainul_headshot.jpeg",
  portrait: "/Rainul_suit.jpeg",

  /** Shown top-right of the hero. */
  recently: {
    label: "Most recently",
    role: "Machine Learning Research Assistant",
    org: "Facility for Rare Isotope Beams",
    when: "Summer 2026",
  },

  about:
    "I'm a computer science student at Davidson College working across machine learning research and product engineering. Last summer I was at Michigan State's Facility for Rare Isotope Beams, training self-supervised models to read 3D point clouds off a particle detector. During the year I consult on data analytics at Davidson, advise an early-stage startup through the Hurt Hub, and build things people on campus actually use.",

  contactBlurb:
    "I'm looking for Summer 2027 internships in machine learning, data science and software engineering. If you're hiring, or just want to talk about research, data or something you're building, my inbox is open.",
};

export const education = {
  school: "Davidson College",
  location: "Davidson, NC",
  degree: "B.S. Computer Science",
  graduation: "Expected May 2029",
  coursework: [
    "Data Structures",
    "Database Programming",
    "Linear Algebra",
    "Calculus I & Modeling",
    "Calculus II",
  ],
};

// ─── Projects ──────────────────────────────────────────────────────────────

export type Project = {
  name: string;
  /** Short category shown above the title. */
  kind: string;
  year: string;
  /** The single number or outcome a recruiter should take away. */
  headline: string;
  summary: string;
  tech: string[];
  bullets: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  /** Extra links for work spanning more than one site. */
  links?: { label: string; url: string }[];
  /** Overrides the default label on the primary link. */
  liveLabel?: string;
  /** Card colour class; see .tone-* in globals.css. */
  tone: string;
  /** object-position for the card shot; screenshots want the top, photos the middle. */
  focus?: string;
};

export const projects: Project[] = [
  {
    name: "Foundation Models for AT-TPC Data",
    tone: "tone-ink",
    kind: "Machine learning research",
    year: "2026",
    headline: "88.82% accuracy · 88.60% weighted F1",
    summary:
      "Self-supervised pretraining on nuclear-physics detector data at the Facility for Rare Isotope Beams, working toward a foundation model for TPC analysis that transfers across downstream physics tasks.",
    tech: ["PyTorch", "PyTorch Geometric", "DGCNN", "SimCLR", "Point clouds", "HPC"],
    bullets: [
      "Pretrained a DGCNN encoder with SimCLR-style contrastive learning on 60,795 unlabeled AT-TPC events, then fine-tuned via linear probing on a 2,458-event labeled subset",
      "Designed a physically-motivated rotation scheme that outperformed generic augmentation baselines, validated through systematic ablation studies",
      "Trained on an HPC cluster and contributed reproducible, documented code to a cross-institutional research codebase",
    ],
    image: "/frib-group.webp",
    focus: "center 42%",
  },
  {
    name: "Left No Crumbs",
    tone: "tone-lime",
    kind: "Product · 1st place, IdeaSprint",
    year: "2025 – 2026",
    headline: "600+ students across 55 organizations",
    summary:
      "A real-time food-rescue platform that turns surplus catered meals into push alerts. Won Davidson's IdeaSprint and its $1,000 prize, then shipped.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Web Push", "TypeScript"],
    bullets: [
      "Co-founded and built the platform end to end, from pitch to production",
      "Designed a PostgreSQL schema with row-level security, campus-only auth, dietary filtering, and rate-limited push notifications",
      "Partnered with Davidson Dining and T&I on Davidson One integration",
    ],
    image: "/ideasprint.webp",
    focus: "center 40%",
    liveUrl:
      "https://hurthub.davidson.edu/davidson-entrepreneurship-network-innovation-showcase-2025-celebrating-student-entrepreneurs-and-community-innovators/",
    liveLabel: "Read the write-up",
  },
  {
    name: "Campus Event Discovery Platform",
    tone: "tone-slate",
    kind: "Data engineering",
    year: "2026",
    headline: "Automated AWS ingestion pipeline",
    summary:
      "An event discovery platform for Davidson, backed by a PostgreSQL database that an automated AWS pipeline keeps continuously fresh.",
    tech: ["Python", "PostgreSQL", "AWS Lambda", "Amazon RDS", "API Gateway", "Mapbox"],
    bullets: [
      "Ingested Davidson event data into a relational PostgreSQL database on Amazon RDS",
      "Automated extraction, cleaning, and refresh with EventBridge and Lambda",
      "Built a React/Mapbox interface to filter events by location, date, and category",
    ],
  },
  {
    name: "Naruto Shadow Clone Jutsu",
    tone: "tone-clay",
    kind: "Computer vision",
    year: "2026",
    headline: "~30 fps, fully in-browser, no backend",
    summary:
      "Real-time hand-gesture recognition. Perform the shadow clone sign on webcam and watch clones of yourself appear with smoke effects, with the whole ML pipeline running client-side.",
    tech: ["JavaScript", "TensorFlow.js", "MediaPipe", "Canvas API"],
    bullets: [
      "MediaPipe Holistic extracts 126 hand-landmark coordinates per frame into a TensorFlow.js network trained on custom gesture samples",
      "Normalized landmarks by wrist position and scale so the model generalizes across hand size and camera distance",
      "Trained a binary classifier (Dropout 0.3, 50 epochs, 0.97 confidence threshold) through a custom in-browser training UI",
    ],
    image: "/naruto-shadow-clone.jpeg",
    focus: "center 45%",
    liveUrl: "https://github.com/RainulHakim/narutoshadowclone",
    githubUrl: "https://github.com/RainulHakim/narutoshadowclone",
    liveLabel: "Repository",
  },
  {
    name: "AlternAte",
    tone: "tone-olive",
    kind: "AI product",
    year: "2026",
    headline: "Used by 100+ Davidson students",
    summary:
      "An AI meal analysis platform that breaks down any meal, flags health risks, and suggests personalized alternatives.",
    tech: ["React", "Vite", "Gemini API", "Vercel Serverless", "Python"],
    bullets: [
      "Built an AI pipeline generating macro breakdowns, health flags, and goal-based alternatives",
      "Secured the Gemini API behind serverless functions with structured JSON validation",
      "Added meal comparison and a weekly scoring system with client-side persistence",
    ],
    image: "/alternate-preview.webp",
    liveUrl: "https://alternate-app-pi.vercel.app",
    githubUrl: "https://github.com/RainulHakim/alternate-app",
  },
  {
    name: "Faculty Websites",
    tone: "tone-bone",
    kind: "Web · Davidson College",
    year: "2025 – 2026",
    headline: "Two professor sites, built from scratch",
    summary:
      "Designed and built websites for two Davidson professors, a letterpress lab and a first-year writing program, working directly with each of them.",
    tech: ["WordPress", "HTML/CSS", "Accessibility", "UI/UX"],
    bullets: [
      "Built eng.andrewrippeon.com for Dr. Andrew Rippeon, showcasing his Letterpress Lab",
      "Built english.shireencampbell.com for Dr. Shireen Campbell, Director of the First-Year Writing Program",
      "Implemented responsive layouts and accessibility standards for students, colleagues, and academic peers",
    ],
    image: "/rippeon-preview.webp",
    links: [
      { label: "Dr. Rippeon", url: "https://eng.andrewrippeon.com/" },
      { label: "Dr. Campbell", url: "https://english.shireencampbell.com/" },
    ],
  },
];

// ─── Experience ─────────────────────────────────────────────────────────────

export type Experience = {
  role: string;
  company: string;
  dates: string;
  location?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Machine Learning Research Assistant",
    company: "Facility for Rare Isotope Beams (FRIB)",
    dates: "May 2026 – Aug 2026",
    location: "East Lansing, MI & Davidson, NC",
    bullets: [
      "Reached 88.82% accuracy and 88.60% weighted F1 on 3-class track classification by pretraining a DGCNN encoder with SimCLR-style contrastive learning on 60,795 unlabeled AT-TPC events, then fine-tuning via linear probing",
      "Outperformed generic augmentation baselines by designing a physically-motivated rotation scheme, validated through systematic ablation studies",
      "Trained models with PyTorch and PyTorch Geometric on an HPC cluster; documented code for a cross-institutional, version-controlled research codebase",
    ],
  },
  {
    role: "Data Consultant",
    company: "DataCATS (Consulting, Analytics, Tutoring Services), Davidson College",
    dates: "Aug 2026 – Present",
    location: "Davidson, NC",
    bullets: [
      "Led 85+ consulting sessions and projects for students and faculty on data analysis, statistical modeling and experimental design",
      "Debug code and data pipelines, and guide regression analysis, hypothesis testing and visualization",
    ],
  },
  {
    role: "Student Consultant",
    company: "The Jay Hurt Hub for Innovation and Entrepreneurship",
    dates: "Feb 2026 – May 2026",
    location: "Davidson, NC",
    bullets: [
      "Built the Next.js/React front end and TypeScript API routes for an AI study planner, delivering a working prototype that drew follow-up interest from Davidson faculty and other consultant teams",
      "Cut malformed AI output reaching users by implementing Zod-validated response schemas and wellbeing guardrails, verified through iterative QA testing",
    ],
  },
  {
    role: "Student Web Designer",
    company: "Davidson College",
    dates: "Oct 2025 – Present",
    location: "Davidson, NC",
    bullets: [
      "Designed and developed two faculty websites to improve professional online presence, usability, and accessibility",
      "Gathered requirements directly from faculty and worked through iterative feedback to deliver user-centered sites",
    ],
  },
  {
    role: "Program Assistant & Social Media Manager",
    company: "Chidsey Program for Leadership Development",
    dates: "Nov 2025 – Present",
    location: "Davidson, NC",
    bullets: [
      "Designed promotional graphics for program outreach, sustaining engagement across social media",
      "Maintained consistent visual branding and supported day-to-day leadership program operations",
    ],
  },
];

// ─── Leadership ─────────────────────────────────────────────────────────────

export type Leadership = {
  title: string;
  organization: string;
  dates?: string;
  description: string;
  link?: string;
  award?: boolean;
};

export const leadership: Leadership[] = [
  {
    title: "IdeaSprint Winner, $1,000",
    organization: "Davidson Entrepreneurship Network",
    dates: "2025",
    description:
      "Won Davidson's IdeaSprint out of 5 finalist teams with Left No Crumbs at the 2025 Innovation Showcase.",
    link: "https://hurthub.davidson.edu/davidson-entrepreneurship-network-innovation-showcase-2025-celebrating-student-entrepreneurs-and-community-innovators/",
    award: true,
  },
  {
    title: "Resident Advisor",
    organization: "Davidson College",
    dates: "2026 – Present",
    description:
      "Support 30+ residents through community programming, conflict resolution and crisis response.",
  },
  {
    title: "Logistics",
    organization: "Hack@Davidson",
    dates: "2026 – Present",
    description:
      "Run venue, scheduling, and operations for Davidson's student hackathon.",
  },
  {
    title: "Treasurer",
    organization: "Davidson International Association",
    dates: "2026 – Present",
    description:
      "Manage the budget for the organization supporting Davidson's international student community.",
  },
  {
    title: "Secretary",
    organization: "Association for Computing Machinery (ACM)",
    dates: "2026 – Present",
    description:
      "Handle records, communications, and coordination for Davidson's ACM chapter.",
  },
  {
    title: "Event Coordinator",
    organization: "Davidson Entrepreneurship Club",
    dates: "Nov 2025 – Present",
    description:
      "Plan and run entrepreneurship events, and design the visual content that fills the room.",
  },
];

// ─── Skills ─────────────────────────────────────────────────────────────────

export type SkillGroup = { label: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  { label: "Languages", skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "R", "C"] },
  {
    label: "ML / Scientific computing",
    skills: ["PyTorch", "PyTorch Geometric", "TensorFlow.js", "MediaPipe", "OpenCV", "NumPy", "Pandas", "SciPy", "Matplotlib", "scikit-learn"],
  },
  {
    label: "Web",
    skills: ["React", "Next.js", "Node.js", "Supabase", "PostgreSQL", "Vercel Serverless", "HTML", "CSS"],
  },
  { label: "Tools", skills: ["Git", "GitHub", "AWS", "Linux", "Mapbox", "Quarto", "HPC clusters", "VS Code"] },
];
