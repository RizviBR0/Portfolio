import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

import { LiveProjectButton } from "./LiveProjectButton";
import { FadeIn } from "./FadeIn";
import { ProjectDetailModal, type ProjectDetail } from "./ProjectDetailModal";
import { Magnet } from "./Magnet";

import p1 from "../assets/p1/p1-1.png";
import p2 from "../assets/p1/p1-2.png";
import p3 from "../assets/p1/p1-3.png";

import p4 from "../assets/p2/p2-1.png";
import p5 from "../assets/p2/p2-2.png";
import p6 from "../assets/p2/p2-3.png";

import p7 from "../assets/p3/p3-1.png";
import p8 from "../assets/p3/p3-2.png";
import p9 from "../assets/p3/p3-3.png";

const projects: (ProjectDetail & {
  label: string;
  images: { leftTop: string; leftBottom: string; right: string };
})[] = [
  {
    num: "01",
    label: "Project",
    name: "IdeaVault - Startup Idea Hub",
    link: "https://ideavault-client-kmh1.vercel.app/",
    githubLink: "https://github.com/RizviBR0/ideavault-client.git",
    techStack: ["Next.js", "React", "Tailwind CSS", "Better-Auth", "MongoDB", "Express.js"],
    description:
      "IdeaVault is a full-stack startup incubator and collaboration portal that empowers innovators to seed startup concepts, gather validation from the community, and participate in detailed discussions, wrapped in a polished light/dark theme system.",
    challenges:
      "Implementing secure multi-method session control via Better-Auth and database adapters while maintaining low-latency client-side authentication checks. Managing debounced query search and instant category filter state changes smoothly.",
    improvements:
      "Adding interactive creator analytics dashboards, AI-powered startup category matching, real-time collaboration invites, and advanced discussion moderation filters.",
    images: {
      leftTop: p2,
      leftBottom: p3,
      right: p1,
    },
  },
  {
    num: "02",
    label: "Project",
    name: "Woff Space - Sharing Portal",
    link: "https://woff.space",
    githubLink: "https://github.com/RizviBR0/Woff.git",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Supabase", "Figma"],
    description:
      "Woff Space is a minimal, zero-friction content sharing platform allowing users to instantly create temporary spaces to drop files, images, PDFs, notes, or code blocks via short room codes or links—no sign-up required.",
    challenges:
      "Managing transient sessions using device-based cookie auth, integrating Radix UI primitives and custom drag-and-drop file upload workflows, and implementing Supabase RLS storage rules securely.",
    improvements:
      "Adding end-to-end client-side file encryption, setting custom self-destruct timers for shareable rooms, and integrating multi-host speed optimized storage servers.",
    images: {
      leftTop: p6,
      leftBottom: p5,
      right: p4,
    },
  },
  {
    num: "03",
    label: "Project",
    name: "Suncart - E-Commerce Showcase",
    link: "https://suncart-pink.vercel.app",
    githubLink: "https://github.com/RizviBR0/suncart.git",
    techStack: ["Next.js", "React", "Tailwind CSS", "HeroUI", "Better Auth", "MongoDB"],
    description:
      "Suncart is a modern, responsive product showcase platform featuring secure multi-method credential and Google SSO authentication, interactive catalogs, ratings reviews, and high-fidelity page loader skeletons.",
    challenges:
      "Configuring dynamic product page routes with server components and MongoDB fetching, preventing layout shifts during auth checks with HeroUI transition skeletons, and mapping notification alerts.",
    improvements:
      "Integrating fully functional payment gateways, shopping cart state management with client synchronization, and automated receipt generation engines.",
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
  onViewDetails: (project: (typeof projects)[0]) => void;
}

function ProjectCard({
  project,
  index,
  progress,
  targetScale,
  onViewDetails,
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
        className="w-full h-full bg-linear-to-b from-[#212121]  to-[#17141e] shadow-2xl shadow-blue-400/30 rounded-3xl sm:rounded-4xl md:rounded-[40px] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8 overflow-hidden relative"
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
          <div className="flex items-center gap-3">
            <Magnet
              padding={30}
              magnetStrength={30}
              activeTransition="transform 0.2s ease-out"
              inactiveTransition="transform 0.4s ease-in-out"
            >
              <button
                onClick={() => onViewDetails(project)}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-[#7621B0]/50 text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base hover:bg-[#7621B0]/15 hover:border-[#7621B0] transition-colors cursor-pointer"
              >
                View Details
              </button>
            </Magnet>
            <LiveProjectButton link={project.link} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 flex-1 min-h-0">
          <div className="flex flex-col gap-4 w-full sm:w-[40%] sm:h-full flex-1 min-h-0">
            <img
              src={project.images.leftTop}
              alt={`${project.name} preview 1`}
              className="w-full object-cover rounded-[16px] sm:rounded-[20px] md:rounded-[24px] shrink-0"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.images.leftBottom}
              alt={`${project.name} preview 2`}
              className="w-full object-cover rounded-[16px] sm:rounded-[20px] md:rounded-[24px] flex-1 min-h-0"
            />
          </div>
          <div className="w-full sm:w-[60%] flex sm:h-full flex-1 min-h-0">
            <img
              src={project.images.right}
              alt={`${project.name} preview 3`}
              className="w-full h-full object-cover rounded-[16px] sm:rounded-[20px] md:rounded-[24px] min-h-0"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
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
                onViewDetails={setSelectedProject}
              />
            );
          })}
        </div>
      </section>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
