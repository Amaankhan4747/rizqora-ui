export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'industries'
  | 'industry-detail'
  | 'languages'
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

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  desc: string;
  keyChallenges: string[];
  solutionHighlights: string[];
  stat: string;
  statLabel: string;
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
