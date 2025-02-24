import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Image from "next/image";

import SAP from "../assets/logos/sap.png";
import UofTEntrepreneurship from "../assets/logos/uoftentrepreneur.png";
import CumulusData from "../assets/logos/cumulus.png";
import Nowit from "../assets/logos/nowit.png";

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
      <MaxWidthWrapper className="pt-8">
        <h1 className="mt-16 text-3xl lg:text-5xl text-primary font-bold">
          Support the future of Ethical AI
        </h1>
        <div className="sm:text-xl w-50 mx-auto pt-5 text-base lg:text-2xl">
          <p>
            {`The UofT AI Ethics Hackathon 2025 brings together innovative thinkers—developers, designers, and problem-solvers—to tackle pressing ethical challenges in AI. Hosted at the University of Toronto, this event fosters collaboration, critical discussion, and groundbreaking ideas on responsible AI development.`}
            <br />
            <br />
            {`As a sponsor, you'll gain direct access to top talent, showcase your commitment to ethical AI, and connect with future industry leaders. Engage with participants beyond the hackathon weekend through mentorship, networking, and branding opportunities.`}
            <br />
            <br />
            {`Join us in shaping the future of AI ethics. Let’s build a responsible AI-driven world together!`}
            <br />
            <br />
            {`Interested in partnering with us? Check out our sponsorship package or contact us at wicsuoft@gmail.com for more information.`}
            <br />
          </p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row w-full justify-center items-center">
          <a
            className="mx-10 mt-5 flex justify-center items-center text-center text-white bg-primary rounded-full px-10 py-3 max-sm:text-xl text-2xl bt font-extrabold duration-50 hover:scale-105 active:scale-85 hover:hover:bg-[#8B5050] uppercase" target="_blank"
            href="https://drive.google.com/file/d/16Oy4saDTpofk3Osw5KNPfw_G7COkt10m/view?usp=sharing"
          >
            sponsorship package
          </a>
          <a
            className="mx-10 mt-5 flex justify-center items-center text-center text-white bg-secondary rounded-full px-10 py-3 max-sm:text-xl text-2xl bt font-extrabold duration-50 hover:scale-105 active:scale-85 hover:bg-[#A1E6EB] uppercase" target="_blank"
            href="mailto:wicsuoft@gmail.com"
          >
            contact us
          </a>
        </div>

        <hr className="bg-primary w-3/4 h-[2px] mx-auto mt-10"></hr>

        <h1 className="mt-16 mb-3 text-3xl lg:text-5xl text-primary font-bold">
          Title Sponsor:
        </h1>
        <div className="flex flex-col md:flex-row w-full justify-center items-center mb-20">
          <Image src={SAP} alt="SAP" className="w-1/4 max-sm:w-1/2" />
          <div className="sm:text-xl w-2/3 mx-auto pt-5 text-base lg:text-2xl">
            <p>
              {`As a global leader in enterprise applications and business AI, `}
              <a href="https://www.sap.com/canada/index.html" target="_blank" className="text-secondary hover:underline">SAP</a>
              {` stands at the nexus of business and technology. For over 50 years, organizations have trusted SAP to bring out their best by uniting business-critical operations spanning finance, procurement, HR, supply chain, and customer experience. The company’s integrated applications connect all parts of a business into an intelligent suite on a fully digital platform, thereby replacing the process-driven, legacy platform. Today, SAP has more than 230 million cloud users, more than 100 solutions covering all business functions, and the largest cloud portfolio of any provider.`}
            </p>
          </div>
        </div>
        <h2 className="mt-16 mb-3 text-2xl lg:text-4xl text-primary font-bold">
          Co-Sponsors:
        </h2>
        <div className="flex flex-col md:flex-row w-full justify-center items-center">
          <Image src={UofTEntrepreneurship} alt="UofT Entrepreneurship" className="w-1/4 max-sm:w-1/2" />
          <div className="sm:text-xl w-2/3 mx-auto pt-5 text-base lg:text-2xl">
            <p>
              <a href="https://entrepreneurs.utoronto.ca/" target="_blank" className="text-secondary hover:underline">The University of Toronto Entrepreneurship (UTE)</a>
              {` community does much more than accelerate startups. We accelerate ideas, people, social impact, and technologies too. All while striving to create an environment that is inclusive and representative of the diverse and talented innovators and entrepreneurs around us. UTE is a central voice for entrepreneurship across U of T’s three campuses and represents a powerful network of 12+ accelerators. We are here to support, develop and celebrate our best and brightest founders and their startups through a broad range of resources, network access and entrepreneurship activities.`}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center max-sm:mb-20">
          <Image src={Nowit} alt="Nowit" className="w-1/4 max-sm:w-1/2" />
          <div className="sm:text-xl w-2/3 mx-auto pt-5 text-base lg:text-2xl">
            <p>
              <a href="https://nowit.ca/" target="_blank" className="text-secondary hover:underline">NowIT</a>
              {` is a boutique IT Managed Services and CFO/Controller firm located in Toronto’s Fashion District. With years of experience, our engineers have the expertise across all enterprise-level operating systems, applications and platforms. We offer timely support for Windows and macOS desktops, notebooks and as well as servers and network equipment.`}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center">
          <Image src={CumulusData} alt="Cumulus Data" className="w-1/4 max-sm:w-1/2" />
          <div className="sm:text-xl w-2/3 mx-auto pt-5 text-base lg:text-2xl">
            <p>
              {`With over 20 years of experience in IT leadership and solutions architecture, `}
              <a href="https://cumulusdata.ca/" target="_blank" className="text-secondary hover:underline">Cumulus Data</a>
              {` specializes in turning intricate challenges into innovative, seamless solutions. Their expertise spans designing cutting-edge cloud infrastructures, driving big data advancements, and crafting intelligent content management systems. From strategic planning and cloud migrations to disaster recovery and enterprise architecture, they are dedicated to translating visions into impactful realities. Whether it's optimizing performance, enhancing security, or leading digital transformations, they bring a blend of innovation, precision, and results to every initiative.`}
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
