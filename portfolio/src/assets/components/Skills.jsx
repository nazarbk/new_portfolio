import { FaReact, FaUnity, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaGithub } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiAdobephotoshop, SiKrita, SiMongodb, SiStreamlit, SiQiskit, SiAdobeillustrator } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiCplusplus, SiC, SiVite, SiAngular, SiIonic, SiJavascript } from "react-icons/si";
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Frontend",
        color: "from-[#EA8CFF] to-[#B5E7F7]",
        skills: [
            {name: "React", icon: <FaReact size={38}/>},
            {name: "Angular", icon: <SiAngular size={38}/>},
            {name: "Ionic", icon: <SiIonic size={38}/>},
            {name: "Vite", icon: <SiVite size={38}/>},
            {name: "HTML5", icon: <FaHtml5 size={38}/>},
            {name: "CSS3", icon: <FaCss3Alt size={38}/>},
            {name: "JavaScript", icon: <SiJavascript size={38}/>}
        ]
    },
    {
        title: "Backend",
        color: "from-[#99ECFF] to-[#EA8CFF]",
        skills: [
            {name: "Node.js", icon: <FaNodeJs size={38}/>},
            {name: "Express", icon: <SiExpress size={38}/>},
            {name: "MongoDB", icon: <SiMongodb size={38}/>},
            {name: "Firebase", icon: <IoLogoFirebase size={38}/>},
            {name: "Golang", icon: <FaGolang size={38}/>},
            {name: "Streamlit", icon: <SiStreamlit size={38}/>}
        ]
    },
    {
        title: "Languages",
        color: "from-[#B5E7F7] to-[#99ECFF]",
        skills: [
            {name: "Python", icon: <FaPython size={38}/>},
            {name: "C", icon: <SiC size={38}/>},
            {name: "C++", icon: <SiCplusplus size={38}/>},
            //{name: "C#", icon: <SiDotnet size={38}/>},
            {name: "Java", icon: <FaJava size={38}/>}
        ]
    },
    {
        title: "Tools",
        color: "from-[#4c4270] to-[#EA8CFF]",
        skills: [
            {name: "Github", icon: <FaGithub size={38}/>},
            {name: "VS Code", icon: <VscVscode size={38}/>},
            {name: "Unity", icon: <FaUnity size={38}/>},
            {name: "Qiskit", icon: <SiQiskit size={38}/>},
            {name: " Illustrator", icon: <SiAdobeillustrator size={38}/>},
            {name: "Krita", icon: <SiKrita size={38}/>},
            {name: "Photoshop", icon: <SiAdobephotoshop size={38}/>}
        ]
    },
];

export default function Skills() {
    return (
        <section className="w-full max-w-6xl mx-auto py-24 px-4" id="skills">
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
                    My Skillsets
                </h2>
                <div className="w-52 h-1 bg-gradient-to-r from-[#EA8CFF] to-[#B5E7F7] rounded-full mb-5"/>
            </motion.div>
            <motion.p
                initial={{ opacity: 0, transform: "translateY(-40px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="text-center text-[#f5f5fa] text-base md:text-base mb-10"
            >
                A collection of my technical skills and the tools I use daily to develop my projects.
            </motion.p>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
                initial={{ opacity: 0, transform: "translateX(-60px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                {skillCategories.map((cat) => (
                    <div
                        className="bg-[#181325] border-2 border-[#B5E7F7] rounded-3xl p-6 h-full flex flex-col"
                        style={{boxShadow: "0 0 30px 0 rgba(140, 178, 255, 0.1), 0 2px 14px 0 #1B1531"}}
                    >
                        <h3 
                            className="font-title text-2xl text-center font-bold text-[#EA8CFF] mb-4"
                        >
                            {cat.title}
                        </h3>
                        <motion.div 
                            className="grid grid-cols-2 sm:grid-cols-4 gap-5"
                            initial={{ opacity: 0, transform: "translateY(-60px)" }}
                            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                        {cat.skills.map((skill) => (
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                key={skill.name}
                                className="group flex flex-col items-center gap-2 p-3 bg-[#282047] rounded-xl hover:bg-[#4c4270] shadow hover:shadow-2xl cursor-pointer"
                            >
                                <span className="text-2xl text-[#E6D6FF] mb-1">
                                    {skill.icon}
                                </span>
                                <span className="text-[#B5E7F7] font-semibold text-xs">{skill.name}</span>
                            </motion.div>
                        ))}
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}