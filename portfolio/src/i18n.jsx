/* eslint-disable react-refresh/only-export-components -- context module: provider, hook and language list live together */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "portfolio-lang";
export const LANGS = ["en", "es"];

// Every visible text of the portfolio, in English and Spanish
const translations = {
    en: {
        meta: {
            title: "Nazar Blanco | Multimedia Engineer, Fullstack Developer & Quantum Engineer",
        },
        nav: {
            about: "About",
            experience: "Experience",
            skills: "Tech Stack",
            projects: "Projects",
            contact: "Contact",
            openMenu: "Open menu",
            closeMenu: "Close menu",
            terminal: "Open the hidden terminal",
            language: "Language",
        },
        home: {
            greeting: "Hi, I'm",
            roles: ["Multimedia Engineer", "Frontend Developer", "Backend Developer", "Quantum Engineer"],
            rolesLabel: "Multimedia Engineer, Fullstack Developer and Quantum Engineer",
            intro: "Passionate about bringing together art, code and science to build impactful digital experiences. Let's push the boundaries of creativity and technology!",
            downloadCv: "Download CV",
            avatarAlt: "Illustration of Nazar Blanco",
        },
        about: {
            title: "About Me",
            subtitle: "A brief introduction to who I am, my passions, and what drives me in the world of technology and creativity.",
            paragraphs: [
                "Hi! I'm Nazar, a multimedia engineer passionate about programming, art and technologies.",
                "With a Master's in Quantum Computing, I fuse my development skills with future tech.",
                "I also enjoy teamwork, idea-sharing and learning things every day. I love building creative web and mobile experiences.",
                "Adaptable, proactive and always up for a challenge. I am seeking opportunities to grow, learn and contribute in the technology sector.",
            ],
        },
        experience: {
            title: "Experience",
            subtitle: "My professional path and education so far.",
            work: "Work",
            education: "Education",
        },
        skills: {
            title: "My Skillsets",
            subtitle: "A collection of my technical skills and the tools I use daily to develop my projects.",
            categories: { frontend: "Frontend", backend: "Backend", languages: "Languages", tools: "Tools" },
        },
        projects: {
            title: "Projects",
            subtitle: "Some of my recent projects that showcase what I have built and learned, in which I try to improve and develop new skills.",
            isNew: "New!",
            preview: "preview",
            viewCode: "View on GitHub",
            codeLabel: "source code on GitHub",
            viewDemo: "Live Demo",
            demoLabel: "live demo",
        },
        contact: {
            title: "Contact",
            subtitle: "Interested in collaborating or just want to say hi? Feel free to send me a message!",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send Message",
            sending: "Sending...",
            sent: "Message Sent!",
            thanks: "Thank you for your message! I'll get back to you soon.",
            error: "Ooops! There was a problem sending your message. Please try again or reach me on LinkedIn.",
        },
        footer: {
            built: "Built with React & Tailwind CSS · Designed by Nazar Blanco",
            hint: "Psst… press ` or tap >_ to open the hidden terminal.",
        },
        terminal: {
            close: "Close terminal",
            label: "Terminal command",
            intro: "To run the portfolio execute:",
            clickToRun: "Click to run",
            tip: "Type",
            tipEnd: "to see a list of available commands.",
            help: [
                ["npm run dev", "Start the portfolio"],
                ["help", "Show this help"],
                ["about", "Who is Nazar Blanco"],
                ["cv", "View my resume"],
                ["contact", "My contact information"],
                ["clear", "Clear the terminal"],
                ["exit", "Close the terminal"],
            ],
            helpTitle: "Available commands:",
            about: "I'm Nazar Blanco, a multimedia engineer and web developer passionate about creativity and interactivity, with a Master's in Quantum Computing.",
            cv: "View my resume:",
            cvLink: "Download CV",
            contact: "You can contact me at:",
            sequence: ["Running portfolio...", "Compiling...", "Optimizing...", "All systems operational!"],
        },
    },
    es: {
        meta: {
            title: "Nazar Blanco | Ingeniero Multimedia, Desarrollador Fullstack y Quantum Engineer",
        },
        nav: {
            about: "Sobre mí",
            experience: "Experiencia",
            skills: "Tecnologías",
            projects: "Proyectos",
            contact: "Contacto",
            openMenu: "Abrir menú",
            closeMenu: "Cerrar menú",
            terminal: "Abrir el terminal oculto",
            language: "Idioma",
        },
        home: {
            greeting: "Hola, soy",
            roles: ["Ingeniero Multimedia", "Desarrollador Frontend", "Desarrollador Backend", "Quantum Engineer"],
            rolesLabel: "Ingeniero Multimedia, Desarrollador Fullstack y Quantum Engineer",
            intro: "Me apasiona unir arte, código y ciencia para crear experiencias digitales con impacto. ¡Llevemos más allá los límites de la creatividad y la tecnología!",
            downloadCv: "Descargar CV",
            avatarAlt: "Ilustración de Nazar Blanco",
        },
        about: {
            title: "Sobre mí",
            subtitle: "Una breve presentación de quién soy, qué me apasiona y qué me impulsa en el mundo de la tecnología y la creatividad.",
            paragraphs: [
                "¡Hola! Soy Nazar, ingeniero multimedia apasionado por la programación, el arte y la tecnología.",
                "Con un máster en Computación Cuántica, uno mis habilidades de desarrollo con la tecnología del futuro.",
                "También disfruto del trabajo en equipo, de compartir ideas y de aprender algo nuevo cada día. Me encanta crear experiencias web y móviles creativas.",
                "Adaptable, proactivo y siempre dispuesto a afrontar un reto. Busco oportunidades para crecer, aprender y aportar en el sector tecnológico.",
            ],
        },
        experience: {
            title: "Experiencia",
            subtitle: "Mi trayectoria profesional y académica hasta ahora.",
            work: "Experiencia laboral",
            education: "Formación",
        },
        skills: {
            title: "Mis habilidades",
            subtitle: "Las tecnologías y herramientas que uso a diario para desarrollar mis proyectos.",
            categories: { frontend: "Frontend", backend: "Backend", languages: "Lenguajes", tools: "Herramientas" },
        },
        projects: {
            title: "Proyectos",
            subtitle: "Algunos de mis proyectos recientes: lo que he construido y aprendido mientras sigo mejorando y desarrollando nuevas habilidades.",
            isNew: "¡Nuevo!",
            preview: "vista previa",
            viewCode: "Ver en GitHub",
            codeLabel: "código en GitHub",
            viewDemo: "Ver demo",
            demoLabel: "demo",
        },
        contact: {
            title: "Contacto",
            subtitle: "¿Te interesa colaborar o solo quieres saludar? ¡Escríbeme!",
            name: "Nombre",
            email: "Email",
            message: "Mensaje",
            send: "Enviar mensaje",
            sending: "Enviando...",
            sent: "¡Mensaje enviado!",
            thanks: "¡Gracias por tu mensaje! Te responderé lo antes posible.",
            error: "¡Vaya! No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbeme por LinkedIn.",
        },
        footer: {
            built: "Hecho con React y Tailwind CSS · Diseñado por Nazar Blanco",
            hint: "Psst… pulsa ` o toca >_ para abrir el terminal oculto.",
        },
        terminal: {
            close: "Cerrar el terminal",
            label: "Comando del terminal",
            intro: "Para arrancar el portfolio ejecuta:",
            clickToRun: "Pulsa para ejecutarlo",
            tip: "Escribe",
            tipEnd: "para ver los comandos disponibles.",
            help: [
                ["npm run dev", "Arrancar el portfolio"],
                ["help", "Mostrar esta ayuda"],
                ["about", "Quién es Nazar Blanco"],
                ["cv", "Ver mi currículum"],
                ["contact", "Mis datos de contacto"],
                ["clear", "Limpiar el terminal"],
                ["exit", "Cerrar el terminal"],
            ],
            helpTitle: "Comandos disponibles:",
            about: "Soy Nazar Blanco, ingeniero multimedia y desarrollador web apasionado por la creatividad y la interactividad, con un máster en Computación Cuántica.",
            cv: "Ver mi currículum:",
            cvLink: "Descargar CV",
            contact: "Puedes escribirme a:",
            sequence: ["Arrancando el portfolio...", "Compilando...", "Optimizando...", "¡Todo listo!"],
        },
    },
};

function initialLang() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (LANGS.includes(saved)) return saved;
    } catch {
        // Storage blocked (private mode): fall back to the browser language
    }
    const browser = (typeof navigator !== "undefined" && navigator.language) || "en";
    return browser.toLowerCase().startsWith("es") ? "es" : "en";
}

const LangContext = createContext(null);

export function LangProvider({ children }) {
    const [lang, setLangState] = useState(initialLang);

    useEffect(() => {
        document.documentElement.lang = lang;
        document.title = translations[lang].meta.title;
    }, [lang]);

    const value = useMemo(() => {
        const setLang = (next) => {
            if (!LANGS.includes(next)) return;
            try {
                localStorage.setItem(STORAGE_KEY, next);
            } catch {
                // Not saved: the choice still applies to this visit
            }
            setLangState(next);
        };
        // Picks the right language from data written as { en: "...", es: "..." }
        const pick = (text) => (text && typeof text === "object" && !Array.isArray(text) ? text[lang] ?? text.en : text);
        return { lang, setLang, t: translations[lang], pick };
    }, [lang]);

    return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
    const ctx = useContext(LangContext);
    if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
    return ctx;
}
