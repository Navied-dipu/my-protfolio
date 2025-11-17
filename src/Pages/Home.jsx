import React from "react";
import Hero from "./Hero";
import SkillCards from "./Skill";


import ContactForm from "./ContactForm";
import FeaturedProjects from "./featuredProjects";

export default function Home() {
  return (
    <div id="Home">
      <Hero></Hero>
      <SkillCards></SkillCards>
     <FeaturedProjects></FeaturedProjects>
      <ContactForm></ContactForm>
    </div>
  );
}
