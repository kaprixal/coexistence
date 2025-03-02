import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { ClubCards } from "../about/components/ClubCards";
import { DescriptionCards } from "../components/DescriptionCards";
import illuminaite from "../assets/logos/illuminaite.svg";
import WiCS from "../assets/logos/wics.svg";
import CSSU from "../assets/logos/cssu.svg";
import SpeakerCard from "./components/SpeakerCard";

export default function Home() {
  return (
    <main>
      <div className="w-full h-[47vh] max-sm:h-[30vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70  to-white/0 to-10%"></div>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-primary text-white">
          <h1 className="text-8xl pt-5 font-extrabold text-white drop-shadow-2xl text-center uppercase max-sm:text-6xl">
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
          ethical implications? Whether you&apos;re a coding expert or completely new
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
          header="You&apos;ll have the opportunity to:"
          paragraph="Network with tech companies, startup founders and academics. Collaborate with diverse teams to develop innovative, ethical AI solutions. Create a meaningful project that addresses real ethical challenges in AI development. Gain experience in pitching business ideas!"
          splitSentences
        ></DescriptionCards>

        <h2 className="text-3xl lg:text-5xl text-primary font-extrabold uppercase text-center pt-24">
          Signups for this year's hackathon are now closed!
        </h2>
        <p className="italic text-center pt-5 pb-10 text-lg">
          All Participants who completed the registration and commitment forms will receive onboarding information soon! Please contact us if you have any questions or concerns about the event.
        </p>
        <a
          className="mx-10 mt-5 flex justify-center items-center text-center text-white bg-secondary rounded-full px-10 py-3 max-sm:text-xl text-2xl bt font-extrabold duration-50 hover:scale-105 active:scale-85 hover:bg-[#A1E6EB] uppercase w-1/3 mx-auto" target="_blank"
          href="mailto:wicsuoft@gmail.com"
        >
          contact us
        </a>
        <hr className="bg-primary w-1/3 h-[2px] mx-auto mt-10"></hr>
        <h1 className="text-3xl lg:text-5xl text-primary font-extrabold uppercase text-center pt-24 pb-10 lg:pb-20">
          About the Clubs
        </h1>
        <ClubCards
          image={illuminaite}
          link="https://illuminaite-academy.github.io/"
          title="illuminaite"
          description="We believe everyone, no matter what major, should have the liberty to use these powerful technologies efficiently and ethically. we aim to lower the barriers of entry into the tech field through hosting accessible, hybrid events and growing a deeply connected online community."
        ></ClubCards>
        <ClubCards
          image={WiCS}
          link="https://uoftwics.netlify.app/"
          title="Women in Computer Science (WiCS)"
          description="University of Toronto Women in Computer Science is a student-led organization dedicated to supporting all computer science students in their academic and professional careers."
        ></ClubCards>
        <ClubCards
          image={CSSU}
          link="https://www.cssu.ca/"
          title="Computer Science Student Union (CSSU)"
          description="The Computer Science Student Union (CSSU) represents over 4300 Computer Science students who are either taking a Computer Science course or are part of a Computer Science program at the University of Toronto St. George campus. We are a student-governed body that receives funding from the Arts & Science Students’ Union, the Department of Computer Science, and our union store."
        ></ClubCards>
        <hr className="bg-primary w-1/3 h-[2px] mx-auto mt-10"></hr>
        <div className="text-center"><DescriptionCards
          header="Networking Guests"
          paragraph=""
        ></DescriptionCards></div>
        <div className="flex flex-wrap gap-5 justify-center">
          <SpeakerCard
            name="Rawan Abulibdeh"
            image="/guests/RA.png"
            title="PhD Candidate"
            description="I am a PhD candidate at the University of Toronto in the Department of Electrical and Computer Engineering. My research focuses on machine learning, natural language processing, and health informatics. I previously completed my Master’s in computer science from the University of Guelph, where I worked on AI and security, and was an intern at the Ontario HIV Treatment Network for a machine learning project handling drug data. My research focuses on machine learning to phenotype patients social determinants of health from electronic health records."
          >
          </SpeakerCard>

          <SpeakerCard
            name="Sagarika Banerjee"
            image="/guests/SB.png"
            title="AI Governance Lead at Dayforce"
            description="Sagarika Banerjee is a seasoned technology leader specializing in AI governance, data analytics, and quality assurance. She currently serves as the AI Governance Lead at Dayforce, where she oversees responsible AI practices, ensuring compliance, fairness, and ethical implementation of AI-driven solutions. Her extensive experience across industries, from finance and insurance to enterprise HCM software, has made her a leader in AI governance, data quality, and business intelligence. She is based in Toronto, Ontario, Canada, and is passionate about integrating ethical AI practices into enterprise solutions."
          >
          </SpeakerCard>

          <SpeakerCard
            name="Mario Grech"
            image="/guests/MG.png"
            title="Entrepreneur"
            description="Mario Grech is a high-technology business executive, entrepreneur, and investor with international leadership experience in large Silicon Valley tech companies, including CRAY Research, Oracle, Sun Microsystems, as well as co-founding/co-funding four successful privately-held startup ventures. He also serves as an adviser to U.S. government departments and agencies on export and repatriation control policy for advanced supercomputing technologies. Currently, Mario is giving back to his alma mater and to Canada by helping the University of Toronto position itself as an innovation hub in Canada and around the world. He holds a Master of Business in leadership from Rice University, and a Bachelor of Applied Science in Engineering from the University of Toronto."
          >
          </SpeakerCard>

          <SpeakerCard
            name="Shahryaz"
            image="/guests/Sh.png"
            title="IT Leader & Solutions Architect at Cumulus Data Consulting Inc"
            description="With over 20 years of experience in IT leadership and solutions architecture, I specialize in turning intricate challenges into innovative, seamless solutions. My expertise spans designing cutting-edge cloud infrastructures, driving big data advancements, and crafting intelligent content management systems. From strategic planning and cloud migrations to disaster recovery and enterprise architecture, I’m dedicated to translating visions into impactful realities. Whether it’s optimizing performance, enhancing security, or leading digital transformations, I bring a blend of innovation, precision, and results to every initiative. Together, we can create a future powered by smart technology and forward-thinking strategies."
          >
          </SpeakerCard>

          <SpeakerCard
            name="Mahri Kadyrova"
            title="PhD Researcher at the University of Toronto&apos;s Electrical and Computer Engineering Department"
            description="My research focuses on using computer vision to develop a tongue assessment tool that enables remote detection and assessment of neurodegenerative diseases. When I&apos;m not working on machine learning models, you&apos;ll find me reading fiction books or exploring art galleries."
          >
          </SpeakerCard>
          </div>
        <div className="text-center"><DescriptionCards
          header="Mentors"
          paragraph=""
        ></DescriptionCards></div>
          <div className="flex flex-wrap gap-5 justify-center">
          <SpeakerCard
            name="Yasmine Samir Abdelrahman"
            image="/guests/YSA.png"
            title="Product Designer at Payworks"
            description="Yasmine is a Product Designer passionate about creating digital experiences that empower individuals to share their authentic stories and connect with others. She is currently a Product Designer at Payworks, where she focuses on designing time and scheduling solutions for employees in the workforce. Previously, she contributed to design initiatives at Interac, RBC, and several startups, enhancing user experiences through research-driven and system-focused design."
          >
          </SpeakerCard>
          <SpeakerCard
            name="Jesse Ward-Bond"
            image="/guests/JWB.png"
            title="PhD Student in MIE @ University of Toronto"
            description="I am a 2nd year PhD student studying AI/Optimization for Urbanism. In particular, I investigate how we can minimize the environmental burdens of housing development while also meeting out housing goals: Clearly housing needs to be built, but urban infrastructure is responsible for a large portion of annual GHG emissions. Our planning decisions --- mainly where and how we choose to build housing --- have profound and long-lasting impacts on urban sustainability. I try to unpack and optimize these impacts using geospatial ML and operations research tools. Outside of school I write/host trivia events, and work on my pollinator garden."
          >
          </SpeakerCard>
          <SpeakerCard
            name="Rui Qi"
            image="/guests/RQ.png"
            title="PhD Student"
            description="Rui Qi completed her bachelor&apos;s degree in the Integrated Biomedical Engineering and Health Sciences program at McMaster University in 2023, where she earned B.Eng BME with a specialization in Mechatronics. She is currently pursuing PhD studies in the Department of ECE at the University of Toronto, focusing on machine learning applications in analyzing electrocardiogram."
          >
          </SpeakerCard>
          <SpeakerCard
            name="Steven Coyne"
            image="/guests/SC.png"
            title="Assistant Professor, University of Toronto"
            description="Hi! I am an Assistant Professor, Teaching Stream, in philosophy and computer science at the University of Toronto. I teach courses in applied ethics, philosophy of law, and ethics of technology. I am also a co-lead of and the main ethicist involved with the Embedded Ethics Education Initiative (E3I), which puts ethics modules co-developed and co-taught by philosophers and computer scientists into computer science classes. I have a PhD in philosophy from the University of Toronto and a BSc in applied mathematics from the University of Calgary."
          >
          </SpeakerCard>

          <SpeakerCard
            name="Eman Ahmed"
            image="/guests/EA.png"
            title="PhD Student"
            description="I am a PhD student in Electrical and Computer Engineering, specializing in biomedical applications of machine learning and data analysis. My research focuses on leveraging AI and statistical methods to extract insights from medical data, optimize clinical decision-making, and improve patient outcomes. I have experience working with large datasets, predictive modeling, and interdisciplinary research at the intersection of engineering and healthcare."
          >
          </SpeakerCard>

          <SpeakerCard
            name="Matthew Tamura"
            image="/guests/MT.png"
            title="Technical Lead / MATRA AI"
            description="Matthew Tamura is a 4th Year Engineering Science Student with a philosophy minor at the University of Toronto. He plays an active role in responsible AI research across disciplines, being part of the AI Fact Labels research group at the American Psychiatric Association, a research assistant at the Human Centered Data Science Lab, 2024-2025 Co-President of the University of Toronto Machine Intelligence Student Team (UTMIST), and technical lead at the AI Consulting/Auditing startup MATRA AI. His interests are AI Governance, AI Ethics and Human Computer Interaction."
          >
          </SpeakerCard>
          <SpeakerCard
            name="Mahri Kadyrova"
            title="PhD Researcher at the University of Toronto&apos;s Electrical and Computer Engineering Department"
            description="My research focuses on using computer vision to develop a tongue assessment tool that enables remote detection and assessment of neurodegenerative diseases. When I&apos;m not working on machine learning models, you&apos;ll find me reading fiction books or exploring art galleries."
          >
          </SpeakerCard>
          </div>
        <div className="text-center"><DescriptionCards
          header="Judges"
          paragraph=""
        ></DescriptionCards></div>
        <div className="flex flex-wrap gap-5 justify-center">
          <SpeakerCard
            name="Steven Coyne"
            image="/guests/SC.png"
            title="Assistant Professor, University of Toronto"
            description="Hi! I am an Assistant Professor, Teaching Stream, in philosophy and computer science at the University of Toronto. I teach courses in applied ethics, philosophy of law, and ethics of technology. I am also a co-lead of and the main ethicist involved with the Embedded Ethics Education Initiative (E3I), which puts ethics modules co-developed and co-taught by philosophers and computer scientists into computer science classes. I have a PhD in philosophy from the University of Toronto and a BSc in applied mathematics from the University of Calgary."
          >
          </SpeakerCard>

          <SpeakerCard
            name="Linda Wang"
            image="/guests/LW.png"
            title="Computer Science Canada Board Member + CS-Can Student & Postdoc Advisory Committee Chair"
            description="Linda is an engineer bringing experience from both academia research and industry. She is a scholar offered $180,000+ cumulatively in scholarships and holds a pending patent. https://lindawang.dev/"
          >
          </SpeakerCard>

          <SpeakerCard
            name="Jesse Ward-Bond"
            image="/guests/JWB.png"
            title="PhD Student in MIE @ University of Toronto"
            description="I am a 2nd year PhD student studying AI/Optimization for Urbanism. In particular, I investigate how we can minimize the environmental burdens of housing development while also meeting out housing goals: Clearly housing needs to be built, but urban infrastructure is responsible for a large portion of annual GHG emissions. Our planning decisions --- mainly where and how we choose to build housing --- have profound and long-lasting impacts on urban sustainability. I try to unpack and optimize these impacts using geospatial ML and operations research tools. Outside of school I write/host trivia events, and work on my pollinator garden."
          >
          </SpeakerCard>

          <SpeakerCard
            name="Kevin Hoang"
            image="/guests/KH.png"
            title="AI Solutions Engineer, Zoom"
            description="As an AI Solutions Engineer at Zoom, Kevin Hoang specializes in scoping, developing, and maintaining innovative AI solutions to enhance customer experience processes. With a proven track record of successfully conceptualizing and implementing AI-driven efficiencies, Kevin brings a multi-faceted approach to the role, combining product management, AI workflow/integration development, and IT administration. Kevin&apos;s AI expertise spans across content generation, unstructured data analysis, and quality assurance."
          >
          </SpeakerCard>

          <SpeakerCard
            name="Yasmine Samir Abdelrahman"
            image="/guests/YSA.png"
            title="Product Designer at Payworks"
            description="Yasmine is a Product Designer passionate about creating digital experiences that empower individuals to share their authentic stories and connect with others. She is currently a Product Designer at Payworks, where she focuses on designing time and scheduling solutions for employees in the workforce. Previously, she contributed to design initiatives at Interac, RBC, and several startups, enhancing user experiences through research-driven and system-focused design."
          >
          </SpeakerCard>

          <SpeakerCard
            image="/guests/AG.png"
            name="Audrey Garcia"
            title="UI/UX Designer, IBM"
            description="I&apos;m a self-taught product designer with a background in Economics and Liberal Arts. Currently, I&apos;m a UI/UX designer at IBM, shaping the future of enterprise business intelligence software. Outside of work, catch me at my pilates studio, learning circus arts, spending time with my pet, and giving back to the design community."
          >
          </SpeakerCard>

        </div>
        
        {/* <hr className="bg-primary w-1/3 h-[2px] mx-auto mt-10"></hr> */}

      </MaxWidthWrapper>
    </main>
  );
}
