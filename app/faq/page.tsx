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
            faq
          </h1>
        </div>
      </div>
      <MaxWidthWrapper>
        <DescriptionCards
          header="What is an AI Ethics Hackathon?"
          paragraph="An AI Ethics hackathon is a collaborative event where participants work to create projects, frameworks, tools, or solutions that address ethical concerns in the development, deployment, and use of AI systems. Unlike other hackathons, a complete code solution is not necessary! Points of analysis may include fairness, bias, privacy, transparency, accountability, and the societal impact of your AI product."
        ></DescriptionCards>

        <DescriptionCards
          header="Who can participate?"
          paragraph="Any university student located in Toronto can participate, whether you are at UofT or another institution. We encourage everyone regardless of program, year, or experience to join us at the beginner-friendly hackathon, whether you are enrolled in Computer Science/Engineering! Many students from Business, Philosophy, Health Science, Social Science, and more will be joining the hackathon."
        ></DescriptionCards>

        <DescriptionCards
          header="When should I expect to hear back after registering for the hackathon?"
          paragraph="We will be sending out a Google form to all registered students to learn more about their dietary restrictions, arrival times and commitment to the hackathon. Filling out this supplementary Google form is mandatory to secure a spot in the hackathon."
        ></DescriptionCards>

        <DescriptionCards
          header="What do I need to bring to the hackathon?"
          paragraph="Please bring a valid student ID (uoft and other institution ID), a personal device (computer, tablet/iPad), some money for dinner and a water bottle to stay hydrated!"
        ></DescriptionCards>

        <DescriptionCards
          header="Will food be provided at the hackathon?"
          paragraph="We will be providing breakfast from 9am and serving lunch around noon. During dinner time (around 5:30pm), light snacks and drinks will be provided, but participants will be given time to buy their own dinner."
        ></DescriptionCards>

        <DescriptionCards
          header="Do I need to know how to code?"
          paragraph="No! We are a beginner-friendly, proposal-centered ethics hackathon, so no coding experience is required as the final project involves a prototype (figma) and presentation."
        ></DescriptionCards>

        <DescriptionCards
          header="Do I need a team?"
          paragraph="You can sign up individually, in teams of 2, or teams of 3. The maximum number is 3 per team, so you will be joined with another participant if your team is incomplete. We will put you with a team if you sign up as one!"
        ></DescriptionCards>

        <DescriptionCards
          header="Are there any prizes?"
          paragraph="Yes! There are prizes for top teams including jellycats, legos, mini projectors, and exclusive membership to uoft entrepreneurship co-working space. There will also be a draw to win a jelly amusable sun bag among all participants! Please the Prize page for more details."
        ></DescriptionCards>

        <DescriptionCards
          header="Is there a fee to participate?"
          paragraph="No fee will be collected."
        ></DescriptionCards>

        <DescriptionCards
          header="What is the hackathon format?"
          paragraph="Please refer to the Schedule section of the hackathon website! We will have an opening ceremony/workshop and networking session followed by hacking time, ending with presentations and a closing ceremony. Breakfast and lunch will be provided during the day."
        ></DescriptionCards>

        <DescriptionCards
          header="What tools, technologies, and frameworks do I need?"
          paragraph="We recommend having a slideshow with your final presentation, so Google Slides, PowerPoint, Canva, or other platforms would be great. There is a workshop on using Figma for prototyping, and we will also release a document with compiled resources on ethical frameworks and guidelines! Students are encouraged to sign up for figma pro prior to the hackathon using the sign up guide we will be sending out to the participants."
        ></DescriptionCards>

        <DescriptionCards
          header="Can I start working on my project before March 8th?"
          paragraph="No, all groups will work on their projects during the allocated hacking time on March 8th."
        ></DescriptionCards>

        <DescriptionCards
          header="Is it in-person?"
          paragraph="Yes, the entire hackathon is in-person at the UofT St. George campus. Rooms will be announced in the coming weeks. Participants are required to stay on campus for the duration of the hackathon unless otherwise announced by staff."
        ></DescriptionCards>

        <DescriptionCards
          header="What if I get stuck or cannot finish?"
          paragraph="We have a panel of diverse and experienced mentors who will guide your group throughout the hacking session, so don’t worry about getting stuck, from UI/UX design, software engineering, to STEM communication. Try your best to finish, and give a presentation of whatever you managed to achieve in the short timeframe!"
        ></DescriptionCards>

        <DescriptionCards
          header="How is my project getting judged?"
          paragraph="Each judge will follow the rubric (to be released to participants closer to March 8), and include personalized feedback as well. Some general areas on the rubric include social impact, novelty, feasibility, depth of analysis, and presentation delivery."
        ></DescriptionCards>

        <DescriptionCards
          header="What if I have to come late?"
          paragraph="We highly recommend everyone to come in the morning to make the most out of the hackathon, and learn from the hands-on workshop and networking session. Otherwise, please ensure that you sign-in by 12pm and indicate your late arrival time to the supplementary participant form so you can make it in time for the full hacking portion with your team!"
        ></DescriptionCards>

        <DescriptionCards
          header="Do I have to be a UofT student to join?"
          paragraph="No, as long as you have a university institution email and can make it in-person to the UofT St. George campus on March 8th, you can register! Note that you will be responsible for commuting to the UofT St. George campus."
        ></DescriptionCards>

        <DescriptionCards
          header="What other opportunities are there to get involved if I can’t make it?"
          paragraph="We will be running this hackathon again next year, and releasing an asynchronous writing competition later this year, which is a creative outlet to get your opinion heard! Follow us on Instagram and join our Discord server to stay updated."
        ></DescriptionCards>

        <DescriptionCards
          header="What is the “hackathon” draw?"
          paragraph="All participants who sign in at the registration desk and stay until the end of the closing ceremony will be entered into a random draw for a jellycat amusable sun bag!"
        ></DescriptionCards>
      </MaxWidthWrapper>
    </main>
  );
}
