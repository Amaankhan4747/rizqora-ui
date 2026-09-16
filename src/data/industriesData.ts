export interface RelevantService {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
}

export interface IndustryWorkflowStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  iconName: string;
  tagline: string;
  desc: string;
  detailedDesc: string;
  category: 'Technology' | 'Regulated' | 'Consumer' | 'Industrial';
  keyChallenges: string[];
  solutionHighlights: string[];
  localizationRequirements: string[];
  benefits: string[];
  relevantServices: RelevantService[];
  workflows: IndustryWorkflowStep[];
  globalConsiderations: string[];
  stat: string;
  statLabel: string;
  visualTheme: {
    accentColor: string;
    badgeText: string;
    symbol: string;
    metricTitle: string;
    metricValue: string;
    type:
      | 'technology'
      | 'healthcare'
      | 'finance'
      | 'legal'
      | 'ecommerce'
      | 'gaming'
      | 'education'
      | 'manufacturing'
      | 'travel'
      | 'automotive'
      | 'media'
      | 'energy';
  };
  ctaText: string;
  featuredInHome: boolean;
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'technology',
    slug: 'technology',
    name: 'Technology & SaaS',
    shortName: 'Technology',
    iconName: 'Laptop',
    tagline: 'Continuous Localization for Agile Engineering Teams',
    desc: 'Agile localization for SaaS, cloud apps, developer APIs, software UI strings, and technical documentation.',
    detailedDesc:
      'Engineered specifically for fast-moving software enterprises and global SaaS platforms. Rizqoraa integrates directly into modern CI/CD deployment pipelines (GitHub Actions, GitLab, Bitbucket), enabling seamless micro-copy extraction, pseudo-localization testing, and real-time developer documentation synchronization across 100+ languages.',
    category: 'Technology',
    keyChallenges: [
      'Rapid sprint cycles (bi-weekly/daily) breaking manual translation workflows and delaying global feature rollouts.',
      'Strict character limit constraints in UI components leading to text truncation and broken layouts in German, Russian, or French.',
      'Complex developer-facing terminology and code syntax needing strict protection from machine translation corruption.',
      'Pluralization rules and dynamic string variables (ICU message formats) failing across non-Western linguistic structures.',
    ],
    solutionHighlights: [
      'Git & CI/CD pipeline automated translation triggers with GitHub/GitLab webhook synchronization.',
      'Automated pseudo-localization staging environments to detect text expansion and clipping prior to production release.',
      'Native developer format support: JSON, YAML, XLIFF, iOS Strings, Android XML, PO, Markdown, and MDX.',
      'In-context UI translation review with live preview screenshots and visual bug reporting.',
    ],
    localizationRequirements: [
      'Bidirectional text support (RTL) for Arabic, Hebrew, and Persian app interfaces.',
      'ICU MessageFormat validation to prevent runtime placeholder crashes.',
      'Sub-24-hour turnaround for micro-copy and push notification strings.',
      'ISO 17100 certified review for enterprise developer portals and SDK documentation.',
    ],
    benefits: [
      '4.8x faster deployment cycles to international markets with zero release delays.',
      '99.8% zero-defect UI release rate across mobile, web, and desktop clients.',
      '42% reduction in internal developer hours spent on localization management.',
      'Instant synchronization between English docs and 30+ localized developer hubs.',
    ],
    relevantServices: [
      {
        id: 'software-localization',
        slug: 'software-localization',
        name: 'Software Localization',
        description: 'Native UI strings, mobile app packaging, and runtime testing.',
        iconName: 'Code',
      },
      {
        id: 'lqa',
        slug: 'linguistic-quality-assurance',
        name: 'Linguistic QA (LQA)',
        description: 'On-device UI verification, layout clipping checks, and bug fixes.',
        iconName: 'CheckCircle2',
      },
      {
        id: 'multilingual-content-solutions',
        slug: 'multilingual-content-solutions',
        name: 'Multilingual Content Solutions',
        description: 'Developer documentation, API reference guides, and release notes.',
        iconName: 'FileCode',
      },
      {
        id: 'machine-translation-post-editing',
        slug: 'machine-translation-post-editing',
        name: 'MTPE for Tech Docs',
        description: 'High-throughput domain-tuned neural translation for extensive manuals.',
        iconName: 'Cpu',
      },
    ],
    workflows: [
      {
        step: '01',
        title: 'Repository Connector Setup',
        description: 'Direct webhook integration with your Git repo, linking resource bundles directly to Rizqoraa TMS.',
        deliverable: 'Automated CI/CD sync pipeline',
      },
      {
        step: '02',
        title: 'Parsing & Pseudo-Localization',
        description: 'Automated string extraction with variable protection and 30% expansion testing in staging builds.',
        deliverable: 'UI string freeze validation report',
      },
      {
        step: '03',
        title: 'Tech-Specialist Translation & LQA',
        description: 'Native software-specialist linguists translate strings with in-context live visual preview.',
        deliverable: 'Verified bilingual resource files',
      },
      {
        step: '04',
        title: 'Automated Pull Request Merge',
        description: 'Validated localized files are auto-committed back into your staging or main branch via pull request.',
        deliverable: 'Production-ready localized build',
      },
    ],
    globalConsiderations: [
      'Font fallback hierarchies for CJK (Chinese, Japanese, Korean) and Cyrillic script rendering.',
      'Date, time, currency, and numerical standard formatting per target locale ISO locale standards.',
      'GDPR and CCPA compliant cookie and consent banner phrasing variations.',
    ],
    stat: '4.8x',
    statLabel: 'Faster SaaS deployment to international markets',
    visualTheme: {
      accentColor: '#E4032E',
      badgeText: 'CI/CD Automated SaaS Pipeline',
      symbol: 'API // GIT',
      metricTitle: 'String Extraction Latency',
      metricValue: '<120ms',
      type: 'technology',
    },
    ctaText: 'Request a SaaS Localization Architecture Review',
    featuredInHome: true,
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare & Life Sciences',
    shortName: 'Healthcare',
    iconName: 'Activity',
    tagline: 'Certified Medical Translation with 100% Regulatory Rigor',
    desc: 'Certified medical, pharmaceutical, clinical trial, and regulatory translation with 100% compliance assurance.',
    detailedDesc:
      'In medical and pharmaceutical communication, accuracy is a matter of patient safety. Rizqoraa provides ISO 17100 and ISO 13485 certified translation workflows, validated clinical trial protocols, patient-reported outcomes (PROs/ePROs), medical device IFUs, and pharmacovigilance filings adhering strictly to FDA, EMA, PMDA, and NMPA guidelines.',
    category: 'Regulated',
    keyChallenges: [
      'Zero tolerance for medical terminology errors that could compromise patient well-being or clinical efficacy.',
      'Strict regulatory approval deadlines with FDA, EMA, and regional health ministries requiring notarized certifications.',
      'Cognitive debriefing and linguistic validation necessary for patient-reported outcome questionnaires across cultural cohorts.',
      'Severe data privacy requirements (HIPAA, GDPR Health Data) governing the handling of patient and clinical trial records.',
    ],
    solutionHighlights: [
      'Dual-independent translation and certified reconciliation methodology for clinical protocols.',
      'ISO 13485:2016 and ISO 17100:2015 certified quality management systems with full audit trail logging.',
      'Medical Advisory Board of licensed physicians, pharmacologists, and certified clinical research coordinators.',
      'End-to-end encrypted secure file transfer vaults compliant with HIPAA and 21 CFR Part 11 requirements.',
    ],
    localizationRequirements: [
      'Back-translation and reconciliation certificates for Institutional Review Boards (IRBs).',
      'Plain-language adaptation of Informed Consent Forms (ICFs) tailored to 6th-grade reading levels in target markets.',
      'Standardized MedDRA and EDQM terminology glossary enforcement.',
      'Medical Device Regulation (MDR EU 2017/745) compliant multilingual labeling.',
    ],
    benefits: [
      '100% first-pass regulatory compliance rate on global clinical and health authority submissions.',
      '35% reduction in international patient onboarding timelines across multi-country trials.',
      'Comprehensive legal indemnity and certificate of linguistic accuracy on every batch.',
      'Complete audit trail archive retained for 10 years in compliance with clinical trial regulations.',
    ],
    relevantServices: [
      {
        id: 'document-translation',
        slug: 'document-translation',
        name: 'Certified Medical Translation',
        description: 'Clinical trial protocols, investigator brochures, and drug dossiers.',
        iconName: 'FileText',
      },
      {
        id: 'dtp',
        slug: 'dtp',
        name: 'Medical DTP & IFU Formatting',
        description: 'Multilingual patient instructions for use and packaging leaflets.',
        iconName: 'FileSpreadsheet',
      },
      {
        id: 'lqa',
        slug: 'linguistic-quality-assurance',
        name: 'Medical LQA & Back-Translation',
        description: 'Dual-pass verification and semantic reconciliation documentation.',
        iconName: 'ShieldCheck',
      },
      {
        id: 'transcription',
        slug: 'transcription',
        name: 'Medical Transcription',
        description: 'Doctor-patient consultations, expert advisory panels, and interviews.',
        iconName: 'Mic',
      },
    ],
    workflows: [
      {
        step: '01',
        title: 'Regulatory & Terminology Scoping',
        description: 'Mapping source documents against MedDRA, SNOMED, and target health authority formatting rules.',
        deliverable: 'Approved project glossary & regulatory matrix',
      },
      {
        step: '02',
        title: 'Primary Forward Translation',
        description: 'Certified native medical translators with advanced degrees in pharmacology and medicine.',
        deliverable: 'Forward translation draft',
      },
      {
        step: '03',
        title: 'Independent Back-Translation',
        description: 'Blind back-translation by an independent linguist unaware of the source text.',
        deliverable: 'Comparison audit and reconciliation notes',
      },
      {
        step: '04',
        title: 'Certification & Notarization',
        description: 'Issuance of formal Certificate of Accuracy signed by certified project director.',
        deliverable: 'Health-authority-ready submission package',
      },
    ],
    globalConsiderations: [
      'Cultural perceptions of illness, wellness, and consent varying between Western and Eastern healthcare cultures.',
      'Mandatory national font size regulations for pharmaceutical carton packaging and warning inserts.',
      'Specialized units of measurement (mg/dL vs mmol/L, Celsius vs Fahrenheit) localization.',
    ],
    stat: '100%',
    statLabel: 'Regulatory compliance accuracy on medical filings',
    visualTheme: {
      accentColor: '#E4032E',
      badgeText: 'ISO 13485 & 17100 Certified',
      symbol: 'MED // PROTOCOL',
      metricTitle: 'Regulatory First-Pass Rate',
      metricValue: '100.0%',
      type: 'healthcare',
    },
    ctaText: 'Speak with a Medical Localization Specialist',
    featuredInHome: true,
  },
  {
    id: 'finance',
    slug: 'finance',
    name: 'Finance & Banking',
    shortName: 'Finance',
    iconName: 'DollarSign',
    tagline: 'High-Security Financial Precision for Global Markets',
    desc: 'Secure translation for financial statements, banking platforms, investor relations, and fintech apps.',
    detailedDesc:
      'Global capital markets demand instantaneous turnaround, absolute confidentiality, and bulletproof precision. Rizqoraa delivers secure localization infrastructure for multinational banks, asset managers, fintech platforms, and credit agencies—handling quarterly earnings disclosures, IFRS/GAAP statements, investment prospectuses, and mobile banking interfaces.',
    category: 'Regulated',
    keyChallenges: [
      'Ultra-tight turnaround windows (sub-12-hour) around quarterly earnings calls and stock exchange announcements.',
      'Stringent confidentiality and non-disclosure obligations to avoid insider trading vulnerabilities.',
      'Significant differences between regional accounting taxonomies, tax treaties, and disclosure mandates.',
      'Dynamic currency conversions, date stamps, and numerical separation standards across banking interfaces.',
    ],
    solutionHighlights: [
      'SOC-2 Type II certified secure data processing center with on-premise private MT options.',
      'Dedicated 24/7 financial rapid-response teams synchronized with London, New York, Tokyo, and Singapore markets.',
      'Expert financial linguists holding CPA, CFA, or chartered accounting certifications.',
      'Automated numerical verification algorithms cross-checking decimal points, tables, and currency codes.',
    ],
    localizationRequirements: [
      'Strict adherence to IFRS, US GAAP, and regional SEC / ESMA reporting conventions.',
      'End-to-end audit trails with signed NDAs and background-checked linguists.',
      'Bi-directional tabular DTP matching original annual report layouts.',
      'Cryptographically wiped ephemeral server environments for sensitive M&A documents.',
    ],
    benefits: [
      '₹1.2B+ daily transaction volume securely processed through localized banking applications.',
      'Sub-12-hour emergency turnaround for quarterly market disclosures and earnings releases.',
      'Zero financial terminology or numerical transcription discrepancies across all audited reports.',
      '40% cost reduction on high-volume financial reports via calibrated private neural engines.',
    ],
    relevantServices: [
      {
        id: 'document-translation',
        slug: 'document-translation',
        name: 'Financial Report Translation',
        description: 'Quarterly 10-K, 10-Q, annual reports, prospectuses, and audits.',
        iconName: 'FileSpreadsheet',
      },
      {
        id: 'software-localization',
        slug: 'software-localization',
        name: 'Fintech & Mobile Banking UI',
        description: 'Payment gateway screens, onboarding flows, and fraud alerts.',
        iconName: 'Smartphone',
      },
      {
        id: 'transcription',
        slug: 'transcription',
        name: 'Earnings Call Audio Transcription',
        description: 'Real-time and sub-2-hour transcription of investor relations calls.',
        iconName: 'Headphones',
      },
      {
        id: 'dtp',
        slug: 'dtp',
        name: 'Financial DTP & Annual Reports',
        description: 'Pixel-perfect typography formatting for printed shareholder reports.',
        iconName: 'Layout',
      },
    ],
    workflows: [
      {
        step: '01',
        title: 'Secure Air-Gapped Intake',
        description: 'Ingestion of financial files through 256-bit encrypted portals with dedicated access control tokens.',
        deliverable: 'Encrypted project sandbox & signed NDA',
      },
      {
        step: '02',
        title: 'Taxonomy & Numerical Locking',
        description: 'Automated locking of financial tables, balance sheets, and standard XBRL tags to prevent corruption.',
        deliverable: 'Numerical lock verification',
      },
      {
        step: '03',
        title: 'Chartered Financial Translation',
        description: 'Translation by chartered financial linguists specializing in equities, debt, or regulatory compliance.',
        deliverable: 'Financial draft with side-by-side reconciliation',
      },
      {
        step: '04',
        title: 'Audit & Secure Release',
        description: 'Independent numerical proofing against original tables and delivery directly to IR directors.',
        deliverable: 'Final certified financial documentation',
      },
    ],
    globalConsiderations: [
      'Number formatting conventions (1,000.00 vs 1.000,00 vs 1 000,00) differing between English, French, and German.',
      'Regional financial naming customs (e.g. "Lakhs/Crores" in South Asia vs "Millions/Billions" globally).',
      'Islamic Banking (Sharia-compliant finance) terminology precision in Gulf and SEA markets.',
    ],
    stat: '₹1.2B+',
    statLabel: 'Transactions processed daily on localized banking UI',
    visualTheme: {
      accentColor: '#E4032E',
      badgeText: 'SOC-2 Type II Certified Data Vault',
      symbol: 'FIN // ENCRYPT',
      metricTitle: 'Daily Processed Volume',
      metricValue: '₹1.2B+',
      type: 'finance',
    },
    ctaText: 'Request a Financial Localization Proposal',
    featuredInHome: true,
  },
  {
    id: 'legal',
    slug: 'legal',
    name: 'Legal & Compliance',
    shortName: 'Legal',
    iconName: 'Scale',
    tagline: 'Sworn & Court-Admissible Legal Translation Across Jurisdictions',
    desc: 'Certified legal translations for contracts, patents, court litigation, compliance documents, and arbitration.',
    detailedDesc:
      'Legal localization requires far more than linguistic fluency—it demands an encyclopedic understanding of comparative jurisprudence. Rizqoraa delivers sworn and certified translations across Common Law, Civil Law, and Islamic Law traditions, trusted by international law firms, corporate legal counsels, and multinational enterprises for cross-border litigation, intellectual property filings, and regulatory compliance.',
    category: 'Regulated',
    keyChallenges: [
      'Irreconcilable legal concepts between Common Law (precedent-based) and Civil Law (statute-based) systems.',
      'Strict court-mandated filing deadlines where late submissions result in dismissal or severe sanctions.',
      'Varying regional requirements for sworn translators, apostilles, consular legalization, and notarial certificates.',
      'Multilingual electronic discovery (e-Discovery) involving terabytes of unstructured foreign language evidence.',
    ],
    solutionHighlights: [
      'Network of sworn, court-registered legal linguists and practicing attorneys across 80+ jurisdictions.',
      'Formally notarized Certificates of Accuracy recognized by international courts, arbitral tribunals, and government agencies.',
      'High-speed multilingual e-Discovery processing utilizing AI document triage and human legal review.',
      'Strict redline comparison tools verifying that every covenant, clause, and cross-reference is preserved.',
    ],
    localizationRequirements: [
      'Notarized Certificate of Accuracy with physical or cryptographic digital seal.',
      'Redline tracking and side-by-side bilingual formatting for cross-examination in judicial hearings.',
      'Patent translation following WIPO, USPTO, EPO, and JPO drafting specifications.',
      'GDPR and attorney-client privilege data protection protocols.',
    ],
    benefits: [
      '50,000+ contracts certified across 80+ international jurisdictions with zero court rejections.',
      '100% admissibility rate in ICC, LCIA, SIAC, and AAA arbitration tribunals.',
      'Sub-48-hour delivery on complex commercial agreements and cross-border merger contracts.',
      '65% reduction in e-Discovery costs using intelligent multilingual predictive coding.',
    ],
    relevantServices: [
      {
        id: 'document-translation',
        slug: 'document-translation',
        name: 'Certified Legal Translation',
        description: 'Contracts, NDAs, articles of incorporation, court filings, and decrees.',
        iconName: 'FileCheck',
      },
      {
        id: 'transcription',
        slug: 'transcription',
        name: 'Legal Deposition Transcription',
        description: 'Verbatim timestamped transcripts of witness depositions and hearings.',
        iconName: 'Mic',
      },
      {
        id: 'lqa',
        slug: 'linguistic-quality-assurance',
        name: 'Legal Redline Comparison & LQA',
        description: 'Detailed clause-by-clause linguistic and legal consistency audit.',
        iconName: 'Scale',
      },
      {
        id: 'multilingual-content-solutions',
        slug: 'multilingual-content-solutions',
        name: 'Corporate Governance & Policy',
        description: 'Global compliance policies, code of conduct, and anti-bribery training.',
        iconName: 'ShieldAlert',
      },
    ],
    workflows: [
      {
        step: '01',
        title: 'Jurisdiction & Authority Scoping',
        description: 'Identifying target jurisdiction (e.g. French Commercial Court, German BGH, US Federal Court) and certification type.',
        deliverable: 'Legal certification roadmap',
      },
      {
        step: '02',
        title: 'Sworn Attorney-Linguist Translation',
        description: 'Drafting by certified legal translators with active law degrees or sworn judicial standing.',
        deliverable: 'Bilingual legal draft',
      },
      {
        step: '03',
        title: 'Senior Legal Review & Redlining',
        description: 'Verification of contractual covenants, arbitration clauses, and jurisdictional terms.',
        deliverable: 'Redlined audit comparison',
      },
      {
        step: '04',
        title: 'Notarization & Apostille Issuance',
        description: 'Formal notarization and apostille stamping according to the Hague Convention standards.',
        deliverable: 'Official sealed legal certification package',
      },
    ],
    globalConsiderations: [
      'Legal system divergence: translation of equitable remedies vs civil law specific damages.',
      'Patent claim format conventions in Japan (JPO), China (CNIPA), and Europe (EPO).',
      'Format requirements for sworn affidavits in commonwealth jurisdictions.',
    ],
    stat: '50K+',
    statLabel: 'Legal contracts certified across 80+ jurisdictions',
    visualTheme: {
      accentColor: '#E4032E',
      badgeText: 'Sworn & Court-Admissible Certifications',
      symbol: 'LEX // JURIS',
      metricTitle: 'Contracts Certified',
      metricValue: '50,000+',
      type: 'legal',
    },
    ctaText: 'Schedule a Legal Translation Consultation',
    featuredInHome: true,
  },
  {
    id: 'e-commerce',
    slug: 'e-commerce',
    name: 'E-Commerce & Retail',
    shortName: 'E-Commerce',
    iconName: 'ShoppingBag',
    tagline: 'High-Converting Multilingual Retail & Marketplace Localization',
    desc: 'High-speed product catalog translation, local marketplace adaptation, checkout flow localization, and SEO.',
    detailedDesc:
      'Winning in international e-commerce requires far more than machine-translated product specs—it demands localized consumer buying triggers, cultural shopping behavior adaptation, in-country search keyword optimization, and friction-free payment and checkout experiences across global marketplaces.',
    category: 'Consumer',
    keyChallenges: [
      'Millions of dynamic SKUs constantly updating, requiring rapid high-throughput translation at sustainable unit economics.',
      'Significant conversion drop-offs if checkout flows lack regional payment methods (e.g. iDEAL, Pix, UPI, Alipay).',
      'Product titles failing to rank in regional search engines due to literal translation rather than localized search intent.',
      'High product return rates caused by ambiguous sizing conversions, material specifications, or cultural mismatched imagery.',
    ],
    solutionHighlights: [
      'High-throughput Neural MT engines customized on brand voice, paired with human post-editing for hero products.',
      'In-country e-commerce SEO keyword research integrated into category descriptions and product titles.',
      'Automated catalog API connectors for Shopify Plus, Magento, Salesforce Commerce Cloud, and BigCommerce.',
      'Cultural adaptation of promotional campaigns, seasonal sales dates (Singles Day, Diwali, Black Friday), and checkout UX.',
    ],
    localizationRequirements: [
      'Automated metric-to-imperial size and weight conversion charts.',
      'Local currency formatting and tax/VAT transparency phrasing.',
      'Real-time customer review sentiment translation and moderation.',
      'Localized return policy and consumer rights compliance statements.',
    ],
    benefits: [
      '68% higher conversion rate on localized store fronts vs unlocalized English experiences.',
      '3.2x uplift in international organic search traffic within 90 days of catalog localization.',
      '50% decrease in international customer support tickets regarding sizing and specs.',
      'Over 20 million SKUs successfully localized and synchronized in real time.',
    ],
    relevantServices: [
      {
        id: 'multilingual-content-solutions',
        slug: 'multilingual-content-solutions',
        name: 'Product Catalog Transcreation',
        description: 'Persuasive product titles, benefit bullets, and marketing descriptions.',
        iconName: 'Tag',
      },
      {
        id: 'machine-translation-post-editing',
        slug: 'machine-translation-post-editing',
        name: 'High-Throughput MTPE for SKUs',
        description: 'Scalable neural machine translation with human quality gating.',
        iconName: 'Zap',
      },
      {
        id: 'software-localization',
        slug: 'software-localization',
        name: 'Checkout & Cart Localization',
        description: 'Payment flows, address format validators, and error message prompts.',
        iconName: 'CreditCard',
      },
      {
        id: 'subtitling',
        slug: 'subtitling',
        name: 'Product Video Subtitling',
        description: 'Social video ads, unboxing reels, and influencer content captioning.',
        iconName: 'Film',
      },
    ],
    workflows: [
      {
        step: '01',
        title: 'Catalog API Connection',
        description: 'Hooking into your PIM or e-commerce platform via automated webhooks for instant SKU ingestion.',
        deliverable: 'Live product sync pipeline',
      },
      {
        step: '02',
        title: 'Tiered Translation Strategy',
        description: 'Routing high-revenue hero products to creative copywriters, and long-tail SKUs to custom MTPE.',
        deliverable: 'Optimized cost & speed distribution',
      },
      {
        step: '03',
        title: 'In-Market SEO Injection',
        description: 'Injecting local high-volume search query terms into translated meta tags, URLs, and titles.',
        deliverable: 'SEO-optimized catalog bundle',
      },
      {
        step: '04',
        title: 'Automated Catalog Push',
        description: 'Publishing translated content directly back into target storefronts and marketplace channels.',
        deliverable: 'Live localized product pages',
      },
    ],
    globalConsiderations: [
      'Local shopping calendar differences: Ramadan, Lunar New Year, Singles Day (11.11), and Golden Week.',
      'Address formatting differences (postal code placements, prefecture vs province naming).',
      'Preferred customer communication channels (WhatsApp in LATAM/India, LINE in Japan/Taiwan, WeChat in China).',
    ],
    stat: '68%',
    statLabel: 'Higher conversion rate on localized store fronts',
    visualTheme: {
      accentColor: '#E4032E',
      badgeText: 'Multi-Currency Catalog Automation',
      symbol: 'RETAIL // SKU',
      metricTitle: 'Conversion Uplift',
      metricValue: '+68.4%',
      type: 'ecommerce',
    },
    ctaText: 'Boost Your International E-Commerce Conversions',
    featuredInHome: true,
  },
  {
    id: 'gaming',
    slug: 'gaming',
    name: 'Gaming & Interactive Entertainment',
    shortName: 'Gaming',
    iconName: 'Gamepad2',
    tagline: 'Immersive Game Localization That Speaks the Player Language',
    desc: 'Immersive video game localization, voiceover dubbing, lore transcreation, and community management.',
    detailedDesc:
      'Great games thrive on emotional immersion, narrative depth, and community culture. Rizqoraa brings together passionate gamer-linguists, audio directors, and technical localization engineers to adapt AAA blockbusters, indie darlings, and live-service mobile titles—preserving gameplay humor, fantasy lore, character dialect quirks, and competitive esports terminology.',
    category: 'Consumer',
    keyChallenges: [
      'Preserving complex narrative lore, witty dialogue puns, and character backstories without literal translation stiffness.',
      'Strict character limit constraints on mobile, console, and VR head-up displays (HUDs) causing UI clipping.',
      'Rigorous platform-holder certification standards (Sony TRC, Microsoft XR, Nintendo Lot Check).',
      'Rapid live-ops sprint schedules requiring weekly seasonal battle pass and item shop updates.',
    ],
    solutionHighlights: [
      'Gamer-linguist teams who play your game and understand gaming subcultures across Twitch, Reddit, and Discord.',
      'Full audio localization suite: native character voiceover casting, directed dubbing, and lip-sync synchronization.',
      'Rigorous on-device Linguistic Quality Assurance (LQA) testing on target devkits and mobile devices.',
      'Cultural sensitivity and regional age-rating (ESRB, PEGI, CERO, GRAC) compliance audits.',
    ],
    localizationRequirements: [
      'Game engine string extraction (Unity, Unreal Engine, Godot, custom C++ engines).',
      'Dynamic variable and string concatenation handling preventing grammatical gender mismatches.',
      'Console compliance term consistency (e.g. "Cross button" vs "A button" vs "Circle button").',
      'Dialogue subtitles formatted with distinct character color identifiers and reading speed limits.',
    ],
    benefits: [
      '98% positive player sentiment score across international Steam and App Store reviews.',
      'Zero certification failures or release delays linked to platform terminology violations.',
      '3.5x higher daily active user (DAU) retention in localized international game markets.',
      'Simultaneous worldwide day-and-date release across all target languages.',
    ],
    relevantServices: [
      {
        id: 'voiceover-dubbing',
        slug: 'voiceover-dubbing',
        name: 'Game Voice Acting & Dubbing',
        description: 'Native voice actors, sound engineering, and cinematic dialogue direction.',
        iconName: 'Volume2',
      },
      {
        id: 'lqa',
        slug: 'linguistic-quality-assurance',
        name: 'Game LQA & Functionality Testing',
        description: 'Hands-on gameplay testing on PC, console, iOS, and Android hardware.',
        iconName: 'Gamepad',
      },
      {
        id: 'subtitling',
        slug: 'subtitling',
        name: 'Cinematic Cutscene Subtitles',
        description: 'Frame-accurate closed captions and dialogue subtitles with speaker tags.',
        iconName: 'Tv',
      },
      {
        id: 'multilingual-content-solutions',
        slug: 'multilingual-content-solutions',
        name: 'Lore Bible Transcreation',
        description: 'In-game quest lore, character backstories, and marketing trailers.',
        iconName: 'BookOpen',
      },
    ],
    workflows: [
      {
        step: '01',
        title: 'Lore Bible & Glossary Creation',
        description: 'Building character relationship maps, world-building glossaries, and tone-of-voice style guides.',
        deliverable: 'Master Game Lore & Terminology Bible',
      },
      {
        step: '02',
        title: 'Creative Script Transcreation',
        description: 'Native gamer-writers adapt dialogue, weapon names, quests, and in-game UI strings.',
        deliverable: 'Bilingual string resource files',
      },
      {
        step: '03',
        title: 'Voiceover Recording & Lip-Sync',
        description: 'Directing professional voice talents in top-tier acoustic studios to match original voice tone.',
        deliverable: 'Mastered multilingual dialogue audio tracks',
      },
      {
        step: '04',
        title: 'On-Device LQA Testing',
        description: 'Testers play through the localized build to flag UI overflows, untranslated strings, and audio cutoffs.',
        deliverable: 'Certified gold-master localized build',
      },
    ],
    globalConsiderations: [
      'Regional taboos, blood/gore restrictions, and religious sensitivities (e.g. Germany USK, China censorship rules).',
      'Text expansion in German and Brazilian Portuguese breaking compact mobile UI button spaces.',
      'Font typography choices matching the genre aesthetic (cyberpunk, medieval fantasy, sci-fi).',
    ],
    stat: '98%',
    statLabel: 'Positive player sentiment score across global releases',
    visualTheme: {
      accentColor: '#E4032E',
      badgeText: 'Multiplatform Game LQA & Dubbing',
      symbol: 'GAME // LORE',
      metricTitle: 'Player Sentiment Rating',
      metricValue: '98.2%',
      type: 'gaming',
    },
    ctaText: 'Localize Your Game for Global Gamers',
    featuredInHome: true,
  },
  {
    id: 'education',
    slug: 'education',
    name: 'Education & E-Learning',
    shortName: 'Education',
    iconName: 'GraduationCap',
    tagline: 'Pedagogically Sound Learning Content That Educates Across Cultures',
    desc: 'Interactive e-learning, academic courses, LMS platforms, and university curriculum localization.',
    detailedDesc:
      'Education bridges cultures only when instructional design, pedagogical nuance, and cultural relevance align. Rizqoraa provides end-to-end e-learning localization for universities, corporate training academies, and edtech platforms—adapting SCORM modules, video lectures, voiceovers, interactive quizzes, and courseware for international learners.',
    category: 'Consumer',
    keyChallenges: [
      'Complex multimedia packages combining video, synchronized slides, interactive quizzes, and SCORM/xAPI code.',
      'Cultural adaptation of educational examples, case studies, and humor that may confuse international students.',
      'High voiceover costs and acoustic studio logistics when translating hundreds of hours of lecture content.',
      'Accessibility standards (WCAG 2.1 AA, ADA Section 508) for students with hearing or visual impairments.',
    ],
    solutionHighlights: [
      'Turnkey SCORM and LMS package localization (Articulate Storyline, Adobe Captivate, Rise 360).',
      'Professional educational voiceover casting paired with studio audio post-production and timed synchronization.',
      'Pedagogical review ensuring learning objectives and assessment metrics remain intact.',
      'Integrated multilingual subtitles and closed captioning compliant with global accessibility standards.',
    ],
    localizationRequirements: [
      'SCORM 1.2, SCORM 2004, and xAPI package re-authoring and verification in staging LMS.',
      'Culturally adapted imagery, diagrams, and illustrative examples.',
      'Audio-to-slide synchronization down to 100ms tolerance.',
      'Localized interactive assessment scoring and feedback prompts.',
    ],
    benefits: [
      '12M+ students and corporate trainees actively learning on Rizqoraa-localized platforms.',
      '94% course completion rate across international student cohorts.',
      '55% reduction in course reproduction costs vs re-filming localized video content.',
      'Full compliance with global digital accessibility mandates (WCAG 2.1 AA).',
    ],
    relevantServices: [
      {
        id: 'voiceover-dubbing',
        slug: 'voiceover-dubbing',
        name: 'E-Learning Voiceover & Narration',
        description: 'Warm, authoritative narrators pacing lessons for optimal comprehension.',
        iconName: 'Mic2',
      },
      {
        id: 'subtitling',
        slug: 'subtitling',
        name: 'Lecture Subtitling & SDH',
        description: 'Accessible closed captions and burned-in subtitles for educational videos.',
        iconName: 'Film',
      },
      {
        id: 'dtp',
        slug: 'dtp',
        name: 'Courseware & Workbook DTP',
        description: 'Formatting student workbooks, syllabi, and presentation slides.',
        iconName: 'BookOpen',
      },
      {
        id: 'multilingual-content-solutions',
        slug: 'multilingual-content-solutions',
        name: 'Pedagogical Course Adaptation',
        description: 'Quiz question localization, scenario adaptation, and cultural vetting.',
        iconName: 'GraduationCap',
      },
    ],
    workflows: [
      {
        step: '01',
        title: 'Curriculum & Multimedia Audit',
        description: 'Deconstructing SCORM courses into text, audio, video, graphics, and quiz logic elements.',
        deliverable: 'Asset inventory & LMS compatibility checklist',
      },
      {
        step: '02',
        title: 'Instructional Transcreation',
        description: 'Adapting course text, learning objectives, and cultural examples with native educators.',
        deliverable: 'Localized script & storyboard',
      },
      {
        step: '03',
        title: 'Voiceover & Subtitle Mastering',
        description: 'Recording professional narration and mastering audio synchronized to slide timings.',
        deliverable: 'Timed multilingual media tracks',
      },
      {
        step: '04',
        title: 'LMS Re-packaging & Verification',
        description: 'Re-compiling SCORM packages and validating quiz scoring inside your destination LMS.',
        deliverable: 'Ready-to-deploy SCORM/xAPI packages',
      },
    ],
    globalConsiderations: [
      'Pedagogical hierarchy differences between Western inquiry-based vs Eastern lecture-based learning.',
      'Appropriateness of workplace interaction scenarios across diverse cultural and legal contexts.',
      'Measurement conversions and local monetary units in economic and math exercises.',
    ],
    stat: '12M+',
    statLabel: 'Students learning on localized e-learning platforms',
    visualTheme: {
      accentColor: '#E4032E',
      badgeText: 'SCORM & LMS Turnkey Localization',
      symbol: 'EDU // SCORM',
      metricTitle: 'Active Learners',
      metricValue: '12,400,000+',
      type: 'education',
    },
    ctaText: 'Scale Your E-Learning Programs Worldwide',
    featuredInHome: false,
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing & Engineering',
    shortName: 'Manufacturing',
    iconName: 'Factory',
    tagline: 'Flawless Technical Accuracy for Heavy Equipment and Assembly Lines',
    desc: 'Precision technical manuals, CAD drawings, safety data sheets (MSDS), and supply chain documentation.',
    detailedDesc:
      'In heavy industry and global manufacturing, a mistranslated instruction is a catastrophic safety and operational hazard. Rizqoraa provides uncompromising technical translation and multilingual desktop publishing (DTP) for industrial machinery, automotive manufacturing plants, chemical processing facilities, and global aerospace supply chains.',
    category: 'Industrial',
    keyChallenges: [
      'Dense engineering terminology requiring specialized mechanical, chemical, and electrical knowledge.',
      'Critical workplace safety liability under OSHA, CE, and ISO 3864 hazard warning regulations.',
      'Complex multi-layer CAD schematics, Framer files, and InDesign blueprints requiring micro-level formatting.',
      'Harmonizing terminology across distributed global manufacturing plants in 30+ countries.',
    ],
    solutionHighlights: [
      'Domain-expert technical linguists with engineering backgrounds and mechanical expertise.',
      'Certified multilingual desktop publishing (DTP) across AutoCAD, InDesign, Illustrator, and PTC Arbortext.',
      'Strict terminology centralization with enterprise Translation Memory (TM) saving up to 50% on repeat manuals.',
      'OSHA, ANSI Z535, and CE mark hazard communication compliance verification.',
    ],
    localizationRequirements: [
      'ISO 17100 certified technical review and terminology lock.',
      'Hazard warning signal word harmonization (DANGER, WARNING, CAUTION, NOTICE).',
      'Preservation of exact schematic callout numbering and part index references.',
      'Print-ready vector PDF generation with correct font licensing and embedded glyphs.',
    ],
    benefits: [
      '99.9% technical precision accuracy across complex equipment operator manuals.',
      '40% reduction in equipment downtime and servicing errors caused by user manual confusion.',
      'Up to 50% cost savings on revision manuals using centralized translation memory.',
      '100% regulatory conformity with international machinery safety directives.',
    ],
    relevantServices: [
      {
        id: 'dtp',
        slug: 'dtp',
        name: 'Technical DTP & CAD Schematics',
        description: 'AutoCAD, InDesign, and vector blueprint layout formatting.',
        iconName: 'Layers',
      },
      {
        id: 'document-translation',
        slug: 'document-translation',
        name: 'Operator Manuals & Work Instructions',
        description: 'Standard operating procedures (SOPs), maintenance manuals, and catalogs.',
        iconName: 'FileText',
      },
      {
        id: 'lqa',
        slug: 'linguistic-quality-assurance',
        name: 'Safety Warning Audit & LQA',
        description: 'Compliance checks against OSHA, ANSI, and European CE directives.',
        iconName: 'ShieldCheck',
      },
      {
        id: 'enterprise-language-consulting',
        slug: 'enterprise-language-consulting',
        name: 'Plant-Wide Termbase Deployment',
        description: 'Harmonizing technical terms across global manufacturing hubs.',
        iconName: 'Compass',
      },
    ],
    workflows: [
      {
        step: '01',
        title: 'Schematic & Terminology Audit',
        description: 'Extracting source CAD/InDesign layers and extracting specialized part catalogs into locked glossaries.',
        deliverable: 'Master plant engineering termbase',
      },
      {
        step: '02',
        title: 'Certified Engineering Translation',
        description: 'Translation by degreed mechanical and electrical engineers specialized in industrial machinery.',
        deliverable: 'Technical draft with locked callouts',
      },
      {
        step: '03',
        title: 'Precision CAD/DTP Typesetting',
        description: 'Re-aligning text callouts, schematic leader lines, and hazard symbol placements.',
        deliverable: 'High-resolution print-ready proof',
      },
      {
        step: '04',
        title: 'Safety & Compliance Sign-Off',
        description: 'Final sign-off verifying hazard label conformity against destination country safety statutes.',
        deliverable: 'Certified manufacturing technical package',
      },
    ],
    globalConsiderations: [
      'Unit system conversions: Metric (mm, kg, bar) vs Imperial (inches, lbs, PSI).',
      'Hazard warning symbols: ISO 7010 vs ANSI Z535 symbol differences.',
      'Right-to-left layout mirroring for Arabic and Hebrew engineering schematics.',
    ],
    stat: '99.9%',
    statLabel: 'Precision accuracy across technical specifications',
    visualTheme: {
      accentColor: '#E4032E',
      badgeText: 'ISO 17100 & CE Directive Compliant',
      symbol: 'MFG // CAD',
      metricTitle: 'Technical Precision',
      metricValue: '99.94%',
      type: 'manufacturing',
    },
    ctaText: 'Request an Engineering Documentation Audit',
    featuredInHome: false,
  },
  {
    id: 'travel-hospitality',
    slug: 'travel-hospitality',
    name: 'Travel & Hospitality',
    shortName: 'Travel',
    iconName: 'Plane',
    tagline: 'Inspiring Multilingual Experiences That Welcome the World',
    desc: 'Multilingual booking engines, luxury hotel transcreation, airline guest portals, and destination guides.',
    detailedDesc:
      'Hospitality begins with feeling understood. Rizqoraa empowers global hotel groups, luxury resorts, international airlines, tourism boards, and online travel agencies (OTAs) to captivate international travelers at every touchpoint—from inspirational booking copy and dynamic flight booking engines to in-room dining menus and guest mobile apps.',
    category: 'Consumer',
    keyChallenges: [
      'Inspirational marketing copy falling flat when translated literally without evocative emotional resonance.',
      'Complex booking engine integrations requiring live currency conversion and regional travel documentation rules.',
      'High seasonal velocity with promotional offers and holiday campaigns needing rapid rollout across 25+ markets.',
      'Consistency across diverse touchpoints: web portals, airport signage, mobile check-in, and concierge staff apps.',
    ],
    solutionHighlights: [
      'Creative transcreation by lifestyle writers capturing the sensory romance and luxury tone of your properties.',
      'Dynamic XML/API integration with reservation systems (Amadeus, Sabre, Opera, SiteMinder).',
      'In-country hospitality SEO ensuring resort properties rank on Baidu, Yandex, Google, and regional travel search engines.',
      'Complete omnichannel guest touchpoint alignment: web, app, email confirmations, and in-room collateral.',
    ],
    localizationRequirements: [
      'Dynamic date, time, and multi-currency formatting on booking confirmation screens.',
      'Culturally vetted culinary menus with dietary requirement and allergen translation precision.',
      'Signage and wayfinding typography readable across airport terminals and hotel lobbies.',
      'Localized cancellation terms complying with consumer protection laws in each destination country.',
    ],
    benefits: [
      '42% increase in direct international bookings on localized multilingual resort portals.',
      '3.8x uplift in international guest loyalty program enrollments.',
      'Zero booking disputes arising from misinterpreted cancellation or baggage terms.',
      'Seamless multi-channel presence covering 35+ global traveler markets.',
    ],
    relevantServices: [
      {
        id: 'multilingual-content-solutions',
        slug: 'multilingual-content-solutions',
        name: 'Hospitality Transcreation',
        description: 'Inspiring hotel descriptions, destination itineraries, and marketing reels.',
        iconName: 'Sparkles',
      },
      {
        id: 'software-localization',
        slug: 'software-localization',
        name: 'Booking Engine & Guest App UI',
        description: 'Room selection, payment gateways, and in-stay mobile concierge apps.',
        iconName: 'CalendarCheck',
      },
      {
        id: 'dtp',
        slug: 'dtp',
        name: 'In-Room Collateral & Menus',
        description: 'Fine dining menus, spa brochures, and guest directory typesetting.',
        iconName: 'Book',
      },
      {
        id: 'subtitling',
        slug: 'subtitling',
        name: 'Destination Video Subtitles',
        description: 'Aviation safety videos, tourism trailers, and virtual property tours.',
        iconName: 'Tv',
      },
    ],
    workflows: [
      {
        step: '01',
        title: 'Brand Tone & Luxury Calibration',
        description: 'Capturing your brand personality (e.g. ultra-luxury boutique, adventurous eco-resort, sleek business hotel).',
        deliverable: 'Hospitality tone-of-voice playbook',
      },
      {
        step: '02',
        title: 'Creative Transcreation & Copywriting',
        description: 'Lifestyle writers craft evocative travel narratives that spark emotional wanderlust in target markets.',
        deliverable: 'Transcreated web & booking content',
      },
      {
        step: '03',
        title: 'Booking Engine Integration & Testing',
        description: 'Testing live booking funnels for date pickers, currency conversions, and payment confirmations.',
        deliverable: 'Friction-free localized booking test report',
      },
      {
        step: '04',
        title: 'Collateral Formatting & Launch',
        description: 'Typesetting menus and brochures with high-end print-ready DTP for physical property placement.',
        deliverable: 'Complete physical & digital hospitality suite',
      },
    ],
    globalConsiderations: [
      'Dietary descriptions (Halal, Kosher, Vegan, Allergen warnings) requiring cultural and religious fidelity.',
      'Calendar formats (e.g. DD/MM/YYYY vs MM/DD/YYYY) preventing costly missed flight and reservation errors.',
      'Different regional perceptions of luxury and service hospitality etiquette.',
    ],
    stat: '42%',
    statLabel: 'Increase in direct international bookings',
    visualTheme: {
      accentColor: '#E4032E',
      badgeText: 'Omnichannel Hospitality & Booking Engine',
      symbol: 'VOYAGE // RESORT',
      metricTitle: 'Booking Conversion Lift',
      metricValue: '+42.3%',
      type: 'travel',
    },
    ctaText: 'Elevate Your Global Guest Experience',
    featuredInHome: false,
  },
  {
    id: 'automotive',
    slug: 'automotive',
    name: 'Automotive & Aerospace',
    shortName: 'Automotive',
    iconName: 'Car',
    tagline: 'Connected Vehicle Telemetry & In-Cabin Speech AI Localization',
    desc: 'In-vehicle infotainment (IVI) UI, ADAS safety alerts, autonomous driving datasets, and dealer manuals.',
    detailedDesc:
      'As vehicles transform into software-defined mobility computers, linguistic precision touches driver safety. Rizqoraa delivers cutting-edge localization for connected car infotainment screens, heads-up displays, driver-assistance voice prompts, vehicle diagnostic software, and multilingual training datasets for autonomous driving AI models.',
    category: 'Industrial',
    keyChallenges: [
      'Strict display character constraints on in-dash instrument clusters and heads-up displays (HUDs).',
      'Critical real-time safety warnings (ADAS alerts, emergency braking) where latency or ambiguity is unacceptable.',
      'Acoustic voice model training across hundreds of regional accents and ambient cabin noise conditions.',
      'Regulatory vehicle type-approvals (ECE, FMVSS) requiring certified technical documentation.',
    ],
    solutionHighlights: [
      'Automotive UI string optimization for in-vehicle infotainment (IVI) and digital cockpits.',
      'High-fidelity speech data collection and transcription for automotive in-cabin voice assistants.',
      'ISO 26262 functional safety compliant documentation translation workflows.',
      'Diagnostic Trouble Code (DTC) terminology alignment across global dealership networks.',
    ],
    localizationRequirements: [
      'String abbreviation protocols maintaining driver readability while fitting small cluster displays.',
      'Multi-dialect voice synthesis testing for in-car navigation prompts.',
      'Auto-mirrored right-to-left UI layouts for Middle Eastern left-hand drive automotive markets.',
      'Compliance with international road safety icon standards (ISO 2575).',
    ],
    benefits: [
      'Zero safety recall incidents related to in-cabin display or manual ambiguities.',
      '99.4% speech recognition accuracy across in-vehicle voice assistant models.',
      'Simultaneous vehicle launch across 45+ international automotive markets.',
      'Full compliance with ECE and NHTSA driver distraction guidelines.',
    ],
    relevantServices: [
      {
        id: 'software-localization',
        slug: 'software-localization',
        name: 'In-Vehicle Infotainment (IVI) UI',
        description: 'Instrument cluster strings, center console apps, and HUD warnings.',
        iconName: 'Cpu',
      },
      {
        id: 'voiceover-dubbing',
        slug: 'voiceover-dubbing',
        name: 'ADAS & Navigation Voice Prompts',
        description: 'Crystal-clear acoustic audio prompts for turn-by-turn navigation.',
        iconName: 'Navigation',
      },
      {
        id: 'document-translation',
        slug: 'document-translation',
        name: 'Owner Manuals & Workshop Guides',
        description: 'Digital owner manuals, technician diagnostics, and repair schematics.',
        iconName: 'FileText',
      },
      {
        id: 'lqa',
        slug: 'linguistic-quality-assurance',
        name: 'Automotive LQA & In-Cabin Testing',
        description: 'Rigorous cluster layout verification and driver distraction audits.',
        iconName: 'ShieldCheck',
      },
    ],
    workflows: [
      {
        step: '01',
        title: 'Cluster Display Character Budgeting',
        description: 'Auditing physical pixel widths and character constraints across all digital cockpit screens.',
        deliverable: 'Display character budget & truncation rules',
      },
      {
        step: '02',
        title: 'Automotive-Certified Translation',
        description: 'Drafting strings using ISO 2575 automotive terms and concise ergonomic abbreviations.',
        deliverable: 'Infotainment resource bundles',
      },
      {
        step: '03',
        title: 'Acoustic Voice Assistant Testing',
        description: 'Validating synthesized voice prompts under simulated road noise and acoustic cabin conditions.',
        deliverable: 'Verified speech audio asset package',
      },
      {
        step: '04',
        title: 'In-Vehicle LQA Verification',
        description: 'Physical testing on test benches and in-vehicle prototypes to verify warning alert clarity.',
        deliverable: 'Production-ready vehicle firmware strings',
      },
    ],
    globalConsiderations: [
      'Speedometer and odometer units: Miles per Hour (MPH) vs Kilometers per Hour (km/h).',
      'Tire pressure units: PSI vs bar vs kPa.',
      'Traffic regulatory term variations between UK, US, European, and Japanese driving laws.',
    ],
    stat: '99.4%',
    statLabel: 'Speech recognition accuracy in localized vehicle cockpits',
    visualTheme: {
      accentColor: '#E4032E',
      badgeText: 'ISO 26262 & In-Cabin Cockpit UI',
      symbol: 'AUTO // TELEMETRY',
      metricTitle: 'Voice Recognition Precision',
      metricValue: '99.4%',
      type: 'automotive',
    },
    ctaText: 'Deploy Automotive Localization Solutions',
    featuredInHome: false,
  },
  {
    id: 'media-entertainment',
    slug: 'media-entertainment',
    name: 'Media & Entertainment',
    shortName: 'Entertainment',
    iconName: 'Film',
    tagline: 'Studio-Grade Subtitles, Dubbing, and Theatrical Transcreation',
    desc: 'OTT streaming subtitles, theatrical dubbing, lip-sync audio, metadata localization, and film scripts.',
    detailedDesc:
      'The golden age of global streaming demands cinematic fidelity across every language. Rizqoraa partners with major Hollywood studios, streaming platforms (OTT), and independent distributors to deliver broadcast-quality subtitling, timed closed captioning (SDH), lip-sync dubbing, audio description (AD), and localized metadata that grips international audiences.',
    category: 'Consumer',
    keyChallenges: [
      'Reading speed constraints (Characters Per Second - CPS) without losing the emotional weight or comedic timing.',
      'Ultra-tight turnaround for day-and-date global episodic drops on streaming services.',
      'Lip-sync dialogue adaptation where translated phrases must match the visual mouth movements of on-screen actors.',
      'Anti-piracy security protocols and strict DRM handling for pre-release content.',
    ],
    solutionHighlights: [
      'Frame-accurate subtitle synchronization formatted according to Netflix, Amazon Prime, and Disney+ delivery specs.',
      'Elite network of voice actors, dialogue directors, and ADR sound engineers in major international entertainment hubs.',
      'High-security TPN (Trusted Partner Network) compliant production facilities and encrypted watermarked screeners.',
      'Creative transcreation of film titles, promotional trailers, and OTT carousel metadata.',
    ],
    localizationRequirements: [
      'SMPTE frame-rate accurate timecoding (23.976, 24, 25, 29.97 fps).',
      'Compliant SDH formatting with sound effect descriptions for deaf and hard-of-hearing viewers.',
      'Strict character reading limits (maximum 17 characters per second for adult content).',
      'Dual-language SRT, VTT, DFXP, and IMSC1 XML package generation.',
    ],
    benefits: [
      '5.4x growth in international streaming viewership for localized catalog titles.',
      '99.7% audio-sync precision on complex theatrical dubbing productions.',
      'Zero security leaks or piracy breaches across 500+ pre-release film deliveries.',
      'Synchronized day-and-date release across 40+ global territories.',
    ],
    relevantServices: [
      {
        id: 'subtitling',
        slug: 'subtitling',
        name: 'Broadcast & Streaming Subtitling',
        description: 'Frame-accurate subtitles, closed captions, and SDH for global OTT.',
        iconName: 'Film',
      },
      {
        id: 'voiceover-dubbing',
        slug: 'voiceover-dubbing',
        name: 'Theatrical Dubbing & Lip-Sync',
        description: 'Multi-character voice casting, directed recording, and audio mastering.',
        iconName: 'Mic',
      },
      {
        id: 'transcription',
        slug: 'transcription',
        name: 'Film Dialogue As-Run Scripts',
        description: 'Verbatim timestamped dialogue lists and audio description scripts.',
        iconName: 'FileAudio',
      },
      {
        id: 'multilingual-content-solutions',
        slug: 'multilingual-content-solutions',
        name: 'Trailer & Metadata Transcreation',
        description: 'Movie titles, synopsis copy, and promotional social media campaigns.',
        iconName: 'Tv',
      },
    ],
    workflows: [
      {
        step: '01',
        title: 'Master Script & Screener Ingestion',
        description: 'Ingesting video files into encrypted, watermarked digital vaults and transcribing dialogue with timecodes.',
        deliverable: 'Master timed dialogue list',
      },
      {
        step: '02',
        title: 'Cinematic Transcreation & Spotting',
        description: 'Adapting dialogue to respect reading speed limits while preserving humor, slang, and narrative tension.',
        deliverable: 'Spotted subtitle file & dubbed script',
      },
      {
        step: '03',
        title: 'Voice Casting & Studio Recording',
        description: 'Casting voice actors matching the original timbre and directing sessions in calibrated soundstages.',
        deliverable: 'Mastered 5.1/7.1 audio stems',
      },
      {
        step: '04',
        title: 'Platform QC & Package Delivery',
        description: 'Automated and human quality check against streaming delivery specs (Netflix/Amazon compliant).',
        deliverable: 'Final broadcast-ready delivery package',
      },
    ],
    globalConsiderations: [
      'Cultural humor transcreation (puns, regional pop culture references) needing complete creative re-invention.',
      'Regional profanity and content rating standards (e.g. BBFC in UK, FSK in Germany).',
      'On-screen text replacement vs subtitle forced narratives for signage and letters.',
    ],
    stat: '5.4x',
    statLabel: 'International viewership growth on localized OTT releases',
    visualTheme: {
      accentColor: '#E4032E',
      badgeText: 'Netflix & Amazon Prime Delivery Compliant',
      symbol: 'CINEMA // OTT',
      metricTitle: 'Viewership Multiplier',
      metricValue: '5.4x',
      type: 'media',
    },
    ctaText: 'Stream Your Content to Global Audiences',
    featuredInHome: false,
  },
  {
    id: 'telecom-energy',
    slug: 'telecom-energy',
    name: 'Energy & Telecommunications',
    shortName: 'Energy & Telecom',
    iconName: 'Zap',
    tagline: 'Critical Infrastructure Localization for Energy & Telecom Leaders',
    desc: 'Telecommunications firmware, renewable energy project proposals, grid safety standards, and customer self-serve apps.',
    detailedDesc:
      'Powering the modern world requires international cooperation across cross-border energy grids, renewable solar and wind farms, oil and gas joint ventures, and global telecommunications carriers. Rizqoraa delivers high-stakes technical language solutions for multinational utility conglomerates, telecom operators, and engineering EPC contractors.',
    category: 'Industrial',
    keyChallenges: [
      'Cross-border regulatory filings and Environmental Impact Assessments (EIAs) requiring strict ministry compliance.',
      'High-risk field safety protocols where ambiguous translation on offshore rigs or high-voltage lines causes fatalities.',
      'Telecom network firmware and carrier self-service billing apps requiring rapid multilingual rollout.',
      'Complex multilateral consortium joint venture contracts involving multiple sovereign legal systems.',
    ],
    solutionHighlights: [
      'Technical language specialists with deep knowledge in power transmission, renewables, and telecommunications.',
      'Fast-response translation teams for international pipeline tenders, EPC proposals, and government bids.',
      'Field crew safety manual standardization following international safety directives (OSHA, OGP, IEC).',
      'Secure data processing infrastructure compliant with critical infrastructure national security standards.',
    ],
    localizationRequirements: [
      'IEC and IEEE standardized engineering terminology alignment.',
      'Multilingual emergency response procedure cards and hazard signaling.',
      'Carrier-grade firmware string verification for telecom routers, switches, and customer portals.',
      'Consortium legal agreements certified for international arbitration venues.',
    ],
    benefits: [
      '30% reduction in international infrastructure project onboarding timelines.',
      '100% compliance record on multinational environmental impact submissions.',
      'Zero safety incidents recorded across field crews using Rizqoraa-standardized safety manuals.',
      'Seamless multi-carrier telecom portal synchronization across 20+ countries.',
    ],
    relevantServices: [
      {
        id: 'document-translation',
        slug: 'document-translation',
        name: 'EPC Tenders & EIA Filings',
        description: 'Engineering tenders, environmental impact reports, and concession agreements.',
        iconName: 'FileText',
      },
      {
        id: 'dtp',
        slug: 'dtp',
        name: 'Field Safety Protocols & DTP',
        description: 'Emergency response flipbooks, grid safety schematics, and warning signage.',
        iconName: 'ShieldAlert',
      },
      {
        id: 'software-localization',
        slug: 'software-localization',
        name: 'Telecom Self-Serve & Billing Apps',
        description: 'Customer account portals, bill breakdowns, and mobile data top-up apps.',
        iconName: 'Smartphone',
      },
      {
        id: 'enterprise-language-consulting',
        slug: 'enterprise-language-consulting',
        name: 'Global Consortium Language Strategy',
        description: 'Standardizing technical language across multinational joint venture partners.',
        iconName: 'Compass',
      },
    ],
    workflows: [
      {
        step: '01',
        title: 'Standard & Concession Analysis',
        description: 'Mapping engineering specifications against national energy regulator and ministry guidelines.',
        deliverable: 'Regulatory terminology matrix',
      },
      {
        step: '02',
        title: 'Energy Specialist Translation',
        description: 'Translation by chartered technical linguists with experience in oil, gas, renewables, and grid networks.',
        deliverable: 'Technical proposal & engineering draft',
      },
      {
        step: '03',
        title: 'Hazard & Safety Verification',
        description: 'Reviewing life-critical high-voltage and offshore warning statements for zero ambiguity.',
        deliverable: 'Certified safety compliance audit',
      },
      {
        step: '04',
        title: 'Tender & Technical Package Release',
        description: 'Final packaging with certified notarizations ready for sovereign ministry submission.',
        deliverable: 'Submission-ready tender & engineering dossier',
      },
    ],
    globalConsiderations: [
      'Energy unit conventions: Kilowatt-hours (kWh) vs Megajoules (MJ) vs British Thermal Units (BTU).',
      'Environmental regulatory terminology differences between EPA (US), EU Green Deal, and regional ministries.',
      'Technical communication protocols for multinational offshore operating crews.',
    ],
    stat: '30%',
    statLabel: 'Reduction in international project onboarding time',
    visualTheme: {
      accentColor: '#E4032E',
      badgeText: 'IEC & Critical Infrastructure Compliant',
      symbol: 'ENERGY // GRID',
      metricTitle: 'Tender Win Rate Lift',
      metricValue: '+32.8%',
      type: 'energy',
    },
    ctaText: 'Partner on Global Energy & Telecom Projects',
    featuredInHome: false,
  },
];
