import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function ExperienceCard3({}: Props) {
    const techStack = [
        { name: "JavaScript", width: 32, height: 32 },
        { name: "Python", width: 32, height: 32 },
        { name: "React", width: 32, height: 32 },
        { name: "PostgresSQL", width: 32, height: 32 },
        { name: "Git", width: 32, height: 32 },
        { name: "Vim", width: 32, height: 32 },
        { name: "GitHub", width: 32, height: 32 },
        { name: "GNU Emacs", width: 32, height: 32 },
    ];

    return (
        <article
            className="
        flex flex-col
        rounded-lg
        items-center
        flex-shrink-0
        w-[280px]
        sm:w-[340px]
        md:w-[420px]
        lg:w-[520px]
        xl:w-[700px]
        snap-center
        bg-[#292929]
        p-6
        md:p-8
        opacity-40
        hover:opacity-100
        transition-opacity
        duration-200
      "
        >
            {/* LOGO */}
            <motion.div
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <Image
                    src="/images/alx.jpg"
                    alt="ALX Africa Logo"
                    width={144}
                    height={144}
                    className="w-24 h-24 md:w-28 md:h-28 xl:w-36 xl:h-36 rounded-full object-cover"
                />
            </motion.div>

            {/* CONTENT */}
            <div className="mt-4 w-full px-2 md:px-6">
                <h4 className="text-xl md:text-2xl xl:text-3xl font-light">
                    ALX Software Engineering Program
                </h4>

                <p className="font-bold text-lg mt-1">ALX AFRICA</p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 my-3">
                    {techStack.map((tech) => (
                        <div key={tech.name} className="relative h-8 w-8">
                            <Image
                                className="rounded-full"
                                src={`/images/${tech.name}.png`}
                                alt={tech.name}
                                width={tech.width}
                                height={tech.height}
                            />
                        </div>
                    ))}
                </div>

                <p className="text-sm text-gray-400 mb-3">
                    2023 – 2024 (1 Year Training Period)
                </p>

                <ul className="list-disc ml-5 space-y-2 text-sm md:text-base">
                    <li>Gained hands-on expertise in both front-end and back-end technologies.</li>
                    <li>Learned programming languages, frameworks, databases, and APIs to build complete web applications.</li>
                    <li>Developed strong programming foundations, algorithmic thinking, and best practices.</li>
                    <li>Focused on writing clean, maintainable, and efficient code.</li>
                    <li>Built teamwork skills through peer reviews and group projects.</li>
                    <li>Applied learned concepts to real-world scenarios.</li>
                    <li>Prepared for professional software engineering roles.</li>
                </ul>
            </div>
        </article>
    );
}