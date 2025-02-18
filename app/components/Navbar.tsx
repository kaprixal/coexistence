"use client";
import React from "react";
import Logo from "../assets/logos/trio_logo.svg";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky bg-[#EEF5F6] top-0 z-30 w-full transition-all">
            <MaxWidthWrapper>
                <div className="flex h-full items-center justify-between py-6">
                    <Link
                        href={"/"}
                        className="flex flex-row duration-300 hover:scale-105 active:scale-95"
                    >
                        <Image
                            src={Logo}
                            alt="Collaborative Logo"
                            height={30}
                            quality={100}
                        />{" "}
                        <h1 className="flex-wrap pl-5 max-sm:text-sm text-[24px]">
                            Co-Existence with AI
                        </h1>{" "}
                    </Link>
                    {/* non mobile nav */}

                    <div className="hidden lg:flex space-x-7 font-light text-[18px] uppercase tracking-widest">
                        <Link
                            href={"/about"}
                            className="duration-300 hover:scale-105 active:scale-95 hover:text-primary hover:font-medium"
                        >
                            about
                        </Link>
                        <Link
                            href={"/schedule"}
                            className="duration-300 hover:scale-105 active:scale-95 hover:text-primary hover:font-medium"
                        >
                            Schedule
                        </Link>
                        <Link
                            href={"/faq"}
                            className="duration-300 hover:scale-105 active:scale-95 hover:text-primary hover:font-medium"
                        >
                            FAQ
                        </Link>
                        <Link
                            href={"/sponsors"}
                            className="duration-300 hover:scale-105 active:scale-95 hover:text-primary hover:font-medium"
                        >
                            sponsors
                        </Link>
                        <Link
                            href={"/prizing"}
                            className="duration-300 hover:scale-105 active:scale-95 hover:text-primary hover:font-medium"
                        >
                            prizing
                        </Link>
                        <Link
                            href={"/join"}
                            className="duration-300 hover:scale-105 active:scale-95 hover:text-primary hover:font-medium"
                        >
                            join us
                        </Link>
                    </div>

                    {/* Mobile nav */}
                    {!open && (
                        <button
                            onClick={() => {
                                setOpen(true);
                            }}
                            className="lg:hidden "
                        >
                            <Menu className="h-10 w-10" />
                        </button>
                    )}
                </div>
                {open && (
                    <div className="fixed top-0 left-0 w-screen h-screen bg-black/80"></div>
                )}
                {open && (
                    <div className="font-bold text-2xl uppercase text-primary tracking-widest flex flex-col z-40 bg-white fixed h-screen right-0 top-0 lg:hidden w-2/3 min-w-[320px] p-12">
                        <button
                            onClick={() => {
                                setOpen(false);
                            }}
                            className="mb-12"
                        >
                            <X className="h-10 w-10" />
                        </button>
                        <Link
                            href={"/about"}
                            className="border-b border-zinc-200 py-6 duration-300 hover:scale-105 active:scale-95 hover:text-primary"
                        >
                            about
                        </Link>
                        <Link
                            href={"/staff"}
                            className="border-b border-zinc-200 py-6 duration-300 hover:scale-105 active:scale-95 hover:text-primary"
                        >
                            staff
                        </Link>
                        {/* <Link
              href={"/teams"}
              className="border-b border-zinc-200 py-6 duration-300 hover:scale-105 active:scale-95 hover:text-primary"
            >
              teams
            </Link> */}
                        <Link
                            href={"/contact"}
                            className="border-b border-zinc-200 py-6 duration-300 hover:scale-105 active:scale-95 hover:text-primary"
                        >
                            contact
                        </Link>
                        <Link
                            href={"/sponsors"}
                            className="border-b border-zinc-200 py-6 duration-300 hover:scale-105 active:scale-95 hover:text-primary"
                        >
                            sponsors
                        </Link>
                    </div>
                )}
            </MaxWidthWrapper>
        </nav>
    );
};

export default Navbar;