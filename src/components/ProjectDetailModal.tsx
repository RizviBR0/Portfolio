import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldAlert, Rocket, Info, Calendar, Bookmark } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";

export interface ProjectDetail {
  num: string;
  name: string;
  link: string;
  githubLink: string;
  techStack: string[];
  description: string;
  challenges: string;
  improvements: string;
  images: {
    right: string;
  };
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  // Lock scroll & handle ESC key press
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKey);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
          onClick={onClose}
        >
          {/* Backdrop blur overlay */}
          <div className="absolute inset-0 bg-[#0C0C0C]/85 backdrop-blur-2xl" />

          {/* Modal Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 bg-gradient-to-b from-[#111113] to-[#08080a] border border-white/12 rounded-[32px] max-w-5xl w-full max-h-[90vh] md:max-h-[85vh] overflow-y-auto shadow-[0_30px_100px_-20px_rgba(118,33,176,0.25)] flex flex-col"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(255,255,255,0.1) transparent",
            }}
          >
            {/* Close Circle Button */}
            <button
              onClick={onClose}
              className="absolute top-7 right-7 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-white/15 border border-white/10 text-white backdrop-blur-md transition-all duration-200 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Banner Image Preview Container */}
            <div className="p-4 sm:p-6 pb-0 shrink-0">
              <div className="relative rounded-2xl sm:rounded-[24px] overflow-hidden border border-white/10 aspect-video max-h-[220px] sm:max-h-[320px] md:max-h-[380px] w-full">
                <img
                  src={project.images.right}
                  alt={project.name}
                  className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Content Body Layout */}
            <div className="px-5 sm:px-8 md:px-10 pb-8 sm:pb-10 pt-4 sm:pt-6">
              {/* Header Title Area */}
              <div className="mb-6 sm:mb-8 border-b border-white/5 pb-5 sm:pb-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="bg-gradient-to-r from-[#7621B0] to-[#42fcff] text-black text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full font-mono">
                    Project {project.num}
                  </span>
                  <span className="text-[#D7E2EA]/40 text-[10px] sm:text-xs tracking-widest uppercase font-mono">
                    // Case Study Analysis
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight tracking-tight">
                  {project.name}
                </h3>
              </div>

              {/* Grid Columns: Split on desktop (2/3 narrative, 1/3 sidebar) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
                
                {/* Left Area: Detailed description and challenges */}
                <div className="lg:col-span-2 flex flex-col gap-6 sm:gap-8">
                  {/* Project Summary */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7621B0]" />
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#D7E2EA]/40 font-mono">
                        Project Overview
                      </h4>
                    </div>
                    <p className="text-sm sm:text-base text-[#D7E2EA]/85 leading-relaxed font-light font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Challenges Section */}
                  <div className="rounded-2xl border border-red-500/10 bg-gradient-to-br from-[#1c1212]/30 to-[#120a0a]/30 p-5 sm:p-6 flex gap-4 hover:border-red-500/25 transition-all duration-300 shadow-md">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shadow-lg shadow-red-500/5">
                      <ShieldAlert size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2 font-mono">
                        Key Challenges
                      </h4>
                      <p className="text-xs sm:text-sm text-[#D7E2EA]/80 leading-relaxed font-light">
                        {project.challenges}
                      </p>
                    </div>
                  </div>

                  {/* Future Improvements */}
                  <div className="rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-[#121c1c]/30 to-[#0a1212]/30 p-5 sm:p-6 flex gap-4 hover:border-cyan-500/25 transition-all duration-300 shadow-md">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/5">
                      <Rocket size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 font-mono">
                        Roadmap & Improvements
                      </h4>
                      <p className="text-xs sm:text-sm text-[#D7E2EA]/80 leading-relaxed font-light">
                        {project.improvements}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Area: Metadata and CTA Links Sidebar */}
                <div className="lg:col-span-1 flex flex-col gap-5 sm:gap-6">
                  {/* Action Links Card */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-white/2 flex flex-col gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden group/btn shadow-[0_4px_20px_rgba(66,252,255,0.15)] cursor-pointer"
                      style={{
                        background: "linear-gradient(123deg, #7621B0 0%, #42fcff 100%)",
                      }}
                    >
                      <span className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      Live Site Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10 bg-white/5 text-[#D7E2EA] hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group/git cursor-pointer"
                    >
                      <FaGithub size={15} className="group-hover/git:rotate-12 transition-transform" />
                      GitHub Repository
                    </a>
                  </div>

                  {/* Tech Stack Sidebar Card */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-white/2">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#42fcff]" />
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#D7E2EA]/40 font-mono">
                        Technology Stack
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-[11px] font-mono rounded-lg bg-white/5 border border-white/5 text-[#D7E2EA]/85 hover:border-[#7621B0]/50 hover:bg-[#7621B0]/10 hover:text-white transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Metadata Card */}
                  <div className="p-5 sm:p-6 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-white/2 flex flex-col gap-3.5 text-xs">
                    <div className="flex justify-between items-center pb-2.5 border-b border-white/5">
                      <span className="text-[#D7E2EA]/40 uppercase tracking-widest font-mono flex items-center gap-2">
                        <Bookmark size={13} className="text-[#7621B0]" />
                        Category
                      </span>
                      <span className="text-white font-semibold font-mono text-right">Development</span>
                    </div>
                    <div className="flex justify-between items-center pb-2.5 border-b border-white/5">
                      <span className="text-[#D7E2EA]/40 uppercase tracking-widest font-mono flex items-center gap-2">
                        <Calendar size={13} className="text-[#42fcff]" />
                        Year
                      </span>
                      <span className="text-white font-semibold font-mono text-right">2025 - 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#D7E2EA]/40 uppercase tracking-widest font-mono flex items-center gap-2">
                        <Info size={13} className="text-emerald-400" />
                        Status
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400 font-bold uppercase font-mono tracking-widest">Production</span>
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
