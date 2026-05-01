import { Timeline } from "@/components/ui/timeline";
import { FadeIn } from "./FadeIn";

const experiences = [
  {
    title: "2024 – Present",
    content: (
      <div>
        <div className="mb-6">
          <h4 className="text-lg md:text-2xl font-semibold text-white mb-1">
            Frontend Developer & UI/UX Designer
          </h4>
          <p className="text-sm md:text-base font-medium text-[#42fcff]/80 tracking-wide">
            Arohon
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="group relative pl-5 border-l-2 border-[#7621B0]/30 hover:border-[#7621B0] transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#7621B0] group-hover:shadow-[0_0_8px_#7621B0] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              <span className="text-white font-medium">
                Architected scalable web applications:
              </span>{" "}
              Engineered highly responsive and performant applications utilizing
              React, Next.js, TypeScript, Tailwind CSS, and ShadCN.
            </p>
          </div>

          <div className="group relative pl-5 border-l-2 border-[#7621B0]/30 hover:border-[#7621B0] transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#7621B0] group-hover:shadow-[0_0_8px_#7621B0] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              <span className="text-white font-medium">
                Bridged design and development:
              </span>{" "}
              Translated complex business requirements into intuitive wireframes
              and high-fidelity prototypes using Figma and Adobe XD, seamlessly
              guiding them from concept to code implementation.
            </p>
          </div>

          <div className="group relative pl-5 border-l-2 border-[#7621B0]/30 hover:border-[#7621B0] transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#7621B0] group-hover:shadow-[0_0_8px_#7621B0] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              <span className="text-white font-medium">
                Driven product quality:
              </span>{" "}
              Spearheaded comprehensive QA and exploratory testing protocols,
              proactively identifying and resolving critical UX and functional
              anomalies prior to deployment to ensure a flawless user experience.
            </p>
          </div>
        </div>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN", "Figma", "Adobe XD"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[#7621B0]/10 border border-[#7621B0]/20 text-[#D7E2EA]/70 hover:bg-[#7621B0]/20 hover:border-[#7621B0]/40 transition-all duration-300"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    title: "2023 – 2024",
    content: (
      <div>
        <div className="mb-6">
          <h4 className="text-lg md:text-2xl font-semibold text-white mb-1">
            Frontend Developer, UI/UX Designer & QA Tester
          </h4>
          <p className="text-sm md:text-base font-medium text-[#42fcff]/80 tracking-wide">
            Flexlab Studio{" "}
            <span className="text-[#D7E2EA]/40 font-normal">
              · Dhaka, Bangladesh
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="group relative pl-5 border-l-2 border-[#42fcff]/20 hover:border-[#42fcff]/60 transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#42fcff]/60 group-hover:shadow-[0_0_8px_#42fcff] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              <span className="text-white font-medium">
                Built dynamic user interfaces:
              </span>{" "}
              Developed responsive web interfaces and streamlined user
              experiences using modern front-end tech stacks like React and
              Next.js.
            </p>
          </div>

          <div className="group relative pl-5 border-l-2 border-[#42fcff]/20 hover:border-[#42fcff]/60 transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#42fcff]/60 group-hover:shadow-[0_0_8px_#42fcff] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              <span className="text-white font-medium">
                Delivered end-to-end design:
              </span>{" "}
              Designed high-fidelity UI mockups and interactive prototypes in
              Figma, ensuring strict alignment with client specifications and
              project goals.
            </p>
          </div>

          <div className="group relative pl-5 border-l-2 border-[#42fcff]/20 hover:border-[#42fcff]/60 transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#42fcff]/60 group-hover:shadow-[0_0_8px_#42fcff] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              <span className="text-white font-medium">
                Optimized usability:
              </span>{" "}
              Conducted thorough exploratory testing and quality assurance
              checks, significantly reducing post-release bugs and improving
              overall site functionality.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {["React", "Next.js", "Figma", "QA Testing", "Prototyping"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[#42fcff]/5 border border-[#42fcff]/15 text-[#D7E2EA]/70 hover:bg-[#42fcff]/10 hover:border-[#42fcff]/30 transition-all duration-300"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    title: "2018 – 2022",
    content: (
      <div>
        <div className="mb-6">
          <h4 className="text-lg md:text-2xl font-semibold text-white mb-1">
            UI/UX Designer & QA Tester
          </h4>
          <p className="text-sm md:text-base font-medium text-[#42fcff]/80 tracking-wide">
            ARUX Studio{" "}
            <span className="text-[#D7E2EA]/40 font-normal">
              · Dhaka, Bangladesh
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="group relative pl-5 border-l-2 border-[#BBCCD7]/20 hover:border-[#BBCCD7]/50 transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#BBCCD7]/50 group-hover:shadow-[0_0_8px_#BBCCD7] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              <span className="text-white font-medium">
                Crafted user-centered products:
              </span>{" "}
              Designed intuitive interfaces and interactive prototypes for a
              diverse portfolio of web and mobile applications, serving both
              local and international clients.
            </p>
          </div>

          <div className="group relative pl-5 border-l-2 border-[#BBCCD7]/20 hover:border-[#BBCCD7]/50 transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#BBCCD7]/50 group-hover:shadow-[0_0_8px_#BBCCD7] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              <span className="text-white font-medium">
                Enhanced user flows:
              </span>{" "}
              Facilitated usability testing and user feedback sessions, directly
              improving task completion rates and eliminating friction in
              critical user journeys.
            </p>
          </div>

          <div className="group relative pl-5 border-l-2 border-[#BBCCD7]/20 hover:border-[#BBCCD7]/50 transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#BBCCD7]/50 group-hover:shadow-[0_0_8px_#BBCCD7] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              <span className="text-white font-medium">
                Collaborated across teams:
              </span>{" "}
              Worked closely with engineering teams to ensure design feasibility
              and maintain pixel-perfect accuracy from initial concept through
              production deployment.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {[
            "UI/UX Design",
            "Prototyping",
            "Usability Testing",
            "QA",
            "Cross-team Collaboration",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-[#BBCCD7]/5 border border-[#BBCCD7]/15 text-[#D7E2EA]/70 hover:bg-[#BBCCD7]/10 hover:border-[#BBCCD7]/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-10 sm:mb-14 md:mb-20 leading-none"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Experience
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={30}>
        <p
          className="text-[#D7E2EA]/60 font-light text-center max-w-xl mx-auto mb-10 md:mb-16 leading-relaxed"
          style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)" }}
        >
          A journey through the companies and roles that shaped my craft —
          from pixel-perfect designs to production-ready code.
        </p>
      </FadeIn>

      <div className="relative w-full overflow-clip">
        <Timeline data={experiences} />
      </div>
    </section>
  );
}
