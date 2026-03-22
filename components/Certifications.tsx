"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type Certification = {
    id: number;
    image: string;
    link: string;
    title: string;
    organization: string;
    focusArea: string;
    description: string;
    year: string;
};

const certifications: Certification[] = [
    {
        id: 1,
        image: "/images/climateWavers.jpeg",
        link: "https://drive.google.com/file/d/1MhIh9iVO8AqCKLm_-7yVK3fkYmCi7uT6/view?usp=sharing",
        title: "Certificate of Excellence – Climate Wavers",
        organization: "Climate Wavers",
        focusArea: "Quality Assurance",
        description:
            "Awarded to Kenrique Ngwa on 20 December 2024 for dedication and demonstrated proficiency in quality assurance practices. Key Skills: Attention to detail, quality control, process evaluation, and performance consistency. Signed by Ismael Kiprop (CEO & Founder) and Tiffany Eribenne (COO).",
        year: "2024",
    },
    {
        id: 2,
        image: "/images/responsive web design.png",
        link: "https://www.freecodecamp.org/certification/kenrique/responsive-web-design",
        title: "Responsive Web Design",
        organization: "freeCodeCamp",
        focusArea: "Frontend Development",
        description:
            "Skills: HTML, CSS, Flexbox, CSS Grid, responsive layouts. Built mobile-friendly web pages and adaptive UI designs.",
        year: "2023",
    },
    {
        id: 3,
        image: "/images/QA.png",
        link: "https://www.freecodecamp.org/certification/kenrique/quality-assurance-v7",
        title: "Quality Assurance",
        organization: "freeCodeCamp",
        focusArea: "Software Testing & QA",
        description:
            "Skills: Unit testing, functional testing, debugging, test automation (Chai/Mocha). Developed and tested applications to ensure reliability and performance.",
        year: "2023",
    },
    {
        id: 4,
        image: "/images/information security and QA.png",
        link: "https://www.freecodecamp.org/certification/kenrique/information-security-and-quality-assurance",
        title: "Information Security and Quality Assurance",
        organization: "freeCodeCamp",
        focusArea: "Cybersecurity & QA",
        description:
            "Skills: Data protection, security best practices, penetration testing basics, secure coding. Implemented secure applications and tested for vulnerabilities.",
        year: "2023",
    },
    {
        id: 5,
        image: "/images/backend developement and APIs.png",
        link: "https://www.freecodecamp.org/certification/kenrique/back-end-development-and-apis",
        title: "Backend Development and APIs",
        organization: "freeCodeCamp",
        focusArea: "Backend Development",
        description:
            "Skills: Node.js, Express.js, REST APIs, databases (MongoDB). Built scalable APIs and server-side applications.",
        year: "2023",
    },
    {
        id: 6,
        image: "/images/data analysis with python.png",
        link: "https://www.freecodecamp.org/certification/kenrique/data-analysis-with-python-v7",
        title: "Data Analysis with Python",
        organization: "freeCodeCamp",
        focusArea: "Data Science",
        description:
            "Skills: Python, Pandas, NumPy, data cleaning, data manipulation. Analyzed datasets and extracted actionable insights.",
        year: "2023",
    },
    {
        id: 7,
        image: "/images/data visualization.png",
        link: "https://www.freecodecamp.org/certification/kenrique/data-visualization",
        title: "Data Visualization",
        organization: "freeCodeCamp",
        focusArea: "Data Presentation",
        description:
            "Skills: D3.js, charting techniques, visual storytelling. Created interactive and meaningful data visualizations.",
        year: "2023",
    },
    {
        id: 8,
        image: "/images/frontend developement libraries.png",
        link: "https://www.freecodecamp.org/certification/kenrique/front-end-development-libraries",
        title: "Frontend Development Libraries",
        organization: "freeCodeCamp",
        focusArea: "Advanced Frontend Development",
        description:
            "Skills: React, Redux, Bootstrap, Sass. Built dynamic, component-based web applications.",
        year: "2023",
    },
    {
        id: 9,
        image: "/images/javascript algorithms and data structures.png",
        link: "https://www.freecodecamp.org/certification/kenrique/javascript-algorithms-and-data-structures",
        title: "JavaScript Algorithms and Data Structures",
        organization: "freeCodeCamp",
        focusArea: "Core Programming & Problem Solving",
        description:
            "Skills: JavaScript fundamentals, ES6+, algorithms, data structures. Solved complex programming challenges and optimized code performance.",
        year: "2023",
    },
    {
        id: 10,
        image: "/images/full stack.png",
        link: "https://www.freecodecamp.org/certification/kenrique/full-stack",
        title: "Full Stack Development",
        organization: "freeCodeCamp",
        focusArea: "End-to-End Development",
        description:
            "Skills: Frontend + Backend integration, databases, APIs, deployment. Built complete web applications from concept to deployment.",
        year: "2023",
    },
    {
        id: 11,
        image: "/images/Rest API.png",
        link: "https://www.hackerrank.com/certificates/iframe/d7a01b216257",
        title: "REST API (Intermediate)",
        organization: "HackerRank",
        focusArea: "Backend Development",
        description:
            "Skills: RESTful API design, HTTP methods, request/response handling, API integration.",
        year: "2024",
    },
    {
        id: 12,
        image: "/images/java basics.png",
        link: "https://www.hackerrank.com/certificates/iframe/89fa4d77f349",
        title: "Java (Basic)",
        organization: "HackerRank",
        focusArea: "Programming Fundamentals",
        description:
            "Skills: Core Java syntax, object-oriented programming, data types, control structures. Solved coding challenges demonstrating foundational Java programming skills.",
        year: "2024",
    },
    {
        id: 13,
        image: "/images/Software Engineer.png",
        link: "https://www.hackerrank.com/certificates/d750b3c74854",
        title: "Software Engineer",
        organization: "HackerRank",
        focusArea: "Software Engineering",
        description:
            "Skills: Problem-solving, algorithms, system design basics, debugging, coding best practices. Validated overall software engineering competency through technical assessments.",
        year: "2025",
    },
    {
        id: 14,
        image: "/images/Problem Solving.png",
        link: "https://www.hackerrank.com/certificates/iframe/5b7ffdeb70cd",
        title: "Problem Solving (Intermediate)",
        organization: "HackerRank",
        focusArea: "Algorithms & Data Structures",
        description:
            "Skills: Algorithm design, problem-solving strategies, data structures, optimization techniques. Solved intermediate-level coding challenges involving logic building, efficiency, and complexity analysis.",
        year: "2024",
    },
];

type CardProps = {
    cert: Certification;
    index: number;
    total: number;
};

function CertificationCard({ cert, index, total }: CardProps) {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="w-screen flex-shrink-0 snap-center flex justify-center items-center px-4 md:px-8 py-4">
            <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="
                    flex flex-col
                    bg-[#292929]/90
                    backdrop-blur-sm
                    rounded-xl
                    border border-gray-800/50
                    shadow-2xl
                    w-full max-w-lg
                    overflow-hidden
                    max-h-[78vh]
                "
            >
                {/* CERTIFICATE IMAGE */}
                <div className="relative w-full h-36 md:h-44 bg-gray-800 flex-shrink-0 overflow-hidden">
                    {!imgError ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                            src={cert.image}
                            alt={cert.title}
                            onError={() => setImgError(true)}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                            <span className="text-4xl mb-2">🏆</span>
                            <span className="text-gray-400 text-sm text-center px-4">{cert.organization}</span>
                        </div>
                    )}
                    {/* Overlay badge */}
                    <div className="absolute top-2 right-2 bg-[#F7AB0A] text-black text-xs font-bold px-2 py-0.5 rounded-full">
                        {cert.year}
                    </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 p-4 md:p-5 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-[#F7AB0A]/50 min-h-0">
                    {/* Org + counter */}
                    <div className="flex items-center justify-between mb-2 flex-shrink-0">
                        <span className="text-[#F7AB0A] text-xs font-semibold uppercase tracking-wide">
                            {cert.organization}
                        </span>
                        <span className="text-gray-500 text-xs">
                            {index + 1} / {total}
                        </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-sm md:text-base font-bold text-white mb-1 leading-snug flex-shrink-0">
                        {cert.title}
                    </h4>

                    {/* Focus area */}
                    <p className="text-xs text-[#F7AB0A]/70 mb-2 flex-shrink-0">
                        📌 {cert.focusArea}
                    </p>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                        {cert.description}
                    </p>
                </div>

                {/* "CLICK HERE TO VIEW" BUTTON */}
                <div className="p-3 md:p-4 border-t border-gray-800/50 flex-shrink-0">
                    <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            block w-full text-center
                            bg-[#F7AB0A] hover:bg-[#F7AB0A]/80
                            text-black font-bold
                            py-2.5 px-4
                            rounded-md
                            transition-colors duration-200
                            text-sm
                        "
                    >
                        Click here to view
                    </a>
                </div>
            </motion.article>
        </div>
    );
}

export default function Certifications() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="h-full flex flex-col justify-start pt-16 md:pt-20"
        >
            {/* TITLE */}
            <div className="text-center mb-4 md:mb-6 flex-shrink-0 px-4">
                <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl">
                    Certifications
                </h3>
                <p className="text-[#F7AB0A] text-sm mt-1 font-semibold">
                    {certifications.length} Certifications Earned
                </p>
            </div>

            {/* HORIZONTAL SCROLL SLIDER */}
            <div className="flex overflow-x-auto snap-x snap-mandatory flex-1 min-h-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {certifications.map((cert, index) => (
                    <CertificationCard
                        key={cert.id}
                        cert={cert}
                        index={index}
                        total={certifications.length}
                    />
                ))}
            </div>

            {/* SCROLL HINT */}
            <p className="text-center text-gray-600 text-xs pb-2 flex-shrink-0 animate-pulse">
                ← Swipe to browse all certifications →
            </p>
        </motion.div>
    );
}
