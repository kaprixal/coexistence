import MaxWidthWrapper from "../components/MaxWidthWrapper";


export default function Home() {
  return (
    <main>
      <div className="w-full h-[47vh] max-sm:h-[30vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70  to-white/0 to-10%"></div>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-primary text-white">
          <h1 className="text-8xl pt-5 font-extrabold text-white drop-shadow-2xl text-center uppercase max-sm:text-6xl">
            join us
          </h1>
        </div>
      </div>
      <MaxWidthWrapper>
        {/* Hero section */}
        <h1 className="mt-20 max-sm:text-3xl max-sm:text-center text-primary text-4xl font-bold max-md:text-6xl text-center">
          Get involved with the UofT AI Ethics Hackathon 2025!
        </h1>
        <p className="mt-5 text-2xl">
          We are looking for passionate individuals to help make this event a success! Whether you want to create or judge groundbreaking projects, inspire as a speaker, mentor the next generation of innovators, or volunteer behind the scenes, there is a place for you at UofT AI Ethics Hackathon 2025.</p><p className="mt-5 text-2xl"> 
          This is your chance to engage with top talent, share your expertise, and contribute to the future of ethical AI.
        </p>
        <div className="mt-10 flex flex-col md:flex-row w-full justify-center items-center">
          <a
            className="mx-10 mt-5 flex justify-center items-center text-center text-white bg-primary rounded-full px-10 py-3 max-sm:text-xl text-2xl bt font-extrabold duration-50 hover:scale-105 active:scale-85 hover:bg-[#8B5050] uppercase" target="_blank"
            href="https://forms.gle/NyEQv9QDYCnELa888"
          >
            INDUSTRY/ACADEMIC GUEST SIGN UP
          </a>
          <a
            className="mt-5 flex justify-center items-center text-center text-white bg-secondary rounded-full px-10 py-3 max-sm:text-xl text-2xl bt font-extrabold duration-50 hover:scale-105 active:scale-85 hover:bg-[#A1E6EB] uppercase" target="_blank"
            href="https://forms.gle/c44xoGNcv5LuxBoj6"
          >
            Participant Sign Up
          </a>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
