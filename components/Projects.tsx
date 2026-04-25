"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Project = {
    title: string;
    subtitle: string;
    bullets: string[];
    tech: string[];
    siteUrl?: string;
    githubUrl?: string;
    images: string[];
};

const projects: Project[] = [
    {
        title: "Farmers Wallet Web Application",
        subtitle: "Production · Live Platform",
        bullets: [
            "Architected a cloud-native financial management platform currently serving real farming operations in production, handling wallet tracking and multi-party transactions.",
            "Engineered multi-channel data ingestion via web forms, Excel uploads, and email pipelines integrated with real-time pond management and feeding schedule modules.",
            "Built a dynamic feed formulation engine that calculates ingredient ratios on the fly based on live stock availability and nutritional targets.",
            "Deployed on AWS with Kubernetes orchestration and Apache Kafka event streaming for resilient, scalable data flow across all farm modules.",
        ],
        tech: ["Java Spring Boot", "Apache Kafka", "Kubernetes", "AWS", "React", "Grafana", "Prometheus"],
        siteUrl: "https://manage.kombe-farms.com",
        githubUrl: "https://github.com",
        images: ["/images/kombe.png", "/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png", "/images/5.png", "/images/6.png", "/images/7.png", "/images/8.png"],
    },
    {
        title: "CNERSH Government Web Platform",
        subtitle: "Cameroon National Health Authority",
        bullets: [
            "Engineered the official web platform for Cameroon's National Ethics Committee for Human Health Research, serving institutional and public users nationwide.",
            "Delivered secure multi-stage ethical review pipelines and research submission workflows compliant with national health authority standards.",
            "Built public information access modules with role-based access control, ensuring data integrity and regulatory compliance at scale.",
            "Architected for high availability and horizontal scalability to support concurrent institutional and government-facing workloads.",
        ],
        tech: ["Java Spring Boot", "React", "REST API", "PostgreSQL", "AWS"],
        images: ["/images/kombe.png", "/images/kombe.png"],
    },
    {
        title: "Microservice E-Commerce Platform",
        subtitle: "Distributed Systems Architecture",
        bullets: [
            "Designed and shipped a production-grade distributed e-commerce system decomposed into independently deployable services product catalog, orders, payments, and user identity.",
            "Implemented API gateway routing with inter-service messaging and circuit-breaker patterns to guarantee resilience and service isolation under load.",
            "Each microservice owns its data store, eliminating tight coupling and enabling independent scaling and deployment cadences.",
            "Containerized all services with Docker and configured CI/CD pipelines for automated testing and zero-downtime deployments.",
        ],
        tech: ["Java Spring Boot", "Microservices", "API Gateway", "Docker", "Kafka", "Grafana", "Prometheus", "Redis", "Kubernetes"],
        githubUrl: "https://github.com",
        images: ["/images/kombe.png", "/images/kombe.png"],
    },
    {
        title: "Fish Feed Formulation Engine",
        subtitle: "AgriTech · Scientific Computation",
        bullets: [
            "Built a precision feed calculation engine using the Pearson Square Method, computing exact ingredient quantities (kg) across 14 inputs including protein sources, minerals, and supplements.",
            "Calibrated formulations to target crude protein values, fish population, water temperature, and growth objectives across all three fish development stages.",
            "Generated stage-specific feeding schedules with daily intake plans and a full procurement forecast covering total feed volume and days-to-target-weight.",
            "Exposed results via a REST API consumed by a React frontend, enabling farmers to plan feed procurement accurately and reduce waste.",
        ],
        tech: ["Java Spring Boot", "React", "REST API", "Scientific Algorithms"],
        githubUrl: "https://github.com",
        images: ["/images/kombe.png", "/images/kombe.png"],
    },
    {
        title: "WSN - Wireless Sensor Network System",
        subtitle: "IoT · Real-Time Data Infrastructure",
        bullets: [
            "Architected a real-time IoT data infrastructure for wireless sensor node networks, handling continuous telemetry ingestion at high throughput.",
            "Designed extensible data ingestion pipelines that allow new sensor types to be onboarded without structural changes to the core processing layer.",
            "Built dashboard visualizations with configurable thresholds for real-time anomaly detection and alerting across sensor fleets.",
            "Decoupled frontend and backend repositories for independent deployability and team scalability.",
        ],
        tech: ["Java Spring Boot", "IoT", "Real-Time Streaming", "React", "PostgreSQL"],
        githubUrl: "https://github.com",
        images: ["/images/kombe.png", "/images/kombe.png"],
    },
    {
        title: "Kombe Farms EMS",
        subtitle: "Enterprise HR Platform",
        bullets: [
            "Delivered a full-stack Employee Management System with a clean decoupled architecture React/Next.js frontend consuming a Spring Boot REST API backend.",
            "Implemented core HR modules: employee records, role-based access control, and multi-stage administrative approval workflows.",
            "Architected the API layer with versioning and extension points, enabling future payroll and attendance modules to integrate without breaking existing contracts.",
            "Built a clean, responsive UI with component-level state management and optimistic UI patterns for a smooth administrative experience.",
        ],
        tech: ["Java Spring Boot", "React", "Next.js", "REST API", "PostgreSQL"],
        githubUrl: "https://github.com",
        images: ["/images/kombe.png", "/images/kombe.png"],
    },
    {
        title: "Automated School Report Card System",
        subtitle: "Offline Desktop Application (.exe)",
        bullets: [
            "Developed a cross-platform offline desktop application that automates the full student report card generation lifecycle for school administrators.",
            "Implemented an automated grade aggregation engine that eliminates manual computation errors across multiple subjects and grading periods.",
            "Built student record management with persistent local storage and publication-quality printable output generation.",
            "Reduced end-of-term administrative processing time from days to minutes, delivering measurable operational impact for school staff.",
        ],
        tech: ["Java Spring Boot", "Desktop App", "Report Generation", "Data Management"],
        githubUrl: "https://github.com",
        images: ["/images/kombe.png", "/images/kombe.png"],
    },
];

// ── Carousel Modal ─────────────────────────────────────────────────────────────
function CarouselModal({
                           images,
                           title,
                           onClose,
                       }: {
    images: string[];
    title: string;
    onClose: () => void;
}) {
    const [current, setCurrent] = useState(0);
    const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
    const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose, prev, next]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
            <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-[95vw] md:max-w-[90vw] lg:max-w-5xl bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-2xl mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/10">
                    <p className="text-white font-semibold text-sm md:text-base truncate pr-4">{title}</p>
                    <div className="flex items-center gap-3 shrink-0">
                        <span className="text-gray-400 text-xs md:text-sm">{current + 1} / {images.length}</span>
                        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Close">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="relative bg-[#0a0a0a] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.25 }}
                            className="absolute inset-0 flex items-center justify-center px-8 md:px-16"
                        >
                            <Image
                                src={images[current]}
                                alt={`${title} screenshot ${current + 1}`}
                                width={1200}
                                height={750}
                                className="max-w-full max-h-full object-contain rounded-lg drop-shadow-xl"
                            />
                        </motion.div>
                    </AnimatePresence>
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prev}
                                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-black/70 border border-white/20 text-white hover:border-[#F7AB0A] hover:text-[#F7AB0A] transition-all z-10"
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-black/70 border border-white/20 text-white hover:border-[#F7AB0A] hover:text-[#F7AB0A] transition-all z-10"
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>
                {images.length > 1 && (
                    <div className="flex justify-center gap-2 py-3">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${idx === current ? "w-6 md:w-8 bg-[#F7AB0A]" : "w-1.5 md:w-2 bg-gray-600 hover:bg-gray-400"}`}
                            />
                        ))}
                    </div>
                )}
            </motion.div>
            <div className="absolute inset-0 -z-10" onClick={onClose} />
        </div>
    );
}

// ── Main Projects Component ── Fully Responsive ──
export default function Projects() {
    const [modalProject, setModalProject] = useState<Project | null>(null);

    return (
        <>
            {modalProject && (
                <CarouselModal
                    images={modalProject.images}
                    title={modalProject.title}
                    onClose={() => setModalProject(null)}
                />
            )}

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="relative h-screen flex flex-col justify-start max-w-full overflow-hidden bg-[rgb(36,36,36)]"
            >
                {/* SECTION TITLE - moved down with more padding-top */}
                <div className="flex-shrink-0 z-20 px-4 sm:px-6 lg:px-8 text-center pt-10 sm:pt-12 md:pt-14 lg:pt-16">
                    <h3 className="uppercase tracking-[12px] sm:tracking-[15px] md:tracking-[18px] lg:tracking-[20px] text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl">
                        Projects
                    </h3>
                    <p className="text-gray-600 text-[10px] sm:text-xs mt-2 mb-3 tracking-widest uppercase">
                        Scroll to explore · {projects.length} projects
                    </p>
                </div>

                {/* SLIDER - Responsive layout */}
                <div className="relative z-20 flex-1 flex overflow-x-auto snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 min-h-0">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="
                                w-screen flex-shrink-0 snap-center
                                flex flex-col md:flex-row
                                items-start md:items-center
                                overflow-y-auto
                                scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-[#F7AB0A]/40
                                px-4 sm:px-6 md:px-8 lg:px-12
                                py-4 sm:py-6 md:py-8
                                gap-4 sm:gap-6 md:gap-8
                            "
                        >
                            {/* IMAGE */}
                            <div className="w-full md:w-2/5 lg:w-1/2 flex items-center justify-center md:pl-4 lg:pl-8 xl:pl-12 md:pr-2 lg:pr-4 shrink-0">
                                <motion.div
                                    initial={{ x: -60, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1.1 }}
                                    viewport={{ once: true }}
                                    className="w-full flex justify-center"
                                >
                                    <Image
                                        src={project.images[0]}
                                        alt={`${project.title} screenshot`}
                                        width={980}
                                        height={650}
                                        priority={i === 0}
                                        className="
                                            w-full
                                            max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[420px] xl:max-w-[500px]
                                            h-auto object-contain drop-shadow-2xl rounded-xl
                                        "
                                    />
                                </motion.div>
                            </div>

                            {/* TEXT */}
                            <motion.div
                                initial={{ x: 60, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.15 }}
                                viewport={{ once: true }}
                                className="
                                    w-full md:w-3/5 lg:w-1/2
                                    flex flex-col justify-center
                                    md:pr-6 lg:pr-8 xl:pr-12 md:pl-2 lg:pl-4
                                    text-center md:text-left
                                "
                            >
                                {/* Counter + subtitle */}
                                <p className="text-[#F7AB0A] text-[10px] sm:text-xs tracking-[3px] uppercase mb-1.5 font-medium">
                                    {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                                    &nbsp;·&nbsp;{project.subtitle}
                                </p>

                                {/* Title */}
                                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-tight mb-2 sm:mb-3">
                                    <span className="underline decoration-[#F7AB0A]/50">{project.title}</span>
                                </h4>

                                {/* Bullet list */}
                                <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-left max-w-2xl mx-auto md:mx-0">
                                    {project.bullets.map((b, bi) => (
                                        <li key={bi} className="flex items-start gap-2">
                                            <span className="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#F7AB0A]" />
                                            <span className="text-gray-300 text-[11px] sm:text-xs md:text-sm leading-relaxed">{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech pills */}
                                <div className="flex flex-wrap justify-center md:justify-start gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[9px] sm:text-[10px] md:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#F7AB0A]/40 text-[#F7AB0A]/80 bg-[#F7AB0A]/5 tracking-wide"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-600 text-gray-300 hover:border-[#F7AB0A] hover:text-[#F7AB0A] transition-all duration-300 rounded-full text-[10px] sm:text-xs font-medium hover:bg-[#F7AB0A]/5"
                                        >
                                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                            GitHub
                                        </a>
                                    )}

                                    <button
                                        onClick={() => setModalProject(project)}
                                        className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-600 text-gray-300 hover:border-[#F7AB0A] hover:text-[#F7AB0A] transition-all duration-300 rounded-full text-[10px] sm:text-xs font-medium hover:bg-[#F7AB0A]/5"
                                    >
                                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Screenshots
                                    </button>

                                    {project.siteUrl && (
                                        <a
                                            href={project.siteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F7AB0A] text-black font-semibold hover:bg-[#F7AB0A]/80 transition-all duration-300 rounded-full text-[10px] sm:text-xs"
                                        >
                                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Site
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* BACKGROUND SHAPE - Now visible on all screens (removed hidden class) */}
                <div className="pointer-events-none absolute top-[30%] left-0 w-full h-[500px] bg-[#F7AB0A]/10 -skew-y-12 z-0" />
            </motion.div>
        </>
    );
}