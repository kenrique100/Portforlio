import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/workExperience";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll snap-y snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">

            <Head>
                <title>Kenrique Portfolio</title>
            </Head>

            <Header />

            <section id="hero" className="snap-start h-screen">
                <Hero />
            </section>

            <section id="about" className="snap-start h-screen">
                <About />
            </section>

            <section id="experience" className="snap-start h-screen">
                <WorkExperience />
            </section>

            <section id="certifications" className="snap-start h-screen">
                <Certifications />
            </section>

            <section id="skills" className="snap-start h-screen">
                <Skills />
            </section>

            <section id="projects" className="snap-start h-screen">
                <Projects />
            </section>

            <section id="contact" className="snap-start h-screen">
                <ContactMe />
            </section>

            <footer className="sticky bottom-5 w-full flex justify-center">
                <Image
                    src="/images/AKentech.png"
                    alt="Back to top"
                    width={40}
                    height={40}
                    className="rounded-full grayscale hover:grayscale-0 cursor-pointer"
                />
            </footer>
        </div>
    );
};

export default Home;
