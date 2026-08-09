import { useRef, useState, type CSSProperties } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { projects } from "../data/projectsData";
import type { ProjectItem } from "../types/project";
import { motionEase } from "../lib/motion";

function ProjectCard({
  project,
  index,
  total,
}: {
  project: ProjectItem;
  index: number;
  total: number;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start 92%", "end 8%"],
  });
  const cardScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.82, 1],
    [0.965, 1, 1, index === total - 1 ? 1 : 0.94],
  );
  const cardRotate = useTransform(
    scrollYProgress,
    [0, 0.2, 0.82, 1],
    [index % 2 ? 0.65 : -0.65, 0, 0, index % 2 ? -0.45 : 0.45],
  );
  const cardOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.88, 1],
    [0.05, 1, 1, index === total - 1 ? 1 : 0.72],
  );
  const galleryItem = project.gallery[activeImage];

  const moveGallery = (direction: number) => {
    setActiveImage((current) =>
      (current + direction + project.gallery.length) % project.gallery.length,
    );
  };

  return (
    <div
      ref={stackRef}
      className="project-stack-item"
      style={{
        "--stack-index": index,
        "--stack-count": total,
      } as CSSProperties}
    >
      <motion.article
        className={`project-card ${index % 2 ? "project-card--reverse" : ""}`}
        initial={{ y: shouldReduceMotion ? 0 : 56 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.82, ease: motionEase }}
        style={shouldReduceMotion ? undefined : {
          scale: cardScale,
          rotate: cardRotate,
          opacity: cardOpacity,
        }}
      >
        <div className="project-card__glow" aria-hidden="true" />

        <div className="project-card__content">
          <header>
            <div className="project-card__meta">
              <span className="project-card__number" aria-hidden="true">{project.num}</span>
              <span className="project-card__label">{project.label}</span>
            </div>
            <h3>{project.name}</h3>
          </header>

          <p className="project-card__description">{project.cardDescription}</p>

          <div>
            <p className="project-card__tech-label">Main technologies</p>
            <ul className="project-card__tags" aria-label={`${project.name} technologies`}>
              {project.tags.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>

          <div className="project-card__actions">
            <a href={`/projects/${project.slug}`} className="button button--primary button--small">
              View case study
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--secondary button--small"
              aria-label={`Open live ${project.name} project in a new tab`}
            >
              Live project
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
        </div>

        <div className="project-card__media">
          <div className="browser-frame" aria-live="polite">
            <div className="browser-frame__bar" aria-hidden="true">
              <span /><span /><span />
              <div>{project.name.toLowerCase().replace(" ", "-")}.product</div>
            </div>
            <div className="browser-frame__image">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={galleryItem.src}
                  src={galleryItem.src}
                  alt={galleryItem.alt}
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -14 }}
                  transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: motionEase }}
                />
              </AnimatePresence>
            </div>
          </div>

          <div className="project-gallery-controls">
            <p>
              <span>{String(activeImage + 1).padStart(2, "0")}</span>
              <span aria-hidden="true"> / </span>
              <span>{String(project.gallery.length).padStart(2, "0")}</span>
              <span className="sr-only"> — {galleryItem.title}</span>
            </p>
            <div>
              <button type="button" onClick={() => moveGallery(-1)} aria-label={`Show previous ${project.name} screenshot`}>
                <ChevronLeft aria-hidden="true" size={19} />
              </button>
              <button type="button" onClick={() => moveGallery(1)} aria-label={`Show next ${project.name} screenshot`}>
                <ChevronRight aria-hidden="true" size={19} />
              </button>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="site-container">
        <FadeIn>
          <p className="eyebrow justify-center">Selected full-stack products</p>
          <h2 id="projects-title" className="section-title section-title--gradient text-center">
            Projects
          </h2>
          <p className="section-intro">
            Product design and engineering case studies spanning startup discovery,
            private sharing, and creative-community platforms.
          </p>
        </FadeIn>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
