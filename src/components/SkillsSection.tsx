import type { LucideIcon } from "lucide-react";
import { Braces, Database, PenTool, Wrench } from "lucide-react";
import { FadeIn } from "./FadeIn";

interface SkillGroup {
  title: string;
  label: string;
  icon: LucideIcon;
  accent: "violet" | "cyan" | "pink" | "silver";
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    label: "Interfaces & systems",
    icon: Braces,
    accent: "violet",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "HTML/CSS",
      "Accessibility",
    ],
  },
  {
    title: "Backend & Data",
    label: "APIs & persistence",
    icon: Database,
    accent: "cyan",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Firebase",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    title: "Product Design",
    label: "Research & interaction",
    icon: PenTool,
    accent: "pink",
    skills: [
      "UI/UX Design",
      "Figma",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "User Flows",
      "Usability Testing",
      "Accessibility",
    ],
  },
  {
    title: "Tools & Platform",
    label: "Delivery & publishing",
    icon: Wrench,
    accent: "silver",
    skills: ["Git / GitHub", "Vercel", "Framer", "Webflow", "WordPress"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="skills-orb skills-orb--violet" aria-hidden="true" />
      <div className="skills-orb skills-orb--cyan" aria-hidden="true" />

      <div className="site-container relative z-10">
        <FadeIn>
          <p className="eyebrow justify-center">A connected product toolkit</p>
          <h2 id="skills-title" className="section-title section-title--gradient text-center">
            Skills
          </h2>
          <p className="section-intro">
            Technologies and product-design methods I use to move from a clear
            user problem to a maintainable web application.
          </p>
        </FadeIn>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <FadeIn key={group.title} delay={index * 0.08} y={26} className="h-full">
                <article className={`skill-card skill-card--${group.accent}`}>
                  <header className="skill-card__header">
                    <div className="skill-card__icon" aria-hidden="true">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p>{group.label}</p>
                      <h3>{group.title}</h3>
                    </div>
                  </header>

                  <ul className="skill-tags" aria-label={`${group.title} skills`}>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
