import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import type { ProjectDetail } from "../types/project";

export type { ProjectDetail };

interface ProjectDetailModalProps {
  allProjects?: ProjectDetail[];
}

export function ProjectDetailModal({
  allProjects = [],
}: ProjectDetailModalProps) {
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent<ProjectDetail>;
      if (customEvent.detail) {
        setProject(customEvent.detail);
        setActiveGalleryIndex(0);
      }
    };
    window.addEventListener("open-project-details-modal", handleOpenModal);
    return () => {
      window.removeEventListener("open-project-details-modal", handleOpenModal);
    };
  }, []);

  const onClose = useCallback(() => setProject(null), []);

  const currentIndex = allProjects.findIndex((p) => p.num === project?.num);

  const handlePrevProject = useCallback(() => {
    if (allProjects.length === 0 || currentIndex === -1) return;
    const prevIdx =
      (currentIndex - 1 + allProjects.length) % allProjects.length;
    setProject(allProjects[prevIdx]);
    setActiveGalleryIndex(0);
  }, [allProjects, currentIndex]);

  const handleNextProject = useCallback(() => {
    if (allProjects.length === 0 || currentIndex === -1) return;
    const nextIdx = (currentIndex + 1) % allProjects.length;
    setProject(allProjects[nextIdx]);
    setActiveGalleryIndex(0);
  }, [allProjects, currentIndex]);

  useEffect(() => {
    if (!project) return;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && e.altKey) handlePrevProject();
      else if (e.key === "ArrowRight" && e.altKey) handleNextProject();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, handlePrevProject, handleNextProject]);

  const gallery = project?.gallery ?? [];
  const currentGalleryItem = gallery[activeGalleryIndex] ?? {
    title: project?.name ?? "",
    src: project?.images.right ?? "",
    caption: project?.tagline ?? "",
  };

  if (!project) return null;

  const prevGallery = () =>
    setActiveGalleryIndex(
      (i) => (i - 1 + gallery.length) % gallery.length
    );
  const nextGallery = () =>
    setActiveGalleryIndex((i) => (i + 1) % gallery.length);

  return createPortal(
    <AnimatePresence>
      <motion.div
        key={project.num}
        data-lenis-prevent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[999999]"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#080809]/97 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal shell */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Top bar — minimal, functional */}
          <header className="shrink-0 flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-[13px] font-semibold text-white truncate">
                {project.name}
              </span>
              <span className="hidden sm:inline text-[11px] text-white/30 font-mono">
                {project.tagline}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Project navigation */}
              {allProjects.length > 1 && (
                <div className="flex items-center gap-1 mr-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handlePrevProject}
                    className="h-7 w-7 rounded-full"
                    title="Previous project"
                  >
                    <ChevronLeft size={14} />
                  </Button>
                  <span className="text-[10px] font-mono text-white/30 tabular-nums min-w-[3ch] text-center">
                    {currentIndex + 1}/{allProjects.length}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleNextProject}
                    className="h-7 w-7 rounded-full"
                    title="Next project"
                  >
                    <ChevronRight size={14} />
                  </Button>
                </div>
              )}

              {/* Actions */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex"
              >
                <Button variant="default" size="sm" className="rounded-full gap-1.5 h-7 text-[11px] font-semibold">
                  Visit Site
                  <ArrowUpRight size={12} />
                </Button>
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex"
              >
                <Button variant="secondary" size="sm" className="rounded-full gap-1.5 h-7 text-[11px]">
                  <FaGithub size={12} />
                  Source
                </Button>
              </a>

              <Separator orientation="vertical" className="h-4 mx-1 hidden sm:block" />

              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-7 w-7 rounded-full hover:bg-white/10"
                aria-label="Close"
              >
                <X size={15} />
              </Button>
            </div>
          </header>

          {/* Scrollable content */}
          <ScrollArea className="flex-1">
            <main className="max-w-[920px] mx-auto px-5 sm:px-8 py-8 sm:py-12">
              {/* Hero screenshot in browser frame */}
              <div className="rounded-xl border border-white/[0.08] bg-[#111015] overflow-hidden mb-10">
                {/* Browser chrome */}
                <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/[0.06] bg-[#0c0c0f]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-[10px] h-[10px] rounded-full bg-white/[0.08]" />
                    <span className="w-[10px] h-[10px] rounded-full bg-white/[0.08]" />
                    <span className="w-[10px] h-[10px] rounded-full bg-white/[0.08]" />
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 text-[11px] font-mono text-white/30 hover:text-white/60 transition-colors truncate"
                  >
                    <Lock size={9} className="shrink-0 text-white/20" />
                    <span className="truncate">
                      {project.link.replace(/^https?:\/\//, "")}
                    </span>
                  </a>
                  <div className="w-[46px]" /> {/* Spacer to center URL */}
                </div>

                {/* Screenshot viewport */}
                <div className="relative aspect-[16/10] bg-[#09090b] group/viewport">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentGalleryItem.src}
                      src={currentGalleryItem.src}
                      alt={`${project.name} — ${currentGalleryItem.title}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="w-full h-full object-cover object-top"
                    />
                  </AnimatePresence>

                  {/* Gallery navigation */}
                  {gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prevGallery}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-white hover:bg-black/70 flex items-center justify-center opacity-0 group-hover/viewport:opacity-100 transition-all cursor-pointer"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={nextGallery}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-white hover:bg-black/70 flex items-center justify-center opacity-0 group-hover/viewport:opacity-100 transition-all cursor-pointer"
                      >
                        <ChevronRight size={16} />
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {gallery.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setActiveGalleryIndex(idx)}
                            className={`h-1.5 rounded-full transition-all cursor-pointer ${
                              idx === activeGalleryIndex
                                ? "bg-white w-4"
                                : "bg-white/30 w-1.5 hover:bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnail strip */}
                {gallery.length > 1 && (
                  <div className="flex gap-0 border-t border-white/[0.06]">
                    {gallery.map((item, idx) => (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setActiveGalleryIndex(idx)}
                        className={`flex-1 relative cursor-pointer transition-opacity ${
                          idx === activeGalleryIndex
                            ? "opacity-100"
                            : "opacity-40 hover:opacity-70"
                        }`}
                      >
                        <div className="aspect-[16/10] overflow-hidden">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        {idx === activeGalleryIndex && (
                          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
                        )}
                        {idx < gallery.length - 1 && (
                          <div className="absolute right-0 top-0 bottom-0 w-px bg-white/[0.06]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Title block */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3 text-[11px] text-white/35 font-mono">
                  <span>{project.specs.category}</span>
                  <span>·</span>
                  <span>{project.specs.year}</span>
                  <span>·</span>
                  <span>{project.specs.architecture}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black text-white leading-[1.1] tracking-tight mb-2">
                  {project.name}
                </h1>
                <p className="text-base sm:text-lg text-white/50 font-light max-w-2xl">
                  {project.tagline}
                </p>

                {/* Mobile CTAs */}
                <div className="flex sm:hidden items-center gap-3 mt-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full rounded-full gap-1.5" size="sm">
                      Visit Site <ArrowUpRight size={13} />
                    </Button>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="secondary"
                      className="w-full rounded-full gap-1.5"
                      size="sm"
                    >
                      <FaGithub size={13} />
                      GitHub
                    </Button>
                  </a>
                </div>
              </div>

              <Separator className="mb-8" />

              {/* Overview */}
              <section className="mb-10">
                <h2 className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/30 mb-4">
                  Overview
                </h2>
                <div className="space-y-4">
                  {project.overview.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[15px] leading-[1.75] text-white/65 font-light"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Key features */}
              <section className="mb-10">
                <h2 className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/30 mb-4">
                  What it does
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {project.keyFeatures.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-baseline gap-2.5 py-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/25 shrink-0 mt-[7px]" />
                      <span className="text-[13px] text-white/55 leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <Separator className="mb-10" />

              {/* Challenges */}
              <section className="mb-10">
                <h2 className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/30 mb-5">
                  Challenges faced
                </h2>
                <div className="space-y-5">
                  {project.challengesList.map((item) => (
                    <div key={item.title}>
                      <h3 className="text-[14px] font-semibold text-white/85 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-[13px] leading-[1.7] text-white/45 font-light">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Future improvements */}
              <section className="mb-10">
                <h2 className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/30 mb-5">
                  Planned improvements
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.futureImprovementsList.map((imp) => (
                    <Badge
                      key={imp}
                      variant="outline"
                      className="rounded-full px-3 py-1 text-[12px] font-normal"
                    >
                      {imp}
                    </Badge>
                  ))}
                </div>
              </section>

              <Separator className="mb-10" />

              {/* Tech stack */}
              <section className="mb-10">
                <h2 className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/30 mb-5">
                  Built with
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <span className="text-[11px] font-mono text-white/25 uppercase tracking-wider block mb-2.5">
                      Frontend
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStackDetailed.frontend.map((t) => (
                        <Badge key={t} className="rounded-full text-[12px] font-normal bg-white/[0.06] border-white/[0.08] text-white/60">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-white/25 uppercase tracking-wider block mb-2.5">
                      Backend
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStackDetailed.backend.map((t) => (
                        <Badge key={t} className="rounded-full text-[12px] font-normal bg-white/[0.06] border-white/[0.08] text-white/60">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="flex items-center justify-between pt-6 border-t border-white/[0.06]">
                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-white/35 hover:text-white/70 transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={11} />
                    Live site
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-white/35 hover:text-white/70 transition-colors flex items-center gap-1"
                  >
                    <FaGithub size={11} />
                    Repository
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handlePrevProject}
                    className="h-7 text-[11px] text-white/30 hover:text-white/70 rounded-full"
                  >
                    <ChevronLeft size={13} />
                    Prev
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleNextProject}
                    className="h-7 text-[11px] text-white/30 hover:text-white/70 rounded-full"
                  >
                    Next
                    <ChevronRight size={13} />
                  </Button>
                </div>
              </footer>
            </main>
          </ScrollArea>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
