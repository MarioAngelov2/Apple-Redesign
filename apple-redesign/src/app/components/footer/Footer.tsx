import React from "react";
import Container from "../Container";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-[#F5F5F7] mt-4">
            <div className="max-w-[1000px] mx-auto">
                <p className="px-3 mt-5 text-xs text-gray-500">
                    Необходим е абонамент за Apple TV+
                </p>
                <hr className="border-b-[1px] mt-6" />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-12 px-3">
                    <div>
                        <p className="font-semibold text-md text-gray-700 mb-3">
                            Разгледай
                        </p>
                        <ul className="font-light text-sm text-gray-600 flex flex-col gap-2">
                            <li>Mac</li>
                            <li>iPad</li>
                            <li>iPhone</li>
                            <li>Watch</li>
                            <li>TV</li>
                            <li>Music</li>
                            <li>AirPods</li>
                        </ul>
                        <p className="font-semibold text-md text-gray-700 mt-5 mb-3">
                            Apple Wallet
                        </p>
                        <ul className="font-light text-sm text-gray-600 flex flex-col gap-2">
                            <li>Appe Pay</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-md text-gray-700 mb-3 mt-4 md:mt-0">
                            Акаунт
                        </p>
                        <ul className="font-light text-sm text-gray-600 flex flex-col gap-2">
                            <li>Управление на Apple ID</li>
                            <li>iCloud.com</li>
                        </ul>
                        <p className="font-semibold text-md text-gray-700 mt-5 mb-3">
                            Забавления
                        </p>
                        <ul className="font-light text-sm text-gray-600 flex flex-col gap-2">
                            <li>Appe TV+</li>
                            <li>Appe Music</li>
                            <li>Appe Arcade</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-md text-gray-700 mb-3 mt-4 md:mt-0">
                            Ценностите на Apple
                        </p>
                        <ul className="font-light text-sm text-gray-600 flex flex-col gap-2">
                            <li>Поверителност</li>
                        </ul>
                        <p className="font-semibold text-md text-gray-700 mt-5 mb-3">
                            За Apple
                        </p>
                        <ul className="font-light text-sm text-gray-600 flex flex-col gap-2">
                            <li>Newsroom</li>
                            <li>Apple Leadership</li>
                            <li>Инвеститори</li>
                            <li>Етичност и законообразност</li>
                        </ul>
                    </div>
                </div>
                <p className="px-3 mb-2 text-xs text-gray-500">
                    <Link className="text-blue-500 underline" href="/">
                        Намери най-близкия търговец
                    </Link>{" "}
                    до теб.
                </p>
                <hr className="border-b-[1px] mb-3" />
                <div className="text-xs text-gray-500 mb-8 px-3 flex justify-between">
                    <div className="flex">
                        <p className="mr-6">
                            &copy; 2023 Apple Inc. Всички права запазени.
                        </p>
                        <div className="flex gap-3">
                            <p className="border-r-[1px] px-2 border-gray-600">
                                Използване на кукита
                            </p>
                            <p className="border-r-[1px] px-2 border-gray-600">
                                Условия за употреба
                            </p>
                            <p>Карта на сайта</p>
                        </div>
                    </div>
                    <p>България</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
