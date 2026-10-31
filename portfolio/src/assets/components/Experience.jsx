import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { useLang } from "../../i18n";

// Taken from the CV. Texts written as { en, es } follow the selected language
const work = [
    {
        role: { en: "Quantum Computing Research Intern", es: "Becario de investigación en computación cuántica" },
        org: "AIR Institute",
        place: { en: "Castilla y León, Spain · Remote", es: "Castilla y León, España · En remoto" },
        period: { en: "Jun 2025 – Oct 2025", es: "jun 2025 – oct 2025" },
        description: {
            en: "Research on quantum state preparation techniques, bridging theory and experimental implementation, and on applying quantum algorithms to computer graphics and simulation systems.",
            es: "Investigación sobre técnicas de preparación de estados cuánticos, uniendo teoría e implementación experimental, y sobre la aplicación de algoritmos cuánticos a gráficos por computador y sistemas de simulación.",
        },
        tags: { en: ["Quantum algorithms", "State preparation", "Research"], es: ["Algoritmos cuánticos", "Preparación de estados", "Investigación"] },
    },
    {
        role: { en: "Marketing & Design Assistant", es: "Asistente de marketing y diseño" },
        org: "La Jijonenca",
        place: { en: "Jijona, Spain", es: "Jijona, España" },
        period: { en: "Nov 2023 – Oct 2024", es: "nov 2023 – oct 2024" },
        description: {
            en: "Created digital and print visual assets and social media campaigns to drive brand engagement and keep the visual identity consistent.",
            es: "Creación de piezas visuales digitales e impresas y campañas en redes sociales para impulsar la marca y mantener su identidad visual.",
        },
        tags: { en: ["Illustrator", "Photoshop", "Branding"], es: ["Illustrator", "Photoshop", "Branding"] },
    },
    {
        role: { en: "Backend Developer Intern", es: "Becario de desarrollo backend" },
        org: "Geoffrey Emmans",
        place: { en: "Cologne, Germany", es: "Colonia, Alemania" },
        period: { en: "Jul 2023 – Sep 2023", es: "jul 2023 – sep 2023" },
        description: {
            en: "Designed and built a Go REST API to manage client databases and role-based organisations, with a permission system: full CRUD for superadmins and read-only access for clients.",
            es: "Diseño y desarrollo de una API REST en Go para gestionar bases de datos de clientes y organizaciones por roles, con un sistema de permisos: CRUD completo para superadministradores y solo lectura para clientes.",
        },
        tags: { en: ["Go", "REST API", "Access control"], es: ["Go", "API REST", "Control de acceso"] },
    },
];

const education = [
    {
        role: { en: "MSc in Quantum Computing", es: "Máster en Computación Cuántica" },
        org: "UNIR",
        place: { en: "La Rioja, Spain", es: "La Rioja, España" },
        period: { en: "2024 – 2025", es: "2024 – 2025" },
    },
    {
        role: {
            en: "AI-assisted Software Engineering for Quantum Computing and PQC",
            es: "Ingeniería de software asistida por IA para computación cuántica y PQC",
        },
        org: { en: "QuLearnLabs · Course", es: "QuLearnLabs · Curso" },
        period: { en: "2025", es: "2025" },
    },
    {
        role: { en: "BSc in Multimedia Engineering", es: "Grado en Ingeniería Multimedia" },
        org: { en: "University of Alicante", es: "Universidad de Alicante" },
        place: { en: "Alicante, Spain", es: "Alicante, España" },
        period: { en: "2018 – 2023", es: "2018 – 2023" },
    },
];

export default function Experience() {
    const { t } = useLang();
    return (
        <section className="w-full max-w-6xl mx-auto py-16 md:py-24 px-4" id="experience">
            <motion.div
                initial={{ opacity: 0, transform: "translateY(-60px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="flex flex-col items-center"
            >
                <h2 className="font-title text-3xl md:text-4xl font-extrabold text-[#B5E7F7] mb-2 text-center">
                    {t.experience.title}
                </h2>
                <div className="w-48 h-1 bg-gradient-to-r from-[#EA8CFF] to-[#B5E7F7] rounded-full mb-5"/>
            </motion.div>
            <motion.p
                initial={{ opacity: 0, transform: "translateY(-40px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="text-center text-[#f5f5fa] text-base mb-10"
            >
                {t.experience.subtitle}
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-10">
                <Timeline title={t.experience.work} icon={<FaBriefcase />} items={work} accent="#EA8CFF" />
                <Timeline title={t.experience.education} icon={<FaGraduationCap />} items={education} accent="#B5E7F7" />
            </div>
        </section>
    );
}

function Timeline({ title, icon, items, accent }) {
    const { pick } = useLang();
    return (
        <div>
            <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="flex items-center gap-3 font-title text-2xl font-bold mb-6"
                style={{ color: accent }}
            >
                <span className="text-xl" aria-hidden="true">{icon}</span>
                {title}
            </motion.h3>
            <ol className="relative border-l-2 border-[#4c4270] ml-2 space-y-6">
                {items.map((item, idx) => (
                    <motion.li
                        key={pick(item.role)}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: idx * 0.1, ease: 'easeOut' }}
                        className="relative pl-6 sm:pl-8"
                    >
                        <span
                            aria-hidden="true"
                            className="absolute -left-[9px] top-6 w-4 h-4 rounded-full border-2 border-[#1B1531]"
                            style={{ backgroundColor: accent, boxShadow: `0 0 12px ${accent}80` }}
                        />
                        <article
                            className="bg-[#181325] rounded-3xl border-2 p-5 sm:p-6"
                            style={{ borderColor: accent, boxShadow: "0 0 30px 0 rgba(234, 140, 255, 0.08), 0 2px 14px 0 #1B1531" }}
                        >
                            <p className="font-mono text-xs sm:text-sm text-[#99ECFF] mb-1">{pick(item.period)}</p>
                            <h4 className="font-title text-lg sm:text-xl font-bold text-[#B5E7F7] leading-snug">{pick(item.role)}</h4>
                            <p className="text-sm text-[#E6D6FF] mt-1">
                                <span className="font-semibold">{pick(item.org)}</span>
                                {item.place && <span className="text-[#6c93c7]"> · {pick(item.place)}</span>}
                            </p>
                            {item.description && (
                                <p className="text-sm text-[#f5f5fa]/90 mt-3 leading-relaxed">{pick(item.description)}</p>
                            )}
                            {item.tags && (
                                <ul className="flex flex-wrap gap-2 mt-4">
                                    {pick(item.tags).map((tag) => (
                                        <li key={tag} className="bg-[#4c4270] text-[#99ECFF] text-xs font-mono px-2 py-1 rounded-lg">{tag}</li>
                                    ))}
                                </ul>
                            )}
                        </article>
                    </motion.li>
                ))}
            </ol>
        </div>
    );
}
