import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { DescriptionCards } from "../components/DescriptionCards";

export default function Home() {
    return (
        <main>
            <div className="w-full h-[47vh] max-sm:h-[30vh] relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70  to-white/0 to-10%"></div>
                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-primary text-white">
                    <h1 className="text-8xl pt-5 font-extrabold text-white drop-shadow-2xl text-center uppercase max-sm:text-6xl">
                        resources
                    </h1>
                </div>
            </div>
            <MaxWidthWrapper>
                <DescriptionCards
                    header="AI Ethics Hackathon Resources"
                    paragraph="We&apos;ve provided a document below that outlines some resources that you can use to help you with your AI Ethics Hackathon project. We also encourage you to do your own research and find other resources that may be helpful to you."
                />
                <h1 className="text-2xl text-center mt-10"> Here are some resources to get you started:</h1>
                <ul className="text-xl underline text-secondary text-center">
                    <li>
                        <a href="https://medium.com/high-stakes-design/an-ethical-matrix-for-fakefinder-79de94f15564" target="_blank" rel="noopener noreferrer">
                            An “ethical matrix” for FakeFinder by Andrea B
                        </a>
                    </li>
                    <li>
                        <a href="https://dataresponsibly.github.io/we-are-ai/modules/design-notes/module-3/" target="_blank" rel="noopener noreferrer">
                            Norwegian fishing industry Ethical Matrix | Module 3: Design Notes
                        </a>
                    </li>
                    <li>
                        <a href="https://www.semanticscholar.org/paper/Ethical-Matrix-Manual-Mepham-Kaiser/b3a24d5e2907027475a9a963ff21d3e218a75ca0" target="_blank" rel="noopener noreferrer">
                            Ethical Matrix Manual | Semantic Scholar
                        </a>
                    </li>
                    <li>
                        <a href="https://blog.dataiku.com/algorithmic-stakeholders-an-ethical-matrix-for-ai" target="_blank" rel="noopener noreferrer">
                            Algorithmic Stakeholders: An Ethical Matrix for AI
                        </a>
                    </li>
                    <li>
                        <a href="https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai" target="_blank" rel="noopener noreferrer">
                            Ethics Guideliens for Trustworthy AI (EU Commission)
                        </a>
                    </li>
                    <li>
                        <a href="https://futureoflife.org/open-letter/ai-principles/" target="_blank" rel="noopener noreferrer">
                            The Asilomar AI Principles (Future of Life Institute)
                        </a>
                    </li>
                    <li>
                        <a href="https://standards.ieee.org/initiatives/autonomous-intelligence-systems/" target="_blank" rel="noopener noreferrer">
                            IEEE Ethically Aligned Design
                        </a>
                    </li>
                    <li>
                        <a href="https://www.oecd.org/en/topics/policy-issues/artificial-intelligence.html" target="_blank" rel="noopener noreferrer">
                            OECD Principles on AI
                        </a>
                    </li>
                </ul>
                <iframe
                    className="w-full h-[50vh] sm:h-[70vh] lg:w-2/3 lg:h-[100vh] mx-auto relative mt-10"
                    src="/pdf/HackathonEthicsResources.pdf"
                    width="100%"
                    height="auto">
                </iframe>
            </MaxWidthWrapper>
        </main>
    );
}