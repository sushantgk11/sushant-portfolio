import { Clock, Send, Sparkles } from 'lucide-react';

interface ProjectVisualProps {
  type:
    | 'origem'
    | 'brainstormer-lead'
    | 'eaa'
    | 'ring-builder'
    | 'brainstormer-creator'
    | 'ai-widget'
    | 'smifs';
}

export function ProjectVisual({ type }: ProjectVisualProps) {
  if (type === 'origem') {
    return <OrigemVisual />;
  }
  if (type === 'brainstormer-lead') {
    return <BrainstormerLeadVisual />;
  }
  if (type === 'eaa') {
    return <EaaVisual />;
  }
  if (type === 'ring-builder') {
    return <RingBuilderVisual />;
  }
  if (type === 'brainstormer-creator') {
    return <BrainstormerCreatorVisual />;
  }
  if (type === 'smifs') {
    return <SmifsVisual />;
  }
  return <AiWidgetVisual />;
}

/* 1. Origem: Luxury Fashion & Jewelry E-Commerce Storefront (Matching reference image) */
function OrigemVisual() {
  return (
    <div className="w-full h-44 sm:h-48 bg-[#f5f0eb] rounded-xl overflow-hidden relative flex select-none text-slate-800">
      {/* Left side: Editorial typography & Shop Now CTA */}
      <div className="w-1/2 p-4 sm:p-5 flex flex-col justify-between z-10">
        <div>
          <span className="font-serif tracking-widest text-[11px] font-bold text-slate-900 block">
            Origem
          </span>
          <h4 className="font-serif text-sm sm:text-base font-medium text-slate-900 leading-tight mt-3">
            Timeless Elegance <br />
            <span className="italic font-normal">for Every Moment</span>
          </h4>
        </div>

        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-medium tracking-wide shadow-sm">
            Shop Now
          </span>
        </div>
      </div>

      {/* Right side: Editorial Fashion Model Image */}
      <div className="w-1/2 relative h-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
          alt="Origem luxury jewelry campaign"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft overlay gradient to blend into left side */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#f5f0eb] to-transparent" />
      </div>
    </div>
  );
}

/* 2. Brainstormer Lead Generation Platform: Discovery & Pipeline Management Dashboard */
function BrainstormerLeadVisual() {
  return (
    <div className="w-full h-44 sm:h-48 bg-[#0b0f19] rounded-xl overflow-hidden border border-white/10 p-3 flex flex-col justify-between select-none relative text-slate-200">
      {/* Top Search & Filter Bar */}
      <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.08] text-[10px]">
        <div className="flex items-center gap-1.5 font-bold text-white">
          <div className="w-2.5 h-2.5 rounded bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <span>Brainstormer Lead Engine</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[9px] font-mono">
            ● 2,480 Verified
          </span>
        </div>
      </div>

      {/* Prospect Filters & Leads Table */}
      <div className="space-y-1.5 py-1 flex-1 flex flex-col justify-center">
        {/* Search / Filter pill row */}
        <div className="flex items-center gap-1.5 text-[8px] font-mono text-slate-400">
          <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-cyan-300">
            Filter: Enterprise SaaS
          </span>
          <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
            Location: US / EU
          </span>
          <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
            Revenue: $10M+
          </span>
        </div>

        {/* Lead Row 1 */}
        <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-[9px]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-300 text-[9px] font-bold">
              VP
            </div>
            <div>
              <span className="font-semibold text-white block leading-none">VP of Engineering</span>
              <span className="text-[8px] text-slate-400">CloudScale Systems · 450 emp</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[8px] font-mono font-bold">
              98% Match
            </span>
            <span className="text-[8px] text-emerald-400 font-medium">Verified Email</span>
          </div>
        </div>

        {/* Lead Row 2 */}
        <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-[9px]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-300 text-[9px] font-bold">
              CT
            </div>
            <div>
              <span className="font-semibold text-white block leading-none">Chief Technology Officer</span>
              <span className="text-[8px] text-slate-400">Apex Logic Inc · 1.2k emp</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[8px] font-mono font-bold">
              94% Match
            </span>
            <span className="text-[8px] text-emerald-400 font-medium">Enriched</span>
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="pt-1.5 border-t border-white/[0.08] flex items-center justify-between text-[8px] font-mono text-slate-400">
        <span>Lead Enrichment Pipeline</span>
        <span className="text-cyan-400 font-semibold cursor-pointer">Export to CRM →</span>
      </div>
    </div>
  );
}

/* 3. EAA Donation: Bilingual Giving Platform with Hands Joined Banner (Matching reference image) */
function EaaVisual() {
  return (
    <div className="w-full h-44 sm:h-48 bg-[#fdfdfd] rounded-xl overflow-hidden border border-slate-200/80 flex flex-col justify-between select-none text-slate-800">
      {/* Top header bar */}
      <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1 font-bold text-teal-800">
          <div className="w-2.5 h-2.5 rounded-full bg-teal-600" />
          <span>EAA Global</span>
        </div>
        <div className="flex items-center gap-2 text-[9px] text-slate-500">
          <span>EN</span>
          <span>·</span>
          <span className="text-teal-700 font-semibold">العربية</span>
        </div>
      </div>

      {/* Hero Banner with Team Hands Together Photo */}
      <div className="relative flex-1 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80"
          alt="Hands joined in solidarity"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover brightness-95"
        />
        {/* Centered Campaign Headline & Buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 flex flex-col items-center justify-center p-3 text-center text-white">
          <h4 className="text-sm font-bold tracking-tight drop-shadow-md">
            Together We Make a Difference
          </h4>
          <p className="text-[10px] text-slate-200 mt-0.5 drop-shadow-sm max-w-[220px]">
            Empowering children through bilingual education access
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2.5 py-0.5 rounded bg-teal-500 text-white text-[9px] font-semibold shadow">
              Donate Monthly
            </span>
            <span className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-[9px] font-medium">
              One-Time
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 4. Ring Builder: 3D Photorealistic Engagement Ring Configurator (Matching reference image) */
function RingBuilderVisual() {
  return (
    <div className="w-full h-44 sm:h-48 bg-[#090b12] rounded-xl overflow-hidden border border-white/10 p-3 flex flex-col justify-between select-none relative text-slate-200">
      {/* Top status bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-[10px]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-white text-[10px] font-semibold">3D RING STUDIO</span>
        </div>
        <span className="text-[9px] font-mono text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/50">
          WebGL 60 FPS
        </span>
      </div>

      {/* Main 3D Viewport with Photorealistic Diamond Ring */}
      <div className="grid grid-cols-12 gap-2 flex-1 items-center py-1">
        {/* Left Metal Swatches */}
        <div className="col-span-3 space-y-1 text-[8px] font-mono">
          <div className="p-1 rounded bg-white/[0.04] border border-white/10 flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 border border-white" />
            <span className="truncate text-slate-300">Platinum</span>
          </div>
          <div className="p-1 rounded bg-white/[0.02] border border-white/[0.06] flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-300 border border-amber-400" />
            <span className="truncate text-slate-400">18k Gold</span>
          </div>
          <div className="p-1 rounded bg-white/[0.02] border border-white/[0.06] flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-300 border border-rose-400" />
            <span className="truncate text-slate-400">Rose Gold</span>
          </div>
        </div>

        {/* Center: Diamond Ring Render */}
        <div className="col-span-6 flex items-center justify-center relative h-full">
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80"
            alt="3D Diamond Ring"
            referrerPolicy="no-referrer"
            className="h-24 sm:h-28 w-auto object-contain drop-shadow-[0_10px_20px_rgba(56,189,248,0.25)] rounded-lg"
          />
        </div>

        {/* Right Settings */}
        <div className="col-span-3 space-y-1 text-right text-[8px] font-mono">
          <div className="p-1 rounded bg-white/[0.03] border border-white/[0.06]">
            <span className="text-slate-400 block text-[7px]">CARAT</span>
            <span className="text-white font-bold">1.75 ct</span>
          </div>
          <div className="p-1 rounded bg-white/[0.03] border border-white/[0.06]">
            <span className="text-slate-400 block text-[7px]">CUT</span>
            <span className="text-cyan-300 font-bold">Brilliant</span>
          </div>
          <div className="p-1 rounded bg-white/[0.03] border border-white/[0.06]">
            <span className="text-slate-400 block text-[7px]">CLARITY</span>
            <span className="text-white font-bold">VVS1</span>
          </div>
        </div>
      </div>

      {/* Bottom price */}
      <div className="flex items-center justify-between pt-1.5 border-t border-white/[0.08] text-[9px] font-mono">
        <span className="text-slate-400">Solitaire Pavé Ring</span>
        <span className="text-cyan-300 font-bold">$4,850</span>
      </div>
    </div>
  );
}

/* 5. Brainstormer Creator / Studio: Creator Platform for Content & Real-Time Workflows */
function BrainstormerCreatorVisual() {
  return (
    <div className="w-full h-44 sm:h-48 bg-[#090d16] rounded-xl overflow-hidden border border-white/10 p-3 flex flex-col justify-between select-none relative text-slate-200">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.08] text-[10px]">
        <div className="flex items-center gap-1.5 font-bold text-white">
          <div className="w-2.5 h-2.5 rounded bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
          <span>Creator Studio</span>
          <span className="text-slate-500 font-mono text-[9px]">/ workflow-node</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30 text-[8px] font-mono">
            Socket.io Live
          </span>
        </div>
      </div>

      {/* Main Studio Canvas / Flow Node Grid */}
      <div className="grid grid-cols-12 gap-2 flex-1 items-center py-1">
        {/* Left Side: Content Workflow Node */}
        <div className="col-span-7 space-y-1.5">
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 space-y-1">
            <div className="flex items-center justify-between text-[9px]">
              <span className="font-semibold text-white">Video Asset Pipeline</span>
              <span className="text-[8px] font-mono text-emerald-400">Synced</span>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 w-3/4 rounded-full" />
            </div>
            <div className="flex items-center justify-between text-[8px] text-slate-400 font-mono pt-0.5">
              <span>Encoding 4K H.265</span>
              <span>75%</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[8px] font-mono">
            <span className="px-2 py-0.5 rounded bg-violet-950/60 border border-violet-800/40 text-violet-300">
              Firestore Streams
            </span>
            <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
              Redux State
            </span>
          </div>
        </div>

        {/* Right Side: Active Collaborators & Event Pulse */}
        <div className="col-span-5 space-y-1.5 border-l border-white/[0.06] pl-2">
          <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider block">
            Studio Session
          </span>
          <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.06] space-y-1">
            <div className="flex items-center gap-1.5 text-[9px] text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-white truncate">Timeline Editor</span>
            </div>
            <div className="text-[8px] text-slate-400 font-mono">3 Active Editors</div>
          </div>
          <div className="text-[8px] text-cyan-300 font-mono bg-cyan-950/30 p-1 rounded border border-cyan-800/20 truncate">
            ⚡ Webhook triggered
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="pt-1.5 border-t border-white/[0.08] flex items-center justify-between text-[8px] font-mono text-slate-400">
        <span>Cloud Content CMS & Automation</span>
        <span className="text-violet-400 font-semibold">Live Preview →</span>
      </div>
    </div>
  );
}

/* 7. SMIFS: Financial Services & Institutional Equity Portal */
function SmifsVisual() {
  return (
    <div className="w-full h-44 sm:h-48 bg-[#09111e] rounded-xl overflow-hidden border border-white/10 p-3 flex flex-col justify-between select-none relative text-slate-200">
      {/* Top Header with Ticker Bar */}
      <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.08] text-[10px]">
        <div className="flex items-center gap-1.5 font-bold text-white">
          <div className="w-2.5 h-2.5 rounded bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          <span className="tracking-wide">SMIFS CAPITAL</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30 text-[8px] font-mono">
            Strapi CMS Engine
          </span>
        </div>
      </div>

      {/* Market Indicators & Financial Intelligence */}
      <div className="grid grid-cols-12 gap-2 flex-1 items-center py-1">
        {/* Left Side: Market Indices */}
        <div className="col-span-6 space-y-1.5">
          <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-[9px]">
            <div>
              <span className="font-mono font-bold text-white block">NIFTY 50</span>
              <span className="text-[8px] text-slate-400">NSE Benchmark</span>
            </div>
            <div className="text-right">
              <span className="font-mono text-emerald-400 font-bold block">+1.24%</span>
              <span className="text-[8px] text-slate-400 font-mono">24,850.40</span>
            </div>
          </div>

          <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-[9px]">
            <div>
              <span className="font-mono font-bold text-white block">SENSEX</span>
              <span className="text-[8px] text-slate-400">BSE Financials</span>
            </div>
            <div className="text-right">
              <span className="font-mono text-emerald-400 font-bold block">+0.95%</span>
              <span className="text-[8px] text-slate-400 font-mono">81,420.15</span>
            </div>
          </div>
        </div>

        {/* Right Side: Equity Research Insights via Strapi */}
        <div className="col-span-6 space-y-1.5 border-l border-white/[0.06] pl-2">
          <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider block">
            Research Reports
          </span>
          <div className="p-1.5 rounded bg-blue-950/20 border border-blue-800/30 text-[8px] space-y-0.5">
            <span className="font-semibold text-blue-300 block truncate">Banking & Fintech Sector</span>
            <span className="text-slate-400 line-clamp-1">Q2 institutional earnings outlook</span>
            <span className="text-[7px] text-emerald-400 font-mono block">Target: Outperform</span>
          </div>
          <div className="text-[8px] text-slate-400 font-mono flex items-center justify-between pt-0.5">
            <span>Wealth Advisory</span>
            <span className="text-cyan-400">Active Portfolios</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-1.5 border-t border-white/[0.08] flex items-center justify-between text-[8px] font-mono text-slate-400">
        <span>Institutional Financial Services</span>
        <span className="text-blue-400 font-semibold cursor-pointer">Access Portal →</span>
      </div>
    </div>
  );
}

/* 6. AI Chat Widget: Dark Modern Embeddable AI Assistant with Floating Launcher Button */
function AiWidgetVisual() {
  return (
    <div className="w-full h-44 sm:h-48 bg-[#0a0d15] rounded-xl overflow-hidden border border-white/10 p-3 flex flex-col justify-between select-none relative text-slate-200">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.08] text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-semibold text-white">AI Copilot Widget</span>
        </div>
        <span className="text-[8px] font-mono text-violet-300 bg-violet-950/60 px-1.5 py-0.5 rounded border border-violet-800/40">
          Audio Worklets Ready
        </span>
      </div>

      {/* Floating Chat Conversation Bubble Container */}
      <div className="space-y-1.5 py-1 flex-1">
        {/* User Prompt */}
        <div className="flex justify-end">
          <div className="p-1.5 rounded-lg rounded-tr-none bg-blue-600 text-white text-[9px] max-w-[200px]">
            How do I embed the audio streaming widget?
          </div>
        </div>

        {/* Assistant Response */}
        <div className="flex justify-start gap-1.5 items-start">
          <div className="w-4 h-4 rounded-full bg-violet-600 flex items-center justify-center text-white shrink-0 mt-0.5">
            <Sparkles className="w-2.5 h-2.5" />
          </div>
          <div className="p-2 rounded-lg rounded-tl-none bg-white/[0.05] border border-white/10 text-slate-200 text-[9px] space-y-1 max-w-[230px]">
            <p>Insert the script tag into your HTML:</p>
            <div className="font-mono text-[8px] bg-black/60 p-1 rounded text-cyan-300">
              &lt;script src=&quot;https://cdn.ai/widget.js&quot;&gt;&lt;/script&gt;
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Blue Widget Launcher in bottom-right corner as shown in mockup! */}
      <div className="pt-1.5 border-t border-white/[0.08] flex items-center justify-between">
        <span className="text-[8px] font-mono text-slate-500">Iframe Sandbox Isolated</span>
        {/* Floating circular launcher button */}
        <div className="w-6 h-6 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/40 cursor-pointer">
          <Sparkles className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}
