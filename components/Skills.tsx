import React from "react";
import { motion } from "framer-motion";

type SkillProps = {
    directionLeft?: boolean;
    skillName: string;
    proficiency: string;
    iconSrc: string;
};

function Skill({ directionLeft, skillName, proficiency, iconSrc }: SkillProps) {
    return (
        <div className="relative group cursor-pointer">
            <motion.img
                initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                src={iconSrc}
                alt={skillName}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border border-gray-500 object-cover group-hover:grayscale transition"
            />

            <div className="absolute inset-0 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center">
                <p className="text-black font-bold text-sm">{proficiency}</p>
                <p className="text-black text-xs">{skillName}</p>
            </div>
        </div>
    );
}

export default function Skills() {
    const skillsData = [
        { name: "React", proficiency: "85%", icon: "/images/React.png" },
        { name: "JavaScript", proficiency: "90%", icon: "/images/JavaScript.png" },
        { name: "OpenAPI", proficiency: "80%", icon: "/images/OpenAPI.png" },
        { name: "Java", proficiency: "85%", icon: "/images/Java.png" },
        { name: "Spring Boot", proficiency: "80%", icon: "/images/Spring.png" },
        { name: "Next.js", proficiency: "75%", icon: "/images/Next.js.png" },
        { name: "TailwindCSS", proficiency: "75%", icon: "/images/TailwindCSS.png" },
        { name: "MongoDB", proficiency: "70%", icon: "/images/MongoDB.png" },
        { name: "Docker", proficiency: "70%", icon: "/images/Docker.png" },
        { name: "Git", proficiency: "90%", icon: "/images/Git.png" },
        { name: "AWS", proficiency: "65%", icon: "/images/AWS.png" },
        { name: "MySQL", proficiency: "80%", icon: "/images/MySQL.png" },
        { name: "PostgresSQL", proficiency: "85%", icon: "/images/PostgresSQL.png" },
        { name: "Jenkins", proficiency: "80%", icon: "/images/Jenkins.png" },
        { name: "Selenium", proficiency: "75%", icon: "/images/Selenium.png" },
        { name: "ApacheKafka", proficiency: "70%", icon: "/images/ApacheKafka.png" },
    ];

    return (
        <div className="h-full flex flex-col items-center justify-start pt-16 md:pt-20 px-4 md:px-6 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-[#F7AB0A]/50">

            {/* TITLE */}
            <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-4">
                Skills
            </h3>

            {/* SUBTITLE */}
            <p className="text-gray-500 text-sm mb-12 hidden md:block">
                Hover over a skill for current proficiency
            </p>

            <p className="text-gray-500 text-xs mb-12 md:hidden">
                Tap to see proficiency
            </p>

            {/* GRID */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
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
    );
}
