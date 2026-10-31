import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Confetti from "react-confetti";
import { useLang } from "../../i18n";

export default function ContactSection() {
    const { t } = useLang();
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [sendError, setSendError] = useState(false);
    const [confetti, setConfetti] = useState(false);

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (sending) return;

        const endpoint = "https://formspree.io/f/xldneybj";
        setSending(true);
        setSendError(false);

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {"Content-Type": "application/json", Accept: "application/json"},
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setSubmitted(true);
                setConfetti(true);
                setForm({name: "", email: "", message: ""});
                setTimeout(() => {
                    setConfetti(false);
                    setSubmitted(false);
                }, 4000);
            }else{
                setSendError(true);
            }
        }catch {
            setSendError(true);
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="w-full max-w-3xl mx-auto py-16 md:py-24 px-4" id="contact">
            {confetti && <Confetti numberOfPieces={220} recycle={false} />}
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
                    {t.contact.title}
                </h2>
                <div className="w-40 h-1 bg-gradient-to-r from-[#EA8CFF] to-[#B5E7F7] rounded-full mb-5"/>
            </motion.div>
            <motion.p
                initial={{ opacity: 0, transform: "translateY(-40px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="text-center text-[#f5f5fa] text-base md:text-base mb-10"
            >
                {t.contact.subtitle}
            </motion.p>
            <motion.form 
                initial={{ opacity: 0, transform: "translateY(60px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                onSubmit={handleSubmit}
                className="bg-[#181325] border-2 border-[#B5E7F7] rounded-3xl p-5 sm:p-8 flex flex-col gap-5 sm:gap-6 shadow-xl"
                style={{boxShadow: "0 0 30px 0 rgba(140, 178, 255, 0.1), 0 2px 14px 0 #1B1531"}}
            >
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-1">
                        <label htmlFor="name" className="font-mono text-[#B5E7F7]">{t.contact.name}</label>
                        <input 
                            id="name"
                            name="name"
                            required
                            autoComplete="name"
                            className="w-full min-w-0 bg-[#282047] rounded-xl px-4 py-3 text-base text-[#E6D6FF] font-body border border-[#4c4270] focus:border-[#EA8CFF] outline-none transition"
                            value={form.name}
                            onChange={handleChange}
                            disabled={submitted}
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <label htmlFor="email" className="font-mono text-[#B5E7F7]">{t.contact.email}</label>
                        <input 
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            inputMode="email"
                            className="w-full min-w-0 bg-[#282047] rounded-xl px-4 py-3 text-base text-[#E6D6FF] font-body border border-[#4c4270] focus:border-[#EA8CFF] outline-none transition"
                            value={form.email}
                            onChange={handleChange}
                            disabled={submitted}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="font-mono text-[#B5E7F7]">{t.contact.message}</label>
                    <textarea 
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full bg-[#282047] rounded-xl px-4 py-3 text-base text-[#E6D6FF] font-body border border-[#4c4270] focus:border-[#EA8CFF] outline-none transition resize-none"
                        value={form.message}
                        onChange={handleChange}
                        disabled={submitted}
                    />
                </div>
                <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-[#EA8CFF] hover:bg-[#B5E7F7] text-[#1B1531] font-title font-semibold px-7 py-3 rounded-2xl text-lg shadow transition duration-300 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={submitted || sending}
                >
                    {submitted ? t.contact.sent : sending ? t.contact.sending : t.contact.send}
                    <FaPaperPlane className="ml-2" aria-hidden="true"/>
                </button>
                {sendError && (
                    <div role="alert" className="text-[#F67280] text-center font-mono text-sm">
                        {t.contact.error}
                    </div>
                )}
                {submitted && (
                    <div
                        role="status"
                        className="text-[#99ECFF] text-center font-mono mt-2"
                    >
                        {t.contact.thanks}
                    </div>
                )}
            </motion.form>
        </section>
    )
}