export const siteConfig = {
  name: "Rainul Hakim",
  role: "ML Researcher & CS Student",
  tagline: "I build with data — from particle detectors to campus apps.",
  subHeadline:
    "CS student at Davidson College — machine learning researcher at FRIB, data consultant, and designer building community-driven projects.",
  email: "rahakim@davidson.edu",
  github: "https://github.com/RainulHakim",
  linkedin: "https://www.linkedin.com/in/rainulhakim/",
  resumeUrl: "/Rainul_Hakim_Resume.pdf",

  heroHeadline: {
    before: "I design, build,",
    middle: "and lead with ",
    accent: "purpose.",
  },

  typewriterRoles: [
    "ML Researcher @ FRIB",
    "CS @ Davidson College",
    "DataCats Consultant",
    "Designer & Community Builder",
  ],

  availabilityText: "Open to Summer 2027 Internships",

  contactBlurb:
    "I'm a CS student at Davidson College seeking Summer 2027 internships in machine learning, data science, and software engineering. If you're hiring or just want to talk research, data, or design, I'd love to hear from you.",
};

export const heroStats = [
  { value: 30, suffix: "+", label: "Students & faculty advised" },
  { value: 1000, suffix: "+", label: "Community members reached" },
  { value: 40, suffix: "+", label: "Designs created" },
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
    name: "Foundation Models for AT-TPC Data",
    impact:
      "Self-supervised pretraining on particle detector data at the Facility for Rare Isotope Beams — 88.82% accuracy and 88.60% weighted F1 on 3-class track classification, learned from 60,795 unlabeled events.",
    tech: [
      "PyTorch",
      "PyTorch Geometric",
      "DGCNN",
      "SimCLR",
      "Graph Neural Networks",
      "HPC",
    ],
    bullets: [
      "Pretrained a DGCNN encoder with SimCLR-style contrastive learning on 60,795 unlabeled AT-TPC events, then fine-tuned via linear probing — reaching 88.82% accuracy and 88.60% weighted F1",
      "Designed a physically-motivated rotation scheme that outperformed generic augmentation baselines, validated through systematic ablation studies",
      "Trained on an HPC cluster with PyTorch and PyTorch Geometric, documenting code for a cross-institutional research codebase",
    ],
    liveUrl: "#",
    githubUrl: "#",
    previewGradient:
      "linear-gradient(135deg, #020617 0%, #0c4a6e 40%, #0369a1 75%, #38bdf8 100%)",
    previewImage: "/frib-group.jpeg",
  },
  {
    name: "Left No Crumbs",
    impact:
      "IdeaSprint Winner ($1,000) — a real-time food-rescue platform alerting 600+ Davidson students across 55 organizations to surplus catered meals.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Web Push", "TypeScript"],
    bullets: [
      "Co-founded and built a real-time platform that turns leftover catered food into push alerts for 600+ students across 55 campus organizations",
      "Designed a PostgreSQL schema with row-level security, campus-only auth, dietary filtering, and rate-limited push notifications",
      "Partnered with Davidson Dining and T&I on Davidson One integration",
      "Won Davidson College's IdeaSprint and its $1,000 prize at the 2025 Innovation Showcase",
    ],
    liveUrl:
      "https://hurthub.davidson.edu/davidson-entrepreneurship-network-innovation-showcase-2025-celebrating-student-entrepreneurs-and-community-innovators/",
    githubUrl: "#",
    previewGradient:
      "linear-gradient(135deg, #1a0f00 0%, #451a03 40%, #78350f 75%, #d97706 100%)",
    previewImage: "/ideasprint.png",
  },
  {
    name: "Campus Event Discovery Platform",
    impact:
      "An event discovery platform for Davidson — an automated AWS pipeline keeps a PostgreSQL database of campus events fresh, surfaced through a map-based interface.",
    tech: ["Python", "PostgreSQL", "AWS Lambda", "Amazon RDS", "API Gateway", "Mapbox"],
    bullets: [
      "Built a platform ingesting Davidson event data into a relational PostgreSQL database on Amazon RDS",
      "Automated the pipeline with EventBridge and Lambda to extract, clean, and refresh event and location data",
      "Developed a React/Mapbox interface to filter events by location, date, and category, with campus navigation",
    ],
    liveUrl: "#",
    githubUrl: "#",
    previewGradient:
      "linear-gradient(135deg, #1f0514 0%, #831843 40%, #be185d 75%, #f9a8d4 100%)",
  },
  {
    name: "Naruto Shadow Clone Jutsu",
    impact:
      "Real-time in-browser gesture recognition — perform a hand sign on webcam and watch shadow clones of yourself appear with smoke effects. Full ML pipeline, no backend.",
    tech: ["JavaScript", "TensorFlow.js", "MediaPipe", "Canvas API", "Machine Learning"],
    bullets: [
      "Built a full ML pipeline that runs entirely in the browser — MediaPipe Holistic extracts 126 hand landmark coordinates per frame, which feed into a TensorFlow.js neural network trained on custom gesture samples",
      "Normalized hand landmarks by wrist position and scale so the model learns gesture shape independent of hand size or distance from the camera",
      "Used MediaPipe Selfie Segmentation to cut out my body silhouette, then rendered it multiple times at staggered positions and scales using the HTML Canvas API to simulate shadow clones",
      "Built a full in-browser training UI — record positive/negative samples, train a binary classifier (Dropout 0.3, 50 epochs, 0.97 confidence threshold), export and load the model without any server",
    ],
    liveUrl: "https://github.com/RainulHakim/narutoshadowclone",
    githubUrl: "https://github.com/RainulHakim/narutoshadowclone",
    previewGradient:
      "linear-gradient(135deg, #1a0a00 0%, #3d1a00 35%, #c2410c 70%, #fb923c 100%)",
    previewImage: "/naruto-shadow-clone.jpeg",
  },
  {
    name: "AlternAte",
    impact:
      "An AI meal analysis platform used by 100+ Davidson students — analyzes any meal, flags health risks, and suggests personalized alternatives.",
    tech: ["React", "Vite", "Gemini API", "Vercel Serverless", "Python"],
    bullets: [
      "Built an AI pipeline generating macro breakdowns, health flags, and personalized alternatives for any meal",
      "Integrated the Gemini API behind serverless functions, with meal comparison and weekly scoring systems",
      "Deployed to 100+ Davidson students evaluating and comparing campus meals",
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
    role: "Machine Learning Research Assistant",
    company: "Facility for Rare Isotope Beams (FRIB) — East Lansing, MI & Davidson, NC",
    dates: "May 2026 – Aug 2026",
    bullets: [
      "Reached 88.82% accuracy and 88.60% weighted F1 on 3-class track classification by pretraining a DGCNN encoder with SimCLR-style contrastive learning on 60,795 unlabeled AT-TPC events, then fine-tuning via linear probing",
      "Outperformed generic augmentation baselines by designing a physically-motivated rotation scheme, validated through systematic ablation studies",
      "Trained models with PyTorch and PyTorch Geometric on an HPC cluster; documented code for a cross-institutional, version-controlled research codebase",
    ],
  },
  {
    role: "Student Consultant",
    company: "Data CATS (Consulting, Analytics, Tutoring Services), Davidson College",
    dates: "Aug 2026 – Present",
    bullets: [
      "Resolved data-analytics problems for 85+ students and faculty, from framing questions to visualizing and interpreting results",
    ],
  },
  {
    role: "NEXT Level Student Consultant",
    company: "The Jay Hurt Hub for Innovation and Entrepreneurship",
    dates: "Feb 2026 – May 2026",
    bullets: [
      "Built the Next.js/React front end and TypeScript API routes for an AI study planner, delivering a working prototype that drew follow-up interest from Davidson faculty and other consultant teams",
      "Cut malformed AI output reaching users by implementing Zod-validated response schemas and wellbeing guardrails, verified through iterative QA testing",
    ],
  },
  {
    role: "Student Web Designer",
    company: "Davidson College",
    dates: "Oct 2025 – Present",
    bullets: [
      "Designed and developed faculty websites to enhance professional online presence, usability, and accessibility",
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
    title: "Resident Advisor",
    organization: "Davidson College",
    dates: "Aug 2026 – Present",
    description:
      "Support 30+ residents through community-building programming, conflict resolution, and crisis response.",
    tags: ["Leadership", "Community", "Residence Life"],
  },
  {
    title: "Logistics",
    organization: "Hack@Davidson",
    dates: "2026 – Present",
    description:
      "Run logistics for Davidson's student hackathon — venue, scheduling, and the operational details that keep a weekend of building on track.",
    tags: ["Events", "Operations", "Computing"],
  },
  {
    title: "Treasurer",
    organization: "Davidson International Association",
    dates: "2026 – Present",
    description:
      "Manage the budget for the organization supporting Davidson's international student community, overseeing event funding and year-round programming.",
    tags: ["Leadership", "Finance", "Community"],
  },
  {
    title: "Secretary",
    organization: "Association for Computing Machinery (ACM), Davidson College",
    dates: "2026 – Present",
    description:
      "Keep Davidson's ACM student chapter running — handling records, communications, and coordination for chapter events and initiatives.",
    tags: ["Leadership", "Computing", "Events"],
  },
  {
    title: "Event Coordinator",
    organization: "Davidson Entrepreneurship Club",
    dates: "Nov 2025 – Present",
    description:
      "Plan and coordinate entrepreneurship-focused events and initiatives at Davidson College, and design visual content to support event promotion and student engagement.",
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
    label: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 78 },
      { name: "JavaScript", level: 86 },
      { name: "TypeScript", level: 82 },
      { name: "SQL", level: 80 },
      { name: "R", level: 72 },
      { name: "C", level: 70 },
    ],
  },
  {
    label: "ML / Scientific Computing",
    skills: [
      { name: "PyTorch", level: 85 },
      { name: "PyTorch Geometric", level: 80 },
      { name: "TensorFlow.js", level: 78 },
      { name: "MediaPipe", level: 76 },
      { name: "OpenCV", level: 74 },
      { name: "NumPy", level: 88 },
      { name: "Pandas", level: 85 },
      { name: "SciPy", level: 75 },
      { name: "Matplotlib", level: 82 },
      { name: "scikit-learn", level: 82 },
    ],
  },
  {
    label: "Web",
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 78 },
      { name: "Supabase", level: 80 },
      { name: "PostgreSQL", level: 80 },
      { name: "Vercel Serverless", level: 82 },
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", level: 86 },
      { name: "GitHub", level: 86 },
      { name: "VS Code", level: 92 },
      { name: "AWS", level: 74 },
      { name: "Linux", level: 76 },
      { name: "Mapbox", level: 72 },
      { name: "Quarto", level: 70 },
      { name: "HPC Clusters", level: 75 },
    ],
  },
];

// ─── Tech marquee ────────────────────────────────────────────────────────────

export const marqueeItems = [
  "Python",
  "PyTorch",
  "PyTorch Geometric",
  "TensorFlow.js",
  "MediaPipe",
  "OpenCV",
  "NumPy",
  "Pandas",
  "scikit-learn",
  "TypeScript",
  "Next.js",
  "React",
  "Supabase",
  "PostgreSQL",
  "SQL",
  "R",
  "C",
  "Java",
  "Node.js",
  "AWS",
  "Mapbox",
  "Linux",
  "Git",
  "HPC Clusters",
];
