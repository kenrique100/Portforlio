import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative h-screen overflow-hidden max-w-full mx-auto">

            {/* SECTION TITLE */}
            <h3 className="absolute top-20 w-full text-center uppercase tracking-[20px] text-gray-500 text-2xl z-20">
                Projects
            </h3>

            {/* SLIDER */}
            <div className="relative w-full h-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {projects.map((_, i) => (
                    <section
                        key={i}
                        className="w-screen h-screen flex-shrink-0 snap-center flex flex-col items-center pt-28 px-6 md:px-20"
                    >
                        {/* IMAGE */}
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2}}
                            viewport={{ once: true }}
                            src="/images/kombe.png"
                            alt="Project Screenshot"
                            className="
                                w-[520px]
                                h-[620px]
                                md:w-[980px]
                                md:h-[650px]
                                lg:w-[980px]
                                lg:h-[650px]
                                object-contain
                            "
                        />

                        {/* TEXT */}
                        <div className="-mt-20 max-w-4xl text-center">
                            <h4 className="text-3xl md:text-4xl font-semibold leading-tight">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {projects.length}
                                </span>
                                : Farmer Management Web Application
                            </h4>

                            <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
                                Farm Management Web Application is a cloud-native platform that currently functions
                                as a farmer’s digital wallet for managing income, expenses, and transactions. It
                                supports pond management, water treatment, feeding schedules, and feed formulation
                                with dynamic feed proportion calculations based on ingredient availability. Data can
                                be entered via web forms, Excel uploads, or email ingestion. Built with Java Spring
                                Boot, Apache Kafka, Kubernetes, AWS, and React.
                            </p>
                        </div>
                    </section>
                ))}
            </div>

            {/* BACKGROUND SHAPE */}
            <div className="absolute top-[30%] left-0 w-full h-[500px] bg-[#F7AB0A]/10 -skew-y-12 z-0" />
        </motion.div>
    );
}

export default Projects;
