import {motion} from 'framer-motion';
import MyAvatarSVG from '../files/About_draw.svg';

export default function About() {
    return (
        <section
            id='about'
            className='w-full max-w-6xl mx-auto py-24 px-4'
        >
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
                    About Me
                </h2>
                <div className="w-44 h-1 bg-gradient-to-r from-[#EA8CFF] to-[#B5E7F7] rounded-full mb-5"/>
            </motion.div>
            <motion.p
                initial={{ opacity: 0, transform: "translateY(-40px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="text-center text-[#f5f5fa] text-base md:text-base mb-10"
            >
                A brief introduction to who I am, my passions, and what drives me in the world of technology and creativity.
            </motion.p>
            <div className='w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-7xl mx-auto'>
                <motion.div 
                    className='flex-1 flex items-center justify-center md:justify-start h-full'
                    initial={{ opacity: 0, transform: "translateX(-60px)" }}
                    whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                    <div className='w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#4c4270] border-4 border-[#EA8CFF] shadow-xl flex items-center justify-center overflow-hidden'>
                        <img src={MyAvatarSVG} alt="Nazar Blanco" className="w-full h-full object-cover" />
                    </div>
                </motion.div>
                <motion.div 
                    className='flex-1 flex flex-col justify-center md:items-start items-start text-left'
                > 
                    <motion.div 
                        initial={{ opacity: 0, transform: "translateX(60px)" }}
                        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className='relative w-full max-w-2xl'
                    >
                        <div
                            className='bg-[#181325] rounded-3xl border-l-4 border-[#EA8CFF] px-8 py-6 w-full font-mono text-[#B5E7F7] text-base'
                            style={{boxShadow: "0 0 30px 0 rgba(234, 140, 255, 0.1), 0 2px 14px 0 #1B1531"}}
                        >
                            <span className='text-[#6c93c7]'>{`<AboutMe>`}</span>
                            <br />
                            <br />
                            Hi! I'm Nazar, a multimedia engineer passionate about
                            programming, art and technologies.
                            <br /><br />
                            Currently specializing in quantum computing to fuse my
                            development skills with future tech.
                            <br /><br />
                            I also enjoy teamwork, idea-sharing and learning things
                            everyday. I love building creative web experiences.
                            <br /><br />
                            Adaptable, proactive and always up for a challenge. I
                            am seeking opportunities to grow, learn and contribute in the
                            technology sector.
                            <br /><br />
                            <span className='text-[#6c93c7]'>{`</AboutMe>`}</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}