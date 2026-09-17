import { useEffect } from 'react';
import { X, Printer, Download, Copy, Check, Mail, ExternalLink, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCE_LIST, SKILL_CATEGORIES } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
SUSHANT KULKARNI
Senior Frontend Developer
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
Experience: ${PERSONAL_INFO.experienceYears}

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.about}

VERIFIED ENGINEERING ACHIEVEMENTS:
• Production bundle optimization via systematic route-based code splitting and dynamic imports
• Modular component architecture reducing redundancy across shared frontend systems

WORK EXPERIENCE:
Senior Frontend Developer — Noesis Knowledge Solutions Pvt. Ltd. (2021 – 2026)
${EXPERIENCE_LIST[0].bullets.map((b) => `• ${b}`).join('\n')}

FEATURED PRODUCTION PROJECTS:
${PROJECTS.map((p) => `• ${p.name} (${p.category}): ${p.tagline}\n  Tech: ${p.technologies.join(', ')}`).join('\n')}

TECHNICAL SKILLS:
${SKILL_CATEGORIES.map((cat) => `${cat.title}: ${cat.skills.join(', ')}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume of Sushant Kulkarni"
    >
      <div
        id="resume-modal-content"
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#0d0f18] border border-white/15 rounded-2xl shadow-2xl text-slate-100 my-auto focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 bg-[#090b11]/98 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-xs bg-cyan-950 text-cyan-300 border border-cyan-800/50 px-2 py-0.5 rounded">
              RESUME // PDF READY
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline font-mono">
              Sushant Kulkarni
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-950 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-slate-900" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-10 space-y-8 bg-[#0b0d14] text-slate-200 font-sans text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <h2 className="text-base text-cyan-400 font-medium">
                  {PERSONAL_INFO.role} · 4+ Years Experience
                </h2>
              </div>

              <div className="text-xs font-mono text-slate-400 sm:text-right space-y-0.5">
                <div>{PERSONAL_INFO.email}</div>
                <div>India · Open to Relocation / Remote</div>
              </div>
            </div>

            <p className="text-xs text-slate-300 pt-2 leading-relaxed font-normal">
              {PERSONAL_INFO.about}
            </p>
          </div>

          {/* Verified Technical Achievements */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/30 space-y-1.5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
              Verified Technical Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Production bundle optimization</strong> via code splitting</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Modular design system</strong> minimizing code duplication</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-1 font-mono">
              Professional Experience
            </h3>

            {EXPERIENCE_LIST.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="font-semibold text-white text-sm sm:text-base">
                    {exp.role} — <span className="text-cyan-300">{exp.company}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400">{exp.period}</div>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-300 list-disc pl-5">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Selected Work Summary */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-1 font-mono">
              Selected Production Projects
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROJECTS.map((project) => (
                <div key={project.id} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white text-xs">{project.name}</span>
                    <span className="text-[10px] font-mono text-cyan-400">{project.category}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="text-[10px] font-mono text-slate-400 pt-1">
                    {project.technologies.slice(0, 4).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-1 font-mono">
              Technical Skill Matrix
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="text-[11px]">
                  <span className="font-semibold text-slate-300 font-mono">{cat.title}: </span>
                  <span className="text-slate-400">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom footer */}
        <div className="px-6 py-4 bg-[#090b11] border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Targeting Senior Frontend Engineer roles</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
