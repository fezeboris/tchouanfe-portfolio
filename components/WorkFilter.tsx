"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Web App", "Mobile App", "UI/UX", "React JS"];

export default function WorkFilter({ initialWorks }: { initialWorks: any[] }) {
    const [filter, setFilter] = useState("All");
    const [filteredWorks, setFilteredWorks] = useState(initialWorks);

    const handleFilter = (cat: string) => {
        setFilter(cat);
        if (cat === "All") {
            setFilteredWorks(initialWorks);
        } else {
            setFilteredWorks(initialWorks.filter((w) => w.tags.includes(cat)));
        }
    };

    return (
        <div>
            {/* Modern Pill Filter */}
            <div className="mb-12 flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleFilter(cat)}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                            filter === cat
                                ? "bg-brand text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                                : "bg-zinc-900 text-zinc-400 border border-white/5 hover:border-white/20"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Animated Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredWorks.map((work) => (
                        // <motion.div
                        //     layout
                        //     key={work._id}
                        //     initial={{ opacity: 0, scale: 0.9 }}
                        //     animate={{ opacity: 1, scale: 1 }}
                        //     exit={{ opacity: 0, scale: 0.9 }}
                        //     transition={{ duration: 0.4 }}
                        //     className="group relative "
                        // >
                        //     <div className="glass overflow-hidden  rounded-[2rem] border border-white/10 bg-zinc-900/40 p-4 transition-all duration-500 hover:border-brand/50">
                        //         {/* Image Container */}
                        //         <div className="relative   aspect-video overflow-hidden rounded-2xl">
                        //             <img
                        //                 src={work.imgUrl}
                        //                 alt={work.title}
                        //                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl"
                        //             />

                        //             {/* Hover Overlay - Modern Version */}
                        //             <div className="absolute inset-0 flex items-center justify-center gap-4 bg-zinc-950/60  opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 rounded-2xl">
                        //                 <a
                        //                     href={work.projectLink}
                        //                     target="_blank"
                        //                     className="rounded-full bg-white p-3 text-black transition-transform hover:scale-110"
                        //                 >
                        //                     <Eye size={20} />
                        //                 </a>
                        //                 <a
                        //                     href={work.codeLink}
                        //                     target="_blank"
                        //                     className="rounded-full bg-zinc-800 p-3 text-white transition-transform hover:scale-110"
                        //                 >
                        //                     <Github size={20} />
                        //                 </a>
                        //             </div>
                        //         </div>

                        //         {/* Content */}
                        //         <div className="mt-6 px-2 pb-2">
                        //             <div className="flex items-center justify-between">
                        //                 <h3 className="text-xl font-bold text-white">{work.title}</h3>
                        //                 <span className="text-[10px] uppercase tracking-widest text-brand font-bold bg-brand/10 px-2 py-1 rounded">
                        //                     {work.tags[0]}
                        //                 </span>
                        //             </div>
                        //             <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                        //                 {work.description}
                        //             </p>
                        //         </div>
                        //     </div>
                        // </motion.div>

                        <motion.div
                            layout
                            key={work._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="group relative"
                        >
                            {/* Darker, higher-contrast card container */}
                            <div className="bg-zinc-900/90 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-5 transition-all duration-500 hover:border-brand/50 hover:shadow-[0_20px_50px_-20px_rgba(99,102,241,0.3)]">

                                {/* Image Container */}
                                <div className="relative aspect-video overflow-hidden rounded-2xl shadow-inner bg-black/20">
                                    <img
                                        src={work.imgUrl}
                                        alt={work.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* High-visibility Hover Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 bg-zinc-950/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                                        <a
                                            href={work.projectLink}
                                            target="_blank"
                                            className="rounded-full bg-white p-3 text-black transition-transform hover:scale-110 shadow-xl"
                                        >
                                            <Eye size={22} />
                                        </a>
                                        <a
                                            href={work.codeLink}
                                            target="_blank"
                                            className="rounded-full bg-zinc-800 p-3 text-white transition-transform hover:scale-110 shadow-xl border border-white/10"
                                        >
                                            <Github size={22} />
                                        </a>
                                    </div>
                                </div>

                                {/* Content Section: High Contrast Typography */}
                                <div className="mt-6 px-1">
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors duration-300 leading-tight">
                                            {work.title}
                                        </h3>
                                        <span className="shrink-0 text-[10px] uppercase tracking-tighter text-brand font-black bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-lg">
                                            {work.tags[0]}
                                        </span>
                                    </div>

                                    {/* Description: Changed to text-zinc-300 for much better visibility */}
                                    <p className="mt-3 text-zinc-300 text-sm leading-relaxed line-clamp-2">
                                        {work.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}