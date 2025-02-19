import MaxWidthWrapper from "../components/MaxWidthWrapper";



export default function Home() {
  return (
    <main>
      <div className="w-full h-[47vh] max-sm:h-[30vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70  to-white/0 to-10%"></div>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-primary text-white">
          <h1 className="text-8xl pt-5 font-extrabold text-white drop-shadow-2xl text-center uppercase max-sm:text-6xl">
            Sponsors
          </h1>
        </div>
      </div>
      <MaxWidthWrapper>
        {/* Hero section */}
        <h1 className="mt-20 max-sm:text-3xl max-sm:text-center text-primary text-3xl font-bold max-md:text-5xl text-center">
          🚀✨ Coming Soon... ✨🚀
        </h1>
        </MaxWidthWrapper>
    </main>
  );
}
