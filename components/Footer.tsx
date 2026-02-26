"use client";
import { Mail, Phone, Send, Github, Linkedin, Twitter, CheckCircle } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { sendEmail } from "@/app/actions/sendEmail";

export default function Footer() {
    const form = useRef<HTMLFormElement>(null);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const result = await sendEmail(formData);

        if (result.success) {
            setIsFormSubmitted(true);
        } else {
            alert("Error sending email");
        }
        setLoading(false);
    };
    return (
        <footer id="contact" className="py-24 px-6 relative">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left: Contact Info */}
                    <div>
                        <h2 className="text-4xl font-bold text-white sm:text-6xl mb-8">
                            Let's craft something <span className="text-brand">great.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg mb-12 max-w-md">
                            Available for new projects and collaborations. Drop me a line or find me on social media.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:borisfeze9@gmail.com" className="flex items-center gap-4 text-zinc-300 hover:text-brand transition-colors">
                                <div className="p-3 rounded-xl bg-white/5"><Mail size={24} /></div>
                                borisfeze9@gmail.com
                            </a>
                            <a href="tel:+237690166974" className="flex items-center gap-4 text-zinc-300 hover:text-brand transition-colors">
                                <div className="p-3 rounded-xl bg-white/5"><Phone size={24} /></div>
                                +237 690 166 974
                            </a>
                        </div>

                        <div className="flex gap-6 mt-12">
                            <Github className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
                            <Linkedin className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
                            <Twitter className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Right: Contact Form */}

                    {/* <div className="glass rounded-[2.5rem] p-8 md:p-12 border border-white/10 bg-zinc-900/20 shadow-2xl">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-2">Name</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. John Doe"
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-transparent transition-all outline-none"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-transparent transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-2">Message</label>
                                <textarea
                                    placeholder="How can I help you?"
                                    rows={5}
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-transparent transition-all outline-none resize-none"
                                />
                            </div>

                            <button className="w-full mt-4 bg-brand hover:bg-brand/90 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-brand/20 group">
                                Send Message
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div> */}

                    <div className="glass rounded-[2.5rem] p-8 md:p-12 border border-white/10 bg-zinc-900/20 shadow-2xl relative min-h-[400px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            {!isFormSubmitted ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    ref={form}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-2">Name</label>
                                            <input
                                                type="text"
                                                name="name" // Important: matches EmailJS template
                                                required
                                                placeholder="e.g. John Doe"
                                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all outline-none"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-2">Email</label>
                                            <input
                                                type="email"
                                                name="email" // Important: matches EmailJS template
                                                required
                                                placeholder="john@example.com"
                                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-2">Message</label>
                                        <textarea
                                            name="message" // Important: matches EmailJS template
                                            required
                                            placeholder="How can I help you?"
                                            rows={5}
                                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all outline-none resize-none"
                                        />
                                    </div>

                                    <button
                                        disabled={loading}
                                        type="submit"
                                        className="w-full mt-4 bg-brand hover:bg-brand/90 disabled:bg-zinc-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-brand/20 group"
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                        {!loading && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-10 flex flex-col items-center justify-center"
                                >
                                    {/* Pulsing Success Icon */}
                                    <div className="relative mb-8">
                                        <div className="absolute inset-0 bg-brand/40 blur-2xl rounded-full animate-pulse" />
                                        <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand/20 text-brand border border-brand/50 shadow-2xl shadow-brand/40">
                                            <CheckCircle size={48} strokeWidth={2.5} />
                                        </div>
                                    </div>

                                    <h3 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
                                        Message Sent!
                                    </h3>

                                    <p className="text-zinc-200 text-lg md:text-xl font-medium mb-10 max-w-sm leading-relaxed">
                                        Thank you for getting in touch, Boris. <br />
                                        <span className="text-zinc-400 text-base font-normal">I will get back to you as soon as possible.</span>
                                    </p>

                                    <button
                                        onClick={() => setIsFormSubmitted(false)}
                                        className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-brand font-bold hover:bg-brand hover:text-white transition-all duration-300 shadow-lg"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/5 text-center text-zinc-600 text-sm">
                    © {new Date().getFullYear()} Boris Tchouanfe. All rights reserved.
                </div>
            </div>
        </footer>
    );
}