export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'industries'
  | 'industry-detail'
  | 'languages'
  | 'language-detail'
  | 'workflow'
  | 'workflow-detail'
  | 'technology'
  | 'ai-solutions'
  | 'resources'
  | 'blog'
  | 'case-studies'
  | 'careers'
  | 'contact'
  | 'quote'
  | 'privacy'
  | 'terms';

export interface ServiceItem {
  id: string;
  name: string;
  oneLineDesc: string;
  fullDesc: string;
  iconName: string;
  image?: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  isPrimary8: boolean;
}

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
  slug?: string;
  name: string;
  shortName?: string;
  iconName: string;
  tagline?: string;
  desc: string;
  detailedDesc?: string;
  category?: 'Technology' | 'Regulated' | 'Consumer' | 'Industrial';
  keyChallenges: string[];
  solutionHighlights: string[];
  localizationRequirements?: string[];
  benefits?: string[];
  relevantServices?: RelevantService[];
  workflows?: IndustryWorkflowStep[];
  globalConsiderations?: string[];
  stat: string;
  statLabel: string;
  visualTheme?: {
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
  ctaText?: string;
  featuredInHome?: boolean;
}

export interface LanguageItem {
  id: string;
  name: string;
  nativeName: string;
  code: string;
  region: 'EMEA' | 'APAC' | 'Americas' | 'Global';
  speakers: string;
  script: string;
  accuracyRate: string;
  popularPair: boolean;
}

export interface LanguageDetail extends LanguageItem {
  slug: string;
  direction?: 'ltr' | 'rtl';
  scriptType: 'latin' | 'arabic' | 'devanagari' | 'cjk' | 'cyrillic' | 'hebrew' | 'greek' | 'indic' | 'other';
  subRegion?: string;
  countries: string[];
  dialects?: string[];
  description: string;
  culturalNuance: string;
  commonMarkets: string[];
  supportedServices: string[];
  enterpriseUseCases: string[];
  samplePhrase?: {
    original: string;
    translation: string;
  };
}

export interface WorkflowStepDetail {
  step: string;
  slug: string;
  title: string;
  shortDesc: string;
  heroTagline: string;
  overview: string;
  deliverables: string[];
  keyActivities: {
    title: string;
    desc: string;
  }[];
  benefits: {
    title: string;
    desc: string;
  }[];
  qualityCheckpoints: string[];
  relatedServices: {
    name: string;
    slug: string;
  }[];
  nextStep?: {
    step: string;
    title: string;
    slug: string;
  };
  prevStep?: {
    step: string;
    title: string;
    slug: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'AI Localization' | 'MTPE Strategy' | 'Enterprise Growth' | 'LQA & Compliance';
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export interface CaseStudy {
  id: string;
  client: string;
  logoText: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  testimonial: { quote: string; author: string; role: string };
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  desc: string;
  responsibilities: string[];
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
  isHQ?: boolean;
}

export interface QuoteEstimate {
  sourceLang: string;
  targetLangs: string[];
  serviceType: string;
  wordCount: number;
  turnaroundDays: number;
  estimatedCost: number;
  aiAccuracyEstimate: string;
}
