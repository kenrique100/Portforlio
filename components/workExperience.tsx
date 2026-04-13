"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

type TechItem = {
    name: string;
    image: string;
};

type Experience = {
    id: number;
    logo: string;
    logoAlt: string;
    role: string;
    company: string;
    period: string;
    subtitle?: string;
    achievements: string[];
    techStack: TechItem[];
};

// ─── Data (from resume) ───────────────────────────────────────────────────────

const experiences: Experience[] = [
    {
        id: 1,
        logo: "/images/Akentech.png",
        logoAlt: "Cambridge & Divine Favour High School",
        role: "Computer Science & STEM Teacher",
        company: "Cambridge High School & DEBOS Bilingual High School",
        period: "September 2025 – Present",
        achievements: [
            "Deliver Computer Science instruction to students from Form 1 through Upper Sixth, covering programming fundamentals, algorithms, software concepts, and ICT literacy aligned with the national curriculum.",
            "Teach High School Physics, Applied Mechanics, and Mathematics for Mechanics, translating complex technical concepts into accessible lessons for diverse student levels.",
            "Provide specialized instruction in Industrial Computing to technical students, focusing on real-world applications such as automation systems, data processing, and computer-aided problem solving in industrial environments.",
            "Develop lesson plans, assessments, and practical exercises that bridge theoretical knowledge with real-world engineering and technology applications.",
            "Mentor students in problem-solving, logical thinking, and technical communication skills relevant to STEM career pathways.",
        ],
        techStack: [
            { name: "MySQL", image: "/images/MySQL.png" },
            { name: "Java", image: "/images/Java.png" },
            { name: "JavaScript", image: "/images/JavaScript.png" },
            { name: "Python", image: "/images/Python.png" },
            { name: "React", image: "/images/React.png" },
            { name: "Git", image: "/images/Git.png" },
            { name: "Microsoft Word", image: "/images/word.png" },
            { name: "Microsoft Access", image: "/images/access.png" },
            { name: "Microsoft PowerPoint", image: "/images/powerpoint.png" },
            { name: "Microsoft Publisher", image: "/images/publisher.png" },
            { name: "Microsoft Excel", image: "/images/excel.png" },
            { name: "Microsoft Visio", image: "/images/visio.png" },
        ],
    },
    {
        id: 2,
        logo: "/images/climateWavers.jpeg",
        logoAlt: "Climate Wavers",
        role: "Quality Assurance Engineer",
        company: "Climate Wavers",
        period: "June 2024 – March 2025",
        achievements: [
            "Led end-to-end QA for a Django-based disaster management platform, covering core modules including real-time alerts, user reporting, and AI-powered dashboards.",
            "Designed and executed functional, regression, and UAT test plans; identified and logged 50+ critical bugs via Postman and GitHub Issues, contributing to a stable public launch.",
            "Built and maintained QA documentation covering test cases, release validations, and bug tracking workflows, enabling the team to demo successfully at the Talan Hackathon.",
            "Collaborated with developers to reproduce and resolve high-priority defects within sprint cycles, shortening the average bug-fix turnaround time.",
        ],
        techStack: [
            { name: "Django", image: "/images/Django.png" },
            { name: "Python", image: "/images/Python.png" },
            { name: "Postman", image: "/images/Postman.png" },
            { name: "Git", image: "/images/Git.png" },
            { name: "GitHub", image: "/images/GitHub.png" },
            { name: "Jupyter", image: "/images/Jupyter.png" },
            { name: "Slack", image: "/images/Slack.png" },
            { name: "MySQL", image: "/images/MySQL.png" },
        ],
    },
    {
        id: 3,
        logo: "/images/alx.jpg",
        logoAlt: "ALX Africa",
        role: "ALX Software Engineering Program",
        company: "ALX Africa",
        period: "May 2023 – January 2024",
        subtitle: "1-Year Intensive Training",
        achievements: [
            "Completed an intensive 12-month, project-based Software Engineering program covering full-stack development, algorithms, system design, and professional engineering practices.",
            "Built and deployed multiple real-world projects using React, Node.js, Python, and databases, applying skills in RESTful API design, authentication, and cloud deployment.",
            "Participated in peer code reviews and collaborative team projects, reinforcing agile workflows, clean code standards, and engineering communication skills.",
            "Developed strong programming foundations, algorithmic thinking, and best practices focused on writing clean, maintainable, and efficient code.",
        ],
        techStack: [
            { name: "JavaScript", image: "/images/JavaScript.png" },
            { name: "Python", image: "/images/Python.png" },
            { name: "React", image: "/images/React.png" },
            { name: "PostgresSQL", image: "/images/PostgresSQL.png" },
            { name: "Git", image: "/images/Git.png" },
            { name: "GitHub", image: "/images/GitHub.png" },
            { name: "Vim", image: "/images/Vim.png" },
            { name: "GNUEmacs", image: "/images/GNUEmacs.png" },
        ],
    },
    {
        id: 4,
        logo: "/images/NASIA.png",
        logoAlt: "Nasia Technology PLC",
        role: "Software Engineer",
        company: "Nasia Technology PLC",
        period: "2020 – 2023",
        achievements: [
            "Designed and delivered full-stack web features using React, TypeScript, and Spring Boot, directly supporting product releases used by internal and external clients.",
            "Collaborated within an Agile team of designers, QA engineers, and product managers to ship bi-weekly releases, reducing time-to-deploy through improved CI/CD pipeline practices.",
            "Refactored legacy backend modules in Java, improving system response time and reducing reported bugs by an estimated 40% over six months.",
            "Maintained code quality across the team through Git pull request reviews, unit testing, and technical documentation aligned with best practices.",
        ],
        techStack: [
            { name: "Spring", image: "/images/Spring.png" },
            { name: "Java", image: "/images/Java.png" },
            { name: "React", image: "/images/React.png" },
            { name: "MySQL", image: "/images/MySQL.png" },
            { name: "Selenium", image: "/images/Selenium.png" },
            { name: "Git", image: "/images/Git.png" },
            { name: "Jenkins", image: "/images/Jenkins.png" },
            { name: "Docker", image: "/images/Docker.png" },
            { name: "ApacheKafka", image: "/images/ApacheKafka.png" },
            { name: "Postman", image: "/images/Postman.png" },
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

// ─── Tech Badge ───────────────────────────────────────────────────────────────

function TechBadge({ tech }: { tech: TechItem }) {
    const [err, setErr] = useState(false);
    if (err) return null;
    return (
        <div
            className="relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 p-1 bg-gray-800/50 rounded-full hover:scale-110 transition-transform duration-200 flex-shrink-0"
            title={tech.name}
        >
            <Image
                src={tech.image}
                alt={tech.name}
                width={48}
                height={48}
                className="rounded-full object-cover w-full h-full"
                onError={() => setErr(true)}
            />
        </div>
    );
}

// ─── Experience Card ──────────────────────────────────────────────────────────

function ExperienceCard({
                            exp,
                            offset,
                            onClick,
                            isMobile,
                        }: {
    exp: Experience;
    offset: number;
    onClick: () => void;
    isMobile: boolean;
}) {
    const variant = getCardVariant(offset, isMobile);
    const isActive = offset === 0;

    // Responsive dimensions — identical pattern to Certifications
    const cardWidth  = isMobile ? "88vw"             : "min(50vw, 496px)";
    const cardMargin = isMobile ? "-44vw"            : "calc(-1 * min(25vw, 248px))";
    const cardHeight = isMobile ? "min(82vh, 660px)" : "min(90vh, 750px)";

    return (
        <motion.article
            animate={variant}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            onClick={!isActive ? onClick : undefined}
            className="
                absolute top-10
                flex flex-col items-center
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

            {/* ── CIRCULAR LOGO (kept exactly as original ExperienceCard) ── */}
            <motion.div
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-shrink-0 pt-5 pb-2"
            >
                <Image
                    src={exp.logo}
                    alt={exp.logoAlt}
                    width={160}
                    height={160}
                    className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-[#F7AB0A]/20"
                    priority
                />
            </motion.div>

            {/* ── HEADER META ── */}
            <div className="text-center px-4 flex-shrink-0">
                <h4 className="text-sm md:text-base lg:text-lg font-semibold text-white leading-snug">
                    {exp.role}
                </h4>
                <p className="text-[#F7AB0A] font-bold text-xs md:text-sm mt-0.5">
                    {exp.company}
                </p>
                {exp.subtitle && (
                    <p className="text-gray-500 text-[10px] md:text-xs mt-0.5 italic">
                        {exp.subtitle}
                    </p>
                )}
                <p className="text-gray-400 text-[10px] md:text-xs mt-1">
                    🗓️ {exp.period}
                </p>
            </div>

            {/* ── TECH STACK ── */}
            {exp.techStack.length > 0 && (
                <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 px-4 mt-3 flex-shrink-0">
                    {exp.techStack.map((t) => (
                        <TechBadge key={t.name} tech={t} />
                    ))}
                </div>
            )}

            {/* ── SCROLLABLE ACHIEVEMENTS ── */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-[#F7AB0A]/50 w-full px-4 md:px-6 lg:px-8 mt-3 pb-2 min-h-0">
                <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-2 text-xs md:text-sm text-gray-300 leading-relaxed"
                        >
                            <span className="text-[#F7AB0A] mt-0.5 flex-shrink-0">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* ── BOTTOM PADDING ── */}
            <div className="flex-shrink-0 h-3" />
        </motion.article>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function WorkExperience() {
    const [active, setActive] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const isMobile = useIsMobile();
    const total = experiences.length;

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
            {/* TITLE */}
            <div className="text-center mb-4 md:mb-6 flex-shrink-0 px-4">
                <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl">
                    Experience
                </h3>
            </div>

            {/* CAROUSEL STAGE */}
            <div
                className="relative flex-1 min-h-0 flex items-start justify-center overflow-hidden select-none"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <AnimatePresence initial={false}>
                    {experiences.map((exp, i) => {
                        const offset = i - active;
                        if (Math.abs(offset) > 2) return null;
                        return (
                            <ExperienceCard
                                key={exp.id}
                                exp={exp}
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
                {experiences.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        aria-label={`Go to experience ${i + 1}`}
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
            <p className="text-center text-gray-600 text-[11px] pb-2 flex-shrink-0 animate-pulse">
                ← Swipe or tap side cards to navigate →
            </p>
        </motion.div>
    );
}