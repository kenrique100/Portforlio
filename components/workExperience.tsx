import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative min-h-screen flex flex-col overflow-hidden max-w-full mx-auto px-4 md:px-10"
        >
            {/* SECTION TITLE */}
            <h3 className="mt-24 mb-10 text-center uppercase tracking-[18px] text-gray-500 text-2xl">
                Experience
            </h3>

            {/* EXPERIENCE SLIDER */}
            <div className="flex w-full overflow-x-scroll snap-x snap-mandatory space-x-6 pb-10">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </motion.section>
    );
}

export default WorkExperience;
