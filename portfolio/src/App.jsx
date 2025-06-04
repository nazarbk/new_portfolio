import Navbar from "./assets/components/Navbar";
import HomeSection from "./assets/components/HomeSection";
import About from './assets/components/About';
import './App.css';
import Skills from "./assets/components/Skills";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import Terminal from "./assets/components/Terminal";
import CursorHalo from "./assets/components/CursorHalo";
import { useState } from "react";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_#282047_0%,_#1B1531_80%,_#21152b_100%)] min-h-screen font-body">
      <CursorHalo />
      {!unlocked ? (
        <div className="relative z-20 flex items-center justify-center min-h-screen">
          <Terminal onSuccess={() => setUnlocked(true)} />
        </div>
      ) : (
        <>
          <Navbar />
          <main>
            <HomeSection />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}
