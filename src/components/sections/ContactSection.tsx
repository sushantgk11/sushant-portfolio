import { useState } from 'react';
import { Mail, Linkedin, FileText, Copy, Check, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
  onOpenContactForm: () => void;
}

export function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Employment Inquiries"
      className="py-24 md:py-36 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Senior Roles & High-Impact Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Have an interesting product to build?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl mx-auto">
            I'm open to Senior Frontend Developer opportunities and challenging product engineering work.
          </p>

          {/* Core Action Buttons: Email, LinkedIn, Download Resume (NO GITHUB) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
            <a
              id="contact-email-btn"
              href={`mailto:${PERSONAL_INFO.email}?subject=Senior%20Frontend%20Developer%20Opportunity`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white text-slate-950 hover:bg-slate-100 transition-all cursor-pointer shadow-lg shadow-white/5 active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 text-cyan-600" />
              <span>Email Me</span>
            </a>

            <a
              id="contact-linkedin-btn"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer active:scale-[0.98]"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>

            <button
              id="contact-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-300 border border-cyan-700/40 transition-all cursor-pointer active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Quick Direct Message / Email Copy Card */}
          <div className="pt-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs font-mono text-slate-400">
              <span className="text-slate-500">Direct Email:</span>
              <span className="text-slate-200 select-all">{PERSONAL_INFO.email}</span>
              <button
                onClick={copyEmail}
                className="p-1 rounded hover:bg-white/10 text-cyan-400 transition-colors cursor-pointer"
                title="Copy email address"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              {copied && <span className="text-[10px] text-emerald-400 font-sans">Copied!</span>}
            </div>
          </div>

          <div className="pt-4 text-xs text-slate-500 font-mono">
            Targeting product-tier organizations: Amazon · Flipkart · Razorpay · Swiggy · Microsoft
          </div>

        </motion.div>
      </div>
    </section>
  );
}
