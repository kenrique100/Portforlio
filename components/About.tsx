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
            className="h-full flex flex-col items-center justify-start pt-20 px-4 md:px-8"
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

                    <p className="text-sm md:text-[13px] leading-relaxed text-gray-300">
                        Hello, I&apos;m Kenrique Ngwa, a dedicated Software Engineer with a
                        Bachelor degree in Computer Software Engineering and over four years of
                        experience building full-stack web applications. Over the years, I
                        have collaborated with startups, tech companies, and SMEs to transform
                        their ideas into scalable, robust digital solutions.
                        <br />
                        <br />
                        My expertise includes React/Next.js, TypeScript, and Spring Boot (Java)
                        for full-stack development, designing RESTful APIs, implementing
                        real-time data pipelines with Kafka, and ensuring application
                        resilience through testing and CI/CD automation. I also work with
                        Docker, AWS, and agile methodologies to deliver high-quality software
                        efficiently.
                        <br />
                        <br />
                        Beyond client projects, I am passionate about solving real-world
                        problems through impactful initiatives, such as a digital Farming
                        Wallet for agricultural management and a simulated Wireless Sensor
                        Network for environmental monitoring. I am continually expanding my
                        skills, currently exploring workflow automation with ServiceNow
                        (ITSM).
                        <br />
                        <br />
                        I am seeking a challenging role where I can contribute to a
                        collaborative team, tackle complex problems, and build clean,
                        scalable, and maintainable software that drives business growth.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
