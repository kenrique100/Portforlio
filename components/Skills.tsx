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
                {/* Skill 1: React */}
                <Skill
                    directionLeft={true}
                    skillName="React"
                    proficiency="85%"
                    iconSrc="/images/React.png"
                />

                {/* Skill 2: JavaScript */}
                <Skill
                    directionLeft={false}
                    skillName="JavaScript"
                    proficiency="90%"
                    iconSrc="/images/JavaScript.png"
                />

                {/* Skill 3: TypeScript */}
                <Skill
                    directionLeft={true}
                    skillName="OpenAPI"
                    proficiency="80%"
                    iconSrc="/images/OpenAPI.png"
                />

                {/* Skill 4: Java */}
                <Skill
                    directionLeft={false}
                    skillName="Java"
                    proficiency="85%"
                    iconSrc="/images/Java.png"
                />

                {/* Skill 5: Spring Boot */}
                <Skill
                    directionLeft={true}
                    skillName="Spring Boot"
                    proficiency="80%"
                    iconSrc="/images/Spring.png"
                />

                {/* Skill 6: Next.js */}
                <Skill
                    directionLeft={false}
                    skillName="Next.js"
                    proficiency="75%"
                    iconSrc="/images/Next.js.png"
                />

                {/* Skill 7: Node.js */}
                <Skill
                    directionLeft={true}
                    skillName="TailwindCSS"
                    proficiency="75%"
                    iconSrc="/images/TailwindCSS.png"
                />

                {/* Skill 8: MongoDB */}
                <Skill
                    directionLeft={false}
                    skillName="MongoDB"
                    proficiency="70%"
                    iconSrc="/images/MongoDB.png"
                />

                {/* Skill 9: Docker */}
                <Skill
                    directionLeft={true}
                    skillName="Docker"
                    proficiency="70%"
                    iconSrc="/images/Docker.png"
                />

                {/* Skill 10: Git */}
                <Skill
                    directionLeft={false}
                    skillName="Git"
                    proficiency="90%"
                    iconSrc="/images/Git.png"
                />

                {/* Skill 11: AWS */}
                <Skill
                    directionLeft={true}
                    skillName="AWS"
                    proficiency="65%"
                    iconSrc="/images/AWS.png"
                />

                {/* Skill 12: MySQL */}
                <Skill
                    directionLeft={false}
                    skillName="MySQL"
                    proficiency="80%"
                    iconSrc="/images/MySQL.png"
                />

                {/* Skill 13: PostgresSQL */}
                <Skill
                    directionLeft={true}
                    skillName="PostgresSQL"
                    proficiency="85%"
                    iconSrc="/images/PostgresSQL.png"
                />

                {/* Skill 14: Jenkins */}
                <Skill
                    directionLeft={false}
                    skillName="Jenkins"
                    proficiency="80%"
                    iconSrc="/images/Jenkins.png"
                />

                {/* Skill 15: Selenium */}
                <Skill
                    directionLeft={true}
                    skillName="Selenium"
                    proficiency="75%"
                    iconSrc="/images/Selenium.png"
                />

                {/* Skill 16: Kafka */}
                <Skill
                    directionLeft={false}
                    skillName="Kafka"
                    proficiency="70%"
                    iconSrc="/images/Apache Kafka.png"
                />
            </div>
        </motion.div>
    )
}

export default Skills