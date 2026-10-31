import { useEffect, useState } from "react";
import {FiMenu, FiX, FiTerminal} from 'react-icons/fi';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { LANGS, useLang } from "../../i18n";

export default function Navbar({ onOpenTerminal }) {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // While the mobile menu is open: lock page scroll, close with Escape, close if the screen grows to desktop
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onResize = (e) => e.matches && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const openTerminal = () => {
    setMenuOpen(false);
    onOpenTerminal();
  };

  const links = [
    { href: "#about", text: t.nav.about },
    { href: "#experience", text: t.nav.experience },
    { href: "#skills", text: t.nav.skills },
    { href: "#projects", text: t.nav.projects },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, transform: "translateY(-60px)" }}
      animate={{ opacity: 1, transform: "translateY(0px)" }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center gap-4 px-4 sm:px-6 py-4" aria-label="Main">
        <a href="#home" onClick={closeMenu} className="relative z-50 text-xl sm:text-2xl font-title font-extrabold tracking-wider sm:tracking-widest text-[#B5E7F7] drop-shadow-md whitespace-nowrap">
          NAZAR BLANCO.
        </a>
        <div className="hidden xl:flex items-center space-x-1 2xl:space-x-3 font-body text-lg">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} text={link.text} />
          ))}
          <ContactButton text={t.nav.contact} />
        </div>
        <div className="hidden xl:flex items-center space-x-5">
            <TerminalButton label={t.nav.terminal} onClick={openTerminal} />
            <a href="https://github.com/nazarbk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-[#E6D6FF] hover:text-[#99ECFF] text-2xl transition-all duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/nazar-blanco-kataran/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-[#E6D6FF] hover:text-[#99ECFF] text-2xl transition-all duration-300" />
            </a>
            <LangToggle />
        </div>

        <div className="xl:hidden relative z-50 flex items-center gap-3">
          <LangToggle />
          <button className="text-[#B5E7F7] text-2xl p-2 -mr-2" onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FiX/> : <FiMenu />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{opacity: 0, y: -40}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -40}}
              transition={{duration: 0.45, ease: 'easeInOut'}}
              className="fixed top-0 left-0 w-full h-screen h-[100dvh] bg-[rgba(27,21,49,0.98)] backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-xl font-body z-40"
            >
              {links.map((link) => (
                <NavLink key={link.href} href={link.href} text={link.text} onClick={closeMenu} />
              ))}
              <ContactButton text={t.nav.contact} onClick={closeMenu} />
              <div className="flex items-center space-x-6 mt-6">
                <a href="https://github.com/nazarbk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="text-[#E6D6FF] hover:text-[#99ECFF] text-3xl transition-all duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/nazar-blanco-kataran/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="text-[#E6D6FF] hover:text-[#99ECFF] text-3xl transition-all duration-300" />
                </a>
                <TerminalButton label={t.nav.terminal} onClick={openTerminal} large />
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
      className="relative px-3 py-1 text-[#E6D6FF] hover:text-[#99ECFF] font-semibold transition whitespace-nowrap
      after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 hover:after:w-2/3 after:h-[2px] after:bg-[#99ECFF] after:rounded-full after:transition-all after:duration-300"
      href={href}
      onClick={onClick}
    >
      {text}
    </a>
  );
}

function ContactButton({text, onClick}) {
  return (
    <a
      href="#contact"
      onClick={onClick}
      className="relative px-3 py-1 text-[#EA8CFF] hover:text-[#99ECFF] font-semibold transition whitespace-nowrap
      after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 hover:after:w-2/3 after:h-[2px] after:bg-[#99ECFF] after:rounded-full after:transition-all after:duration-300"
    >
      {text}
    </a>
  )
}

function TerminalButton({label, onClick, large = false}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`text-[#E6D6FF] hover:text-[#99ECFF] transition-all duration-300 ${large ? "text-3xl" : "text-2xl"}`}
    >
      <FiTerminal />
    </button>
  );
}

// ES | EN switch, same colours as the rest of the navbar
function LangToggle() {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t.nav.language} className="flex items-center rounded-full border border-[#4c4270] bg-[#181325]/70 p-0.5 font-body text-xs font-bold">
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          lang={code}
          className={`px-2.5 py-1 rounded-full uppercase transition-colors duration-300 ${
            lang === code ? "bg-[#EA8CFF] text-[#1B1531]" : "text-[#E6D6FF] hover:text-[#99ECFF]"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
