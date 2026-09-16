import { LanguageDetail } from '../types';

export const COMPREHENSIVE_LANGUAGES: LanguageDetail[] = [
  {
    id: 'en',
    slug: 'english',
    name: 'English',
    nativeName: 'English',
    code: 'EN',
    region: 'Global',
    subRegion: 'Global / North America / Europe / APAC',
    speakers: '1.5 Billion',
    script: 'Latin',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '99.8%',
    popularPair: true,
    countries: ['United States', 'United Kingdom', 'Canada', 'Australia', 'Singapore', 'India', 'New Zealand', 'South Africa'],
    dialects: ['US (General American)', 'UK (Received Pronunciation)', 'Canadian', 'Australian', 'Global Business English'],
    description: 'The international lingua franca of global business, finance, software, and international treaties. Rizqoraa delivers high-fidelity localization between US, UK, Commonwealth, and international variations.',
    culturalNuance: 'Variations in spelling (e.g. localization vs localisation), date conventions (MM/DD vs DD/MM), tone formality, and regulatory terminology differences across US, UK, and Australian jurisdictions.',
    commonMarkets: ['Technology & SaaS', 'Financial Services & Banking', 'Biopharma & Medical Devices', 'Legal & International Arbitration'],
    supportedServices: ['Document Translation', 'Software Localization', 'Neural MTPE', 'Video Subtitling', 'LQA & Compliance Verification'],
    enterpriseUseCases: [
      'SEC 10-K and financial filings adaptation',
      'Clinical trial protocols and FDA documentation',
      'Global SaaS UI strings and product documentation',
      'Corporate governance policies and cross-border M&A'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Accelerating global reach with cultural precision.'
    }
  },
  {
    id: 'ar',
    slug: 'arabic',
    name: 'Arabic',
    nativeName: 'العربية',
    code: 'AR',
    region: 'EMEA',
    subRegion: 'Middle East & North Africa (MENA)',
    speakers: '400+ Million',
    script: 'Arabic (RTL)',
    scriptType: 'arabic',
    direction: 'rtl',
    accuracyRate: '98.8%',
    popularPair: true,
    countries: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Egypt', 'Kuwait', 'Bahrain', 'Oman', 'Morocco'],
    dialects: ['Modern Standard Arabic (MSA)', 'Gulf (Khaleeji)', 'Egyptian', 'Levantine', 'Maghrebi'],
    description: 'The official language of 25+ countries across the Middle East and North Africa. Critical for government tenders, energy sectors, fintech, and consumer brands expanding into the GCC and MENA regions.',
    culturalNuance: 'Strict Right-to-Left (RTL) mirror-layout engineering, complex ligature glyph shaping, Islamic banking compliance terminology, and respectful cultural framing in corporate marketing.',
    commonMarkets: ['GCC Government & Sovereign Funds', 'Energy, Oil & Gas', 'Islamic Banking & Fintech', 'Aviation & Luxury Goods'],
    supportedServices: ['RTL Software & Mobile UI Adaptation', 'Legal Contract Translation', 'Technical Manuals (Aero/Energy)', 'Voiceover & Dubbing', 'Desktop Publishing (InDesign/Illustrator)'],
    enterpriseUseCases: [
      'GCC ministerial procurement tenders and compliance submissions',
      'Arabic banking portal localization with strict RTL alignment',
      'Petrochemical safety data sheets (MSDS) and operations manuals',
      'E-commerce brand voice transcreation for high-net-worth consumers'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'تسريع الوصول العالمي بدقة ثقافية استثنائية.'
    }
  },
  {
    id: 'hi',
    slug: 'hindi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    code: 'HI',
    region: 'APAC',
    subRegion: 'South Asia (India)',
    speakers: '600+ Million',
    script: 'Devanagari',
    scriptType: 'devanagari',
    direction: 'ltr',
    accuracyRate: '98.5%',
    popularPair: true,
    countries: ['India', 'Fiji', 'Nepal', 'Mauritius', 'Global Indian Diaspora'],
    dialects: ['Standard Hindi (Khariboli)', 'Bilingual Hinglish (Urban Tech/Advertising)', 'Formal Suddha Hindi (Legal/Gov)'],
    description: 'The premier national official language of the fifth-largest global economy. Essential for digital inclusion, tier-2/tier-3 Indian consumer penetration, public governance, and mobile entertainment.',
    culturalNuance: 'Devanagari script font rendering across digital displays, honorific grammar markers (Aap vs Tum), and balance between formal Sanskritized vocabulary and contemporary urban conversational idioms.',
    commonMarkets: ['Fintech & UPI Payment Ecosystems', 'Consumer Tech & Mobile Apps', 'Automotive & Manufacturing', 'Pharma & Public Health Information'],
    supportedServices: ['App Localization & Micro-copy', 'Government Notice Translation', 'Audio Annotation & ASR Speech Training', 'Subtitling & OTT Dubbing', 'Consumer Packaging DTP'],
    enterpriseUseCases: [
      'UPI payment gateway interface and micro-lending app localization',
      'Automotive diagnostic manual and maintenance handbook translation',
      'Pan-India corporate compliance notices and statutory benefits guidelines',
      'E-learning courseware and multimedia training videos'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'सांस्कृतिक सटीकता के साथ वैश्विक पहुंच को तीव्र करना।'
    }
  },
  {
    id: 'es',
    slug: 'spanish',
    name: 'Spanish',
    nativeName: 'Español',
    code: 'ES',
    region: 'Americas',
    subRegion: 'Latin America & Spain',
    speakers: '595 Million',
    script: 'Latin',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '99.4%',
    popularPair: true,
    countries: ['Mexico', 'Spain', 'Colombia', 'Argentina', 'Chile', 'Peru', 'United States (45M+ Hispanic population)'],
    dialects: ['Neutral Latin American Spanish (LatAm)', 'Castilian (Spain)', 'Rioplatense (Argentina/Uruguay)', 'Mexican Spanish', 'US Hispanic'],
    description: 'The second most spoken native language worldwide. Vital for multinational enterprises scaling across North America, Central America, the Andean corridor, and the European Union.',
    culturalNuance: 'Differences between Castilian "vosotros" and Latin American "ustedes", regional vocabulary variations in technical apparatus, and localized tax/regulatory terminology across 20 distinct nations.',
    commonMarkets: ['Renewable Energy & Infrastructure', 'eCommerce & Retail', 'Healthcare & Patient Portals', 'Gaming & Digital Media'],
    supportedServices: ['Neutral LatAm Localization', 'Castilian Medical Translation', 'MTPE High-Throughput Post-Editing', 'Video Subtitling & Dubbing', 'LQA & Functional Testing'],
    enterpriseUseCases: [
      'Cross-border digital retail platform localization for LatAm shoppers',
      'Clinical trial informed consent forms (ICF) approved by CEIC and COFEPRIS',
      'Gaming dialogue script translation and voice talent casting',
      'Solar plant engineering specifications and SCADA telemetry systems'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Acelerando el alcance global con precisión cultural.'
    }
  },
  {
    id: 'fr',
    slug: 'french',
    name: 'French',
    nativeName: 'Français',
    code: 'FR',
    region: 'EMEA',
    subRegion: 'Western Europe & Francophone Africa',
    speakers: '320 Million',
    script: 'Latin',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '99.3%',
    popularPair: true,
    countries: ['France', 'Canada (Quebec)', 'Belgium', 'Switzerland', 'Senegal', 'Ivory Coast', 'Morocco'],
    dialects: ['Metropolitan French (France)', 'Canadian French (Quebec Bill 96 Compliance)', 'Swiss French', 'West African French'],
    description: 'A powerhouse international diplomatic and commercial language across Europe, North America, and high-growth African economies. Stringent regulatory standards require exact terminology adherence.',
    culturalNuance: 'Text expansion (typically expands 15-25% from English), strict punctuation spacing (non-breaking spaces before colons and guillemets), and Canadian Quebec OQLF legal compliance standards.',
    commonMarkets: ['Luxury Goods & Cosmetics', 'Aerospace & Defense', 'Life Sciences & EMA Compliance', 'Telecommunications in Francophone Africa'],
    supportedServices: ['Quebec Bill 96 Packaging & Software Compliance', 'EMA SmPC Medical Translation', 'DTP Layout Reflow for Text Expansion', 'Certified Court Translation', 'Subtitling'],
    enterpriseUseCases: [
      'Quebec statutory retail packaging and enterprise software compliance',
      'Aerospace technical flight manuals and avionics maintenance protocols',
      'Haute couture and luxury cosmetic marketing transcreation',
      'European patent filings (EPO) and cross-border arbitration'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Accélérer le rayonnement mondial avec précision culturelle.'
    }
  },
  {
    id: 'de',
    slug: 'german',
    name: 'German',
    nativeName: 'Deutsch',
    code: 'DE',
    region: 'EMEA',
    subRegion: 'Central Europe (DACH)',
    speakers: '135 Million',
    script: 'Latin',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '99.5%',
    popularPair: true,
    countries: ['Germany', 'Austria', 'Switzerland', 'Liechtenstein', 'Luxembourg'],
    dialects: ['Standard High German (Hochdeutsch)', 'Swiss German (no ß character)', 'Austrian German'],
    description: 'The economic engine of Europe. German translation demands extreme grammatical rigor, compound noun precision, engineering discipline, and exhaustive technical accuracy.',
    culturalNuance: 'Significant text expansion (up to 30% longer than English), compound words requiring hyphenation rules in narrow UI containers, and formal address conventions (Sie vs Du).',
    commonMarkets: ['Heavy Machinery & Industrial Automation', 'Automotive Engineering', 'Chemicals & Materials Science', 'Precision Instruments & Robotics'],
    supportedServices: ['Technical Documentation & Manuals', 'DIN / ISO Standard Alignment', 'Software UI String Truncation Handling', 'Patent & IP Translation', 'Termbase Management'],
    enterpriseUseCases: [
      'Automotive factory floor robotics manuals and PLC firmware UI',
      'Enterprise ERP / SAP documentation and data dictionary localization',
      'CE-mark medical device instructions for use (IFU)',
      'B2B engineering component whitepapers and CAD drawings'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Globale Reichweite mit kultureller Präzision beschleunigen.'
    }
  },
  {
    id: 'zh',
    slug: 'chinese',
    name: 'Chinese',
    nativeName: '中文 (简体 / 繁體)',
    code: 'ZH',
    region: 'APAC',
    subRegion: 'Greater China & East Asia',
    speakers: '1.3 Billion',
    script: 'Han (Simplified & Traditional)',
    scriptType: 'cjk',
    direction: 'ltr',
    accuracyRate: '99.0%',
    popularPair: true,
    countries: ['China (Mainland)', 'Taiwan', 'Hong Kong', 'Singapore', 'Malaysia'],
    dialects: ['Simplified Chinese (Mandarin - Mainland)', 'Traditional Chinese (Taiwan)', 'Traditional Chinese (Hong Kong)', 'Singaporean Mandarin'],
    description: 'The most spoken language group globally and an indispensable market for world trade. Covers both Simplified characters (Mainland/Singapore) and Traditional characters (Taiwan/Hong Kong).',
    culturalNuance: 'Strict script segregation (Simplified vs Traditional), distinct IT and tech terminology between Taiwan and Mainland China, character count compactness, and high-density font rendering.',
    commonMarkets: ['Semiconductors & Electronics', 'Cross-border E-Commerce', 'Consumer Hardware', 'Fintech & Capital Markets'],
    supportedServices: ['Dual Simplified/Traditional Localization', 'Chinese Font Licensing & Glyph Optimization', 'E-commerce Listing Transcreation', 'Patent Translation (CNIPA)', 'Software UI QA'],
    enterpriseUseCases: [
      'Semiconductor fabrication equipment manuals and cleanroom SOPs',
      'Mobile gaming UI, story quest scripts, and voice acting for Greater China',
      'Cross-border logistics APIs, customs manifests, and import documentation',
      'Stock exchange circulars and quarterly financial reports (HKEX / TWSE)'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: '以卓越的文化精准度，加速全球化业务拓展。'
    }
  },
  {
    id: 'ja',
    slug: 'japanese',
    name: 'Japanese',
    nativeName: '日本語',
    code: 'JA',
    region: 'APAC',
    subRegion: 'East Asia (Japan)',
    speakers: '125 Million',
    script: 'Kanji / Hiragana / Katakana',
    scriptType: 'cjk',
    direction: 'ltr',
    accuracyRate: '98.9%',
    popularPair: true,
    countries: ['Japan'],
    dialects: ['Standard Japanese (Tokyo/Hyojungo)', 'Kansai Regional Dialect (Media/Gaming)'],
    description: 'The world’s fourth-largest economy renowned for exacting quality expectations. Japanese users expect native-grade natural phrasing, respectful Keigo honorific systems, and flawless typography.',
    culturalNuance: 'Four writing systems (Kanji, Hiragana, Katakana for loan words, Romaji), intricate honorific levels (Sonkeigo, Kenjougo, Teineigo), and zero tolerance for awkward machine translation artifacts.',
    commonMarkets: ['Robotics & Industrial Automation', 'Automotive & Precision Optics', 'Gaming & Anime Entertainment', 'Pharmaceuticals & PMDA Approvals'],
    supportedServices: ['Keigo Honorifics Tone Calibration', 'PMDA Regulatory Medical Translation', 'Video Game Localization (L10n)', 'Katakana Terminology Standardization', 'Desktop Publishing'],
    enterpriseUseCases: [
      'Enterprise SaaS customer onboarding portals and help documentation',
      'Japanese PMDA pharmaceutical dossier submissions and clinical trials',
      'Console and mobile video game storyline localization and audio recording',
      'High-precision robotics calibration software and telemetry alerts'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: '文化的妥当性と正確性を極め、グローバル展開を加速する。'
    }
  },
  {
    id: 'ko',
    slug: 'korean',
    name: 'Korean',
    nativeName: '한국어',
    code: 'KO',
    region: 'APAC',
    subRegion: 'East Asia (South Korea)',
    speakers: '82 Million',
    script: 'Hangul',
    scriptType: 'cjk',
    direction: 'ltr',
    accuracyRate: '98.7%',
    popularPair: true,
    countries: ['South Korea', 'Korean Diaspora in US, Japan, China'],
    dialects: ['Standard Korean (Seoul Dialect)'],
    description: 'A global digital trailblazer in semiconductors, electric vehicles, gaming, and digital culture (K-Culture). Korean localization requires modern terminology and precise honorific cadence.',
    culturalNuance: 'Complex speech levels (Hasipsio-che formal vs Haeyo-che polite informal), rapid adoption of English tech loanwords in Hangul, and word-breaking constraints in responsive web viewports.',
    commonMarkets: ['Semiconductors & Battery Tech', 'Mobile Gaming & Webtoons', 'Consumer Electronics & Smart Displays', 'Biotech & MFDS Compliance'],
    supportedServices: ['Hangul Font Glyphs Optimization', 'Webtoon & Entertainment Localization', 'MFDS Regulatory Document Translation', 'E-Sports & Gaming Localization', 'App UI Testing'],
    enterpriseUseCases: [
      'Lithium-ion battery cell engineering specifications and safety sheets',
      'Massive Multiplayer Online (MMO) gaming dialogue and real-time chat filters',
      'Consumer smart TV and home appliance operating system localization',
      'K-beauty formulation sheets and international regulatory filings'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: '문화적 정밀성을 바탕으로 글로벌 확장을 가속화합니다.'
    }
  },
  {
    id: 'pt',
    slug: 'portuguese',
    name: 'Portuguese',
    nativeName: 'Português',
    code: 'PT',
    region: 'Americas',
    subRegion: 'South America & Southern Europe',
    speakers: '260 Million',
    script: 'Latin',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '99.2%',
    popularPair: true,
    countries: ['Brazil', 'Portugal', 'Angola', 'Mozambique', 'Cape Verde'],
    dialects: ['Brazilian Portuguese (PT-BR)', 'European Portuguese (PT-PT)'],
    description: 'The dominant language of South America’s largest economy (Brazil) and a key European language. Crucial for agritech, financial technology, mining, and consumer apps across the Lusophone world.',
    culturalNuance: 'Significant divergence between Brazilian Portuguese (informal pronouns, active voice) and European Portuguese (conservative syntax, direct pronouns). Using the wrong variant damages brand reception.',
    commonMarkets: ['Fintech & Digital Banking (Brazil)', 'Agribusiness & Commodities', 'Renewable Energy & Hydro', 'Gaming & Mobile Streaming'],
    supportedServices: ['PT-BR vs PT-PT Dual Localization', 'Fintech App Micro-copy', 'Legal & Tax Document Translation', 'Voiceover & Dubbing', 'MTPE Post-Editing'],
    enterpriseUseCases: [
      'Digital banking and payment system localization for 100M+ Brazilian smartphone users',
      'Agritech satellite crop monitoring software and agronomy manuals',
      'Hydroelectric and wind turbine maintenance safety protocols',
      'Video game voice talent recording in São Paulo studios'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Acelerando o alcance global com máxima precisão cultural.'
    }
  },
  {
    id: 'it',
    slug: 'italian',
    name: 'Italian',
    nativeName: 'Italiano',
    code: 'IT',
    region: 'EMEA',
    subRegion: 'Southern Europe',
    speakers: '85 Million',
    script: 'Latin',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '99.3%',
    popularPair: false,
    countries: ['Italy', 'Switzerland (Ticino)', 'San Marino', 'Vatican City'],
    dialects: ['Standard Italian', 'Swiss Italian (Ticinese)'],
    description: 'Celebrated for design, high-end automotive, luxury fashion, architecture, and culinary craftsmanship. Demands elegant prose, stylistic poise, and meticulous technical vocabulary.',
    culturalNuance: 'High sensitivity to register and flow; literal machine translations sound robotic to Italian professionals. Requires transcreation for consumer brands and precision for technical machinery.',
    commonMarkets: ['Luxury Fashion & Leather Goods', 'Automotive & Supercars', 'Industrial Packaging Machinery', 'Fine Chemicals & Pharmaceuticals'],
    supportedServices: ['Luxury Brand Transcreation', 'Automotive Workshop Manuals', 'Patent Translation', 'Subtitling & Broadcast Audio', 'DTP Layout Optimization'],
    enterpriseUseCases: [
      'High-end fashion seasonal catalog copywriting and digital boutique localization',
      'Precision packaging robotics manuals and operator touchscreens',
      'European pharmaceutical summary of product characteristics (SmPC)',
      'Luxury yacht navigation and marine engine telemetry interfaces'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Accelerare la presenza globale con autentica precisione culturale.'
    }
  },
  {
    id: 'ru',
    slug: 'russian',
    name: 'Russian',
    nativeName: 'Русский',
    code: 'RU',
    region: 'EMEA',
    subRegion: 'Eastern Europe & Central Asia',
    speakers: '255 Million',
    script: 'Cyrillic',
    scriptType: 'cyrillic',
    direction: 'ltr',
    accuracyRate: '98.6%',
    popularPair: false,
    countries: ['Kazakhstan', 'Uzbekistan', 'Kyrgyzstan', 'Armenia', 'Azerbaijan', 'Belarus', 'Global Diaspora'],
    dialects: ['Standard Russian', 'Central Asian Commercial Russian'],
    description: 'A major international language of Eurasia, scientific research, aviation, space exploration, and heavy engineering across Eastern Europe and Central Asian CIS corridors.',
    culturalNuance: 'Rich case inflection system (6 noun cases), Cyrillic typography rules, significant text expansion, and formal technical vocabulary requirements.',
    commonMarkets: ['Mining & Heavy Industry', 'Aerospace & Aviation', 'Telecommunications', 'Software & Cybersecurity'],
    supportedServices: ['Cyrillic DTP & Typography', 'Heavy Industry Engineering Specs', 'Software Localization', 'Technical Manuals', 'Legal Contracts'],
    enterpriseUseCases: [
      'Underground mining equipment telematics and safety operational protocols',
      'Aviation engine maintenance procedures and safety bulletins',
      'Cross-border international trade contracts and commercial arbitrations',
      'Cybersecurity software threat intelligence reports and alert UI'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Ускоряем глобальный охват с бескомпромиссной культурной точностью.'
    }
  },
  {
    id: 'nl',
    slug: 'dutch',
    name: 'Dutch',
    nativeName: 'Nederlands',
    code: 'NL',
    region: 'EMEA',
    subRegion: 'Western Europe (Benelux)',
    speakers: '28 Million',
    script: 'Latin',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '99.4%',
    popularPair: false,
    countries: ['Netherlands', 'Belgium (Flanders)', 'Suriname', 'Aruba', 'Curaçao'],
    dialects: ['Standard Dutch (Algemeen Nederlands)', 'Flemish (Belgian Dutch)'],
    description: 'The language of one of the world’s most interconnected trading hubs (Port of Rotterdam, Schiphol, ASML semiconductor corridor). Demands direct, clear, and business-focused prose.',
    culturalNuance: 'Nuanced vocabulary distinctions between Netherlands Dutch and Flemish Dutch (Belgium). Dutch consumers value direct, concise, unpretentious communication.',
    commonMarkets: ['Semiconductor Lithography & Tech', 'Maritime Logistics & Shipping', 'Agri-food & Greenhouse Tech', 'Financial Services'],
    supportedServices: ['Dutch & Flemish Dual Localization', 'Semiconductor Technical Manuals', 'E-commerce UI & Payment Gateways', 'Regulatory Compliance'],
    enterpriseUseCases: [
      'Advanced photolithography semiconductor manual translation',
      'Rotterdam port logistics software and container tracking APIs',
      'Dutch healthcare portal and public insurance documentation',
      'Multinational tax compliance filings and corporate governance manuals'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Wereldwijde groei versnellen met culturele precisie.'
    }
  },
  {
    id: 'ur',
    slug: 'urdu',
    name: 'Urdu',
    nativeName: 'اردو',
    code: 'UR',
    region: 'APAC',
    subRegion: 'South Asia & Middle East',
    speakers: '230+ Million',
    script: 'Perso-Arabic (Nastaliq / RTL)',
    scriptType: 'arabic',
    direction: 'rtl',
    accuracyRate: '98.3%',
    popularPair: false,
    countries: ['Pakistan', 'India', 'United Kingdom', 'United Arab Emirates', 'Saudi Arabia'],
    dialects: ['Standard Urdu (Lahore/Karachi)', 'Deccani Urdu', 'Lucknowi Literary Urdu'],
    description: 'The national language of Pakistan and a constitutional language of India. Requires exquisite Nastaliq calligraphic typography rendering, RTL UI support, and culturally rich vocabulary.',
    culturalNuance: 'Nastaliq vs Naskh font rendering on digital platforms, respectful honorific markers (Aap/Janab), and polite formal business etiquette.',
    commonMarkets: ['Telecommunications & Mobile Banking', 'Microfinance & Remittance Services', 'Public Sector & NGOs', 'Broadcast Media & Drama'],
    supportedServices: ['Nastaliq Font Digital Rendering', 'RTL App & Web Development', 'Audio Transcription & ASR Training', 'Legal Documents', 'Subtitling'],
    enterpriseUseCases: [
      'Branchless banking apps (Easypaisa / JazzCash) interface localization',
      'Telecom customer service SMS notifications and IVR audio prompts',
      'Cross-border overseas remittance portal UI and compliance notices',
      'Public health awareness campaigns and vaccination documentation'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'ثقافتی درستگی کے ساتھ عالمی رسائی میں تیزی۔'
    }
  },
  {
    id: 'tr',
    slug: 'turkish',
    name: 'Turkish',
    nativeName: 'Türkçe',
    code: 'TR',
    region: 'EMEA',
    subRegion: 'Eurasia (Turkey & Balkans)',
    speakers: '88 Million',
    script: 'Latin',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '98.9%',
    popularPair: false,
    countries: ['Turkey', 'Northern Cyprus', 'Germany (Diaspora)', 'Austria'],
    dialects: ['Standard Istanbul Turkish'],
    description: 'The strategic bridge between Europe, Central Asia, and the Middle East. An agglutinative language where affixes attach to root words, requiring special handling in UI containers.',
    culturalNuance: 'Vowel harmony rules, dotted and dotless "I" (i/İ vs ı/I) software encoding bug prevention, and respectful corporate address conventions.',
    commonMarkets: ['Automotive Assembly', 'Textiles & Fashion', 'Defense & Drone Technology', 'Medical Tourism & Healthcare'],
    supportedServices: ['Agglutinative Software String Adaptation', 'Automotive Engineering Specs', 'Medical Tourism Patient Documents', 'E-Commerce Localization'],
    enterpriseUseCases: [
      'Commercial vehicle assembly line instructions and safety guidelines',
      'Medical tourism patient intake portals and post-operative instructions',
      'Defense avionics telemetry and unmanned aerial vehicle (UAV) software UI',
      'E-commerce apparel marketplaces and payment gateway interfaces'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Kültürel hassasiyetle küresel erişimi hızlandırıyoruz.'
    }
  },
  {
    id: 'fa',
    slug: 'persian',
    name: 'Persian (Farsi)',
    nativeName: 'فارسی',
    code: 'FA',
    region: 'EMEA',
    subRegion: 'Middle East & Central Asia',
    speakers: '120 Million',
    script: 'Perso-Arabic (RTL)',
    scriptType: 'arabic',
    direction: 'rtl',
    accuracyRate: '98.1%',
    popularPair: false,
    countries: ['Iran', 'Afghanistan (Dari)', 'Tajikistan (Tajik Cyrillic)', 'Diaspora in US & Europe'],
    dialects: ['Tehrani Standard Farsi', 'Dari (Afghanistan)', 'Tajik (Cyrillic script)'],
    description: 'An ancient Indo-European language with profound literary traditions and extensive commercial use across the Persian Gulf and Central Asia.',
    culturalNuance: 'RTL layout formatting, Persian numerals (۰۱۲۳۴۵۶۷۸۹), and polite cultural conversational formulas (Taarof) in professional business discussions.',
    commonMarkets: ['Petrochemicals & Mining', 'Academic Publishing', 'Humanitarian NGOs', 'Cultural Media & Literature'],
    supportedServices: ['RTL Web & Mobile Adaptation', 'Persian Glyph Typesetting', 'Literary & Historical Transcreation', 'Legal & Asylum Documentation'],
    enterpriseUseCases: [
      'International humanitarian aid portal and field worker documentation',
      'Technical mining and mineral processing manuals',
      'Bilingual corporate arbitration filings and commercial contracts',
      'Educational software and distance learning curriculum translation'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'تسریع دسترسی جهانی با دقت فرهنگی بی‌نظیر.'
    }
  },
  {
    id: 'he',
    slug: 'hebrew',
    name: 'Hebrew',
    nativeName: 'עברית',
    code: 'HE',
    region: 'EMEA',
    subRegion: 'Middle East (Israel)',
    speakers: '10 Million',
    script: 'Hebrew (RTL)',
    scriptType: 'hebrew',
    direction: 'rtl',
    accuracyRate: '98.7%',
    popularPair: false,
    countries: ['Israel', 'Jewish Global Diaspora'],
    dialects: ['Modern Standard Israeli Hebrew'],
    description: 'The national language of the "Start-Up Nation" and high-tech innovation ecosystem. Vital for cybersecurity, defense, agritech, and medical technology enterprises.',
    culturalNuance: 'RTL text mirroring, niqqud vowel points usage in instructional materials, gendered verb and pronoun forms, and rapid incorporation of English tech terminology.',
    commonMarkets: ['Cybersecurity & Cloud Defense', 'Medical Device Innovation', 'Agritech & Desalination', 'Venture Capital & Tech Startups'],
    supportedServices: ['RTL Software GUI Adaptation', 'Cybersecurity Threat Intelligence Translation', 'Medical Device IFU Translation', 'Patents & IP Rights'],
    enterpriseUseCases: [
      'Cybersecurity platform administrative dashboards and API alerts',
      'Medical diagnostic imaging software UI and clinical trials',
      'Precision irrigation telemetry and water desalination manual translation',
      'Venture capital investment term sheets and technology licensing agreements'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'האצת הנוכחות הגלובלית בדיוק תרבותי מושלם.'
    }
  },
  {
    id: 'el',
    slug: 'greek',
    name: 'Greek',
    nativeName: 'Ελληνικά',
    code: 'EL',
    region: 'EMEA',
    subRegion: 'Southern Europe',
    speakers: '14 Million',
    script: 'Greek',
    scriptType: 'greek',
    direction: 'ltr',
    accuracyRate: '99.0%',
    popularPair: false,
    countries: ['Greece', 'Cyprus', 'Greek Diaspora (Australia, US, Germany)'],
    dialects: ['Standard Modern Greek', 'Cypriot Greek'],
    description: 'The language with the longest documented history of any Indo-European tongue. Essential for maritime shipping, renewable energy, tourism, and European Union institutional compliance.',
    culturalNuance: 'Greek alphabet font rendering, accentuation rules (tonos), and specialized vocabulary in maritime law and vessel classification societies.',
    commonMarkets: ['Global Maritime Shipping & Chartering', 'Renewable Solar & Wind Energy', 'Pharmaceutical Manufacturing', 'Tourism & Hospitality'],
    supportedServices: ['Maritime Vessel Documentation & ISM Codes', 'EU Directive & Legal Compliance', 'Greek Alphabet DTP', 'Subtitling & Media'],
    enterpriseUseCases: [
      'Commercial maritime tanker maintenance manuals and crew safety protocols',
      'Port authority logistics manifests and customs clearance documents',
      'Solar farm engineering schematics and power purchase agreements (PPA)',
      'Clinical drug dossier filings approved by the National Organization for Medicines (EOF)'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Επιτάχυνση της παγκόσμιας εμβέλειας με πολιτισμική ακρίβεια.'
    }
  },
  {
    id: 'bn',
    slug: 'bengali',
    name: 'Bengali',
    nativeName: 'বাংলা',
    code: 'BN',
    region: 'APAC',
    subRegion: 'South Asia (Bangladesh & Eastern India)',
    speakers: '300+ Million',
    script: 'Bengali',
    scriptType: 'indic',
    direction: 'ltr',
    accuracyRate: '98.3%',
    popularPair: false,
    countries: ['Bangladesh', 'India (West Bengal, Tripura, Assam)', 'Global Diaspora'],
    dialects: ['Standard Colloquial (Cholitobhasha)', 'Dhakaiya Bengali', 'Chittagonian', 'Sylheti'],
    description: 'The seventh most spoken native language in the world. Essential for expanding into the high-growth Bangladesh garment, telecom, and fintech sectors, as well as Eastern India.',
    culturalNuance: 'Complex conjunct consonants (juktakkhors) in Bengali digital fonts, register formality between formal literary and modern conversational registers, and dialect variation.',
    commonMarkets: ['Readymade Garment (RMG) Supply Chain', 'Mobile Financial Services (bKash/Nagad)', 'Telecommunications & Digital Media', 'Public Health & Agriculture'],
    supportedServices: ['Bengali Typography & Unicode Testing', 'Mobile Banking App Localization', 'Garment Factory Audit Reports', 'Audio Annotation & Speech AI'],
    enterpriseUseCases: [
      'Mobile financial service user flows and transaction receipts',
      'Textile supply chain ethical compliance audits and safety guidelines',
      'Agricultural weather advisories and crop insurance smartphone apps',
      'Pharmaceutical patient leaflets and healthcare educational brochures'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'সাংস্কৃতিক নির্ভুলতার সাথে বৈশ্বিক উপস্থিতির দ্রুত প্রসার।'
    }
  },
  {
    id: 'pa',
    slug: 'punjabi',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ / پنجابی',
    code: 'PA',
    region: 'APAC',
    subRegion: 'South Asia (India & Pakistan) & Global Diaspora',
    speakers: '125+ Million',
    script: 'Gurmukhi (India) / Shahmukhi (Pakistan)',
    scriptType: 'indic',
    direction: 'ltr',
    accuracyRate: '98.2%',
    popularPair: false,
    countries: ['India (Punjab, Delhi)', 'Pakistan (Punjab province)', 'Canada', 'United Kingdom', 'United States'],
    dialects: ['Majhi (Standard)', 'Doabi', 'Malwai', 'Pothohari'],
    description: 'A major language with massive global diasporas in Canada, the UK, and the US. Written in Gurmukhi in India and Shahmukhi (Arabic-based script) in Pakistan.',
    culturalNuance: 'Dual script handling (Gurmukhi LTR vs Shahmukhi RTL), diaspora cultural nuances in Canadian and UK public services, and agricultural technical terminology.',
    commonMarkets: ['Agritech & Farm Machinery', 'Transport & Fleet Logistics (North America)', 'Public Healthcare & Municipal Services', 'Media & Music Streaming'],
    supportedServices: ['Dual-Script Localization (Gurmukhi & Shahmukhi)', 'North American Municipal Translation', 'Audio Transcription', 'Voice Dubbing'],
    enterpriseUseCases: [
      'North American commercial trucking fleet safety protocols and driver apps',
      'Canadian municipal health and government benefits information portals',
      'Tractor and combine harvester operation manuals and maintenance guides',
      'Music streaming platform metadata and Punjabi audio subtitling'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'ਸੱਭਿਆਚਾਰਕ ਸ਼ੁੱਧਤਾ ਨਾਲ ਵਿਸ਼ਵ ਪੱਧਰੀ ਪਹੁੰਚ ਨੂੰ ਤੇਜ਼ ਕਰਨਾ।'
    }
  },
  {
    id: 'gu',
    slug: 'gujarati',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    code: 'GU',
    region: 'APAC',
    subRegion: 'South Asia (Western India)',
    speakers: '62 Million',
    script: 'Gujarati',
    scriptType: 'indic',
    direction: 'ltr',
    accuracyRate: '98.4%',
    popularPair: false,
    countries: ['India (Gujarat, Maharashtra)', 'United States', 'United Kingdom', 'East Africa'],
    dialects: ['Standard Gujarati', 'Kathiyawadi', 'Surati', 'Charotari'],
    description: 'The native tongue of India’s premier entrepreneurial and industrial corridor (petrochemicals, pharmaceuticals, diamond cutting, and ports).',
    culturalNuance: 'Distinct Gujarati script sans top horizontal line (shirorekha), deep mercantile business idioms, and high precision required for trade and financial contracts.',
    commonMarkets: ['Chemicals & Petrochemicals', 'Diamond & Jewelry Trade', 'Renewable Energy (Solar/Wind)', 'Mutual Funds & Equity Markets'],
    supportedServices: ['Industrial Engineering Manuals', 'Financial Product Disclosures', 'Gujarati Script Font Validation', 'Local Commerce Translation'],
    enterpriseUseCases: [
      'Chemical processing plant operating procedures and safety hazard sheets',
      'Stock broking and mutual fund investor disclosure documents',
      'Renewable energy park installation contracts and land lease agreements',
      'Diamond certification and supply chain traceability documentation'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'સાંસ્કૃતિક ચોકસાઈ સાથે વૈશ્વિક પહોંચને ઝડપી બનાવવી.'
    }
  },
  {
    id: 'mr',
    slug: 'marathi',
    name: 'Marathi',
    nativeName: 'मराठी',
    code: 'MR',
    region: 'APAC',
    subRegion: 'South Asia (Maharashtra, India)',
    speakers: '95+ Million',
    script: 'Devanagari',
    scriptType: 'devanagari',
    direction: 'ltr',
    accuracyRate: '98.3%',
    popularPair: false,
    countries: ['India (Maharashtra, Goa, Karnataka)', 'Global Diaspora'],
    dialects: ['Standard Marathi (Pune/Mumbai)', 'Varhadi', 'Konkani Marathi', 'Malvani'],
    description: 'The official language of Maharashtra, India’s economic powerhouse state home to Mumbai (financial capital). Critical for financial services, automotive hubs, and state administration.',
    culturalNuance: 'Devanagari script with unique Marathi retroflex lateral flap consonant (ळ), legal terms from the Bombay High Court, and municipal statutory requirements.',
    commonMarkets: ['Banking, Capital Markets & Insurance (BFSI)', 'Automotive Hubs (Pune/Chakan)', 'State Government & Urban Planning', 'Media & Regional OTT'],
    supportedServices: ['BFSI Compliance & Policy Translation', 'Automotive OEM Documentation', 'Marathi Unicode DTP', 'Video Subtitling & Dubbing'],
    enterpriseUseCases: [
      'Mumbai banking headquarters annual compliance reports and customer notices',
      'Automotive component assembly instructions and quality inspection sheets',
      'State regulatory environmental impact assessments (EIA) and urban tenders',
      'OTT regional web series subtitling and audio voiceover'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'सांस्कृतिक अचूकतेसह जागतिक पोहोच गतिमान करणे.'
    }
  },
  {
    id: 'ta',
    slug: 'tamil',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    code: 'TA',
    region: 'APAC',
    subRegion: 'South Asia & Southeast Asia',
    speakers: '85 Million',
    script: 'Tamil',
    scriptType: 'indic',
    direction: 'ltr',
    accuracyRate: '98.5%',
    popularPair: false,
    countries: ['India (Tamil Nadu, Puducherry)', 'Sri Lanka', 'Singapore (Official Language)', 'Malaysia', 'Mauritius'],
    dialects: ['Standard Literary Tamil (Senthamizh)', 'Madurai Dialect', 'Coimbatore Dialect', 'Jaffna Tamil', 'Singaporean Tamil'],
    description: 'One of the world’s oldest surviving classical languages with official language status in Singapore, Sri Lanka, and India. A vital market for global automotive, IT hardware, and SaaS.',
    culturalNuance: 'Diglossia (sharp distinction between formal written Senthamizh and spoken Koduntamil), official Singapore government standard alignment, and specific IT hardware terminology.',
    commonMarkets: ['Automotive & EV Manufacturing (Chennai corridor)', 'SaaS & Enterprise Cloud Software', 'Semiconductor Assembly', 'Banking & Insurance'],
    supportedServices: ['Singapore Official Standard Localization', 'Automotive Technical Manuals', 'SaaS Product UI Translation', 'Audio Annotation & Speech AI'],
    enterpriseUseCases: [
      'Singapore statutory government portals and public healthcare apps',
      'Electric vehicle (EV) battery manufacturing SOPs in Chennai industrial parks',
      'Enterprise cloud SaaS user interface and customer support documentation',
      'Regional insurance claim forms and policy explanatory videos'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'கலாச்சார துல்லியத்துடன் உலகளாவிய அடைவை விரைவுபடுத்துதல்.'
    }
  },
  {
    id: 'te',
    slug: 'telugu',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    code: 'TE',
    region: 'APAC',
    subRegion: 'South Asia (Andhra Pradesh & Telangana, India)',
    speakers: '96 Million',
    script: 'Telugu',
    scriptType: 'indic',
    direction: 'ltr',
    accuracyRate: '98.4%',
    popularPair: false,
    countries: ['India (Telangana, Andhra Pradesh)', 'United States (Fastest-growing tech diaspora)', 'United Kingdom'],
    dialects: ['Standard Coastal Andhra', 'Telangana Dialect (Hyderabad)', 'Rayalaseema'],
    description: 'The premier language of Cyberabad (Hyderabad), India’s biopharma and tech innovation capital. The fastest-growing language among US technology immigrants.',
    culturalNuance: 'Rounded syllabic script requiring precise vowel sign placement, Hyderabad IT corporate register, and specialized pharmaceutical manufacturing terminology.',
    commonMarkets: ['Biopharmaceuticals & Vaccine Manufacturing', 'Information Technology & Data Centers', 'Fintech & Agricultural Lending', 'Film & Entertainment (Tollywood)'],
    supportedServices: ['Biopharma Batch Record Translation', 'Mobile App Localization', 'Telugu Script Font Engineering', 'Film Subtitling & Audio Dubbing'],
    enterpriseUseCases: [
      'Bulk drug manufacturing batch records (BMR) and US FDA audit documents',
      'Hyderabad IT campus employee onboarding portals and safety guidelines',
      'Micro-finance loan application interfaces and voice automated prompts',
      'Tollywood feature film and streaming series multilingual subtitling'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'సాంస్కృతిక ఖచ్చితత్వంతో గ్లోబల్ రీచ్‌ను వేగవంతం చేయడం.'
    }
  },
  {
    id: 'kn',
    slug: 'kannada',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    code: 'KN',
    region: 'APAC',
    subRegion: 'South Asia (Karnataka, India)',
    speakers: '60 Million',
    script: 'Kannada',
    scriptType: 'indic',
    direction: 'ltr',
    accuracyRate: '98.3%',
    popularPair: false,
    countries: ['India (Karnataka - Bangalore Tech Corridor)', 'Global Tech Diaspora'],
    dialects: ['Standard Coastal/Mysore Kannada', 'Bangalore Colloquial Kannada', 'Northern Karnataka (Dharwad)'],
    description: 'The official language of India’s Silicon Valley (Bangalore), aerospace manufacturing, and research institutions.',
    culturalNuance: 'Unique conjunct consonants (ottu akshara), aerospace manufacturing compliance terminology, and municipal Kannada language mandate compliance for enterprise signage.',
    commonMarkets: ['Aerospace & Defense R&D', 'Bangalore Startup Ecosystem', 'Biotech & Precision Farming', 'Automotive Electronics'],
    supportedServices: ['Karnataka Municipal Compliance Signage', 'Aerospace Engineering Docs', 'App & Web Localization', 'Speech AI Datasets'],
    enterpriseUseCases: [
      'Bangalore municipal language mandate compliance for enterprise platforms',
      'Defense aerospace avionics software manuals and testing documentation',
      'Agritech mobile advisory apps for coffee and spice plantations',
      'Fintech app interface and customer service chatbot localization'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'ಸಾಂಸ್ಕೃತಿಕ ನಿಖರತೆಯೊಂದಿಗೆ ಜಾಗತಿಕ ತಲುಪುವಿಕೆಯನ್ನು ವೇಗಗೊಳಿಸುವುದು.'
    }
  },
  {
    id: 'ml',
    slug: 'malayalam',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    code: 'ML',
    region: 'APAC',
    subRegion: 'South Asia (Kerala, India) & Gulf GCC',
    speakers: '38 Million',
    script: 'Malayalam',
    scriptType: 'indic',
    direction: 'ltr',
    accuracyRate: '98.4%',
    popularPair: false,
    countries: ['India (Kerala, Lakshadweep)', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait'],
    dialects: ['Standard Travancore Malayalam', 'Malabar Dialect', 'Central Kerala (Kochi)'],
    description: 'The language of India’s highest literacy state (Kerala) with massive commercial diaspora across the GCC/Middle East (3M+ Non-Resident Keralites in UAE/Saudi Arabia).',
    culturalNuance: 'Complex script ligature shaping, high medical literacy among native speakers, and strong cross-cultural affinity with Gulf Arab commerce.',
    commonMarkets: ['Healthcare & Global Nursing Recruitment', 'Cross-border Remittance & Banking', 'Maritime & Spice Trade', 'Tourism & Wellness'],
    supportedServices: ['Cross-Border Remittance UI', 'Hospitality & Medical Translation', 'Unicode Malayalam DTP', 'Video Subtitling'],
    enterpriseUseCases: [
      'GCC-to-Kerala cross-border remittance apps and transaction SMS alerts',
      'International nursing accreditation exams and hospital care protocols',
      'Marine fisheries telemetry and ocean weather forecasting mobile apps',
      'Ayurvedic wellness brand marketing and clinical research translation'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'സാംസ്കാരിക കൃത്യതയോടെ ആഗോളതലത്തിൽ സാന്നിധ്യം വിപുലമാക്കുക.'
    }
  },
  {
    id: 'th',
    slug: 'thai',
    name: 'Thai',
    nativeName: 'ไทย',
    code: 'TH',
    region: 'APAC',
    subRegion: 'Southeast Asia (Thailand)',
    speakers: '70 Million',
    script: 'Thai',
    scriptType: 'indic',
    direction: 'ltr',
    accuracyRate: '98.1%',
    popularPair: false,
    countries: ['Thailand', 'Laos border communities'],
    dialects: ['Central Thai (Standard Bangkok)', 'Isan (Northeastern)', 'Northern Thai (Lanna)', 'Southern Thai'],
    description: 'The heart of mainland Southeast Asia’s manufacturing, tourism, and automotive assembly hub (the "Detroit of Asia").',
    culturalNuance: 'Unspaced script (no spaces between words; spaces only separate sentences), complex tone marks above/below base consonants, and polite royal particles (Khrab/Kha).',
    commonMarkets: ['Automotive Assembly & Parts', 'Hospitality & Luxury Tourism', 'Food Processing & Agriculture', 'Cosmetics & Medical Tourism'],
    supportedServices: ['Thai Word-Break Algorithm Testing', 'Automotive Factory Floor SOPs', 'Hospitality Transcreation', 'Food Labeling FDA Compliance'],
    enterpriseUseCases: [
      'Automotive factory assembly line manuals and automated robotics alerts',
      'Thai FDA cosmetic and dietary supplement registration dossiers',
      'Five-star hospitality booking engine and guest concierge mobile app',
      'E-commerce livestreaming subtitle translations and product descriptions'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'เร่งขยายธุรกิจสู่ระดับโลกด้วยความแม่นยำทางวัฒนธรรม'
    }
  },
  {
    id: 'vi',
    slug: 'vietnamese',
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
    code: 'VI',
    region: 'APAC',
    subRegion: 'Southeast Asia (Vietnam)',
    speakers: '98 Million',
    script: 'Latin (Chữ Quốc ngữ with tone diacritics)',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '98.6%',
    popularPair: false,
    countries: ['Vietnam', 'United States (Diaspora)', 'France', 'Australia'],
    dialects: ['Northern Vietnamese (Hanoi Standard)', 'Southern Vietnamese (Ho Chi Minh City / Saigon)', 'Central Vietnamese (Hue/Da Nang)'],
    description: 'One of the fastest-growing global manufacturing and consumer tech powerhouses in Southeast Asia.',
    culturalNuance: 'Tonal language with six distinct tones indicated by diacritics (stacked accents causing line-height clipping bugs in poorly coded software UI), and relational pronouns reflecting age/hierarchy.',
    commonMarkets: ['Consumer Electronics Assembly', 'Footwear & Apparel Manufacturing', 'Digital Banking & E-Wallets', 'Renewable Solar & Wind'],
    supportedServices: ['Diacritic Typography Font Testing', 'Manufacturing SOP Manuals', 'Fintech App Localization', 'Gaming & E-Sports Translation'],
    enterpriseUseCases: [
      'Smartphone and display panel cleanroom manufacturing operating procedures',
      'Vietnamese MoIT statutory trade import declarations and certificates of origin',
      'Fintech consumer micro-savings app and digital wallet interface',
      'Solar power plant SCADA interface and inverter telemetry screens'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Tăng tốc vươn tầm toàn cầu với độ chuẩn xác về văn hóa.'
    }
  },
  {
    id: 'id',
    slug: 'indonesian',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    code: 'ID',
    region: 'APAC',
    subRegion: 'Southeast Asia (Indonesia)',
    speakers: '275 Million',
    script: 'Latin',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '98.9%',
    popularPair: false,
    countries: ['Indonesia'],
    dialects: ['Standard Bahasa Indonesia', 'Jakarta Slang (Bahasa Gaul for Social Media/Youth Brands)'],
    description: 'The official unifying language of the world’s fourth most populous nation and the largest economy in Southeast Asia (ASEAN powerhouse).',
    culturalNuance: 'No grammatical gender, plurals formed by reduplication (e.g. anak-anak), and an important distinction between formal regulatory language and trendy urban conversational slang.',
    commonMarkets: ['E-Commerce (Tokopedia/Shopee)', 'Mining (Nickel/Bauxite/Coal)', 'Fintech & Ride-Hailing Super-Apps', 'Consumer Packaged Goods'],
    supportedServices: ['Super-App Micro-copy Localization', 'Mining Safety & Machinery Manuals', 'Halal Certification Compliance', 'Social Media Copywriting'],
    enterpriseUseCases: [
      'Ride-hailing and food delivery super-app driver and customer interfaces',
      'Nickel processing plant and smelter environmental safety procedures',
      'Halal certification food packaging labels approved by BPJPH Indonesia',
      'Fintech peer-to-peer lending regulatory disclosure documents'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Mempercepat jangkauan global dengan presisi budaya.'
    }
  },
  {
    id: 'ms',
    slug: 'malay',
    name: 'Malay',
    nativeName: 'Bahasa Melayu',
    code: 'MS',
    region: 'APAC',
    subRegion: 'Southeast Asia (Malaysia, Brunei, Singapore)',
    speakers: '33 Million',
    script: 'Latin (Rumi)',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '98.8%',
    popularPair: false,
    countries: ['Malaysia', 'Brunei', 'Singapore', 'Southern Thailand'],
    dialects: ['Standard Bahasa Melayu', 'Northern Dialect (Kedah/Penang)', 'East Coast (Kelantan)', 'Sabah & Sarawak Malay'],
    description: 'The national language of Malaysia and Brunei, and one of Singapore’s four official languages. Essential for Southeast Asian banking, oil & gas, and digital commerce.',
    culturalNuance: 'Distinction from Indonesian despite high mutual intelligibility (false friends can alter legal meaning), Islamic banking terminology, and government procurement standards.',
    commonMarkets: ['Islamic Banking & Sukuk Bonds', 'Offshore Oil & Gas (Petronas ecosystem)', 'Semiconductor Packaging & Testing', 'Medical Tourism'],
    supportedServices: ['Islamic Finance Localization', 'Oil Platform Safety Handbooks', 'Semiconductor Cleanroom SOPs', 'Halal Compliance Audits'],
    enterpriseUseCases: [
      'Islamic financial bond (Sukuk) prospectus and Syariah board declarations',
      'Deepwater offshore drilling platform safety operating procedures',
      'Penang semiconductor testing facility cleanroom instructions and safety protocols',
      'Government e-procurement portal registration documentation (ePerolehan)'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Mempercepatkan jangkauan global dengan ketepatan budaya.'
    }
  },
  {
    id: 'sw',
    slug: 'swahili',
    name: 'Swahili',
    nativeName: 'Kiswahili',
    code: 'SW',
    region: 'EMEA',
    subRegion: 'Sub-Saharan Africa (East African Community)',
    speakers: '150 Million',
    script: 'Latin',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '98.0%',
    popularPair: false,
    countries: ['Kenya', 'Tanzania', 'Uganda', 'Democratic Republic of Congo', 'Rwanda', 'Burundi'],
    dialects: ['Kiunguja (Zanzibar Standard)', 'Kimvita (Mombasa)', 'Kingwana (Congo)'],
    description: 'The lingua franca of the 300-million-strong East African Community (EAC) and an official language of the African Union.',
    culturalNuance: 'Bantu noun class agreement system, mobile money (M-Pesa) vocabulary integration, and warm community respectful greetings.',
    commonMarkets: ['Mobile Money & Financial Inclusion (M-Pesa)', 'Telecommunications & Solar Microgrids', 'Agriculture & Commodity Export', 'Global NGO & Healthcare Programs'],
    supportedServices: ['Mobile Banking App Localization', 'Renewable Energy Off-Grid Manuals', 'Global Health Protocol Translation', 'Audio Speech AI Annotation'],
    enterpriseUseCases: [
      'Off-grid pay-as-you-go solar home system mobile payment and status SMS',
      'East African Community regional customs union cross-border freight manifests',
      'Agricultural pest management and fertilizer application SMS advisory services',
      'Global NGO clinical health trials and public immunization campaign materials'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Kuongeza kasi ya ufikiaji wa kimataifa kwa usahihi wa kitamaduni.'
    }
  },
  {
    id: 'uk',
    slug: 'ukrainian',
    name: 'Ukrainian',
    nativeName: 'Українська',
    code: 'UK',
    region: 'EMEA',
    subRegion: 'Eastern Europe',
    speakers: '45 Million',
    script: 'Cyrillic (Ukrainian)',
    scriptType: 'cyrillic',
    direction: 'ltr',
    accuracyRate: '98.8%',
    popularPair: false,
    countries: ['Ukraine', 'Poland', 'Germany', 'Canada (Diaspora)', 'United States'],
    dialects: ['Standard Literary Ukrainian', 'Western Ukrainian (Galician)', 'Southeastern Dialect'],
    description: 'A critical language for Eastern European IT outsourcing, agricultural grain export, metallurgy, and humanitarian reconstruction.',
    culturalNuance: 'Distinct Cyrillic letters (ґ, є, і, ї not present in standard Russian), strict official state language legal requirements for domestic business software and websites.',
    commonMarkets: ['IT Software Engineering Outsourcing', 'Agricultural Commodities & Grain Trade', 'Energy & Power Grid Reconstruction', 'Aerospace Engineering'],
    supportedServices: ['Ukrainian Cyrillic DTP', 'Software Localization & State Compliance', 'Agricultural Export Documentation', 'Legal & Humanitarian Support'],
    enterpriseUseCases: [
      'Enterprise SaaS UI localization complying with the Ukrainian State Language Law',
      'Grain silo telemetry and agricultural commodity export certificates',
      'Substation and electrical grid reconstruction equipment installation manuals',
      'International humanitarian relief logistics software and refugee support portals'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Прискорення глобального масштабування з бездоганною культурною точністю.'
    }
  },
  {
    id: 'pl',
    slug: 'polish',
    name: 'Polish',
    nativeName: 'Polski',
    code: 'PL',
    region: 'EMEA',
    subRegion: 'Central Europe',
    speakers: '50 Million',
    script: 'Latin (with ogonek, kreska, kropka)',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '99.1%',
    popularPair: false,
    countries: ['Poland', 'United Kingdom', 'Germany', 'United States'],
    dialects: ['Standard Polish', 'Silesian', 'Greater Polish', 'Lesser Polish'],
    description: 'The premier consumer economy of Central Europe and a powerhouse for software development, gaming, logistics, and automotive manufacturing.',
    culturalNuance: 'Complex consonant clusters and diacritic letters (ą, ć, ę, ł, ń, ó, ś, ź, ż), seven noun cases requiring careful software variable placeholder engineering.',
    commonMarkets: ['Game Development & Tech', 'Logistics & Warehousing Hubs', 'Automotive OEM Plants', 'Fintech & eCommerce (BLIK payments)'],
    supportedServices: ['Game Localization (L10n)', 'BLIK Payment Integration UX', 'Manufacturing Plant Instructions', 'EU Regulatory Compliance'],
    enterpriseUseCases: [
      'AAA video game dialogue script translation, voice acting, and subtitle sync',
      'Automated distribution warehouse robotics instructions and safety manuals',
      'Polish Financial Supervision Authority (KNF) compliance reporting documents',
      'Automotive engine component manufacturing quality control specifications'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Przyspieszanie globalnego zasięgu z kulturową precyzją.'
    }
  },
  {
    id: 'ro',
    slug: 'romanian',
    name: 'Romanian',
    nativeName: 'Română',
    code: 'RO',
    region: 'EMEA',
    subRegion: 'Eastern Europe (Balkans)',
    speakers: '28 Million',
    script: 'Latin (with comma-below diacritics ș, ț)',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '99.0%',
    popularPair: false,
    countries: ['Romania', 'Moldova', 'Italy (Diaspora)', 'Spain (Diaspora)'],
    dialects: ['Standard Romanian', 'Moldavian Dialect'],
    description: 'The Eastern Romance language of the EU’s fastest-growing technology and automotive software development hub.',
    culturalNuance: 'Use of correct comma-below diacritics (ș, ț rather than cedilla ş, ţ which were legacy font errors), and formal polite pronouns (dumneavoastră).',
    commonMarkets: ['Automotive Embedded Software', 'Cybersecurity (Bitdefender hub)', 'Agriculture & Grain Trade', 'BPO & Shared Service Centers'],
    supportedServices: ['Unicode Diacritic Validation', 'Embedded Software Localization', 'Agricultural Trade Contracts', 'Legal & Tax Documents'],
    enterpriseUseCases: [
      'Automotive electronic control unit (ECU) firmware UI and diagnostics',
      'Cybersecurity enterprise console alerts and threat briefing translation',
      'Black Sea grain shipping logistics documentation and grain export contracts',
      'European Union structural fund compliance and grant expenditure reports'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Accelerarea prezenței globale cu precizie culturală desăvârșită.'
    }
  },
  {
    id: 'cs',
    slug: 'czech',
    name: 'Czech',
    nativeName: 'Čeština',
    code: 'CS',
    region: 'EMEA',
    subRegion: 'Central Europe',
    speakers: '13 Million',
    script: 'Latin (with háček and čárka)',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '99.2%',
    popularPair: false,
    countries: ['Czech Republic', 'Slovakia border communities'],
    dialects: ['Common Czech (Obecná čeština)', 'Moravian Dialects'],
    description: 'The language of one of Europe’s most industrialized nations (Škoda Auto corridor, precision engineering, optics, and cybersecurity).',
    culturalNuance: 'Extensive use of diacritics (háček on consonants like č, š, ž; čárka on long vowels), seven noun cases, and distinct difference between written literary Czech and everyday spoken Czech.',
    commonMarkets: ['Automotive & Transportation', 'Cybersecurity & Antivirus', 'Precision Optics & Glass', 'Industrial Automation'],
    supportedServices: ['Automotive Technical Manuals', 'Cybersecurity Software UI', 'CE Compliance Certification', 'DTP Layout Optimization'],
    enterpriseUseCases: [
      'Škoda automotive supplier quality manuals and component testing protocols',
      'Enterprise antivirus management console localization and malware alerts',
      'Precision optical laser equipment calibration manuals and safety warnings',
      'Czech National Bank regulatory filings and commercial leasing agreements'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Zrychlení globálního dosahu s kulturní precizností.'
    }
  },
  {
    id: 'hu',
    slug: 'hungarian',
    name: 'Hungarian',
    nativeName: 'Magyar',
    code: 'HU',
    region: 'EMEA',
    subRegion: 'Central Europe',
    speakers: '15 Million',
    script: 'Latin (with double acute accents ő, ű)',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '98.9%',
    popularPair: false,
    countries: ['Hungary', 'Romania (Transylvania)', 'Slovakia (Southern)', 'Serbia (Vojvodina)'],
    dialects: ['Standard Hungarian', 'Transdanubian', 'Great Plains'],
    description: 'A Finno-Ugric non-Indo-European language in Central Europe. Renowned for EV battery mega-factories, automotive plants, and pharmaceuticals.',
    culturalNuance: 'Agglutinative grammar with 18+ noun cases; suffixes fuse to root words creating long words that challenge standard web buttons; family name precedes given name.',
    commonMarkets: ['Electric Vehicle Battery Gigafactories', 'Pharmaceuticals & API Manufacturing', 'Automotive Assembly (Audi/Mercedes plants)', 'IT & Shared Services'],
    supportedServices: ['Agglutinative UI Button Engineering', 'EV Battery Safety Protocols', 'Pharmaceutical Dossiers', 'Legal Translation'],
    enterpriseUseCases: [
      'Lithium-ion battery gigafactory chemical hazard protocols and operator training',
      'European Medicines Agency (EMA) pharmaceutical product dossiers',
      'Automotive plant robotics maintenance procedures and calibration software',
      'Hungarian public procurement and EU infrastructure tender documentation'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'A globális jelenlét felgyorsítása kulturális pontossággal.'
    }
  },
  {
    id: 'sv',
    slug: 'swedish',
    name: 'Swedish',
    nativeName: 'Svenska',
    code: 'SV',
    region: 'EMEA',
    subRegion: 'Northern Europe (Nordics)',
    speakers: '11 Million',
    script: 'Latin (with å, ä, ö)',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '99.5%',
    popularPair: false,
    countries: ['Sweden', 'Finland (Official bilingual status)'],
    dialects: ['Standard Swedish (Rikssvenska)', 'Finland Swedish (finlandssvenska)'],
    description: 'The language of Scandinavia’s largest innovation economy (telecom, green steel, cleantech, fintech, and design).',
    culturalNuance: 'High English proficiency among locals means Swedes spot poor translations immediately; requires natural, concise, modern Nordic tone of voice.',
    commonMarkets: ['Cleantech & Green Steel', 'Telecom Infrastructure (5G/6G)', 'Fintech & Open Banking', 'Industrial Machinery (Mining/Forestry)'],
    supportedServices: ['Nordic Tone-of-Voice Transcreation', 'Cleantech & ESG Report Translation', 'Fintech UI Localization', 'Industrial Machinery Manuals'],
    enterpriseUseCases: [
      'Green hydrogen and fossil-free steel industrial installation safety guidelines',
      'Cellular 5G base station installation and radio network firmware documentation',
      'Nordic open-banking consumer fintech mobile apps and privacy policies',
      'Forestry harvesting machinery telemetry interfaces and hydraulic schematics'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Accelerera global räckvidd med kulturell precision.'
    }
  },
  {
    id: 'no',
    slug: 'norwegian',
    name: 'Norwegian',
    nativeName: 'Norsk',
    code: 'NO',
    region: 'EMEA',
    subRegion: 'Northern Europe (Nordics)',
    speakers: '5.5 Million',
    script: 'Latin (with æ, ø, å)',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '99.4%',
    popularPair: false,
    countries: ['Norway'],
    dialects: ['Bokmål (majority written standard)', 'Nynorsk (official minority written standard)'],
    description: 'The language of Europe’s sovereign wealth capital, maritime fleet, offshore wind, and energy transformation.',
    culturalNuance: 'Two official written standards: Bokmål (used by 85-90% of business/media) and Nynorsk (required for certain public sector tenders). High purchasing power demands flawless tone.',
    commonMarkets: ['Offshore Wind & Subsea Engineering', 'Aquaculture & Salmon Farming Tech', 'Maritime Shipping & Electric Ferries', 'Sovereign Wealth & ESG Investing'],
    supportedServices: ['Bokmål & Nynorsk Localization', 'Offshore Energy Manuals', 'Aquaculture Biosecurity Documentation', 'ESG Financial Reports'],
    enterpriseUseCases: [
      'Subsea robotic pipeline inspection software and offshore wind manuals',
      'Commercial salmon farming automated feeding telemetry and biosecurity protocols',
      'Electric ferry propulsion systems and maritime battery charging interfaces',
      'Norwegian Petroleum Directorate regulatory environmental filings'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Akselerer global rekkevidde med kulturell presisjon.'
    }
  },
  {
    id: 'da',
    slug: 'danish',
    name: 'Danish',
    nativeName: 'Dansk',
    code: 'DA',
    region: 'EMEA',
    subRegion: 'Northern Europe (Nordics)',
    speakers: '6 Million',
    script: 'Latin (with æ, ø, å)',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '99.5%',
    popularPair: false,
    countries: ['Denmark', 'Greenland', 'Faroe Islands'],
    dialects: ['Standard Danish (Rigsdansk)'],
    description: 'The language of global wind turbine engineering, biopharmaceuticals (diabetes/obesity medicines), and maritime container shipping.',
    culturalNuance: 'Concise Nordic writing style; compound nouns require careful wrapping; high digital adoption across all demographics.',
    commonMarkets: ['Offshore Wind Turbines (Vestas/Ørsted)', 'Life Sciences & GLP-1 Medicines', 'Global Container Shipping (Maersk)', 'Architectural Acoustics & Design'],
    supportedServices: ['Wind Energy Technical Manuals', 'EMA Clinical Trial Translations', 'Maritime Logistics Software UI', 'Consumer Audio Localization'],
    enterpriseUseCases: [
      'Offshore wind turbine blade installation manual and high-voltage grid specs',
      'Phase III clinical trial protocols for metabolic therapies approved by EMA',
      'Global container booking portal interfaces and bill of lading documentation',
      'High-end acoustic loudspeaker calibration app and digital audio manuals'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Accelerér global rækkevidde med kulturel præcision.'
    }
  },
  {
    id: 'fi',
    slug: 'finnish',
    name: 'Finnish',
    nativeName: 'Suomi',
    code: 'FI',
    region: 'EMEA',
    subRegion: 'Northern Europe (Nordics)',
    speakers: '5.6 Million',
    script: 'Latin (with ä, ö)',
    scriptType: 'latin',
    direction: 'ltr',
    accuracyRate: '99.3%',
    popularPair: false,
    countries: ['Finland', 'Sweden (Minority status)'],
    dialects: ['Standard Finnish (Yleiskieli)', 'Eastern & Western Dialects'],
    description: 'A Finno-Ugric language at the forefront of telecommunications infrastructure, clean forestry bio-materials, cyber defense, and gaming (Rovio/Supercell).',
    culturalNuance: 'Agglutinative language with 15 grammatical cases; lack of prepositions (case endings attach to words causing substantial word lengthening in mobile buttons); vowel harmony.',
    commonMarkets: ['5G Telecom Networks', 'Bio-economy & Paper Machinery', 'Icebreaker & Marine Engineering', 'Mobile Gaming'],
    supportedServices: ['Long Compound Word UI Testing', 'Telecom Engineering Manuals', 'Marine Engineering Specifications', 'Game Localization'],
    enterpriseUseCases: [
      'Cellular 5G packet core telecommunications manuals and diagnostic tools',
      'Icebreaker vessel dynamic positioning software and diesel-electric schematics',
      'Cellulose biomaterial processing plant safety procedures and patents',
      'Mobile gaming quest scripts, store listing optimization (ASO), and UI testing'
    ],
    samplePhrase: {
      original: 'Accelerating global reach with cultural precision.',
      translation: 'Kiihdytä globaalia tavoittavuutta kulttuurisella tarkkuudella.'
    }
  }
];

export const REGION_CATEGORIES = [
  'All',
  'Americas',
  'EMEA',
  'APAC',
  'Global'
] as const;

export const SCRIPT_CATEGORIES = [
  'All Scripts',
  'Latin',
  'Arabic (RTL)',
  'Devanagari',
  'Han / CJK',
  'Cyrillic',
  'Indic / Dravidian',
  'Hebrew',
  'Greek'
] as const;

export function getLanguageBySlug(slug: string): LanguageDetail | undefined {
  const cleanSlug = slug.toLowerCase().trim();
  return COMPREHENSIVE_LANGUAGES.find(
    (l) =>
      l.slug === cleanSlug ||
      l.id === cleanSlug ||
      l.code.toLowerCase() === cleanSlug ||
      l.name.toLowerCase() === cleanSlug
  );
}

export function getRelatedLanguages(currentSlug: string, count = 4): LanguageDetail[] {
  const current = getLanguageBySlug(currentSlug);
  if (!current) return COMPREHENSIVE_LANGUAGES.slice(0, count);

  return COMPREHENSIVE_LANGUAGES.filter(
    (l) => l.slug !== current.slug && (l.region === current.region || l.scriptType === current.scriptType)
  ).slice(0, count);
}
