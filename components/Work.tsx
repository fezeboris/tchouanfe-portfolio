import { client } from "@/app/sanity/lib/client";
import { worksQuery } from "@/app/sanity/lib/queries";
import WorkFilter from "./WorkFilter";


export default async function Work() {
    const works = await client.fetch(worksQuery);

    return (
        <section id="work" className="py-24 px-6 relative">
            <div className="container mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
                        My Creative <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Portfolio</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 text-lg">
                        A showcase of my recent digital craftsmanship
                    </p>
                </div>

                <WorkFilter initialWorks={works} />
            </div>
        </section>
    );
}