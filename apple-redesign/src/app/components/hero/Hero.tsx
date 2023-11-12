import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div data-testid="hero" className="bg-black">
            <Container>
                <div className="flex flex-col items-center justify-center text-white relative">
                    <div className="z-20 absolute top-20 flex flex-col items-center gap-2">
                        <h1 className="text-4xl md:text-6xl font-semibold">
                            iPhone 15 Pro
                        </h1>
                        <h2 className="text-xl md:text-2xl font-light">
                            Титан. Здрав. Лек. Про.
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
                            src="/iphoneHero.jpeg"
                            alt="iphoneHero"
                            width={1200}
                            height={1200}
                            className="hidden md:block object-cover h-full"
                        />
                        <Image
                            src="/iphoneHero2.jpeg"
                            alt="iphoneHero2"
                            width={1200}
                            height={1200}
                            className="md:hidden object-cover h-full"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
