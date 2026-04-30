import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

import { LiveProjectButton } from "./LiveProjectButton";
import { FadeIn } from "./FadeIn";

import p1 from "../assets/p1/p1-1.png";
import p2 from "../assets/p1/p1-2.png";
import p3 from "../assets/p1/p1-3.png";

import p4 from "../assets/p2/p2-1.png";
import p5 from "../assets/p2/p2-2.png";
import p6 from "../assets/p2/p2-3.png";

import p7 from "../assets/p3/p3-1.png";
import p8 from "../assets/p3/p3-2.png";
import p9 from "../assets/p3/p3-3.png";

const projects = [
  {
    num: "01",
    label: "Project",
    name: "NightShift",
    link: "#",
    images: {
      leftTop: p2,
      leftBottom: p3,
      right: p1,
    },
  },
  {
    num: "02",
    label: "Personal",
    name: "DealHunt",
    link: "#",
    images: {
      leftTop: p6,
      leftBottom: p5,
      right: p4,
    },
  },
  {
    num: "03",
    label: "Project",
    name: "Noakhali City",
    link: "https://play.google.com/store/apps/details?id=com.flexlab.noakhalicity",
    images: {
      leftTop: p9,
      leftBottom: p7,
      right: p8,
    },
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  progress: MotionValue<number>;
  targetScale: number;
}

function ProjectCard({
  project,
  index,
  progress,
  targetScale,
}: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, [index * 0.25, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] sm:h-[95vh] sticky w-full"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale, transformOrigin: "top center" }}
        className="w-full border-2 border-[#D7E2EA] bg-[#0C0C0C] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8 overflow-hidden relative"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black leading-none text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 80px)" }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-medium">
                {project.label}
              </span>
              <h3
                className="font-medium uppercase leading-tight text-white"
                style={{ fontSize: "clamp(1.2rem, 3vw, 2.5rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton link={project.link} />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="flex flex-col gap-4 w-full sm:w-[40%]">
            <img
              src={project.images.leftTop}
              alt={`${project.name} preview 1`}
              className="w-full object-cover rounded-[16px] sm:rounded-[20px] md:rounded-[24px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.images.leftBottom}
              alt={`${project.name} preview 2`}
              className="w-full object-cover rounded-[16px] sm:rounded-[20px] md:rounded-[24px] flex-1"
              style={{ minHeight: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="w-full sm:w-[60%] flex">
            <img
              src={project.images.right}
              alt={`${project.name} preview 3`}
              className="w-full object-cover rounded-[16px] sm:rounded-[20px] md:rounded-[24px]"
              style={{ minHeight: "300px" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="max-w-7xl mx-auto w-full relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <ProjectCard
              key={project.num}
              project={project}
              index={i}
              progress={scrollYProgress}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
