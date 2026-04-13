import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="sticky top-0 p-4 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-[rgb(36,36,36)]/95 backdrop-blur-sm">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{ duration: 1.5 }}
                className="flex flex-row items-center space-x-2"
            >
                <SocialIcon
                    url="https://www.linkedin.com/in/awah-kenrique-anyere-ngwa-87118621a/"
                    fgColor="grey"
                    bgColor="transparent"
                    style={{ height: 32, width: 32 }}
                    className="hover:scale-110 transition-transform"
                />

                <SocialIcon
                    url="https://github.com/kenrique100"
                    fgColor="grey"
                    bgColor="transparent"
                    style={{ height: 32, width: 32 }}
                    className="hover:scale-110 transition-transform"
                />

                <SocialIcon
                    url="https://twitter.com/Kenrique_Ngwa"
                    fgColor="grey"
                    bgColor="transparent"
                    style={{ height: 32, width: 32 }}
                    className="hover:scale-110 transition-transform hidden sm:inline-block"
                />
                <SocialIcon
                    url="https://web.facebook.com/ngwakenrique/"
                    fgColor="grey"
                    bgColor="transparent"
                    style={{ height: 32, width: 32 }}
                    className="hover:scale-110 transition-transform hidden md:inline-block"
                />
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{ duration: 1.5 }}
                className="flex flex-row items-center space-x-2 md:space-x-4"
            >
                {/* Download Resume Button using Next.js Link */}
                <Link
                    href="/files/My_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Kenrique_Resume.pdf"
                    className="flex items-center space-x-1 md:space-x-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#F7AB0A]/40 hover:border-[#F7AB0A] hover:bg-[#F7AB0A]/10 transition-all duration-300 group"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 md:h-5 md:w-5 text-[#F7AB0A] group-hover:scale-110 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    <span className="text-xs md:text-sm text-gray-400 group-hover:text-[#F7AB0A] transition-colors hidden xs:inline">
                        Resume
                    </span>
                    <span className="text-xs md:text-sm text-gray-400 group-hover:text-[#F7AB0A] transition-colors inline xs:hidden">
                        CV
                    </span>
                </Link>

                {/* Get In Touch */}
                <div
                    onClick={scrollToContact}
                    className="flex flex-row items-center text-grey-300 cursor-pointer group"
                >
                    <SocialIcon
                        className="cursor-pointer hover:scale-110 transition-transform"
                        network="email"
                        fgColor="grey"
                        bgColor="transparent"
                        style={{ height: 32, width: 32 }}
                    />
                    <p className="uppercase hidden sm:inline-flex text-xs md:text-sm text-gray-400 group-hover:text-[#F7AB0A] transition-colors ml-2">
                        Get In Touch
                    </p>
                </div>
            </motion.div>
        </header>
    );
}