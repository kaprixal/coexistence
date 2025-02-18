import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { ClubCards } from "../about/components/ClubCards";
import { DescriptionCards } from "./components/DescriptionCards";
import illuminaite from "../assets/logos/illuminaite.svg";
import WiCS from "../assets/logos/wics.svg";
import CSSU from "../assets/logos/cssu.svg";

export default function Home() {
  return (
    <main>
      <div className="w-full h-[47vh] max-sm:h-[30vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70  to-white/0 to-10%"></div>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-primary text-white">
          <h1 className="text-8xl pt-5 font-extrabold text-white drop-shadow-2xl text-center uppercase max-sm:text-7xl">
            about us
          </h1>
        </div>
      </div>

      <MaxWidthWrapper className="pt-8">
        {/* Hero section */}
        <DescriptionCards
          header="Co-existence with AI: UofT AI Ethics Hackathon 2025 Hosted by WiCS,
          CSSU and illuminaite"
          paragraph="Are you passionate about technology and want to learn more about its
          ethical implications? Whether you're a coding expert or completely new
          to tech (no coding experience is required), this unique hackathon
          welcomes participants from all backgrounds to tackle real-world
          challenges at the intersection of AI and ethics."
        ></DescriptionCards>
        <DescriptionCards
          header="What makes this Hackathon Different?"
          paragraph="Unlike traditional hackathons, you will mainly focus on creating
          solutions and how they interact with AI & Ethics. Our structured
          approach guides you through ideation, solution development, and
          ethical assessment, ensuring everyone can contribute meaningfully to a
          great business pitch for prizes. You will have the opportunity to gain
          personal connections with companies, startup founders and mentors at
          the hackathon."
        ></DescriptionCards>
        <DescriptionCards
          header="You'll have the opportunity to:"
          paragraph="Network with tech companies, startup founders and academics. Collaborate with diverse teams to develop innovative, ethical AI solutions. Create a meaningful project that addresses real ethical challenges in AI development. Gain experience in pitching business ideas!"
          splitSentences
        ></DescriptionCards>

        <h2 className="text-3xl lg:text-5xl text-black font-extrabold uppercase text-center pt-24">
          Interested in attending? Register now!
        </h2>
        <a
          className="mt-5 w-60 mx-auto flex justify-center items-center text-center text-white bg-secondary rounded-full py-3 max-sm:text-xl text-2xl bt font-extrabold duration-50 hover:scale-105 active:scale-85 hover:bg-[#A1E6EB] hover:text-primary uppercase"
          target="_blank"
          href="https://forms.gle/c44xoGNcv5LuxBoj6"
        >
          Register Now
        </a>
        <p className="italic text-center pt-5 pb-10 text-lg">
          Note: you can sign up by yourself or with a group of up to 3 people.
          If you sign up alone we will find you a group to work with :)
        </p>
        <hr className="bg-primary w-1/3 h-[2px] mx-auto mt-10"></hr>
        <h1 className="text-3xl lg:text-5xl text-black font-extrabold uppercase text-center pt-24 pb-10 lg:pb-20">
          About the Clubs
        </h1>
        <ClubCards
          image={illuminaite}
          title="illuminaite"
          description="We believe everyone, no matter what major, should have the liberty to use these powerful technologies efficiently and ethically. we aim to lower the barriers of entry into the tech field through hosting accessible, hybrid events and growing a deeply connected online community."
        ></ClubCards>
        <ClubCards
          image={WiCS}
          title="Women in Computer Science (WiCS)"
          description="University of Toronto Women in Computer Science is a student-led organization dedicated to supporting all computer science students in their academic and professional careers."
        ></ClubCards>
        <ClubCards
          image={CSSU}
          title="Computer Science Student Union (CSSU)"
          description="The Computer Science Student Union (CSSU) represents over 4300 Computer Science students who are either taking a Computer Science course or are part of a Computer Science program at the University of Toronto St. George campus. We are a student-governed body that receives funding from the Arts & Science Students’ Union, the Department of Computer Science, and our union store."
        ></ClubCards>
        {/* <hr className="bg-primary w-1/3 h-[2px] mx-auto mt-10"></hr>
        <h1>Speakers</h1>
        <hr className="bg-primary w-1/3 h-[2px] mx-auto mt-10"></hr>
        <h1>Staff</h1> */}
      </MaxWidthWrapper>
    </main>
  );
}
