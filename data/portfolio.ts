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
    label: "Currently",
    role: "Software Engineering Intern",
    org: "StudyBuddy",
    when: "Aug 2026 – Present",
  },
  previously: {
    label: "Previously",
    role: "Machine Learning Research Intern",
    org: "Facility for Rare Isotope Beams",
    when: "Summer 2026",
  },

  about:
    "I'm a computer science student at Davidson College working across machine learning research and product engineering. Last summer I was at Michigan State's Facility for Rare Isotope Beams, training self-supervised models to read 3D point clouds off a particle detector. During the year I consult on data analytics at Davidson, build an AI study planner at StudyBuddy, and ship things people on campus actually use.",

  contactBlurb:
    "I'm looking for Summer 2027 internships in machine learning, data science and software engineering. If you're hiring, or just want to talk about research, data or something you're building, my inbox is open.",
};

export const education = {
  school: "Davidson College",
  location: "Davidson, NC",
  degree: "B.S. Computer Science, Minor in Data Science",
  graduation: "Expected May 2029",
  coursework: [
    "Data Structures",
    "Database Programming",
    "Linear Algebra",
    "Calculus I & II",
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
  /** Natural pixel size, so the card frame matches the image exactly. */
  imageSize?: { w: number; h: number };
};

export const projects: Project[] = [
  {
    name: "StudyBuddy",
    tone: "tone-navy",
    kind: "Software engineering",
    year: "2026",
    headline: "Piloted with 30 Davidson students",
    summary:
      "A weekly study planner built for real student schedules. Plan the week, get unstuck with a study coach, then review what to keep and what to change.",
    tech: ["Next.js", "React", "TypeScript", "Claude API", "Gemini API", "Zod"],
    bullets: [
      "Built the app with Next.js, React and TypeScript API routes, piloted with 30 Davidson students",
      "Integrated the Claude API with automatic Gemini fallback, keeping AI features up during provider outages",
      "Made AI output reliable with Zod-validated response schemas and a ~15-case Node.js guardrail test suite",
    ],
    image: "/studybuddy-thumbnail.png",
    imageSize: { w: 1600, h: 1000 },
    liveUrl: "https://study-buddy-pilot.vercel.app/",
    liveLabel: "Open the planner",
  },
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
    imageSize: { w: 1600, h: 1200 },
  },
  {
    name: "CatFound",
    tone: "tone-teal",
    kind: "Campus Lost & Found",
    year: "2026",
    headline: "Post a found item in 15 seconds, no account",
    summary:
      "Davidson's lost and found, online. Snap a photo, tag the building it turned up in, and whoever lost it can see where to collect it.",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Vercel"],
    bullets: [
      "Found something? Post it in 15 seconds with a photo and a location, with no account needed",
      "Lost something? Browse what has been handed in, filtered by the campus building it was found in",
      "Items route to the pickup desk for the area they were found in, so collection is unambiguous",
    ],
    image: "/catfound-thumbnail.png",
    imageSize: { w: 1920, h: 1080 },
    liveUrl: "https://catsfound.vercel.app/",
    liveLabel: "Open CatFound",
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
      "Partnered with Davidson Dining and Technology & Innovation on an integration with the Davidson One campus app",
    ],
    image: "/ideasprint.webp",
    imageSize: { w: 518, h: 374 },
    liveUrl:
      "https://hurthub.davidson.edu/davidson-entrepreneurship-network-innovation-showcase-2025-celebrating-student-entrepreneurs-and-community-innovators/",
    liveLabel: "Read the write-up",
  },
  {
    name: "CatCruxis",
    tone: "tone-slate",
    kind: "Campus Event Platform",
    year: "2026",
    headline: "Data engineering · 3NF PostgreSQL schema, automated AWS ETL",
    summary:
      "Every Davidson event in one place. Listings from WildcatSync, Handshake, the Hurt Hub, department email and student submissions are unified into a single database and surfaced on a searchable map.",
    tech: ["Python", "PostgreSQL", "AWS Lambda", "Amazon RDS", "EventBridge", "Mapbox", "React"],
    bullets: [
      "Designed a normalized (3NF) PostgreSQL schema unifying events from WildcatSync, Handshake and other campus sources",
      "Automated an ETL pipeline with EventBridge-scheduled AWS Lambda jobs to extract, clean and load event data into RDS",
      "Built a React/Mapbox map interface to filter events by location, date and category",
    ],
    image: "/catcruxis-thumbnail.png",
    imageSize: { w: 1920, h: 1080 },
    liveUrl: "https://github.com/Jogarenas/CatCruxis",
    githubUrl: "https://github.com/Jogarenas/CatCruxis",
    liveLabel: "Repository",
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
    imageSize: { w: 1024, h: 583 },
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
    imageSize: { w: 1600, h: 822 },
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
    imageSize: { w: 1600, h: 778 },
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
    role: "Software Engineering Intern",
    company: "StudyBuddy",
    dates: "Aug 2026 – Present",
    location: "Davidson, NC",
    bullets: [
      "Built an AI study-planning app with Next.js, React and TypeScript API routes, piloted with 30 Davidson students",
      "Integrated the Claude API with automatic Gemini API fallback, keeping AI features up during provider outages",
      "Made AI output reliable with Zod-validated response schemas and a ~15-case Node.js guardrail test suite",
    ],
  },
  {
    role: "Tech Consultant",
    company: "DataCATS (Consulting, Analytics, Tutoring Services), Davidson College",
    dates: "Aug 2026 – Present",
    location: "Davidson, NC",
    bullets: [
      "Led 85+ sessions and projects for students and faculty, debugging code and data pipelines and guiding modeling",
    ],
  },
  {
    role: "Machine Learning Research Intern",
    company: "Facility for Rare Isotope Beams (FRIB)",
    dates: "May 2026 – Aug 2026",
    location: "East Lansing, MI",
    bullets: [
      "Developed a self-supervised DGCNN encoder in PyTorch Geometric for AT-TPC point-cloud data, working toward a reusable foundation model for FRIB experiments",
      "Used SimCLR-style contrastive learning on 60,795 unlabeled events to reach 88.8% accuracy and 0.886 weighted F1 on 3-class particle-track classification with only ~2.5K labels",
      "Ran 14+ versioned experiments on an HPC cluster; a physics-based z-rotation augmentation gave the largest gain",
      "Debugged the point-cloud data pipeline, including a feature-dimension bug and sentinel-value handling, and shared documented code in a cross-institutional research codebase",
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
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C", "R", "HTML/CSS"],
  },
  {
    label: "Web & Backend",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "REST APIs",
      "Zod",
      "Serverless Functions",
      "Web Push",
    ],
  },
  {
    label: "Cloud & Databases",
    skills: [
      "PostgreSQL",
      "Supabase",
      "AWS (Lambda, RDS, API Gateway, EventBridge)",
      "Vercel",
    ],
  },
  {
    label: "ML & Data",
    skills: [
      "PyTorch",
      "PyTorch Geometric",
      "TensorFlow.js",
      "scikit-learn",
      "OpenCV",
      "MediaPipe",
      "NumPy",
      "Pandas",
    ],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Linux", "VS Code", "Jupyter", "HPC Clusters", "Mapbox", "Claude Code", "Codex"],
  },
];
