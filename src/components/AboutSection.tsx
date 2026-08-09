import { ArrowDownRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import moon from "../assets/decor/moon.webp";
import orb from "../assets/decor/orb.webp";
import lego from "../assets/decor/lego.webp";
import group from "../assets/decor/group.webp";

const aboutParagraphs = [
  "I started my career in UI/UX design, working across user flows, wireframes, prototypes, and design systems. Wanting to bring those experiences to life led me into frontend development and eventually full-stack product engineering with React, Next.js, TypeScript, Node.js, and modern databases.",
  "Today, I work across the product lifecycle — from understanding requirements and shaping UX to building production interfaces, APIs, dashboards, and scalable SaaS features. I care deeply about accessibility, performance, maintainable systems, and experiences that feel simple to the people using them.",
  "My strongest advantage is the bridge between design and engineering: I can understand the user problem, design the interaction, and build the final product without losing intent between handoffs.",
];

const decorations = [
  { src: moon, className: "about-object about-object--moon" },
  { src: lego, className: "about-object about-object--lego" },
  { src: orb, className: "about-object about-object--orb" },
  { src: group, className: "about-object about-object--group" },
];

export function AboutSection() {
  return (
    <section id="about" className="section section--about" aria-labelledby="about-title">
      {decorations.map((decoration) => (
        <img
          key={decoration.src}
          src={decoration.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className={decoration.className}
        />
      ))}

      <div className="site-container relative z-10">
        <FadeIn>
          <p className="eyebrow justify-center">Design judgment, engineering depth</p>
          <h2 id="about-title" className="section-title section-title--gradient text-center">
            About me
          </h2>
        </FadeIn>

        <div className="about-grid">
          <FadeIn y={24} className="about-intro-wrap">
            <p className="about-intro">
              Product Engineer, Full-Stack Developer, and UI/UX Designer with 7+
              years in digital product design and 3+ years in frontend development.
              I combine product thinking, user-centered design, and modern engineering
              to turn ideas into accessible, scalable web products.
            </p>
          </FadeIn>

          <FadeIn delay={0.12} y={24} className="about-story">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a href="#contact" className="text-link">
              Start a conversation
              <ArrowDownRight aria-hidden="true" size={17} />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
