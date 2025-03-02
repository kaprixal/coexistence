import MaxWidthWrapper from "../components/MaxWidthWrapper";

export default function Home() {
  return (
    <main>
      <div className="w-full h-[47vh] max-sm:h-[30vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70  to-white/0 to-10%"></div>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-primary text-white">
          <h1 className="text-8xl pt-5 font-extrabold text-white drop-shadow-2xl text-center uppercase max-sm:text-6xl">
            Timeline + Rubric
          </h1>
        </div>
      </div>
      <MaxWidthWrapper>
        <h1 className="mt-16 text-3xl lg:text-5xl text-primary font-bold">
          Theme: Co-existence with AI
        </h1>
        <div className="sm:text-xl w-50 mx-auto pt-5 mb-5 text-base lg:text-2xl ">
          <h1 className="text-3xl font-bold mb-5">Subthemes & Examples:</h1>
          <ul className="list-disc pl-6 space-y-6">
            <li>
              <h2 className="font-bold text-2xl mb-2">AI in Everyday Life</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Personalized AI recommendations (for shopping, music etc)
                </li>
                <li>Using AI to personalize learning</li>
                <li>AI-powered parenting technologies</li>
                <li>Help everyday fraud detection</li>
              </ul>
            </li>
            <li>
              <h2 className="font-bold text-2xl mb-2">Invisible AI</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Monitor AI algorithms for potential biases in decision-making
                </li>
                <li>Help the public determine between deepfakes and reality</li>
                <li>
                  Protects a user&apos;s rights from being used as training for
                  AI
                </li>
                <li>
                  Verify the correctness of AI's work (ie. How much can we rely
                  on the results produced by AI?)
                </li>
              </ul>
            </li>
            <li>
              <h2 className="font-bold text-2xl mb-2">AI in Healthcare</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Diagnose a patient without bias across different demographics
                </li>
                <li>Protect the privacy of patients and their data</li>
                <li>
                  Symptom/disease detection device that is accessible to all
                  communities
                </li>
                <li>
                  Monitor at-home patients that help caregivers keep track of
                  patients&apos; needs
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <h1 className="text-3xl font-bold mb-5">
          Students can sign up for Figma Pro at{" "}
          <a
            href="https://www.figma.com/education/"
            target="_blank"
            className="text-secondary hover:underline"
          >
            https://www.figma.com/education/
          </a>
        </h1>
        
      </MaxWidthWrapper>
    </main>
  );
}
