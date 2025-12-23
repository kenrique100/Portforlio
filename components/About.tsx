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
            Hello, my name is Kenrique and I am the CEO of Akentech. I have been working as a freelance software designer and developer for over 4 years now. I am a Full Stack Engineer and I have studied and practiced my skills with startups, tech companies, and small enterprise corporations to help build and scale their companies. Along the way, I have developed a passion for designing and developing scalable software for myself and the community. With this passion, I have been willing to learn new technologies and methods for solving day-to-day problems.
          </p>
      </div>
    </motion.div>
  )
}