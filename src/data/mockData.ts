import {
  ServiceItem,
  IndustryItem,
  LanguageItem,
  BlogPost,
  CaseStudy,
  JobPosition,
  OfficeLocation,
} from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'translation',
    name: 'Translation',
    oneLineDesc: 'Human + AI translation for all content types',
    fullDesc:
      'High-precision enterprise translation combining neural machine intelligence with certified native linguists. Tailored for corporate documentation, marketing assets, technical manuals, and digital products.',
    iconName: 'Globe',
    features: [
      'Dual Human-AI Validation',
      'Terminology Glossary Management',
      'Translation Memory (TM) Optimization',
      'ISO 17100 Certified Workflows',
    ],
    benefits: [
      'Reduce translation costs up to 45%',
      'Accelerate time-to-market by 3x',
      'Maintain 99.8% terminology consistency',
    ],
    useCases: [
      'Enterprise Software Documentation',
      'Global Marketing Campaigns',
      'Corporate Regulatory Filings',
      'Technical User Manuals',
    ],
    isPrimary8: true,
  },
  {
    id: 'localization',
    name: 'Localization',
    oneLineDesc: 'Culturally adapted content for every market',
    fullDesc:
      'End-to-end software, web, app, and media localization that adapts tone, imagery, regional nuances, and formatting to resonate naturally with target international audiences.',
    iconName: 'Sparkles',
    features: [
      'Cultural Nuance & Idiom Adaptation',
      'UI/UX String Length Optimization',
      'Currency, Date & Number Formatting',
      'In-Context Preview Verification',
    ],
    benefits: [
      'Increase overseas conversion rates by 68%',
      'Eliminate visual overflow bugs in UI',
      'Build native brand trust globally',
    ],
    useCases: [
      'SaaS Platform Localizations',
      'Mobile iOS & Android Apps',
      'Global E-Commerce Stores',
      'Video Games & Interactive Media',
    ],
    isPrimary8: true,
  },
  {
    id: 'ai-data-annotation',
    name: 'AI Data Annotation',
    oneLineDesc: 'High-quality multilingual data for AI models',
    fullDesc:
      'Clean, structured, and expertly annotated multilingual datasets for LLM pre-training, RLHF alignment, tokenization, sentiment analysis, and speech recognition models.',
    iconName: 'Cpu',
    features: [
      'Multilingual Text & Audio Labeling',
      'RLHF & Model Red-Teaming',
      'Entity Extraction & Sentiment Tagging',
      'Data Anonymization & GDPR Compliance',
    ],
    benefits: [
      'Boost LLM accuracy in low-resource languages',
      'Secure datasets with SOC-2 compliance',
      'Scale annotation to millions of data points',
    ],
    useCases: [
      'Large Language Model Alignment',
      'Voice Assistant Speech Training',
      'Multilingual Sentiment Engines',
      'Domain-Specific Knowledge Graphs',
    ],
    isPrimary8: true,
  },
  {
    id: 'mtpe',
    name: 'Machine Translation Post-Editing (MTPE)',
    oneLineDesc: 'AI speed with human-level perfection',
    fullDesc:
      'Combine state-of-the-art Neural Machine Translation (NMT) with rapid professional post-editing by expert linguists for maximum throughput without compromising quality.',
    iconName: 'Zap',
    features: [
      'Light & Full Post-Editing Tiers',
      'Real-time NMT Engine Fine-Tuning',
      'Custom Domain Dictionary Injection',
      'Automated Quality Estimation Scores',
    ],
    benefits: [
      'Process high volumes 5x faster',
      'Cost efficiency for continuous content',
      'Human quality guarantees on critical content',
    ],
    useCases: [
      'High-Volume Product Catalogs',
      'Customer Support Knowledge Bases',
      'Daily News Briefings & Internal Comms',
      'E-Learning Module Localization',
    ],
    isPrimary8: true,
  },
  {
    id: 'lqa',
    name: 'Linguistic Quality Assurance (LQA)',
    oneLineDesc: 'Quality, accuracy, and consistency assured',
    fullDesc:
      'Independent audit and rigorous scoring of localized content using MQM-DQF frameworks to ensure linguistic accuracy, brand alignment, and compliance before publication.',
    iconName: 'ShieldCheck',
    features: [
      'MQM Metric Quality Scoring',
      'In-Context Bug Tracking & Logging',
      'Style Guide & Tone Compliance Audits',
      'Linguistic Error Categorization',
    ],
    benefits: [
      'Zero-defect release guarantee',
      'Objective benchmark reporting for management',
      'Protects brand reputation across 100+ markets',
    ],
    useCases: [
      'Pre-Launch Mobile App Audits',
      'Financial Compliance Reports',
      'Medical Device UI Testing',
      'Global Advertising Campaigns',
    ],
    isPrimary8: true,
  },
  {
    id: 'transcription',
    name: 'Transcription',
    oneLineDesc: 'Accurate speech-to-text conversion',
    fullDesc:
      'Automated and human-verified speech-to-text transcriptions for audio and video files across 100+ languages with timestamps, speaker identification, and verbatim options.',
    iconName: 'Mic',
    features: [
      'Multi-Speaker Diarization',
      'Time-coded Sub-Second Markers',
      'Industry Jargon Glossaries',
      'Clean or Verbatim Transcription Options',
    ],
    benefits: [
      'Sub-2-hour turnaround for urgent media',
      '99.5% accuracy guaranteed with human proofing',
      'Searchable transcript databases',
    ],
    useCases: [
      'Earnings Calls & Board Meetings',
      'Legal Depositions & Court Hearings',
      'Podcasts, Webinars & Interviews',
      'Medical Consultations & Patient Notes',
    ],
    isPrimary8: true,
  },
  {
    id: 'subtitling',
    name: 'Subtitling',
    oneLineDesc: 'Perfect subtitles for global audiences',
    fullDesc:
      'Professional subtitling, closed captioning, and SDH (Subtitles for the Deaf and Hard of Hearing) formatted perfectly for streaming, broadcast, social media, and cinema.',
    iconName: 'Film',
    features: [
      'Reading Speed (CPS) Constraint Enforcement',
      'SRT, VTT, DFXP & Custom Formats',
      'On-Screen Graphic & Text Overlay Translation',
      'Multilingual Closed Captioning',
    ],
    benefits: [
      'Expand video reach by 300% on social & OTT',
      'Accessibility & Compliance (ADA, W3C)',
      'Frame-accurate subtitle synchronization',
    ],
    useCases: [
      'OTT Streaming Services & Documentaries',
      'Corporate Training Videos & Keynotes',
      'Social Media Ads & Video Campaigns',
      'University Video Lectures',
    ],
    isPrimary8: true,
  },
  {
    id: 'dtp',
    name: 'Desktop Publishing (DTP) / Document Formatting',
    oneLineDesc: 'Pixel-perfect multilingual documentation',
    fullDesc:
      'Layout design, typography adjustment, and page formatting for translated materials across InDesign, Illustrator, PDF, and Framer to match original design fidelity.',
    iconName: 'FileText',
    features: [
      'Bi-directional (RTL/LTR) Layout Adaptation',
      'Font & Glyph Substitution',
      'Graphics & Vector Text Editing',
      'Print-Ready PDF Output Generation',
    ],
    benefits: [
      'Identical visual output across all languages',
      'Flawless Arabic, Hebrew & CJK font rendering',
      'Saves internal design team hundreds of hours',
    ],
    useCases: [
      'Corporate Annual Reports',
      'Product Catalogs & Brochures',
      'Medical Safety Data Sheets (MSDS)',
      'Legal Contracts & Patents',
    ],
    isPrimary8: true,
  },
  {
    id: 'multilingual-content-solutions',
    name: 'Multilingual Content Solutions',
    oneLineDesc: 'End-to-end content localization across formats',
    fullDesc:
      'Comprehensive content strategy, multilingual copywriting, transcreation, and CMS pipeline integration to power high-growth global brand presence.',
    iconName: 'Layers',
    features: [
      'Transcreation & Creative Copywriting',
      'Global SEO & Keyword Research',
      'Direct CMS API Connectors (WordPress, Contentful, Adobe)',
      'Omnichannel Content Synchronization',
    ],
    benefits: [
      'Drive organic search traffic in 50+ countries',
      'Consistent global brand voice',
      'Automated content pub-sub pipelines',
    ],
    useCases: [
      'Global Brand Marketing Platforms',
      'E-Learning & LMS Courseware',
      'Multi-region E-Commerce Operations',
      'Cross-border PR & Press Releases',
    ],
    isPrimary8: false,
  },
  {
    id: 'enterprise-language-consulting',
    name: 'Enterprise Language Consulting',
    oneLineDesc: 'Strategic guidance for global communication programs',
    fullDesc:
      'Executive-level localization advisory, tech stack auditing, AI implementation roadmaps, and global workflow optimization for Fortune 500 enterprises.',
    iconName: 'Compass',
    features: [
      'Localization ROI & Maturity Assessment',
      'Custom MT Engine Selection & Benchmarking',
      'TMS & Translation Pipeline Integration Architecture',
      'Global Compliance & Data Governance Advisory',
    ],
    benefits: [
      'Maximized return on localization investment',
      'Optimized tech stack & vendor consolidation',
      'Clear 3-year global expansion roadmap',
    ],
    useCases: [
      'Global Expansion Strategy Planning',
      'Post-Merger Localization System Unification',
      'Enterprise AI & Machine Translation Rollouts',
      'Localization Procurement Audits',
    ],
    isPrimary8: false,
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'technology',
    name: 'Technology',
    iconName: 'Laptop',
    desc: 'Agile localization for SaaS, cloud apps, developer APIs, software UI strings, and technical documentation.',
    keyChallenges: [
      'Rapid release cycles requiring continuous localization',
      'Strict character limit constraints in UI components',
      'Complex technical terminology for developer audiences',
    ],
    solutionHighlights: [
      'Git & CI/CD pipeline automated translation triggers',
      'Real-time pseudo-localization UI testing',
      'Developer-friendly JSON/YAML/XLIFF file support',
    ],
    stat: '4.8x',
    statLabel: 'Faster SaaS deployment to international markets',
  },
  {
    id: 'e-commerce',
    name: 'E-Commerce',
    iconName: 'ShoppingBag',
    desc: 'High-speed product catalog translation, local marketplace adaptation, checkout flow localization, and SEO.',
    keyChallenges: [
      'Massive SKUs requiring instant translation',
      'Localized currencies, payment methods, and shipping info',
      'Cultural nuances in consumer purchasing triggers',
    ],
    solutionHighlights: [
      'Automated NMT + Post-Editing for millions of SKUs',
      'Dynamic currency & checkout localization',
      'In-country SEO keyword research and optimization',
    ],
    stat: '68%',
    statLabel: 'Higher conversion rate on localized store fronts',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    iconName: 'Activity',
    desc: 'Certified medical, pharmaceutical, clinical trial, and regulatory translation with 100% compliance assurance.',
    keyChallenges: [
      'Strict FDA, EMA, and HIPAA regulatory standards',
      'Zero tolerance for medical terminology errors',
      'Patient safety in clinical trial consents',
    ],
    solutionHighlights: [
      'ISO 13485 certified medical translation workflows',
      'Dual-independent linguistic verification',
      'HIPAA & GDPR encrypted secure file transfers',
    ],
    stat: '100%',
    statLabel: 'Regulatory compliance accuracy on medical filings',
  },
  {
    id: 'finance',
    name: 'Finance',
    iconName: 'DollarSign',
    desc: 'Secure translation for financial statements, banking platforms, investor relations, and fintech apps.',
    keyChallenges: [
      'Extremely tight deadlines around quarterly earnings',
      'Strict data privacy & financial confidentiality',
      'Complex accounting & tax code nuances across regions',
    ],
    solutionHighlights: [
      '24-hour turnaround for SEC & earnings reports',
      'SOC-2 Type II certified secure data environment',
      'Specialized financial linguists and auditors',
    ],
    stat: '$1.2B+',
    statLabel: 'Transactions processed daily on localized banking UI',
  },
  {
    id: 'legal',
    name: 'Legal',
    iconName: 'Scale',
    desc: 'Certified legal translations for contracts, patents, court litigation, compliance documents, and arbitration.',
    keyChallenges: [
      'Different legal systems (Common Law vs Civil Law)',
      'Strict court deadline requirements',
      'Sworn & notarized certification needs',
    ],
    solutionHighlights: [
      'Sworn court-certified legal translators',
      'Multilingual e-Discovery support',
      'Redline comparison and patent formatting',
    ],
    stat: '50K+',
    statLabel: 'Legal contracts certified across 80+ jurisdictions',
  },
  {
    id: 'education',
    name: 'Education',
    iconName: 'GraduationCap',
    desc: 'Interactive e-learning, academic courses, LMS platforms, and university curriculum localization.',
    keyChallenges: [
      'Multi-modal content (video, quiz, text, SCORM)',
      'Pedagogical adaptation for diverse learning styles',
      'Synchronized subtitles and voiceovers',
    ],
    solutionHighlights: [
      'SCORM & LMS package localized deployment',
      'Native voiceover casting and audio mastering',
      'Localized interactive assessment quizzes',
    ],
    stat: '12M+',
    statLabel: 'Students learning on localized e-learning platforms',
  },
  {
    id: 'gaming',
    name: 'Gaming',
    iconName: 'Gamepad2',
    desc: 'Immersive video game localization, voiceover dubbing, lore transcreation, and community management.',
    keyChallenges: [
      'Preserving humor, character lore, and slang',
      'Complex branching narrative text strings',
      'Console certification (Sony, Xbox, Nintendo) compliance',
    ],
    solutionHighlights: [
      'Gamer-linguist teams passionate about gaming culture',
      'In-game audio dubbing and lip-sync options',
      'LQA functional and linguistic game testing',
    ],
    stat: '98%',
    statLabel: 'Positive player sentiment score across global releases',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    iconName: 'Factory',
    desc: 'Precision technical manuals, CAD drawings, safety data sheets (MSDS), and supply chain documentation.',
    keyChallenges: [
      'Complex schematic diagrams and technical terms',
      'International OSHA & CE safety compliance',
      'Multi-format DTP requirements',
    ],
    solutionHighlights: [
      'Standardized technical glossaries across global plants',
      'AutoCAD & Framer DTP layout formatting',
      'Safety warning international harmonization',
    ],
    stat: '99.9%',
    statLabel: 'Precision accuracy across technical specifications',
  },
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Requirement',
    desc: 'Understanding your business needs, target markets, content types, and technical specifications.',
    icon: 'FileText',
  },
  {
    step: '02',
    title: 'Planning',
    desc: 'Building the right strategy, scope, timeline, custom MT engine training, and glossary alignment.',
    icon: 'Compass',
  },
  {
    step: '03',
    title: 'Translation',
    desc: 'AI-assisted translation paired with domain-expert linguists for initial precision drafting.',
    icon: 'Languages',
  },
  {
    step: '04',
    title: 'Localization',
    desc: 'Cultural adaptation, formatting adjustment, currency conversion, and contextual UI fitting.',
    icon: 'Globe',
  },
  {
    step: '05',
    title: 'Quality Review',
    desc: 'Multi-layer linguistic quality assurance (LQA), MQM scoring, and automated compliance checks.',
    icon: 'ShieldCheck',
  },
  {
    step: '06',
    title: 'Delivery',
    desc: 'On-time delivery of finalized assets via automated API connectors, TMS, or secure cloud drop.',
    icon: 'Send',
  },
  {
    step: '07',
    title: 'Long-Term Support',
    desc: 'Continuous support, continuous MT retraining, updated translation memory, and growth consulting.',
    icon: 'Repeat',
    isOngoing: true,
  },
];

export const VALUE_PROPOSITIONS = [
  {
    id: 'ai-human',
    title: 'AI + Human Intelligence',
    desc: 'The perfect blend of technology and human expertise.',
    icon: 'Cpu',
  },
  {
    id: 'scalable-ops',
    title: 'Scalable Global Operations',
    desc: 'Built to handle complex, large-scale enterprise projects.',
    icon: 'Network',
  },
  {
    id: 'security-compliance',
    title: 'Security & Compliance',
    desc: 'Enterprise-grade security with strict global compliance.',
    icon: 'Lock',
  },
  {
    id: 'quality-guaranteed',
    title: 'Quality Guaranteed',
    desc: 'Rigorous multi-stage quality checks at every level.',
    icon: 'CheckCircle2',
  },
  {
    id: 'innovation-driven',
    title: 'Innovation Driven',
    desc: 'Continuous innovation powered by advanced AI models.',
    icon: 'Sparkles',
  },
  {
    id: 'customer-first',
    title: 'Customer First',
    desc: 'Dedicated 24/7 support that never stops.',
    icon: 'HeartHandshake',
  },
  {
    id: 'global-reach',
    title: 'Global Reach',
    desc: 'Covering 1,000+ languages across 200+ countries.',
    icon: 'Globe2',
  },
];

export const TECH_TILES = [
  {
    id: 'rizqora-ai',
    name: 'Rizqora AI',
    subtitle: 'Proprietary Engine',
    desc: 'Proprietary AI engine for language understanding, context awareness, and semantic alignment.',
    icon: 'BrainCircuit',
  },
  {
    id: 'neural-mt',
    name: 'Neural MT Engine',
    subtitle: 'Next-Gen NMT',
    desc: 'Next-gen neural machine translation technology trained on domain-specific enterprise corpora.',
    icon: 'Workflow',
  },
  {
    id: 'quality-intel',
    name: 'Quality Intelligence',
    subtitle: 'AI Quality Scoring',
    desc: 'AI-driven quality scoring, error prediction, and automated MQM evaluation.',
    icon: 'Sliders',
  },
  {
    id: 'secure-cloud',
    name: 'Secure Cloud',
    subtitle: 'Enterprise Infrastructure',
    desc: 'Enterprise-grade cloud infrastructure with SOC-2 compliance and end-to-end encryption.',
    icon: 'Shield',
  },
];

export const LANGUAGES_SAMPLE: LanguageItem[] = [
  {
    id: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    code: 'ES',
    region: 'Americas',
    speakers: '559M',
    script: 'Latin',
    accuracyRate: '99.4%',
    popularPair: true,
  },
  {
    id: 'zh',
    name: 'Chinese (Simplified)',
    nativeName: '简体中文',
    code: 'ZH-CN',
    region: 'APAC',
    speakers: '1.1B',
    script: 'Simplified Han',
    accuracyRate: '98.9%',
    popularPair: true,
  },
  {
    id: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    code: 'DE',
    region: 'EMEA',
    speakers: '133M',
    script: 'Latin',
    accuracyRate: '99.2%',
    popularPair: true,
  },
  {
    id: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    code: 'JA',
    region: 'APAC',
    speakers: '125M',
    script: 'Kanji / Kana',
    accuracyRate: '98.6%',
    popularPair: true,
  },
  {
    id: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    code: 'AR',
    region: 'EMEA',
    speakers: '375M',
    script: 'Arabic (RTL)',
    accuracyRate: '98.2%',
    popularPair: true,
  },
  {
    id: 'fr',
    name: 'French',
    nativeName: 'Français',
    code: 'FR',
    region: 'EMEA',
    speakers: '310M',
    script: 'Latin',
    accuracyRate: '99.3%',
    popularPair: true,
  },
  {
    id: 'pt',
    name: 'Portuguese (Brazilian)',
    nativeName: 'Português',
    code: 'PT-BR',
    region: 'Americas',
    speakers: '252M',
    script: 'Latin',
    accuracyRate: '99.1%',
    popularPair: true,
  },
  {
    id: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    code: 'KO',
    region: 'APAC',
    speakers: '80M',
    script: 'Hangul',
    accuracyRate: '98.5%',
    popularPair: true,
  },
  {
    id: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    code: 'HI',
    region: 'APAC',
    speakers: '600M',
    script: 'Devanagari',
    accuracyRate: '97.9%',
    popularPair: true,
  },
  {
    id: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    code: 'IT',
    region: 'EMEA',
    speakers: '85M',
    script: 'Latin',
    accuracyRate: '99.1%',
    popularPair: false,
  },
  {
    id: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    code: 'RU',
    region: 'EMEA',
    speakers: '258M',
    script: 'Cyrillic',
    accuracyRate: '98.4%',
    popularPair: false,
  },
  {
    id: 'nl',
    name: 'Dutch',
    nativeName: 'Nederlands',
    code: 'NL',
    region: 'EMEA',
    speakers: '25M',
    script: 'Latin',
    accuracyRate: '99.0%',
    popularPair: false,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Future of Enterprise MTPE: How Neural Engines and Human Expertise Coexist',
    excerpt:
      'Discover why combining advanced AI translation models with specialized human proofreaders delivers 5x faster releases while maintaining zero-defect accuracy.',
    content: `As global enterprises expand into new territories, traditional translation methodologies can no longer keep pace with daily content creation velocity. Machine Translation Post-Editing (MTPE) has evolved from a simple cost-saving tactic into a strategic growth lever.

In this deep dive, we explore how Rizqora AI integrates neural translation engines directly into post-editor workflows, predicting linguistic errors before human review occurs.`,
    category: 'MTPE Strategy',
    author: 'Elena Rostova',
    authorRole: 'Chief Technology Officer',
    date: 'August 2, 2026',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 'post-2',
    title: 'Scaling AI Models Multilingually: The Crucial Role of Certified Data Annotation',
    excerpt:
      'Why low-resource language accuracy is the next frontier for Large Language Models, and how structured human-in-the-loop datasets bridge the gap.',
    content: `Building high-performing generative AI models requires vast quantities of high-quality, culturally relevant training data. When expanding models beyond English, standard web scrapes introduce bias, slang hallucination, and severe accuracy degradation.

Learn how Rizqora Solutions curates and annotates multilingual RLHF data across 100+ native dialects.`,
    category: 'AI Localization',
    author: 'Dr. Marcus Vance',
    authorRole: 'Head of AI Research',
    date: 'July 28, 2026',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'post-3',
    title: 'Mastering MQM Quality Scoring: An Enterprise Framework for LQA',
    excerpt:
      'A practical guide to implementing Multidimensional Quality Metrics (MQM) for measurable, transparent localization quality assurance.',
    content: `Without objective metrics, quality feedback often degenerates into subjective opinions. Enterprise buyers need data-driven benchmarks to measure language service provider accuracy.

This paper outlines the exact MQM scoring framework Rizqora Solutions uses to maintain a 98.7% average quality score across global client projects.`,
    category: 'LQA & Compliance',
    author: 'Sarah Chen',
    authorRole: 'VP of Quality Assurance',
    date: 'July 15, 2026',
    readTime: '5 min read',
    featured: false,
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    client: 'GlobalCloud Inc.',
    logoText: 'GLOBALCLOUD',
    industry: 'Technology / SaaS',
    title: 'Localizing Enterprise SaaS for 28 Markets in 60 Days',
    summary:
      'GlobalCloud needed to expand their B2B cloud monitoring software across EMEA and LATAM without delaying their quarterly product release.',
    challenge:
      'The client had over 1.4 million UI strings, technical documentation, and customer support articles scattered across Git repos, with strict UI character limits.',
    solution:
      'Rizqora Solutions integrated direct CI/CD workflow connectors with Rizqora AI NMT engine and 45 specialized SaaS linguists for real-time post-editing.',
    results: [
      { metric: '60 Days', label: 'Full 28-language rollout' },
      { metric: '42%', label: 'Cost reduction vs traditional agency' },
      { metric: '99.4%', label: 'First-pass LQA accuracy score' },
    ],
    testimonial: {
      quote:
        'Rizqora Solutions felt like an internal team extension. Their automated Git workflow enabled us to launch in 28 markets seamlessly on day one.',
      author: 'David Sterling',
      role: 'VP of Product Operations, GlobalCloud',
    },
  },
  {
    id: 'cs-2',
    client: 'HealthTech Global',
    logoText: 'HEALTHTECH',
    industry: 'Healthcare / Medical Devices',
    title: 'ISO-Certified Clinical Trial Document Translation Across 18 Countries',
    summary:
      'Translating complex patient consent forms, trial protocols, and regulatory filings under strict FDA and EMA deadlines.',
    challenge:
      'Zero error tolerance due to patient safety requirements and strict regulatory compliance across multiple international legal frameworks.',
    solution:
      'Deployed ISO 17100 and ISO 13485 certified dual-linguist workflow with full MQM audit trail and secure encrypted file storage.',
    results: [
      { metric: '100%', label: 'Regulatory approval on first submission' },
      { metric: '18', label: 'Countries synchronized simultaneously' },
      { metric: '0', label: 'Linguistic compliance findings' },
    ],
    testimonial: {
      quote:
        'When patient safety and regulatory approval are on the line, Rizqora Solutions is our only trusted language partner.',
      author: 'Dr. Katherine Meyer',
      role: 'Director of Regulatory Affairs, HealthTech Global',
    },
  },
  {
    id: 'cs-3',
    client: 'OmniCart E-Commerce',
    logoText: 'OMNICART',
    industry: 'E-Commerce',
    title: 'Automating 500,000 Product SKU Translations Daily with MTPE',
    summary:
      'Scaling cross-border e-commerce operations across 12 Asian and European markets.',
    challenge:
      'Translating over 500,000 dynamic product listings every single day with localized search keywords and currency formats.',
    solution:
      'Implemented automated Neural MT pipeline with domain-trained dictionaries and automated QA filters for price and brand terms.',
    results: [
      { metric: '500K+', label: 'SKUs processed daily' },
      { metric: '3.2x', label: 'Increase in international GMV' },
      { metric: '< 0.1s', label: 'API translation response time' },
    ],
    testimonial: {
      quote:
        'The speed and accuracy of Rizqora MTPE engine allowed us to double our cross-border revenue within six months.',
      author: 'Hiroshi Tanaka',
      role: 'Chief Revenue Officer, OmniCart',
    },
  },
];

export const OPEN_POSITIONS: JobPosition[] = [
  {
    id: 'job-1',
    title: 'Senior Localization Project Manager',
    department: 'Operations',
    location: 'San Francisco, CA (Hybrid / Remote)',
    type: 'Full-time',
    experience: '5+ years',
    desc: 'Lead multi-million dollar localization accounts for enterprise SaaS and technology clients. Coordinate global linguist teams, MTPE workflows, and client stakeholder communication.',
    responsibilities: [
      'Manage end-to-end localization projects across 30+ languages',
      'Optimize continuous localization pipelines via TMS integrations',
      'Monitor LQA scores, SLAs, and account financial performance',
    ],
  },
  {
    id: 'job-2',
    title: 'AI Language Data Engineer',
    department: 'AI & Engineering',
    location: 'London, UK (Hybrid / Remote)',
    type: 'Full-time',
    experience: '3+ years',
    desc: 'Build scalable multilingual data pipeline tools for LLM annotation, NMT fine-tuning, and automated quality scoring systems.',
    responsibilities: [
      'Architect data ingestion & cleaning pipelines for multi-modal text/audio',
      'Develop evaluation harnesses for MT quality estimation models',
      'Collaborate with research scientists on RLHF dataset curation',
    ],
  },
  {
    id: 'job-3',
    title: 'Freelance Certified Linguists & Translators (All Languages)',
    department: 'Global Network',
    location: 'Remote (Worldwide)',
    type: 'Contract',
    experience: '3+ years certified',
    desc: 'Join Rizqora Solutions elite global network of over 10,000 certified translators, MTPE editors, and domain subject-matter experts.',
    responsibilities: [
      'Perform high-precision human translation and MT post-editing',
      'Conduct LQA reviews and terminology glossary maintenance',
      'Adhere to ISO 17100 quality standards and deadlines',
    ],
  },
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    city: 'San Francisco',
    country: 'United States',
    address: '500 Howard Street, Suite 400, San Francisco, CA 94105',
    phone: '+1 (415) 890-3400',
    email: 'sf@rizqora.com',
    timezone: 'PST (UTC-8)',
    isHQ: true,
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '25 Bank Street, Canary Wharf, London E14 5JP',
    phone: '+44 20 7946 0912',
    email: 'london@rizqora.com',
    timezone: 'GMT (UTC+0)',
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    address: 'Roppongi Hills Mori Tower 28F, Minato-ku, Tokyo 106-6108',
    phone: '+81 3 5555 0143',
    email: 'tokyo@rizqora.com',
    timezone: 'JST (UTC+9)',
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'DIFC Gate Precinct Building 4, Level 5, Dubai',
    phone: '+971 4 312 9000',
    email: 'dubai@rizqora.com',
    timezone: 'GST (UTC+4)',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '1 Marina Boulevard, Level 20, Singapore 018989',
    phone: '+65 6789 0123',
    email: 'singapore@rizqora.com',
    timezone: 'SGT (UTC+8)',
  },
];
