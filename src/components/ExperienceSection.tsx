import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { FadeIn } from "./FadeIn";

const experiences = [
  {
    date: "Apr 2025 – Present",
    dateTime: "2025-04",
    role: "Frontend Engineer & UI/UX Designer",
    company: "Flexlab Studio",
    location: "Dhaka, Bangladesh",
    type: "Full-time · Remote",
    accent: "violet",
    points: [
      "Designed product flows for ride-sharing and mobility use cases including bike, car, CNG, intercity, rental, and emergency rides.",
      "Created clear UX for booking, scheduling, live trip tracking, trip history, driver verification, and safety-focused screens.",
      "Supported responsive UI implementation and reported UX and functional issues before release.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Figma", "Adobe XD"],
  },
  {
    date: "Jan 2022 – Present",
    dateTime: "2022-01",
    role: "Frontend Developer, UI/UX Designer & QA Tester",
    company: "Flexpoint",
    location: "United States",
    type: "Full-time · Remote",
    accent: "cyan",
    points: [
      "Built responsive web interfaces using React, Next.js, TypeScript, Tailwind CSS, and shadcn/ui.",
      "Converted product requirements into wireframes, high-fidelity UI designs, and frontend interfaces.",
      "Worked with developers to maintain design accuracy, usability, and smooth implementation.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Figma", "Wireframing"],
  },
  {
    date: "Jan 2018 – Jan 2022",
    dateTime: "2018-01/2022-01",
    role: "UI/UX Designer",
    company: "ARUX Studio",
    location: "Dhaka, Bangladesh",
    type: "Full-time · Remote",
    accent: "silver",
    points: [
      "Designed user-centered web and mobile interfaces for local and international clients.",
      "Created wireframes, prototypes, and visual designs using Figma and Adobe XD.",
      "Ran usability checks and improved user flows based on feedback.",
    ],
    technologies: ["UI/UX Design", "Figma", "Adobe XD", "Prototyping", "Usability Testing"],
  },
];

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 52%"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 24,
    mass: 0.65,
  });

  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-title">
      <div className="site-container">
        <FadeIn>
          <p className="eyebrow justify-center">From interaction design to product delivery</p>
          <h2 id="experience-title" className="section-title section-title--gradient text-center">
            Experience
          </h2>
          <p className="section-intro">
            Building digital products across UI/UX, frontend engineering,
            full-stack development, and product delivery.
          </p>
        </FadeIn>

        <div ref={timelineRef} className="experience-timeline">
          <div className="experience-rail" aria-hidden="true">
            <motion.div
              className="experience-rail__progress"
              style={{ scaleY: shouldReduceMotion ? 1 : lineProgress }}
            />
          </div>

          <ol className="experience-list">
            {experiences.map((experience, index) => (
              <li key={`${experience.company}-${experience.date}`} className={`experience-item experience-item--${experience.accent}`}>
                <FadeIn delay={index * 0.08} y={34}>
                  <article className="experience-card">
                    <div className="experience-card__date">
                      <motion.span
                        className="experience-node"
                        aria-hidden="true"
                        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.35 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ delay: shouldReduceMotion ? 0 : 0.16, duration: shouldReduceMotion ? 0.01 : 0.5 }}
                      />
                      <time dateTime={experience.dateTime}>{experience.date}</time>
                    </div>

                    <div className="experience-card__body">
                      <header>
                        <p className="experience-company">{experience.company}</p>
                        <h3>{experience.role}</h3>
                        <div className="experience-context">
                          <span>{experience.location}</span>
                          <span aria-hidden="true">·</span>
                          <span>{experience.type}</span>
                        </div>
                      </header>

                      <ul className="experience-points">
                        {experience.points.map((point) => <li key={point}>{point}</li>)}
                      </ul>

                      <ul className="tech-chips" aria-label={`${experience.role} technologies and methods`}>
                        {experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                      </ul>
                    </div>
                  </article>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
