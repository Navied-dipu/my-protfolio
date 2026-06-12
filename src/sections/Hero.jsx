'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';
import banner from "../assets/banner.png";
import Image from 'next/image';
import MagneticButton from '../components/MagneticButton';

import { personalInfo } from '../assets/assets';

export default function Hero() {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let split;
    if (titleRef.current) {
      split = new SplitType(titleRef.current, { types: 'chars,words' });
      
      gsap.from(split.chars, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.02,
        ease: 'power4.out',
        delay: 0.5
      });
    }

    // Parallax effect on image
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;
      
      gsap.to('.hero-image', {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.to('.hero-glow', {
        x: xPos * 1.5,
        y: yPos * 1.5,
        duration: 1.5,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (split) split.revert();
    };
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 md:py-20 px-4">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-10 lg:pt-0">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs md:sm font-medium text-accent mb-6">
              Available for work
            </span>
            <h1 ref={titleRef} className="text-4xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.1] mb-6 md:mb-8">
              React &<br className="hidden md:block" /> 
              <span className=" bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Next.js</span> Expert
            </h1>
            <p className="text-base md:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed">
              {personalInfo.workType}
            </p>
            
            <div className="flex flex-col md:flex-row flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              <MagneticButton className="px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full font-semibold text-base md:text-lg hover:bg-zinc-200 transition-colors">
                View My Work
              </MagneticButton>
              <div className="flex gap-4 justify-center">
                <a href="https://drive.google.com/file/d/17NuXjMbzg2Ssnf8PJQ7BWB8gno43-XzU/view?usp=sharing" target="_blank" className="flex-1 md:flex-none">
                  <MagneticButton className="w-full px-6 py-3 md:px-8 md:py-4 border border-white/10 rounded-full font-semibold text-base md:text-lg hover:bg-white/5 transition-colors text-center">
                    Resume
                  </MagneticButton>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center relative">
          <div className="hero-glow absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full scale-125" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hero-image relative z-10"
          >
            <Image 
              src={banner} 
              alt="Profile" 
              className="w-[240px] h-[240px] md:w-[450px] md:h-[450px] object-cover rounded-3xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />

            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 glass p-3 md:p-4 rounded-2xl hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-text-secondary">Performance 100%</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
