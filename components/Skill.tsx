import React from 'react'
import { motion } from "framer-motion";

type SkillProps = {
    directionLeft?: boolean
    skillName: string
    proficiency: string
    iconSrc: string
}

function Skill({ directionLeft = false, skillName, proficiency, iconSrc }: SkillProps) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
                src={iconSrc}
                alt={skillName}
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:h-24 xl:h-28 xl:w-28 rounded-full z-0">
                <div className="flex flex-col items-center justify-center h-full">
                    <p className="text-lg font-bold text-black opacity-100">{proficiency}</p>
                    <p className="text-xs text-black mt-1">{skillName}</p>
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
        { name: "Kafka", proficiency: "70%", icon: "/images/Apache Kafka.png" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Skills
            </h3>
            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                Hover over a skill for current proficiency
            </h3>

            <div className="grid grid-cols-4 gap-4 md:gap-5 mt-20">
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