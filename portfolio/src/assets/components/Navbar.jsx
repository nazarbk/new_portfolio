import React, { useEffect, useState } from "react";
import {FiMenu, FiX} from 'react-icons/fi';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <motion.header 
      initial={{ opacity: 0, transform: "translateY(-60px)" }}
      animate={{ opacity: 1, transform: "translateY(0px)" }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-title font-extrabold tracking-widest text-[#B5E7F7] drop-shadow-md">
          NAZAR <span className="">BLANCO.</span>
        </div>
        <div className="hidden lg:flex items-center space-x-4 font-body">
          {/*<a href="about" className="text-[#E6D6FF] hover:text-[#99ECFF] transition font-semibold">Contact</a>
          <a href="skills" className="text-[#E6D6FF] hover:text-[#99ECFF] transition font-semibold">Skills</a>
          <a href="experience" className="text-[#E6D6FF] hover:text-[#99ECFF] transition font-semibold">Experience</a>
          <a href="projects" className="text-[#E6D6FF] hover:text-[#99ECFF] transition font-semibold">Project</a>
          <a href="contact" className="text-[#EA8CFF] hover:text-[#99ECFF] transition font-semibold">Contact</a>*/}
          <NavLink href="#about" text="About" />
          <NavLink href="#skills" text="Skills" />
          <NavLink href="#experience" text="Experience" />
          <NavLink href="#Projects" text="Projects" />
          <ContactButton />
        </div>
        <div className="hidden lg:flex items-center space-x-6 ml-6">
            <a href="https://github.com/nazarbk" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-[#E6D6FF] hover:text-[#99ECFF] text-2xl transition-all duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/nazar-blanco-kataran/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[#E6D6FF] hover:text-[#99ECFF] text-2xl transition-all duration-300" />
            </a>
        </div>

        <button className="lg:hidden text-[#B5E7F7] text-2xl z-50" onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open Menu"
        >
          {menuOpen ? <FiX/> : <FiMenu />}
        </button>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{opacity: 0, y: -40}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -40}}
              transition={{duration: 0.45, ease: 'easeInOut'}}
              className="fixed top-0 left-0 w-full h-screen bg-[rgba(27,21,49,0.98)] backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-xl font-body z-40"
            >
              <NavLink href="#about" text="About" onClick={() => setMenuOpen(false)} />
              <NavLink href="#skills" text="Skills" onClick={() => setMenuOpen(false)} />
              <NavLink href="#experience" text="Experience" onClick={() => setMenuOpen(false)} />
              <NavLink href="#Projects" text="Projects" onClick={() => setMenuOpen(false)} />
              <ContactButton />
              <div className="flex space-x-6 mt-6">
                <a href="https://github.com/nazarbk" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-[#E6D6FF] hover:text-[#99ECFF] text-3xl transition-all duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/nazar-blanco-kataran/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-[#E6D6FF] hover:text-[#99ECFF] text-3xl transition-all duration-300" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

function NavLink({href, text, onClick}) {
  return (
    <a 
      className="relative px-3 py-1 text-[#E6D6FF] hover:text-[#99ECFF] font-semibold transition
      after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 hover:after:w-2/3 after:h-[2px] after:bg-[#99ECFF] after:rounded-full after:transition-all after:duration-300" 
      href={href}
      onClick={onClick}
    >
      {text}
    </a>
  );
}

function ContactButton({onClick}) {
  return (
    <a
      href="#contact"
      onClick={onClick}
      className="relative px-3 py-1 text-[#EA8CFF] hover:text-[#99ECFF] font-semibold transition
      after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 hover:after:w-2/3 after:h-[2px] after:bg-[#99ECFF] after:rounded-full after:transition-all after:duration-300"
    >
      Contact
    </a>
  )
}

