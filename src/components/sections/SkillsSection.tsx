import { Monitor, Database, Palette, Cloud, Settings, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  const getCategoryMeta = (title: string, index: number) => {
    const num = `0${index + 1}`;
    switch (title) {
      case 'Frontend':
        return {
          num,
          label: 'FRONTEND',
          icon: <Monitor className="w-5 h-5 text-cyan-400" />,
        };
      case 'State & Data':
        return {
          num,
          label: 'STATE & DATA',
          icon: <Database className="w-5 h-5 text-cyan-400" />,
        };
      case 'UI & Styling':
        return {
          num,
          label: 'UI & STYLING',
          icon: <Palette className="w-5 h-5 text-cyan-400" />,
        };
      case 'API & Integration':
        return {
          num,
          label: 'API & INTEGRATION',
          icon: <Cloud className="w-5 h-5 text-cyan-400" />,
        };
      case 'Build & Testing':
        return {
          num,
          label: 'BUILD & TESTING',
          icon: <Settings className="w-5 h-5 text-cyan-400" />,
        };
      case 'AI-Assisted Development':
      default:
        return {
          num,
          label: 'AI-ASSISTED DEVELOPMENT',
          icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
        };
    }
  };

  return (
    <section
      id="skills"
      aria-label="Technical Skills Matrix"
      className="py-20 md:py-28 relative border-b border-white/[0.06] bg-[#07090e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-3 mb-12 max-w-4xl"
        >
          {/* Eyebrow */}
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
              — TECHNICAL SKILLS —
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Tools and technologies I use to build{' '}
            <span className="text-cyan-400">
              modern web applications.
            </span>
          </h2>
        </motion.div>

        {/* 6 Category Matrix Grid matching screenshot (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const meta = getCategoryMeta(cat.title, idx);

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : idx * 0.05,
                  ease: 'easeOut',
                }}
                className="rounded-2xl border border-slate-800/80 bg-[#090d18]/90 p-6 space-y-5 shadow-xl transition-all duration-200 hover:border-slate-700/80 group hover:bg-[#0c1220]"
              >
                {/* Header: Icon + Number & Title */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {meta.icon}
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-mono text-cyan-400 font-semibold tracking-wider">
                      {meta.num}
                    </div>
                    <h3 className="text-xs font-bold text-white tracking-wider uppercase">
                      {meta.label}
                    </h3>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-normal text-slate-300 bg-[#121929] border border-slate-700/60 hover:border-slate-500 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
