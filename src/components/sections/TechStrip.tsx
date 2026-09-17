import { Cloud, Flame } from 'lucide-react';

function ReactAtom() {
  return (
    <svg className="w-4 h-4 text-cyan-400 shrink-0" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="0" cy="0" r="2.2" fill="currentColor" />
      <ellipse rx="10.5" ry="4.2" />
      <ellipse rx="10.5" ry="4.2" transform="rotate(60)" />
      <ellipse rx="10.5" ry="4.2" transform="rotate(120)" />
    </svg>
  );
}

function NextLogo() {
  return (
    <div className="w-4 h-4 rounded-full bg-white text-black font-bold text-[9px] flex items-center justify-center shrink-0">
      N
    </div>
  );
}

function TSLogo() {
  return (
    <div className="w-4 h-4 rounded bg-[#3178c6] text-white font-mono font-bold text-[9px] flex items-center justify-center shrink-0">
      TS
    </div>
  );
}

function JSLogo() {
  return (
    <div className="w-4 h-4 rounded bg-[#f7df1e] text-black font-mono font-bold text-[9px] flex items-center justify-center shrink-0">
      JS
    </div>
  );
}

function ReduxLogo() {
  return (
    <svg className="w-4 h-4 text-purple-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5v5a4 4 0 1 1-4 0v-5C8.8 8.8 8 7.5 8 6a4 4 0 0 1 4-4z" />
    </svg>
  );
}

function TailwindLogo() {
  return (
    <svg className="w-4 h-4 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
    </svg>
  );
}

export function TechStrip() {
  const items = [
    { label: 'React.js', icon: <ReactAtom /> },
    { label: 'Next.js', icon: <NextLogo /> },
    { label: 'TypeScript', icon: <TSLogo /> },
    { label: 'JavaScript', icon: <JSLogo /> },
    { label: 'Redux Toolkit', icon: <ReduxLogo /> },
    { label: 'Tailwind CSS', icon: <TailwindLogo /> },
    { label: 'REST APIs', icon: <Cloud className="w-4 h-4 text-cyan-300" /> },
    { label: 'Firebase', icon: <Flame className="w-4 h-4 text-amber-400" /> },
  ];

  return (
    <section
      id="tech-strip"
      aria-label="Core Technical Stack"
      className="border-y border-white/[0.06] bg-[#070a10] py-4 md:py-5 overflow-x-auto scrollbar-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 min-w-max">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
            >
              {item.icon}
              <span className="font-normal">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
