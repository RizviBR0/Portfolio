import { motion, useInView } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { useRef } from "react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiShadcnui,
  SiHtml5,
  SiSupabase,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiFigma,
  SiWebflow,
  SiFramer,
  SiWordpress,
} from "react-icons/si";
import {
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlinePaintBrush,
} from "react-icons/hi2";
import {
  TbApi,
  TbLayout,
  TbWriting,
  TbComponents,
  TbDeviceDesktopCode,
  TbSettingsCog,
  TbArtboard,
} from "react-icons/tb";
import { MdAnimation } from "react-icons/md";

/* ─── Data ─── */

interface Skill {
  name: string;
  level: number;
  icon: IconType;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  experience: string;
  hoverAccent: string;
  hoverAccentRgb: string;
  icon: IconType;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    subtitle: "CLIENT SIDE",
    experience: "3+ years",
    hoverAccent: "#a855f7",
    hoverAccentRgb: "168, 85, 247",
    icon: HiOutlineBolt,
    skills: [
      { name: "React.js", level: 92, icon: SiReact },
      { name: "Next.js", level: 88, icon: SiNextdotjs },
      { name: "TypeScript", level: 85, icon: SiTypescript },
      { name: "JavaScript", level: 90, icon: SiJavascript },
      { name: "Tailwind CSS", level: 95, icon: SiTailwindcss },
      { name: "ShadCN UI", level: 88, icon: SiShadcnui },
      { name: "HTML / CSS", level: 97, icon: SiHtml5 },
    ],
  },
  {
    title: "Backend",
    subtitle: "SERVER SIDE",
    experience: "2+ years",
    hoverAccent: "#22d3ee",
    hoverAccentRgb: "34, 211, 238",
    icon: HiOutlineShieldCheck,
    skills: [
      { name: "Supabase", level: 80, icon: SiSupabase },
      { name: "Express.js", level: 72, icon: SiExpress },
      { name: "MongoDB", level: 75, icon: SiMongodb },
      { name: "Firebase", level: 78, icon: SiFirebase },
      { name: "PostgreSQL", level: 70, icon: SiPostgresql },
      { name: "REST API", level: 82, icon: TbApi },
    ],
  },
  {
    title: "Design",
    subtitle: "CREATIVE SUITE",
    experience: "7+ years",
    hoverAccent: "#f472b6",
    hoverAccentRgb: "244, 114, 182",
    icon: HiOutlinePaintBrush,
    skills: [
      { name: "UI/UX Design", level: 96, icon: TbLayout },
      { name: "Figma", level: 97, icon: SiFigma },
      { name: "Wireframing", level: 95, icon: TbDeviceDesktopCode },
      { name: "Prototyping", level: 94, icon: TbComponents },
      { name: "Design Systems", level: 90, icon: TbSettingsCog },
      { name: "UX Writing", level: 82, icon: TbWriting },
      { name: "Adobe XD", level: 88, icon: TbArtboard },
    ],
  },
];

interface OtherTool {
  name: string;
  icon: IconType;
  tag: string;
}

const otherTools: OtherTool[] = [
  { name: "Webflow", icon: SiWebflow, tag: "EXPERT" },
  { name: "Framer", icon: SiFramer, tag: "EXPERT" },
  { name: "Lottie", icon: MdAnimation, tag: "EXPERT" },
  { name: "WordPress", icon: SiWordpress, tag: "EXPERT" },
];

/*
 * CSS-variable driven hover approach:
 * The parent card sets --bar-color, --bar-glow, --icon-color, --pct-color
 * as CSS custom properties. On hover those vars change.
 * XPBar reads them purely via CSS — no re-render, no re-animation.
 */

/* ─── Inline style block (injected once) ─── */
const skillsStyles = `
.skill-card {
  --bar-color: rgba(187, 204, 215, 0.6);
  --bar-glow: 0 0 6px rgba(187, 204, 215, 0.15);
  --icon-color: rgba(255,255,255,0.3);
  --pct-color: rgba(255,255,255,0.25);
  --label-color: rgba(255,255,255,0.7);
  --sub-color: rgba(255,255,255,0.25);
  --badge-bg: rgba(255,255,255,0.04);
  --badge-border: rgba(255,255,255,0.08);
  --badge-text: rgba(255,255,255,0.35);
  --cat-icon-bg: rgba(255,255,255,0.04);
  --cat-icon-border: rgba(255,255,255,0.08);
  --cat-icon-color: rgba(255,255,255,0.5);
  --top-line: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  --top-line-opacity: 0.3;
  --glow-bg: linear-gradient(135deg, rgba(255,255,255,0.08), transparent 50%, rgba(255,255,255,0.04));
}

.skill-card .xp-bar-fill,
.skill-card .xp-icon,
.skill-card .xp-label,
.skill-card .xp-pct,
.skill-card .cat-icon-wrap,
.skill-card .cat-icon,
.skill-card .cat-sub,
.skill-card .cat-badge,
.skill-card .top-line {
  transition: all 0.5s ease;
}

.skill-card .xp-bar-fill {
  background-color: var(--bar-color) !important;
  box-shadow: var(--bar-glow) !important;
}
.skill-card .xp-icon { color: var(--icon-color); }
.skill-card .xp-label { color: var(--label-color); }
.skill-card .xp-pct { color: var(--pct-color); }
.skill-card .cat-icon-wrap {
  background: var(--cat-icon-bg);
  border-color: var(--cat-icon-border);
}
.skill-card .cat-icon { color: var(--cat-icon-color); }
.skill-card .cat-sub { color: var(--sub-color); }
.skill-card .cat-badge {
  color: var(--badge-text);
  background: var(--badge-bg);
  border-color: var(--badge-border);
}
.skill-card .top-line {
  background: var(--top-line);
  opacity: var(--top-line-opacity);
}
`;

/* ─── XP Progress Bar ─── */
function XPBar({
  name,
  level,
  index,
  icon: Icon,
}: {
  name: string;
  level: number;
  index: number;
  icon: IconType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <Icon className="xp-icon w-3.5 h-3.5 shrink-0" />
          <span
            className="xp-label text-sm font-semibold"
            style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.5px" }}
          >
            {name}
          </span>
        </div>
        <span
          className="xp-pct text-[11px] font-bold tracking-wider"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {level}%
        </span>
      </div>

      {/* Progress bar track */}
      <div className="relative h-2 rounded-sm overflow-hidden bg-white/[0.04]">
        <div className="absolute inset-0 flex gap-[1px]">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-1 bg-white/[0.02] rounded-[1px]" />
          ))}
        </div>

        {/* Fill bar — width animated once by framer-motion, color driven by CSS vars */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 1,
            delay: index * 0.08,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="xp-bar-fill absolute inset-y-0 left-0 rounded-sm"
        />

        {/* Animated shimmer */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={isInView ? { x: "200%" } : { x: "-100%" }}
          transition={{
            duration: 2,
            delay: index * 0.08 + 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 4,
          }}
          className="absolute inset-y-0 w-1/3 rounded-sm pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Skill Category Card ─── */
function SkillCategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const CategoryIcon = category.icon;
  const rgb = category.hoverAccentRgb;
  const accent = category.hoverAccent;

  /* Hover vars override — applied via onMouseEnter/Leave on the wrapper */
  const hoverVars: Record<string, string> = {
    "--bar-color": accent,
    "--bar-glow": `0 0 10px rgba(${rgb}, 0.4)`,
    "--icon-color": accent,
    "--pct-color": accent,
    "--label-color": "rgba(255,255,255,0.95)",
    "--sub-color": accent,
    "--badge-bg": `rgba(${rgb}, 0.1)`,
    "--badge-border": `rgba(${rgb}, 0.25)`,
    "--badge-text": accent,
    "--cat-icon-bg": `rgba(${rgb}, 0.1)`,
    "--cat-icon-border": `rgba(${rgb}, 0.25)`,
    "--cat-icon-color": accent,
    "--top-line": `linear-gradient(90deg, transparent, rgba(${rgb}, 0.6), transparent)`,
    "--top-line-opacity": "0.8",
    "--glow-bg": `linear-gradient(135deg, rgba(${rgb}, 0.25), transparent 50%, rgba(${rgb}, 0.1))`,
  };

  const defaultVars: Record<string, string> = {
    "--bar-color": "rgba(187, 204, 215, 0.6)",
    "--bar-glow": "0 0 6px rgba(187, 204, 215, 0.15)",
    "--icon-color": "rgba(255,255,255,0.3)",
    "--pct-color": "rgba(255,255,255,0.25)",
    "--label-color": "rgba(255,255,255,0.7)",
    "--sub-color": "rgba(255,255,255,0.25)",
    "--badge-bg": "rgba(255,255,255,0.04)",
    "--badge-border": "rgba(255,255,255,0.08)",
    "--badge-text": "rgba(255,255,255,0.35)",
    "--cat-icon-bg": "rgba(255,255,255,0.04)",
    "--cat-icon-border": "rgba(255,255,255,0.08)",
    "--cat-icon-color": "rgba(255,255,255,0.5)",
    "--top-line": "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
    "--top-line-opacity": "0.3",
    "--glow-bg": "linear-gradient(135deg, rgba(255,255,255,0.08), transparent 50%, rgba(255,255,255,0.04))",
  };

  const applyVars = (el: HTMLElement, vars: Record<string, string>) => {
    for (const [key, value] of Object.entries(vars)) {
      el.style.setProperty(key, value);
    }
  };

  return (
    <FadeIn delay={index * 0.15} y={40}>
      <div
        className="skill-card relative h-full group"
        onMouseEnter={(e) => applyVars(e.currentTarget, hoverVars)}
        onMouseLeave={(e) => applyVars(e.currentTarget, defaultVars)}
      >
        {/* Outer glow border on hover */}
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ background: "var(--glow-bg)" }}
        />

        <div
          className="relative rounded-2xl h-full flex flex-col overflow-hidden"
          style={{
            background: "linear-gradient(180deg, rgba(17, 17, 24, 0.95), rgba(10, 10, 14, 0.98))",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Card Header */}
          <div
            className="px-6 pt-6 pb-5 border-b"
            style={{ borderColor: "rgba(255,255,255,0.04)" }}
          >
            <div className="flex items-start justify-between mb-1">
              <div className="flex items-center gap-3">
                <div className="cat-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border">
                  <CategoryIcon className="cat-icon w-5 h-5" />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-white uppercase tracking-wider"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    {category.title}
                  </h3>
                  <p
                    className="cat-sub text-[10px] font-bold tracking-[0.25em] mt-0.5"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    {category.subtitle}
                  </p>
                </div>
              </div>

              <span
                className="cat-badge text-[10px] font-bold tracking-wider px-3 py-1 rounded-full border"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                {category.experience}
              </span>
            </div>
          </div>

          {/* Skills list */}
          <div className="px-6 py-5 flex flex-col gap-4 flex-1">
            {category.skills.map((skill, i) => (
              <XPBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                index={i}
                icon={skill.icon}
              />
            ))}
          </div>

          {/* Scanline effect overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
            }}
          />

          {/* Top accent line */}
          <div className="top-line absolute top-0 left-0 right-0 h-[1px]" />
        </div>
      </div>
    </FadeIn>
  );
}

/* ─── Main Export ─── */
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative overflow-hidden"
    >
      {/* Injected styles for CSS-variable driven hover */}
      <style>{skillsStyles}</style>

      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Background effects */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-400/3 blur-[120px] pointer-events-none" />

      {/* Section Heading */}
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
          style={{
            fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)",
            fontFamily: "'Rajdhani', 'Kanit', sans-serif",
          }}
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
          <h3
            className="text-center text-xs md:text-sm font-bold text-white/25 uppercase tracking-[0.3em] mb-10"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            <TbSettingsCog className="inline-block w-4 h-4 mr-2 -mt-0.5 text-white/25" />
            Supporting Tools & Competency
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherTools.map((tool, i) => {
              const ToolIcon = tool.icon;
              return (
                <FadeIn key={tool.name} delay={0.4 + i * 0.08} y={20}>
                  <div
                    className="flex items-center gap-3 px-5 py-4 rounded-xl cursor-default relative overflow-hidden group/tool transition-all duration-300"
                    style={{
                      background: "rgba(17, 17, 24, 0.8)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.05)";
                    }}
                  >
                    <ToolIcon className="w-5 h-5 shrink-0 text-white/35 group-hover/tool:text-white/60 transition-colors duration-300" />
                    <div className="flex flex-col">
                      <span
                        className="text-sm font-bold text-white tracking-wide"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}
                      >
                        {tool.name}
                      </span>
                      <span
                        className="text-[9px] font-bold tracking-[0.2em] text-white/25"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}
                      >
                        {tool.tag}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
