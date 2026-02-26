// import Image from "next/image";
// import { client } from "@/app/sanity/lib/client";
// import { aboutsQuery } from "@/app/sanity/lib/queries";
// import { cn } from "@/lib/utils";

// interface AboutItem {
//     _id: string;
//     title: string;
//     description: string;
//     imgUrl: string;
// }

// export default async function About() {
//     const abouts: AboutItem[] = await client.fetch(aboutsQuery);

//     return (
//         <section id="about" className="py-20 px-6">
//             <div className="container mx-auto">
//                 <div className="mb-12 text-center">
//                     <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
//                         I Know that <span className="text-brand">Good Development</span>
//                     </h2>
//                     <p className="mt-4 text-zinc-600 dark:text-zinc-400">
//                         means Good Business
//                     </p>
//                 </div>

//                 {/* Bento Grid Layout */}
//                 <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-[600px]">
//                     {abouts.map((item, index) => (
//                         <div
//                             key={item._id}
//                             className={cn(
//                                 "glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:shadow-2xl hover:shadow-brand/10",
//                                 // Asymmetrical grid logic
//                                 index === 0 && "md:col-span-2 md:row-span-2", // Large primary card
//                                 index === 1 && "md:col-span-2 md:row-span-1", // Wide secondary card
//                                 index === 2 && "md:col-span-1 md:row-span-1", // Small square
//                                 index === 3 && "md:col-span-1 md:row-span-1"  // Small square
//                             )}
//                         >
//                             <div className="relative z-10 flex h-full flex-col justify-between">
//                                 <div>
//                                     <h3 className="text-2xl font-bold">{item.title}</h3>
//                                     <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//                                         {item.description}
//                                     </p>
//                                 </div>

//                                 {/* Modern Image Display */}
//                                 <div className="mt-4 self-end transition-transform duration-500 group-hover:scale-110">
//                                     <img
//                                         src={item.imgUrl}
//                                         alt={item.title}
//                                         className="h-32 w-32 object-contain"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Background Decoration for the card */}
//                             <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-brand/5 blur-3xl transition-colors group-hover:bg-brand/20" />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


import { client } from "@/app/sanity/lib/client";
import { aboutsQuery } from "@/app/sanity/lib/queries";
import { cn } from "@/lib/utils";

export default async function About() {
    const abouts = await client.fetch(aboutsQuery);

    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
                        I Know that <span className="text-brand bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Good Development</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 text-lg">
                        means Good Business
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-full md:h-[650px]">
                    {abouts.map((item: any, index: number) => (
                        <div
                            key={item._id}
                            className={cn(
                                "group relative overflow-hidden rounded-[2rem] p-8 transition-all duration-500",
                                "bg-zinc-900/40 backdrop-blur-xl border border-white/10 hover:border-brand/50",
                                "flex flex-col justify-between hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]",
                                index === 0 && "md:col-span-2 md:row-span-2",
                                index === 1 && "md:col-span-2 md:row-span-1",
                                index === 2 && "md:col-span-1 md:row-span-1",
                                index === 3 && "md:col-span-1 md:row-span-1"
                            )}
                        >
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-zinc-400 leading-relaxed text-sm lg:text-base">
                                    {item.description}
                                </p>
                            </div>

                            {/* Improved Image Integration */}
                            <div className="relative mt-8 flex justify-end">
                                <div className="absolute inset-0 bg-brand/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <img
                                    src={item.imgUrl}
                                    alt={item.title}
                                    className={cn(
                                        "relative z-10 object-contain transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3",
                                        index === 0 ? "h-48 w-48" : "h-32 w-32"
                                    )}
                                />
                            </div>

                            {/* Subtle Animated Border Effect */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand/10 rounded-[2rem] transition-colors duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}