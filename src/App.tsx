/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Linkedin, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ExternalLink, 
  Code, 
  BarChart3, 
  Trophy, 
  Users,
  Menu,
  X
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { DIOR_DATA } from "./constants";

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-16">
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-[0.3em] text-luxury-gray mb-4 block"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif"
    >
      {children}
    </motion.h2>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-luxury-white selection:bg-luxury-beige selection:text-luxury-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-luxury-white/80 backdrop-blur-md py-4 border-b border-luxury-beige/50" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.a 
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-serif tracking-widest uppercase"
          >
            Dior Charles
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-12">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-xs uppercase tracking-widest hover:text-luxury-gray transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={false}
        animate={isMenuOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-40 bg-luxury-white md:hidden flex flex-col items-center justify-center gap-8"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-serif hover:text-luxury-gray transition-colors"
          >
            {link.name}
          </a>
        ))}
      </motion.div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-xs uppercase tracking-[0.4em] text-luxury-gray mb-6 block">
                {DIOR_DATA.university}
              </span>
              <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8">
                {DIOR_DATA.name}
              </h1>
              <p className="text-lg md:text-xl text-luxury-gray max-w-md font-light leading-relaxed mb-10 italic">
                "{DIOR_DATA.tagline}"
              </p>
              <div className="flex gap-6">
                <a href="#portfolio" className="bg-luxury-black text-luxury-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-luxury-gray transition-all">
                  View Work
                </a>
                <a href="#contact" className="border border-luxury-black px-8 py-4 text-xs uppercase tracking-widest hover:bg-luxury-black hover:text-luxury-white transition-all">
                  Contact
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="aspect-[4/5] bg-luxury-beige overflow-hidden relative"
            >
              <img 
                src={DIOR_DATA.headshot} 
                alt={DIOR_DATA.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-black/5 mix-blend-multiply"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-luxury-white p-8 border border-luxury-beige hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-luxury-black flex items-center justify-center text-luxury-white">
                  <Trophy size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-luxury-gray">Student Athlete</p>
                  <p className="text-sm font-serif">Purdue Volleyball</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gray">Scroll</span>
          <div className="w-[1px] h-12 bg-luxury-beige relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-full bg-luxury-black"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <SectionTitle subtitle="The Story">About Me</SectionTitle>
            </div>
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <p className="text-2xl md:text-3xl font-serif leading-relaxed text-luxury-black">
                  {DIOR_DATA.bio}
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-luxury-beige">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-luxury-gray mb-4">Education</h4>
                    <p className="text-sm font-medium">{DIOR_DATA.education.school}</p>
                    <p className="text-sm text-luxury-gray">{DIOR_DATA.education.degree}</p>
                    <p className="text-xs mt-2">Class of {DIOR_DATA.education.graduation} • GPA {DIOR_DATA.education.gpa}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-luxury-gray mb-4">Location</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={14} />
                      <span>{DIOR_DATA.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 md:px-12 bg-luxury-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Selected Work">Projects & Case Studies</SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-8">
            {DIOR_DATA.projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden bg-luxury-beige mb-6 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-luxury-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-luxury-white flex items-center justify-center">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-luxury-gray mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-serif mb-3 group-hover:text-luxury-gray transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-luxury-gray font-light leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Experience */}
      <section id="experience" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Experience */}
            <div>
              <SectionTitle subtitle="Career Path">Experience</SectionTitle>
              <div className="space-y-12">
                {DIOR_DATA.experience.map((exp, i) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-8 border-l border-luxury-beige"
                  >
                    <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-luxury-black rounded-full" />
                    <span className="text-[10px] uppercase tracking-widest text-luxury-gray mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-serif mb-1">{exp.role}</h3>
                    <p className="text-sm font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-sm text-luxury-gray flex gap-3">
                          <ChevronRight size={14} className="mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <SectionTitle subtitle="Expertise">Skills & Qualities</SectionTitle>
              <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                {DIOR_DATA.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium tracking-wide">{skill}</span>
                    </div>
                    <div className="h-[1px] w-full bg-luxury-beige relative overflow-hidden">
                      <motion.div 
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="absolute inset-0 bg-luxury-black"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-luxury-white border border-luxury-beige">
                <h4 className="text-sm uppercase tracking-widest mb-6">Core Attributes</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <BarChart3 size={18} className="text-luxury-gray" />
                    <span className="text-xs uppercase tracking-wider">Analytical</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy size={18} className="text-luxury-gray" />
                    <span className="text-xs uppercase tracking-wider">Competitive</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={18} className="text-luxury-gray" />
                    <span className="text-xs uppercase tracking-wider">Collaborative</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code size={18} className="text-luxury-gray" />
                    <span className="text-xs uppercase tracking-wider">Technical</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-luxury-black text-luxury-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-luxury-gray mb-6 block">Get in Touch</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8">Let's build something exceptional.</h2>
            <p className="text-luxury-gray max-w-xl mx-auto font-light leading-relaxed">
              Currently seeking opportunities in Business Analytics and Information Management. 
              Open to collaborations and professional inquiries.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <a 
              href={`mailto:${DIOR_DATA.email}`}
              className="group flex items-center gap-4 text-xl font-serif hover:text-luxury-gray transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-luxury-gray flex items-center justify-center group-hover:bg-luxury-white group-hover:text-luxury-black transition-all">
                <Mail size={20} />
              </div>
              <span>{DIOR_DATA.email}</span>
            </a>
            <a 
              href={DIOR_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-xl font-serif hover:text-luxury-gray transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-luxury-gray flex items-center justify-center group-hover:bg-luxury-white group-hover:text-luxury-black transition-all">
                <Linkedin size={20} />
              </div>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-luxury-black text-luxury-gray border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Dior Charles. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest hover:text-luxury-white transition-colors">Privacy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest hover:text-luxury-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
