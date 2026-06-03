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
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

          {/* Modal Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 bg-gradient-to-b from-[#111113] to-[#08080a] border border-white/10 rounded-[32px] max-w-5xl w-full max-h-[92vh] sm:max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(255,255,255,0.1) transparent",
            }}
          >
            {/* Close Circle Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-white/15 border border-white/10 text-white transition-all duration-200 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Banner Image Preview */}
            <div className="w-full h-56 sm:h-72 md:h-80 overflow-hidden relative shrink-0">
              <img
                src={project.images.right}
                alt={project.name}
                className="w-full h-full object-cover object-top"
              />
              {/* Fade mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-black/20 to-transparent" />
            </div>

            {/* Content Body Layout */}
            <div className="px-6 sm:px-10 pb-10 pt-6">
              {/* Header Title Area */}
              <div className="mb-8 border-b border-white/5 pb-6">
                <span className="text-[#7621B0] text-xs font-semibold uppercase tracking-widest font-mono">
                  Case Study // Project {project.num}
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
                  {project.name}
                </h3>
              </div>

              {/* Grid Columns: Split on desktop (2/3 narrative, 1/3 sidebar) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
                {/* Left Area: Detailed description and challenges */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                  {/* Project Summary */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D7E2EA]/50 mb-3 font-mono">
                      Project Overview
                    </h4>
                    <p className="text-sm sm:text-base text-[#D7E2EA]/85 leading-relaxed font-light font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Challenges Section */}
                  <div className="rounded-2xl border border-red-500/10 bg-[#1c1212]/20 p-6 flex gap-4">
                    <div className="shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                      <ShieldAlert size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-red-400 mb-2 font-mono">
                        Challenges Faced
                      </h4>
                      <p className="text-xs sm:text-sm text-[#D7E2EA]/75 leading-relaxed font-light">
                        {project.challenges}
                      </p>
                    </div>
                  </div>

                  {/* Future Improvements */}
                  <div className="rounded-2xl border border-cyan-500/10 bg-[#121c1c]/20 p-6 flex gap-4">
                    <div className="shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Rocket size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2 font-mono">
                        Future Roadmap
                      </h4>
                      <p className="text-xs sm:text-sm text-[#D7E2EA]/75 leading-relaxed font-light">
                        {project.improvements}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Area: Metadata and CTA Links Sidebar */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                  {/* Action Links Card */}
                  <div className="p-6 rounded-2xl border border-white/5 bg-white/3 flex flex-col gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: "linear-gradient(123deg, #7621B0 0%, #42fcff 100%)",
                        boxShadow: "0 4px 15px rgba(118, 33, 176, 0.2)"
                      }}
                    >
                      <ExternalLink size={14} />
                      Live Site Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/10 bg-white/5 text-[#D7E2EA] hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <FaGithub size={14} />
                      GitHub Repository
                    </a>
                  </div>

                  {/* Tech Stack Sidebar Card */}
                  <div className="p-6 rounded-2xl border border-white/5 bg-white/3">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D7E2EA]/50 mb-4 font-mono">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/5 text-[#D7E2EA]/85 hover:border-[#7621B0]/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Metadata Card */}
                  <div className="p-6 rounded-2xl border border-white/5 bg-white/3 flex flex-col gap-3.5 text-xs">
                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                      <span className="text-[#D7E2EA]/40 uppercase tracking-widest font-mono flex items-center gap-1.5">
                        <Bookmark size={12} />
                        Category
                      </span>
                      <span className="text-white font-medium font-mono">Development</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                      <span className="text-[#D7E2EA]/40 uppercase tracking-widest font-mono flex items-center gap-1.5">
                        <Calendar size={12} />
                        Year
                      </span>
                      <span className="text-white font-medium font-mono">2025 - 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#D7E2EA]/40 uppercase tracking-widest font-mono flex items-center gap-1.5">
                        <Info size={12} />
                        Status
                      </span>
                      <span className="text-emerald-400 font-bold uppercase font-mono tracking-wider animate-pulse">Production</span>
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
