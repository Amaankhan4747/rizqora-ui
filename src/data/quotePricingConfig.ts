/**
 * Configurable Pricing & Architecture Models for Rizqoraa Enterprise Quote Flow
 * Supports Web Development, Mobile App Development, AI Data Annotation, and Linguistic Services.
 */

export interface PricingOption {
  id: string;
  name: string;
  desc?: string;
  costDelta?: number;
  basePrice?: number;
  multiplier?: number;
  price?: number;
  weeks?: string;
  popular?: boolean;
}

// ----------------------------------------------------
// 1. WEB DEVELOPMENT CONFIGURATION
// ----------------------------------------------------
export const WEB_DEV_CONFIG = {
  projectTypes: [
    {
      id: 'custom-web-app',
      name: 'Custom Web App / SaaS Portal',
      desc: 'Interactive dashboards, client portals, SaaS architectures & workflows',
      basePrice: 50000,
      popular: true,
    },
    {
      id: 'enterprise-corporate',
      name: 'Enterprise Corporate Platform',
      desc: 'High-performance global corporate presence, lead engine & CMS',
      basePrice: 42000,
    },
    {
      id: 'ecommerce-platform',
      name: 'E-Commerce & Marketplace',
      desc: 'Product catalogs, checkout carts, order management & payment gateways',
      basePrice: 65000,
    },
    {
      id: 'landing-mvp',
      name: 'High-Converting Landing / MVP',
      desc: 'Rapid-launch single-page architecture optimized for conversions & SEO',
      basePrice: 28000,
    },
  ],

  frontendStacks: [
    { id: 'react', name: 'React.js', desc: 'Component-driven, rich SPA interactivity', multiplier: 1.0, popular: true },
    { id: 'nextjs', name: 'Next.js (SSR / SEO)', desc: 'Server-side rendered, lightning speed & SEO', multiplier: 1.08, popular: true },
    { id: 'vue', name: 'Vue.js / Nuxt', desc: 'Progressive, lightweight, elegant state', multiplier: 1.02 },
    { id: 'angular', name: 'Angular Enterprise', desc: 'Strict TypeScript enterprise architecture', multiplier: 1.2 },
    { id: 'tailwind', name: 'HTML5 & Tailwind CSS', desc: 'Ultra-fast static or JAMstack setup', multiplier: 0.95 },
  ],

  backendStacks: [
    {
      id: 'nodejs',
      name: 'Node.js / Express (MERN)',
      desc: 'Fast, asynchronous event-driven JavaScript microservices',
      costDelta: 0, // MERN baseline: ₹50,000 - ₹60,000 range
      popular: true,
    },
    {
      id: 'python',
      name: 'Python (Django / FastAPI)',
      desc: 'AI-ready, robust data validation & high-security REST APIs',
      costDelta: 38000, // Python + DB: ₹90,000 - ₹1,00,000 range
      popular: true,
    },
    {
      id: 'java',
      name: 'Java (Spring Boot)',
      desc: 'Enterprise multi-threaded transaction security & scalability',
      costDelta: 45000, // Java + DB: ₹95,000 - ₹1,10,000 range
    },
    {
      id: 'php-laravel',
      name: 'PHP / Laravel',
      desc: 'Proven MVC architecture, rapid ORM & robust tooling',
      costDelta: 6000,
    },
    {
      id: 'golang',
      name: 'Go (Golang)',
      desc: 'High-concurrency microservices with minimal cloud RAM footprint',
      costDelta: 42000,
    },
  ],

  databases: [
    { id: 'mongodb', name: 'MongoDB (NoSQL)', desc: 'Document store for agile schemas', costDelta: 0 },
    { id: 'mysql', name: 'MySQL Database', desc: 'Classic relational ACID compliance', costDelta: 5000 },
    { id: 'postgresql', name: 'PostgreSQL (Advanced SQL)', desc: 'JSONB, geo-queries & enterprise relational integrity', costDelta: 6000, popular: true },
    { id: 'firebase-supabase', name: 'Firebase / Supabase (Realtime)', desc: 'Realtime database with instant websocket sync', costDelta: 4000 },
    { id: 'redis', name: 'Redis Cache + SQL', desc: 'Sub-millisecond latency in-memory caching', costDelta: 8000 },
  ],

  pageScales: [
    { id: '5-10', label: '5–10 Pages / Modules', multiplier: 1.0, weeks: '2–3 Weeks' },
    { id: '10-25', label: '10–25 Pages / Modules', multiplier: 1.25, weeks: '3–5 Weeks' },
    { id: '25-50', label: '25–50 Pages / Modules', multiplier: 1.55, weeks: '5–8 Weeks' },
    { id: '50-plus', label: '50+ Enterprise Modules', multiplier: 1.95, weeks: '8–12 Weeks' },
  ],

  integrations: [
    { id: 'auth-roles', name: 'Role-Based Authentication (RBAC)', price: 4000 },
    { id: 'payment-gateway', name: 'Payment Gateway (Razorpay/Stripe)', price: 5000 },
    { id: 'multilingual-i18n', name: 'Multilingual i18n Localization', price: 4500 },
    { id: 'rest-graphql', name: 'REST & GraphQL API Endpoints', price: 4000 },
    { id: 'cms-admin', name: 'Custom CMS Admin Dashboard', price: 6000 },
    { id: 'cloud-devops', name: 'Cloud CI/CD & AWS/Vercel Setup', price: 4500 },
  ],

  timelines: [
    { id: 'standard', name: 'Standard Sprint (Recommended)', multiplier: 1.0, desc: 'Agile 2-week sprint cycles with continuous staging reviews' },
    { id: 'express', name: 'Accelerated Fast-Track', multiplier: 1.2, desc: 'Dedicated dual-engineer team for 40% faster deployment' },
  ],
};

// ----------------------------------------------------
// 2. MOBILE APP DEVELOPMENT CONFIGURATION
// ----------------------------------------------------
export const APP_DEV_CONFIG = {
  platforms: [
    {
      id: 'cross-platform',
      name: 'Cross-Platform (Flutter / React Native)',
      desc: 'Single shared codebase for iOS & Android with native 60fps performance (Best Value)',
      basePrice: 95000,
      popular: true,
    },
    {
      id: 'android',
      name: 'Native Android (Kotlin / Jetpack)',
      desc: 'Dedicated native Android application built for Google Play Store ecosystems',
      basePrice: 65000,
    },
    {
      id: 'ios',
      name: 'Native iOS (Swift / SwiftUI)',
      desc: 'Dedicated native Apple iOS application optimized for iPhones & iPads',
      basePrice: 75000,
    },
    {
      id: 'both-native',
      name: 'Dual Native (Dedicated Swift + Kotlin)',
      desc: 'Two completely distinct native codebases for ultimate platform capabilities',
      basePrice: 145000,
    },
  ],

  appTypes: [
    { id: 'ecommerce', name: 'E-Commerce / Delivery / Marketplace', costDelta: 15000 },
    { id: 'b2b-enterprise', name: 'B2B Enterprise & Field Workforce', costDelta: 10000, popular: true },
    { id: 'ondemand-service', name: 'On-Demand Service & Booking', costDelta: 12000 },
    { id: 'fintech-health', name: 'FinTech / HealthTech (Encrypted)', costDelta: 25000 },
    { id: 'social-community', name: 'Community, Chat & Media App', costDelta: 18000 },
  ],

  screenScales: [
    { id: '5-10', label: '5–10 App Screens', multiplier: 1.0, weeks: '3–5 Weeks' },
    { id: '10-20', label: '10–20 App Screens', multiplier: 1.25, weeks: '5–8 Weeks' },
    { id: '20-35', label: '20–35 Complex Screens', multiplier: 1.55, weeks: '8–12 Weeks' },
    { id: '35-plus', label: '35+ Enterprise Screens', multiplier: 1.9, weeks: '12–16 Weeks' },
  ],

  backendOptions: [
    {
      id: 'cloud-serverless',
      name: 'Cloud Backend Included (Node.js / Firebase / Supabase)',
      desc: 'Complete turn-key cloud API, push services & database infrastructure setup',
      costDelta: 10000,
      popular: true,
    },
    {
      id: 'connect-existing',
      name: 'Connect to Client Existing REST / GraphQL API',
      desc: 'Our mobile team interfaces directly with your internal backend team',
      costDelta: 0,
    },
    {
      id: 'offline-first',
      name: 'Offline-First SQLite / WatermelonDB Local Engine',
      desc: 'Instant offline local caching & smart background cloud synchronization',
      costDelta: 16000,
    },
  ],

  features: [
    { id: 'biometric-otp', name: 'Biometric Login & SMS / WhatsApp OTP', price: 6000 },
    { id: 'push-notifications', name: 'Push Notifications (FCM / OneSignal)', price: 5000 },
    { id: 'in-app-payments', name: 'In-App Purchases & Payment Gateway', price: 8000 },
    { id: 'maps-geo', name: 'Live GPS Tracking & Google Maps SDK', price: 7500 },
    { id: 'chat-realtime', name: 'Real-Time In-App Chat & Media Uploads', price: 9000 },
    { id: 'multilingual-app', name: 'Multilingual Language Switcher (i18n)', price: 6000 },
  ],

  timelines: [
    { id: 'standard', name: 'Standard Milestone Delivery', multiplier: 1.0, desc: 'Agile sprints with weekly TestFlight & APK builds' },
    { id: 'fasttrack', name: 'Fast-Track MVP Sprint', multiplier: 1.2, desc: 'Priority engineering queue for accelerated store submission' },
  ],
};

// ----------------------------------------------------
// 3. AI DATA ANNOTATION CONFIGURATION
// ----------------------------------------------------
export const AI_DATA_CONFIG = {
  modalities: [
    { id: 'text', name: 'Text & NLP Corpus', baseRate: 2.2, desc: 'Sentiment, intent, classification & LLM prompt-response pairs' },
    { id: 'audio', name: 'Speech & Audio', baseRate: 3.5, desc: 'Audio transcription, phoneme tagging & speaker diarization' },
    { id: 'vision', name: 'Computer Vision & Images', baseRate: 4.0, desc: 'Bounding boxes, polygon segmentation & keypoint labeling' },
    { id: 'multimodal', name: 'Multimodal / Video', baseRate: 5.5, desc: 'Video event tracking, timestamped captions & action tagging' },
  ],

  annotationTasks: [
    { id: 'intent-sentiment', name: 'Intent Classification & Sentiment Analysis', multiplier: 1.0 },
    { id: 'ner-entity', name: 'Named Entity Recognition (NER) & PII Masking', multiplier: 1.2 },
    { id: 'rlhf-alignment', name: 'RLHF / Human Preference Alignment', multiplier: 1.35 },
    { id: 'bbox-segmentation', name: 'Object Detection & Polygon Segmentation', multiplier: 1.25 },
    { id: 'speech-diarization', name: 'Acoustic Model Training & Diarization', multiplier: 1.3 },
  ],

  qualityTiers: [
    { id: 'dual-pass', name: 'Dual-Pass Annotator + Senior Linguistic Review (99.2%+ Accuracy)', multiplier: 1.0 },
    { id: 'expert-domain', name: 'SME Certified Domain Review (Medical / Legal / Financial)', multiplier: 1.3 },
  ],

  volumePresets: [5000, 10000, 25000, 50000, 100000],
};

// ----------------------------------------------------
// 4. TRANSLATION & LINGUISTIC SERVICES CONFIGURATION
// ----------------------------------------------------
export const TRANSLATION_CONFIG = {
  perWordRate: 3, // ₹3 per word
  volumePresets: [500, 1000, 5000, 10000, 50000, 100000],
  expressMultiplier: 1.0, // Base calculation: words * 3, express alters turnaround days SLA
  dailyWordsStandard: 2000,
  dailyWordsExpress: 4000,
};

// Helper to determine quote mode based on service name or ID
export type QuoteServiceMode = 'web-development' | 'app-development' | 'ai-data-annotation' | 'translation';

export const getQuoteServiceMode = (serviceNameOrId: string): QuoteServiceMode => {
  const s = serviceNameOrId.toLowerCase();
  if (s.includes('web-development') || s.includes('web development')) return 'web-development';
  if (s.includes('app-development') || s.includes('app development') || s.includes('mobile')) return 'app-development';
  if (s.includes('ai-data') || s.includes('ai data') || s.includes('annotation')) return 'ai-data-annotation';
  return 'translation'; // Handles translation, localization, mtpe, lqa, transcription, subtitling, dtp, etc.
};
