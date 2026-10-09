import { Background } from "@/components/Background";
import { CursorGlow } from "@/components/CursorGlow";
import { Nav } from "@/components/Nav";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
import { TechMarquee } from "@/components/TechMarquee";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Involvement } from "@/components/sections/Involvement";
import { Skills } from "@/components/sections/Skills";
import { Writing } from "@/components/sections/Writing";
import { Contact } from "@/components/sections/Contact";
import { getPostMetas } from "@/lib/writing";

export default function Home() {
  const posts = getPostMetas();

  return (
    <>
      <Background />
      <CursorGlow />
      <Nav showWriting={posts.length > 0} />
      <KeyboardShortcuts />
      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <Projects />
        <Experience />
        <Involvement />
        <Writing posts={posts} />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
