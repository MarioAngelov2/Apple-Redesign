import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";

const SectionIphone = () => {
    return (
        <div className="bg-[#F5F4F7]">
            <Container>
                <div className="flex flex-col items-center justify-center text-black relative">
                    <div className="z-10 absolute top-20 flex flex-col items-center gap-2 px-1">
                        <h1 className="text-4xl md:text-6xl font-semibold">
                            iPhone 15 
                        </h1>
                        <h2 className="text-xl md:text-2xl text-center font-light">
                            Нова камера. Нов дизайн. Чуднология.
                        </h2>
                        <Link
                            className="text-lg md:text-xl text-blue-500 hover:underline underline-offset-1 font-light"
                            href="/"
                        >
                            Научи повече &rarr;
                        </Link>
                    </div>
                    <div className="flex h-[700px]">
                    <Image
                            src="/iphone15.jpeg"
                            alt="iphoneHero"
                            width={16000}
                            height={700}
                            className="object-cover"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SectionIphone;
