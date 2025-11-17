import Navigation from "@/components/navigation";
import Header from "@/components/Header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
