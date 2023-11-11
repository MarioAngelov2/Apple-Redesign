"use client";

import React, { useEffect, useState } from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

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

    return (
        <div
            className={`bg-black py-2 sticky top-0 z-30 ${
                scrolled ? "bg-black/75" : ""
            }`}
        >
            <Container>
                <div
                    className="flex max-w-[1440px] mx-auto w-full px-6 lg:px-24 py-2 text-gray-400 
                    text-sm items-center justify-between lg:justify-normal"
                >
                    <div>
                        <Image
                            src="https://www.svgrepo.com/show/303125/apple-logo.svg"
                            alt="logo"
                            width={25}
                            height={25}
                            className="cursor-pointer"
                        />
                    </div>
                    <div className="hidden lg:flex w-full justify-evenly">
                        <Link href="/" className="linkHover">
                            Mac
                        </Link>
                        <Link href="/" className="linkHover">
                            iPad
                        </Link>
                        <Link href="/" className="linkHover">
                            iPhone
                        </Link>
                        <Link href="/" className="linkHover">
                            Watch
                        </Link>
                        <Link href="/" className="linkHover">
                            AirPods
                        </Link>
                        <Link href="/" className="linkHover">
                            TV
                        </Link>
                        <Link href="/" className="linkHover">
                            Забавления
                        </Link>
                        <Link href="/" className="linkHover">
                            Поддръжка
                        </Link>
                        <Link href="/" className="linkHover">
                            Къде да купиш
                        </Link>
                    </div>
                    <AiOutlineSearch
                        size={22}
                        className="linkHover cursor-pointer"
                    />
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
