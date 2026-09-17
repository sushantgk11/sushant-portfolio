import { Gauge, Layers, Box, Accessibility, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { HeroVisual } from './HeroVisual';

export function EngineeringHighlights() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="engineering"
      aria-label="Engineering Highlights"
      className="py-20 md:py-28 relative border-b border-white/[0.06] bg-[#07090e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Desktop Grid matching the screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Heading + Card 01 + Card 03 */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header Block */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-3 pb-2"
            >
              <div>
                <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
                  — ENGINEERING HIGHLIGHTS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Engineering decisions that make products{' '}
                <span className="text-cyan-400">faster, scalable</span> and{' '}
                <span className="text-cyan-400">easier to maintain.</span>
              </h2>
            </motion.div>

            {/* Card 01: PERFORMANCE */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.1, ease: 'easeOut' }}
              className="rounded-2xl border border-slate-800/80 hover:border-slate-700 bg-[#090d18]/90 p-6 space-y-4 shadow-xl group hover:bg-[#0c1220] transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 font-bold block leading-none">
                      01
                    </span>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mt-0.5">
                      PERFORMANCE
                    </span>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-white tracking-tight">
                  Performance-first frontend development
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Code splitting, dynamic imports, lazy loading, image optimization and Core Web Vitals.
                </p>
              </div>

              <div className="pt-1">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30">
                  Production Bundle Optimization
                </span>
              </div>
            </motion.div>

            {/* Card 03: REUSABILITY */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.2, ease: 'easeOut' }}
              className="rounded-2xl border border-slate-800/80 hover:border-slate-700 bg-[#090d18]/90 p-6 space-y-4 shadow-xl group hover:bg-[#0c1220] transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Box className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 font-bold block leading-none">
                      03
                    </span>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mt-0.5">
                      REUSABILITY
                    </span>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-white tracking-tight">
                  Reusable component systems
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Shared UI patterns, design tokens, and modular components that prevent code duplication.
                </p>
              </div>

              <div className="pt-1">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30">
                  Modular Component Architecture
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Orbital Visual (2x2 tech + 4 vertical pills) + Card 02 + Card 04 */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Right: The Glowing Orbital Visual */}
            <div className="flex justify-center lg:justify-end pb-2">
              <HeroVisual />
            </div>

            {/* Card 02: ARCHITECTURE */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.15, ease: 'easeOut' }}
              className="rounded-2xl border border-slate-800/80 hover:border-slate-700 bg-[#090d18]/90 p-6 space-y-3 shadow-xl group hover:bg-[#0c1220] transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 font-bold block leading-none">
                      02
                    </span>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mt-0.5">
                      ARCHITECTURE
                    </span>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-white tracking-tight">
                  Scalable frontend architecture
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Reusable components, clear data flow, state management and maintainable application structure.
                </p>
              </div>
            </motion.div>

            {/* Card 04: ACCESSIBILITY */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
              className="rounded-2xl border border-slate-800/80 hover:border-slate-700 bg-[#090d18]/90 p-6 space-y-3 shadow-xl group hover:bg-[#0c1220] transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Accessibility className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 font-bold block leading-none">
                      04
                    </span>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mt-0.5">
                      ACCESSIBILITY
                    </span>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-white tracking-tight">
                  Accessible by default
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Semantic HTML, keyboard navigation, accessible forms and inclusive UI patterns.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
