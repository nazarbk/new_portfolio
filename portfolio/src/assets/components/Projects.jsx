import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Qonverse from "../files/Qonverse.webp";
import Quantum from "../files/Quantum_sqv.webp";
import Programmingdle from "../files/Programmingdle.webp";
import Quizmixdle from "../files/Quizmixdle.webp";
import Portfolio from "../files/Portfolio_v1.webp";
import BoomArtist from "../files/BoomArtists.webp";
import BB84 from "../files/BB84_protocol.webp";
import QuantumLab from "../files/Quantum_Lab.webp";
import CVAnalyzer from "../files/CV_Analyzer.webp";
import SushiLeague from "../files/Sushi_League.webp";
import Lockr from "../files/Lockr.webp";
import QStatePrep from "../files/q_state_prep.webp";
import { useLang } from "../../i18n";

// Tilt only where there is a real mouse: on phones it fights with scrolling
const canHover =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// Texts written as { en, es } follow the selected language
const projects = [
    {
        id: "cv-analyzer",
        title: { en: "CV Analyzer", es: "Analizador de CV" },
        image: CVAnalyzer,
        description: {
            en: "Analyzes a résumé entirely in the browser: ATS and AI filter checks, job-offer keyword matching, country conventions and an ATS-friendly template export. No server, no cookies.",
            es: "Analiza un currículum entero en el navegador: filtros ATS e IA, coincidencia con ofertas, convenciones por país y exportación a una plantilla apta para ATS. Sin servidor ni cookies.",
        },
        tech: ["JavaScript", "pdf.js", "pdf-lib", "Netlify"],
        github: "https://github.com/nazarbk/analizador_cv",
        demo: "https://cv-analizador.netlify.app/",
        isNew: true
    },
    {
        id: "sushi-league",
        title: "Sushi League",
        image: SushiLeague,
        description: {
            en: "Real-time sushi counter for all-you-can-eat nights with friends. Everyone counts from their own phone, with a live ranking and a \"how full are you?\" check at the end.",
            es: "Contador de sushi en tiempo real para buffets libres con amigos. Cada uno cuenta desde su móvil, con ranking en directo y la pregunta final de «¿cómo de lleno estás?».",
        },
        tech: ["JavaScript", "Firebase", "Netlify"],
        demo: "https://sushi-league.netlify.app/",
        isNew: true
    },
    {
        id: "lockr",
        title: "Lockr",
        image: Lockr,
        description: {
            en: "Encrypted password notebook for Android and iOS. PIN and biometric unlock, AES-256-GCM vault, a security center for weak, reused and leaked passwords, and encrypted backups.",
            es: "Bloc de contraseñas cifrado para Android e iOS. Desbloqueo con PIN y huella, bóveda AES-256-GCM, centro de seguridad para contraseñas débiles, repetidas o filtradas, y copias cifradas.",
        },
        tech: ["React Native", "Expo", "AES-256-GCM"],
        github: "https://github.com/nazarbk/bloc-claves",
        isNew: true
    },
    {
        id: "q-state-prep",
        title: "q-state-prep",
        image: QStatePrep,
        description: {
            en: "Quantum state preparation for 1D procedural noise distributions. Compares exact tree-based, pruned and variational (COBYLA) circuits in a Streamlit dashboard.",
            es: "Preparación de estados cuánticos para distribuciones de ruido procedural 1D. Compara circuitos exactos en árbol, podados y variacionales (COBYLA) en un panel de Streamlit.",
        },
        tech: ["Python", "Qiskit", "SciPy", "Streamlit"],
        github: "https://github.com/nazarbk/q-state-prep",
        isNew: true
    },
    {
        id: "quantum-lab",
        title: "Quantum Lab",
        image: QuantumLab,
        description: {
            en: "An interactive journey to understand the principles of the computing of the future. Discover superposition, entanglement, and cryptography through in-browser simulations.",
            es: "Un viaje interactivo para entender los principios de la computación del futuro. Descubre la superposición, el entrelazamiento y la criptografía con simulaciones en el navegador.",
        },
        tech: ["React", "Framer Motion", "KaTeX"],
        github: "https://github.com/nazarbk/bit-vs-qubit",
        demo: "https://bit-vs-qubit.vercel.app/"
    },
    {
        id: "bb84",
        title: "BB84 Protocol Simulator",
        image: BB84,
        description: {
            en: "Interactive Streamlit app simulating the BB84 quantum cryptography protocol, allowing users to visualize key distribution and detect potential eavesdropping.",
            es: "App interactiva en Streamlit que simula el protocolo de criptografía cuántica BB84 y permite visualizar la distribución de claves y detectar posibles espías.",
        },
        tech: ["Python", "Qiskit", "Streamlit"],
        github: "https://github.com/nazarbk/bb84_app",
        demo: "https://bb84-protocol.streamlit.app/"
    },
    {
        id: "qonverse",
        title: "Qonverse",
        image: Qonverse,
        description: {
            en: "AI-powered conversation simulator using Clerk + Firebase.",
            es: "Simulador de conversaciones con IA, con Clerk y Firebase.",
        },
        tech: ["React", "Firebase", "Clerk", "Vite", "Gemini"],
        github: "https://github.com/nazarbk/Qonverse",
        demo: "https://qonverse.vercel.app/"
    },
    {
        id: "single-qubit",
        title: "Quantum Single Qubit Visualizer",
        image: Quantum,
        description: {
            en: "An interactive app for visualizing the state of a single qubit. Apply quantum gates, view the state in Dirac notation, and explore its representation on the Bloch Sphere.",
            es: "App interactiva para visualizar el estado de un qubit. Aplica puertas cuánticas, mira el estado en notación de Dirac y explora su representación en la esfera de Bloch.",
        },
        tech: ["Python", "Qiskit", "Streamlit", "Plotly"],
        github: "https://github.com/nazarbk/quantum_single_qubit_visualizer",
        demo: "https://quantum-single-qubit-visualizer.streamlit.app/"
    },
    {
        id: "programmingdle",
        title: "Programmingdle",
        image: Programmingdle,
        description: {
            en: "A daily word game for programmers inspired by Wordle and Loldle. Players must guess the secret programming-related term, getting color-coded hints after each attempt.",
            es: "Juego diario de palabras para programadores inspirado en Wordle y Loldle. Hay que adivinar el término secreto de programación con pistas de colores tras cada intento.",
        },
        tech: ["React", "Firebase", "MongoDB", "JavaScript", "Node.js"],
        github: "https://github.com/nazarbk/programmingdle",
        demo: "https://programmingdle.firebaseapp.com/"
    },
    {
        id: "quizmixdle",
        title: "Quizmixdle",
        image: Quizmixdle,
        description: {
            en: "A daily quiz game inspired by Wordle and Loldle, where players guess famous animated characters.",
            es: "Juego diario inspirado en Wordle y Loldle en el que hay que adivinar personajes de animación famosos.",
        },
        tech: ["React", "Firebase", "MongoDB", "JavaScript", "Node.js"],
        github: "https://github.com/nazarbk/Quizmizdle",
        demo: "https://quizmixdle.web.app/"
    },
    {
        id: "portfolio-v1",
        title: "Portfolio (V.1)",
        image: Portfolio,
        description: {
            en: "My earlier developer portfolio site showcasing projects and a bit of personality.",
            es: "Mi anterior portfolio de desarrollador, con mis proyectos y un poco de mi personalidad.",
        },
        tech: ["Angular", "Firebase", "HTML & CSS", "TypeScript", "JavaScript"],
        github: "https://github.com/nazarbk/portfolio",
        demo: "https://nazarblancoweb.firebaseapp.com/"
    },
    {
        id: "boomartists",
        title: "BoomArtists",
        image: BoomArtist,
        description: {
            en: "A web app that visualizes the full lineup for the Boombastic music festival. Features include artist profiles, daily schedules, and their top songs, providing festival-goers with a dynamic, interactive experience.",
            es: "Web app que muestra el cartel completo del festival Boombastic: perfiles de artistas, horarios por día y sus canciones más escuchadas, para una experiencia dinámica e interactiva.",
        },
        tech: ["Angular", "Firebase", "HTML & CSS", "TypeScript", "JavaScript"],
        github: "https://github.com/jmg200UA/BoomArtists",
        demo: "https://malnini.web.app/home"
    },
];

export default function Projects() {
    const { t, pick } = useLang();
    return (
        <section className="w-full max-w-6xl mx-auto py-16 md:py-24 px-4" id="projects">
            <motion.div
                initial={{ opacity: 0, transform: "translateY(-60px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="flex flex-col items-center"
            >
                <h2
                    className="font-title text-3xl md:text-4xl font-extrabold text-[#B5E7F7] mb-2 text-center"
                >
                    {t.projects.title}
                </h2>
                <div className="w-40 h-1 bg-gradient-to-r from-[#EA8CFF] to-[#B5E7F7] rounded-full mb-5"/>
            </motion.div>
            <motion.p
                initial={{ opacity: 0, transform: "translateY(-40px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="text-center text-[#f5f5fa] text-sm md:text-base mb-10"
            >
                {t.projects.subtitle}
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {projects.map((proj, idx) => {
                    const title = pick(proj.title);
                    return (
                    <Tilt
                        key={proj.id}
                        tiltEnable={canHover}
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={canHover ? 1.02 : 1}
                        transitionSpeed={1500}
                        gyroscope={false}
                        className="h-full"
                    >
                        <motion.div
                            initial={{opacity: 0, y: 60}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{ duration: 1.2, delay: (idx % 3) * 0.12, ease: "easeOut" }}
                            viewport={{once: true}}
                            className="group relative rounded-3xl bg-[#181325] shadow-xl border-2 border-[#EA8CFF] overflow-hidden flex flex-col h-full"
                            style={{boxShadow: "0 0 30px 0 rgba(234, 140, 255, 0.1), 0 2px 14px 0 rgb(27, 21, 49)"}}
                        >
                            {proj.isNew && (
                            <span className="absolute top-3 left-3 bg-[#EA8CFF] text-[#1B1531] px-3 py-1 text-xs font-bold rounded-full shadow-md z-10 motion-safe:animate-bounce">
                                {t.projects.isNew}
                            </span>
                            )}
                            <div className="h-48 sm:h-52 w-full overflow-hidden bg-[#282047] flex items-center justify-center">
                                <img
                                    src={proj.image}
                                    alt={`${title} ${t.projects.preview}`}
                                    width="960"
                                    height="442"
                                    loading={idx < 3 ? "eager" : "lazy"}
                                    decoding="async"
                                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5 flex flex-col gap-2 flex-1">
                                <h3 className="font-title text-2xl text-[#B5E7F7] font-bold">{title}</h3>
                                <p className="text-[#E6D6FF] text-sm mb-2">{pick(proj.description)}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {proj.tech.map(tech => (
                                        <span key={tech} className="bg-[#4c4270] text-[#99ECFF] text-xs font-mono px-2 py-1 rounded-lg">{tech}</span>
                                    ))}
                                </div>
                                <div className="flex gap-5 mt-auto">
                                    {proj.github && (
                                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-[#EA8CFF] hover:text-[#99ECFF] text-xl transition-all duration-300 p-1 -m-1" title={t.projects.viewCode} aria-label={`${title}: ${t.projects.codeLabel}`}>
                                            <FaGithub />
                                        </a>
                                    )}
                                    {proj.demo && (
                                        <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="text-[#99ECFF] hover:text-[#EA8CFF] text-xl transition-all duration-300 p-1 -m-1" title={t.projects.viewDemo} aria-label={`${title}: ${t.projects.demoLabel}`}>
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </Tilt>
                    );
                })}
            </div>
        </section>
    )
}
