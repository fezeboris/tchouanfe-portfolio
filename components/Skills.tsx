import { client } from "@/app/sanity/lib/client";
import { skillsQuery, experiencesQuery } from "@/app/sanity/lib/queries";
import { cn } from "@/lib/utils";

export default async function Skills() {
    const [skills, experiences] = await Promise.all([
        client.fetch(skillsQuery),
        client.fetch(experiencesQuery),
    ]);

    return (
        <section id="skills" className="py-24 px-6">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 text-white sm:text-6xl">
                    Skills & <span className="text-brand">Experience</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* LEFT: Skills Grid */}
                    <div className="flex flex-wrap justify-center gap-6 content-start">
                        {skills.map((skill: any) => (
                            <div
                                key={skill._id}
                                className="group flex flex-col items-center gap-3"
                            >
                                <div
                                    className="h-20 w-20 flex items-center justify-center rounded-2xl glass border border-white/10 transition-all duration-300 group-hover:border-brand/50 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                                    style={{ backgroundColor: skill.bgColor ? `${skill.bgColor}20` : '' }}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="h-10 w-10 object-contain filter grayscale group-hover:grayscale-0 transition-all"
                                    />
                                </div>
                                <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-200 transition-colors">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: Experience Timeline */}
                    <div className="space-y-12">
                        {experiences.map((exp: any) => (
                            <div key={exp._id} className="relative pl-8 border-l border-white/10">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-brand shadow-[0_0_10px_#6366f1]" />

                                <span className="text-sm font-bold text-brand uppercase tracking-widest">
                                    {exp.year}
                                </span>

                                <div className="mt-4 space-y-8">
                                    {exp.works?.map((work: any, idx: number) => (
                                        <div key={idx} className="group">
                                            <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors">
                                                {work.name}
                                            </h3>
                                            <p className="text-zinc-500 text-sm mb-2">{work.company}</p>
                                            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                                                {work.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}