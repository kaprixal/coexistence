import MaxWidthWrapper from "../components/MaxWidthWrapper";


export default function Home() {
  return (
    <main>
      <div className="w-full h-[47vh] max-sm:h-[30vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70  to-white/0 to-10%"></div>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-primary text-white">
          <h1 className="text-8xl pt-5 font-extrabold text-white drop-shadow-2xl text-center uppercase max-sm:text-6xl">
            Schedule
          </h1>
        </div>
      </div>
      <MaxWidthWrapper>
        <div className="overflow-x-auto mt-16">
          <table className="mb-10 w-2/3 border-collapse mx-auto">
            <tbody>
              <tr className="border-b border-t border-primary">
                <td className="py-4 px-6 text-xl lg:text-2xl">9:00 AM</td>
                <td className="py-4 px-6 text-xl lg:text-2xl">Sign-in and Registration + Breakfast</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-4 px-6 text-xl lg:text-2xl">9:30 AM</td>
                <td className="py-4 px-6 text-xl lg:text-2xl">Opening Ceremony + Finalize Groups</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-4 px-6 text-xl lg:text-2xl">10:00 AM</td>
                <td className="py-4 px-6 text-xl lg:text-2xl">Figma Workshop</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-4 px-6 text-xl lg:text-2xl">11:00 PM</td>
                <td className="py-4 px-6 text-xl lg:text-2xl">Lunch + Networking</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-4 px-6 text-xl lg:text-2xl">12:15 PM</td>
                <td className="py-4 px-6 text-xl lg:text-2xl">Hacking Time + Mentors Check-In</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-4 px-6 text-xl lg:text-2xl">5:15 PM</td>
                <td className="py-4 px-6 text-xl lg:text-2xl">Submit Presentation and Prototype</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-4 px-6 text-xl lg:text-2xl">5:30 PM</td>
                <td className="py-4 px-6 text-xl lg:text-2xl">Dinner + Presentations</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-4 px-6 text-xl lg:text-2xl">7:00 PM</td>
                <td className="py-4 px-6 text-xl lg:text-2xl">Participant Activity, Debrief, and Judging</td>
              </tr>
              <tr className="border-b border-primary">
                <td className="py-4 px-6 text-xl lg:text-2xl">7:30 PM</td>
                <td className="py-4 px-6 text-xl lg:text-2xl">Closing + Awards Ceremony</td>
              </tr>
            </tbody>
          </table>
          <div className="sm:text-xl w-50 mx-auto pt-5 mb-5 text-base lg:text-2xl ">
            <h1 className="text-2xl font-bold">
              9:00 AM: Sign-in and Registration + Breakfast - Location(s):  BA2139, BA2159
            </h1>
            <p>
              Sign-in and grab breakfast, chat and get to know others!
            </p>
          </div>
          <div className="sm:text-xl w-50 mx-auto pt-5 mb-5 text-base lg:text-2xl ">
            <h1 className="text-2xl font-bold">
            9:30 AM: Opening Ceremony + Finalize groups - Location(s):  BA1180
            </h1>
            <p>
              Ensure that you have a team and finalize it before hacking starts!
            </p>
          </div>
          <div className="sm:text-xl w-50 mx-auto pt-5 mb-5 text-base lg:text-2xl ">
            <h1 className="text-2xl font-bold">
              10:00 AM: Figma Workshop featuring IBM UI/UX Designer - Location(s):  BA1180
            </h1>
            <p>
              Learn or brush up on your Figma skills, as you will be using Figma to create your deliverables. This is a good opportunity to sign up your group’s Figma project.
            </p>
          </div>
          <div className="sm:text-xl w-50 mx-auto pt-5 mb-5 text-base lg:text-2xl ">
            <h1 className="text-2xl font-bold">
            11am: Lunch + Networking - Location(s):  BA2139, BA2159
            </h1>
            <p>
              Academic and Industry guests will be hosting a casual “cafe style” networking from 11am-12pm.
              Pick up your lunch and meet industry professionals on Bahen's second floor!
            </p>
          </div>
          <div className="sm:text-xl w-50 mx-auto pt-5 mb-5 text-base lg:text-2xl ">
            <h1 className="text-2xl font-bold">
              12:15 PM: Hacking Time + Mentors Check-In - Location(s):  BA2165, BA2175, BA2185, BA2195
            </h1>
            <p>
              Hacking will start at 12:15pm.
              Throughout this time, mentors will be checking in to answer questions and give pointers. Or, find them at the mentors station if you need any help! We have 4 tutorial rooms booked for students to use during this time, it’s recommended students stay in these rooms for at least an hour between 12:15-5pm to get access to a mentor.
            </p>
          </div>
          <div className="sm:text-xl w-50 mx-auto pt-5 mb-5 text-base lg:text-2xl ">
            <h1 className="text-2xl font-bold">
              5:15 PM: Submit Presentation and Prototype
            </h1>
            <p>
              Your team’s submission MUST be made by 5:15pm. Again, late submissions may not be considered. Submit your work to our hackathon’s Devpost.
            </p>
          </div>
          <div className="sm:text-xl w-50 mx-auto pt-5 mb-5 text-base lg:text-2xl ">
            <h1 className="text-2xl font-bold">
              5:30pm to 7:00pm: Dinner + Presentations - Location(s): BA1170, BA1180
            </h1>
            <p>
              From 5:30-6:00pm, grab snacks and drinks, and buy and/or eat dinner. This is also a good time to rehearse your presentation!
              Presentations will begin at 6:00pm.
            </p>
          </div>
          <div className="sm:text-xl w-50 mx-auto pt-5 mb-5 text-base lg:text-2xl ">
            <h1 className="text-2xl font-bold">
              7:00pm: Participant Activity, Debrief and Judging
            </h1>
            <p>
            Join us in a quick cool-down activity and debrief of the day while the judges make their final decisions!
            </p>
          </div>
          <div className="sm:text-xl w-50 mx-auto pt-5 mb-5 text-base lg:text-2xl ">
            <h1 className="text-2xl font-bold">
              7:30pm: Closing + Awards Ceremony - Location(s): BA1180
            </h1>
            <p>
              Closing ceremonies begin, and Awards (and prizes!) are presented to winning teams. We will also do the jellycat amusable sun bag draw during the closing ceremony.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
