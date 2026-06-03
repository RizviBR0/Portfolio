import {
  GraduationCap,
  Award,
  PenTool,
  Database,
  GitBranch,
  Shield,
  Code2,
  ExternalLink,
} from "lucide-react";
import { FadeIn } from "./FadeIn";
import { BorderGlow } from "./ui/BorderGlow";

function DatabaseVisual() {
  return (
    <div className="w-full h-24 bg-[#08080c] border border-white/5 rounded-xl p-3 flex items-center justify-between font-mono text-[9px] text-[#D7E2EA]/40 mt-4 overflow-hidden relative group/db">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#42fcff]/5 to-transparent opacity-0 group-hover/db:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="border border-white/10 rounded bg-white/2 p-2 w-[45%] z-10">
        <div className="text-white border-b border-white/10 pb-1 mb-1 font-semibold text-center uppercase tracking-wide">
          users
        </div>
        <div className="flex justify-between">
          <span>🔑 id</span>
          <span className="text-[#8be9fd]">INT</span>
        </div>
        <div className="flex justify-between text-white/30">
          <span>name</span>
          <span>VARCHAR</span>
        </div>
        <div className="flex justify-between text-white/30">
          <span>email</span>
          <span>VARCHAR</span>
        </div>
      </div>
      <div className="w-[10%] flex items-center justify-center z-10">
        <svg className="w-full h-8 overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,15 H30" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M12,10 L17,15 L12,20" stroke="#42fcff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="border border-white/10 rounded bg-white/2 p-2 w-[45%] z-10">
        <div className="text-white border-b border-white/10 pb-1 mb-1 font-semibold text-center uppercase tracking-wide">
          orders
        </div>
        <div className="flex justify-between">
          <span>🔑 id</span>
          <span className="text-[#8be9fd]">INT</span>
        </div>
        <div className="flex justify-between">
          <span>🔗 user_id</span>
          <span className="text-[#ff79c6]">INT</span>
        </div>
        <div className="flex justify-between text-white/30">
          <span>total</span>
          <span>DECIMAL</span>
        </div>
      </div>
    </div>
  );
}

function GitGraphVisual() {
  return (
    <div className="w-full h-24 bg-[#08080c] border border-white/5 rounded-xl p-3 flex items-center justify-center font-mono text-[9px] text-[#D7E2EA]/40 mt-4 overflow-hidden relative group/git">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#7621B0]/5 to-transparent opacity-0 group-hover/git:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <svg className="w-[85%] h-12 overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="10" y1="24" x2="190" y2="24" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        <path d="M50,24 C 70,6 110,6 130,24" stroke="#7621B0" strokeWidth="2" strokeLinecap="round" />
        
        <circle cx="30" cy="24" r="4" fill="#BBCCD7" stroke="#0C0C0C" strokeWidth="1.5" />
        <circle cx="50" cy="24" r="4" fill="#BBCCD7" stroke="#0C0C0C" strokeWidth="1.5" />
        <circle cx="130" cy="24" r="4" fill="#BBCCD7" stroke="#0C0C0C" strokeWidth="1.5" />
        <circle cx="170" cy="24" r="4" fill="#BBCCD7" stroke="#0C0C0C" strokeWidth="1.5" />
        
        <circle cx="90" cy="9" r="4" fill="#7621B0" stroke="#0C0C0C" strokeWidth="1.5" />
        
        <text x="30" y="40" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8">init</text>
        <text x="90" y="-2" textAnchor="middle" fill="#7621B0" fontSize="8">feat/dsa</text>
        <text x="130" y="40" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8">merge</text>
      </svg>
    </div>
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

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 items-stretch">
        
        {/* Flagship Card: BSc in CSE */}
        <div className="md:col-span-6 h-full">
          <FadeIn delay={0.1} y={40} className="h-full">
            <BorderGlow
              edgeSensitivity={20}
              glowColor="270 70 60"
              backgroundColor="#16121f"
              borderRadius={28}
              glowRadius={30}
              glowIntensity={1.2}
              fillOpacity={0.4}
              colors={['#7621b0', '#c084fc', '#e879f9']}
              className="h-full"
            >
              <div className="p-6 sm:p-8 text-left w-full h-full flex flex-col lg:flex-row gap-6 justify-between items-start">
                {/* Left info column */}
                <div className="w-full lg:w-7/12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7621B0]/20 border border-[#7621B0]/30 flex items-center justify-center text-[#7621B0] shadow-lg shadow-[#7621B0]/10">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#b97dfa] font-sans tracking-wider uppercase font-semibold">
                        Undergraduate Degree
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        B.Sc. in Computer Science & Engineering
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light font-sans tracking-wide leading-relaxed mb-4">
                    Stamford University Bangladesh
                  </p>

                  <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#7621B0]/10 border border-[#7621B0]/25 text-[#c18ff2] font-sans text-xs font-semibold tracking-wide mb-6">
                    2023 – 2026
                  </div>

                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                    Focusing on solid computing fundamentals, algorithm design, and software systems. Actively combining academic software engineering principles with robust practical application development.
                  </p>
                </div>

                {/* Right coursework column */}
                <div className="w-full lg:w-4/12 lg:border-l lg:border-white/10 lg:pl-8 mt-4 lg:mt-0 flex flex-col justify-center h-full">
                  <span className="text-[9px] text-[#b97dfa] uppercase tracking-wider font-sans block mb-3.5 font-bold">
                    Core Coursework
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Algorithms & Complexity",
                      "Data Structures",
                      "Database Systems",
                      "Software Engineering",
                      "OOP (C++/Java)",
                      "Web Engineering"
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white transition-colors duration-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </BorderGlow>
          </FadeIn>
        </div>

        {/* Supporting Card 1: Academic Focus */}
        <div className="md:col-span-3 h-full">
          <FadeIn delay={0.2} y={40} className="h-full">
            <BorderGlow
              edgeSensitivity={30}
              glowColor="200 10 50"
              backgroundColor="#131313"
              borderRadius={28}
              glowRadius={25}
              glowIntensity={0.8}
              fillOpacity={0.2}
              colors={['#555', '#777', '#aaa']}
              className="h-full"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D7E2EA]/80">
                      <Database size={18} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      System & Database Design
                    </h3>
                  </div>
                  <p className="text-xs text-[#D7E2EA]/60 font-light leading-relaxed">
                    Analyzing complex system models and designing optimized relational databases using advanced normalizations and query profiling.
                  </p>
                </div>
                <DatabaseVisual />
              </div>
            </BorderGlow>
          </FadeIn>
        </div>

        {/* Supporting Card 2: Theory to Practice */}
        <div className="md:col-span-3 h-full">
          <FadeIn delay={0.3} y={40} className="h-full">
            <BorderGlow
              edgeSensitivity={30}
              glowColor="200 10 50"
              backgroundColor="#131313"
              borderRadius={28}
              glowRadius={25}
              glowIntensity={0.8}
              fillOpacity={0.2}
              colors={['#555', '#777', '#aaa']}
              className="h-full"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#D7E2EA]/80">
                      <GitBranch size={18} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      Engineering Mindset
                    </h3>
                  </div>
                  <p className="text-xs text-[#D7E2EA]/60 font-light leading-relaxed">
                    Applying core data structures, graph traversals, and object-oriented design patterns into clean, modular front-end architectures.
                  </p>
                </div>
                <GitGraphVisual />
              </div>
            </BorderGlow>
          </FadeIn>
        </div>

        {/* Bottom Row: Verified Professional Certifications */}
        
        {/* Certificate 1: Meta Front-End */}
        <div className="md:col-span-3 h-full">
          <FadeIn delay={0.4} y={40} className="h-full">
            <BorderGlow
              edgeSensitivity={20}
              glowColor="200 80 50"
              backgroundColor="#081018"
              borderRadius={28}
              glowRadius={30}
              glowIntensity={1.0}
              fillOpacity={0.3}
              colors={['#0064FF', '#00d2ff', '#00f5d4']}
              className="h-full"
            >
              <a
                href="https://coursera.org/share/92a88f22e2159668743f1cce25fe0723"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 sm:p-8 text-left w-full h-full flex flex-col justify-between group/cert"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0064FF]/10 border border-[#0064FF]/20 flex items-center justify-center text-[#00d2ff] shadow-md shadow-[#0064FF]/5">
                        <Code2 size={18} />
                      </div>
                      <div>
                        <span className="text-[9px] text-[#00d2ff] font-sans tracking-wider uppercase font-semibold">
                          Meta Front-End Specialization
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-tight mt-0.5">
                          Introduction to Front-End Development
                        </h3>
                      </div>
                    </div>
                    <div className="text-white/30 group-hover/cert:text-white group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1">
                      <ExternalLink size={14} />
                    </div>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light font-sans tracking-wide mb-3">
                    Meta Career Certificates
                  </p>
                  
                  <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#0064FF]/10 border border-[#0064FF]/25 text-[#00d2ff] font-sans text-xs font-semibold tracking-wide mb-4">
                    Grade: 99% · Verified
                  </div>
                  
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                    Distinguish developer roles, write clean HTML5 structural elements, style layouts with CSS components, and utilize modern UI frameworks.
                  </p>
                </div>
              </a>
            </BorderGlow>
          </FadeIn>
        </div>

        {/* Certificate 2: Google UX Foundations */}
        <div className="md:col-span-3 h-full">
          <FadeIn delay={0.45} y={40} className="h-full">
            <BorderGlow
              edgeSensitivity={20}
              glowColor="270 70 50"
              backgroundColor="#141018"
              borderRadius={28}
              glowRadius={30}
              glowIntensity={1.0}
              fillOpacity={0.3}
              colors={['#c084fc', '#a855f7', '#7c3aed']}
              className="h-full"
            >
              <a
                href="https://coursera.org/share/d87530fcd9154e9cab343c2874d963c6"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 sm:p-8 text-left w-full h-full flex flex-col justify-between group/cert"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#c084fc]/10 border border-[#c084fc]/20 flex items-center justify-center text-[#c084fc] shadow-md shadow-[#c084fc]/5">
                        <Award size={18} />
                      </div>
                      <div>
                        <span className="text-[9px] text-[#c084fc] font-sans tracking-wider uppercase font-semibold">
                          Google UX Specialization
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-tight mt-0.5">
                          Foundations of User Experience Design
                        </h3>
                      </div>
                    </div>
                    <div className="text-white/30 group-hover/cert:text-white group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1">
                      <ExternalLink size={14} />
                    </div>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light font-sans tracking-wide mb-3">
                    Google Career Certificates
                  </p>
                  
                  <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#c084fc]/10 border border-[#c084fc]/25 text-[#c084fc] font-sans text-xs font-semibold tracking-wide mb-4">
                    Grade: 90.76% · Verified
                  </div>
                  
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                    Explore core UX designer responsibilities, foundational user-centered concepts, accessibility guidelines, and structural wireframing.
                  </p>
                </div>
              </a>
            </BorderGlow>
          </FadeIn>
        </div>

        {/* Certificate 3: Google Cybersecurity */}
        <div className="md:col-span-3 h-full">
          <FadeIn delay={0.5} y={40} className="h-full">
            <BorderGlow
              edgeSensitivity={20}
              glowColor="140 80 50"
              backgroundColor="#081410"
              borderRadius={28}
              glowRadius={30}
              glowIntensity={1.0}
              fillOpacity={0.3}
              colors={['#10b981', '#34d399', '#059669']}
              className="h-full"
            >
              <a
                href="https://coursera.org/share/03512055f777d011c40c895cde9dc765"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 sm:p-8 text-left w-full h-full flex flex-col justify-between group/cert"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#34d399] shadow-md shadow-[#10b981]/5">
                        <Shield size={18} />
                      </div>
                      <div>
                        <span className="text-[9px] text-[#34d399] font-sans tracking-wider uppercase font-semibold">
                          Google Cybersecurity Specialization
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-tight mt-0.5">
                          Foundations of Cybersecurity
                        </h3>
                      </div>
                    </div>
                    <div className="text-white/30 group-hover/cert:text-white group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1">
                      <ExternalLink size={14} />
                    </div>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light font-sans tracking-wide mb-3">
                    Google Career Certificates
                  </p>
                  
                  <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/25 text-[#34d399] font-sans text-xs font-semibold tracking-wide mb-4">
                    Grade: 99.34% · Verified
                  </div>
                  
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                    Recognize analytical skills needed for system security, identify cyber threats on businesses, and configure network security tools.
                  </p>
                </div>
              </a>
            </BorderGlow>
          </FadeIn>
        </div>

        {/* Certificate 4: Google UX Design Process */}
        <div className="md:col-span-3 h-full">
          <FadeIn delay={0.55} y={40} className="h-full">
            <BorderGlow
              edgeSensitivity={20}
              glowColor="40 80 50"
              backgroundColor="#16140e"
              borderRadius={28}
              glowRadius={30}
              glowIntensity={1.0}
              fillOpacity={0.3}
              colors={['#eab308', '#f59e0b', '#d97706']}
              className="h-full"
            >
              <a
                href="https://coursera.org/share/4d1717f08b590287d7ba6ed94a0a5b7a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 sm:p-8 text-left w-full h-full flex flex-col justify-between group/cert"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#eab308]/10 border border-[#eab308]/20 flex items-center justify-center text-[#f59e0b] shadow-md shadow-[#eab308]/5">
                        <PenTool size={18} />
                      </div>
                      <div>
                        <span className="text-[9px] text-[#f59e0b] font-sans tracking-wider uppercase font-semibold">
                          Google UX Specialization
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-tight mt-0.5">
                          Start the UX Design Process
                        </h3>
                      </div>
                    </div>
                    <div className="text-white/30 group-hover/cert:text-white group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1">
                      <ExternalLink size={14} />
                    </div>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light font-sans tracking-wide mb-3">
                    Google Career Certificates
                  </p>
                  
                  <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#eab308]/10 border border-[#eab308]/25 text-[#f59e0b] font-sans text-xs font-semibold tracking-wide mb-4">
                    Grade: 90% · Verified
                  </div>
                  
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                    Build empathy maps to outline user pain points, write comprehensive problem statements, and compile competitor UX comparisons.
                  </p>
                </div>
              </a>
            </BorderGlow>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
