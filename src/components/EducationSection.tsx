import React from "react";
import {
  GraduationCap,
  Award,
  PenTool,
  Code2,
  Database,
  Terminal,
  Layers,
  User,
  Eye,
  Compass,
  Layout,
  MousePointer,
  GitBranch,
  Search,
  Pencil,
} from "lucide-react";
import { FadeIn } from "./FadeIn";
import { TiltCard } from "./ui/TiltCard";

interface EducationItem {
  type: "degree" | "certification";
  title: string;
  institution: string;
  period?: string;
  icon: React.ComponentType<any>;
  satellites: React.ComponentType<any>[];
  color: string;
}

const educationItems: EducationItem[] = [
  {
    type: "degree",
    title: "B.Sc in Computer Science Engineering",
    institution: "Stamford University Bangladesh",
    period: "2023 – 2026",
    icon: GraduationCap,
    satellites: [Code2, Database, Terminal, Layers],
    color: "#7621B0",
  },
  {
    type: "certification",
    title: "Foundations of User Experience Design",
    institution: "Google Career Certificates",
    period: "Credential Certified",
    icon: Award,
    satellites: [User, Eye, Compass, Layout],
    color: "#42fcff",
  },
  {
    type: "certification",
    title: "Start the UX Design Process",
    institution: "Google Career Certificates",
    period: "Credential Certified",
    icon: PenTool,
    satellites: [MousePointer, GitBranch, Search, Pencil],
    color: "#42fcff",
  },
];

function VisualIconRow({
  centerIcon: CenterIcon,
  satellites,
  isHighlighted,
  color,
}: {
  centerIcon: React.ComponentType<any>;
  satellites: React.ComponentType<any>[];
  isHighlighted: boolean;
  color: string;
}) {
  const [Sat1, Sat2, Sat3, Sat4] = satellites;

  return (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden select-none">
      {/* Central vertical glowing laser ray behind the center icon */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-32 z-0 transition-all duration-500"
        style={{
          background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
          opacity: isHighlighted ? 0.75 : 0.2,
          boxShadow: isHighlighted ? `0 0 12px ${color}` : "none",
        }}
      />

      {/* Floating horizontal track of circular nodes */}
      <div className="flex items-center gap-2.5 sm:gap-3.5 z-10">
        {/* Far Left Satellite */}
        <div className="w-8 h-8 rounded-full bg-[#181818]/30 border border-white/5 flex items-center justify-center opacity-25 scale-90 shrink-0">
          <Sat1 size={14} className="text-[#D7E2EA]/60" />
        </div>

        {/* Inner Left Satellite */}
        <div className="w-11 h-11 rounded-full bg-[#181818]/60 border border-white/10 flex items-center justify-center opacity-55 shrink-0">
          <Sat2 size={18} className="text-[#D7E2EA]/80" />
        </div>

        {/* Center Main Icon Circle */}
        <div
          className="w-16 h-16 rounded-full bg-[#1a1a1a] border-2 flex items-center justify-center shadow-2xl shrink-0 transition-all duration-500 group-hover:scale-110"
          style={{
            borderColor: isHighlighted ? color : "rgba(255, 255, 255, 0.15)",
            boxShadow: isHighlighted
              ? `0 0 20px ${color}35, inset 0 0 10px ${color}25`
              : "0 10px 25px -5px rgba(0,0,0,0.5)",
          }}
        >
          <CenterIcon
            size={28}
            className="transition-colors duration-500"
            style={{
              color: isHighlighted ? color : "#D7E2EA",
            }}
          />
        </div>

        {/* Inner Right Satellite */}
        <div className="w-11 h-11 rounded-full bg-[#181818]/60 border border-white/10 flex items-center justify-center opacity-55 shrink-0">
          <Sat3 size={18} className="text-[#D7E2EA]/80" />
        </div>

        {/* Far Right Satellite */}
        <div className="w-8 h-8 rounded-full bg-[#181818]/30 border border-white/5 flex items-center justify-center opacity-25 scale-90 shrink-0">
          <Sat4 size={14} className="text-[#D7E2EA]/60" />
        </div>
      </div>
    </div>
  );
}

function EducationCard({ item, index }: { item: EducationItem; index: number }) {
  const isHighlighted = item.type === "degree";

  return (
    <FadeIn delay={index * 0.1} y={40} className="h-full">
      <TiltCard className="h-full">
        <div
          className={`relative rounded-[28px] p-8 border hover:border-white/12 transition-all duration-500 group overflow-hidden flex flex-col justify-between aspect-[4/5] ${
            isHighlighted
              ? "border-[#7621B0]/30 shadow-[0_15px_30px_-10px_rgba(118,33,176,0.15)]"
              : "border-white/5 opacity-80 hover:opacity-100"
          }`}
          style={{
            background: isHighlighted
              ? "linear-gradient(145deg, #16121f, #0d0c0f)"
              : "linear-gradient(145deg, #131313, #0b0b0b)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Subtle radial aura background highlight (for B.Sc card only) */}
          {isHighlighted && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(118,33,176,0.12)_0%,transparent_65%)] pointer-events-none" />
          )}

          {/* Graphics area - Floating horizontal icon track */}
          <VisualIconRow
            centerIcon={item.icon}
            satellites={item.satellites}
            isHighlighted={isHighlighted}
            color={item.color}
          />

          {/* Typography area - Title and description details */}
          <div className="text-left mt-4 z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-white transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light font-sans tracking-wide leading-relaxed">
              {item.institution}
            </p>
            <p className="text-[10px] text-[#D7E2EA]/40 font-mono tracking-widest uppercase mt-3">
              {item.period}
            </p>
          </div>
        </div>
      </TiltCard>
    </FadeIn>
  );
}

export function EducationSection() {
  return (
    <section
      id="education"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-[40%] left-[-15%] w-[450px] h-[450px] bg-[#7621B0]/3 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[400px] h-[400px] bg-[#42fcff]/2 blur-[140px] pointer-events-none" />

      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-6 sm:mb-8 leading-none"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Education
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p
          className="text-[#D7E2EA]/60 font-light text-center max-w-xl mx-auto mb-14 md:mb-20 leading-relaxed"
          style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)" }}
        >
          Degrees and professional certifications validating my computer science and UI/UX design skillset.
        </p>
      </FadeIn>

      {/* Grid of 3 interactive cards matching the minimal visual style */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
        {educationItems.map((item, i) => (
          <EducationCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
