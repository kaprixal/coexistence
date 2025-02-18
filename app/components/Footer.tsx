import React from "react";
import Image from "next/image";

import Logo from "../assets/logos/trio_logo.svg";
import SAP from "../assets/logos/sap.png";
const Footer = () => {
    return (
        <footer className="flex justify-center bottom-0 w-full flex-col pt-10">
            <div className="py-20 flex flex-col justify-center items-center text-center uppercase bg-primary text-white">
                <div className="flex flex-row w-full justify-evenly pb-6">
                    <Image
                        src={Logo}
                        alt="Collaborative Logo"
                        height={50}
                        quality={100}
                    />{" "}
                    <h1 className="text-xl pt-8">@2025 University of Toronto</h1>
                    <div className="flex flex-col">
                        <p className="mb-3">Sponsored By:</p>
                        <Image
                            src={SAP}
                            alt="Collaborative Logo"
                            height={50}
                            quality={100}
                        />{" "}
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;