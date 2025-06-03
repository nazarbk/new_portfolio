import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Qonverse from "../files/Qonverse.png";
import Quantum from "../files/Quantum_sqv.png";
import Programmingdle from "../files/Programmingdle.png";
import Quizmixdle from "../files/Quizmixdle.png";
import Portfolio from "../files/Portfolio_v1.png";
import BoomArtist from "../files/BoomArtists.png";


const projects = [
    {
        title: "Qonverse",
        image: Qonverse,
        description: "AI-powered conversation simulator using Clerk + Firebase.",
        tech: ["React", "Firebase", "Clerk", "Vite", "Gemini"],
        github: "https://github.com/nazarbk/Qonverse",
        demo: "https://qonverse.vercel.app/",
        isNew: true
    },
    {
        title: "Quantum Single Qubit Visualizer",
        image: Quantum,
        description: "An interactive app for visualizing the state of a single qubit. Apply quantum gates, view the state in Dirac notation, and explore its representation on the Bloch Sphere.",
        tech: ["Python", "Qiskit", "Streamlit", "Plotly"],
        github: "https://github.com/nazarbk/quantum_single_qubit_visualizer",
        demo: "https://quantum-single-qubit-visualizer.streamlit.app/",
        isNew: true
    },
    {
        title: "Programmingdle",
        image: Programmingdle,
        description: "A daily word game for programmers inspider by Wordle and Loldle. Players must guess the secret programming-related term, getting color-coded hints after each attempt.",
        tech: ["React", "Firebase", "MongoDB", "JavaScript", "Node.js"],
        github: "https://github.com/nazarbk/programmingdle",
        demo: "https://programmingdle.firebaseapp.com/"
    },
    {
        title: "Quizmixdle",
        image: Quizmixdle,
        description: "A daily quiz game inspired by Wordle and Loldle, where players guess famous animated characters. ",
        tech: ["React", "Firebase", "MongoDB", "JavaScript", "Node.js"],
        github: "https://github.com/nazarbk/Quizmizdle",
        demo: "https://quizmixdle.web.app/"
    },
    {
        title: "Portfolio (V.1)",
        image: Portfolio,
        description: "My earlier developer portfolio site showcasing projects and a bit of personality.",
        tech: ["Angular", "Firebase", "HTML & CSS", "TypeScript", "JavaScript"],
        github: "https://github.com/nazarbk/portfolio",
        demo: "https://nazarblancoweb.firebaseapp.com/"
    },
    {
        title: "BoomArtists",
        image: BoomArtist,
        description: "A web app that visualizes the full lineup for the Boombastic music festival. Features includes artist profiles, daily schedules, and their top songs, providing festival-goers with a dynamic, interactive experience.",
        tech: ["Angular", "Firebase", "HTML & CSS", "TypeScript", "JavaScript"],
        github: "https://github.com/jmg200UA/BoomArtists",
        demo: "https://malnini.web.app/home"
    },
];

export default function Projects() {
    return ( 
        <section className="w-full max-w-6xl mx-auto py-24 px-4" id="projects">
            <h2 className="font-title text-4xl md:text-5xl font-extrabold text-[#B5E7F7] mb-10 text-center">
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((proj, idx) => (
                    <Tilt
                        key={proj.title}
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.02}
                        transitionSpeed={1500}
                        gyroscope={true}
                    >
                        <motion.div
                            initial={{opacity: 0, y: 60}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{ duration: 1, delay: idx * 0.12, ease: "easeOut" }}
                            viewport={{once: true}}
                            className="group relative rounded-3xl bg-[#181325] shadow-xl border-l-4 border-[#EA8CFF] overflow-hidden flex flex-col h-full"
                            style={{boxShadow: "0 0 30px 0 rgba(234, 140, 255, 0.1), 0 2px 14px 0 rgb(27, 21, 49)"}}
                        >
                            {proj.isNew && (
                            <span className="absolute top-3 left-3 bg-[#EA8CFF] text-[#1B1531] px-3 py-1 text-xs font-bold rounded-full shadow-md z-10 animate-bounce">
                                New!
                            </span>
                            )}
                            <div className="h-52 w-full overflow-hidden bg-[#282047] flex items-center justify-center">
                                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"/>
                            </div>
                            <div className="p-5 flex flex-col gap-2 h-full">
                                <h3 className="font-title text-2xl text-[#B5E7F7] font-bold">{proj.title} </h3>
                                <p className="text-[#E6D6FF] text-sm mb-2">{proj.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {proj.tech.map(t => (
                                        <span key={t} className="bg-[#4c4270] text-[#99ECFF] text-xs font-mono px-2 py-1 rounded-lg">{t}</span>
                                    ))}
                                </div>
                                <div className="flex gap-5 mt-auto">
                                    {proj.github && (
                                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-[#EA8CFF] hover:text-[#99ECFF] text-xl transition-all duration-300" title="View on Github" >
                                            <FaGithub />
                                        </a>
                                    )}
                                    {proj.demo && (
                                        <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="text-[#99ECFF] hover:text-[#EA8CFF] text-xl transition-all duration-300" title="Live Demo" >
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </Tilt>
                ))}
            </div>
        </section>
    )
}