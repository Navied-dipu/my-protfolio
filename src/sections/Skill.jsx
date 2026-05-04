'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../assets/assets';

export default function SkillCards() {
  // Triple the data for seamless marquee
  const marqueeData = [...skillsData, ...skillsData, ...skillsData];

  return (
    <section className="py-20 md:py-32 px-4 bg-bg-primary overflow-hidden" id="skills">
      <div className="container mx-auto mb-12 md:mb-20 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent font-medium tracking-widest uppercase text-xs md:text-sm mb-4 block"
        >
          Tech Stack
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-6xl font-bold font-display"
        >
          Mastering the <br /> modern web.
        </motion.h2>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            }
          }}
          className="flex gap-4 md:gap-8 whitespace-nowrap py-6 md:py-10"
        >
          {marqueeData.map((skill, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl glass border border-white/5 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-accent">
                <skill.icon size={24} className="md:w-8 md:h-8" />
              </div>
              <span className="text-base md:text-xl font-medium">{skill.title}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Detailed Skill Cards */}
      <div className="container mx-auto mt-12 md:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {skillsData.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-8 md:p-10 rounded-2xl md:rounded-3xl bg-bg-secondary border border-white/5 hover:border-accent/30 transition-all duration-500 overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-[60px] group-hover:bg-accent/20 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl glass flex items-center justify-center text-accent mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                <skill.icon size={24} className="md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, i) => (
                  <span key={i} className="text-xs md:text-sm text-text-secondary px-3 py-1 rounded-lg glass">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
