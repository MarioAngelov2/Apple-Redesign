import React from "react";
import Link from "next/link";
import {
    footerLinks1,
    footerLinks2,
    footerLinks3,
    footerLinks4,
} from "@/app/utils/data";

const Footer = () => {
    return (
        <div data-testid="footer" className="bg-[#F5F5F7] mt-4">
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
                            {footerLinks1.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        className="hover:underline"
                                        href={link.link}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p className="font-semibold text-md text-gray-700 mt-5 mb-3">
                            Apple Wallet
                        </p>
                        <ul className="font-light text-sm text-gray-600 flex flex-col gap-2">
                            <li>
                                <Link className="hover:underline" href="/">
                                    Appe Pay
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-md text-gray-700 mb-3 mt-4 md:mt-0">
                            Акаунт
                        </p>
                        <ul className="font-light text-sm text-gray-600 flex flex-col gap-2">
                            {footerLinks4.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        className="hover:underline"
                                        href={link.link}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p className="font-semibold text-md text-gray-700 mt-5 mb-3">
                            Забавления
                        </p>
                        <ul className="font-light text-sm text-gray-600 flex flex-col gap-2">
                            {footerLinks2.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        className="hover:underline"
                                        href={link.link}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-md text-gray-700 mb-3 mt-4 md:mt-0">
                            Ценностите на Apple
                        </p>
                        <ul className="font-light text-sm text-gray-600 flex flex-col gap-2">
                            <li>
                                <Link className="hover:underline" href="/">
                                    Поверителност
                                </Link>
                            </li>
                        </ul>
                        <p className="font-semibold text-md text-gray-700 mt-5 mb-3">
                            За Apple
                        </p>
                        <ul className="font-light text-sm text-gray-600 flex flex-col gap-2">
                            {footerLinks3.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        className="hover:underline"
                                        href={link.link}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
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
                    <div className="flex flex-col gap-3 md:gap-0 md:flex-row">
                        <p className="mr-6">
                            &copy; 2023 Apple Inc. Всички права запазени.
                        </p>
                        <div className="flex gap-3">
                            <Link
                                href="/"
                                className="border-r-[1px] px-2 border-gray-600 hover:underline"
                            >
                                Използване на кукита
                            </Link>
                            <Link
                                href="/"
                                className="border-r-[1px] px-2 border-gray-600 hover:underline"
                            >
                                Условия за употреба
                            </Link>
                            <Link href="/" className="hover:underline">
                                Карта на сайта
                            </Link>
                        </div>
                    </div>
                    <Link href="/" className="hover:underline">
                        България
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
