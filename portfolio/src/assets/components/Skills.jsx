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
            <h2 className="font-title text-4xl md:text-5xl font-extrabold text-[#B5E7F7] mb-10 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {skillCategories.map((cat, idx) => (
                    <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#181325] border-l-4 border-[#B5E7F7] rounded-3xl p-6 h-full flex flex-col"
                        style={{boxShadow: "0 0 30px 0 rgba(140, 178, 255, 0.2), 0 2px 14px 0 #1B1531"}}
                    >
                        <h3 className="font-title text-2xl font-bold text-[#EA8CFF] mb-4">{cat.title}</h3>
                        <div 
                            className="grid grid-cols-3 sm:grid-cols-4 gap-5"
                            
                        >
                        {cat.skills.map((skill, si) => (
                            <div
                            key={skill.name}
                            className="group flex flex-col items-center gap-2 p-3 bg-[#282047] rounded-xl hover:bg-[#4c4270] transition-all duration-300 shadow hover:shadow-2xl cursor-pointer"
                            >
                                <span className="text-2xl text-[#E6D6FF] mb-1">
                                    {skill.icon}
                                </span>
                                <span className="text-[#B5E7F7] font-semibold text-xs">{skill.name}</span>
                            </div>
                        ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}