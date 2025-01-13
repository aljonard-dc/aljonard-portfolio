import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";
import AboutMe from "@/pages/AboutMe";
import Contact from "@/pages/Contact";
import { Card } from "@/components/Card";
import { Header } from "@/lib/imports";

export default function Home() {
  return (
    <main id="home" className="relative overflow-hidden">
      
      <Header />
      <Hero />
      <AboutMe />
      <Contact />
      {/* <Projects /> */}
    </main>
  );
}
