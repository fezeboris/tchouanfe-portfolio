

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Home, User, Briefcase, Cpu, MessageSquare } from "lucide-react";
// import { cn } from "@/lib/utils";

// const navItems = [
//     { name: "Home", href: "#home", icon: Home },
//     { name: "About", href: "#about", icon: User },
//     { name: "Work", href: "#work", icon: Briefcase },
//     { name: "Skills", href: "#skills", icon: Cpu },
//     { name: "Contact", href: "#contact", icon: MessageSquare },
// ];

// export default function Navbar() {
//     return (
//         <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 w-full max-w-fit px-4">
//             <nav className="relative">
//                 {/* The Glass Container */}
//                 <div className="flex items-center gap-1 rounded-full border border-white/10 bg-zinc-900/40 px-3 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
//                     {navItems.map((item) => (
//                         <a
//                             key={item.name}
//                             href={item.href}
//                             className="group relative flex h-12 w-12 items-center justify-center rounded-full text-zinc-400 transition-all hover:bg-white/10 hover:text-brand"
//                         >
//                             <item.icon size={20} strokeWidth={2} />

//                             {/* Tooltip on Hover */}
//                             <span className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 rounded-xl border border-white/10 bg-zinc-900/90 px-3 py-1.5 text-xs font-bold text-white shadow-xl transition-all group-hover:scale-100 backdrop-blur-xl">
//                                 {item.name}
//                             </span>

//                             {/* Little indicator dot */}
//                             <motion.div
//                                 className="absolute -bottom-1 h-1 w-1 rounded-full bg-brand opacity-0 group-hover:opacity-100"
//                                 layoutId="nav-dot"
//                             />
//                         </a>
//                     ))}
//                 </div>
//             </nav>
//         </div>
//     );
// }


"use client";
import React from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Cpu, MessageSquare } from "lucide-react";

const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Work", href: "#work", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Contact", href: "#contact", icon: MessageSquare },
];

export default function Navbar() {
    return (
        <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 w-full max-w-fit px-4">
            <nav className="relative">
                {/* 
                   THE ENHANCED DOCK:
                   1. Increased opacity (bg-zinc-900/80)
                   2. Brighter border (border-white/20)
                   3. Added shadow-2xl for depth
                */}
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-zinc-900/80 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">

                    {/* Subtle internal top highlight for 3D effect */}
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="group relative flex h-12 w-12 items-center justify-center rounded-full text-zinc-300 transition-all hover:bg-white/10 hover:text-white"
                        >
                            {/* Icons are now brighter (zinc-300) by default */}
                            <item.icon size={22} strokeWidth={2.5} />

                            {/* Tooltip: Higher contrast */}
                            <span className="absolute -top-14 left-1/2 -translate-x-1/2 scale-0 rounded-2xl border border-white/20 bg-zinc-950 px-4 py-2 text-xs font-black text-white shadow-2xl transition-all group-hover:scale-100 backdrop-blur-3xl">
                                {item.name}
                            </span>

                            {/* Indicator: Now a glowing pill instead of a tiny dot */}
                            <motion.div
                                className="absolute -bottom-1 h-1 w-4 rounded-full bg-brand opacity-0 group-hover:opacity-100 shadow-[0_0_10px_#6366f1]"
                                layoutId="nav-dot"
                            />
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    );
}