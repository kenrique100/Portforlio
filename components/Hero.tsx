import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Kenrique Ngwa",
            "Building-the-Future-with-Tech.tsx",
            "<ButLovesTOCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                className='relative rounded-full h-40 w-40 mx-auto object-cover animate-bounce'
                src="/images/kenrique.jpg"
                alt="Kenrique Ngwa"
                width={160}
                height={160}
                priority
            />

            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
                <h1 className='text-5xl lg:text-5xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className='pt-5'>
                    <button
                        onClick={() => scrollToSection('about')}
                        className='heroButton'
                    >
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection('experience')}
                        className='heroButton'
                    >
                        Experience
                    </button>
                    <button
                        onClick={() => scrollToSection('skills')}
                        className='heroButton'
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className='heroButton'
                    >
                        Projects
                    </button>
                </div>
            </div>
        </div>
    );
}