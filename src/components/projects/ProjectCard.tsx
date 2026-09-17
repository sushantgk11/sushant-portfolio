import { ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { ProjectVisual } from './ProjectVisuals';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      id={`project-card-${project.id}`}
      href={project.liveDemoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl border border-slate-800/80 hover:border-slate-700 bg-[#0c101a] hover:bg-[#0e1320] transition-all duration-300 p-3 flex flex-col justify-between shadow-xl shadow-black/40 relative overflow-hidden cursor-pointer active:scale-[0.99]"
    >
      {/* Visual / Screenshot Area matching the reference mockup */}
      <div className="rounded-xl overflow-hidden border border-white/[0.06] shadow-inner mb-4 bg-black/40 relative">
        <div className="transition-transform duration-300 ease-out group-hover:scale-[1.02]">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={`${project.name} screenshot`}
              className="w-full h-44 sm:h-48 object-fill object-top"
              loading="lazy"
            />
          ) : (
            <ProjectVisual type={project.mockupType} />
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Project Name & Category Pill */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              {project.name}
            </h3>
            <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-[#131b2e] text-blue-300 border border-blue-900/40 shrink-0">
              {project.category}
            </span>
          </div>

          {/* Short One-Line Description */}
          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* Bottom Section: Technology Tags & View Project CTA */}
        <div className="space-y-3 pt-1">
          {/* 3-4 Technology tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-white/[0.03] border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Project Link with Arrow */}
          <div className="pt-2 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
              <span>View Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
