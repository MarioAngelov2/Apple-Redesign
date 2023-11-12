"use client";

import React, { useEffect, useState } from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { LiaGripLinesSolid } from "react-icons/lia";
import { IoCloseOutline } from "react-icons/io5";
import { navLinks } from "@/app/utils/data";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const menuVariants = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.4,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                duration: 0.4,
                ease: [0.12, 0, 0.39, 1]
            }
        },
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 60;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    const handleIsMobile = () => {
        setIsMobile((prev) => !prev);
    };

    return (
        <div
            className={`bg-black py-2 sticky top-0 z-30 ${
                scrolled ? "bg-black/75" : ""
            }`}
        >
            <Container>
                <div
                    className="flex max-w-[1440px] mx-auto w-full px-6 lg:px-24 text-gray-400 
                    text-sm items-center justify-between lg:justify-normal relative"
                >
                    <div className="hidden lg:flex w-full justify-evenly">
                        <div>
                            <Image
                                src="https://www.svgrepo.com/show/303125/apple-logo.svg"
                                alt="logo"
                                width={25}
                                height={25}
                                className="cursor-pointer"
                            />
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                className="linkHover"
                                href={link.link}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* MOBILE */}
                <div className="flex justify-between lg:hidden text-gray-400 px-6 py-2">
                    <div>
                        <Image
                            src="https://www.svgrepo.com/show/303125/apple-logo.svg"
                            alt="logo"
                            width={25}
                            height={25}
                            className="cursor-pointer"
                        />
                    </div>
                    <div className="flex gap-6">
                        <AiOutlineSearch
                            size={22}
                            className="linkHover cursor-pointer"
                        />
                        <LiaGripLinesSolid
                            size={22}
                            className="linkHover cursor-pointer"
                            onClick={handleIsMobile}
                        />
                    </div>
                </div>
                <AnimatePresence>
                    {isMobile && (
                        <motion.div
                            variants={menuVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="z-40 fixed top-0 bg-black h-full w-screen overflow-hidden origin-top"
                        >
                            <div className="flex justify-end px-6 py-3 text-gray-400">
                                <IoCloseOutline
                                    size={28}
                                    onClick={handleIsMobile}
                                />
                            </div>
                            <ul className="flex flex-col font-semibold gap-4 text-white text-2xl px-10 ">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        className="linkHover"
                                        href={link.link}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </div>
    );
};

export default Navbar;
