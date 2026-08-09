import type { LucideIcon } from "lucide-react";
import { Award, Code2, ExternalLink, GraduationCap, PenTool, Shield } from "lucide-react";
import { FadeIn } from "./FadeIn";

interface Certification {
  title: string;
  provider: string;
  program: string;
  grade: string;
  description: string;
  href: string;
  icon: LucideIcon;
  accent: "blue" | "violet" | "green" | "amber";
}

const certifications: Certification[] = [
  {
    title: "Introduction to Front-End Development",
    provider: "Meta Career Certificates",
    program: "Meta Front-End Specialization",
    grade: "Grade: 99% · Verified",
    description:
      "Covered developer roles, semantic HTML5, component-based CSS, responsive layouts, and modern UI frameworks.",
    href: "https://coursera.org/share/92a88f22e2159668743f1cce25fe0723",
    icon: Code2,
    accent: "blue",
  },
  {
    title: "Foundations of User Experience Design",
    provider: "Google Career Certificates",
    program: "Google UX Specialization",
    grade: "Grade: 90.76% · Verified",
    description:
      "Covered user-centered design, accessibility guidance, UX responsibilities, and foundational wireframing.",
    href: "https://coursera.org/share/d87530fcd9154e9cab343c2874d963c6",
    icon: Award,
    accent: "violet",
  },
  {
    title: "Foundations of Cybersecurity",
    provider: "Google Career Certificates",
    program: "Google Cybersecurity Specialization",
    grade: "Grade: 99.34% · Verified",
    description:
      "Covered security analysis, common cyber threats, business risk, and foundational network-security tools.",
    href: "https://coursera.org/share/03512055f777d011c40c895cde9dc765",
    icon: Shield,
    accent: "green",
  },
  {
    title: "Start the UX Design Process",
    provider: "Google Career Certificates",
    program: "Google UX Specialization",
    grade: "Grade: 90% · Verified",
    description:
      "Covered empathy maps, user pain points, problem statements, competitor research, and early product framing.",
    href: "https://coursera.org/share/4d1717f08b590287d7ba6ed94a0a5b7a",
    icon: PenTool,
    accent: "amber",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="section education-section" aria-labelledby="education-title">
      <div className="education-orb" aria-hidden="true" />
      <div className="site-container relative z-10">
        <FadeIn>
          <p className="eyebrow justify-center">Formal study & continued learning</p>
          <h2 id="education-title" className="section-title section-title--gradient section-title--education text-center">
            Education <span>&amp; Certifications</span>
          </h2>
          <p className="section-intro">
            Computer science education and professional certifications supporting
            my foundation in software engineering, cybersecurity, and user experience design.
          </p>
        </FadeIn>

        <FadeIn y={28} className="education-degree-wrap">
          <article className="education-degree">
            <div className="education-degree__icon" aria-hidden="true">
              <GraduationCap size={27} />
            </div>
            <div className="education-degree__content">
              <p className="education-label">Undergraduate degree</p>
              <h3>B.Sc. in Computer Science &amp; Engineering</h3>
              <p className="education-institution">Stamford University Bangladesh</p>
              <p className="education-description">
                Building a foundation in computing, algorithms, database systems,
                and software engineering while applying those principles to modern
                web application development.
              </p>
            </div>
            <time dateTime="2023/2026">2023 – 2026</time>
            <ul className="education-courses" aria-label="Core coursework">
              {["Algorithms & Complexity", "Data Structures", "Database Systems", "Software Engineering", "OOP (C++/Java)", "Web Engineering"].map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </article>
        </FadeIn>

        <div className="certification-grid">
          {certifications.map((certificate, index) => {
            const Icon = certificate.icon;
            return (
              <FadeIn key={certificate.title} delay={index * 0.07} y={24} className="h-full">
                <a
                  href={certificate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`certification-card certification-card--${certificate.accent}`}
                  aria-label={`View ${certificate.title} certificate from ${certificate.provider} in a new tab`}
                >
                  <div className="certification-card__top">
                    <div className="certification-card__icon" aria-hidden="true"><Icon size={19} /></div>
                    <ExternalLink className="certification-card__external" aria-hidden="true" size={17} />
                  </div>
                  <p className="education-label">{certificate.program}</p>
                  <h3>{certificate.title}</h3>
                  <p className="certification-card__provider">{certificate.provider}</p>
                  <span className="certification-card__grade">{certificate.grade}</span>
                  <p className="certification-card__description">{certificate.description}</p>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
