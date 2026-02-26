import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { client } from "./sanity/lib/client";
import { testimonialsQuery, brandsQuery } from "./sanity/lib/queries";

export default async function Home() {
  const [testimonials, brands] = await Promise.all([
    client.fetch(testimonialsQuery),
    client.fetch(brandsQuery),
  ]);
  return (
    <main className="relative min-h-screen bg-white dark:bg-[#030712]">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Testimonials testimonials={testimonials} brands={brands} />
      <Footer />

    </main>
  );
}