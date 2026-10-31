import Navbar from "./assets/components/Navbar";
import HomeSection from "./assets/components/HomeSection";
import About from './assets/components/About';
import Experience from "./assets/components/Experience";
import Skills from "./assets/components/Skills";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import Terminal from "./assets/components/Terminal";
import CursorHalo from "./assets/components/CursorHalo";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

// The terminal is an easter egg: the portfolio is visible straight away and the terminal opens
// from the >_ button in the navbar or by pressing ` anywhere outside a text field
function isTyping(target) {
  return target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));
}

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  const openTerminal = useCallback(() => setTerminalOpen(true), []);
  const closeTerminal = useCallback(() => setTerminalOpen(false), []);
  // "npm run dev" finishes its boot sequence, closes the terminal and goes back to the top
  const runPortfolio = useCallback(() => {
    setTerminalOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "`" && !e.ctrlKey && !e.metaKey && !e.altKey && !isTyping(e.target)) {
        e.preventDefault();
        setTerminalOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // While the terminal is open: lock page scroll and close it with Escape
  useEffect(() => {
    if (!terminalOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setTerminalOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [terminalOpen]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-[radial-gradient(ellipse_at_top,_#282047_0%,_#1B1531_80%,_#21152b_100%)] min-h-screen min-h-[100dvh] font-body">
        <CursorHalo />
        <Navbar onOpenTerminal={openTerminal} />
        <main>
          <HomeSection />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer onOpenTerminal={openTerminal} />

        <AnimatePresence>
          {terminalOpen && (
            <motion.div
              key="terminal"
              role="dialog"
              aria-modal="true"
              aria-label="Terminal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8 bg-[rgba(16,12,30,0.75)] backdrop-blur-sm"
              onMouseDown={(e) => e.target === e.currentTarget && closeTerminal()}
            >
              <Terminal onSuccess={runPortfolio} onClose={closeTerminal} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
