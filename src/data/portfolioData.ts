import { Project, Experience, SkillGroup } from '../types';

export const PERSONAL_INFO = {
  name: 'Sushant Kulkarni', role: 'Senior Frontend Developer', experienceYears: '4.9 years of experience',
  headline: 'I build React and Next.js applications, from live voice chat and AI agent workspaces to interactive jewellery storefronts.',
  coreTech: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Redux Toolkit'], email: 'sushantgk11@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sushant-kulkarni-68a026206', location: 'India',
  about: 'Frontend developer building complex web applications, real-time user experiences, interactive product interfaces, and AI-powered frontend experiences across SaaS and e-commerce.',
};

export const TECH_STRIP = ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs', 'WebSockets'];

export const PROJECTS: Project[] = [
  {
    "id": "ai-chat-widget",
    "name": "AI Chat Widget",
    "category": "Conversational AI",
    "ownership": "Independent Frontend Development",
    "featured": true,
    "thumbnail": "/assets/images/widget-ui.png",
    "imageAlt": "Embedded chat showing a product-discovery conversation above the message composer",
    "imageWidth": 1911,
    "imageHeight": 863,
    "liveDemoUrl": "https://widget.brainstormer.io/?bot=30520d55_851a_46b3_b72c_255c2a989841&voiceMode=true",
    "description": "A visitor can type, speak, or attach a file to a conversation embedded on another website.",
    "title": "Engineering an embeddable real-time AI chat experience",
    "responsibilities": "I built the React interface, including the iframe integration, streamed messages, microphone capture, and interruptible playback.",
    "technologies": [
      "React",
      "JavaScript",
      "WebSockets",
      "Audio Worklets",
      "i18next"
    ],
    "problem": "A visitor needs to be able to speak while the assistant is talking and move between text and voice in the same conversation.",
    "architecture": "The iframe loads the bot’s theme, language, and conversation settings over HTTP. It uses postMessage to communicate readiness to the host page. A conversation-scoped WebSocket carries text chunks, voice frames, and playback events.",
    "highlights": [
      "Streamed text updates a single reply as it arrives.",
      "Speaking can interrupt an answer already playing."
    ],
    "challenge": "Interrupting playback",
    "solution": "A worklet measures ambient microphone levels before the call. During playback, the client compares incoming levels with the calibrated threshold so the visitor can interrupt. Another worklet converts microphone samples to PCM for transmission.",
    "reliability": "While a reply streams, each chunk extends the active assistant message and the composer prevents a second send. A heartbeat and automatic reconnect support the connection lifecycle. Before upload, the client checks file count, size, and type. Removing an attachment releases its temporary preview URL.",
    "interfaceNotes": "The composer supports Enter to send and Shift+Enter for a new line. Visitors can change the language and dismiss an image preview with Escape. They can export a single message or the entire conversation as a PDF."
  },
  {
    "id": "ring-builder",
    "name": "Jewelrat 3D Ring Builder",
    "category": "Product configuration",
    "ownership": "Independent Frontend Development",
    "featured": true,
    "thumbnail": "/assets/images/jewelrat.png",
    "imageAlt": "Jewelrat discovery screen with a diamond preview and entry points to the ring-building journey",
    "imageWidth": 1907,
    "imageHeight": 902,
    "liveDemoUrl": "https://app.jewelrat.com/",
    "description": "Shoppers choose a setting, change materials, and see their selections on an iJewel ring model.",
    "title": "Keeping a ring configuration in sync with a 3D viewer",
    "responsibilities": "I built the TypeScript frontend for the guided journeys, product controls, iJewel integration, retailer branding, and conversational design flow.",
    "technologies": [
      "React",
      "TypeScript",
      "iJewel",
      "WebSockets",
      "Server-Sent Events"
    ],
    "problem": "Shoppers can enter through different journeys. The selected ring and its materials need to carry through to the configurator and saved design.",
    "architecture": "React Context holds journey selections. Local storage and server-saved journey data support resumption. The configurator maps product labels to material groups in the external iJewel viewer. Chat events and asynchronous design tasks feed updates back into the interface.",
    "highlights": [
      "Product selections update the corresponding viewer materials.",
      "Saved journey state restores selections across screens."
    ],
    "challenge": "Capturing a design",
    "solution": "A shopper can save an image of the configured ring. The capture flow tries the viewer and canvas before falling back when browser capture is unavailable.",
    "reliability": "The viewer integration accounts for overlapping asynchronous updates when a shopper changes materials quickly. WebSockets carry chat messages, task polling tracks pending generated images, and a separate server-sent event stream delivers notifications.",
    "interfaceNotes": "Responsive controls keep material choices and the design preview accessible across screen sizes. Retailer configuration supplies brand colours at runtime."
  },
  {
    "id": "brainstormer-creator-studio",
    "name": "Brainstormer Creator / Studio",
    "category": "AI agent workspace",
    "ownership": "Collaborative Frontend Development",
    "featured": true,
    "thumbnail": "/assets/images/creator.png",
    "imageAlt": "Studio agent editor with knowledge-base navigation and prompt settings",
    "imageWidth": 1888,
    "imageHeight": 861,
    "liveDemoUrl": "https://creator.brainstormer.io/",
    "description": "Creators configure an agent, add knowledge sources, and preview the widget before publishing.",
    "title": "From knowledge upload to published agent",
    "responsibilities": "I worked on agent creation and editing, the knowledge queue, Instagram and website ingestion, publishing, and widget preview. I built responsive interfaces in dark and light themes.",
    "technologies": [
      "Next.js",
      "JavaScript",
      "Firestore",
      "React"
    ],
    "problem": "An uploaded file can still be processing. Creators need to see which sources are ready before testing or publishing their agent.",
    "architecture": "The Next.js dashboard separates agent settings from knowledge management. A sequential upload queue sends documents, while Firestore listeners receive processing updates. The preview embeds the configured chat widget in an iframe.",
    "highlights": [
      "A queue tracks uploads and processing feedback.",
      "Creators can ingest documents, Instagram content, and websites."
    ],
    "challenge": "Showing progress after upload",
    "solution": "Finishing a file transfer and finishing knowledge processing are separate events. The queue advances through files while the interface continues to display processing status and retry actions.",
    "reliability": "A ref keeps the current queue available to asynchronous handlers. Status listeners update the file list as processing completes.",
    "interfaceNotes": "Agent forms, source lists, and previews adapt to smaller screens. Light and dark themes carry through the editing workflow."
  },
  {
    "id": "eaa-donation",
    "name": "EAA Donation",
    "category": "Charitable giving",
    "ownership": "Independent Frontend Development",
    "featured": false,
    "thumbnail": "/assets/images/donation.png",
    "imageAlt": "English donation form with giving frequency, currency, and amount controls",
    "imageWidth": 1882,
    "imageHeight": 863,
    "liveDemoUrl": "https://donate.educationaboveall.org/",
    "description": "Donors browse campaigns and enter donation details in English or Arabic.",
    "title": "Developing a bilingual donation platform",
    "responsibilities": "I built the public donation frontend, including bilingual campaign pages, donation forms, and donor-facing account screens.",
    "technologies": [
      "Next.js",
      "JavaScript",
      "i18next",
      "Drupal"
    ],
    "problem": "A donor needs to understand the campaign, amount, and form feedback in either reading direction.",
    "architecture": "Next.js pages combine Drupal content with localized React components. Language context drives translations and layout direction. Authentication-related screens lead into donor dashboards.",
    "highlights": [
      "English and Arabic share the same donation journey.",
      "Campaign pages present CMS-managed content."
    ],
    "challenge": "Switching reading direction",
    "solution": "Changing the interface language also changes layout direction. The forms and campaign components use the selected direction alongside translated labels.",
    "reliability": "Server pages fetch independent campaign content concurrently. Donation forms validate inputs and surface errors before submission.",
    "interfaceNotes": "English uses left-to-right layouts and Arabic uses right-to-left layouts across responsive donation and account interfaces."
  },
  {
    "id": "origem",
    "name": "Origem",
    "category": "E-commerce",
    "ownership": "Collaborative Frontend Development",
    "featured": false,
    "thumbnail": "/assets/images/origem.jpg",
    "imageAlt": "Origem wordmark on its jewellery storefront brand image",
    "imageWidth": 1200,
    "imageHeight": 630,
    "liveDemoUrl": "https://origemindia.com/",
    "description": "Shoppers browse lab-grown diamond jewellery, compare variants, and carry their selection into checkout.",
    "title": "Taking a jewellery variant from catalogue to checkout",
    "responsibilities": "I contributed to catalogue filtering, product details, cart and wishlist interactions, OTP sign-in, and checkout UI with Razorpay.",
    "technologies": [
      "Next.js",
      "JavaScript",
      "React",
      "Razorpay"
    ],
    "problem": "Filters narrow a large catalogue, but the product a shopper chooses must stay consistent from the listing through checkout.",
    "architecture": "Next.js server-renders catalogue and product routes from API data so their content is available to search engines. Client components handle variant selection and filter changes. Shared context connects sign-in, cart, and wishlist actions before the checkout interface opens Razorpay.",
    "highlights": [
      "Variant selection resolves the active product SKU.",
      "Wishlist actions update immediately and can roll back."
    ],
    "challenge": "Keeping saved items consistent",
    "solution": "The wishlist updates when a shopper presses save. If the request fails, the interface rolls back the optimistic change so it reflects the stored list.",
    "reliability": "Intersection Observer triggers additional catalogue pages as the shopper scrolls. Next.js images and dynamically loaded components limit initial page work.",
    "interfaceNotes": "Responsive product galleries and variant controls let shoppers inspect a product and change its configuration on smaller screens."
  },
  {
    "id": "smifs",
    "name": "SMIFS",
    "category": "Financial Services",
    "ownership": "Collaborative Frontend Development",
    "featured": false,
    "thumbnail": "/assets/images/smifs.png",
    "imageAlt": "SMIFS homepage with investment services navigation and an account-opening action",
    "imageWidth": 1906,
    "imageHeight": 865,
    "liveDemoUrl": "https://smifs.com/",
    "description": "Investors explore products, preview research documents, and submit account-opening enquiries.",
    "title": "Making financial research available on the web",
    "responsibilities": "I contributed to product and research pages, account-opening forms, shared navigation, and SEO work on the financial-services site.",
    "technologies": [
      "Next.js",
      "JavaScript",
      "REST APIs",
      "React PDF"
    ],
    "problem": "Readers need to inspect research and account documents while editors continue to update the underlying content.",
    "architecture": "Next.js dynamic routes present server-rendered CMS content. Cached fetches support incremental revalidation, and the sitemap includes CMS-derived routes. Interactive forms and previews run in the browser.",
    "highlights": [
      "Research cards preview the first page of a PDF.",
      "Account forms accept supporting documents."
    ],
    "challenge": "Previewing a report inside a card",
    "solution": "PDF rendering needs browser APIs. A client-only dynamic import loads the preview, scales the first page to the card, and falls back to a visual placeholder on failure.",
    "reliability": "Limiting the preview to one page avoids rendering an entire report inline. Cache revalidation lets CMS updates reach readers between builds.",
    "interfaceNotes": "The site provides mobile navigation, descriptive labels on selected controls, and visible submission feedback on enquiry and account forms."
  }
];

export const ENGINEERING_HIGHLIGHTS = [
  {
    "title": "Frontend Architecture",
    "projectId": "ai-chat-widget",
    "section": "architecture",
    "description": "How an iframe hosts a configurable React application on another site."
  },
  {
    "title": "Real-Time Applications",
    "projectId": "brainstormer-creator-studio",
    "section": "implementation",
    "description": "How creators see processing updates after a knowledge upload finishes."
  },
  {
    "title": "Complex State Management",
    "projectId": "ring-builder",
    "section": "architecture",
    "description": "How a saved ring configuration survives a change of screen."
  },
  {
    "title": "Performance Engineering",
    "projectId": "smifs",
    "section": "implementation",
    "description": "How a research card previews a PDF without loading the whole report."
  },
  {
    "title": "Responsive and Accessible UI",
    "projectId": "eaa-donation",
    "section": "implementation",
    "description": "How changing languages also changes the reading direction of a donation form."
  },
  {
    "title": "API and Third-Party Integrations",
    "projectId": "origem",
    "section": "architecture",
    "description": "How product selection, customer state, and checkout work together."
  }
];

export const EXPERIENCE_LIST: Experience[] = [{
  role: 'Senior Frontend Developer',
  company: 'Noesis Knowledge Solutions Pvt. Ltd.',
  period: 'November 2021 – August 2026',
  location: 'Full-time',
  bullets: [
    'Independently built an embeddable chat frontend with streamed replies, browser microphone capture, and interruptible audio playback.',
    'Developed Jewelrat’s frontend, connecting product selections to the iJewel viewer and restoring saved configurations across shopping journeys.',
    'Built EAA Donation’s responsive English and Arabic campaign forms and donor screens, with layouts that switch reading direction.',
    'Contributed agent editing, knowledge-source uploads, Firestore processing feedback, publishing, and widget preview to Brainstormer Studio.',
    'Connected Origem’s product filters and variant selectors to catalogue APIs, and contributed OTP sign-in, cart, wishlist, and Razorpay checkout interfaces.',
    'Delivered research and account-opening interfaces with the SMIFS team, including on-demand first-page previews for PDF reports.',
  ],
  skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'REST APIs', 'WebSockets', 'Responsive UI'],
}];
export const CAPABILITY_TAGS = ['Frontend Architecture', 'Real-Time Applications', 'Interactive Product Interfaces', 'SaaS Platforms', 'E-commerce Experiences', 'CMS Integration', 'Payment-Related UI', 'Responsive Web Applications'];
export const SKILL_CATEGORIES: SkillGroup[] = [
  { title: 'Core Frontend', skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML', 'CSS'] },
  { title: 'State and Data', skills: ['Redux Toolkit', 'React Context', 'TanStack Query', 'REST APIs', 'WebSockets'] },
  { title: 'UI Engineering', skills: ['Tailwind CSS', 'Sass', 'Responsive Design', 'Component Architecture'] },
  { title: 'Platforms and Integrations', skills: ['Firebase and Firestore', 'CMS integrations', 'Payment gateway integrations', 'iJewel viewer integration'] },
  { title: 'Testing and Tooling', skills: ['Git', 'Build tooling'] },
  { title: 'AI-Assisted Development', description: 'Productivity tools', skills: ['Cursor', 'Claude', 'ChatGPT', 'OpenAI Codex'] },
];
