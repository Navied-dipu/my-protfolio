import React from "react";
import Hero from "./Hero";
import SkillCards from "./Skill";
import FeaturedProjects from "./featuredProjects";
import Text from "./ContactForm";
import ContactForm from "./ContactForm";

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
