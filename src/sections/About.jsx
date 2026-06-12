'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { profileData, personalInfo } from '../assets/assets';

export default function About() {
  return (
    <section className="py-20 md:py-32 px-4 bg-bg-secondary" id="about">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-32">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium tracking-widest uppercase text-xs md:text-sm mb-4 block"
          >
            The Story
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold font-display mb-8 md:mb-10"
          >
            Design <br /> Driven by <br /> Passion.
          </motion.h2>
          
          <div className="space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg mb-10 md:mb-12">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {personalInfo.journey}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {personalInfo.workType}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {profileData.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
              >
                <div className="text-accent mb-2">
                  <item.icon size={20} className="md:w-6 md:h-6" />
                </div>
                <h4 className="text-base md:text-lg font-bold mb-1">{item.title}</h4>
                <p className="text-xs md:text-sm text-text-secondary">{item.technologies.join(', ')}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-12 md:space-y-16 mt-12 lg:mt-0">
          <ScrollRevealSection 
            title="Professional Journey" 
            content={personalInfo.journey} 
          />
          
          {/* <div className="max-w-xl">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-accent" /> Education
            </h3>
            <div className="space-y-6 md:space-y-8">
              {personalInfo.education.map((edu, i) => (
                <div key={i} className="glass p-5 md:p-6 rounded-2xl border border-white/5">
                  <span className="text-accent text-[10px] md:text-sm font-bold uppercase tracking-widest">{edu.year}</span>
                  <h4 className="text-lg md:text-xl font-bold mt-2">{edu.degree}</h4>
                  <p className="text-sm md:text-base text-text-primary/80 font-medium mb-3 md:mb-4">{edu.institution}</p>
                  <p className="text-xs md:text-base text-text-secondary leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div> */}

          <div className="max-w-xl">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-accent" /> Professional Experience
            </h3>
            <div className="glass p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                  <h4 className="text-lg md:text-xl font-bold">MERN Stack Developer (Freelance)</h4>
                  <span className="text-accent text-xs md:text-sm font-bold">2024 - Present</span>
                </div>
                <p className="text-sm md:text-base text-text-secondary">Building end-to-end web applications for international clients, focusing on scalability and premium UX.</p>
              </div>
              <div className="h-[1px] bg-white/5 w-full" />
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                  <h4 className="text-lg md:text-xl font-bold">Frontend Intern</h4>
                  <span className="text-accent text-xs md:text-sm font-bold">2023 (6 Months)</span>
                </div>
                <p className="text-sm md:text-base text-text-secondary">Assisted in developing responsive UI components using React and Tailwind CSS for a local SaaS startup.</p>
              </div>
            </div>
          </div>

          <ScrollRevealSection 
            title="Beyond Coding" 
            content={personalInfo.hobbies} 
          />
          
          <div className="pt-10 grid grid-cols-2 gap-8 md:gap-12 border-t border-white/10 text-center sm:text-left">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-accent mb-2">25+</h3>
              <p className="text-text-secondary uppercase tracking-widest text-[10px] md:text-xs">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-accent mb-2">5+</h3>
              <p className="text-text-secondary uppercase tracking-widest text-[10px] md:text-xs">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollRevealSection({ title, content }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="max-w-xl"
    >
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
        <span className="w-8 h-[1px] bg-accent" /> {title}
      </h3>
      <p className="text-lg text-text-secondary leading-relaxed">
        {content}
      </p>
    </motion.div>
  );
}
