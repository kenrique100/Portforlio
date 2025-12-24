import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

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
                onClick={scrollToContact}
                className="flex flex-row items-center text-grey-300 cursor-pointer"
            >
                <SocialIcon
                    className="cursor-pointer hover:scale-110 transition-transform"
                    network="email"
                    fgColor="grey"
                    bgColor="transparent"
                    style={{ height: 32, width: 32 }}
                />
                <p className="uppercase hidden sm:inline-flex text-xs md:text-sm text-gray-400 ml-2">
                    Get In Touch
                </p>
            </motion.div>
        </header>
    );
}