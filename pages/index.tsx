import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/workExperience';
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import Image from "next/dist/client/legacy/image";


const Home: NextPage = () =>{
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
        <Link href="#hero">
            <footer className="sticky bottom-5 w-full cursor-pointer">
                <div className="flex item-center justify-center">
                    <Image
                        className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 sursor-pointer"
                        src="/images/AKentech.png" alt=""/>
                </div>
            </footer>
        </Link>
    </div>
    
  );
};

export default Home;