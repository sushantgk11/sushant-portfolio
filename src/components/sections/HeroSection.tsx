import { MouseEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Download, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { HeroVisual } from './HeroVisual';

interface HeroSectionProps {
  onOpenResume: () => void;
}

// Custom crisp mini icons for the hero tech row
function MiniReact() {
  return (
    <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="0" cy="0" r="2" fill="currentColor" />
      <ellipse rx="10" ry="4" />
      <ellipse rx="10" ry="4" transform="rotate(60)" />
      <ellipse rx="10" ry="4" transform="rotate(120)" />
    </svg>
  );
}

function MiniNext() {
  return (
    <span className="w-3.5 h-3.5 rounded-full bg-white text-black font-bold text-[9px] flex items-center justify-center shrink-0 leading-none">
      N
    </span>
  );
}

function MiniTS() {
  return (
    <span className="w-3.5 h-3.5 rounded bg-blue-600 text-white font-mono font-bold text-[8px] flex items-center justify-center shrink-0 leading-none">
      TS
    </span>
  );
}

function MiniRedux() {
  return (
    <svg className="w-3.5 h-3.5 text-purple-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5v5a4 4 0 1 1-4 0v-5C8.8 8.8 8 7.5 8 6a4 4 0 0 1 4-4z" />
    </svg>
  );
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const scrollToWork = (e: MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.45,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      aria-label="Introduction and Overview"
      className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Typography & Actions (Matching Mockup) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6"
          >
            {/* HELLO, I'M tag */}
            <motion.div variants={itemVariants}>
              <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
                HELLO, I'M
              </span>
            </motion.div>

            {/* Main Headings */}
            <motion.div variants={itemVariants} className="space-y-1.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                <span className="text-cyan-400">Senior Frontend </span>
                <span className="text-purple-300">Developer</span>
              </h2>
            </motion.div>

            {/* Supporting Pitch Text */}
            <motion.p variants={itemVariants} className="text-base text-slate-300 leading-relaxed max-w-lg font-normal">
              Building scalable, high-performance web applications with React, Next.js and modern frontend technologies.
            </motion.p>

            {/* Horizontal Row of Technology & Experience Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>4+ Years Experience</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300">
                <MiniReact />
                <span className="text-cyan-400">React</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300">
                <MiniNext />
                <span>Next.js</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300">
                <MiniTS />
                <span className="text-blue-400">TypeScript</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300">
                <MiniRedux />
                <span className="text-purple-400">Redux</span>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="hero-view-work-btn"
                onClick={scrollToWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer shadow-lg shadow-blue-600/30 active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-download-resume-btn"
                href="/assets/pdf/Sushant_Kulkarni_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-[#0c101c] hover:bg-[#131a2e] text-slate-200 border border-slate-700/80 hover:border-slate-500 transition-all cursor-pointer active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-slate-300" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: 2x2 Tech Cards & 4 Vertical Pillars */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
