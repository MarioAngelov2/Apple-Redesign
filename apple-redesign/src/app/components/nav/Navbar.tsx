import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="bg-black sticky top-0">
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
