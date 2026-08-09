import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Code2 } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FadeIn } from "./FadeIn";
import { projects } from "../data/projectsData";
import { siteUrl } from "../data/siteData";
import type { ProjectItem } from "../types/project";

const seoTitles: Record<string, string> = {
  ideavault: "IdeaVault | Full-Stack Startup Collaboration Platform | Sabbir Rizvi",
  "woff-space": "Woff Space | Instant File & Note Sharing App | Sabbir Rizvi",
  loome: "Loome | Full-Stack Design Sharing Platform | Sabbir Rizvi",
};

function syncMetadata(project: ProjectItem) {
  document.title = seoTitles[project.slug];

  const setMeta = (selector: string, attribute: "content" | "href", value: string) => {
    const element = document.querySelector(selector);
    element?.setAttribute(attribute, value);
  };

  const canonical = `${siteUrl}/projects/${project.slug}`;
  setMeta('meta[name="description"]', "content", project.seoDescription);
  setMeta('meta[property="og:title"]', "content", seoTitles[project.slug]);
  setMeta('meta[property="og:description"]', "content", project.seoDescription);
  setMeta('meta[property="og:url"]', "content", canonical);
  setMeta('meta[name="twitter:title"]', "content", seoTitles[project.slug]);
  setMeta('meta[name="twitter:description"]', "content", project.seoDescription);
  setMeta('link[rel="canonical"]', "href", canonical);
}

function CaseStudySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="case-study-section">
      <FadeIn y={22}>
        <p className="case-study-section__index" aria-hidden="true">//</p>
        <h2>{title}</h2>
        <div className="case-study-section__content">{children}</div>
      </FadeIn>
    </section>
  );
}

export function ProjectCaseStudy({ project }: { project: ProjectItem }) {
  useEffect(() => {
    syncMetadata(project);
    window.scrollTo(0, 0);
  }, [project]);

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="page-shell" id="top">
      <Navbar />
      <main id="main-content" className="case-study" tabIndex={-1}>
        <header className="case-study-hero">
          <div className="case-study-hero__orb" aria-hidden="true" />
          <div className="site-container relative z-10">
            <FadeIn y={18}>
              <a href="/#projects" className="back-link">
                <ArrowLeft aria-hidden="true" size={17} />
                All projects
              </a>
              <div className="case-study-hero__meta">
                <span>{project.num} / 03</span>
                <span>{project.label}</span>
              </div>
              <h1>{project.name}</h1>
              <p>{project.cardDescription}</p>
              <div className="case-study-hero__actions">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary"
                  aria-label={`Open live ${project.name} project in a new tab`}
                >
                  Live project <ArrowUpRight aria-hidden="true" size={18} />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary"
                  aria-label={`Open ${project.name} client GitHub repository in a new tab`}
                >
                  <Code2 aria-hidden="true" size={18} /> Client repository
                </a>
              </div>
            </FadeIn>
          </div>
        </header>

        <div className="site-container case-study-body">
          <FadeIn y={26}>
            <figure className="case-study-cover">
              <div className="browser-frame">
                <div className="browser-frame__bar" aria-hidden="true"><span /><span /><span /><div>{project.slug}.product</div></div>
                <img src={project.gallery[0].src} alt={project.gallery[0].alt} fetchPriority="high" decoding="async" />
              </div>
              <figcaption>{project.gallery[0].caption}</figcaption>
            </figure>
          </FadeIn>

          <dl className="project-specs">
            {Object.entries(project.specs).map(([key, value]) => (
              <div key={key}><dt>{key}</dt><dd>{value}</dd></div>
            ))}
          </dl>

          <CaseStudySection title="Project overview">
            <div className="case-study-prose">
              {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </CaseStudySection>

          <section className="problem-solution-grid" aria-label="Problem and solution">
            <FadeIn y={22} className="h-full"><article><p className="eyebrow">The problem</p><h2>What needed to be simpler</h2><p>{project.problem}</p></article></FadeIn>
            <FadeIn delay={0.08} y={22} className="h-full"><article><p className="eyebrow">The solution</p><h2>How the product responds</h2><p>{project.solution}</p></article></FadeIn>
          </section>

          <CaseStudySection title="Main technologies">
            <div className="technology-columns">
              <div><h3>Frontend</h3><ul>{project.techStackDetailed.frontend.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
              <div><h3>Backend & data</h3><ul>{project.techStackDetailed.backend.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Product features">
            <ul className="feature-grid">
              {project.keyFeatures.map((feature) => <li key={feature}><Check aria-hidden="true" size={16} />{feature}</li>)}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Technical architecture">
            <ol className="architecture-list">
              {project.architectureNotes.map((note, index) => <li key={note}><span>0{index + 1}</span><p>{note}</p></li>)}
            </ol>
          </CaseStudySection>

          <CaseStudySection title="Development challenges">
            <div className="challenge-grid">
              {project.challengesList.map((challenge) => <article key={challenge.title}><h3>{challenge.title}</h3><p>{challenge.description}</p></article>)}
            </div>
          </CaseStudySection>

          <CaseStudySection title="UX & product decisions">
            <ul className="decision-list">
              {project.uxDecisions.map((decision) => <li key={decision}>{decision}</li>)}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Interface gallery">
            <div className="case-study-gallery">
              {project.gallery.map((item, index) => (
                <figure key={item.title}>
                  <div className="case-study-gallery__image"><img src={item.src} alt={item.alt} loading={index === 0 ? "eager" : "lazy"} decoding="async" /></div>
                  <figcaption><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{item.title}</strong><p>{item.caption}</p></div></figcaption>
                </figure>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Future improvements">
            <ul className="future-list">
              {project.futureImprovementsList.map((improvement) => <li key={improvement}>{improvement}</li>)}
            </ul>
          </CaseStudySection>

          <nav className="project-pagination" aria-label="Case study navigation">
            <a href={`/projects/${previous.slug}`}><ArrowLeft aria-hidden="true" size={18} /><span><small>Previous case study</small>{previous.name}</span></a>
            <a href={`/projects/${next.slug}`}><span><small>Next case study</small>{next.name}</span><ArrowRight aria-hidden="true" size={18} /></a>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
}
