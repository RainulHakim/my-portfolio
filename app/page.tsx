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
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Background />
      <CursorGlow />
      <Nav />
      <KeyboardShortcuts />
      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <Projects />
        <Experience />
        <Involvement />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
