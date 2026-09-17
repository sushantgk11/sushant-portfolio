import { Project, Experience, SkillGroup } from '../types';

export const PERSONAL_INFO = {
  name: 'Sushant Kulkarni',
  role: 'Senior Frontend Developer',
  headline: 'Building scalable, high-performance web applications with React, Next.js and modern frontend technologies.',
  experienceYears: '4+ Years Experience',
  coreTech: ['4+ Years Experience', 'React', 'Next.js', 'TypeScript', 'Redux'],
  email: 'sushantgk159@gmail.com',
  linkedin: 'https://linkedin.com',
  location: 'India',
  targetRoles: 'Senior Frontend Developer roles at leading product-based companies (Amazon, Flipkart, Razorpay, Swiggy, Microsoft, etc.)',
  about:
    'Sushant Kulkarni is a frontend developer focused on building scalable, accessible and high-performance web applications. His experience spans e-commerce, SaaS, fintech, AI-powered products, dashboards and interactive product experiences.',
  metrics: [
    { value: 'Optimized', label: 'Core Web Vitals' },
    { value: 'Modular', label: 'Component Architecture' },
  ],
};

export const TECH_STRIP = [
  'React.js',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Redux Toolkit',
  'Tailwind CSS',
  'REST APIs',
  'Firebase',
];

export const PROJECTS: Project[] = [
  {
    id: 'origem',
    name: 'Origem',
    category: 'E-commerce',
    tagline: 'High-performance e-commerce platform with dynamic variants & Razorpay checkout',
    description: 'E-commerce platform built with Next.js, React and TypeScript.',
    role: 'Lead Frontend Engineer — Architected the client-side state machine, server component boundaries, and payment integration pipeline.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Razorpay'],
    highlights: [
      'Next.js App Router',
      'Dynamic product pages',
      'Product variants',
      'Cart and wishlist',
      'Razorpay integration',
      'Performance optimization',
    ],
    overview:
      'Origem is a production-grade e-commerce application engineered for rapid browsing, instantaneous state transitions between product variants, and zero-friction checkout flows. Built with Next.js App Router and custom responsive layouts.',
    problem:
      'Traditional storefronts frequently suffer from heavy client-side JavaScript payloads, sluggish layout shifts when toggling product variants, and unstable checkout callback loops.',
    technicalArchitecture: [
      'Server-driven catalog rendering with Next.js App Router for sub-second Initial Server Response.',
      'Context API combined with granular state slices for cart, wishlist, and active inventory selection.',
      'Optimistic UI updates for add-to-cart, wishlist toggles, and quantity adjustments.',
      'Razorpay SDK client-side lifecycle handling with secure webhook validation and transaction recovery.',
    ],
    keyFeatures: [
      'Dynamic product detail pages with multi-attribute variant matrix (size, color, finish).',
      'Persistent cart and wishlist storage with instant badge synchronization.',
      'Razorpay payment gateway integration supporting card, UPI, and net-banking flows.',
      'Skeleton state loaders and zero layout shift design for mobile viewports.',
    ],
    engineeringChallenges: [
      'Managing dynamic SKU variant combinations while maintaining instant visual feedback.',
      'Eliminating hydration mismatches between server-rendered currency/pricing states and client locale.',
      'Building resilient payment error-handling and session re-triggering for dropped network connections.',
    ],
    performanceConsiderations: [
      'Implemented responsive Next.js Image optimization with WebP/AVIF formats.',
      'Route-based code splitting and dynamic import of the Razorpay checkout overlay.',
      'Memoized variant selector calculations to keep frame rates locked at 60fps on mobile.',
    ],
    results: [
      'Streamlined checkout completion flow with zero layout shift during variant switching.',
      'Delivered fully responsive shopping experience across desktop, tablet, and mobile devices.',
    ],
    liveDemoUrl: 'https://origemindia.com/',
    thumbnail: '/assets/images/origem.jpg',
    mockupType: 'origem',
  },
  {
    id: 'brainstormer-lead-generation',
    name: 'Brainstormer Lead Generation Platform',
    category: 'Lead Generation / SaaS',
    tagline: 'High-throughput lead discovery, scoring engine & pipeline management platform',
    description: 'Lead generation platform for discovering and managing potential business leads.',
    role: 'Senior Frontend Developer — Engineered the prospect discovery filters, high-density data tables, and pipeline visualization flows.',
    technologies: ['React', 'Next.js', 'TypeScript', 'SaaS'],
    highlights: [
      'React',
      'Next.js',
      'TypeScript',
      'SaaS',
      'Lead scoring engine',
      'Pipeline analytics',
    ],
    overview:
      'A dedicated enterprise lead generation platform built for sales teams and business development reps to discover, score, verify, and track prospective B2B accounts through automated qualification filters and actionable pipeline workflows.',
    problem:
      'Sales and marketing teams spend excessive hours sifting through fragmented prospect data; conventional portals struggle with complex multi-parameter filtering, large list rendering lag, and clunky CRM export procedures.',
    technicalArchitecture: [
      'Next.js server-side rendering for catalog browsing paired with React client-side filtering.',
      'Structured TypeScript schema models enforcing verified lead attributes and company metadata.',
      'Optimistic lead tagging, bookmarking, and CRM export state synchronization.',
      'Modular compound UI components for multi-criteria prospecting filters.',
    ],
    keyFeatures: [
      'Advanced multi-parameter prospect discovery (industry, revenue, headcount, tech stack, location).',
      'Real-time automated lead scoring and email verification indicators.',
      'Interactive pipeline stages with drag-and-drop opportunity tracking.',
      '1-click export integrations for major CRM and email outreach platforms.',
    ],
    engineeringChallenges: [
      'Optimizing multi-faceted search filters over thousands of records with zero input lag.',
      'Ensuring responsive table layout degradation on tablet and mobile viewports.',
      'Coordinating batch actions (bulk lead enrichment, export) without UI freezing.',
    ],
    performanceConsiderations: [
      'Debounced search queries and memoized filter evaluation to eliminate duplicate network calls.',
      'Virtualized list rendering for large contact datasets.',
      'Route-based code splitting to ensure instant dashboard load times.',
    ],
    results: [
      'Significantly reduced lead prospecting time with instant multi-criteria filtering.',
      'Built a reliable, scalable SaaS interface supporting high-volume sales workflows.',
    ],
    liveDemoUrl: 'https://brainstormer.io/',
    thumbnail: '/assets/images/brainstormer.png',
    mockupType: 'brainstormer-lead',
  },
  {
    id: 'eaa-donation',
    name: 'EAA Donation',
    category: 'Donation / SaaS',
    tagline: 'Bilingual (EN/AR) donation platform with secure payments and authentication',
    description: 'Bilingual donation platform with secure payments and authentication.',
    role: 'Senior Frontend Developer — Designed the bidirectional RTL/LTR layout system, NextAuth authentication pipeline, and Dibsy payment integration.',
    technologies: ['Next.js', 'TypeScript', 'MySQL', 'Dibsy'],
    highlights: [
      'Next.js App Router',
      'English / Arabic support',
      'Authentication',
      'JWT security',
      'Dibsy payment gateway',
      'MySQL',
    ],
    overview:
      'The EAA Donation Platform is a mission-critical giving platform built to serve both English and Arabic speaking donors. It combines RTL layout directionality, secure JWT authentication via NextAuth, structured donation tiers, and Dibsy payment gateway processing.',
    problem:
      'Supporting seamless Arabic (RTL) and English (LTR) experiences without UI glitches, misaligned form inputs, or broken payment redirects, all while maintaining rigorous payment security standards.',
    technicalArchitecture: [
      'Next.js App Router with dynamic locale routing (`/[locale]/...`) and CSS logical properties.',
      'NextAuth.js implementation using encrypted JWT session tokens and role-based route middleware.',
      'Dibsy payment processing pipeline with custom recurring and one-time donation flows.',
      'Containerized development and staging workflow using Docker with MySQL persistence.',
    ],
    keyFeatures: [
      'Comprehensive RTL/LTR bidirectional support with automated font swapping and icon flipping.',
      'Secure donor authentication, donor dashboards, and tax receipt histories.',
      'Customizable donation amounts, campaign allocations, and recurring gift schedules.',
      'Dibsy payment integration with localized payment methods.',
    ],
    engineeringChallenges: [
      'Ensuring complete visual symmetry and typographic hierarchy between Arabic and Latin scripts without duplicated CSS.',
      'Protecting payment state through browser locale transitions and redirect flows.',
      'Strict input validation for international phone numbers and multi-currency formats.',
    ],
    performanceConsiderations: [
      'Static generation for campaign landing pages with on-demand revalidation.',
      'CSS Logical Properties to eliminate RTL duplicate stylesheets.',
      'Font subsetting for Arabic glyphs to reduce critical render-blocking web fonts.',
    ],
    results: [
      'Delivered seamless English and Arabic bilingual donor experience with unified codebase.',
      'Ensured secure, compliant donation processing with frictionless user authentication.',
    ],
    liveDemoUrl: 'https://donate.educationaboveall.org/',
    thumbnail: '/assets/images/donation.png',
    mockupType: 'eaa',
  },
  {
    id: 'ring-builder',
    name: 'AI-Powered 3D Ring Builder ',
    category: '3D Product Experience',
    tagline: 'Interactive 3D product configurator with real-time customization',
    description: 'Interactive 3D jewelry configurator with real-time product customization and AI-powered assistance.',
    role: 'Frontend & 3D Web Developer — Built the interactive React Three Fiber viewport, material shader controls, and WebSocket state sync.',
    technologies: ['React', 'Three.js', 'WebSockets', 'TypeScript'],
    highlights: [
      'React',
      'Three.js',
      'WebSockets',
      'TypeScript',
      'Interactive 3D UI',
      'Product customization',
    ],
    overview:
      'A WebGL-powered 3D customization suite enabling buyers to configure custom rings—selecting bands, metals, diamond cuts, settings, and engravings—with instant photorealistic rendering and real-time multiplayer consultation via WebSockets.',
    problem:
      'Standard 3D web configurators often experience high frame drops on mobile GPUs, steep initial download sizes, and clunky synchronization between 2D UI controls and 3D scene nodes.',
    technicalArchitecture: [
      'Three.js integrated into React declarative state using React Three Fiber.',
      'Custom PBR (Physically Based Rendering) materials for metals (platinum, rose gold, yellow gold) and diamond dispersion shaders.',
      'WebSocket bi-directional channel for real-time collaborative styling sessions between customers and jewelry consultants.',
      'Decoupled UI layer communicating with the 3D canvas via high-performance ref triggers without causing full React re-renders.',
    ],
    keyFeatures: [
      'Interactive 360-degree orbit, zoom, and lighting controls with smooth damping.',
      'Instant material, metal, and gemstone swapping with realistic light refraction.',
      'Real-time price recalculation as configuration parameters change.',
      'Live shared session mode where two users view synchronized camera angles and selections.',
    ],
    engineeringChallenges: [
      'Maintaining 60 FPS performance on mid-tier mobile hardware while rendering reflections and shadows.',
      'Optimizing 3D asset delivery to keep initial 3D load times minimal.',
      'Synchronizing camera matrices and configuration state across WebSockets with zero perceived latency.',
    ],
    performanceConsiderations: [
      'Draco GLTF mesh compression reducing 3D model asset payloads significantly.',
      'Dynamic resolution scaling and adaptive post-processing based on detected device GPU capabilities.',
      'Preventing React state thrashing by isolating Three.js render loop updates outside the React tree.',
    ],
    results: [
      'Smooth 60 FPS real-time 3D interaction across desktop and high-end mobile browsers.',
      'Flawless synchronization of 3D configurations across collaborative WebSocket sessions.',
    ],
    liveDemoUrl: 'https://app.jewelrat.com/',
    thumbnail: '/assets/images/jewelrat.png',
    mockupType: 'ring-builder',
  },
  {
    id: 'brainstormer-creator-studio',
    name: 'Brainstormer Creator / Studio',
    category: 'Creator / SaaS',
    tagline: 'Creator platform for content management, workflows and real-time interactions',
    description: 'Creator platform for content management, workflows and real-time interactions.',
    role: 'Senior Frontend Engineer — Designed the Redux Toolkit state slice architecture, Firestore real-time synchronization, and Socket.io interaction channels.',
    technologies: ['Next.js', 'Redux Toolkit', 'Firestore', 'Socket.io'],
    highlights: [
      'Next.js',
      'Redux Toolkit',
      'Firestore',
      'Socket.io',
      'Content management',
      'Workflow automation',
    ],
    overview:
      'Brainstormer Creator / Studio is an advanced cloud workspace tailored for content creators, digital producers, and media teams to manage asset pipelines, coordinate creative workflows, and collaborate live via real-time socket connections.',
    problem:
      'Content creators juggle disparate apps for media asset logging, script revisions, and audience interaction; existing suites lack synchronized live state and suffer from disjointed editing workflows.',
    technicalArchitecture: [
      'Next.js App Router for responsive studio viewports and optimized asset streaming.',
      'Redux Toolkit global state store managing active timeline, layer tree, and workflow nodes.',
      'Firebase Firestore for persistent cloud document storage and live document subscription feeds.',
      'Socket.io bi-directional messaging layer for live peer cursor presence and collaborative canvas editing.',
    ],
    keyFeatures: [
      'Unified content management dashboard for digital assets, copy drafts, and distribution timelines.',
      'Interactive workflow automation builder for content approvals and asset rendering pipelines.',
      'Real-time multiplayer co-editing powered by Socket.io room listeners.',
      'Instant Firestore cloud synchronization with offline mutation queueing.',
    ],
    engineeringChallenges: [
      'Harmonizing Redux Toolkit client-side state with asynchronous Firestore snapshot updates.',
      'Handling real-time collaborative state conflicts during rapid concurrent workflow edits.',
      'Optimizing heavy media asset loading and preview rendering within the browser canvas.',
    ],
    performanceConsiderations: [
      'Memoized selector functions with Reselect to prevent redundant component re-evaluations.',
      'Optimistic client updates with background reconciliation via Socket.io.',
      'Chunked asset uploading and lazy-loaded workflow modules.',
    ],
    results: [
      'Created a unified creator studio accelerating digital content publishing workflows.',
      'Delivered seamless real-time multi-user interaction with sub-50ms synchronization latency.',
    ],
    liveDemoUrl: 'https://creator.brainstormer.io/',
    thumbnail: '/assets/images/creator.png',
    mockupType: 'brainstormer-creator',
  },
  {
    id: 'ai-chat-widget',
    name: 'AI Chat Widget',
    category: 'AI / Developer Platform',
    tagline: 'Lightweight embeddable real-time AI chat widget for external websites',
    description: 'Embeddable real-time AI chat widget for external websites.',
    role: 'Senior Frontend Engineer — Architected the embeddable script loader, sandboxed iframe protocol, and WebSocket streaming pipeline.',
    technologies: ['React', 'WebSockets', 'Audio Worklets', 'iframe'],
    highlights: [
      'React',
      'WebSockets',
      'Audio Worklets',
      'iframe',
      'Real-time streaming',
      'Embeddable architecture',
    ],
    overview:
      'A drop-in, zero-dependency script that hosts can embed via a single `<script>` tag. It injects a secure, isolated multimodal AI chat experience with low-latency streaming text responses, markdown parsing, and real-time audio voice interactions.',
    problem:
      'Embedding external widgets into third-party websites often results in CSS collision, security vulnerabilities, bundle bloat, and blocked audio streams.',
    technicalArchitecture: [
      'Sandboxed iframe architecture isolating host website styles, cookies, and scripts from widget code.',
      'Cross-origin postMessage protocol with cryptographic validation for parent-child sizing and positioning.',
      'WebSockets protocol for token-by-token LLM text streaming.',
      'Audio Worklets running on dedicated browser audio threads for real-time low-latency voice capture and playback.',
    ],
    keyFeatures: [
      'Universal 1-line script tag embeddable on any web platform (WordPress, Shopify, React, plain HTML).',
      'Real-time token streaming with syntax highlighting and markdown table formatting.',
      'Voice input and audio output using Audio Worklets for seamless conversational latency.',
      'Responsive floating launcher widget with customizable themes matching host brand colors.',
    ],
    engineeringChallenges: [
      'Preventing style leakage in both directions: host CSS impacting widget UI, and widget CSS impacting host page.',
      'Handling mobile keyboard adjustments and virtual viewport resizing within an embedded iframe.',
      'Achieving smooth audio streaming across differing browser audio sample rates.',
    ],
    performanceConsiderations: [
      'Ultra-compact initial loader script (<4KB gzipped) that lazily bootstraps the iframe only on user interaction or page idle.',
      'Offloading audio processing to Audio Worklets to keep the main JavaScript thread completely unblocked.',
      'Optimized token rendering with requestAnimationFrame batching to avoid DOM thrashing during high-speed AI output.',
    ],
    results: [
      'Engineered an embeddable architecture with zero CSS collisions across diverse host environments.',
      'Delivered low-latency multimodal conversational experiences via WebSockets and Audio Worklets.',
    ],
    liveDemoUrl: 'https://widget.brainstormer.io/?bot=30520d55_851a_46b3_b72c_255c2a989841&voiceMode=false',
    thumbnail: '/assets/images/widget-ui.png',
    mockupType: 'ai-widget',
  },
  {
    id: 'smifs',
    name: 'SMIFS',
    category: 'Fintech / Financial Services',
    tagline: 'Enterprise financial services portal built with Next.js and Strapi CMS',
    description: 'Financial services portal built with Next.js and Strapi.',
    role: 'Frontend Engineer — Built dynamic research report catalog, market indices integrations, and Strapi CMS content pipelines.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Strapi'],
    highlights: [
      'Next.js',
      'React',
      'TypeScript',
      'Strapi',
      'Market data feeds',
      'Financial services',
    ],
    overview:
      'SMIFS is an enterprise financial services portal providing institutional and retail investors with real-time market insights, equity research reports, wealth management services, and regulatory disclosures powered by a headless Strapi CMS.',
    problem:
      'Financial portals require frequent updates of market research, compliance documents, and index feeds; traditional monolithic CMS systems were sluggish to update and failed to deliver fast mobile page speeds.',
    technicalArchitecture: [
      'Next.js App Router providing Static Site Generation (SSG) with On-Demand Incremental Static Regeneration (ISR).',
      'Headless Strapi CMS integration via secure GraphQL/REST endpoints for research publications and regulatory filings.',
      'Real-time financial market tickers and indices data integration.',
      'Strict TypeScript typings mirroring financial schemas, report categories, and advisory offerings.',
    ],
    keyFeatures: [
      'Institutional equity research library with faceted filtering by sector, market cap, and report date.',
      'Real-time market tickers displaying benchmark indices (NIFTY, SENSEX) and sectoral movements.',
      'Dynamic content management powered by Strapi with structured publishing approval workflows.',
      'Mobile-optimized financial calculators and wealth advisory inquiry portals.',
    ],
    engineeringChallenges: [
      'Structuring headless Strapi content schemas to support complex financial tables and downloadable PDF disclosures.',
      'Implementing ISR webhooks so new analyst reports publish instantaneously to the edge without rebuilding the full site.',
      'Ensuring strict financial compliance presentation standards and accessible data tables.',
    ],
    performanceConsiderations: [
      'Edge caching of static pages with on-demand cache revalidation triggered by Strapi webhooks.',
      'Lazy loading of market charts and dynamic financial calculator modules.',
      'Zero layout shift (CLS < 0.01) achieved through reserved bounding boxes on market ticker widgets.',
    ],
    results: [
      'Accelerated analyst publishing workflow from hours to seconds using Strapi webhooks and Next.js ISR.',
      'Delivered lightning-fast page loads and high SEO visibility for investment research publications.',
    ],
    liveDemoUrl: 'https://smifs.com/',
    thumbnail: '/assets/images/smifs.png',
    mockupType: 'smifs',
  },
];

export const ENGINEERING_HIGHLIGHTS = [
  {
    id: 'performance',
    title: 'Performance',
    stat: 'Optimized',
    statLabel: 'Bundle & Vitals',
    description: 'Code splitting, dynamic imports, lazy loading, image optimization and Core Web Vitals.',
  },
  {
    id: 'architecture',
    title: 'Architecture',
    stat: 'Clean',
    statLabel: 'Design & Flow',
    description: 'Scalable component architecture and maintainable frontend patterns.',
  },
  {
    id: 'reusability',
    title: 'Reusable Components',
    stat: 'Modular',
    statLabel: 'Shared Systems',
    description: 'Shared UI patterns and design tokens that minimize redundant application logic.',
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    stat: 'WCAG',
    statLabel: 'Standards Compliant',
    description: 'Semantic HTML, keyboard navigation and accessible UI patterns.',
  },
];

export const EXPERIENCE_LIST: Experience[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'Noesis Knowledge Solutions Pvt. Ltd.',
    period: '2021 – 2026',
    location: 'Full-time',
    bullets: [
      'Architected and developed production web applications using React, Next.js, and TypeScript.',
      'Developed modular, reusable frontend component systems and responsive interfaces across devices.',
      'Designed scalable state-management architectures using Redux Toolkit, React Context API, and TanStack React Query for efficient data synchronization.',
      'Integrated REST APIs and third-party services with structured data handling and reliable frontend integration.',
      'Implemented authentication flows using NextAuth.js, Firebase Authentication, JWT, OAuth, OTP, and role-based access control (RBAC).',
      'Integrated production payment gateways including Razorpay and Dibsy for secure payment processing.',
      'Optimized frontend performance through SSR, ISR, route-based code splitting, lazy loading, dynamic imports, image optimization, caching, and API debouncing to improve Core Web Vitals.',
      'Built AI-powered experiences including AI agents, RAG workflows, streaming interfaces, real-time chat widgets, and interactive application features.',
    ],
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'REST APIs',
      'Authentication',
      'Payment Integrations',
      'Performance Optimization',
      'AI-Powered Apps',
    ],
  },
];

export const CAPABILITY_TAGS = [
  'AI-Powered Applications',
  'E-commerce Experiences',
  'SaaS Platforms',
  'Real-Time Applications',
  'Interactive 3D Experiences',
  'Payment Workflows',
  'Authentication & RBAC',
  'Performance Optimization',
  'Responsive Web Applications',
  'Embeddable Widgets',
  'Analytics & Tracking',
];

export const SKILL_CATEGORIES: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'State & Data',
    skills: ['Redux', 'Redux Toolkit', 'Context API', 'TanStack Query'],
  },
  {
    title: 'UI & Styling',
    skills: ['Tailwind CSS', 'SASS', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'API & Integration',
    skills: ['REST APIs', 'Firebase', 'WebSockets', 'MySQL', 'Strapi'],
  },
  {
    title: 'Build & Testing',
    skills: ['Webpack', 'Jest', 'npm', 'Git'],
  },
  {
    title: 'AI-Assisted Development',
    description: 'Productivity acceleration tools',
    skills: ['Cursor', 'Claude', 'ChatGPT', 'OpenAI Codex'],
  },
];
