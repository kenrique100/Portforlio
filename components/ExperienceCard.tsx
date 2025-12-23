import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
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
            <motion.img
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-24 h-24 md:w-28 md:h-28 xl:w-36 xl:h-36 rounded-full object-cover"
                src="/images/NASIA.png"
                alt="Company Logo"
            />

            {/* CONTENT */}
            <div className="mt-4 w-full px-2 md:px-6">
                <h4 className="text-xl md:text-2xl xl:text-3xl font-light">
                    Software Engineering / Full Stack Development Intern
                </h4>

                <p className="font-bold text-lg mt-1">NASIATECH</p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 my-3">
                    {[
                        "Spring",
                        "Java",
                        "MySQL",
                        "Selenium",
                        "Git",
                        "React",
                        "Jenkins",
                        "Docker",
                    ].map((tech) => (
                        <img
                            key={tech}
                            className="h-8 w-8 rounded-full"
                            src={`/images/${tech}.png`}
                            alt={tech}
                        />
                    ))}
                </div>

                <p className="text-sm text-gray-400 mb-3">
                    Started Work... – Ended...
                </p>

                <ul className="list-disc ml-5 space-y-2 text-sm md:text-base">
                    <li>Applied OOP and Agile software engineering principles.</li>
                    <li>Developed Java applications using Spring Framework.</li>
                    <li>Built RESTful web services and APIs.</li>
                    <li>Designed user interfaces with React and modern CSS.</li>
                    <li>Used Git and GitHub for version control.</li>
                    <li>Worked with relational databases and SQL.</li>
                    <li>Used DevOps tools including Maven, Jenkins, and Docker.</li>
                </ul>
            </div>
        </article>
    );
}
