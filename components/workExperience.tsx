import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import ExperienceCard2 from "@/components/ExperienceCard2";
import ExperienceCard3 from "@/components/ExperienceCard3";
import ExperienceCard4 from "@/components/ExperienceCard4";

type Props = {};

function WorkExperience({}: Props) {
    return (
        <div className="relative min-h-screen flex flex-col overflow-hidden max-w-full mx-auto px-4 md:px-10">
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                {/* SECTION TITLE */}
                <h3 className="mt-24 mb-10 text-center uppercase tracking-[18px] text-gray-500 text-2xl">
                    Experience
                </h3>

                {/* EXPERIENCE SLIDER */}
                <div className="flex w-full overflow-x-scroll snap-x snap-mandatory space-x-5 pb-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                    <ExperienceCard />
                    <ExperienceCard2 />
                    <ExperienceCard3 />
                    <ExperienceCard4 />
                </div>
            </motion.section>
        </div>
    );
}

export default WorkExperience;