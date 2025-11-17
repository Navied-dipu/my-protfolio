import { Atom, Brush, Code, Database, Server } from "lucide-react";
import React from "react";
import { DiHtml5 } from "react-icons/di";

import { motion } from "framer-motion";

export default function SkillCards() {
  const skills = [
    {
      name: "HTML5",
      desc: "Writing accessible, SEO-friendly semantic markup.",
      icon: <DiHtml5 size={45} />,
    },
    {
      name: "CSS / Tailwind",
      desc: "Building beautiful, responsive designs with utility-first styling.",
      icon: <Brush size={45} />,
    },
    {
      name: "JavaScript (ES6+)",
      desc: "Mastering modern JS, async logic, APIs, and DOM manipulation.",
      icon: <Code size={45} />,
    },
    {
      name: "React.js",
      desc: "Creating fast, reusable UI components and SPA architecture.",
      icon: <Atom size={45} />,
    },
    {
      name: "Node.js / Express",
      desc: "Developing scalable backend APIs with authentication and routing.",
      icon: <Server size={45} />,
    },
    {
      name: "MongoDB",
      desc: "Designing flexible NoSQL schemas with optimized query patterns.",
      icon: <Database size={45} />,
    },
  ];

  return (
    <div id="Skills" className=" py-16 px-4">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-zinc-800  font-orbitron">
        My <span className="text-teal-800 font-orbitron">Skills</span>
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="
              group relative p-8 rounded-2xl border border-cyan-800
              bg-white dark:bg-zinc-900 
              shadow-lg hover:shadow-2xl 
              transition-all duration-300 cursor-pointer
            "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
          
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl bg-gradient-to-r from-cyan-500/40 to-blue-600/40 blur-xl -z-10"></div>

           
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-4, 4, -4] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="text-cyan-700 dark:text-cyan-400"
            >
              {skill.icon}
            </motion.div>

            
            <h3 className="text-xl font-bold mt-4 font-orbitron text-zinc-700 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition">
              {skill.name}
            </h3>

            
            <p className="text-zinc-600 dark:text-zinc-300 font-space-grotesk mt-2">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
