import { motion, useReducedMotion } from 'motion/react';
import { CAPABILITY_TAGS } from '../../data/portfolioData';

interface ExperienceSectionProps {
  onOpenResume?: () => void;
}

export function ExperienceSection({ onOpenResume }: ExperienceSectionProps = {}) {
  const shouldReduceMotion = useReducedMotion();

  const coreBullets = [
    'Architected and developed production web applications using React, Next.js, and TypeScript.',
    'Developed modular, reusable frontend component systems and responsive interfaces across devices.',
    'Designed scalable state-management architectures using Redux Toolkit, React Context API, and TanStack React Query for efficient data synchronization.',
    'Integrated REST APIs and third-party services with structured data handling and reliable frontend integration.',
    'Implemented authentication flows using NextAuth.js, Firebase Authentication, JWT, OAuth, OTP, and role-based access control (RBAC).',
    'Integrated production payment gateways including Razorpay and Dibsy for secure payment processing.',
    'Optimized frontend performance through SSR, ISR, route-based code splitting, lazy loading, dynamic imports, image optimization, caching, and API debouncing to improve Core Web Vitals.',
    'Built AI-powered experiences including AI agents, RAG workflows, streaming interfaces, real-time chat widgets, and interactive application features.',
  ];

  return (
    <section
      id="experience"
      aria-label="Professional Experience Timeline"
      className="py-20 md:py-28 relative border-b border-white/[0.06] bg-[#07090e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-3 mb-12 max-w-5xl"
        >
          {/* Eyebrow */}
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
              — PROFESSIONAL EXPERIENCE
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl font-extrabold tracking-tight text-white leading-tight">
            <span className="sm:block">
              Building production-ready{' '}
              <span className="text-cyan-400">web experiences</span>
            </span>{' '}
            <span className="sm:block text-cyan-400">
              across multiple product domains.
            </span>
          </h2>
        </motion.div>

        {/* Experience Timeline Grid with vertical line on left */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Timeline Node & Label Column */}
          <div className="lg:col-span-2 hidden sm:flex flex-col items-start pt-1">
            <div className="flex items-center gap-3">
              {/* Glowing circular node */}
              <div className="relative flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                <div className="absolute w-6 h-6 rounded-full bg-cyan-400/20 animate-ping opacity-40" />
              </div>

              {/* Date & Duration */}
              <div className="space-y-0.5">
                <div className="text-xs font-medium text-slate-300">
                  Nov 2021 — Aug 2026
                </div>
                <div className="text-xs font-mono font-bold text-cyan-400">
                  4+ Years
                </div>
              </div>
            </div>

            {/* Vertical timeline line extending downwards */}
            <div className="w-0.5 h-96 bg-gradient-to-b from-cyan-400/60 via-blue-500/20 to-transparent ml-[6px] mt-4" />
          </div>

          {/* Main Experience Card without detail link */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-10 rounded-2xl border border-slate-800/90 bg-[#090d18]/95 p-6 sm:p-8 space-y-6 shadow-2xl relative group hover:border-slate-700/80 transition-all duration-300"
          >
            {/* Header: Company Icon, Role, Organization, Duration */}
            <div className="flex items-center gap-4">
              {/* Noesis "N" icon box */}
              <div className="w-12 h-12 rounded-xl bg-[#0e1424] border border-white/10 flex items-center justify-center font-bold text-xl text-white shadow-inner shrink-0">
                N
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Senior Frontend Developer
                </h3>
                <p className="text-sm font-medium text-slate-400">
                  Noesis Knowledge Solutions Pvt. Ltd.
                </p>
                <p className="text-xs font-mono text-slate-400">
                  Nov 2021 — Aug 2026 <span className="text-slate-600">•</span>{' '}
                  <span className="text-slate-300 font-medium">4+ Years</span>
                </p>
              </div>
            </div>

            {/* FEATURE / CAPABILITY PILLS */}
            <div className="pt-1">
              <div className="flex flex-wrap gap-2">
                {CAPABILITY_TAGS.map((capability) => (
                  <span
                    key={capability}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#111728] text-slate-300 border border-slate-700/70 hover:border-cyan-500/50 hover:text-white transition-all shadow-sm"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </div>

            {/* Increased Comprehensive Engineering Responsibilities Bullets */}
            <div className="space-y-3 pt-2">
              {coreBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_6px_rgba(6,182,212,0.6)]" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
