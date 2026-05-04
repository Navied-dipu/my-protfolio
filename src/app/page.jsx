import Hero from "@/sections/Hero";
import About from "@/sections/About";
import SkillCards from "@/sections/Skill";
import Projects from "@/sections/Projects";
import ContactForm from "@/sections/ContactForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <SkillCards />
      <Projects />
      <ContactForm />
    </div>
  );
}
