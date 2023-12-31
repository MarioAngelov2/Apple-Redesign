import React from "react";
import Link from "next/link";
import { AiFillApple } from "react-icons/ai";
import Image from "next/image";

const PopularGrid = () => {
    return (
        <div data-testid="popular-grid" className="md:px-4 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                {/* LEFT SECTION */}
                <div className="flex justify-center items-center overflow-hidden max-w-full max-h-full relative bg-[#FCFBFE]">
                    <div className="z-10 absolute top-20 right-0 left-0 flex flex-col items-center justify-center gap-2 px-1">
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold flex items-center">
                            <AiFillApple size={40} />
                            WATCH
                        </h1>
                        <p className="text-red-500 text-xs md:text-sm font-light">
                            ULTRA 2
                        </p>
                        <h2 className="text-md md:text-lg font-light">
                            Приключения на друго ниво.
                        </h2>
                        <Link
                            className="text-sm md:text-lg text-blue-500 hover:underline underline-offset-1 font-light"
                            href="/"
                        >
                            Научи повече
                        </Link>
                    </div>
                    <div className="">
                        <Image
                            src="/watch_ultra.jpeg"
                            alt="watch_ultra"
                            width={2000}
                            height={600}
                            className="object-cover min-w-[1000px] md:min-w-[1100px] lg:min-w-[1400px] mt-12"
                        />
                    </div>
                </div>
                {/* RIGHT SECTION */}
                <div className="flex justify-center items-center overflow-hidden max-w-full max-h-full relative bg-[#FCFBFE]">
                    <div className="z-10 absolute top-20 right-0 left-0 flex flex-col items-center justify-center gap-2 px-1">
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold flex items-center">
                            <AiFillApple size={40} />
                            WATCH
                        </h1>
                        <p className="text-red-500 text-xs md:text-sm font-light">
                            SE
                        </p>
                        <h2 className="text-md md:text-lg font-light">
                            Много причини да го обикнеш.
                        </h2>
                        <Link
                            className="text-sm md:text-lg text-blue-500 hover:underline underline-offset-1 font-light"
                            href="/"
                        >
                            Научи повече
                        </Link>
                    </div>
                    <div className="">
                        <Image
                            src="/watches.jpeg"
                            alt="watch_se"
                            width={2000}
                            height={600}
                            className="object-cover min-w-[1000px] md:min-w-[1100px] lg:min-w-[1400px] mt-12"
                        />
                    </div>
                </div>
                {/* BLACK SECTION */}
                {/* LEFT SECTION */}
                <div className="flex justify-center items-center overflow-hidden max-w-full max-h-full relative bg-black text-white">
                    <div className="z-10 absolute top-10 md:top-16 right-0 left-0 flex flex-col items-center justify-center gap-2 px-1">
                        <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold">
                            AirPods Pro
                        </h1>
                        <h2 className="text-md md:text-lg lg:text-xl text-center font-light">
                            Сега с адаптивно аудио. <br />
                            Звучи страхотно.
                        </h2>
                        <Link
                            className="text-sm md:text-lg lg:text-xl text-blue-500 hover:underline underline-offset-1 font-light"
                            href="/"
                        >
                            Научи повече
                        </Link>
                    </div>
                    <div className="">
                        <Image
                            src="/airpods.jpeg"
                            alt="airpods_pro"
                            width={2000}
                            height={600}
                            className="object-cover min-w-[1000px] md:min-w-[1100px] lg:min-w-[1400px] md:mt-8 lg:mt-0"
                        />
                    </div>
                </div>
                {/* RIGHT SECTION */}
                <div className="flex justify-center items-center overflow-hidden max-w-full max-h-full relative bg-black text-white">
                    <div className="z-10 absolute top-10 md:top-16 right-0 left-0 flex flex-col items-center justify-center gap-2 px-1">
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold">
                            iPad Pro
                        </h1>
                        <h2 className="text-md md:text-lg flex gap-1 font-light">
                            Със суперсилите на{" "}
                            <span>
                                <Image
                                    src="/m2.png"
                                    alt="m2_chip"
                                    width={30}
                                    height={30}
                                />
                            </span>
                        </h2>
                        <Link
                            className="text-sm md:text-lg text-blue-500 hover:underline underline-offset-1 font-light"
                            href="/"
                        >
                            Научи повече
                        </Link>
                    </div>
                    <div className="">
                        <Image
                            src="/ipad.jpeg"
                            alt="ipad"
                            width={2000}
                            height={600}
                            className="object-cover min-w-[1000px] md:min-w-[1100px] lg:min-w-[1400px] md:mt-8 lg:mt-0"
                        />
                    </div>
                </div>
                {/* WHITE SECTION */}
                {/* LEFT SECTION */}
                <div className="flex justify-center items-center overflow-hidden max-w-full max-h-full relative bg-[#FCFBFE]">
                    <div className="z-10 absolute top-8 md:top-10 right-0 left-0 flex flex-col items-center justify-center gap-2 px-1">
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold">
                            MacBook Air 15"
                        </h1>
                        <h2 className="text-md md:text-lg text-center font-light">
                            Впечатляващо голям. <br />
                            Невъзможно тънък.
                        </h2>
                        <Link
                            className="text-sm md:text-lg text-blue-500 hover:underline underline-offset-1"
                            href="/"
                        >
                            Научи повече
                        </Link>
                    </div>
                    <div className="">
                        <Image
                            src="/laptop.jpeg"
                            alt="laptop"
                            width={2000}
                            height={600}
                            className="object-cover min-w-[1000px] md:min-w-[1100px] lg:min-w-[1400px] md:mt-0"
                        />
                    </div>
                </div>
                {/* RIGHT SECTION */}
                <div className="flex justify-center items-center overflow-hidden max-w-full max-h-full relative bg-[#FCFBFE]">
                    <div className="z-10 absolute top-10 right-0 left-0 flex flex-col items-center justify-center gap-2 px-1">
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold flex items-center">
                            <AiFillApple size={40} data-testid="apple-icon"/>
                            tv
                        </h1>
                        <h2 className="text-md md:text-lg text-center font-light">
                            Apple изживяването. <br />
                            Пиршество за всички сетива.
                        </h2>
                        <Link
                            className="text-sm md:text-lg text-blue-500 hover:underline underline-offset-1"
                            href="/"
                        >
                            Научи повече
                        </Link>
                    </div>
                    <div className="">
                        <Image
                            src="/tv.jpeg"
                            alt="tv"
                            width={2000}
                            height={600}
                            className="object-cover min-w-[1000px] md:min-w-[1100px] lg:min-w-[1400px] md:mt-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularGrid;
