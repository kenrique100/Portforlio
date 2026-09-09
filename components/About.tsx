"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="h-full flex flex-col items-center justify-start pt-16 md:pt-20 px-4 md:px-8 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-[#F7AB0A]/50"
        >
            {/* TITLE */}
            <h3 className="uppercase tracking-[14px] text-gray-500 text-lg mb-6">
                About
            </h3>

            <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl">

                {/* IMAGE */}
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0"
                >
                    <Image
                        src="/images/kenrique.jpg"
                        alt="Kenrique Ngwa"
                        width={220}
                        height={300}
                        priority
                        className="
                            rounded-lg
                            object-cover
                            w-36 h-48
                            md:w-44 md:h-60
                        "
                    />
                </motion.div>

                {/* TEXT */}
                <div className="space-y-4 max-w-xl text-center md:text-left">
                    <h4 className="text-lg md:text-xl font-semibold">
                        Here is a{" "}
                        <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
                        background
                    </h4>

                    <p className="text-sm md:text-[13px] leading-relaxed text-gray-300"> Software Engineer with a bachelor&apos;s degree in software engineering and now having 5+ years of experience building scalable full-stack applications. I partner with startups, tech companies, and SMEs to translate ideas into robust digital solutions.<br /> Proficient in modern stacks including React/Next.js, TypeScript, and Spring Boot, with hands-on experience in REST APIs, Kafka data pipelines, CI/CD automation, and cloud deployment (Docker, AWS). I leverage agile methodologies to deliver high-quality software efficiently. <br /> Beyond client work, I build impactful projects like a digital Farming Wallet for agriculture and a simulated Wireless Sensor Network for environmental monitoring. Continuously expanding my skill set currently exploring ServiceNow for workflow automation.<br /> Seeking a collaborative role where I can solve complex problems, write clean and maintainable code, and contribute to meaningful business growth. </p>
                </div>
            </div>
        </motion.div>
    );
}
