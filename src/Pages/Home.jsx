import React from "react";
import Hero from "./Hero";
import SkillCards from "./Skill";
import ContactForm from "./ContactForm";
import Projects from "./Projects";



export default function Home() {
  return (
    <div id="Home">
      <Hero></Hero>
      <SkillCards></SkillCards>
   <Projects></Projects>
      <ContactForm></ContactForm>
    </div>
  );
}
