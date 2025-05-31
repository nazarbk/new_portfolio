import {Typewriter} from 'react-simple-typewriter';

export default function HomeSection() {
    return (
        <section
            id='home'
            className='w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 pt-16 max-w-7xl mx-auto'
        >
            <div className='flex-1 flex flex-col justify-center items-start'>
                <h2 className='font-body text-lg text-[#E6D6FF] mb-2'>Hi, I'm</h2>
                <h1 className='font-title text-5xl tracking-widest md:text-6xl font-extrabold text-[#B5E7F7] mb-4 drop-shadow-lg'>
                    NAZAR BLANCO
                </h1>
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
                    Passionate about bringing together art, code and science to build impactful digital experiences. Let's push the bondaries of creativity and technology!
                </p>
                <a 
                    href=""
                    download
                    className='inline-block px-7 py-3 rounded-2xl border-2 border-[#EA8CFF] bg-[#EA8CFF] text-[#1B1531] font-title font-bold text-lg shadow-none hover:bg-[#B5E7F7] hover:border-[#B5E7F7] hover:text-[#1B1531] transition-all duration-300'
                >
                    Download CV
                </a>        
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <div className='w-56 h-56 md:w-64 md:h-64 rounded-full bg-[#4c4270] border-4 border-[#B5E7F7] shadow-2xl flex items-center justify-center overflow-hidden'>
                    <svg width="120" height="120" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="56" fill="#B5E7F7"/>
                        <text x="50%" y="54%" textAnchor="middle" fontSize="30" fill="#1B1531" dy=".3em" fontFamily="Outfit, Inter, sans-serif">NB</text>
                    </svg>
                </div>
            </div>
        </section>
    );
}