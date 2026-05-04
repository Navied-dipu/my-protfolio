'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin, FiPhone, FiMessageSquare, FiFacebook } from "react-icons/fi";
import MagneticButton from "../components/MagneticButton";
import { personalInfo } from "../assets/assets";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_EMAIL_KEY);


    setResult("Sending...");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully!");
        form.reset();
      } else {
        setResult("Error sending message.");
      }
    } catch {
      setResult("Something went wrong.");
    }

  };

  return (
    <section id="contact" className="py-32 px-4 bg-bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-display"
          >
            Let's create something <br /> legendary.
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="grid gap-6">
                <ContactInfoItem 
                  icon={<FiMail />} 
                  label="Email" 
                  value={personalInfo.email} 
                  link={`mailto:${personalInfo.email}`} 
                />
                <ContactInfoItem 
                  icon={<FiPhone />} 
                  label="Phone" 
                  value={personalInfo.phone} 
                  link={`tel:${personalInfo.phone}`} 
                />
                <ContactInfoItem 
                  icon={<FiMessageSquare />} 
                  label="WhatsApp" 
                  value={personalInfo.whatsapp} 
                  link={`https://wa.me/${personalInfo.whatsapp.replace(/\s+/g, '')}`} 
                />
                <ContactInfoItem 
                  icon={<FiMapPin />} 
                  label="Location" 
                  value={personalInfo.location} 
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Social Connect</h3>
              <div className="flex flex-wrap gap-4">
                {personalInfo.socials.map((social, i) => (
                  <MagneticButton key={i} className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5">
                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                      <social.icon size={24} />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2rem] border border-white/5"
          >
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary ml-1">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary ml-1">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              
              <MagneticButton className="w-full">
                <button type="submit" className="w-full bg-text-primary text-bg-primary hover:opacity-90 font-bold py-5 rounded-2xl transition-all shadow-xl dark:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  Send Message
                </button>
              </MagneticButton>
              
              {result && (
                <p className={`text-center mt-4 font-medium ${result.includes('Success') ? 'text-green-400' : 'text-accent'}`}>
                  {result}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-text-secondary text-sm">
        <p>© 2026 {personalInfo.name}. Crafted with passion.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </footer>
    </section>
  );
}

function ContactInfoItem({ icon, label, value, link }) {
  const content = (
    <div className="flex items-center gap-6 group">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 border border-white/5">
        {icon}
      </div>
      <div>
        <p className="text-sm text-text-secondary uppercase tracking-widest mb-1">{label}</p>
        <p className="text-lg font-medium group-hover:text-accent transition-colors">{value}</p>
      </div>
    </div>
  );

  return link ? <a href={link}>{content}</a> : content;
}
