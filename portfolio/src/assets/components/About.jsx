import {motion} from 'framer-motion';
import MyAvatarSVG from '../files/About_draw.svg';
import { useLang } from '../../i18n';

export default function About() {
    const { t } = useLang();
    return (
        <section
            id='about'
            className='w-full max-w-6xl mx-auto py-16 md:py-24 px-4'
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
                    {t.about.title}
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
                {t.about.subtitle}
            </motion.p>
            <div className='w-full md:min-h-[60vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-7xl mx-auto'>
                <motion.div
                    className='flex-1 flex items-center justify-center md:justify-start h-full'
                    initial={{ opacity: 0, transform: "translateX(-60px)" }}
                    whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                    <div className='w-64 h-64 min-[400px]:w-72 min-[400px]:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-[#4c4270] border-4 border-[#EA8CFF] shadow-xl flex items-center justify-center overflow-hidden shrink-0'>
                        <img src={MyAvatarSVG} alt={t.home.avatarAlt} width="384" height="384" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    </div>
                </motion.div>
                <div className='flex-1 w-full flex flex-col justify-center items-start text-left'>
                    <motion.div
                        initial={{ opacity: 0, transform: "translateX(60px)" }}
                        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className='relative w-full max-w-2xl'
                    >
                        <div
                            className='bg-[#181325] rounded-3xl border-2 border-[#EA8CFF] px-5 py-5 sm:px-8 sm:py-6 w-full font-mono text-[#B5E7F7] text-sm sm:text-base'
                            style={{boxShadow: "0 0 30px 0 rgba(234, 140, 255, 0.1), 0 2px 14px 0 #1B1531"}}
                        >
                            <span className='text-[#6c93c7]'>{`<AboutMe>`}</span>
                            {t.about.paragraphs.map((paragraph) => (
                                <p key={paragraph} className='mt-6'>{paragraph}</p>
                            ))}
                            <span className='block mt-6 text-[#6c93c7]'>{`</AboutMe>`}</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
