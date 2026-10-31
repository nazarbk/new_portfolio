import {useState, useRef, useEffect} from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';
import { useLang } from "../../i18n";

const validCommand = "npm run dev";
const email = "nazarblanco@gmail.com";
const errorMessages = [
    "Error: command not found",
    "npm ERR! missing script: run-dev",
    "SyntaxError: Unexpected identifier",
    "node: bad option: --dev",
    "npm WARN config global --global, --local are deprecated",
];

const sequenceColors = ["#A1A6B4", "#A1A6B4", "#A1A6B4", "#55e4a6"];

export default function Terminal({ onSuccess, onClose }) {
    const { t: { terminal: tt } } = useLang();
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [showSequence, setShowSequence] = useState(false);
    const [sequenceStep, setSequenceStep] = useState(0);
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);
    const historyRef = useRef(null);
    const sequence = tt.sequence;

    const commandResponses = {
        help: (
            <div>
                <div>{tt.helpTitle}</div>
                {tt.help.map(([cmd, text]) => (
                    <div key={cmd}>- <b>{cmd}</b> : {text}</div>
                ))}
            </div>
        ),
        about: <>{tt.about}</>,
        cv: (
            <>{tt.cv} <a href="/NazarBlancoCV.pdf" download className="text-[#6a7ff7] underline">{tt.cvLink}</a></>
        ),
        contact: (
            <>{tt.contact} <a href={`mailto:${email}`} className="text-[#6a7ff7] underline break-all">{email}</a></>
        ),
    };

    // Scroll to bottom on new command/sequence
    useEffect(() => {
        if (historyRef.current) {
            historyRef.current.scrollTop = historyRef.current.scrollHeight;
        }
    }, [history]);

    // Sequence animation
    useEffect(() => {
        if(showSequence && sequenceStep < sequence.length) {
            const delay = sequence[sequenceStep].length * 38 + 550;
            const timeout = setTimeout(() => {
                setSequenceStep(prev => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
        if(showSequence && sequenceStep === sequence.length) {
            const timeout = setTimeout(() => {
                onSuccess();
            }, 800);
            return () => clearTimeout(timeout);
        }
    }, [showSequence, sequenceStep, sequence, onSuccess]);

    // Runs the boot sequence (typed command or tapping the highlighted command)
    function startPortfolio(commandText) {
        if (loading) return;
        setHistory(prev => [...prev, {command: commandText}]);
        setLoading(true);
        setInput('');
        setError('');
        setTimeout(() => {
            setShowSequence(true);
            setSequenceStep(0);
        }, 700);
    }

    // Command handler
    function handleSubmit (e) {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        if(cmd === validCommand) {
            startPortfolio(input);
        }else if (cmd === 'clear') {
            setHistory([]);
            setInput('');
            setError('');
        }else if (cmd === 'exit') {
            onClose();
        }else if (commandResponses[cmd]) {
            setHistory([...history, {command: input, response: commandResponses[cmd] }]);
            setInput('');
            setError('');
        }else if (cmd) {
            const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
            setError(randomError);
            setHistory([...history, {command: input, response: <span className="text-[#F67280]">{randomError}</span> }]);
            setInput('');
            inputRef.current?.focus();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 120 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-2xl shadow-2xl border-2 border-[#EA8CFF] max-w-sm md:max-w-xl w-full mx-auto font-mono bg-[#181325] text-[#B5E7F7] overflow-hidden"
            style={{boxShadow: "0 0 30px 0 rgba(140, 178, 255, 0.1), 0 2px 14px 0 #1B1531"}}
        >
            <div className="flex items-center h-9 px-4 bg-gradient-to-r from-[#282047] to-[#4c4270] border-b-2 border-[#EA8CFF] select-none">
                <button
                    type="button"
                    onClick={onClose}
                    aria-label={tt.close}
                    title={tt.close}
                    className="w-3 h-3 rounded-full bg-[#F67280] mr-2 hover:brightness-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5E7F7]"
                ></button>
                <span className="w-3 h-3 rounded-full bg-[#FFD86E] mr-2"></span>
                <span className="w-3 h-3 rounded-full bg-[#55e4a6] mr-4"></span>
                <span className="font-bold text-[#E6D6FF] text-[1.05em] tracking-wider truncate">nazarblanco@dev:~</span>
                <button
                    type="button"
                    onClick={onClose}
                    aria-label={tt.close}
                    className="ml-auto -mr-2 px-2 text-[#E6D6FF] hover:text-[#99ECFF] text-xl leading-none"
                >
                    ×
                </button>
            </div>
            <div className="p-4 md:p-6 pb-4 text-sm sm:text-base">
                <div className="mb-2 text-[#E6D6FF] text-body">
                    {tt.intro}{" "}
                    <button
                        type="button"
                        onClick={() => startPortfolio(validCommand)}
                        disabled={loading}
                        title={tt.clickToRun}
                        className="bg-[#EA8CFF]/10 text-[#EA8CFF] rounded px-1.5 hover:bg-[#EA8CFF]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B5E7F7] transition cursor-pointer disabled:cursor-default"
                    >
                        {validCommand}
                    </button>
                </div>
                <div className="mb-2 text-[#6c93c7] text-body">
                    💡 {tt.tip} <b>help</b> {tt.tipEnd}
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
                        sequence.map((text, idx) =>
                            idx <= sequenceStep ? (
                                <div
                                    key={idx}
                                    style={{color: sequenceColors[idx]}}>
                                    {idx === sequenceStep ?
                                        <Typewriter
                                            words={[text]}
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
                                        text
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
                        aria-label={tt.label}
                        autoCapitalize="off"
                        autoCorrect="off"
                        enterKeyHint="go"
                        className={
                            "flex-1 min-w-0 bg-transparent border-0 border-b-2 outline-none px-2 py-1 text-[#B5E7F7] text-base transition-all duration-200 " +
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
