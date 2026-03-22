"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import ExperienceCard2 from "@/components/ExperienceCard2";
import ExperienceCard3 from "@/components/ExperienceCard3";
import ExperienceCard4 from "@/components/ExperienceCard4";

type ExperienceItem = {
    id: number;
    Component: React.ComponentType;
};

export default function WorkExperience() {
    const experiences: ExperienceItem[] = [
        { id: 1, Component: ExperienceCard },
        { id: 2, Component: ExperienceCard2 },
        { id: 3, Component: ExperienceCard3 },
        { id: 4, Component: ExperienceCard4 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="h-full flex flex-col justify-start pt-16 md:pt-20"
        >
            {/* TITLE */}
            <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl text-center mb-6 md:mb-10 flex-shrink-0 px-4">
                Experience
            </h3>

            {/* SLIDER */}
            <div className="flex overflow-x-auto snap-x snap-mandatory w-full h-full scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {experiences.map(({ id, Component }) => (
                    <div
                        key={id}
                        className="w-screen flex-shrink-0 snap-center flex justify-center px-6"
                    >
                        <div className="max-w-4xl w-full">
                            <Component />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
