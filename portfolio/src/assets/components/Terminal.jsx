import React, {useState, useRef, useEffect} from "react";
//import '../styles/Terminal.css';
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';

const validCommand = "npm run dev";
const errorMessages = [
    <span className="text-[#F67280]">Error: command not found</span>,
    <span className="text-[#F67280]">npm ERR! missing script: run-dev</span>,
    <span className="text-[#F67280]">SyntaxError: Unexpected identifier</span>,
    <span className="text-[#F67280]">node: bad option: --dev</span>,
    <span className="text-[#F67280]">npm WARN config global --global, --local are deprecated</span>,

];

const commandResponses = {
    help: (
        <div>
            <div>Available commands:</div>
            <div>- <b>npm run dev</b> : Start the portfolio</div>
            <div>- <b>help</b> : Show this help</div>
            <div>- <b>about</b> : Who is Nazar Blanco</div>
            <div>- <b>cv</b> : View my resume</div>
            <div>- <b>clear</b> : Clear the terminal</div>
            <div>- <b>contact</b> : My contact information</div>
        </div>
    ),
    about: (
        <>I'm Nazar Blanco, a multimedia engineer and web developer passionate about creativity, interactivity, and currently developing skills on quantum computing.</>
    ),
    cv: (
        <a>View my resume</a>
    ),
    contact: (
        <>You can contact me at: <a href="mailto:nazarblanco@gmail.com" className="text-[#6a7ff7] underline">nazarblanco@gmail.com</a></>
    )
}

const sequence = [
    {text: "Running portfolio...", color: "#A1A6B4"},
    {text: "Compiling...", color: "#A1A6B4"},
    {text: "Optimizing...", color: "#A1A6B4"},
    {text: "All systems operational!", color: "#55e4a6"}
];

export default function Terminal({ onSuccess }) {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [showSequence, setShowSequence] = useState(false);
    const [sequenceStep, setSequenceStep] = useState(0);
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);
    const historyRef = useRef(null);

    // Scroll to bottom on new command/sequence
    useEffect(() => {
        if (historyRef.current) {
            historyRef.current.scrollTop = historyRef.current.scrollHeight;
        }
    }, [history]);

    // Sequence animation
    useEffect(() => {
        if(showSequence && sequenceStep < sequence.length) {
            const delay = sequence[sequenceStep].text.length * 38 + 550;
            const timeout = setTimeout(() => {
                setSequenceStep(prev => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
        if(showSequence && sequenceStep === sequence.length) {
            setTimeout(() => {
                onSuccess();
            }, 800);
        }
    }, [showSequence, sequenceStep, onSuccess]);

    // Command handler
    function handleSubmit (e) {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        if(cmd === validCommand) {
            setHistory([...history, {command: input}]);
            setLoading(true);
            setInput('');
            setError('');
            setTimeout(() => {
                setShowSequence(true);
                setSequenceStep(0);
            }, 700);
        }else if (cmd === 'clear') {
            setHistory([]);
            setInput('');
            setError('');
        }else if (commandResponses[cmd]) {
            setHistory([...history, {command: input, response: commandResponses[cmd] }]);
            setInput('');
            setError('');
        }else if (cmd) {
            const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
            setError(randomError);
            setHistory([...history, {command: input, response: <span style={{color: '#F67280'}}>{randomError}</span> }]);
            setInput('');
            inputRef.current && inputRef.current.focus();
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity:0, y: 200}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="rounded-2xl shadow-2xl border-2 border-[#EA8CFF] max-w-sm md:max-w-xl w-full mx-auto font-mono bg-[#181325] text-[#B5E7F7] overflow-hidden"
            style={{boxShadow: "0 0 30px 0 rgba(140, 178, 255, 0.1), 0 2px 14px 0 #1B1531"}}
        >
            <div className="flex items-center h-9 px-4 bg-gradient-to-r from-[#282047] to-[#4c4270] border-b-2 border-[#EA8CFF] select-none">
                <span className="w-3 h-3 rounded-full bg-[#F67280] mr-2"></span>
                <span className="w-3 h-3 rounded-full bg-[#FFD86E] mr-2"></span>
                <span className="w-3 h-3 rounded-full bg-[#55e4a6] mr-4"></span>
                <span className="font-bold text-[#E6D6FF] text-[1.05em] tracking-wider">nazarblanco@dev:~</span>
            </div>
            <div className="p-4 md:p-6 pb-3">
                <div className="mb-2 text-[#E6D6FF] text-body">
                    To run the portfolio execute: <span className="bg-[#EA8CFF]/10 text-[#EA8CFF] rounded px-1.5">npm run dev</span>
                </div>
                <div className="mb-2 text-[#6c93c7] text-body">
                    💡 Type <b>help</b> to see a list of available commands.
                </div>

                <div 
                    className="max-h-56 md:max-h-80 overflow-y-auto pr-2 custom-scroll rounded transition-all mb-2" 
                    ref={historyRef}
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#EA8CFF #181325'
                    }}
                >
                    {history.map((item, i) => (
                        <div key={i} className="mb-2">
                            <div>
                                <span className="text-[#EA8CFF] font-bold">$ </span>
                                <span className="text-[#B5E7F7] font-medium tracking-wide">{item.command}</span>
                            </div>
                            {item.response && (
                                <div className="ml-5 text-[#E6D6FF] text-[0.98em]">{item.response}</div>
                            )}
                        </div>
                    ))}
                    {showSequence && 
                        sequence.map((line, idx) =>
                            idx <= sequenceStep ? (
                                <div
                                    key={idx}
                                    style={{color: line.color}}>
                                    {idx === sequenceStep ?
                                        <Typewriter 
                                            words={[line.text]}
                                            loop={1}
                                            cursor={false}
                                            typeSpeed={40}
                                            deleteSpeed={45}
                                            delaySpeed={1000}
                                            onType={() => {
                                                if (historyRef.current) {
                                                    historyRef.current.scrollTop = historyRef.current.scrollHeight;
                                                }
                                            }}
                                        /> :
                                        line.text
                                    }
                                </div>
                            ) : null
                        )
                    }
                </div>

                <form onSubmit={handleSubmit} autoComplete="off" className="flex items-center gap-2 mt-2">
                    <span className="text-[#EA8CFF] font-bold text-lg select-none">&gt; </span>
                    <input
                        ref={inputRef}
                        className={
                            "flex-1 bg-transparent border-0 border-b-2 outline-none px-2 py-1 text-[#B5E7F7] text-base transition-all duration-200 " +
                            (error ? "border-[#F67280] placeholder-[#F67280] text-[#F67280]" : "border-[#EA8CFF] focus:border-[#B5E7F7]")
                        }
                        type="text"
                        value={input}
                        onChange={e => {
                            setInput(e.target.value);
                            setError("");
                        }}
                        autoFocus
                        disabled={loading}
                        spellCheck={false}
                    />
                </form>
            </div>
            <style>
                {`
                .custom-scroll::-webkit-scrollbar {
                    width: 8px;
                    background: #181325;
                }
                .custom-scroll::-webkit-scrollbar-thumb {
                    background: #EA8CFF;
                    border-radius: 6px;
                }
                .custom-scroll {
                    scrollbar-width: thin;
                    scrollbar-color: #EA8CFF #181325;
                }
                `}
            </style>
        </motion.div>
    );
}