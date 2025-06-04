import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Confetti from "react-confetti";

export default function ContactSection() {
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [submitted, setSubmitted] = useState(false);
    const [confetti, setConfetti] = useState(false);

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = "https://formspree.io/f/xldneybj";

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
                alert("Ooops! There was a problem sending your message.");
            }
        }catch (error) {
            alert("Ooops! There was a problem sending your message.");
        }
    };

    return (
        <section className="w-full max-w-3xl mx-auto py-24 px-4" id="contact">
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
                    Contact
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
                Interested in collaborating or just want to say hi? Feel free to send me a message! 
            </motion.p>
            <motion.form 
                initial={{ opacity: 0, transform: "translateY(60px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                onSubmit={handleSubmit}
                className="bg-[#181325] border-l-4 border-[#B5E7F7] rounded-3xl p-8 flex flex-col gap-6 shadow-xl"
                style={{boxShadow: "0 0 30px 0 rgba(140, 178, 255, 0.1), 0 2px 14px 0 #1B1531"}}
            >
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-1">
                        <label htmlFor="name" className="font-mono text-[#B5E7F7]">Name</label>
                        <input 
                            id="name"
                            name="name"
                            required
                            autoComplete="off"
                            className="bg-[#282047] rounded-xl px-4 py-3 text-[#E6D6FF] font-body border border-[#4c4270] focus:border-[#EA8CFF] outline-none transition"
                            value={form.name}
                            onChange={handleChange}
                            disabled={submitted}
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <label htmlFor="email" className="font-mono text-[#B5E7F7]">Email</label>
                        <input 
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="off"
                            className="bg-[#282047] rounded-xl px-4 py-3 text-[#E6D6FF] font-body border border-[#4c4270] focus:border-[#EA8CFF] outline-none transition"
                            value={form.email}
                            onChange={handleChange}
                            disabled={submitted}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="font-mono text-[#B5E7F7]">Message</label>
                    <textarea 
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="bg-[#282047] rounded-xl px-4 py-3 text-[#E6D6FF] font-body border border-[#4c4270] focus:border-[#EA8CFF] outline-none transition resize-none"
                        value={form.message}
                        onChange={handleChange}
                        disabled={submitted}
                    />
                </div>
                <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-[#EA8CFF] hover:bg-[#B5E7F7] text-[#1B1531] font-title font-semibold px-7 py-3 rounded-2xl text-lg shadow transition duration-300 mt-2"
                    disabled={submitted}
                >
                    {submitted ? "Message Sent!" : "Send Message"}
                    <FaPaperPlane className="ml-2"/>
                </button>
                {submitted && (
                    <div
                        className="text-[#99ECFF] text-center font-mono mt-2"
                    >
                        Thank you for your message! I'll get back to you soon.
                    </div>
                )}
            </motion.form>
        </section>
    )
}