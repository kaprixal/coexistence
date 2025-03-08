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
          Signups for this year&apos;s hackathon are now closed!
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
            name="Bey Wang"
            image="/guests/BW.png"
            title="Senior Manager of Digital Serve & Support at Rogers Communications"
            description="l&apos;ve led the development and delivery of customized digital services, enhancing user engagement and satisfaction. As an empathetic leader, I&apos;m passionate about building a community that leverages Al for wellness. I&apos;m excited to connect with fellow students and industry professionals to collaborate on innovative solutions at this hackathon."
          >
          </SpeakerCard>
          <SpeakerCard
            name="Satish Rao"
            image="/guests/SR.png"
            title="Vice President, Enterprise Data & Technology, Northbridge Financial Corporation"
            description="A passionate and optimistic leader with a diverse experience leading multiple technology implementations across the Insurance industry. Currently leading a team of rock stars in data engineering, database engineering and solving problems by developing cutting edge solutions at Northbridge Financial Corporation. With a Bachelor’s degree in Mechanical Engineering along with a Diploma in Advanced Computing, I have focused on building a career in Information Technology and strive to achieve excellence in everything I get an opportunity to do or be a part of. In my free time, I enjoy spending time with family & friends, traveling, and sports. I also spend time volunteering for community events."
          >
          </SpeakerCard>
          <SpeakerCard
            name="Mehali Modi"
            image="/guests/MM.png"
            title="Software Engineer"
            description="I am a mobile developer by profession with a passion for creating seamless digital experiences. I enjoy working with AI and love learning how to integrate it into mobile apps in my free time. Outside of tech, I like to go on food sprees and explore artistic structures like hidden graffiti walls. Mediterranean cuisine is my favorite, and nothing beats a good mezze platter."
          >
          </SpeakerCard>
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
            name="Shahryaz Bari"
            image="/guests/Sh.png"
            title="IT Leader & Solutions Architect at Cumulus Data Consulting Inc"
            description="With over 20 years of experience in IT leadership and solutions architecture, I specialize in turning intricate challenges into innovative, seamless solutions. My expertise spans designing cutting-edge cloud infrastructures, driving big data advancements, and crafting intelligent content management systems. From strategic planning and cloud migrations to disaster recovery and enterprise architecture, I’m dedicated to translating visions into impactful realities. Whether it’s optimizing performance, enhancing security, or leading digital transformations, I bring a blend of innovation, precision, and results to every initiative. Together, we can create a future powered by smart technology and forward-thinking strategies."
          >
          </SpeakerCard>

          <SpeakerCard
            name="Mahri Kadyrova"
            image="/guests/MK.png"
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
            name="Steve Coyne"
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
            image="/guests/MK.png"
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
            name="Hao Chen"
            image="/guests/HC.png"
            title="Specialist Customer Success Manager for Supply Chain Management, SAP"
            description="Hao is a Customer Success Manager helping large enterprises optimize efficiency and operationalize excellence in their supply chains. He is a proud graduate of St. Michael’s College in the University of Toronto and is a sitting member of the Alumni Board. Outside of work Hao enjoys long walks, good food, and spending quality time with those he&apos;s closest with."
          >
          </SpeakerCard>
          <SpeakerCard
            name="Isiah Ngou"
            image="/guests/IN.png"
            title="Robotic Scene Understanding Researcher at UToronto, Incoming at Meta"
            description="Isaiah is a masters student at UofT, his work focuses on edge AI deployment and low-latency perception systems."
          >
          </SpeakerCard>
          <SpeakerCard
            name="Steve Coyne"
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
            company="Workshop Speaker"
            title="UI/UX Designer, IBM"
            description="I&apos;m a self-taught product designer with a background in Economics and Liberal Arts. Currently, I&apos;m a UI/UX designer at IBM, shaping the future of enterprise business intelligence software. Outside of work, catch me at my pilates studio, learning circus arts, spending time with my pet, and giving back to the design community."
          >
          </SpeakerCard>

        </div>
        <div className="text-center"><DescriptionCards
          header="SAP Guests"
          paragraph=""
        ></DescriptionCards></div>
        <div className="flex flex-wrap gap-5 justify-center">
          <SpeakerCard
            name="Sujatha Kamma"
            image="/guests/SK.png"
            title="MBA MSc PMP | Industry Executive Advisor for Healthcare, Public Sector, Education & AI, SAP"
            description="Sujatha has a background in Medical Genetics, Bioinformatics, Biostatistics, and AI and an MBA. With over 25 years of experience, she has developed expertise in leadership, technology, and organizational change management within various public sector, startups and private organizations. She is also the founder of an AI startup and serves as a mentor and expert advisor for AI startup companies. Connect with her on LinkedIn https://www.linkedin.com/in/sujathakamma/"
          >
          </SpeakerCard>
          <SpeakerCard
            name="Bryan Chang"
            image="/guests/BC.png"
            title="Product Marketing Consultant, SAP"
            description="Bryan is currently a Product Marketing Consultant at SAP. With previous work experience on Sales, Marketing and Growth across Nestle, Ab-Inbev, Microsoft and Delivery Hero. He has a MBA degree at Rotman Uoft and a industrial engineering bachelor degree. On the side, Bryan is partner of a boutique consulting firm based In South America that help SMB companies to craft their marketing and sales strategy. He is interest in AI business topics and exploring restaurants around the city."
          >
          </SpeakerCard>
          <SpeakerCard
            name="Tenzin Ozaki"
            image="/guests/TO.png"
            title="Account Executive, SAP"
            description="Tenzin has been at SAP for two years, joining through SAP’s Sales Academy program and currently working as a Large Enterprise Account Executive on Canada’s Public Sector industry team. Tenzin covers Federal Crown Corporations, Municipalities, and Higher Education, including the University of Toronto.
"
          >
          </SpeakerCard>

          <SpeakerCard
            name="Michelle Zorn"
            image="/guests/MZ.png"
            title="Industry Account Executive, SAP"
            description="Sales Leader offering 20+ years of experience driving continuous revenue growth, executing dynamic strategies and leading teams in achieving ambitious goals. Recognized as an energetic relationship-builder who quickly gains the trust and respect of clients, senior executives, external partners and key decision-makers to deliver strategies that align with performance goals and long-term business objectives. Hands-on leader with a proven history of building reliable teams and exercising a sense of urgency in promoting a culture of performance. Confident communicator adept at delivering compelling presentations, engaging stakeholders and negotiating lucrative deals."
          >
          </SpeakerCard>

          <SpeakerCard
            name="Anton Charles Doss"
            image="/guests/ACD.png"
            title="SAP Consultant - Technical Service Manager, SAP"
            description="Charles is an SAP BASIS professional working as a Technical Service Manager (TSM) in the Enterprise Cloud Services (ECS) unit. He serves as a trusted technical advisor, ensuring the security and optimization of customers&apos; SAP systems within SAP ECS. With a deep understanding of customer business processes, IT landscapes, and complexities, he plays a key role in guiding organizations through their digital transformation. As part of the RISE with SAP initiative, supporting SAP ERP customers in their transition to SAP Business Suite, enabling them to stay ahead of the competition and drive continuous innovation. A passionate sports enthusiast with a keen interest in cricket and table tennis."
          >
          </SpeakerCard>
        </div>

        <div className="text-center">
          <DescriptionCards header="Our Team" paragraph=""></DescriptionCards>
          <div className="flex flex-wrap gap-5 justify-center">
            <SpeakerCard
              name="Kirsten"
              image="/team/Kirsten.png"
              title="Organizer"
              company="WiCS"
              description="3rd-year Computer Science, passionate about startups & education 🚀📚, always exploring new ideas over tea 🍵"
            ></SpeakerCard>
            <SpeakerCard
              name="Jessica"
              image="/team/Jessica.png"
              title="Organizer"
              company="Illuminaite"
              description="3rd year Machine Intelligence in Engineering Science, interested in AI & the mind 🧠 , obsessed with music and coffee 🎶 ☕"
            ></SpeakerCard>
            <SpeakerCard
              name="Savanna"
              image="/team/Savanna.png"
              title="Organizer"
              company="Illuminaite, WiCS"
              description="4th year Computer Science👩🏻‍💻interested in building startups and business🐹"
            ></SpeakerCard>
            <SpeakerCard
              name="Helia"
              image="/team/Helia.png"
              title="Academic Outreach, Finance"
              company="WiCS + Illuminaite"
              description="Computer Science Specialist interested in AI, particularly its applications in healthcare."
            ></SpeakerCard>
            <SpeakerCard
              name="Mahek"
              image="/team/Mahek.png"
              title="Academic Outreach"
              company="WiCS"
              description="I&apos;m a 3rd year Computer Science Specialist, interested in AI and its applications."
            ></SpeakerCard>
            <SpeakerCard
              name="Nour"
              image="/team/Nour.png"
              title="Academic Outreach"
              company="Illuminaite"
              description="3rd year Computer Science and Philosophy, interested in AI and its applications to game design 🎮, passionate about theatre and music 🎭🥁"
            ></SpeakerCard>
            <SpeakerCard
              name="Shiley"
              image="/team/Shiley.png"
              title="Academic Outreach"
              company="Illuminaite"
              description="1st year Life Science, hoping to go into Bioinformatics. Interested in ML and AI applications in the medical field."
            ></SpeakerCard>
            <SpeakerCard
              name="Doga"
              image="/team/Doga.png"
              title="Academic Outreach"
              company="Illuminaite"
              description="I am a third year Engineering Science in Machine Intelligence. I am deeply interested in biomedical and artistic applications of AI!"
            ></SpeakerCard>
            <SpeakerCard
              name="Yumna"
              image="/team/Yumna.png"
              title="Industry Outreach, Sponsorship"
              company="Illuminaite"
              description="4th year computer science specialist, AI-enthusiast in fitness and wearable technology, Driven by inclusivity and sustainability to make the world a better place."
            ></SpeakerCard>
            <SpeakerCard
              name="Danny"
              image="/team/Danny.png"
              title="Industry Outreach"
              company="Illuminaite"
              description="Hi, I&apos;m Danny. I’m a 3rd student at UofT studying Philosophy, Bioethics, and Contemporary Asian Studies. I&apos;m interested in ethical issues of AI, photography, and filmmaking."
            ></SpeakerCard>
            <SpeakerCard
              name="Kumkum"
              image="/team/Kumkum.png"
              title="Industry Outreach"
              company="Illuminaite"
              description="4th year Math and CS, interested in AI and human cognition simulation- A boxer and enjoy music"
            ></SpeakerCard>
            <SpeakerCard
              name="Pongpang"
              image="/team/Pongpang.png"
              title="Industry Outreach"
              company="Illuminaite"
              description="I’m a first-year Computer Science (+psychology) student, and I’m super passionate about AI innovation. I love exploring how technology can make a positive impact on the world! 🌟"
            ></SpeakerCard>
            <SpeakerCard
              name="Elodie"
              image="/team/Elodie.png"
              title="Sponsorship Outreach"
              company="Illuminaite"
              description="1st year in math & physical science 📖 interested in the intersection of AI and healthcare 🩺 always up for a bouldering session 🧗‍♀️🪨"
            ></SpeakerCard>
            <SpeakerCard
              name="Zimo"
              image="/team/Zimo.png"
              title="Sponsorship Outreach"
              company="WiCS"
              description="I&apos;m a 1st year Computer Science student, interested in AI and its applications."
            ></SpeakerCard>
            <SpeakerCard
              name="Manahill"
              image="/team/Manahill.png"
              title="Sponsorship Outreach"
              company="WiCS"
              description="I&apos;m a 2nd year Computer Science Specialist, interested in AI and its applications."
            ></SpeakerCard>
            <SpeakerCard
              name="Abeera"
              image="/team/Abeera.png"
              title="Sponsorship Outreach"
              company="Illuminaite"
              description="I’m Abeera, I’m a second year cs specialist and stats minor and I love binging friends and brooklyn nine nine in my free time 🙂"
            ></SpeakerCard>
            <SpeakerCard
              name="Shirley"
              image="/team/Shirley.png"
              title="Event Planning"
              company="External"
              description="Hi! I&apos;m Shirley, a second year computer science specialist interested in exploring machine learning and information security! In my free time I enjoy playing volleyball and taking part in club activities 🙂"
            ></SpeakerCard>
            <SpeakerCard
              name="Lily"
              image="/team/Lily.png"
              title="Event Planning"
              company="WiCS"
              description="I&apos;m a 2nd year Computer Science specialist with a minor in Statistics, interested in AI and its applications."
            ></SpeakerCard>
            <SpeakerCard
              name="Caitlyn"
              image="/team/Caitlyn.png"
              title="Event Planning"
              company="Illuminaite"
              description="A 3rd year Bachelor of Information student interested in design and cognitive psychology 🧠 An avid knitter and chronic workaholic trying to bring positive change 🖌️"
            ></SpeakerCard>
            <SpeakerCard
              name="Xiaohan"
              image="/team/Xiaohan.png"
              title="Event Planning"
              company="Illuminaite"
              description="1st year Physical & Mathematical Sciences, interested in art, music and photography"
            ></SpeakerCard>
            <SpeakerCard
              name="Tanvi"
              image="/team/Tanvi.png"
              title="Marketing"
              company="Illuminaite"
              description="4th year Computer Science 💻 - interested in use of technology in healthcare - enjoy long walks around the city 🌇"
            ></SpeakerCard>
            <SpeakerCard
              name="Zoey"
              image="/team/Zoey.png"
              title="Marketing"
              company="WiCS"
              description="I&apos;m 3rd year Computer Science Specialist with a minor in Psychology. I&apos;m on the fencing team and have an obsession with the cream cheese danishes from T&T!"
            ></SpeakerCard>
            <SpeakerCard
              name="Raenah"
              image="/team/Raenah.png"
              title="Marketing"
              company="WiCS"
              description="I&apos;m a 1st year Computer Science student, interested in AI and its applications."
            ></SpeakerCard>
            <SpeakerCard
              name="Shaurya"
              image="/team/Shaurya.png"
              title="Marketing"
              company="Illuminaite"
              description="1st year Computer Science, interested in the use of ML with computer vision to better lives - I enjoy listening to music and camping"
            ></SpeakerCard>
            <SpeakerCard
              name="Ashley"
              image="/team/Ashley.png"
              title="Marketing"
              company="CSSU"
              description="Hi! My name is Ashley, and I&apos;m a second-year student studying Bioinformatics and Computer Science. I like drawing, Pokemon, and anime!"
            ></SpeakerCard>
            <SpeakerCard
              name="Una"
              image="/team/Una.png"
              title="Web Dev"
              company="Illuminaite"
              description="1st year Math and Physical Science, interested in the accessability and real-life applications of AI!"
            ></SpeakerCard>
            <SpeakerCard
              name="Jason"
              image="/team/Jason.png"
              title="Logistics"
              company="CSSU"
              description="3rd year Computer Science specialist + statistics minor. I like information security and potatoes. If not on campus you&apos;ll probably find me on the GO train somewhere"
            ></SpeakerCard>
            <SpeakerCard
              name="Nicole"
              title="Web Dev"
              image="/team/Nicole.png"
              company="WiCS"
              description="With a strong passion for technology, I have expanded my skills through multiple internships and projects, driven by a commitment to make meaningful contributions in the field."
            ></SpeakerCard>
          </div>
        </div>

      </MaxWidthWrapper>
    </main>
  );
}
