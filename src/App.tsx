import ReactLenis from 'lenis/react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { MarqueeSection } from './components/MarqueeSection'
import { AboutSection } from './components/AboutSection'
import { ServicesSection } from './components/ServicesSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { projects } from './data/projectsData'
import { ProjectDetailModal } from './components/ProjectDetailModal'
import { ExperienceSection } from './components/ExperienceSection'
import { EducationSection } from './components/EducationSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <ReactLenis root>
      <main className="main-wrapper bg-[#0C0C0C] text-white min-h-screen font-sans overflow-x-clip" role="main" aria-label="Rizvi - Frontend Developer and UI/UX Designer Portfolio">
        <Navbar />
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <Footer />
      </main>

      {/* Fully self-contained modal that listens to global events without causing App re-renders */}
      <ProjectDetailModal allProjects={projects} />
    </ReactLenis>
  )
}

export default App
