import { ArrowUp, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface FooterProps {
  onOpenResume?: () => void;
}

export function Footer({ onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
  ];

  return (
    <footer id="portfolio-footer" className="border-t border-white/[0.06] bg-[#05070d] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          
          {/* Left: Name & Role */}
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-white tracking-tight text-sm">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 font-normal">
              Senior Frontend Developer
            </span>
          </div>

          {/* Center / Right: Nav links + LinkedIn + Download Resume */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-4 sm:gap-5 text-xs text-slate-400">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* LinkedIn icon */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Download Resume button */}
            <a
              href="/assets/pdf/Sushant_Kulkarni_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-900 hover:bg-slate-200 transition-colors shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg text-slate-500 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
