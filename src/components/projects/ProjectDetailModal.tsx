import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Layers, Cpu, ShieldAlert, Zap } from 'lucide-react';
import { Project } from '../../types';
import { ProjectVisual } from './ProjectVisuals';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0f18] border border-white/10 rounded-2xl shadow-2xl shadow-cyan-950/40 text-slate-100 my-auto focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#090b11]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
              {project.category}
            </span>
            <span className="text-slate-600">|</span>
            <h2 id="modal-project-title" className="text-lg font-bold text-white tracking-tight">
              {project.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Tagline & Quick Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div>
              <p className="text-base sm:text-lg text-slate-300 font-medium leading-snug">
                {project.tagline}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Role: <span className="text-slate-200">{project.role}</span>
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-white text-slate-950 hover:bg-slate-200 transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Interactive UI Mockup / Visualizer */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              UI / Architecture View
            </span>
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={`${project.name} screenshot`}
                  className="w-full object-cover object-top"
                  loading="lazy"
                />
              ) : (
                <ProjectVisual type={project.mockupType} />
              )}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/[0.04] text-slate-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Overview</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">{project.overview}</p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Problem Statement</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
            </div>
          </div>

          {/* Technical Architecture */}
          <div className="p-5 rounded-xl bg-[#090b10] border border-white/[0.08] space-y-3">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Technical Architecture</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {project.technicalArchitecture.map((arch, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                  <span className="leading-relaxed">{arch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features & Engineering Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Key Features</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.keyFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 shrink-0">✓</span>
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>Engineering Challenges</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.engineeringChallenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-400 shrink-0">•</span>
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Performance Considerations */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Performance Considerations</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.performanceConsiderations.map((perf, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-black/40 border border-white/[0.04] text-xs text-slate-300 leading-relaxed font-mono text-[11px]"
                >
                  {perf}
                </div>
              ))}
            </div>
          </div>

          {/* Results (Only display when provided, never fake metrics) */}
          {project.results && project.results.length > 0 && (
            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-800/30 space-y-2">
              <h3 className="text-sm font-semibold text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Outcomes</span>
              </h3>
              <ul className="space-y-1 text-xs text-emerald-200/90 font-mono">
                {project.results.map((res, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span>→</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 px-6 py-4 bg-[#090b11] border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            Sushant Kulkarni · Portfolio Case Study
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
