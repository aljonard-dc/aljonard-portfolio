import { AboutMe, Contact, Header, Hero, Projects, Service } from "@/lib/imports";

export default function Home() {
  return (
    <main id="home" className="relative overflow-hidden">
      
      <Header />
      <Hero id="home"/>
      <AboutMe id="about"/>
      <Projects id="projects"/>
      <Service id="contact"/>
      <Contact id="contact" />

    </main>
  );
}
