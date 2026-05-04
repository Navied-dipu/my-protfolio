'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { projectData } from '../assets/assets';
import Image from 'next/image';
import MagneticButton from '../components/MagneticButton';

import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

export default function Projects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      const sections = gsap.utils.toArray('.project-card');
      
      const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + triggerRef.current.offsetWidth,
        }
      });

      return () => {
        scrollTween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="overflow-hidden bg-bg-secondary" id="work">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="flex flex-col lg:flex-row flex-nowrap relative">
          {/* Section Title Card */}
          <div className="project-card h-[50vh] lg:h-screen w-full lg:w-screen flex flex-col justify-center px-8 md:px-20 shrink-0">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-medium tracking-widest uppercase text-xs md:text-sm mb-4"
            >
              Selected Works
            </motion.span>
            <h2 className="text-5xl md:text-8xl font-bold font-display leading-tight">
              Crafting <br className="hidden lg:block" /> Digital <br className="hidden lg:block" /> Excellence.
            </h2>
            <div className="mt-8 md:mt-12 flex items-center gap-4 text-text-secondary">
              <div className="w-8 md:w-12 h-[1px] glass" />
              <p className="text-[10px] md:text-sm uppercase tracking-widest">Scroll to explore</p>
            </div>
          </div>

          {/* Project Cards */}
          {projectData.map((project, index) => (
            <div key={index} className="project-card h-auto lg:h-screen w-full lg:w-screen flex items-center justify-center p-4 md:p-10 lg:p-20 shrink-0 my-8 lg:my-0">
              <div className="relative group w-full max-w-5xl aspect-[4/5] sm:aspect-[16/10] lg:aspect-video overflow-hidden rounded-[2rem] border border-white/10 glass shadow-2xl">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent lg:opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-16 text-white">
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full glass backdrop-blur-md text-[10px] md:text-xs font-medium border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4">{project.title}</h3>
                  <p className="text-sm md:text-lg text-white/70 max-w-2xl mb-6 md:mb-8 line-clamp-3 md:line-clamp-none">
                    {project.description}
                  </p>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="self-start"
                  >
                    <MagneticButton className="px-6 py-3 md:px-8 md:py-3 bg-white text-black rounded-full font-bold text-sm md:text-base hover:bg-zinc-200 transition-colors">
                      View Project
                    </MagneticButton>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Final Card */}
          <div className="project-card h-[50vh] lg:h-screen w-full lg:w-screen flex flex-col justify-center items-center px-8 md:px-20 shrink-0 py-20 lg:py-0">
            <h2 className="text-4xl md:text-7xl font-bold font-display text-center mb-10 md:mb-12">
              Interested in <br /> collaboration?
            </h2>
            <MagneticButton className="px-10 py-4 lg:px-12 lg:py-5 bg-text-primary text-bg-primary hover:opacity-90 rounded-full font-bold text-lg lg:text-xl shadow-2xl dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all">
              Start a Conversation
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-bg-primary rounded-[2rem] border border-white/10 overflow-y-auto no-scrollbar shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 rounded-full glass hover:bg-white/10 transition-colors z-10"
              >
                <FiX size={24} />
              </button>

              <div className="p-8 md:p-12">
                <div className="rounded-2xl overflow-hidden mb-10 aspect-video border border-white/5 relative">
                  <Image src={selectedProject.image} alt={selectedProject.title} fill className="w-full h-full object-cover" />
                </div>


                <div className="flex flex-col md:flex-row gap-12">
                  <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">{selectedProject.title}</h2>
                    <p className="text-lg text-text-secondary leading-relaxed mb-8">
                      {selectedProject.description}
                    </p>
                    
                    <div className="mb-10">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Core Challenges</h4>
                      <p className="text-text-secondary leading-relaxed">{selectedProject.challenges}</p>
                    </div>

                    <div className="mb-10">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Future Plans</h4>
                      <p className="text-text-secondary leading-relaxed">{selectedProject.improvements}</p>
                    </div>
                  </div>

                  <div className="w-full md:w-64 space-y-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t, i) => (
                          <span key={i} className="px-3 py-1 rounded-lg glass text-xs font-medium">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 pt-8">
                      <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="block">
                        <button className="w-full py-4 bg-accent text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-colors">
                          <FiExternalLink /> Live Demo
                        </button>
                      </a>
                      <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="block">
                        <button className="w-full py-4 border border-white/10 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-white/5 transition-colors">
                          <FiGithub /> GitHub Repo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
