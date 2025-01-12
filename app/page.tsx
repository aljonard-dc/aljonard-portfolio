import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";
import AboutMe from "@/pages/AboutMe";
import Contact  from "@/pages/Contact";
import { Card } from "@/components/Card";
import { Header } from "@/lib/imports";


export default function Home() {
  return (
    <main id="home" className="relative overflow-hidden bg-neptune-50">
      <div className="container mx-auto">
        <Header />
        <Hero/>
      </div>
     
      {/* <AboutMe/>  */}
      {/* <Projects/> */}
      {/* <Contact/>
      <Card/> */}
    
    
    </main>
  );
}
