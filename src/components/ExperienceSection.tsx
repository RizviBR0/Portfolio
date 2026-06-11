import { Timeline } from "@/components/ui/timeline";
import { FadeIn } from "./FadeIn";

const experiences = [
  {
    title: "Apr 2025 – Present",
    content: (
      <div>
        <div className="mb-6">
          <h4 className="text-lg md:text-2xl font-semibold text-white mb-1">
            Frontend Engineer & UI/UX Designer
          </h4>
          <p className="text-sm md:text-base font-medium text-[#42fcff]/80 tracking-wide mb-2">
            Arohon{" "}
            <span className="text-[#D7E2EA]/40 font-normal">
              · Dhaka, Bangladesh | Full Time, Remote
            </span>
          </p>
          <a href="#" className="text-xs md:text-sm font-medium text-white hover:text-[#42fcff] transition-colors inline-block bg-[#7621B0]/10 px-3 py-1.5 rounded-full border border-[#7621B0]/20 hover:border-[#7621B0]/50">
            Checkout product ➜
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <div className="group relative pl-5 border-l-2 border-[#7621B0]/30 hover:border-[#7621B0] transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#7621B0] group-hover:shadow-[0_0_8px_#7621B0] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              Designed product flows for ride sharing and mobility use cases including bike, car, CNG, intercity, rental and emergency ride.
            </p>
          </div>

          <div className="group relative pl-5 border-l-2 border-[#7621B0]/30 hover:border-[#7621B0] transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#7621B0] group-hover:shadow-[0_0_8px_#7621B0] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              Created clean UX for booking, scheduling, live trip tracking, trip history, driver verification and safety focused screens.
            </p>
          </div>

          <div className="group relative pl-5 border-l-2 border-[#7621B0]/30 hover:border-[#7621B0] transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#7621B0] group-hover:shadow-[0_0_8px_#7621B0] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              Supported responsive UI implementation and reported UX and functional issues before release.
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
    title: "Jan 2022 - Present",
    content: (
      <div>
        <div className="mb-6">
          <h4 className="text-lg md:text-2xl font-semibold text-white mb-1">
            Frontend Developer, UI/UX Designer & QA Tester
          </h4>
          <p className="text-sm md:text-base font-medium text-[#42fcff]/80 tracking-wide mb-2">
            Flexpoint{" "}
            <span className="text-[#D7E2EA]/40 font-normal">
              · United States | Full Time, Remote
            </span>
          </p>
          <a href="#" className="text-xs md:text-sm font-medium text-white hover:text-[#42fcff] transition-colors inline-block bg-[#42fcff]/5 px-3 py-1.5 rounded-full border border-[#42fcff]/15 hover:border-[#42fcff]/40">
            Checkout product ➜
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <div className="group relative pl-5 border-l-2 border-[#42fcff]/20 hover:border-[#42fcff]/60 transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#42fcff]/60 group-hover:shadow-[0_0_8px_#42fcff] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              Built responsive web interfaces using React, Next.js, TypeScript, Tailwind CSS and ShadCN UI.
            </p>
          </div>

          <div className="group relative pl-5 border-l-2 border-[#42fcff]/20 hover:border-[#42fcff]/60 transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#42fcff]/60 group-hover:shadow-[0_0_8px_#42fcff] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              Converted product requirements into wireframes, high-fidelity UI designs and frontend interfaces.
            </p>
          </div>

          <div className="group relative pl-5 border-l-2 border-[#42fcff]/20 hover:border-[#42fcff]/60 transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#42fcff]/60 group-hover:shadow-[0_0_8px_#42fcff] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              Worked with developers to maintain design accuracy, usability and smooth implementation.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Figma", "Wireframing"].map(
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
    title: "Jan 2018 - Jan 2022",
    content: (
      <div>
        <div className="mb-6">
          <h4 className="text-lg md:text-2xl font-semibold text-white mb-1">
            UI/UX Designer
          </h4>
          <p className="text-sm md:text-base font-medium text-[#42fcff]/80 tracking-wide">
            ARUX Studio{" "}
            <span className="text-[#D7E2EA]/40 font-normal">
              · Dhaka, Bangladesh | Full Time, Remote
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="group relative pl-5 border-l-2 border-[#BBCCD7]/20 hover:border-[#BBCCD7]/50 transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#BBCCD7]/50 group-hover:shadow-[0_0_8px_#BBCCD7] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              Designed user-centered web and mobile interfaces for local and international clients.
            </p>
          </div>

          <div className="group relative pl-5 border-l-2 border-[#BBCCD7]/20 hover:border-[#BBCCD7]/50 transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#BBCCD7]/50 group-hover:shadow-[0_0_8px_#BBCCD7] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              Created wireframes, prototypes and visual designs using Figma and Adobe XD.
            </p>
          </div>

          <div className="group relative pl-5 border-l-2 border-[#BBCCD7]/20 hover:border-[#BBCCD7]/50 transition-colors duration-300">
            <div className="absolute left-[-5px] top-[6px] w-2 h-2 rounded-full bg-[#BBCCD7]/50 group-hover:shadow-[0_0_8px_#BBCCD7] transition-shadow duration-300" />
            <p className="text-sm md:text-base text-[#D7E2EA]/80 leading-relaxed">
              Ran usability checks and improved user flows based on feedback.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {[
            "UI/UX Design",
            "Figma",
            "Adobe XD",
            "Prototyping",
            "Usability Checks",
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
