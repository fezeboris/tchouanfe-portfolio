"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function HeroContent({ data }: { data: any }) {
    return (
        <section id="home" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-20 px-6">
            <div className="mesh-gradient" />

            <div className="container z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <span className="mb-6 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand">
                        Available for Freelance
                    </span>

                    <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl text-white">
                        Hi, I'm <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{data.name}.</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg text-zinc-300 sm:text-xl leading-relaxed">
                        {data.description}
                    </p>

                    {/* <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                        <a href="#work" className="rounded-full bg-brand px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] active:scale-95 flex items-center gap-2">
                            View My Work <ArrowRight size={20} />
                        </a>
                        <button className="glass rounded-full px-8 py-4 font-bold text-white transition-all hover:bg-white/10 flex items-center gap-2">
                            Resume <Download size={20} />
                        </button>
                    </div> */}

                    <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                        <a
                            href="#work"
                            className="rounded-full bg-brand px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] active:scale-95 flex items-center gap-2"
                        >
                            View My Work <ArrowRight size={20} />
                        </a>

                        {/* UPDATED RESUME BUTTON */}
                        {data.resumeURL && (
                            <a
                                href={`${data.resumeURL}?dl=Boris_Tchouanfe_Resume.pdf`} // ?dl= forces a download name
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass rounded-full px-8 py-4 font-bold text-white transition-all hover:bg-white/10 flex items-center gap-2 cursor-pointer"
                            >
                                Resume <Download size={20} />
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* RIGHT Portrait */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative mx-auto lg:ml-auto"
                >
                    <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full animate-pulse" />

                    <div className="relative group">
                        <div className="relative h-[350px] w-[300px] md:h-[500px] md:w-[420px] overflow-hidden rounded-[3rem] border border-white/20 bg-zinc-900/40 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:border-brand/50">
                            {data.profileImage ? (
                                <img
                                    src={data.profileImage}
                                    alt={data.name}
                                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                                />
                            ) : (
                                <div className="h-full w-full bg-zinc-800 animate-pulse" />
                            )}
                        </div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-2xl border border-white/10 shadow-xl"
                        >
                            <p className="text-3xl font-extrabold text-white">{data.yearsExperience}</p>
                            <p className="text-[10px] text-brand uppercase font-black tracking-widest">Years Exp.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}