import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StickyCard002 } from "./ui/skiper17";
import { LiveProjectButton } from "./LiveProjectButton";
import { FadeIn } from "./FadeIn";
import { openProjectDetailsModal } from "../lib/modalEvents";
import { projects } from "../data/projectsData";
import type { ProjectItem } from "../types/project";

interface SingleProjectCardProps {
  project: ProjectItem;
}

function SingleProjectCard({ project }: SingleProjectCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const totalGalleryImages = project.gallery.length;

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + totalGalleryImages) % totalGalleryImages);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % totalGalleryImages);
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -200) {
      handleNext();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 200) {
      handlePrev();
    }
  };

  const currentGalleryItem = project.gallery[activeImageIndex] || {
    title: project.name,
    src: project.images.right,
  };

  return (
    <div className="w-full h-full bg-[#111017] border border-white/15 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] rounded-3xl p-5 sm:p-7 md:p-9 flex flex-col justify-between overflow-hidden relative group">
      {/* Background Ambient Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#7621B0]/25 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#42fcff]/15 blur-[140px] rounded-full pointer-events-none" />

      {/* Card Header: Number, Name, CTA Buttons */}
      <div className="relative z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <span
            className="font-black leading-none bg-gradient-to-r from-[#42fcff] via-white to-[#7621B0] bg-clip-text text-transparent"
            style={{ fontSize: "clamp(2rem, 3.5vw, 48px)" }}
          >
            {project.num}
          </span>
          <div className="flex flex-col">
            <span className="text-[#42fcff] uppercase tracking-widest text-[10px] sm:text-xs font-mono font-semibold">
              PROJECT • {project.label}
            </span>
            <h3
              className="font-extrabold uppercase leading-tight text-white tracking-tight"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.75rem)" }}
            >
              {project.name}
            </h3>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 self-end sm:self-auto shrink-0 z-30">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              openProjectDetailsModal(project);
            }}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#7621B0] bg-[#7621B0]/40 text-white font-semibold uppercase tracking-wider px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm hover:bg-[#7621B0] transition-all duration-300 shadow-md shadow-[#7621B0]/30 cursor-pointer pointer-events-auto relative z-50 hover:scale-[1.02] active:scale-[0.98]"
          >
            View Details
          </button>
          <LiveProjectButton link={project.link} />
        </div>
      </div>

      {/* Main Content Grid: Left Narrative + Right Swipable Image Showcase */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 flex-1 min-h-0 my-4 items-stretch overflow-hidden">
        {/* Left Column: Description & Tags */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          <div>
            <p className="text-xs sm:text-sm md:text-base text-[#D7E2EA]/85 leading-relaxed font-light mb-4">
              {project.cardDescription}
            </p>
          </div>

          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#D7E2EA]/50 block mb-2">
              Technologies Used:
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] sm:text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-[#D7E2EA]/90 hover:border-[#42fcff]/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Clean Swipable Screenshot Frame */}
        <div className="lg:col-span-7 flex flex-col min-h-0 h-full rounded-2xl border border-white/12 bg-black/60 overflow-hidden shadow-inner relative group/frame">
          {/* Slide Dots Overlay */}
          {totalGalleryImages > 1 && (
            <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full pointer-events-none">
              {project.gallery.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeImageIndex
                      ? "bg-[#42fcff] w-3"
                      : "bg-white/30 w-1.5"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Mouse Drag / Touch Swipe Image Container */}
          <div className="relative flex-1 min-h-0 w-full overflow-hidden select-none touch-pan-y">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                className="w-full h-full cursor-grab active:cursor-grabbing relative"
              >
                <img
                  src={currentGalleryItem.src}
                  alt={project.name}
                  draggable={false}
                  className="w-full h-full object-cover object-top pointer-events-none"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Left / Right Swipe Arrow Controls */}
            {totalGalleryImages > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-[#7621B0] border border-white/20 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover/frame:opacity-100 transition-all duration-200 cursor-pointer shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-[#7621B0] border border-white/20 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover/frame:opacity-100 transition-all duration-200 cursor-pointer shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const cardsData = projects.map((proj) => ({
    id: proj.num,
    image: proj.images.right,
    project: proj,
  }));

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative px-3 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-28 pb-10"
    >
      <FadeIn delay={0} y={40}>
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="hero-heading font-black uppercase text-center mt-2 leading-none"
            style={{ fontSize: "clamp(2.8rem, 10vw, 140px)" }}
          >
            Projects
          </h2>
        </div>
      </FadeIn>

      {/* Skiper UI StickyCard002 Animated GSAP Stack */}
      <StickyCard002
        cards={cardsData}
        className="w-full"
        containerClassName="max-w-7xl h-full border-0 shadow-none bg-transparent"
        renderCard={(card) => (
          <SingleProjectCard project={card.project} />
        )}
      />
    </section>
  );
}
