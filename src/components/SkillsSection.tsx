import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { TiltCard } from "./ui/TiltCard";

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  title: string;
  experience: string;
  color: string;
  colorGlow: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    experience: "3+ years",
    color: "#7621B0",
    colorGlow: "rgba(118, 33, 176, 0.4)",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "ShadCN UI", level: 88 },
      { name: "HTML / CSS", level: 97 },
    ],
  },
  {
    title: "Backend",
    experience: "2+ years",
    color: "#42fcff",
    colorGlow: "rgba(66, 252, 255, 0.3)",
    skills: [
      { name: "Supabase", level: 80 },
      { name: "Express.js", level: 72 },
      { name: "MongoDB", level: 75 },
      { name: "Firebase", level: 78 },
      { name: "PostgreSQL", level: 70 },
      { name: "REST API", level: 82 },
    ],
  },
  {
    title: "Design",
    experience: "7+ years",
    color: "#BBCCD7",
    colorGlow: "rgba(187, 204, 215, 0.3)",
    skills: [
      { name: "UI/UX Design", level: 96 },
      { name: "Figma", level: 97 },
      { name: "Wireframing", level: 95 },
      { name: "Prototyping", level: 94 },
      { name: "Design Systems", level: 90 },
      { name: "UX Writing", level: 82 },
      { name: "Adobe XD", level: 88 },
    ],
  },
];

const otherTools = [
  { name: "Webflow", icon: "🌐", status: "Expert Level" },
  { name: "Framer", icon: "🎨", status: "Expert Level" },
  { name: "Lottie", icon: "✨", status: "Expert Level" },
  { name: "WordPress", icon: "📝", status: "Expert" },
];

function SkillRow({
  name,
  level,
  color,
  colorGlow,
}: {
  name: string;
  level: number;
  color: string;
  colorGlow: string;
}) {
  return (
    <div className="group/row">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs md:text-sm font-medium text-[#D7E2EA]/90 group-hover/row:text-white transition-colors duration-300">
          {name}
        </span>
        <span className="text-xs font-mono font-bold" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="relative h-1.5 rounded-full bg-white/5 overflow-hidden">
        {/* Fill bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}30, ${color})`,
            boxShadow: `0 0 8px ${colorGlow}`,
          }}
        />
      </div>
    </div>
  );
}

function SkillCategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <FadeIn delay={index * 0.15} y={40}>
      <TiltCard className="h-full">
        <div
          className="relative rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-white/15 transition-all duration-500 group overflow-hidden h-full flex flex-col justify-between"
          style={{
            background:
              "linear-gradient(145deg, rgba(23, 20, 30, 0.7), rgba(12, 12, 12, 0.95))",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Neon Radial Overlay Glow on Card Hover */}
          <div
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none"
            style={{ background: category.color }}
          />

          <div>
            {/* Header info */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                  {category.title}
                </h3>
                <p className="text-xs text-[#D7E2EA]/40 mt-1 uppercase tracking-widest font-mono">
                  {category.experience}
                </p>
              </div>
            </div>

            {/* List of skills (uniform) */}
            <div className="flex flex-col gap-5">
              {category.skills.map((skill) => (
                <SkillRow
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={category.color}
                  colorGlow={category.colorGlow}
                />
              ))}
            </div>
          </div>
        </div>
      </TiltCard>
    </FadeIn>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#7621B0]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#42fcff]/3 blur-[120px] pointer-events-none" />

      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-6 sm:mb-8 leading-none"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Skills
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p
          className="text-[#D7E2EA]/60 font-light text-center max-w-xl mx-auto mb-14 md:mb-20 leading-relaxed"
          style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)" }}
        >
          Technologies, design workflows, and tools that power my digital creation cycle.
        </p>
      </FadeIn>

      {/* Main Categories Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
        {skillCategories.map((category, i) => (
          <SkillCategoryCard key={category.title} category={category} index={i} />
        ))}
      </div>

      {/* Supporting Tools Grid */}
      <FadeIn delay={0.3} y={30}>
        <div className="max-w-5xl mx-auto border-t border-white/5 pt-12 md:pt-16">
          <h3 className="text-center text-xs md:text-sm font-semibold text-[#D7E2EA]/40 uppercase tracking-widest mb-10 font-mono">
            Supporting Tools & Competency
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherTools.map((tool) => (
              <div key={tool.name} className="h-full">
                <TiltCard>
                  <div className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/5 bg-white/3 hover:bg-white/5 hover:border-white/10 transition-all duration-300 cursor-default h-full relative overflow-hidden group">
                    {/* Hover internal glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-rgba(118, 33, 176, 0.05) to-rgba(66, 252, 255, 0.05) opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-2xl shrink-0 select-none">{tool.icon}</span>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white tracking-wide">{tool.name}</span>
                      <span className="text-[10px] text-[#42fcff]/60 uppercase tracking-widest font-mono mt-0.5">{tool.status}</span>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
