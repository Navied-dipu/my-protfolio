'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import ThemeToggle from '../components/ThemeToggle';
import MagneticButton from '../components/MagneticButton';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  // Defined your navigation layout cleanly inside the component
  const navMenu = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      if (!isOpen) {
        setHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  const scrollToSection = (id) => {
    if (!id) return;
    
    const target = id.toLowerCase() === 'home' ? '#home' : 
                   id.toLowerCase() === 'work' ? '#work' : 
                   id.toLowerCase() === 'skills' ? '#skills' : 
                   id.toLowerCase() === 'about' ? '#about' : 
                   id.toLowerCase() === 'contact' ? '#contact' : `#${id.toLowerCase()}`;
    
    setIsOpen(false);
    lenis?.scrollTo(target, {
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4"
      >
        <div className={`
          flex items-center gap-2 md:gap-6 px-4 md:px-8 py-3 rounded-full transition-all duration-500
          ${isScrolled || isOpen ? 'glass shadow-xl' : 'bg-transparent'}
        `}>
          {/* Mobile Menu Button */}
          <button 
            className="p-2 md:hidden text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            {navMenu.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.label)}
                className="relative px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-white/10 mx-2 hidden md:block" />

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <MagneticButton className="hidden md:block">
              <a 
                href="https://drive.google.com/file/d/17NuXjMbzg2Ssnf8PJQ7BWB8gno43-XzU/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 bg-text-primary text-bg-primary rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Resume
              </a>
            </MagneticButton>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-4 right-4 z-[90] glass rounded-3xl p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navMenu.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.label)}
                className="w-full text-left px-6 py-4 text-lg font-bold text-text-primary hover:bg-white/5 rounded-2xl transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="h-[1px] bg-white/10 w-full my-2" />
            <a 
              href="https://drive.google.com/file/d/17NuXjMbzg2Ssnf8PJQ7BWB8gno43-XzU/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-text-primary text-bg-primary rounded-2xl text-center font-bold"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}