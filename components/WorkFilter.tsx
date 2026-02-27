"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Web App", "Mobile App", "UI/UX", "React JS"];

export default function WorkFilter({ initialWorks }: { initialWorks: any[] }) {
    const [filter, setFilter] = useState("All");

    // Explicitly sort the initial data on load just to be safe
    const [filteredWorks, setFilteredWorks] = useState(() =>
        [...initialWorks].sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
    );

    const handleFilter = (cat: string) => {
        setFilter(cat);

        // 1. Filter the works
        const filtered = cat === "All"
            ? initialWorks
            : initialWorks.filter((w) => w.tags?.includes(cat));

        // 2. Sort the filtered results by the "order" property
        // We use 999 as a fallback for projects where you forgot to set an order
        const sorted = [...filtered].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

        setFilteredWorks(sorted);
    };

    return (
        <div className="w-full">
            {/* MODERN PILL FILTER */}
            <div className="mb-16 flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleFilter(cat)}
                        className={cn(
                            "px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border",
                            filter === cat
                                ? "bg-brand text-white border-brand shadow-[0_0_25px_rgba(99,102,241,0.4)] scale-105"
                                : "bg-zinc-900/50 text-zinc-400 border-white/5 hover:border-white/20 hover:text-white"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* ANIMATED GRID */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <AnimatePresence mode="popLayout">
                    {filteredWorks.map((work) => (
                        <motion.div
                            layout
                            key={work._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="group relative"
                        >
                            {/* ENHANCED CARD CONTAINER */}
                            <div className="bg-zinc-900/90 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-5 transition-all duration-500 hover:border-brand/50 hover:shadow-[0_20px_50px_-20px_rgba(99,102,241,0.4)] h-full flex flex-col">

                                {/* IMAGE CONTAINER */}
                                <div className="relative aspect-video overflow-hidden rounded-2xl bg-black/40">
                                    <img
                                        src={work.imgUrl}
                                        alt={work.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* HOVER OVERLAY */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 bg-zinc-950/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                                        <a
                                            href={work.projectLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-full bg-white p-3.5 text-black transition-transform hover:scale-110 shadow-2xl"
                                        >
                                            <Eye size={22} strokeWidth={2.5} />
                                        </a>
                                        <a
                                            href={work.codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-full bg-zinc-800 p-3.5 text-white transition-transform hover:scale-110 shadow-2xl border border-white/10"
                                        >
                                            <Github size={22} strokeWidth={2.5} />
                                        </a>
                                    </div>
                                </div>

                                {/* CONTENT SECTION */}
                                <div className="mt-7 px-1 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-start justify-between gap-3">
                                            <h3 className="text-xl font-extrabold text-white group-hover:text-brand transition-colors duration-300 leading-tight">
                                                {work?.title || "Project Title"}
                                            </h3>

                                            {/* SAFE TAG RENDERING */}
                                            {work?.tags?.[0] && (
                                                <span className="shrink-0 text-[10px] uppercase tracking-tighter text-brand font-black bg-brand/10 border border-brand/20 px-3 py-1 rounded-lg">
                                                    {work.tags[0]}
                                                </span>
                                            )}
                                        </div>

                                        {/* DESCRIPTION */}
                                        <p className="mt-4 text-zinc-300 text-sm leading-relaxed line-clamp-3">
                                            {work?.description || "No description provided for this project."}
                                        </p>
                                    </div>

                                    {/* MOBILE QUICK LINKS */}
                                    <div className="mt-6 pt-5 border-t border-white/5 flex gap-4 md:hidden">
                                        <a href={work.projectLink} className="text-xs font-bold text-brand">Live Demo</a>
                                        <a href={work.codeLink} className="text-xs font-bold text-zinc-500">Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}