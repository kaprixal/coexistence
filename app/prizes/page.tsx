"use client";

import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";
import sun from "../assets/images/jellycatSun.svg";
import "../globals.css";
import { Carousel } from "../components/ui/carousel";

export default function Home() {
  const slideData = [
    {
      title: "LEGO Sets",
      src: "/prizes/lego.png",
    },
    {
      title: "Jellycats",
      src: "/prizes/jellycatBunny.svg",
    },
    {
      title: "Mini Projectors",
      src: "/prizes/projectors.png",
    },
  ];
  return (
    <main>
      <div className="w-full h-[47vh] max-sm:h-[30vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70  to-white/0 to-10%"></div>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-primary text-white">
          <h1 className="text-8xl pt-5 font-extrabold text-white drop-shadow-2xl text-center uppercase max-sm:text-6xl">
            prizes
          </h1>
        </div>
      </div>

      <MaxWidthWrapper className="pt-8">
        <h1 className="mt-16 text-3xl lg:text-5xl text-primary font-bold">
          Exciting Prizes Await!
        </h1>
        <div className="sm:text-xl w-50 mx-auto pt-5 text-base lg:text-2xl">
          <p>
            {`At UofT AI Ethics Hackathon 2025, your creativity and problem-solving skills could earn you some awesome prizes!`}
            <br />
            <br />
            {`🏆 Top 3 Teams: The 1st, 2nd, and 3rd place winners will get to choose from a selection of prizes, including mini projectors, Jellycats, and LEGO sets—with selection order based on placement. UofT Entrepreneurship is also offering 3 one-year memberships in our ONRamp co-working and community space for first place winners.`}
          </p>
        </div>
        {/* carousel  */}
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={slideData} />
        </div>

        <hr className="bg-primary w-1/3 h-[2px] mx-auto mt-10"></hr>
        <h1 className="mt-16 text-3xl lg:text-5xl text-primary font-bold">
          Hackathon Draw
        </h1>
        <div className="sm:text-xl w-50 mx-auto pt-5 text-base lg:text-2xl">
          <p>
            {`🎟️ Participant Raffle: Just by attending, you’ll have a chance to win a Jellycat Amusable Sun Bag! All participants are eligible for the raffle, and more details will be provided at the registration desk on the day of the event.`}
            <br />
            <br />
            {`Bring your best ideas, and you might just leave with an amazing prize! 🚀✨`}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={sun}
            alt="jellycatSun"
            className="h-auto w-64 md:w-80 lg:w-[458px] lg:pt-20 pt-10"
          ></Image>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
