import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundCircles({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                scale: [1, 2, 2.5, 1],
                opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 2.5 }}
            className="absolute inset-0 flex items-center justify-center"
        >
            {/* Desktop / Tablet */}
            <div className="hidden md:block absolute border border-[#333333] rounded-full h-[300px] w-[300px] animate-ping opacity-20" />
            <div className="hidden md:block absolute border border-[#333333] rounded-full h-[450px] w-[450px] animate-ping opacity-10" />
            <div className="hidden md:block absolute border border-[#F7AB0A] rounded-full h-[600px] w-[600px] opacity-20" />

            {/* Mobile */}
            <div className="md:hidden absolute border border-[#F7AB0A] rounded-full h-[220px] w-[220px] opacity-20" />
            <div className="md:hidden absolute border border-[#333333] rounded-full h-[320px] w-[320px] opacity-10" />
        </motion.div>
    )
}