import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import { AiFillApple } from "react-icons/ai";

const SectionWatch = () => {
    return (
        <div className="bg-black">
            <Container>
                <div className="flex flex-col items-center justify-center text-white relative">
                    <div className="z-10 absolute top-20 flex flex-col items-center gap-2 px-1">
                        <h1 className="text-4xl md:text-6xl font-semibold flex items-center">
                            <AiFillApple />
                            WATCH
                        </h1>
                        <p className="text-red-500 text-lg">SERIES 9</p>
                        <h2 className="text-xl md:text-2xl text-center">
                            По-умен. По-ярък. По-мощен.
                        </h2>
                        <Link
                            className="text-lg md:text-xl text-blue-500 hover:underline underline-offset-1"
                            href="/"
                        >
                            Научи повече &rarr;
                        </Link>
                    </div>
                    <div className="flex h-[700px]">
                        <Image
                            src="/watchSeries.jpeg"
                            alt="iphoneHero"
                            width={1800}
                            height={700}
                            className="object-cover "
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SectionWatch;
