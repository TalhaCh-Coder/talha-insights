import Image from "next/image";
import Hero from "@/components/home/HomeHero";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectSection";
import AboutSummary from "@/components/home/AboutSummary";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
   return (
      <>
         <Hero />
         <AboutSummary />
         <SkillsSection />
         <ProjectsSection />
         <ContactCTA />
      </>
   );
}
