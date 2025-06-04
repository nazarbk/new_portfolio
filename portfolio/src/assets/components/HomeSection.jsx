import {Typewriter} from 'react-simple-typewriter';
import {motion} from 'framer-motion';
import MyAvatarSVG from '../files/Home_draw.svg';

export default function HomeSection() {
    return (
        <section
            id='home'
            className='w-full max-w-6xl mx-auto pt-44 pb-24 px-4'
        >
            <div className='w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-7xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, transform: "translateX(-60px)" }}
                    whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className='flex-1 flex flex-col justify-center items-start'
                >
                    <h2 className='font-body text-lg text-[#E6D6FF] mb-2'>Hi, I'm</h2>
                    <motion.h1 
                        initial={{ opacity: 0, transform: "translateY(-40px)" }}
                        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className='font-title text-5xl tracking-widest md:text-6xl font-extrabold text-[#B5E7F7] mb-4 drop-shadow-lg'
                    >
                        NAZAR BLANCO
                    </motion.h1>
                    <h3 className='font-title text-2xl md:text-4xl text-[#EA8CFF] font-semibold mb-4 min-h-[38px]'>
                        <Typewriter 
                            words={[
                                "Multimedia Engineer",
                                "Frontend Developer",
                                "Backend Developer",
                                "Quantum Computing Student"
                            ]}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={55}
                            deleteSpeed={30}
                            delaySpeed={1500}
                        />
                    </h3>
                    <p className="text-[#f5f5fa] mb-8 max-w-lg">
                        Passionate about bringing together art, code and science to build impactful digital experiences. Let's push the boundaries of creativity and technology!
                    </p>
                    <a 
                        href="/NazarBlancoCV.pdf"
                        download
                        className='inline-block px-7 py-3 rounded-2xl border-2 border-[#EA8CFF] bg-[#EA8CFF] text-[#1B1531] font-title font-bold text-lg shadow-none hover:bg-[#B5E7F7] hover:border-[#B5E7F7] hover:text-[#1B1531] transition-all duration-300'
                    >
                        Download CV
                    </a>        
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, transform: "translateY(60px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className='flex-1 flex items-center md:justify-end justify-center h-full'
                >
                    <div className='w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#4c4270] border-4 border-[#B5E7F7] shadow-2xl flex items-center justify-center overflow-hidden'>
                        <img src={MyAvatarSVG} alt="Nazar Blanco" className="w-full h-full object-cover" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}