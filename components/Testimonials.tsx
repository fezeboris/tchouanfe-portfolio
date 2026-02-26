

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, X, MessageSquarePlus, Send, CheckCircle } from "lucide-react";
import { submitTestimonial } from "@/app/actions/submitTestimonial";

export default function Testimonials({ testimonials, brands }: { testimonials: any[], brands: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const [isSubmitted, setIsSubmitted] = useState(false);

    // 2. Update the handleFormSubmit function
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsPending(true);
        const formData = new FormData(e.currentTarget);
        const res = await submitTestimonial(formData);

        if (res.success) {
            setIsSubmitted(true); // Switch to success view
            // Reset after 5 seconds or let user close it
        } else {
            alert("Something went wrong. Please try again.");
        }
        setIsPending(false);
    }

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonial" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
                        Voices of <span className="text-brand">Success</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 text-lg">What clients and colleagues say about my work</p>
                </div>

                {/* TESTIMONIAL CARD */}
                <div className="relative max-w-4xl mx-auto">
                    <Quote className="absolute -top-12 -left-12 h-24 w-24 text-brand/20 -z-10" />

                    <div className="bg-zinc-900/80 backdrop-blur-2xl rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-2xl relative">
                        {testimonials.length > 0 ? (
                            <>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        className="flex flex-col md:flex-row items-center gap-10"
                                    >
                                        <div className="relative shrink-0">
                                            <div className="absolute inset-0 bg-brand/30 blur-2xl rounded-full" />
                                            <div className="relative h-28 w-28 md:h-40 md:w-40 rounded-full overflow-hidden border-2 border-white/20 shadow-xl bg-zinc-800 flex items-center justify-center">
                                                {testimonials[currentIndex]?.imageurl ? (
                                                    <img
                                                        src={testimonials[currentIndex]?.imageurl}
                                                        alt={testimonials[currentIndex]?.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <span className="text-4xl font-bold text-zinc-500">
                                                        {testimonials[currentIndex]?.name?.charAt(0)}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="text-center md:text-left">
                                            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                                                "{testimonials[currentIndex]?.feedback}"
                                            </p>
                                            <div>
                                                <h4 className="text-white font-bold text-xl">{testimonials[currentIndex]?.name}</h4>
                                                <p className="text-brand font-semibold tracking-wider uppercase text-xs mt-1">
                                                    {testimonials[currentIndex]?.company}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10 md:mt-12">
                                    <div className="flex gap-4">
                                        <button onClick={prevTestimonial} className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand transition-all shadow-lg">
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button onClick={nextTestimonial} className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand transition-all shadow-lg">
                                            <ChevronRight size={24} />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => setIsFormOpen(true)}
                                        className="flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-brand transition-colors group"
                                    >
                                        <MessageSquarePlus size={18} className="group-hover:scale-110 transition-transform" />
                                        Leave a testimonial
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-10">
                                <p className="text-zinc-400 mb-6">No testimonials yet. Be the first to leave one!</p>
                                <button onClick={() => setIsFormOpen(true)} className="bg-brand px-8 py-3 rounded-full font-bold text-white">Write a Review</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* BRANDS MARQUEE */}
                <div className="mt-40 relative group">
                    <div className="flex w-[200%] animate-infinite-scroll pause-on-hover py-10">
                        {[...brands, ...brands, ...brands].map((brand, idx) => (
                            <div key={idx} className="flex shrink-0 items-center justify-center px-12 md:px-20">
                                <img
                                    src={brand.imgUrl}
                                    alt={brand.name}
                                    className="h-8 md:h-12 w-auto object-contain opacity-50 brightness-200 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
                </div>

                {/* SUBMISSION MODAL */}
                {/* <AnimatePresence>
                    {isFormOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsFormOpen(false)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
                            >
                                <button
                                    onClick={() => setIsFormOpen(false)}
                                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-zinc-500 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                <h3 className="text-3xl font-bold text-white mb-2">Share your experience</h3>
                                <p className="text-zinc-400 mb-8">Your feedback helps me grow and improve.</p>

                                <form onSubmit={handleFormSubmit} className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                                        <input
                                            name="name"
                                            required
                                            placeholder="e.g. Diane Nzali"
                                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Company / Role</label>
                                        <input
                                            name="company"
                                            required
                                            placeholder="e.g. CEO at TechCorp"
                                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Your Feedback</label>
                                        <textarea
                                            name="feedback"
                                            required
                                            rows={4}
                                            placeholder="What was it like working with me?"
                                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isPending}
                                        className="w-full mt-4 bg-brand hover:bg-brand/90 disabled:bg-zinc-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-brand/20"
                                    >
                                        {isPending ? "Submitting..." : "Send for Approval"}
                                        {!isPending && <Send size={18} />}
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence> */}
                <AnimatePresence>
                    {isFormOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => {
                                    setIsFormOpen(false);
                                    setIsSubmitted(false); // Reset for next time
                                }}
                                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => {
                                        setIsFormOpen(false);
                                        setIsSubmitted(false);
                                    }}
                                    className="absolute top-8 right-8 p-2 rounded-full hover:bg-white/5 text-zinc-500 hover:text-white transition-colors z-10"
                                >
                                    <X size={24} />
                                </button>

                                <AnimatePresence mode="wait">
                                    {!isSubmitted ? (
                                        <motion.div
                                            key="form-fields"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                        >
                                            <h3 className="text-3xl font-bold text-white mb-2">Share your experience</h3>
                                            <p className="text-zinc-400 mb-8">Your feedback helps me grow and improve.</p>

                                            <form onSubmit={handleFormSubmit} className="space-y-5">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Full Name</label>
                                                    <input
                                                        name="name"
                                                        required
                                                        placeholder="e.g. Diane Nzali"
                                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Company / Role</label>
                                                    <input
                                                        name="company"
                                                        required
                                                        placeholder="e.g. CEO at TechCorp"
                                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Your Feedback</label>
                                                    <textarea
                                                        name="feedback"
                                                        required
                                                        rows={4}
                                                        placeholder="What was it like working with me?"
                                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all resize-none"
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={isPending}
                                                    className="w-full mt-4 bg-brand hover:bg-brand/90 disabled:bg-zinc-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-brand/20"
                                                >
                                                    {isPending ? "Submitting..." : "Send for Approval"}
                                                    {!isPending && <Send size={18} />}
                                                </button>
                                            </form>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="success-message"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-6 flex flex-col items-center"
                                        >
                                            <div className="relative mb-8">
                                                <div className="absolute inset-0 bg-brand/30 blur-2xl rounded-full animate-pulse" />
                                                <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-brand/10 border border-brand/50 text-brand shadow-2xl shadow-brand/20">
                                                    <CheckCircle size={48} strokeWidth={2.5} />
                                                </div>
                                            </div>

                                            <h3 className="text-3xl font-extrabold text-white mb-4">Feedback Received!</h3>
                                            <p className="text-zinc-300 text-lg mb-8 max-w-xs mx-auto leading-relaxed">
                                                Thank you! Your testimonial has been sent to Boris  Tchouanfe
                                                {/* <span className="block mt-2 text-zinc-500 text-sm italic">It will appear on the site once validated.</span> */}
                                            </p>

                                            <button
                                                onClick={() => {
                                                    setIsFormOpen(false);
                                                    setIsSubmitted(false);
                                                }}
                                                className="px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-brand transition-all shadow-lg"
                                            >
                                                Close Window
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}