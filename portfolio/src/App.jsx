import Navbar from "./assets/components/Navbar";
import HomeSection from "./assets/components/HomeSection";
import About from './assets/components/About';
import './App.css';
import Skills from "./assets/components/Skills";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";

export default function App() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_#282047_0%,_#1B1531_80%,_#21152b_100%)] min-h-screen pt-20 font-body">
      <Navbar />
      <main>
        <HomeSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
