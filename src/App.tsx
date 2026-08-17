import ReactLenis from "lenis/react";
import { lazy, Suspense, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MarqueeSection } from "./components/MarqueeSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { Footer } from "./components/Footer";
import { projects } from "./data/projectsData";

const ProjectCaseStudy = lazy(() =>
  import("./components/ProjectCaseStudy").then((module) => ({
    default: module.ProjectCaseStudy,
  })),
);

function ChatWidgetAccessibility() {
  useEffect(() => {
    const enhanceWidget = () => {
      const bubble = document.getElementById("linquo-chat-bubble");
      if (bubble && !bubble.dataset.accessibilityReady) {
        bubble.dataset.accessibilityReady = "true";
        bubble.setAttribute("role", "button");
        bubble.setAttribute("tabindex", "0");
        bubble.setAttribute("aria-label", "Open portfolio chat");
        bubble.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            bubble.click();
          }
        });
      }

      const frame = document.querySelector<HTMLIFrameElement>("#linquo-widget iframe");
      if (frame && !frame.title) frame.title = "Chat with Sabbir Rizvi";
    };

    enhanceWidget();
    const observer = new MutationObserver(enhanceWidget);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}

function PortfolioHome() {
  return (
    <div className="page-shell" id="top">
      <Navbar />
      <main id="main-content" tabIndex={-1} aria-label="Sabbir Rizvi product engineering portfolio">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ExperienceSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="page-shell" id="top">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="not-found">
        <p className="eyebrow">404 / Route not found</p>
        <h1>This page drifted out of orbit.</h1>
        <p>The portfolio is still here. Return home or explore the selected product case studies.</p>
        <a href="/" className="button button--primary">Return home</a>
      </main>
      <Footer />
    </div>
  );
}

function RoutedContent() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return <PortfolioHome />;

  const match = path.match(/^\/projects\/([^/]+)$/);
  if (match) {
    const project = projects.find((item) => item.slug === match[1]);
    if (project) {
      return (
        <Suspense fallback={<div className="route-loader" role="status">Loading case study…</div>}>
          <ProjectCaseStudy project={project} />
        </Suspense>
      );
    }
  }

  return <NotFound />;
}

function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        lerp: shouldReduceMotion ? 1 : 0.09,
        duration: shouldReduceMotion ? 0 : 0.9,
        smoothWheel: !shouldReduceMotion,
        anchors: true,
      }}
    >
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <ChatWidgetAccessibility />
      <RoutedContent />
    </ReactLenis>
  );
}

export default App;
