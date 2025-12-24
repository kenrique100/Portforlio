import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative min-h-screen overflow-hidden max-w-full mx-auto">

            {/* SECTION TITLE */}
            <h3 className="absolute top-12 md:top-20 w-full text-center uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl z-20">
                Projects
            </h3>

            {/* SLIDER */}
            <div className="relative w-full h-full flex overflow-x-auto snap-x snap-mandatory z-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {projects.map((_, i) => (
                    <div
                        key={i}
                        className="w-screen min-h-screen flex-shrink-0 snap-center flex flex-col items-center justify-center px-4 md:px-6 lg:px-20"
                    >
                        {/* IMAGE */}
                        <motion.div
                            initial={{
                                y: -100,
                                opacity: 0
                            }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2}}
                            viewport={{ once: true }}
                            className="w-full flex justify-center"
                        >
                            <Image
                                src="/images/kombe.png"
                                alt="Project Screenshot"
                                width={980}
                                height={650}
                                className="
                                    w-[280px]
                                    h-[320px]
                                    sm:w-[400px]
                                    sm:h-[450px]
                                    md:w-[600px]
                                    md:h-[400px]
                                    lg:w-[780px]
                                    lg:h-[520px]
                                    xl:w-[980px]
                                    xl:h-[650px]
                                    object-contain
                                "
                            />
                        </motion.div>

                        {/* TEXT */}
                        <div className="mt-6 md:-mt-20 px-0 md:px-0 max-w-4xl mx-auto text-center">
                            <h4 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {projects.length}
                                </span>
                                : Farmer Management Web Application
                            </h4>

                            <p className="mt-3 text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed">
                                Farm Management Web Application is a cloud-native platform that currently functions
                                as a farmer&apos;s digital wallet for managing income, expenses, and transactions. It
                                supports pond management, water treatment, feeding schedules, and feed formulation
                                with dynamic feed proportion calculations based on ingredient availability. Data can
                                be entered via web forms, Excel uploads, or email ingestion. Built with Java Spring
                                Boot, Apache Kafka, Kubernetes, AWS, and React.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* BACKGROUND SHAPE */}
            <div className="absolute top-[20%] md:top-[30%] left-0 w-full h-[300px] md:h-[500px] bg-[#F7AB0A]/10 -skew-y-12 z-0" />
        </motion.div>
    );
}

export default Projects;