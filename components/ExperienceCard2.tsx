import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function ExperienceCard2({}: Props) {
    const techStack = [
        { name: "Django", width: 32, height: 32 },
        { name: "Python", width: 32, height: 32 },
        { name: "Postman", width: 32, height: 32 },
        { name: "Git", width: 32, height: 32 },
        { name: "GitHub", width: 32, height: 32 },
        { name: "Jupyter", width: 32, height: 32 },
        { name: "Slack", width: 32, height: 32 },
        { name: "MySQL", width: 32, height: 32 },
    ];

    return (
        <article
            className="
        flex flex-col
        rounded-xl
        items-center
        w-full
        max-w-4xl
        mx-auto
        bg-[#292929]/90
        backdrop-blur-sm
        p-6
        md:p-8
        lg:p-10
        opacity-90
        hover:opacity-100
        transition-opacity
        duration-300
        border border-gray-800/50
        shadow-2xl
        h-[85vh]
        md:h-auto
        overflow-y-auto
        scrollbar-thin
        scrollbar-track-gray-800
        scrollbar-thumb-[#F7AB0A]/50
      "
        >
            {/* LOGO */}
            <motion.div
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-6"
            >
                <div className="relative">
                    <Image
                        src="/images/climateWavers.jpeg"
                        alt="Climate Wavers Logo"
                        width={160}
                        height={160}
                        className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-[#F7AB0A]/20"
                        priority
                    />
                </div>
            </motion.div>

            {/* CONTENT */}
            <div className="w-full px-0 md:px-2 space-y-4">
                <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-white">
                    Quality Assurance
                </h4>

                <p className="font-bold text-lg md:text-xl mt-2 text-center text-[#F7AB0A]">CLIMATE WAVERS</p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 my-4 justify-center">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className="relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 p-1 bg-gray-800/50 rounded-full hover:scale-110 transition-transform duration-200"
                        >
                            <div className="relative h-full w-full">
                                <Image
                                    className="rounded-full object-cover"
                                    src={`/images/${tech.name}.png`}
                                    alt={tech.name}
                                    width={tech.width}
                                    height={tech.height}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-sm md:text-base text-gray-400 mb-4 text-center">
                    🗓️ Started: 2024 - Ended: 2025
                </p>

                <ul className="space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg px-4 md:px-6">
                    <li className="flex items-start">
                        <span className="text-[#F7AB0A] mr-3">•</span>
                        <span>Led end-to-end testing of Django-based web applications.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#F7AB0A] mr-3">•</span>
                        <span>Ensured stability across key features including disaster alerts, user reports, and interactive dashboards.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#F7AB0A] mr-3">•</span>
                        <span>Designed and executed test plans for functional, regression, and user acceptance testing.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#F7AB0A] mr-3">•</span>
                        <span>Documented and tracked critical issues using Postman and GitHub issues.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#F7AB0A] mr-3">•</span>
                        <span>Created and maintained QA documentation and release validation reports.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#F7AB0A] mr-3">•</span>
                        <span>Contributed to successful Talan Hackathon demo and public launch.</span>
                    </li>
                </ul>
            </div>
        </article>
    );
}