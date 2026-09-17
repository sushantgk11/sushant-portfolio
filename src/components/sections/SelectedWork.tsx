import { motion, useReducedMotion } from 'motion/react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { ProjectCard } from '../projects/ProjectCard';

interface SelectedWorkProps {
  onOpenCaseStudy: (project: Project) => void;
}

export function SelectedWork({ onOpenCaseStudy }: SelectedWorkProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      aria-label="Selected Production Projects"
      className="py-20 md:py-28 relative border-b border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching the reference mockup */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-2 mb-10 max-w-4xl"
        >
          {/* Eyebrow */}
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
              SELECTED WORK
            </span>
          </div>

          {/* Title Row with right-aligned project count */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Selected Work
            </h2>
            <span className="text-xs font-mono text-slate-400">
              — {PROJECTS.length} Projects
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1">
            Selected applications and platforms I&apos;ve worked on across e-commerce, SaaS, fintech, AI and business applications.
          </p>
        </motion.div>

        {/* 3-Column Responsive Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.4,
                delay: shouldReduceMotion ? 0 : idx * 0.06,
                ease: 'easeOut',
              }}
              className="flex"
            >
              <ProjectCard
                project={project}
                onOpenCaseStudy={onOpenCaseStudy}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
