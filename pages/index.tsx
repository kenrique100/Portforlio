import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/workExperience';
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Image from "next/image";

const Home: NextPage = () =>{
    const scrollToTop = () => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            <Head>
                <title>Kenrique portfolio</title>
            </Head>

            <Header />

            <section id="hero" className='snap-start'>
                <Hero />
            </section>

            <section id="about" className='snap-center'>
                <About />
            </section>

            <section id="experience" className="snap-center">
                <WorkExperience />
            </section>

            <section id="skills" className="snap-start">
                <Skills />
            </section>

            <section id="projects" className="snap-start">
                <Projects />
            </section>

            <section id="contact" className="snap-start">
                <ContactMe />
            </section>

            <footer className="sticky bottom-5 w-full">
                <button
                    onClick={scrollToTop}
                    className="w-full cursor-pointer flex items-center justify-center"
                >
                    <Image
                        className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                        src="/images/AKentech.png"
                        alt="Back to top"
                        width={40}
                        height={40}
                    />
                </button>
            </footer>
        </div>
    );
};

export default Home;