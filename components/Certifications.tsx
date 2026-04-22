"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TechItem = {
    name: string;
    image: string;
};

type Certification = {
    id: number;
    image: string;
    link: string;
    title: string;
    organization: string;
    focusArea: string;
    date: string;
    achievements: string[];
    techStack: TechItem[];
};

const certifications: Certification[] = [
    {
        id: 1,
        image: "/images/ClimateWavers.png",
        link: "https://drive.google.com/file/d/1MhIh9iVO8AqCKLm_-7yVK3fkYmCi7uT6/view?usp=sharing",
        title: "Certificate of Excellence",
        organization: "Climate Wavers",
        focusArea: "Quality Assurance",
        date: "20 December 2024",
        achievements: [
            "Recognized for dedication and proficiency in quality assurance",
            "Implemented testing methodologies and quality control processes",
            "Conducted performance evaluation using Django testing tools",
            "Validated API workflows and endpoints with Postman",
            "Maintained high performance standards across system modules",
            "Acted as a gatekeeper for production releases, reducing post-deployment bugs",
            "Collaborated with developers to reproduce edge cases, improving team efficiency",
        ],
        techStack: [
            { name: "Django", image: "/images/Django.png" },
            { name: "Python", image: "/images/Python.png" },
            { name: "Postman", image: "/images/Postman.png" },
            { name: "Jupyter", image: "/images/Jupyter.png" },
        ],
    },
    {
        id: 2,
        image: "/images/responsive web design.png",
        link: "https://www.freecodecamp.org/certification/kenrique/responsive-web-design",
        title: "Responsive Web Design",
        organization: "freeCodeCamp",
        focusArea: "Frontend Development",
        date: "2023",
        achievements: [
            "Built responsive, mobile-first web interfaces",
            "Applied Flexbox and CSS Grid for adaptive layouts",
            "Designed accessible and semantic HTML structures",
            "Implemented media queries for cross-device compatibility",
            "Learned accessibility-first design (ARIA roles, semantic HTML)",
            "Built a portfolio project that passed Google's mobile-friendly test",
        ],
        techStack: [
            { name: "JavaScript", image: "/images/JavaScript.png" },
        ],
    },
    {
        id: 3,
        image: "/images/javscript algorithm and data structures.png",
        link: "https://www.freecodecamp.org/certification/kenrique/javascript-algorithms-and-data-structures",
        title: "JavaScript Algorithms and Data Structures",
        organization: "freeCodeCamp",
        focusArea: "Programming & Problem Solving",
        date: "2023",
        achievements: [
            "Solved complex algorithmic challenges and optimized solutions",
            "Applied ES6+ JavaScript features across projects",
            "Implemented core data structures (stacks, queues, trees)",
            "Analyzed time and space complexity of algorithms",
            "Solved recursion, sorting, and search algorithm challenges",
            "Applied functional programming (map, filter, reduce) to real data sets",
        ],
        techStack: [
            { name: "JavaScript", image: "/images/JavaScript.png" },
        ],
    },
    {
        id: 4,
        image: "/images/frontend development libraries.png",
        link: "https://www.freecodecamp.org/certification/kenrique/front-end-development-libraries",
        title: "Frontend Development Libraries",
        organization: "freeCodeCamp",
        focusArea: "Advanced Frontend Development",
        date: "2023",
        achievements: [
            "Developed dynamic, component-based web applications",
            "Managed application state with Redux",
            "Styled responsive UIs using Bootstrap and Sass",
            "Built reusable React component libraries",
            "Built a markdown previewer and a drum machine using component lifecycle",
            "Styled consistently with Sass variables and Bootstrap utilities",
        ],
        techStack: [
            { name: "React", image: "/images/React.png" },
            { name: "JavaScript", image: "/images/JavaScript.png" },
        ],
    },
    {
        id: 5,
        image: "/images/backend developement and APIs.png",
        link: "https://www.freecodecamp.org/certification/kenrique/back-end-development-and-apis",
        title: "Backend Development and APIs",
        organization: "freeCodeCamp",
        focusArea: "Backend Development",
        date: "2023",
        achievements: [
            "Built scalable APIs and server-side applications",
            "Designed RESTful endpoints with Express.js",
            "Integrated MongoDB for data persistence",
            "Handled authentication and middleware patterns",
            "Created a timestamp microservice and a URL shortener",
            "Used middleware for logging, authentication, and error handling",
        ],
        techStack: [
            { name: "NodeJS", image: "/images/NodeJS.png" },
            { name: "MongoDB", image: "/images/MongoDB.png" },
            { name: "OpenAPI", image: "/images/OpenAPI.png" },
        ],
    },
    {
        id: 6,
        image: "/images/QA.png",
        link: "https://www.freecodecamp.org/certification/kenrique/quality-assurance-v7",
        title: "Quality Assurance",
        organization: "freeCodeCamp",
        focusArea: "Software Testing",
        date: "2023",
        achievements: [
            "Implemented automated tests and ensured application reliability",
            "Written unit and integration tests using Chai and Mocha",
            "Debugged and resolved application defects systematically",
            "Validated functional requirements through structured test cases",
            "Wrote Chai + Mocha tests for async and sync functions",
            "Simulated user workflows with functional testing",
        ],
        techStack: [
            { name: "NodeJS", image: "/images/NodeJS.png" },
            { name: "MongoDB", image: "/images/MongoDB.png" },
            { name: "OpenAPI", image: "/images/OpenAPI.png" },
        ],
    },
    {
        id: 7,
        image: "/images/information security and QA.png",
        link: "https://www.freecodecamp.org/certification/kenrique/information-security-and-quality-assurance",
        title: "Information Security and Quality Assurance",
        organization: "freeCodeCamp",
        focusArea: "Cybersecurity & QA",
        date: "2023",
        achievements: [
            "Developed secure applications and tested for vulnerabilities",
            "Applied Helmet.js to harden HTTP headers",
            "Implemented password hashing with BCrypt",
            "Conducted penetration testing and security audits",
            "Implemented rate limiting and input sanitization",
            "Used Helmet.js and BCrypt in a live anonymous-message board project",
        ],
        techStack: [
            { name: "NodeJS", image: "/images/NodeJS.png" },
            { name: "MongoDB", image: "/images/MongoDB.png" },
            { name: "OpenAPI", image: "/images/OpenAPI.png" },
        ],
    },
    {
        id: 8,
        image: "/images/data analysis with python.png",
        link: "https://www.freecodecamp.org/certification/kenrique/data-analysis-with-python-v7",
        title: "Data Analysis with Python",
        organization: "freeCodeCamp",
        focusArea: "Data Science",
        date: "2024",
        achievements: [
            "Performed data cleaning, analysis, and insight generation",
            "Manipulated datasets using Pandas and NumPy",
            "Produced summary statistics and exploratory reports",
            "Identified trends and patterns from structured data",
            "Performed demographic and medical data analysis (mean, variance, correlation)",
            "Automated data-cleaning scripts for repeatable reports",
        ],
        techStack: [
            { name: "Python", image: "/images/Python.png" },
        ],
    },
    {
        id: 9,
        image: "/images/data visualization.png",
        link: "https://www.freecodecamp.org/certification/kenrique/data-visualization",
        title: "Data Visualization",
        organization: "freeCodeCamp",
        focusArea: "Data Visualization",
        date: "2023",
        achievements: [
            "Built interactive and visually compelling data dashboards",
            "Created bar, scatter, and heat-map charts using D3.js",
            "Bound live data to SVG elements for dynamic updates",
            "Applied visual storytelling principles to present insights",
            "Built a bar chart, scatter plot, and heatmap using D3.js",
            "Bound live JSON data to SVG elements for real-time updates",
        ],
        techStack: [
            { name: "JavaScript", image: "/images/JavaScript.png" },
            { name: "MongoDB", image: "/images/MongoDB.png" },
            { name: "OpenAPI", image: "/images/OpenAPI.png" },
        ],
    },
    {
        id: 10,
        image: "/images/Full stack.png",
        link: "https://www.freecodecamp.org/certification/kenrique/full-stack",
        title: "Full Stack Development",
        organization: "freeCodeCamp",
        focusArea: "Full Stack Engineering",
        date: "2023",
        achievements: [
            "Developed complete web applications from frontend to backend",
            "Integrated React frontends with Node.js/Express backends",
            "Managed data storage and retrieval with MongoDB",
            "Deployed full-stack applications end-to-end",
            "Integrated React frontend with Node/Express backend and MongoDB",
            "Managed environment variables, CORS, and deployment configs",
        ],
        techStack: [
            { name: "React", image: "/images/React.png" },
            { name: "NodeJS", image: "/images/NodeJS.png" },
            { name: "MongoDB", image: "/images/MongoDB.png" },
            { name: "Python", image: "/images/Python.png" },
        ],
    },
    {
        id: 11,
        image: "/images/Rest API.png",
        link: "https://www.hackerrank.com/certificates/iframe/d7a01b216257",
        title: "REST API (Intermediate)",
        organization: "HackerRank",
        focusArea: "Backend Development",
        date: "2024",
        achievements: [
            "Designed and consumed RESTful APIs following best practices",
            "Handled HTTP methods, status codes, and request/response cycles",
            "Parsed and manipulated JSON payloads",
            "Integrated third-party APIs within Node.js applications",
            "Handled pagination, filtering, and error responses",
            "Consumed third-party APIs inside Node.js with async/await",
        ],
        techStack: [
            { name: "OpenAPI", image: "/images/OpenAPI.png" },
            { name: "Java", image: "/images/Java.png" },
        ],
    },
    {
        id: 12,
        image: "/images/java basics.png",
        link: "https://www.hackerrank.com/certificates/iframe/89fa4d77f349",
        title: "Java (Basic)",
        organization: "HackerRank",
        focusArea: "Programming Fundamentals",
        date: "2024",
        achievements: [
            "Demonstrated understanding of core Java and OOP principles",
            "Applied classes, inheritance, and interfaces effectively",
            "Worked with Java data types, control flow, and exceptions",
            "Solved foundational coding challenges with clean Java code",
            "Mastered static methods, access modifiers, and constructors",
            "Solved problems involving inheritance and polymorphism",
        ],
        techStack: [
            { name: "Java", image: "/images/Java.png" },
        ],
    },
    {
        id: 13,
        image: "/images/Problem Solving.png",
        link: "https://www.hackerrank.com/certificates/iframe/5b7ffdeb70cd",
        title: "Problem Solving (Intermediate)",
        organization: "HackerRank",
        focusArea: "Algorithms & Data Structures",
        date: "2024",
        achievements: [
            "Solved intermediate-level algorithmic challenges with optimized solutions",
            "Implemented data structures including graphs, heaps, and tries",
            "Analyzed problem constraints to select optimal approaches",
            "Applied dynamic programming and greedy strategies",
            "Implemented BFS/DFS, heaps, and recursion with memoization",
            "Reduced time complexity from O(n²) to O(n log n) in sorting challenges",
        ],
        techStack: [
            { name: "JavaScript", image: "/images/JavaScript.png" },
            { name: "Java", image: "/images/Java.png" },
        ],
    },
    {
        id: 14,
        image: "/images/Software Engineer.png",
        link: "https://www.hackerrank.com/certificates/d750b3c74854",
        title: "Software Engineer",
        organization: "HackerRank",
        focusArea: "Software Engineering",
        date: "2025",
        achievements: [
            "Validated end-to-end software engineering and problem-solving skills",
            "Demonstrated algorithm design and system debugging competency",
            "Applied coding best practices and clean code principles",
            "Passed technical assessments covering multiple engineering domains",
            "Passed a multi-domain assessment (algorithms, debugging, logic)",
            "Demonstrated production-ready coding under timed conditions",
        ],
        techStack: [
            { name: "Java", image: "/images/Java.png" },
        ],
    },
];

// ─── Responsive hook ──────────────────────────────────────────────────────────

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
}

// ─── Stacked Carousel ────────────────────────────────────────────────────────

function getCardVariant(offset: number, isMobile: boolean) {
    const abs = Math.abs(offset);
    if (abs > 2) {
        return { x: offset > 0 ? "160%" : "-160%", scale: 0.6, opacity: 0, zIndex: 0 };
    }
    const xStep = isMobile ? 90 : 68;
    const x = offset * xStep;
    const scale = 1 - abs * 0.13;
    const opacity = 1 - abs * 0.42;
    const zIndex = 10 - abs * 3;
    return { x: `${x}%`, scale, opacity, zIndex };
}

function TechBadge({ tech }: { tech: TechItem }) {
    const [err, setErr] = useState(false);
    if (err) return null;
    return (
        <div
            className="relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 p-1 bg-gray-800/50 rounded-full hover:scale-110 transition-transform duration-200 flex-shrink-0"
            title={tech.name}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={tech.image}
                alt={tech.name}
                onError={() => setErr(true)}
                className="w-full h-full object-contain rounded-full"
            />
        </div>
    );
}

function CertCard({
                      cert,
                      offset,
                      onClick,
                      isMobile,
                  }: {
    cert: Certification;
    offset: number;
    onClick: () => void;
    isMobile: boolean;
}) {
    const [imgError, setImgError] = useState(false);
    const variant = getCardVariant(offset, isMobile);
    const isActive = offset === 0;

    const cardWidth = isMobile ? "88vw" : "min(50vw, 496px)";
    const cardMargin = isMobile ? "-44vw" : "calc(-1 * min(25vw, 248px))";
    const cardHeight = isMobile ? "min(82vh, 660px)" : "min(90vh, 750px)";

    return (
        <motion.article
            animate={variant}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            onClick={!isActive ? onClick : undefined}
            className="
                absolute top-10
                flex flex-col
                bg-[#292929]/90
                backdrop-blur-sm
                rounded-xl
                border border-gray-800/50
                shadow-2xl
                overflow-hidden
                cursor-pointer
                opacity-90 hover:opacity-100
                transition-opacity duration-300
            "
            style={{
                width: cardWidth,
                height: cardHeight,
                left: "50%",
                marginLeft: cardMargin,
                pointerEvents: isActive ? "auto" : "all",
            }}
        >
            {isActive && (
                <div className="absolute inset-0 rounded-xl ring-2 ring-[#F7AB0A]/40 pointer-events-none z-10" />
            )}

            {/* CERTIFICATE IMAGE - Fixed height with proper object containment */}
            <div className="relative w-full h-48 sm:h-52 md:h-64 lg:h-72 bg-gray-900 flex-shrink-0 overflow-hidden rounded-t-xl">
                {!imgError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={cert.image}
                        alt={cert.title}
                        onError={() => setImgError(true)}
                        className="w-full h-full object-contain p-2"
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                        <span className="text-5xl mb-2">📜</span>
                        <span className="text-gray-400 text-sm text-center px-4">
                            {cert.organization}
                        </span>
                    </div>
                )}
                <div className="absolute top-3 right-3 bg-[#F7AB0A] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
                    {cert.date}
                </div>
            </div>

            {/* SCROLLABLE CONTENT */}
            <div className="flex flex-col flex-1 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-[#F7AB0A]/50 px-4 md:px-8 lg:px-10 pt-3 pb-2 min-h-0">
                <span className="text-[#F7AB0A] text-[10px] font-bold uppercase tracking-widest mb-1">
                    {cert.organization}
                </span>

                <h4 className="text-sm md:text-base lg:text-lg font-semibold text-white leading-snug mb-1">
                    {cert.title}
                </h4>

                <p className="text-xs md:text-sm text-[#F7AB0A]/60 mb-2">
                    {cert.focusArea}
                </p>

                {cert.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 md:gap-3 mb-2">
                        {cert.techStack.map((t) => (
                            <TechBadge key={t.name} tech={t} />
                        ))}
                    </div>
                )}

                <ul className="space-y-1.5 mb-2">
                    {cert.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-300 leading-relaxed">
                            <span className="text-[#F7AB0A] mt-0.5 flex-shrink-0">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* VIEW BUTTON */}
            <div className="px-4 md:px-8 lg:px-10 py-3 border-t border-gray-700/30 flex-shrink-0 bg-[#292929]/90">
                <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="
                        block w-full text-center
                        bg-[#F7AB0A] hover:bg-[#F7AB0A]/80
                        text-black font-bold
                        py-2 px-4 rounded-xl
                        transition-colors duration-200
                        text-xs md:text-sm tracking-wide
                    "
                >
                    View Certificate 👁️
                </a>
            </div>
        </motion.article>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function Certifications() {
    const [active, setActive] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const isMobile = useIsMobile();
    const total = certifications.length;

    const prev = useCallback(() => setActive((i) => Math.max(0, i - 1)), []);
    const next = useCallback(() => setActive((i) => Math.min(total - 1, i + 1)), [total]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [prev, next]);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
        touchStartX.current = null;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="h-full flex flex-col justify-start pt-16 md:pt-20"
        >
            {/* TITLE - Certificate count removed */}
            <div className="text-center mb-4 md:mb-6 flex-shrink-0 px-4">
                <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl">
                    Certifications
                </h3>
            </div>

            {/* CAROUSEL STAGE */}
            <div
                className="relative flex-1 min-h-0 flex items-start justify-center overflow-hidden select-none"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <AnimatePresence initial={false}>
                    {certifications.map((cert, i) => {
                        const offset = i - active;
                        if (Math.abs(offset) > 2) return null;
                        return (
                            <CertCard
                                key={cert.id}
                                cert={cert}
                                offset={offset}
                                onClick={() => setActive(i)}
                                isMobile={isMobile}
                            />
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* DOT INDICATORS */}
            <div className="flex justify-center gap-1.5 py-3 md:py-4 flex-shrink-0">
                {certifications.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        aria-label={`Go to certification ${i + 1}`}
                        className={`
                            rounded-full transition-all duration-300
                            ${i === active
                            ? "w-5 h-2 bg-[#F7AB0A]"
                            : "w-2 h-2 bg-gray-600 hover:bg-gray-400"}
                        `}
                    />
                ))}
            </div>

            {/* SWIPE HINT */}
            <p className="text-center text-gray-600 text-[11px] pb-8 flex-shrink-0 animate-pulse">
                ← Swipe or tap side cards to navigate →
            </p>
        </motion.div>
    );
}