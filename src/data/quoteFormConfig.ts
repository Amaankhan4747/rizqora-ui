/**
 * Service-Specific Form Configurations for Rizqoraa Solutions Quote Flow
 * Clean, enterprise-grade specifications for Web Development, App Development,
 * Translation, Localization, MTPE, LQA, AI Data Annotation, and Linguistic Services.
 * (No hardcoded prices or formulas - requirement-driven quote request architecture).
 */

export interface OptionItem {
  id: string;
  name: string;
  desc?: string;
  popular?: boolean;
}

// ----------------------------------------------------
// 1. WEB DEVELOPMENT CONFIGURATION
// ----------------------------------------------------
export const WEB_DEV_OPTIONS = {
  projectTypes: [
    {
      id: 'custom-web-app',
      name: 'Custom Web App / SaaS Portal',
      desc: 'Interactive dashboards, client portals, SaaS workflows & cloud apps',
      popular: true,
    },
    {
      id: 'enterprise-corporate',
      name: 'Corporate Enterprise Platform',
      desc: 'High-performance global corporate presence, lead engine & CMS',
    },
    {
      id: 'ecommerce-platform',
      name: 'E-Commerce & Marketplace',
      desc: 'Product catalogs, secure checkout carts, multi-vendor & payment gateways',
    },
    {
      id: 'landing-mvp',
      name: 'High-Converting Landing / MVP',
      desc: 'Rapid-launch single-page architecture optimized for conversions & SEO',
    },
  ],

  frontendStacks: [
    { id: 'react', name: 'React.js', desc: 'Component-driven, rich SPA interactivity', popular: true },
    { id: 'nextjs', name: 'Next.js (SSR / SEO)', desc: 'Server-side rendered, lightning speed & SEO', popular: true },
    { id: 'vue', name: 'Vue.js / Nuxt', desc: 'Progressive, lightweight, elegant state' },
    { id: 'angular', name: 'Angular Enterprise', desc: 'Strict TypeScript enterprise architecture' },
    { id: 'tailwind', name: 'HTML5 & Tailwind CSS', desc: 'Ultra-fast static or JAMstack setup' },
  ],

  backendStacks: [
    {
      id: 'nodejs',
      name: 'Node.js / Express',
      desc: 'Fast, asynchronous event-driven JavaScript microservices',
      popular: true,
    },
    {
      id: 'php-laravel',
      name: 'PHP / Laravel',
      desc: 'Proven MVC architecture, rapid ORM & robust enterprise tooling',
      popular: true,
    },
    {
      id: 'python',
      name: 'Python (Django / FastAPI)',
      desc: 'AI-ready, robust data validation & high-security REST APIs',
    },
    {
      id: 'java',
      name: 'Java (Spring Boot)',
      desc: 'Enterprise multi-threaded transaction security & scalability',
    },
    {
      id: 'golang',
      name: 'Go (Golang)',
      desc: 'High-concurrency microservices with minimal cloud RAM footprint',
    },
  ],

  databases: [
    { id: 'mysql', name: 'MySQL Database', desc: 'Classic relational ACID compliance', popular: true },
    { id: 'postgresql', name: 'PostgreSQL', desc: 'Enterprise relational integrity & JSONB', popular: true },
    { id: 'mongodb', name: 'MongoDB (NoSQL)', desc: 'Document store for agile scalable schemas' },
    { id: 'sqlserver', name: 'Microsoft SQL Server', desc: 'Corporate enterprise database infrastructure' },
    { id: 'firebase-supabase', name: 'Firebase / Supabase', desc: 'Realtime database with instant websocket sync' },
  ],

  pageScales: [
    { id: '1-5', label: '1–5 Pages (Landing / MVP)', desc: 'Core presentation & lead capture' },
    { id: '5-15', label: '5–15 Pages / Modules', desc: 'Standard business or mid-sized web app', popular: true },
    { id: '15-30', label: '15–30 Pages / Modules', desc: 'Multi-tiered portal or catalog' },
    { id: '30-plus', label: '30+ Enterprise Modules', desc: 'Complex SaaS or deep enterprise suite' },
  ],

  integrations: [
    { id: 'auth-roles', name: 'Role-Based Authentication (RBAC)' },
    { id: 'payment-gateway', name: 'Payment Gateway (Razorpay/Stripe)' },
    { id: 'multilingual-i18n', name: 'Multilingual i18n Localization' },
    { id: 'rest-graphql', name: 'REST & GraphQL API Endpoints' },
    { id: 'cms-admin', name: 'Custom CMS Admin Dashboard' },
    { id: 'cloud-devops', name: 'Cloud CI/CD & AWS/Vercel Setup' },
    { id: 'seo-analytics', name: 'Advanced SEO & Analytics Integration' },
    { id: 'crm-erp', name: 'Third-Party CRM / ERP Sync' },
  ],

  timelines: [
    { id: 'standard', name: 'Standard Sprint (4–8 Weeks)', desc: 'Agile 2-week sprint cycles with continuous staging reviews' },
    { id: 'fasttrack', name: 'Fast-Track / Urgent (2–4 Weeks)', desc: 'Accelerated engineering queue with priority delivery' },
    { id: 'planning', name: 'Flexible / Discovery Phase', desc: 'Initial scoping, wireframing & architecture planning' },
  ],
};

// ----------------------------------------------------
// 2. MOBILE APP DEVELOPMENT CONFIGURATION
// ----------------------------------------------------
export const APP_DEV_OPTIONS = {
  platforms: [
    {
      id: 'cross-platform',
      name: 'Cross-Platform (Flutter / React Native)',
      desc: 'Single shared codebase for iOS & Android with native 60fps performance (Most Popular)',
      popular: true,
    },
    {
      id: 'android',
      name: 'Native Android (Kotlin / Jetpack)',
      desc: 'Dedicated native Android app engineered for Google Play Store ecosystems',
    },
    {
      id: 'ios',
      name: 'Native iOS (Swift / SwiftUI)',
      desc: 'Dedicated native Apple iOS app optimized for iPhones & iPads',
    },
    {
      id: 'both-native',
      name: 'Dual Native (Dedicated Swift + Kotlin)',
      desc: 'Two completely distinct native codebases for ultimate platform power',
    },
  ],

  appTypes: [
    { id: 'b2b-enterprise', name: 'B2B Enterprise & Field Workforce', popular: true },
    { id: 'ecommerce', name: 'E-Commerce / Delivery / Marketplace' },
    { id: 'ondemand-service', name: 'On-Demand Service & Booking' },
    { id: 'fintech-health', name: 'FinTech / HealthTech (Secure & Encrypted)' },
    { id: 'social-community', name: 'Community, Chat & Social Media' },
    { id: 'saas-companion', name: 'Mobile Companion for Web SaaS' },
  ],

  screenScales: [
    { id: '5-10', label: '5–10 App Screens', desc: 'Lean MVP or targeted utility app' },
    { id: '10-20', label: '10–20 App Screens', desc: 'Standard consumer or workflow application', popular: true },
    { id: '20-35', label: '20–35 Complex Screens', desc: 'Multi-role application with rich workflows' },
    { id: '35-plus', label: '35+ Enterprise Screens', desc: 'Large-scale mobile ecosystem' },
  ],

  backendOptions: [
    {
      id: 'cloud-serverless',
      name: 'Turn-Key Cloud Backend (Node.js / Firebase / Supabase)',
      desc: 'Complete cloud API, push notifications, authentication & database setup',
      popular: true,
    },
    {
      id: 'connect-existing',
      name: 'Connect to Existing Client REST / GraphQL API',
      desc: 'Our mobile engineers interface directly with your internal backend team',
    },
    {
      id: 'offline-first',
      name: 'Offline-First SQLite / Local Engine',
      desc: 'Full offline local caching with smart background cloud synchronization',
    },
  ],

  features: [
    { id: 'biometric-otp', name: 'Biometric Login & SMS / WhatsApp OTP' },
    { id: 'push-notifications', name: 'Push Notifications (FCM / OneSignal)' },
    { id: 'in-app-payments', name: 'In-App Purchases & Payment Gateway' },
    { id: 'maps-geo', name: 'Live GPS Tracking & Google Maps SDK' },
    { id: 'chat-realtime', name: 'Real-Time In-App Chat & Media Uploads' },
    { id: 'multilingual-app', name: 'Multilingual Language Switcher (i18n)' },
    { id: 'camera-qr', name: 'Camera Scanner / QR & Document Upload' },
    { id: 'analytics-crash', name: 'Crashlytics & User Telemetry Analytics' },
  ],

  timelines: [
    { id: 'standard', name: 'Standard Milestone Delivery (6–10 Weeks)', desc: 'Agile sprints with weekly TestFlight & APK builds' },
    { id: 'fasttrack', name: 'Fast-Track MVP Sprint (3–6 Weeks)', desc: 'Priority engineering queue for accelerated store submission' },
    { id: 'flexible', name: 'Roadmap / Flexible Timeline', desc: 'Phased rollout with proof of concept first' },
  ],
};

// ----------------------------------------------------
// 3. TRANSLATION & LOCALIZATION CONFIGURATION
// ----------------------------------------------------
export const TRANSLATION_OPTIONS = {
  contentTypes: [
    { id: 'corporate', name: 'Corporate & Business Documents', desc: 'Proposals, HR policies, annual reports, communications', popular: true },
    { id: 'legal', name: 'Legal, Contracts & Compliance', desc: 'NDA agreements, court filings, terms of service, IP patents', popular: true },
    { id: 'technical', name: 'Technical & Engineering Manuals', desc: 'API docs, manufacturing SOPs, user manuals, schematics' },
    { id: 'medical', name: 'Medical, Pharma & Healthcare', desc: 'Clinical trials, IFUs, regulatory filings, patient records' },
    { id: 'financial', name: 'Banking, FinTech & Audit', desc: 'Audited accounts, tax documents, investor decks, disclosures' },
    { id: 'marketing', name: 'Marketing & Digital Content', desc: 'Ad campaigns, PR press releases, brochures, social copy' },
  ],

  volumePresets: [
    { id: 'under-1k', label: '< 1,000 words (Quick Certificate / Memo)' },
    { id: '2.5k', label: '~2,500 words (Standard Document / Contract)' },
    { id: '5k', label: '~5,000 words (Multi-Page Report / Booklet)', popular: true },
    { id: '10k', label: '~10,000 words (Manual / Comprehensive Policy)' },
    { id: '25k', label: '~25,000 words (Large Enterprise Corpus)' },
    { id: '50k-plus', label: '50,000+ words (Ongoing Enterprise Localization)' },
  ],

  turnarounds: [
    { id: 'standard', name: 'Standard Delivery SLA', desc: 'Rigorous multi-stage translation and editor review' },
    { id: 'express', name: 'Express / Priority (24–48 Hours)', desc: 'Dedicated linguist squad working in accelerated parallel shifts' },
  ],
};

// ----------------------------------------------------
// 4. LOCALIZATION CONFIGURATION
// ----------------------------------------------------
export const LOCALIZATION_OPTIONS = {
  productTypes: [
    { id: 'website-portal', name: 'Global Website & Corporate Portal', popular: true },
    { id: 'mobile-app', name: 'Mobile App (iOS & Android Store Ready)', popular: true },
    { id: 'saas-software', name: 'SaaS Software & Web App UI Strings' },
    { id: 'ecommerce-catalog', name: 'E-Commerce Store & Product Catalogs' },
    { id: 'games-interactive', name: 'Video Games & Interactive Multimedia' },
    { id: 'elearning', name: 'E-Learning & Training Modules' },
  ],

  scopes: [
    { id: 'full-i18n', name: 'Full UI String Localization & Pseudo-Localization', popular: true },
    { id: 'transcreation', name: 'Creative Transcreation & Cultural Nuance Tuning', popular: true },
    { id: 'media-audio', name: 'Graphics, Audio & Video Asset Localization' },
    { id: 'rtl-bidi', name: 'RTL / Bidirectional Layout Engineering (Arabic/Hebrew)' },
    { id: 'legal-compliance', name: 'Local Legal & Regulatory Compliance Check' },
  ],

  timelines: [
    { id: 'standard', name: 'Standard Agile Sprint', desc: 'Integrated with continuous developer sprints' },
    { id: 'accelerated', name: 'Accelerated Release Cycle', desc: 'Targeted for imminent product release or store rollout' },
  ],
};

// ----------------------------------------------------
// 5. MTPE (MACHINE TRANSLATION POST-EDITING) CONFIGURATION
// ----------------------------------------------------
export const MTPE_OPTIONS = {
  qualityLevels: [
    {
      id: 'full-mtpe',
      name: 'Full MTPE (Publication Quality)',
      desc: 'Comprehensive post-editing indistinguishable from human translation. Grammatically flawless, culturally adapted & stylistically polished.',
      popular: true,
    },
    {
      id: 'light-mtpe',
      name: 'Light MTPE (Comprehension & Speed)',
      desc: 'Rapid post-editing ensuring accurate facts, terminological correctness, and no omissions. Ideal for internal documentation & support.',
    },
  ],

  domains: [
    { id: 'ecommerce-support', name: 'E-Commerce Catalogs & Customer Support Knowledge Base', popular: true },
    { id: 'technical-sops', name: 'Technical Manuals & Standard Operating Procedures' },
    { id: 'corporate-internal', name: 'Internal Corporate Emails & Communications' },
    { id: 'legal-discovery', name: 'Legal E-Discovery & Regulatory Investigation' },
  ],

  timelines: [
    { id: 'standard', name: 'Standard High-Speed Delivery' },
    { id: 'express', name: 'Same-Day / Overnight MTPE Priority' },
  ],
};

// ----------------------------------------------------
// 6. LQA (LINGUISTIC QUALITY ASSURANCE) CONFIGURATION
// ----------------------------------------------------
export const LQA_OPTIONS = {
  qaScopes: [
    { id: 'in-context-ui', name: 'In-Context UI & Layout Linguistic Testing', desc: 'Detect truncation, text overlap, RTL alignment & line breaks', popular: true },
    { id: 'terminology-audit', name: 'Glossary & Style Guide Compliance Audit', desc: 'Verify adherence to official brand voice & approved terms' },
    { id: 'functional-locale', name: 'Locale Formatting (Dates, Currencies, Numerals)', desc: 'Ensure correct regional formatting and currency signs' },
    { id: 'mqm-scoring', name: 'MQM / DQF Independent Quality Scoring', desc: 'Quantitative error score rating per 1,000 words' },
  ],

  platforms: [
    { id: 'web', name: 'Web Browsers (Chrome / Safari / Firefox)' },
    { id: 'ios-android', name: 'Mobile Native (iOS & Android TestFlight / APK)' },
    { id: 'pdf-dtp', name: 'Print & Digital PDF Documents' },
    { id: 'desktop', name: 'Desktop OS (Windows / macOS)' },
  ],

  timelines: [
    { id: 'standard', name: 'Standard QA Sprint (3–5 Days)' },
    { id: 'urgent-qa', name: 'Emergency Pre-Launch QA (24–48 Hours)' },
  ],
};

// ----------------------------------------------------
// 7. AI DATA ANNOTATION CONFIGURATION
// ----------------------------------------------------
export const AI_DATA_OPTIONS = {
  modalities: [
    { id: 'text', name: 'Text & NLP Corpus', desc: 'Sentiment, intent, classification & LLM prompt-response pairs', popular: true },
    { id: 'audio', name: 'Speech & Audio', desc: 'Audio transcription, phoneme tagging & speaker diarization' },
    { id: 'vision', name: 'Computer Vision & Images', desc: 'Bounding boxes, polygon segmentation & keypoint labeling' },
    { id: 'multimodal', name: 'Multimodal / Video', desc: 'Video event tracking, timestamped captions & action tagging' },
  ],

  tasks: [
    { id: 'intent-sentiment', name: 'Intent Classification & Sentiment Analysis', popular: true },
    { id: 'ner-entity', name: 'Named Entity Recognition (NER) & PII Masking' },
    { id: 'rlhf-alignment', name: 'RLHF / Human Preference Alignment' },
    { id: 'bbox-segmentation', name: 'Object Detection & Polygon Segmentation' },
    { id: 'speech-diarization', name: 'Acoustic Model Training & Diarization' },
  ],

  volumePresets: [
    { id: '5k', label: '5,000 items (Proof of Concept Dataset)' },
    { id: '10k', label: '10,000 items (Validation Benchmark)', popular: true },
    { id: '25k', label: '25,000 items (Model Fine-Tuning Corpus)' },
    { id: '50k', label: '50,000 items (Enterprise Production Dataset)' },
    { id: '100k-plus', label: '100,000+ items (Large-Scale Foundation Training)' },
  ],

  timelines: [
    { id: 'standard', name: 'Standard Data Pipeline' },
    { id: 'express', name: 'Accelerated Parallel Shifts' },
  ],
};

// Helper: Determine service mode from service ID or Name
export type ServiceFormMode =
  | 'web-development'
  | 'app-development'
  | 'translation'
  | 'localization'
  | 'mtpe'
  | 'lqa'
  | 'ai-data-annotation'
  | 'generic-linguistic';

export const getServiceFormMode = (serviceNameOrId: string): ServiceFormMode => {
  const s = serviceNameOrId.toLowerCase();
  if (s.includes('web-development') || s.includes('web development')) return 'web-development';
  if (s.includes('app-development') || s.includes('app development') || s.includes('mobile')) return 'app-development';
  if (s.includes('mtpe') || s.includes('machine translation')) return 'mtpe';
  if (s.includes('lqa') || s.includes('linguistic quality') || s.includes('quality assurance')) return 'lqa';
  if (s.includes('ai-data') || s.includes('ai data') || s.includes('annotation')) return 'ai-data-annotation';
  if (s.includes('localization')) return 'localization';
  if (s.includes('translation')) return 'translation';
  return 'generic-linguistic';
};
