import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PageId } from '../types';
import { SERVICES_DATA } from '../data/mockData';
import {
  WEB_DEV_OPTIONS,
  APP_DEV_OPTIONS,
  TRANSLATION_OPTIONS,
  LOCALIZATION_OPTIONS,
  MTPE_OPTIONS,
  LQA_OPTIONS,
  AI_DATA_OPTIONS,
  getServiceFormMode,
  ServiceFormMode,
} from '../data/quoteFormConfig';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  Check,
  Search,
  MessageSquare,
  ExternalLink,
  Code,
  Smartphone,
  Database,
  Layers,
  FileText,
  Globe,
  Sliders,
  ChevronDown,
  Briefcase,
  Cpu,
  RefreshCw,
} from 'lucide-react';

interface GetQuotePageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

interface LanguageOption {
  name: string;
  native: string;
  code: string;
  popular?: boolean;
}

const ALL_LANGUAGES: LanguageOption[] = [
  { name: 'English (US)', native: 'English (US)', code: 'EN-US', popular: true },
  { name: 'English (UK)', native: 'English (UK)', code: 'EN-GB', popular: true },
  { name: 'Spanish', native: 'Español', code: 'ES', popular: true },
  { name: 'German', native: 'Deutsch', code: 'DE', popular: true },
  { name: 'French', native: 'Français', code: 'FR', popular: true },
  { name: 'Japanese', native: '日本語', code: 'JA', popular: true },
  { name: 'Chinese (Simplified)', native: '简体中文', code: 'ZH-CN', popular: true },
  { name: 'Chinese (Traditional)', native: '繁體中文', code: 'ZH-TW', popular: true },
  { name: 'Arabic', native: 'العربية', code: 'AR', popular: true },
  { name: 'Portuguese (Brazil)', native: 'Português (BR)', code: 'PT-BR', popular: true },
  { name: 'Portuguese (Portugal)', native: 'Português (PT)', code: 'PT-PT' },
  { name: 'Italian', native: 'Italiano', code: 'IT', popular: true },
  { name: 'Hindi', native: 'हिन्दी', code: 'HI', popular: true },
  { name: 'Korean', native: '한국어', code: 'KO', popular: true },
  { name: 'Russian', native: 'Русский', code: 'RU', popular: true },
  { name: 'Dutch', native: 'Nederlands', code: 'NL' },
  { name: 'Turkish', native: 'Türkçe', code: 'TR' },
  { name: 'Polish', native: 'Polski', code: 'PL' },
  { name: 'Swedish', native: 'Svenska', code: 'SV' },
  { name: 'Vietnamese', native: 'Tiếng Việt', code: 'VI' },
  { name: 'Thai', native: 'ไทย', code: 'TH' },
  { name: 'Indonesian', native: 'Bahasa Indonesia', code: 'ID' },
  { name: 'Greek', native: 'Ελληνικά', code: 'EL' },
  { name: 'Czech', native: 'Čeština', code: 'CS' },
  { name: 'Danish', native: 'Dansk', code: 'DA' },
  { name: 'Finnish', native: 'Suomi', code: 'FI' },
  { name: 'Norwegian', native: 'Norsk', code: 'NO' },
  { name: 'Hebrew', native: 'עברית', code: 'HE' },
  { name: 'Romanian', native: 'Română', code: 'RO' },
  { name: 'Hungarian', native: 'Magyar', code: 'HU' },
  { name: 'Ukrainian', native: 'Українська', code: 'UK' },
  { name: 'Bengali', native: 'বাংলা', code: 'BN' },
  { name: 'Malay', native: 'Bahasa Melayu', code: 'MS' },
  { name: 'Tagalog (Filipino)', native: 'Tagalog', code: 'TL' },
];

export const GetQuotePage: React.FC<GetQuotePageProps> = ({ onNavigate }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  // Service Selection State
  const [selectedService, setSelectedService] = useState('Translation');
  const [showServicePicker, setShowServicePicker] = useState(false);

  // --------------------------------------------------------------------------
  // SYNCHRONIZE PRE-SELECTED SERVICE FROM ROUTE QUERY PARAMETER
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (serviceParam) {
      const paramLower = serviceParam.toLowerCase();
      const matched = SERVICES_DATA.find((s) => {
        const idLower = s.id.toLowerCase();
        const nameLower = s.name.toLowerCase();
        const slug = nameLower.replace(/\s+/g, '-');
        return (
          idLower === paramLower ||
          nameLower === paramLower ||
          slug === paramLower ||
          (paramLower === 'web-development' && idLower === 'web-development') ||
          (paramLower === 'app-development' && idLower === 'app-development') ||
          (paramLower === 'linguistic-quality-assurance' && idLower === 'lqa') ||
          (paramLower === 'desktop-publishing' && idLower === 'dtp') ||
          (paramLower === 'machine-translation-post-editing' && idLower === 'mtpe')
        );
      });

      if (matched) {
        setSelectedService(matched.name);
        setShowServicePicker(false);
      }
    } else {
      // If no query parameter was passed, show the service selector so user can pick
      setShowServicePicker(true);
    }
  }, [serviceParam]);

  // Derive Current Service Mode
  const currentMode: ServiceFormMode = useMemo(() => {
    return getServiceFormMode(selectedService);
  }, [selectedService]);

  // Switch Service and sync route query param
  const handleServiceSelect = (srvName: string, srvId: string) => {
    setSelectedService(srvName);
    setSearchParams({ service: srvId });
    setShowServicePicker(false);
  };

  // --------------------------------------------------------------------------
  // 1. WEB DEVELOPMENT STATE
  // --------------------------------------------------------------------------
  const [webProjectType, setWebProjectType] = useState<string>('custom-web-app');
  const [webFrontend, setWebFrontend] = useState<string>('react');
  const [webBackend, setWebBackend] = useState<string>('nodejs');
  const [webDatabase, setWebDatabase] = useState<string>('mysql');
  const [webPageScale, setWebPageScale] = useState<string>('5-15');
  const [webIntegrations, setWebIntegrations] = useState<string[]>([
    'auth-roles',
    'payment-gateway',
    'multilingual-i18n',
  ]);
  const [webTimeline, setWebTimeline] = useState<string>('standard');

  const toggleWebIntegration = (id: string) => {
    if (webIntegrations.includes(id)) {
      setWebIntegrations(webIntegrations.filter((i) => i !== id));
    } else {
      setWebIntegrations([...webIntegrations, id]);
    }
  };

  // --------------------------------------------------------------------------
  // 2. MOBILE APP DEVELOPMENT STATE
  // --------------------------------------------------------------------------
  const [appPlatform, setAppPlatform] = useState<string>('cross-platform');
  const [appType, setAppType] = useState<string>('b2b-enterprise');
  const [appBackend, setAppBackend] = useState<string>('cloud-serverless');
  const [appScreenScale, setAppScreenScale] = useState<string>('10-20');
  const [appFeatures, setAppFeatures] = useState<string[]>([
    'biometric-otp',
    'push-notifications',
    'in-app-payments',
  ]);
  const [appTimeline, setAppTimeline] = useState<string>('standard');

  const toggleAppFeature = (id: string) => {
    if (appFeatures.includes(id)) {
      setAppFeatures(appFeatures.filter((f) => f !== id));
    } else {
      setAppFeatures([...appFeatures, id]);
    }
  };

  // --------------------------------------------------------------------------
  // 3. TRANSLATION STATE
  // --------------------------------------------------------------------------
  const [sourceLang, setSourceLang] = useState('English (US)');
  const [selectedTargetLangs, setSelectedTargetLangs] = useState<string[]>(['Spanish', 'German']);
  const [translationContentType, setTranslationContentType] = useState('corporate');
  const [translationVolume, setTranslationVolume] = useState('5k');
  const [translationTurnaround, setTranslationTurnaround] = useState('standard');

  const [fromSearch, setFromSearch] = useState('');
  const [toSearch, setToSearch] = useState('');
  const [showFromDropdown, setShowFromDropdown] = useState(false);

  const filteredFromLangs = useMemo(() => {
    if (!fromSearch.trim()) return ALL_LANGUAGES;
    const q = fromSearch.toLowerCase().trim();
    return ALL_LANGUAGES.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.native.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q)
    );
  }, [fromSearch]);

  const filteredToLangs = useMemo(() => {
    if (!toSearch.trim()) return ALL_LANGUAGES;
    const q = toSearch.toLowerCase().trim();
    return ALL_LANGUAGES.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.native.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q)
    );
  }, [toSearch]);

  const toggleTargetLang = (langName: string) => {
    if (selectedTargetLangs.includes(langName)) {
      if (selectedTargetLangs.length > 1) {
        setSelectedTargetLangs(selectedTargetLangs.filter((l) => l !== langName));
      }
    } else {
      setSelectedTargetLangs([...selectedTargetLangs, langName]);
    }
  };

  // --------------------------------------------------------------------------
  // 4. LOCALIZATION STATE
  // --------------------------------------------------------------------------
  const [locProductType, setLocProductType] = useState('website-portal');
  const [locScopes, setLocScopes] = useState<string[]>(['full-i18n', 'transcreation']);
  const [locTargetLocales, setLocTargetLocales] = useState<string>('Tier-1 European & Asian Languages');
  const [locTimeline, setLocTimeline] = useState('standard');

  const toggleLocScope = (id: string) => {
    if (locScopes.includes(id)) {
      if (locScopes.length > 1) setLocScopes(locScopes.filter((s) => s !== id));
    } else {
      setLocScopes([...locScopes, id]);
    }
  };

  // --------------------------------------------------------------------------
  // 5. MTPE STATE
  // --------------------------------------------------------------------------
  const [mtpeQuality, setMtpeQuality] = useState('full-mtpe');
  const [mtpeDomain, setMtpeDomain] = useState('ecommerce-support');
  const [mtpeLanguages, setMtpeLanguages] = useState('English to Multi-Target (EU & APAC)');
  const [mtpeTimeline, setMtpeTimeline] = useState('standard');

  // --------------------------------------------------------------------------
  // 6. LQA STATE
  // --------------------------------------------------------------------------
  const [lqaScope, setLqaScope] = useState('in-context-ui');
  const [lqaPlatforms, setLqaPlatforms] = useState<string[]>(['web', 'ios-android']);
  const [lqaLocales, setLqaLocales] = useState('Target Enterprise Market Locales');
  const [lqaTimeline, setLqaTimeline] = useState('standard');

  const toggleLqaPlatform = (id: string) => {
    if (lqaPlatforms.includes(id)) {
      if (lqaPlatforms.length > 1) setLqaPlatforms(lqaPlatforms.filter((p) => p !== id));
    } else {
      setLqaPlatforms([...lqaPlatforms, id]);
    }
  };

  // --------------------------------------------------------------------------
  // 7. AI DATA ANNOTATION STATE
  // --------------------------------------------------------------------------
  const [aiModality, setAiModality] = useState('text');
  const [aiTask, setAiTask] = useState('intent-sentiment');
  const [aiVolume, setAiVolume] = useState('10k');
  const [aiLanguages, setAiLanguages] = useState('Multilingual (Indic, European, CJK)');
  const [aiTimeline, setAiTimeline] = useState('standard');

  // --------------------------------------------------------------------------
  // 8. GENERIC LINGUISTIC / CONSULTING STATE
  // --------------------------------------------------------------------------
  const [genericScope, setGenericScope] = useState('Enterprise Media & Documentation Scope');
  const [genericTimeline, setGenericTimeline] = useState('Standard Delivery');

  // --------------------------------------------------------------------------
  // COMMON CONTACT / PROPOSAL RECIPIENT
  // --------------------------------------------------------------------------
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  // --------------------------------------------------------------------------
  // DERIVE SUMMARY DATA (NO PRICING - REQUIREMENTS ONLY)
  // --------------------------------------------------------------------------
  const summaryData = useMemo(() => {
    if (currentMode === 'web-development') {
      const proj = WEB_DEV_OPTIONS.projectTypes.find((p) => p.id === webProjectType);
      const front = WEB_DEV_OPTIONS.frontendStacks.find((f) => f.id === webFrontend);
      const back = WEB_DEV_OPTIONS.backendStacks.find((b) => b.id === webBackend);
      const db = WEB_DEV_OPTIONS.databases.find((d) => d.id === webDatabase);
      const scale = WEB_DEV_OPTIONS.pageScales.find((s) => s.id === webPageScale);
      const time = WEB_DEV_OPTIONS.timelines.find((t) => t.id === webTimeline);

      return {
        badge: 'Full-Stack Web Engineering',
        icon: Code,
        rows: [
          { label: 'Project Type', value: proj?.name || webProjectType },
          { label: 'Frontend Stack', value: front?.name || webFrontend },
          { label: 'Backend Engine', value: back?.name || webBackend },
          { label: 'Database', value: db?.name || webDatabase },
          { label: 'Project Scope', value: scale?.label || webPageScale },
          { label: 'Integrations', value: `${webIntegrations.length} Selected` },
          { label: 'Timeline', value: time?.name || 'Standard Sprint' },
        ],
      };
    }

    if (currentMode === 'app-development') {
      const plat = APP_DEV_OPTIONS.platforms.find((p) => p.id === appPlatform);
      const cat = APP_DEV_OPTIONS.appTypes.find((a) => a.id === appType);
      const back = APP_DEV_OPTIONS.backendOptions.find((b) => b.id === appBackend);
      const scale = APP_DEV_OPTIONS.screenScales.find((s) => s.id === appScreenScale);
      const time = APP_DEV_OPTIONS.timelines.find((t) => t.id === appTimeline);

      return {
        badge: 'Mobile App Engineering',
        icon: Smartphone,
        rows: [
          { label: 'Platform Target', value: plat?.name || appPlatform },
          { label: 'App Category', value: cat?.name || appType },
          { label: 'Screen Scope', value: scale?.label || appScreenScale },
          { label: 'Backend', value: back?.name || appBackend },
          { label: 'Key Features', value: `${appFeatures.length} Modules` },
          { label: 'Timeline', value: time?.name || 'Standard Milestone' },
        ],
      };
    }

    if (currentMode === 'translation') {
      const ct = TRANSLATION_OPTIONS.contentTypes.find((c) => c.id === translationContentType);
      const vol = TRANSLATION_OPTIONS.volumePresets.find((v) => v.id === translationVolume);
      const time = TRANSLATION_OPTIONS.turnarounds.find((t) => t.id === translationTurnaround);

      return {
        badge: 'Enterprise Translation',
        icon: Globe,
        rows: [
          { label: 'Source Language', value: sourceLang },
          { label: 'Target Languages', value: `${selectedTargetLangs.length} Language(s) (${selectedTargetLangs.slice(0, 3).join(', ')}${selectedTargetLangs.length > 3 ? '...' : ''})` },
          { label: 'Content Domain', value: ct?.name || translationContentType },
          { label: 'Estimated Volume', value: vol?.label || translationVolume },
          { label: 'Delivery SLA', value: time?.name || 'Standard Delivery' },
        ],
      };
    }

    if (currentMode === 'localization') {
      const pt = LOCALIZATION_OPTIONS.productTypes.find((p) => p.id === locProductType);
      const time = LOCALIZATION_OPTIONS.timelines.find((t) => t.id === locTimeline);

      return {
        badge: 'Product & UI Localization',
        icon: Layers,
        rows: [
          { label: 'Product Type', value: pt?.name || locProductType },
          { label: 'Target Locales', value: locTargetLocales },
          { label: 'Scope Items', value: `${locScopes.length} Focus Areas` },
          { label: 'Delivery Cycle', value: time?.name || 'Standard Sprint' },
        ],
      };
    }

    if (currentMode === 'mtpe') {
      const q = MTPE_OPTIONS.qualityLevels.find((item) => item.id === mtpeQuality);
      const d = MTPE_OPTIONS.domains.find((item) => item.id === mtpeDomain);
      const time = MTPE_OPTIONS.timelines.find((item) => item.id === mtpeTimeline);

      return {
        badge: 'Machine Translation Post-Editing',
        icon: Cpu,
        rows: [
          { label: 'Post-Editing Level', value: q?.name || mtpeQuality },
          { label: 'Language Scope', value: mtpeLanguages },
          { label: 'Content Domain', value: d?.name || mtpeDomain },
          { label: 'Turnaround', value: time?.name || 'Standard High-Speed' },
        ],
      };
    }

    if (currentMode === 'lqa') {
      const sc = LQA_OPTIONS.qaScopes.find((item) => item.id === lqaScope);
      const time = LQA_OPTIONS.timelines.find((item) => item.id === lqaTimeline);

      return {
        badge: 'Linguistic QA & Testing',
        icon: CheckCircle2,
        rows: [
          { label: 'LQA Scope', value: sc?.name || lqaScope },
          { label: 'Target Locales', value: lqaLocales },
          { label: 'Platforms', value: `${lqaPlatforms.length} Environment(s)` },
          { label: 'QA Timeline', value: time?.name || 'Standard QA Sprint' },
        ],
      };
    }

    if (currentMode === 'ai-data-annotation') {
      const mod = AI_DATA_OPTIONS.modalities.find((m) => m.id === aiModality);
      const t = AI_DATA_OPTIONS.tasks.find((task) => task.id === aiTask);
      const vol = AI_DATA_OPTIONS.volumePresets.find((v) => v.id === aiVolume);

      return {
        badge: 'AI Dataset Annotation',
        icon: Cpu,
        rows: [
          { label: 'Data Modality', value: mod?.name || aiModality },
          { label: 'Annotation Task', value: t?.name || aiTask },
          { label: 'Target Languages', value: aiLanguages },
          { label: 'Dataset Volume', value: vol?.label || aiVolume },
          { label: 'Pipeline SLA', value: aiTimeline === 'express' ? 'Accelerated Parallel Shifts' : 'Standard Pipeline' },
        ],
      };
    }

    // Default / Generic linguistic
    return {
      badge: 'Enterprise Solution',
      icon: Briefcase,
      rows: [
        { label: 'Selected Solution', value: selectedService },
        { label: 'Project Scope', value: genericScope },
        { label: 'Delivery Model', value: genericTimeline },
      ],
    };
  }, [
    currentMode,
    selectedService,
    webProjectType,
    webFrontend,
    webBackend,
    webDatabase,
    webPageScale,
    webIntegrations,
    webTimeline,
    appPlatform,
    appType,
    appBackend,
    appScreenScale,
    appFeatures,
    appTimeline,
    sourceLang,
    selectedTargetLangs,
    translationContentType,
    translationVolume,
    translationTurnaround,
    locProductType,
    locScopes,
    locTargetLocales,
    locTimeline,
    mtpeQuality,
    mtpeDomain,
    mtpeLanguages,
    mtpeTimeline,
    lqaScope,
    lqaPlatforms,
    lqaLocales,
    lqaTimeline,
    aiModality,
    aiTask,
    aiVolume,
    aiLanguages,
    aiTimeline,
    genericScope,
    genericTimeline,
  ]);

  // --------------------------------------------------------------------------
  // DYNAMIC WHATSAPP PROPOSAL MESSAGE (REQUIREMENT SPECIFIC ONLY - NO PRICE)
  // --------------------------------------------------------------------------
  const buildWhatsAppMessage = () => {
    const lines = [
      `*New ${selectedService} Request — Rizqoraa Solutions*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Client Name:* ${contactInfo.name.trim()}`,
      `📧 *Work Email:* ${contactInfo.email.trim()}`,
      `📱 *Phone / WhatsApp:* ${contactInfo.phone.trim() || 'Not specified'}`,
      `🏢 *Company:* ${contactInfo.company.trim() || 'Not specified'}`,
      ``,
      `📋 *Selected Solution:* ${selectedService}`,
    ];

    if (currentMode === 'web-development') {
      const proj = WEB_DEV_OPTIONS.projectTypes.find((p) => p.id === webProjectType);
      const front = WEB_DEV_OPTIONS.frontendStacks.find((f) => f.id === webFrontend);
      const back = WEB_DEV_OPTIONS.backendStacks.find((b) => b.id === webBackend);
      const db = WEB_DEV_OPTIONS.databases.find((d) => d.id === webDatabase);
      const scale = WEB_DEV_OPTIONS.pageScales.find((s) => s.id === webPageScale);
      const time = WEB_DEV_OPTIONS.timelines.find((t) => t.id === webTimeline);
      const intNames = webIntegrations
        .map((id) => WEB_DEV_OPTIONS.integrations.find((i) => i.id === id)?.name)
        .filter(Boolean)
        .join(', ');

      lines.push(
        `🖥️ *Project Type:* ${proj?.name || webProjectType}`,
        `⚡ *Frontend Stack:* ${front?.name || webFrontend}`,
        `⚙️ *Backend Engine:* ${back?.name || webBackend}`,
        `🗄️ *Database:* ${db?.name || webDatabase}`,
        `📄 *Project Scope:* ${scale?.label || webPageScale}`,
        `🔌 *Required Features (${webIntegrations.length}):* ${intNames || 'Standard web requirements'}`,
        `⏱️ *Expected Timeline:* ${time?.name || 'Standard Sprint'}`
      );
    } else if (currentMode === 'app-development') {
      const plat = APP_DEV_OPTIONS.platforms.find((p) => p.id === appPlatform);
      const cat = APP_DEV_OPTIONS.appTypes.find((a) => a.id === appType);
      const back = APP_DEV_OPTIONS.backendOptions.find((b) => b.id === appBackend);
      const scale = APP_DEV_OPTIONS.screenScales.find((s) => s.id === appScreenScale);
      const time = APP_DEV_OPTIONS.timelines.find((t) => t.id === appTimeline);
      const featNames = appFeatures
        .map((id) => APP_DEV_OPTIONS.features.find((f) => f.id === id)?.name)
        .filter(Boolean)
        .join(', ');

      lines.push(
        `📱 *Platform Target:* ${plat?.name || appPlatform}`,
        `🏷️ *App Category:* ${cat?.name || appType}`,
        `📐 *Screen Scope:* ${scale?.label || appScreenScale}`,
        `☁️ *Backend Architecture:* ${back?.name || appBackend}`,
        `✨ *Key Features (${appFeatures.length}):* ${featNames || 'Standard mobile app requirements'}`,
        `⏱️ *Expected Timeline:* ${time?.name || 'Standard Milestone'}`
      );
    } else if (currentMode === 'translation') {
      const ct = TRANSLATION_OPTIONS.contentTypes.find((c) => c.id === translationContentType);
      const vol = TRANSLATION_OPTIONS.volumePresets.find((v) => v.id === translationVolume);
      const time = TRANSLATION_OPTIONS.turnarounds.find((t) => t.id === translationTurnaround);

      lines.push(
        `🌐 *Source Language:* ${sourceLang}`,
        `🎯 *Target Languages (${selectedTargetLangs.length}):* ${selectedTargetLangs.join(', ')}`,
        `📑 *Content Domain:* ${ct?.name || translationContentType}`,
        `📊 *Estimated Volume:* ${vol?.label || translationVolume}`,
        `⚡ *Turnaround SLA:* ${time?.name || 'Standard Delivery'}`
      );
    } else if (currentMode === 'localization') {
      const pt = LOCALIZATION_OPTIONS.productTypes.find((p) => p.id === locProductType);
      const time = LOCALIZATION_OPTIONS.timelines.find((t) => t.id === locTimeline);
      const scNames = locScopes
        .map((id) => LOCALIZATION_OPTIONS.scopes.find((s) => s.id === id)?.name)
        .filter(Boolean)
        .join(', ');

      lines.push(
        `📦 *Product Type:* ${pt?.name || locProductType}`,
        `🌍 *Target Locales:* ${locTargetLocales}`,
        `🔍 *Localization Scope:* ${scNames}`,
        `⏱️ *Delivery Cycle:* ${time?.name || 'Standard Agile Sprint'}`
      );
    } else if (currentMode === 'mtpe') {
      const q = MTPE_OPTIONS.qualityLevels.find((item) => item.id === mtpeQuality);
      const d = MTPE_OPTIONS.domains.find((item) => item.id === mtpeDomain);
      lines.push(
        `🤖 *Post-Editing Level:* ${q?.name || mtpeQuality}`,
        `🌐 *Language Scope:* ${mtpeLanguages}`,
        `📑 *Content Domain:* ${d?.name || mtpeDomain}`
      );
    } else if (currentMode === 'lqa') {
      const sc = LQA_OPTIONS.qaScopes.find((item) => item.id === lqaScope);
      lines.push(
        `🔍 *LQA Scope:* ${sc?.name || lqaScope}`,
        `🌍 *Target Locales:* ${lqaLocales}`,
        `💻 *Target Platforms:* ${lqaPlatforms.join(', ')}`
      );
    } else if (currentMode === 'ai-data-annotation') {
      const mod = AI_DATA_OPTIONS.modalities.find((m) => m.id === aiModality);
      const t = AI_DATA_OPTIONS.tasks.find((task) => task.id === aiTask);
      const vol = AI_DATA_OPTIONS.volumePresets.find((v) => v.id === aiVolume);

      lines.push(
        `🤖 *Data Modality:* ${mod?.name || aiModality}`,
        `🎯 *Annotation Task:* ${t?.name || aiTask}`,
        `🌐 *Target Languages:* ${aiLanguages}`,
        `📊 *Dataset Volume:* ${vol?.label || aiVolume}`
      );
    } else {
      lines.push(
        `📑 *Project Scope:* ${genericScope}`,
        `⏱️ *Expected Timeline:* ${genericTimeline}`
      );
    }

    lines.push(
      ``,
      `📝 *Additional Requirements / Notes:*`,
      `${contactInfo.notes.trim() || 'Please provide a formal Statement of Work (SOW) and delivery timeline.'}`,
      `━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Submitted via Rizqoraa Solutions (https://rizqoraa.com/quote)`
    );

    return lines.join('\n');
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: { name?: string; email?: string; phone?: string } = {};
    if (!contactInfo.name.trim()) errors.name = 'Full name is required';
    if (!contactInfo.email.trim()) errors.email = 'Work email is required';
    if (!contactInfo.phone.trim()) errors.phone = 'Phone / WhatsApp number is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    const businessPhone = '919950464005';
    const message = buildWhatsAppMessage();
    const waUrl = `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`;
    setGeneratedWhatsAppUrl(waUrl);

    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      setQuoteSubmitted(true);
    }, 400);
  };

  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen">
      {/* Top Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[#E4032E]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#E4032E] text-xs font-bold border border-red-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENTERPRISE SPECIFICATION & SOW REQUEST</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E4032E] animate-pulse" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141414] tracking-tight font-['Space_Grotesk']">
            Request a Customized Proposal
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Specify your project requirements below. Our technical solutions architects will prepare a comprehensive Statement of Work (SOW) within 2 business hours.
          </p>
        </div>
      </section>

      {/* Main Form & Summary Layout */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Left Configuration Form Container (7 Cols) */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] space-y-8 relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-[#E4032E] to-red-600" />

            {quoteSubmitted ? (
              <div className="py-12 px-6 bg-emerald-50/80 rounded-2xl border border-emerald-200 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-extrabold text-emerald-950 font-['Space_Grotesk']">
                  Request Compiled & WhatsApp Opened!
                </h2>
                <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{contactInfo.name || 'Valued Partner'}</strong>. Your requirements for{' '}
                  <strong className="text-emerald-900">{selectedService}</strong> have been configured. WhatsApp has opened in a new tab with your pre-filled project specifications ready for review and transmission.
                </p>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  {generatedWhatsAppUrl && (
                    <a
                      href={generatedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-xl text-xs font-bold shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Re-open WhatsApp Chat</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setQuoteSubmitted(false);
                      onNavigate('home');
                    }}
                    className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-xl text-xs font-bold shadow-md cursor-pointer transition-colors"
                  >
                    Return to Homepage
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-8">
                
                {/* -------------------------------------------------------------------------- */}
                {/* STEP 1: SERVICE IDENTIFICATION / BANNER */}
                {/* -------------------------------------------------------------------------- */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                        1
                      </span>
                      <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                        Requested Solution
                      </label>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowServicePicker(!showServicePicker)}
                      className="text-xs font-bold text-[#E4032E] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{showServicePicker ? 'Hide Options' : 'Change Solution'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showServicePicker ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Active Selected Service Display Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-600/30 text-white border border-red-500/40 flex items-center justify-center shrink-0">
                        {currentMode === 'web-development' && <Code className="w-5 h-5 text-red-400" />}
                        {currentMode === 'app-development' && <Smartphone className="w-5 h-5 text-red-400" />}
                        {currentMode === 'translation' && <Globe className="w-5 h-5 text-red-400" />}
                        {currentMode === 'localization' && <Layers className="w-5 h-5 text-red-400" />}
                        {currentMode === 'mtpe' && <Cpu className="w-5 h-5 text-red-400" />}
                        {currentMode === 'lqa' && <CheckCircle2 className="w-5 h-5 text-red-400" />}
                        {currentMode === 'ai-data-annotation' && <Cpu className="w-5 h-5 text-red-400" />}
                        {currentMode === 'generic-linguistic' && <Briefcase className="w-5 h-5 text-red-400" />}
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-extrabold font-['Space_Grotesk'] flex items-center gap-2">
                          <span>{selectedService}</span>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                            Active Flow
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 line-clamp-1">
                          {SERVICES_DATA.find((s) => s.name === selectedService)?.oneLineDesc || 'Enterprise Digital & Linguistic Infrastructure'}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowServicePicker(!showServicePicker)}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors cursor-pointer shrink-0 hidden sm:block"
                    >
                      Switch
                    </button>
                  </div>

                  {/* Expandable Service Selection Grid (Shown if requested or if no URL param) */}
                  {showServicePicker && (
                    <div className="pt-2">
                      <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                          Choose from All 12 Solutions
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {SERVICES_DATA.map((srv) => {
                            const isSelected = selectedService === srv.name;
                            return (
                              <button
                                type="button"
                                key={srv.id}
                                onClick={() => handleServiceSelect(srv.name, srv.id)}
                                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                                  isSelected
                                    ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-sm'
                                    : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200'
                                }`}
                              >
                                <span className="text-xs font-bold truncate pr-2 font-['Space_Grotesk']">
                                  {srv.name}
                                </span>
                                {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* -------------------------------------------------------------------------- */}
                {/* STEP 2: DYNAMIC SERVICE-SPECIFIC REQUIREMENTS (NO PRICING) */}
                {/* -------------------------------------------------------------------------- */}

                {/* ========================================================================= */}
                {/* --- A. WEB DEVELOPMENT SPECIFICATIONS --- */}
                {/* ========================================================================= */}
                {currentMode === 'web-development' && (
                  <div className="space-y-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                          2
                        </span>
                        <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                          Web Architecture & Technology Specifications
                        </label>
                      </div>
                      <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                        Full-Stack Engineering
                      </span>
                    </div>

                    {/* 1. Project Scope / Type */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Project Scope / Category
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {WEB_DEV_OPTIONS.projectTypes.map((pt) => {
                          const isChecked = webProjectType === pt.id;
                          return (
                            <button
                              type="button"
                              key={pt.id}
                              onClick={() => setWebProjectType(pt.id)}
                              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                                isChecked
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/20'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-extrabold text-xs font-['Space_Grotesk']">{pt.name}</span>
                                {isChecked && <Check className="w-3.5 h-3.5 text-red-400 shrink-0" />}
                              </div>
                              <p className={`text-[10px] leading-tight ${isChecked ? 'text-slate-300' : 'text-slate-500'}`}>
                                {pt.desc}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Frontend & Backend Frameworks */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Frontend Technology */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-700 flex items-center justify-between">
                          <span>Frontend Technology</span>
                          <span className="text-[10px] text-[#E4032E] font-bold">UI Framework</span>
                        </label>
                        <div className="space-y-1.5">
                          {WEB_DEV_OPTIONS.frontendStacks.map((fe) => {
                            const isSelected = webFrontend === fe.id;
                            return (
                              <button
                                type="button"
                                key={fe.id}
                                onClick={() => setWebFrontend(fe.id)}
                                className={`w-full p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-sm'
                                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                                }`}
                              >
                                <div>
                                  <div className="font-extrabold font-['Space_Grotesk']">{fe.name}</div>
                                  <div className={`text-[10px] ${isSelected ? 'text-red-100' : 'text-slate-400'}`}>
                                    {fe.desc}
                                  </div>
                                </div>
                                {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Backend Technology */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-700 flex items-center justify-between">
                          <span>Backend Technology</span>
                          <span className="text-[10px] text-indigo-600 font-bold">Server Engine</span>
                        </label>
                        <div className="space-y-1.5">
                          {WEB_DEV_OPTIONS.backendStacks.map((be) => {
                            const isSelected = webBackend === be.id;
                            return (
                              <button
                                type="button"
                                key={be.id}
                                onClick={() => setWebBackend(be.id)}
                                className={`w-full p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-sm'
                                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                                }`}
                              >
                                <div>
                                  <div className="font-extrabold font-['Space_Grotesk']">{be.name}</div>
                                  <div className={`text-[10px] ${isSelected ? 'text-red-100' : 'text-slate-400'}`}>
                                    {be.desc}
                                  </div>
                                </div>
                                {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* 3. Database Selection */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Database Engine
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {WEB_DEV_OPTIONS.databases.map((db) => {
                          const isSelected = webDatabase === db.id;
                          return (
                            <button
                              type="button"
                              key={db.id}
                              onClick={() => setWebDatabase(db.id)}
                              className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <div className="flex items-center gap-1.5 mb-1">
                                <Database className="w-3 h-3 text-[#E4032E]" />
                                <span className="font-['Space_Grotesk'] text-[11px] truncate">{db.name}</span>
                              </div>
                              <span className={`text-[9px] line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                                {db.desc}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 4. Approximate Scale / Number of Pages */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Estimated Pages / Feature Modules
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {WEB_DEV_OPTIONS.pageScales.map((scale) => {
                          const isSelected = webPageScale === scale.id;
                          return (
                            <button
                              type="button"
                              key={scale.id}
                              onClick={() => setWebPageScale(scale.id)}
                              className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-sm'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <div className="font-extrabold text-[11px] font-['Space_Grotesk']">{scale.label}</div>
                              <div className={`text-[9px] mt-0.5 ${isSelected ? 'text-red-100' : 'text-slate-400'}`}>{scale.desc}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 5. Required Integrations & Features */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[11px] font-bold text-slate-700">
                          Required Integrations & Capabilities
                        </label>
                        <span className="text-[10px] text-slate-400">
                          {webIntegrations.length} Selected
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {WEB_DEV_OPTIONS.integrations.map((item) => {
                          const isChecked = webIntegrations.includes(item.id);
                          return (
                            <button
                              type="button"
                              key={item.id}
                              onClick={() => toggleWebIntegration(item.id)}
                              className={`p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                                isChecked
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <span className="text-[11px] font-['Space_Grotesk']">{item.name}</span>
                              <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                                isChecked ? 'bg-red-500 border-red-500 text-white' : 'border-slate-300 bg-white'
                              }`}>
                                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 6. Expected Timeline */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Expected Deployment Timeline
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {WEB_DEV_OPTIONS.timelines.map((tl) => {
                          const isSelected = webTimeline === tl.id;
                          return (
                            <button
                              type="button"
                              key={tl.id}
                              onClick={() => setWebTimeline(tl.id)}
                              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-sm'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <div className="font-extrabold text-xs font-['Space_Grotesk']">{tl.name}</div>
                              <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-red-100' : 'text-slate-400'}`}>
                                {tl.desc}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* --- B. MOBILE APP DEVELOPMENT SPECIFICATIONS --- */}
                {/* ========================================================================= */}
                {currentMode === 'app-development' && (
                  <div className="space-y-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                          2
                        </span>
                        <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                          Mobile Platform & Architecture Requirements
                        </label>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        iOS & Android Store Ready
                      </span>
                    </div>

                    {/* Platform Selector Cards */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Platform Target
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {APP_DEV_OPTIONS.platforms.map((plat) => {
                          const isChecked = appPlatform === plat.id;
                          return (
                            <button
                              type="button"
                              key={plat.id}
                              onClick={() => setAppPlatform(plat.id)}
                              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                                isChecked
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/20'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-extrabold text-xs font-['Space_Grotesk'] flex items-center gap-1.5">
                                  <Smartphone className="w-3.5 h-3.5 text-[#E4032E]" />
                                  <span>{plat.name}</span>
                                </span>
                                {isChecked && <Check className="w-3.5 h-3.5 text-red-400 shrink-0" />}
                              </div>
                              <p className={`text-[10px] leading-tight ${isChecked ? 'text-slate-300' : 'text-slate-500'}`}>
                                {plat.desc}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* App Category & Backend */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* App Category */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-700 block">
                          App Category / Solution Type
                        </label>
                        <div className="space-y-1.5">
                          {APP_DEV_OPTIONS.appTypes.map((cat) => {
                            const isSelected = appType === cat.id;
                            return (
                              <button
                                type="button"
                                key={cat.id}
                                onClick={() => setAppType(cat.id)}
                                className={`w-full p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-sm'
                                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                                }`}
                              >
                                <span className="font-extrabold font-['Space_Grotesk']">{cat.name}</span>
                                {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Backend Option */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-700 block">
                          Backend & Cloud API Integration
                        </label>
                        <div className="space-y-1.5">
                          {APP_DEV_OPTIONS.backendOptions.map((bo) => {
                            const isSelected = appBackend === bo.id;
                            return (
                              <button
                                type="button"
                                key={bo.id}
                                onClick={() => setAppBackend(bo.id)}
                                className={`w-full p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                                  isSelected
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                                }`}
                              >
                                <div>
                                  <div className="font-extrabold font-['Space_Grotesk'] text-[11px]">{bo.name}</div>
                                  <div className={`text-[9px] ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                                    {bo.desc}
                                  </div>
                                </div>
                                {isSelected && <Check className="w-3.5 h-3.5 shrink-0 text-[#E4032E]" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Screen Scope */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Estimated Screen Count
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {APP_DEV_OPTIONS.screenScales.map((scale) => {
                          const isSelected = appScreenScale === scale.id;
                          return (
                            <button
                              type="button"
                              key={scale.id}
                              onClick={() => setAppScreenScale(scale.id)}
                              className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-sm'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <div className="font-extrabold text-[11px] font-['Space_Grotesk']">{scale.label}</div>
                              <div className={`text-[9px] mt-0.5 ${isSelected ? 'text-red-100' : 'text-slate-400'}`}>{scale.desc}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Features / Capabilities */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[11px] font-bold text-slate-700">
                          Mobile Features & Device SDKs
                        </label>
                        <span className="text-[10px] text-slate-400">
                          {appFeatures.length} Selected
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {APP_DEV_OPTIONS.features.map((feat) => {
                          const isChecked = appFeatures.includes(feat.id);
                          return (
                            <button
                              type="button"
                              key={feat.id}
                              onClick={() => toggleAppFeature(feat.id)}
                              className={`p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                                isChecked
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <span className="text-[11px] font-['Space_Grotesk']">{feat.name}</span>
                              <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                                isChecked ? 'bg-red-500 border-red-500 text-white' : 'border-slate-300 bg-white'
                              }`}>
                                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Target Release Timeline
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {APP_DEV_OPTIONS.timelines.map((tl) => {
                          const isSelected = appTimeline === tl.id;
                          return (
                            <button
                              type="button"
                              key={tl.id}
                              onClick={() => setAppTimeline(tl.id)}
                              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-sm'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <div className="font-extrabold text-xs font-['Space_Grotesk']">{tl.name}</div>
                              <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-red-100' : 'text-slate-400'}`}>
                                {tl.desc}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* --- C. TRANSLATION SPECIFICATIONS --- */}
                {/* ========================================================================= */}
                {currentMode === 'translation' && (
                  <div className="space-y-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                          2
                        </span>
                        <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                          Language Pair & Document Scope
                        </label>
                      </div>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                        ISO 17100 Certified
                      </span>
                    </div>

                    {/* Language Pairs Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Source Language */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <label className="text-[11px] font-bold text-slate-700">From Language (Source)</label>
                          <span className="text-[10px] text-[#E4032E] font-bold">{sourceLang}</span>
                        </div>
                        <div className="relative">
                          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="text"
                            placeholder="Search source language..."
                            value={fromSearch}
                            onChange={(e) => setFromSearch(e.target.value)}
                            onFocus={() => setShowFromDropdown(true)}
                            className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#E4032E]"
                          />
                        </div>
                        <div className="h-32 overflow-y-auto border border-slate-200 rounded-xl p-1.5 space-y-1 bg-white">
                          {filteredFromLangs.map((lang) => (
                            <button
                              type="button"
                              key={`from-${lang.name}`}
                              onClick={() => {
                                setSourceLang(lang.name);
                                setFromSearch('');
                              }}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between ${
                                sourceLang === lang.name ? 'bg-red-50 text-[#E4032E] font-bold' : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <span>{lang.name}</span>
                              <span className="text-[10px] text-slate-400">{lang.code}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Target Languages */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <label className="text-[11px] font-bold text-slate-700">To Languages (Targets)</label>
                          <span className="text-[10px] text-emerald-600 font-bold">{selectedTargetLangs.length} Selected</span>
                        </div>
                        <div className="relative">
                          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="text"
                            placeholder="Filter target languages..."
                            value={toSearch}
                            onChange={(e) => setToSearch(e.target.value)}
                            className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#E4032E]"
                          />
                        </div>
                        <div className="h-32 overflow-y-auto border border-slate-200 rounded-xl p-1.5 space-y-1 bg-white">
                          {filteredToLangs.map((lang) => {
                            const isSelected = selectedTargetLangs.includes(lang.name);
                            return (
                              <button
                                type="button"
                                key={`to-${lang.name}`}
                                onClick={() => toggleTargetLang(lang.name)}
                                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between ${
                                  isSelected ? 'bg-slate-900 text-white font-bold' : 'hover:bg-slate-50 text-slate-700'
                                }`}
                              >
                                <span>{lang.name}</span>
                                <div className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 border ${
                                  isSelected ? 'bg-red-500 border-red-500 text-white' : 'border-slate-300'
                                }`}>
                                  {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Content Domain */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Content Type & Industry Domain
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {TRANSLATION_OPTIONS.contentTypes.map((ct) => {
                          const isChecked = translationContentType === ct.id;
                          return (
                            <button
                              type="button"
                              key={ct.id}
                              onClick={() => setTranslationContentType(ct.id)}
                              className={`p-2.5 rounded-xl border text-left text-xs font-semibold flex flex-col justify-between transition-all cursor-pointer ${
                                isChecked
                                  ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-sm'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <div className="font-extrabold font-['Space_Grotesk'] text-[11px] mb-0.5">{ct.name}</div>
                              <div className={`text-[9px] ${isChecked ? 'text-red-100' : 'text-slate-400'}`}>{ct.desc}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Estimated Volume Preset */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Estimated Document / Word Volume
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {TRANSLATION_OPTIONS.volumePresets.map((vp) => {
                          const isSelected = translationVolume === vp.id;
                          return (
                            <button
                              type="button"
                              key={vp.id}
                              onClick={() => setTranslationVolume(vp.id)}
                              className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <div className="font-['Space_Grotesk'] text-[11px]">{vp.label}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Turnaround SLA */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Turnaround SLA
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {TRANSLATION_OPTIONS.turnarounds.map((ta) => {
                          const isSelected = translationTurnaround === ta.id;
                          return (
                            <button
                              type="button"
                              key={ta.id}
                              onClick={() => setTranslationTurnaround(ta.id)}
                              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-sm'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <div className="font-extrabold text-xs font-['Space_Grotesk']">{ta.name}</div>
                              <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-red-100' : 'text-slate-400'}`}>
                                {ta.desc}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* --- D. LOCALIZATION SPECIFICATIONS --- */}
                {/* ========================================================================= */}
                {currentMode === 'localization' && (
                  <div className="space-y-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                          2
                        </span>
                        <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                          Product & Market Localization Requirements
                        </label>
                      </div>
                      <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                        Multi-Market Adaptation
                      </span>
                    </div>

                    {/* Product Type */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Target Asset / Product Type
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {LOCALIZATION_OPTIONS.productTypes.map((pt) => {
                          const isSelected = locProductType === pt.id;
                          return (
                            <button
                              type="button"
                              key={pt.id}
                              onClick={() => setLocProductType(pt.id)}
                              className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                                isSelected
                                  ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-sm'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <span className="font-['Space_Grotesk'] text-[11px]">{pt.name}</span>
                              {isSelected && <Check className="w-3.5 h-3.5" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Target Locales Input */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Target Locales / Countries
                      </label>
                      <input
                        type="text"
                        value={locTargetLocales}
                        onChange={(e) => setLocTargetLocales(e.target.value)}
                        placeholder="e.g. French (France/Canada), German (DACH), Japanese, Arabic (MENA)"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#E4032E]"
                      />
                    </div>

                    {/* Localization Scope Items */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Localization Scope & Services Needed
                      </label>
                      <div className="space-y-1.5">
                        {LOCALIZATION_OPTIONS.scopes.map((scope) => {
                          const isChecked = locScopes.includes(scope.id);
                          return (
                            <button
                              type="button"
                              key={scope.id}
                              onClick={() => toggleLocScope(scope.id)}
                              className={`w-full p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                                isChecked
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <span className="text-[11px] font-['Space_Grotesk']">{scope.name}</span>
                              <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                                isChecked ? 'bg-red-500 border-red-500 text-white' : 'border-slate-300 bg-white'
                              }`}>
                                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* --- E. MTPE SPECIFICATIONS --- */}
                {/* ========================================================================= */}
                {currentMode === 'mtpe' && (
                  <div className="space-y-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                          2
                        </span>
                        <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                          MTPE Quality Tier & Domain
                        </label>
                      </div>
                      <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-full border border-violet-200">
                        AI Speed + Human Accuracy
                      </span>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Post-Editing Quality Level
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {MTPE_OPTIONS.qualityLevels.map((ql) => {
                          const isSelected = mtpeQuality === ql.id;
                          return (
                            <button
                              type="button"
                              key={ql.id}
                              onClick={() => setMtpeQuality(ql.id)}
                              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-sm'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <div className="font-extrabold text-xs font-['Space_Grotesk'] mb-1">{ql.name}</div>
                              <p className={`text-[10px] leading-tight ${isSelected ? 'text-red-100' : 'text-slate-400'}`}>
                                {ql.desc}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Language Pair(s) / Locales
                      </label>
                      <input
                        type="text"
                        value={mtpeLanguages}
                        onChange={(e) => setMtpeLanguages(e.target.value)}
                        placeholder="e.g. English to Spanish, German, French, Japanese"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#E4032E]"
                      />
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* --- F. LQA SPECIFICATIONS --- */}
                {/* ========================================================================= */}
                {currentMode === 'lqa' && (
                  <div className="space-y-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                          2
                        </span>
                        <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                          Linguistic QA Scope & Platforms
                        </label>
                      </div>
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        Zero Error Guarantee
                      </span>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        QA Focus Area
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {LQA_OPTIONS.qaScopes.map((scope) => {
                          const isSelected = lqaScope === scope.id;
                          return (
                            <button
                              type="button"
                              key={scope.id}
                              onClick={() => setLqaScope(scope.id)}
                              className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <div className="font-['Space_Grotesk'] text-[11px]">{scope.name}</div>
                              <div className={`text-[9px] mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>{scope.desc}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Evaluation Environments
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {LQA_OPTIONS.platforms.map((plat) => {
                          const isChecked = lqaPlatforms.includes(plat.id);
                          return (
                            <button
                              type="button"
                              key={plat.id}
                              onClick={() => toggleLqaPlatform(plat.id)}
                              className={`p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                                isChecked
                                  ? 'bg-[#E4032E] text-white border-[#E4032E]'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <span className="text-[11px] truncate pr-1">{plat.name}</span>
                              {isChecked && <Check className="w-3.5 h-3.5 shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* --- G. AI DATA ANNOTATION SPECIFICATIONS --- */}
                {/* ========================================================================= */}
                {currentMode === 'ai-data-annotation' && (
                  <div className="space-y-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                          2
                        </span>
                        <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                          Data Modality & Pipeline Requirements
                        </label>
                      </div>
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                        AI Training Corpus
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {AI_DATA_OPTIONS.modalities.map((mod) => {
                        const isChecked = aiModality === mod.id;
                        return (
                          <button
                            type="button"
                            key={mod.id}
                            onClick={() => setAiModality(mod.id)}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                              isChecked
                                ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/20'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                            }`}
                          >
                            <div className="font-extrabold text-xs font-['Space_Grotesk'] mb-0.5">{mod.name}</div>
                            <div className={`text-[10px] ${isChecked ? 'text-slate-300' : 'text-slate-500'}`}>{mod.desc}</div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Annotation Task Specification
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {AI_DATA_OPTIONS.tasks.map((task) => {
                          const isChecked = aiTask === task.id;
                          return (
                            <button
                              type="button"
                              key={task.id}
                              onClick={() => setAiTask(task.id)}
                              className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                                isChecked
                                  ? 'bg-[#E4032E] text-white shadow-sm border-[#E4032E]'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <span>{task.name}</span>
                              {isChecked && <Check className="w-3.5 h-3.5" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================================= */}
                {/* --- H. GENERIC LINGUISTIC SPECIFICATIONS --- */}
                {/* ========================================================================= */}
                {currentMode === 'generic-linguistic' && (
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                        2
                      </span>
                      <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                        {selectedService} Scope Specifications
                      </label>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Asset Format & Deliverables Needed
                      </label>
                      <input
                        type="text"
                        value={genericScope}
                        onChange={(e) => setGenericScope(e.target.value)}
                        placeholder="e.g. Audio hours, video minutes, InDesign DTP files, or consulting scope"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#E4032E]"
                      />
                    </div>
                  </div>
                )}

                {/* -------------------------------------------------------------------------- */}
                {/* STEP 3: CONTACT & PROPOSAL RECIPIENT DETAILS */}
                {/* -------------------------------------------------------------------------- */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                        3
                      </span>
                      <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                        Proposal Recipient & Contact Details
                      </label>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold">
                      Strict NDA & Confidentiality
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={contactInfo.name}
                        onChange={(e) => {
                          setContactInfo({ ...contactInfo, name: e.target.value });
                          if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                        }}
                        placeholder="e.g. John Doe"
                        className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs font-medium focus:outline-none ${
                          formErrors.name ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#E4032E]'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[10px] text-red-500 font-semibold">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Work Email */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={contactInfo.email}
                        onChange={(e) => {
                          setContactInfo({ ...contactInfo, email: e.target.value });
                          if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                        }}
                        placeholder="e.g. name@company.com"
                        className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs font-medium focus:outline-none ${
                          formErrors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#E4032E]'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[10px] text-red-500 font-semibold">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">
                        Phone / WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={contactInfo.phone}
                        onChange={(e) => {
                          setContactInfo({ ...contactInfo, phone: e.target.value });
                          if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                        }}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs font-medium focus:outline-none ${
                          formErrors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#E4032E]'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-[10px] text-red-500 font-semibold">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-700">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={contactInfo.company}
                        onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                        placeholder="e.g. Enterprise Global Ltd."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#E4032E]"
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-1 pt-1">
                    <label className="text-[11px] font-bold text-slate-700">
                      Additional Requirements / Project Brief / File Links
                    </label>
                    <textarea
                      rows={3}
                      value={contactInfo.notes}
                      onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
                      placeholder="Specify repository links, target Figma designs, cloud environments, glossary notes, or specialized requirements..."
                      className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#E4032E] resize-none"
                    />
                  </div>
                </div>

                {/* -------------------------------------------------------------------------- */}
                {/* SUBMIT BUTTON */}
                {/* -------------------------------------------------------------------------- */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E4032E] hover:bg-[#c30226] text-white py-4 rounded-2xl text-sm font-extrabold shadow-xl shadow-red-600/30 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Compiling Project Scope...</span>
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4" />
                        <span>
                          Submit {selectedService} Request
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2 font-medium">
                    Instant transmission to Rizqoraa Solutions Architect team via encrypted enterprise dispatch.
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* -------------------------------------------------------------------------- */}
          {/* RIGHT SIDE: REQUEST / PROJECT SUMMARY PANEL (NO PRICING) (5 Cols) */}
          {/* -------------------------------------------------------------------------- */}
          <div className="lg:col-span-5 sticky top-28 space-y-5">
            <div className="bg-[#090C15] text-white p-6 sm:p-7 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
              
              {/* Subtle Ambient Red Glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#E4032E]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#E4032E]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E] font-['Space_Grotesk']">
                    Project Request Summary
                  </span>
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase bg-slate-900 text-slate-300 px-2 py-0.5 rounded-full border border-slate-800">
                  NDA & Confidential
                </span>
              </div>

              {/* Service Identity Pill */}
              <div className="p-3.5 bg-slate-900/90 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 text-[#E4032E] border border-red-500/30 flex items-center justify-center shrink-0">
                    <summaryData.icon className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Selected Solution
                    </span>
                    <span className="font-extrabold text-sm text-white font-['Space_Grotesk']">
                      {selectedService}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-red-400 bg-red-950/80 px-2 py-0.5 rounded-full border border-red-800/60">
                  {summaryData.badge}
                </span>
              </div>

              {/* Dynamic Specification Rows */}
              <div className="space-y-2.5 text-xs relative z-10">
                {summaryData.rows.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-start py-1.5 border-b border-slate-800/60 text-xs"
                  >
                    <span className="text-slate-400 shrink-0 pr-3">{row.label}:</span>
                    <span className="font-bold text-right text-slate-200 font-['Space_Grotesk']">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* High-Trust SOW Response Card (Replacing Pricing Box) */}
              <div className="p-4 bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-800 space-y-2 relative z-10">
                <div className="flex items-center gap-2 text-xs font-extrabold text-white font-['Space_Grotesk']">
                  <Clock className="w-4 h-4 text-[#E4032E]" />
                  <span>Rapid SOW & Commercial Response</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
                  A dedicated Rizqoraa Technical Solutions Architect will review your parameters and dispatch a formal Statement of Work (SOW) & custom commercial proposal within <strong>2 business hours</strong>.
                </p>
              </div>

              {/* Service-Specific Enterprise Guarantees */}
              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800/80 space-y-2 text-xs relative z-10">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <ShieldCheck className="w-4 h-4" /> Enterprise Commitments:
                </div>
                <ul className="space-y-1.5 text-slate-400 text-[11px] leading-relaxed">
                  {currentMode === 'web-development' && (
                    <>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>100% Full Source Code Ownership & Private Git Repo</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Production Cloud Deployment, DNS & SSL Configuration</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>60-Day Post-Launch Technical Bug Warranty</span>
                      </li>
                    </>
                  )}

                  {currentMode === 'app-development' && (
                    <>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>100% App Store & Google Play Launch Approval Guarantee</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Encrypted Cloud Sync & Biometric Mobile Security</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>60-Day Post-Launch Maintenance & Play/App Store Compliance</span>
                      </li>
                    </>
                  )}

                  {currentMode === 'translation' && (
                    <>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Native in-country linguists with subject matter expertise</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Dedicated senior localization project manager</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>100% MQM quality & strict confidentiality compliance</span>
                      </li>
                    </>
                  )}

                  {currentMode !== 'web-development' && currentMode !== 'app-development' && currentMode !== 'translation' && (
                    <>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Dedicated enterprise solutions architect & project lead</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Multi-tier quality assurance & validation framework</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Enterprise NDA and strict IP protection protocols</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
