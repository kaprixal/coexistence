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
          <p> For the hackathon, we have provided a rubric as a guideline for your project, as well as a suggested timeline for the day of the hackathon. See the rubric and timeline below. </p>
          <h1 className="text-3xl font-bold mb-5 mt-5">Rubric:</h1>
          <iframe
            className="w-full h-[50vh] sm:h-[70vh] lg:w-2/3 lg:h-[150vh] mx-auto relative mt-10"
            src="/pdf/HackathonRubric.pdf"
            width="100%"
            height="500">
          </iframe>
          <h1 className="text-3xl font-bold mb-5 mt-5">Subthemes & Examples:</h1>
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
                  Verify the correctness of AI&apos;s work (ie. How much can we
                  rely on the results produced by AI?)
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
            className="text-secondary hover:underline text-lg lg:text-3xl"
          >
            https://www.figma.com/education/
          </a>
        </h1>
        <h1 className="mt-16 text-3xl lg:text-5xl text-primary font-bold mb-5">
          Timeline
        </h1>
        <table className="mb-10 w-3/4 border-collapse mx-auto max-sm:w-full">
          <tbody className="max-sm:flex max-sm:flex-col">
            <tr className="border-b border-t border-primary max-sm:flex max-sm:flex-col">
              {/* --- ROW 1 --- */}
              <td className="py-4 px-6 text-xl lg:text-2xl max-sm:border-primary w-1/3 max-sm:w-full">
                <h2 className="font-bold text-3xl mb-2">
                  Ideation:
                  <br className="max-sm:hidden" />
                  12:15-12:30
                </h2>
              </td>
              <td className="py-4 px-6 text-xl lg:text-2xl w-2/3 max-sm:w-full">
                <h2 className="font-bold text-2xl mb-2">
                  Brainstorm project ideas aligned with the theme and subthemes.
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-5">
                  <li>
                    <p className="text-xl mb-2">
                      Choose one subtheme for your project.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2">
                      Agree on a specific problem that your team will work on
                      solving. Ensure that everyone clearly understands the
                      problem and the direction of the project.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2">
                      Output: A well-defined problem statement.
                    </p>
                  </li>
                </ul>
                <h2 className="text-2xl mb-2 italic">Notes:</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <p className="text-xl mb-2 italic">
                      Keep the brainstorming quick and focused. You don&apos;t
                      need a fully developed idea at this stage, just a
                      direction.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2 italic">
                      Aim for feasible projects that can be prototyped within
                      the hackathon timeline.
                    </p>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="border-b border-primary max-sm:flex max-sm:flex-col">
              {/* --- ROW 2 --- */}
              <td className="py-4 px-6 text-xl lg:text-2xl max-sm:border-primary w-1/3 max-sm:w-full">
                <h2 className="font-bold text-3xl mb-2">
                  Company creation:
                  <br className="max-sm:hidden" /> 12:30 - 1:00
                </h2>
              </td>
              <td className="py-4 px-6 text-xl lg:text-2xl w-2/3 max-sm:w-full">
                <h2 className="font-bold text-2xl mb-2">
                  Create a company that will develop the product, and assign
                  roles to team members.
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-5">
                  <li>
                    <p className="text-xl mb-2">
                      Establish Mission: Agree on a mission statement for your
                      company. This should connect your project to ethical AI
                      use.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>
                        <p className="text-xl mb-2">
                          A core mission may be “Striving to make all AI a tool,
                          not a replacement.”
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p className="text-xl mb-2">
                      Define Product/Service: Identify the product or service
                      you&apos;re building. How does it serve the subtheme you
                      chose? What is its social impact? Justify the identified
                      problem with the need for a solution.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2">
                      Assign roles based on interest and skill set. However,
                      collaboration is encouraged across roles.
                    </p>
                  </li>
                </ul>
                <h2 className="text-2xl mb-5">
                  Suggested Roles (may vary by project):
                  <ol className="list-decimal pl-6 space-y-1">
                    <li>
                      <p className="text-xl mb-2">
                        CEO (Chief Executive Officer): Oversees project vision,
                        market needs, and viability.
                      </p>
                    </li>
                    <li>
                      <p className="text-xl mb-2">
                        CIO (Chief Information Officer): Focuses on the
                        technical development of the product.
                      </p>
                    </li>
                    <li>
                      <p className="text-xl mb-2">
                        COO (Chief Operating Officer): Manages day-to-day
                        operations, including team coordination.
                      </p>
                    </li>
                    <li>
                      <p className="text-xl mb-2">
                        CDO (Chief Data Officer): Handles data management,
                        collection, and privacy concerns.
                      </p>
                    </li>
                    <li>
                      <p className="text-xl mb-2">
                        CCO (Chief Compliance Officer): Ensures ethical and
                        legal compliance, especially AI ethics.
                      </p>
                    </li>
                  </ol>
                </h2>
                <h2 className="text-2xl mb-2 italic">Notes:</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <p className="text-xl mb-2 italic">
                      Ensure your mission statement reflects your commitment to
                      AI ethics and societal impact.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2 italic">
                      Keep the product/service realistic, something that can be
                      prototyped in Figma or demonstrated during the pitch.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2 italic">
                      Have fun and be creative with the company name!
                    </p>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="border-b border-primary max-sm:flex max-sm:flex-col">
              {/* --- ROW 3 --- */}
              <td className="py-4 px-6 text-xl lg:text-2xl max-sm:border-primary w-1/3 max-sm:w-full">
                <h2 className="font-bold text-3xl mb-2">
                  Ethical Matrix:
                  <br className="max-sm:hidden" /> 1:00-2:30
                </h2>
              </td>
              <td className="py-4 px-6 text-xl lg:text-2xl w-2/3 max-sm:w-full">
                <h2 className="font-bold text-2xl mb-2">
                  Develop an Ethical AI Matrix to discuss ethical considerations
                  and identify key stakeholders for your AI project.
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-5">
                  <li>
                    <p className="text-xl mb-2">
                      Research how AI is applied ethically in your project, or
                      how your product promotes the use of ethical AI.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2">
                      Identify the key stakeholders (e.g., users, customers,
                      communities) and how the product impacts them ethically to
                      develop the <strong>ethical matrix</strong>.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2">
                      Guide:{" "}
                      <a
                        href="https://docs.google.com/document/d/1rLswm7D5OME2z5mx8gWHQGHOajpeP3bKUYxEs4L92WY/edit?usp=sharing"
                        target="_blank"
                        className="text-secondary hover:underline"
                      >
                        Hackathon Ethics Resources
                      </a>
                    </p>
                  </li>
                </ul>
                <h2 className="text-2xl mb-2 italic">Notes:</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <p className="text-xl mb-2 italic">
                      Use the resources provided, including mentors, to
                      understand the ethical frameworks around AI.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2 italic">
                      Be prepared to explain how your project mitigates AI
                      risks, such as bias, privacy concerns, or over-automation.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2 italic">
                      It is a good idea to track websites, papers, and articles
                      you&apos;ll reference.
                    </p>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="border-b border-primary max-sm:flex max-sm:flex-col">
              {/* --- ROW 4 --- */}
              <td className="py-4 px-6 text-xl lg:text-2xl max-sm:border-primary w-1/3 max-sm:w-full">
                <h2 className="font-bold text-3xl mb-2">
                  Figma Prototype:
                  <br className="max-sm:hidden" /> 2:30-3:30
                </h2>
              </td>
              <td className="py-4 px-6 text-xl lg:text-2xl w-2/3 max-sm:w-full">
                <h2 className="font-bold text-2xl mb-2">
                  Build a prototype in Figma to visualize how your product or
                  service works.
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-5">
                  <li>
                    <p className="text-xl mb-2">
                      If you&apos;re designing a digital product (e.g., app,
                      website), create wireframes and visual mockups.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2">
                      If your product is more abstract or service-based, create
                      diagrams or mockups that show how users will interact with
                      it.
                    </p>
                  </li>
                </ul>
                <h2 className="text-2xl mb-2 italic">Notes:</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <p className="text-xl mb-2 italic">
                      Focus on the user experience (UX) and functionality of the
                      product.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2 italic">
                      Simple, functional prototypes are better than
                      over-complicated designs. The goal is to communicate your
                      idea clearly
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2 italic">
                      <strong>
                        If your team is struggling with Figma as a bottleneck,
                        feel free to use another method to communicate your idea
                        effectively.
                      </strong>{" "}
                      This may be a block diagram, flow chart, sketch, etc.
                    </p>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="border-b border-primary max-sm:flex max-sm:flex-col">
              {/* --- ROW 5 --- */}
              <td className="py-4 px-6 text-xl lg:text-2xl max-sm:border-primary w-1/3 max-sm:w-full">
                <h2 className="font-bold text-3xl mb-2">
                  Business Pitch Preparation:
                  <br className="max-sm:hidden" /> 3:30 - 4:45
                </h2>
              </td>
              <td className="py-4 px-6 text-xl lg:text-2xl w-2/3 max-sm:w-full">
                <h2 className="font-bold text-2xl mb-2">
                  Create and refine your pitch presentation.
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-5">
                  <li>
                    <p className="text-xl mb-2">
                      Develop a concise pitch deck that highlights your company
                      mission, the problem you&apos;re solving, the product, its
                      ethical impact, and the AI considerations.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2">
                      Make sure to address the judging criteria outlined in the
                      rubric.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2">
                      Aim for clarity, storytelling, and alignment with the
                      theme of ethical AI.
                    </p>
                  </li>
                </ul>
                <h2 className="text-2xl mb-2 italic">Notes:</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <p className="text-xl mb-2 italic">
                      If you finish early, practice your pitch! Time your
                      presentation to ensure it fits within the time limit (5
                      minutes).
                    </p>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="border-b border-primary max-sm:flex max-sm:flex-col">
              {/* --- ROW 6 --- */}
              <td className="py-4 px-6 text-xl lg:text-2xl max-sm:border-primary w-1/3 max-sm:w-full">
                <h2 className="font-bold text-3xl mb-2">
                  Submit:
                  <br className="max-sm:hidden" /> 4:45-5:00
                </h2>
              </td>
              <td className="py-4 px-6 text-xl lg:text-2xl w-2/3 max-sm:w-full">
                <h2 className="font-bold text-2xl mb-2">
                  Submit your project on DevPost.
                </h2>
                <ul className="list-disc pl-6 space-y-1 mb-5">
                  <li>
                    <p className="text-xl mb-2">
                      Ensure that your project is submitted by 5:00 PM at the
                      latest to avoid technical issues or disqualification.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2">
                      Make sure all components (prototype, slides, etc.) are
                      properly uploaded.
                    </p>
                  </li>
                </ul>
                <h2 className="text-2xl mb-2 italic">Notes:</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <p className="text-xl mb-2 italic">
                      Double-check your submission materials to ensure
                      everything is included and works correctly.
                    </p>
                  </li>
                  <li>
                    <p className="text-xl mb-2 italic">
                      Submit a few minutes early to avoid last-minute technical
                      glitches.
                    </p>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </MaxWidthWrapper>
    </main>
  );
}
