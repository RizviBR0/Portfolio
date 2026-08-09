import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const services = [
  {
    num: "01",
    title: "Product Engineering & Full-Stack Development",
    description:
      "End-to-end development of production-ready web products, from frontend architecture and APIs to databases, authentication, and deployment.",
  },
  {
    num: "02",
    title: "Frontend Engineering for SaaS",
    description:
      "Fast, accessible, and responsive SaaS interfaces built with React, Next.js, TypeScript, and scalable component architecture.",
  },
  {
    num: "03",
    title: "UI/UX & Product Design",
    description:
      "User flows, wireframes, prototypes, design systems, and intuitive interfaces that translate product goals into usable experiences.",
  },
  {
    num: "04",
    title: "AI-Enabled Web Application Development",
    description:
      "Practical AI features and intelligent workflows integrated into modern web products to automate tasks and improve user experiences.",
  },
  {
    num: "05",
    title: "Design Systems & Interactive Prototyping",
    description:
      "Reusable design systems and high-fidelity prototypes that reduce handoff friction and keep design and implementation aligned.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section services-section" aria-labelledby="services-title">
      <div className="site-container">
        <FadeIn>
          <p className="eyebrow eyebrow--dark justify-center">How I shape and ship products</p>
          <h2 id="services-title" className="section-title text-center text-[#0C0C0C]">
            Services
          </h2>
        </FadeIn>

        <div className="services-list">
          {services.map((service, index) => (
            <FadeIn key={service.num} delay={index * 0.055} y={22}>
              <article className="service-row">
                <span className="service-number" aria-hidden="true">
                  {service.num}
                </span>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <ArrowUpRight className="service-icon" aria-hidden="true" />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
