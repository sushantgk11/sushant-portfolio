import { Download, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const linkStyle = 'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-700 px-4 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-300';

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-slate-800 bg-[#090d18]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 id="contact-heading" className="text-3xl font-bold tracking-tight">Let’s connect</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            I’m open to Senior Frontend Developer opportunities. If you’re hiring for a React or Next.js role, I’d like to hear about your team and the product you’re building.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className={linkStyle} href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} aria-hidden="true" /> LinkedIn
          </a>
          <a className={linkStyle} href={'mailto:' + PERSONAL_INFO.email}>
            <Mail size={16} aria-hidden="true" /> Email me
          </a>
          <a className={linkStyle} href="/assets/pdf/Sushant_Kulkarni_CV.pdf" download>
            <Download size={16} aria-hidden="true" /> Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
