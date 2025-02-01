import { AboutMe, Contact, Header, Hero, Projects, Service } from "@/lib/imports";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      
      <Header />
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Service/>
      <Contact/>

    </main>
  );
}
