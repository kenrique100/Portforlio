import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard2({}: Props) {
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
            <motion.img
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-24 h-24 md:w-28 md:h-28 xl:w-36 xl:h-36 rounded-full object-cover"
                src="/images/climateWavers.jpeg"
                alt="Company Logo"
            />

            {/* CONTENT */}
            <div className="mt-4 w-full px-2 md:px-6">
                <h4 className="text-xl md:text-2xl xl:text-3xl font-light">
                    Quality Assurance
                </h4>

                <p className="font-bold text-lg mt-1">CLIMATE WAVERS</p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 my-3">
                    {[
                        "Django",
                        "Python",
                        "Postman",
                        "Git",
                        "GitHub",
                        "Jupyter",
                        "Slack",
                        "MySQL"
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
                    Started: 2024 - Ended: 2025
                </p>

                <ul className="list-disc ml-5 space-y-2 text-sm md:text-base">
                    <li>Led end-to-end testing of Django-based web applications.</li>
                    <li>Ensured stability across key features including disaster alerts, user reports, and AI-driven dashboards.</li>
                    <li>Designed and executed test plans for functional, regression, and user acceptance testing.</li>
                    <li>Documented and tracked critical issues using Postman and GitHub issues.</li>
                    <li>Created and maintained QA documentation and release validation reports.</li>
                    <li>Contributed to successful Talan Hackathon demo and public launch.</li>
                </ul>
            </div>
        </article>
    );
}