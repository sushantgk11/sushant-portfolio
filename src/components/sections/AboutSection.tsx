import { User } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-label="About Sushant Kulkarni"
      className="py-24 md:py-32 relative border-b border-white/[0.08] bg-[#090a0f]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-4xl mx-auto rounded-2xl border border-white/[0.08] bg-[#0c0e16] p-8 sm:p-12 space-y-8 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-xs font-mono text-cyan-400">
            <User className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              About Sushant
            </h2>

            {/* Core concise direction matching prompt */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              {PERSONAL_INFO.about}
            </p>
          </div>

          {/* Key Product Verticals Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/[0.06]">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-500 block">Vertical</span>
              <span className="text-xs font-semibold text-white block">E-commerce & Payments</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-500 block">Vertical</span>
              <span className="text-xs font-semibold text-white block">SaaS & Real-time</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-500 block">Vertical</span>
              <span className="text-xs font-semibold text-white block">AI & Audio Worklets</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-500 block">Vertical</span>
              <span className="text-xs font-semibold text-white block">3D Configurator UI</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-cyan-200 font-mono">
            <span>Primary Focus: Scalable, Type-Safe React & Next.js Architecture</span>
            <span className="text-cyan-400">4+ Years Experience</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
