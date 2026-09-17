import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { TechStrip } from './components/sections/TechStrip';
import { SelectedWork } from './components/sections/SelectedWork';
import { EngineeringHighlights } from './components/sections/EngineeringHighlights';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectDetailModal } from './components/projects/ProjectDetailModal';
import { ResumeModal } from './components/modals/ResumeModal';
import { ContactModal } from './components/modals/ContactModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Semantic Page Content */}
      <main id="main-content" className="flex-1">
        {/* 1. Who I am: Hero Section with clean floating tech visual */}
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. What I build: Tech Strip */}
        <TechStrip />

        {/* 3. Selected work: 6 Simplified Cards in 3-col responsive grid */}
        <SelectedWork onOpenCaseStudy={(project) => setSelectedProject(project)} />

        {/* 4. Engineering Highlights (Performance, Architecture, Reusable Components, Accessibility) */}
        <EngineeringHighlights />

        {/* 5. Experience Timeline */}
        <ExperienceSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 6. Skills Matrix */}
        <SkillsSection />
      </main>

      {/* Minimal Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Viewer & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Quick Contact Form Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
