import { Nav } from "@/components/Nav";
import { siteConfig, education } from "@/data/portfolio";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Leadership } from "@/components/sections/Leadership";
import { Contact } from "@/components/sections/Contact";

/** Structured data, so search and recruiter tools can read the basics. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: "https://rainulhakim.vercel.app",
  email: `mailto:${siteConfig.email}`,
  image: "https://rainulhakim.vercel.app" + siteConfig.headshot,
  jobTitle: "Computer Science Student",
  description: siteConfig.about,
  address: { "@type": "PostalPlace", name: siteConfig.location },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: education.school,
    address: education.location,
  },
  sameAs: [siteConfig.github, siteConfig.linkedin],
  knowsAbout: [
    "Machine learning",
    "Self-supervised learning",
    "PyTorch",
    "Data engineering",
    "Software engineering",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <About />
        <Leadership />
        <Contact />
      </main>
    </>
  );
}
