import React from 'react'
import { Component } from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5}}

    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
        </h3>

        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        src="/images/kenrique.jpg"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[200px] xl:h-[300px]'
        />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background</h4>
          <p className='text-base'>
              Hello, I'm Kenrique Ngwa, a dedicated Software Engineer with a Bachelor's degree in Computer Software Engineering and over four years of experience building full-stack web applications. Over the years i have collaborated with startups, tech companies, and SMEs to transform their ideas into scalable, robust digital solutions.

              My expertise includes React/Next.js, TypeScript, and Spring Boot (Java) for full-stack development, designing RESTful APIs, implementing real-time data pipelines with Kafka, and ensuring application resilience through testing and CI/CD automation. I also work with Docker, AWS, and agile methodologies to deliver high-quality software efficiently.

              Beyond client projects, I am passionate about solving real-world problems through impactful initiatives, such as a digital Farming Wallet for agricultural management and a simulated Wireless Sensor Network for environmental monitoring. I am continually expanding my skills, currently exploring workflow automation with ServiceNow (ITSM).

              I am seeking a challenging role where I can contribute to a collaborative team, tackle complex problems, and build clean, scalable, and maintainable software that drives business growth.
          </p>
      </div>
    </motion.div>
  )
}