import Image from "next/image";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

import Poster from "./assets/images/coexistence.png";

export default function Home() {
  return (
    <main>
      <div className="w-full h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70  to-white/0 to-10%"></div>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-primary text-white">
          <p className="text-2xl" > illuminaite x WiCS x CSSU </p>
          <p> presents </p>
          <h1 className="text-8xl pt-5 font-extrabold text-white drop-shadow-2xl text-center uppercase max-sm:text-5xl">
            co-existence with ai:
          </h1>
          <h2 className="text-3xl font-extrabold pt-5 text-center max-sm:text-xl">A University of Toronto Artificial Intelligence Ethics Hackathon </h2>
          <p className="pt-5 text-center max-sm:text-sm">March 8th 9am - 8pm 2025 &#x2022; University of Toronto St. George Campus </p>
          {/* <a
            className="mt-5 flex justify-center items-center text-center text-white bg-secondary rounded-full px-10 py-3 max-sm:text-xl text-2xl bt font-extrabold duration-50 hover:scale-105 active:scale-85 hover:bg-[#A1E6EB] uppercase" target="_blank"
            href="https://forms.gle/c44xoGNcv5LuxBoj6"
          >
            Register Now
          </a> */}
          <a
            className="mt-5 text-white text-lg underline hover:underline-offset-4"
            href="/sponsors"
          >
            Interested in becoming a sponsor?
          </a>
        </div>
      </div>

      <MaxWidthWrapper>
        {/* Hero section */}
        <h1 className="mt-20 max-sm:text-3xl max-sm:text-center text-primary text-3xl font-bold max-md:text-5xl text-center">
          🚀✨ Introducing UofT AI Ethics Hackathon 2025 Hosted by WiCS, CSSU and illuminaite✨🚀
        </h1>
        <hr className="bg-primary w-1/3 h-[2px] mx-auto mt-10"></hr>
        <p className="text-xl w-50 text-center mx-auto max-sm:text-base py-5 max-sm:text-center">
          We&apos;re excited to announce that illuminaite, CSSU, and WiCS are teaming up to host an innovation-driven Hackathon this March! This isn&apos;t just about coding—it&apos;s about brainstorming, designing, and prototyping creative solutions to real-world challenges. Whether you&apos;re into tech, design, or problem-solving, this is your chance to collaborate, innovate, and showcase your ideas to industry professionals and professors.
        </p>
        <p className="pt-5 text-center text-xl">📅 Date: Saturday, March 8th<br></br>
          ⏰ Time: 9 AM - 8PM<br></br>
          📍 Location: Bahen Centre for Information Technology<br></br>40 St George St, Toronto, ON M5S 2E4
        </p>
        <h2 className="text-3xl lg:text-5xl text-primary font-extrabold uppercase text-center pt-24">
          Signups for this year&apos;s hackathon are now closed!
        </h2>
        <p className="italic text-center pt-5 pb-10 text-lg">
          All Participants who completed the registration and commitment forms will receive onboarding information soon! Please contact us if you have any questions or concerns about the event.
        </p>
        <a
          className="mx-10 flex justify-center items-center text-center text-white bg-secondary rounded-full px-10 py-3 max-sm:text-xl text-2xl bt font-extrabold duration-50 hover:scale-105 active:scale-85 hover:bg-[#A1E6EB] uppercase w-1/3 mx-auto mb-10" target="_blank"
          href="mailto:wicsuoft@gmail.com"
        >
          contact us
        </a>
      </MaxWidthWrapper>
      <Image
        src={Poster}
        alt="Co-Existence with AI"
        className="w-1/2 h-1/2 object-cover mx-auto"
        quality={100}
        loading="lazy"
      />
    </main>
  );
}
