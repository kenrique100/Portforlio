import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'

type Props = {}

export default function Hero({}: Props) {
    const [text] = useTypewriter({
        words: [
            "Hi, The Name's Kenrique Ngwa",
            "Building-the-Future-with-Tech.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    })

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-4">
            <BackgroundCircles />

            <Image
                src="/images/kenrique.jpg"
                alt="Kenrique Ngwa"
                width={160}
                height={160}
                priority
                className="relative rounded-full h-32 w-32 md:h-40 md:w-40 object-cover z-20 animate-[bounce_3s_infinite]"
            />

            <div className="z-20 mt-6 space-y-4">
                <h2 className="text-xs md:text-sm uppercase text-gray-500 tracking-[10px]">
                    Software Engineer
                </h2>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                    <span>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className="pt-6 flex flex-wrap justify-center gap-2">
                    {['about', 'experience', 'skills', 'projects'].map(section => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className="heroButton"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}