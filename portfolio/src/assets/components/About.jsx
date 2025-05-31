import {motion} from 'framer-motion';
import MyAvatarSVG from '../files/About_draw.svg';

export default function About() {
    return (
        <section
            id='about'
            className='w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 py-24 max-w-7xl mx-auto'
        >
            <motion.div 
                className='flex-1 flex items-center justify-center md:justify-start h-full'
                initial={{ opacity: 0, transform: "translateX(-60px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <div className='w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#4c4270] border-4 border-[#EA8CFF] shadow-xl flex items-center justify-center overflow-hidden'>
                    <img src={MyAvatarSVG} alt="Nazar Blanco" className="w-full h-full object-cover" />
                </div>
            </motion.div>
            <motion.div 
                className='flex-1 flex flex-col justify-center md:items-start items-center text-center md:text-left'
                initial={{ opacity: 0, transform: "translateX(60px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            > 
                <motion.h2 
                    className='font-title text-4xl md:text-5xl font-extrabold text-[#B5E7F7] mb-6'
                    initial={{ opacity: 0, transform: "translateY(-40px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                > 
                    About Me
                </motion.h2>
                <div className='relative w-full max-w-2xl'>
                    <div className='absolute left-4 top-6 bottom-6 flex flex-col text-[#5f7e97] text-xs select-none items-start min-w-[1.5em] z-10'
                        style={{lineHeight: '1.5', fontFamily:'monospace', fontSize: '16px'}}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(i => (
                            <span key={i}>{i}</span>
                        ))}
                    </div>
                    <div
                        className='bg-[#181325] rounded-3xl border-l-4 border-[#EA8CFF] px-8 py-6 w-full font-mono text-[#B5E7F7] text-base pl-12'
                        style={{boxShadow: "0 0 30px 0 #EA8CFF33, 0 2px 14px 0 #1B1531"}}
                    >
                        <span className='text-[#6c93c7]'>{`<AboutMe>`}</span>
                        <br />
                        <br />
                        Hi! I'm Nazar, a multimedia engineer passionate about <br /> 
                        programming, art and technologies.
                        <br /><br />
                        Currently specializing in quantum computing to fuse my <br /> 
                        development skills with future tech.
                        <br /><br />
                        I also enjoy teamwork, idea-sharing and learning things <br />
                        everyday. I love building creative web experiences.
                        <br /><br />
                        Adaptable, proactive and always up for a challenge. I <br />
                        am seeking opportunities to grow and contribute in the <br />
                        technology sector.
                        <br /><br />
                         <span className='text-[#6c93c7]'>{`</AboutMe>`}</span>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}