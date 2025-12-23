import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard4({}: Props) {
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
            {/* LOGO */}
            <motion.img
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-24 h-24 md:w-28 md:h-28 xl:w-36 xl:h-36 rounded-full object-cover"
                src="/images/AKentech.png"
                alt="Company Logo"
            />

            {/* CONTENT */}
            <div className="mt-4 w-full px-2 md:px-6">
                <h4 className="text-xl md:text-2xl xl:text-3xl font-light">
                    Technical Projects & Teaching Experience
                </h4>

                <p className="font-bold text-lg mt-1">INDEPENDENT DEVELOPER & EDUCATOR</p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 my-3">
                    {[
                        "React",
                        "Next.js",
                        "Spring",
                        "Selenium",
                        "Apache Kafka",
                        "Prometheus",
                        "Postman",
                        "GitHub",
                        "Tailwind CSS",
                        "PostgresSQL",
                        "MySQL",
                        "MongoDB",
                        "Java",
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
                    2023 – Present
                </p>

                <ul className="list-disc ml-5 space-y-2 text-sm md:text-base">
                    <li>Developed Farming Wallet Web Application for managing agricultural activities with analytics and digital wallet features.</li>
                    <li>Built Wireless Sensor Network Web Application simulation for real-time environmental monitoring and data visualization.</li>
                    <li>Created secure Banking Web Application using Next.js with user authentication and transaction management.</li>
                    <li>Designed and implemented School Report Card Generating System for automated grading and report generation.</li>
                    <li>Currently teaching Computer Science, Physics, and Applied Mechanics to high school students, developing customized lesson plans.</li>
                    <li>Mentored students in programming fundamentals, problem-solving, and scientific concepts.</li>
                    <li>Applied full-stack development skills across diverse technology stacks and educational contexts.</li>
                    <li>Demonstrated ability to build scalable applications while effectively communicating complex technical concepts to schools and Interns.</li>
                </ul>
            </div>
        </article>
    );
}