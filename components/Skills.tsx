"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type SkillProps = {
    directionLeft?: boolean;
    skillName: string;
    proficiency: string;
    iconSrc: string;
};

function Skill({ directionLeft, skillName, proficiency, iconSrc }: SkillProps) {
    const [isTapped, setIsTapped] = useState(false);

    return (
        <div
            className="relative group cursor-pointer"
            onClick={() => setIsTapped(!isTapped)}
        >
            <motion.img
                initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                src={iconSrc}
                alt={skillName}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition-all duration-300"
            />

            {/* Overlay - Shows on hover (desktop) or tap (mobile) */}
            <div
                className={`
                    absolute inset-0 bg-white/90 backdrop-blur-sm rounded-full 
                    transition-all duration-300 flex flex-col items-center justify-center
                    ${isTapped ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                `}
            >
                <p className="text-black font-bold text-sm md:text-base">{proficiency}</p>
                <p className="text-black text-xs md:text-sm font-medium mt-0.5">{skillName}</p>
            </div>
        </div>
    );
}

export default function Skills() {
    const skillsData = [
        { name: "React", proficiency: "65%", icon: "/images/React.png" },
        { name: "JavaScript", proficiency: "80%", icon: "/images/JavaScript.png" },
        { name: "OpenAPI", proficiency: "80%", icon: "/images/OpenAPI.png" },
        { name: "Java", proficiency: "75%", icon: "/images/Java.png" },
        { name: "Spring Boot", proficiency: "75%", icon: "/images/Spring.png" },
        { name: "Next.js", proficiency: "70%", icon: "/images/Next.js.png" },
        { name: "TailwindCSS", proficiency: "70%", icon: "/images/TailwindCSS.png" },
        { name: "MongoDB", proficiency: "80%", icon: "/images/MongoDB.png" },
        { name: "Docker", proficiency: "70%", icon: "/images/Docker.png" },
        { name: "Git", proficiency: "90%", icon: "/images/Git.png" },
        { name: "AWS", proficiency: "50%", icon: "/images/AWS.png" },
        { name: "MySQL", proficiency: "85%", icon: "/images/MySQL.png" },
        { name: "PostgresSQL", proficiency: "85%", icon: "/images/PostgresSQL.png" },
        { name: "Jenkins", proficiency: "80%", icon: "/images/Jenkins.png" },
        { name: "Selenium", proficiency: "85%", icon: "/images/Selenium.png" },
        { name: "Kafka", proficiency: "70%", icon: "/images/ApacheKafka.png" },
        { name: "Microsoft Office", proficiency: "90%", icon: "/images/office.png" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="min-h-screen w-full flex flex-col items-center justify-start px-4 md:px-6 py-16 md:py-20"
        >
            {/* TITLE SECTION */}
            <div className="text-center mb-14 md:mb-40">
                <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl">
                    Skills
                </h3>

                {/* SUBTITLE */}
                <p className="text-gray-400 text-sm mt-4 hidden md:block">
                    Hover over a skill for current proficiency
                </p>
                <p className="text-gray-400 text-xs mt-4 md:hidden">
                    Tap a skill to see proficiency
                </p>
            </div>

            {/* SKILLS GRID */}
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 place-items-center">
                        {skillsData.map((skill, index) => (
                            <Skill
                                key={skill.name}
                                directionLeft={index % 2 === 0}
                                skillName={skill.name}
                                proficiency={skill.proficiency}
                                iconSrc={skill.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}