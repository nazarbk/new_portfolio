import {Typewriter} from 'react-simple-typewriter';
import {motion} from 'framer-motion';
import MyAvatarSVG from '../files/Home_draw.svg';
import { useLang } from '../../i18n';

export default function HomeSection() {
    const { lang, t } = useLang();
    return (
        <section
            id='home'
            className='w-full max-w-6xl mx-auto pt-28 sm:pt-36 md:pt-44 pb-16 md:pb-24 px-4'
        >
            <div className='w-full md:min-h-[60vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-7xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, transform: "translateX(-60px)" }}
                    whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className='flex-1 flex flex-col justify-center items-start'
                >
                    <h2 className='font-body text-lg text-[#E6D6FF] mb-2'>{t.home.greeting}</h2>
                    <motion.h1
                        initial={{ opacity: 0, transform: "translateY(-40px)" }}
                        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className='font-title text-4xl min-[400px]:text-5xl md:text-6xl tracking-wider sm:tracking-widest font-extrabold text-[#B5E7F7] mb-4 drop-shadow-lg'
                    >
                        NAZAR BLANCO
                    </motion.h1>
                    <h3 className='font-title text-2xl md:text-4xl text-[#EA8CFF] font-semibold mb-4 min-h-[2rem] md:min-h-[2.5rem]' aria-label={t.home.rolesLabel}>
                        {/* key restarts the animation with the new words when the language changes */}
                        <Typewriter
                            key={lang}
                            words={t.home.roles}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={55}
                            deleteSpeed={30}
                            delaySpeed={1500}
                        />
                    </h3>
                    <p className="text-[#f5f5fa] text-base mb-8 max-w-lg">
                        {t.home.intro}
                    </p>
                    <a
                        href="/NazarBlancoCV.pdf"
                        download
                        className='inline-block px-7 py-3 rounded-2xl border-2 border-[#EA8CFF] bg-[#EA8CFF] text-[#1B1531] font-title font-bold text-lg shadow-none hover:bg-[#B5E7F7] hover:border-[#B5E7F7] hover:text-[#1B1531] transition-all duration-300'
                    >
                        {t.home.downloadCv}
                    </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: "translateY(60px)" }}
                    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className='flex-1 flex items-center md:justify-end justify-center h-full'
                >
                    <div className='w-64 h-64 min-[400px]:w-72 min-[400px]:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-[#4c4270] border-4 border-[#B5E7F7] shadow-2xl flex items-center justify-center overflow-hidden shrink-0'>
                        <img src={MyAvatarSVG} alt={t.home.avatarAlt} width="384" height="384" fetchPriority="high" className="w-full h-full object-cover" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
