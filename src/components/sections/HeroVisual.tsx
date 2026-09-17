import { Zap, Accessibility, Box, Code2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

// Custom crisp SVG icons matching the reference design
function ReactIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348">
      <circle cx="0" cy="0" r="2.05" fill="#38bdf8" />
      <g stroke="#38bdf8" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NextJsIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <div className={`${className} rounded-full bg-black border border-white/20 flex items-center justify-center font-bold text-white shadow-inner select-none`}>
      <span className="text-xl font-bold tracking-tighter">N</span>
    </div>
  );
}

function TypeScriptIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <div className={`${className} rounded-lg bg-[#2563eb] text-white flex items-center justify-center font-bold font-mono text-base shadow-sm select-none`}>
      TS
    </div>
  );
}

function ReduxIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8">
      <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5v5a4 4 0 1 1-4 0v-5C8.8 8.8 8 7.5 8 6a4 4 0 0 1 4-4z" />
      <circle cx="12" cy="6" r="1.5" fill="#a855f7" />
      <circle cx="12" cy="18" r="1.5" fill="#a855f7" />
      <path d="M6 12a4 4 0 0 1 4-4c1.5 0 2.8.8 3.5 2h5a4 4 0 1 1 0 4h-5c-.7 1.2-2 2-3.5 2a4 4 0 0 1-4-4z" opacity="0.6" />
    </svg>
  );
}

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  const techCards = [
    { name: 'React', icon: <ReactIcon className="w-10 h-10 text-cyan-400" />, border: 'border-cyan-500/20' },
    { name: 'Next.js', icon: <NextJsIcon className="w-10 h-10" />, border: 'border-white/15' },
    { name: 'TypeScript', icon: <TypeScriptIcon className="w-10 h-10" />, border: 'border-blue-500/20' },
    { name: 'Redux', icon: <ReduxIcon className="w-10 h-10" />, border: 'border-purple-500/20' },
  ];

  const pillarCards = [
    { label: 'Performance', icon: <Zap className="w-4 h-4 text-cyan-400" /> },
    { label: 'Architecture', icon: <Box className="w-4 h-4 text-cyan-400" /> },
    { label: 'Accessibility', icon: <Accessibility className="w-4 h-4 text-cyan-400" /> },
    { label: 'Clean Code', icon: <Code2 className="w-4 h-4 text-cyan-400" /> },
  ];

  return (
    <div className="relative w-full flex items-center justify-center py-4 lg:py-6">
      
      {/* Blue Orbital Arc Glow (matching reference image) */}
      <div className="absolute -inset-4 pointer-events-none flex items-center justify-center -z-10 overflow-hidden">
        {/* Glowing orbital ring */}
        <div className="w-[420px] sm:w-[480px] h-[420px] sm:h-[480px] rounded-full border border-cyan-500/25 border-t-cyan-400/80 border-l-blue-500/60 shadow-[0_0_60px_rgba(6,182,212,0.15)] -rotate-45" />
        {/* Soft background blue blur */}
        <div className="absolute w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -top-10 -left-10" />
      </div>

      {/* Main Composition: 2x2 Tech Grid + 4 Vertical Pillar Cards */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        
        {/* 2x2 Tech Grid Container */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="p-3.5 sm:p-4 rounded-3xl bg-[#090e1a]/80 backdrop-blur-md border border-cyan-500/20 shadow-2xl shadow-black/60 relative"
        >
          {/* Subtle curved glow border line */}
          <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />

          <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
            {techCards.map((tech) => (
              <div
                key={tech.name}
                className={`w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#0c1222] border ${tech.border} p-3 flex flex-col items-center justify-center gap-2.5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#0f172a] group shadow-md shadow-black/40`}
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {tech.icon}
                </div>
                <span className="text-xs font-medium text-slate-200 tracking-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4 Vertical Pillar Cards (Performance, Accessibility, Scalable Architecture, Clean Code) */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="flex flex-col gap-2.5 w-full sm:w-56"
        >
          {pillarCards.map((card, idx) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + idx * 0.08 }}
              className="px-4 py-3 rounded-xl bg-[#0b101c]/90 hover:bg-[#0f1627] border border-slate-800/80 hover:border-slate-700 transition-all duration-200 flex items-center gap-3 shadow-lg shadow-black/30 group"
            >
              <div className="w-5 h-5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                {card.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
