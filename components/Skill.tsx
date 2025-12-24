import React, { useState } from 'react'
import { motion } from "framer-motion";

type SkillProps = {
    directionLeft?: boolean
    skillName: string
    proficiency: string
    iconSrc: string
}

function Skill({ directionLeft = false, skillName, proficiency, iconSrc }: SkillProps) {
    const [isTapped, setIsTapped] = useState(false);

    return (
        <div
            className="group relative flex cursor-pointer"
            onMouseEnter={() => setIsTapped(true)}
            onMouseLeave={() => setIsTapped(false)}
            onClick={() => setIsTapped(!isTapped)}
            onTouchStart={() => setIsTapped(true)}
            onTouchEnd={() => setTimeout(() => setIsTapped(false), 1000)}
        >
            <motion.img
                initial={{
                    x: directionLeft ? -100 : 100,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-full border border-gray-500 object-cover w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 filter transition duration-300 ease-in-out"
                src={iconSrc}
                alt={skillName}
                style={{
                    filter: isTapped ? 'grayscale(100%)' : 'none'
                }}
            />
            <div
                className="absolute transition duration-300 ease-in-out h-14 w-14 sm:h-16 sm:w-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:h-28 xl:w-28 rounded-full z-0"
                style={{
                    opacity: isTapped ? 0.8 : 0,
                    backgroundColor: isTapped ? 'white' : 'transparent'
                }}
            >
                <div className="flex flex-col items-center justify-center h-full p-1">
                    <p className="text-xs sm:text-sm md:text-base font-bold text-black opacity-100">{proficiency}</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-black mt-0.5 text-center px-0.5">{skillName}</p>
                </div>
            </div>
        </div>
    );
}

type Props = {}

function Skills({}: Props) {
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
        { name: "Kafka", proficiency: "70%", icon: "/images/ApacheKafka.png" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex relative flex-col text-center md:text-left max-w-[2000px] px-3 sm:px-4 md:px-10 min-h-screen justify-start mx-auto items-center pt-24"
        >

            {/* SECTION TITLE */}
            <h3 className="uppercase tracking-[12px] sm:tracking-[15px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl mb-4">
                Skills
            </h3>

            {/* DESKTOP SUBTITLE */}
            <p className="hidden md:block text-gray-500 text-xs sm:text-sm tracking-wide mb-10">
                Hover over a skill for current proficiency
            </p>

            {/* MOBILE SUBTITLE */}
            <p className="md:hidden text-gray-500 text-xs tracking-wide mb-10">
                Tap to see proficiency
            </p>

            {/* SKILLS GRID */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
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
        </motion.div>
    )
}

export default Skills