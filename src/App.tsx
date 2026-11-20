import { LazyMotion, domAnimation } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { TechStrip } from './components/sections/TechStrip';
import { SelectedWork } from './components/sections/SelectedWork';
import { EngineeringHighlights } from './components/sections/EngineeringHighlights';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-200">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main tabIndex={-1} id="main-content" className="flex-1">
        <LazyMotion features={domAnimation} strict>
          <HeroSection />
          <TechStrip />
          <SelectedWork />
          <EngineeringHighlights />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </LazyMotion>
      </main>
      <Footer />
    </div>
  );
}
