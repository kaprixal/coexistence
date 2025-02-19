import React from "react";
import Image from "next/image";

import Logo from "../assets/logos/trio_logo.svg";
import SAP from "../assets/logos/sap.png";
const Footer = () => {
    return (
        <footer className="flex justify-center bottom-0 w-full flex-col pt-10">
            <div className="py-20 flex flex-row lg:flex-col justify-center items-center text-center uppercase bg-primary text-white">
                <div className="flex flex-col lg:flex-row pb-6 justify-evenly lg:w-full">
                    <div className="text-center justify-center mx-auto">
                        <Image
                            src={Logo}
                            alt="Collaborative Logo"
                            height={50}
                            quality={100}
                        />{" "}
                    </div>
                    <div className="flex flex-col text-center justify-center mx-auto lg:-mt-5 mt-10">
                        <p className="mb-3">Sponsored By:</p>
                        <Image
                            src={SAP}
                            alt="SAP"
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