import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageId } from '../types';
import { SERVICES_DATA } from '../data/mockData';
import {
  WEB_DEV_CONFIG,
  APP_DEV_CONFIG,
  AI_DATA_CONFIG,
  TRANSLATION_CONFIG,
  getQuoteServiceMode,
} from '../data/quotePricingConfig';
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Send,
  ShieldCheck,
  Clock,
  Check,
  Search,
  X,
  MessageSquare,
  ExternalLink,
  Code,
  Smartphone,
  Database,
  Layers,
  Cpu,
  Globe,
  CheckSquare,
  Zap,
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

  // --------------------------------------------------------------------------
  // SYNCHRONIZE PRE-SELECTED SERVICE FROM ROUTE QUERY PARAM
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
          (paramLower === 'desktop-publishing' && idLower === 'dtp')
        );
      });

      if (matched) {
        setSelectedService(matched.name);
      }
    }
  }, [serviceParam]);

  // Derive Current Service Mode
  const currentMode = useMemo(() => {
    return getQuoteServiceMode(selectedService);
  }, [selectedService]);

  // Handle service switch and maintain URL sync
  const handleServiceSelect = (srvName: string, srvId: string) => {
    setSelectedService(srvName);
    setSearchParams({ service: srvId });
  };

  // --------------------------------------------------------------------------
  // 1. WEB DEVELOPMENT STATE
  // --------------------------------------------------------------------------
  const [webProjectType, setWebProjectType] = useState<string>('custom-web-app');
  const [webFrontend, setWebFrontend] = useState<string>('react');
  const [webBackend, setWebBackend] = useState<string>('nodejs');
  const [webDatabase, setWebDatabase] = useState<string>('mongodb');
  const [webPageScale, setWebPageScale] = useState<string>('5-10');
  const [webIntegrations, setWebIntegrations] = useState<string[]>([
    'auth-roles',
    'payment-gateway',
    'multilingual-i18n',
  ]);
  const [webTimeline, setWebTimeline] = useState<'standard' | 'express'>('standard');

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
  const [appTimeline, setAppTimeline] = useState<'standard' | 'fasttrack'>('standard');

  const toggleAppFeature = (id: string) => {
    if (appFeatures.includes(id)) {
      setAppFeatures(appFeatures.filter((f) => f !== id));
    } else {
      setAppFeatures([...appFeatures, id]);
    }
  };

  // --------------------------------------------------------------------------
  // 3. AI DATA ANNOTATION STATE
  // --------------------------------------------------------------------------
  const [aiModality, setAiModality] = useState<string>('text');
  const [aiTask, setAiTask] = useState<string>('intent-sentiment');
  const [aiQualityTier, setAiQualityTier] = useState<string>('dual-pass');
  const [aiVolume, setAiVolume] = useState<number>(10000);
  const [aiTurnaround, setAiTurnaround] = useState<'standard' | 'express'>('standard');

  // --------------------------------------------------------------------------
  // 4. TRANSLATION / LINGUISTIC SERVICES STATE
  // --------------------------------------------------------------------------
  const [sourceLang, setSourceLang] = useState('English (US)');
  const [selectedTargetLangs, setSelectedTargetLangs] = useState<string[]>(['Spanish', 'German']);
  const [wordCount, setWordCount] = useState<number>(5000);
  const [turnaroundOption, setTurnaroundOption] = useState<'standard' | 'express'>('standard');

  // Search filter states for languages
  const [fromSearch, setFromSearch] = useState('');
  const [toSearch, setToSearch] = useState('');
  const [showFromDropdown, setShowFromDropdown] = useState(false);

  // --------------------------------------------------------------------------
  // COMMON CONTACT / PROPOSAL RECIPIENT
  // --------------------------------------------------------------------------
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    company: '',
    notes: '',
  });

  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  // Filtered source languages
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

  // Filtered target languages
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
  // DYNAMIC PRICING CALCULATION ACCORDING TO SERVICE
  // --------------------------------------------------------------------------
  const dynamicQuoteEstimate = useMemo(() => {
    if (currentMode === 'web-development') {
      const proj = WEB_DEV_CONFIG.projectTypes.find((p) => p.id === webProjectType) || WEB_DEV_CONFIG.projectTypes[0];
      const front = WEB_DEV_CONFIG.frontendStacks.find((f) => f.id === webFrontend) || WEB_DEV_CONFIG.frontendStacks[0];
      const back = WEB_DEV_CONFIG.backendStacks.find((b) => b.id === webBackend) || WEB_DEV_CONFIG.backendStacks[0];
      const db = WEB_DEV_CONFIG.databases.find((d) => d.id === webDatabase) || WEB_DEV_CONFIG.databases[0];
      const scale = WEB_DEV_CONFIG.pageScales.find((s) => s.id === webPageScale) || WEB_DEV_CONFIG.pageScales[0];
      const time = WEB_DEV_CONFIG.timelines.find((t) => t.id === webTimeline) || WEB_DEV_CONFIG.timelines[0];

      // Sum of selected integrations
      const integrationsCost = webIntegrations.reduce((acc, intId) => {
        const item = WEB_DEV_CONFIG.integrations.find((i) => i.id === intId);
        return acc + (item?.price || 0);
      }, 0);

      // Core calculation formula
      const baseSubtotal = proj.basePrice + back.costDelta + db.costDelta + integrationsCost;
      const total = Math.round((baseSubtotal * scale.multiplier * front.multiplier * time.multiplier) / 500) * 500;

      return {
        totalCost: total,
        timelineText: `${scale.weeks}${webTimeline === 'express' ? ' (Fast-Track Sprint)' : ''}`,
        formulaNote: `${proj.name} + ${front.name} & ${back.name} + ${scale.label}`,
        stackLabel: `${front.name} + ${back.name}`,
        dbLabel: db.name,
        scopeLabel: scale.label,
        typeLabel: proj.name,
      };
    }

    if (currentMode === 'app-development') {
      const plat = APP_DEV_CONFIG.platforms.find((p) => p.id === appPlatform) || APP_DEV_CONFIG.platforms[0];
      const appCat = APP_DEV_CONFIG.appTypes.find((a) => a.id === appType) || APP_DEV_CONFIG.appTypes[0];
      const back = APP_DEV_CONFIG.backendOptions.find((b) => b.id === appBackend) || APP_DEV_CONFIG.backendOptions[0];
      const scale = APP_DEV_CONFIG.screenScales.find((s) => s.id === appScreenScale) || APP_DEV_CONFIG.screenScales[0];
      const time = APP_DEV_CONFIG.timelines.find((t) => t.id === appTimeline) || APP_DEV_CONFIG.timelines[0];

      const featuresCost = appFeatures.reduce((acc, featId) => {
        const item = APP_DEV_CONFIG.features.find((f) => f.id === featId);
        return acc + (item?.price || 0);
      }, 0);

      const baseSubtotal = plat.basePrice + appCat.costDelta + back.costDelta + featuresCost;
      const total = Math.round((baseSubtotal * scale.multiplier * time.multiplier) / 500) * 500;

      return {
        totalCost: total,
        timelineText: `${scale.weeks}${appTimeline === 'fasttrack' ? ' (Fast-Track MVP)' : ''}`,
        formulaNote: `${plat.name} + ${scale.label} + ${appCat.name}`,
        platformLabel: plat.name,
        typeLabel: appCat.name,
        scopeLabel: scale.label,
        backendLabel: back.name,
      };
    }

    if (currentMode === 'ai-data-annotation') {
      const mod = AI_DATA_CONFIG.modalities.find((m) => m.id === aiModality) || AI_DATA_CONFIG.modalities[0];
      const task = AI_DATA_CONFIG.annotationTasks.find((t) => t.id === aiTask) || AI_DATA_CONFIG.annotationTasks[0];
      const qual = AI_DATA_CONFIG.qualityTiers.find((q) => q.id === aiQualityTier) || AI_DATA_CONFIG.qualityTiers[0];
      const unitRate = Number((mod.baseRate * task.multiplier * qual.multiplier).toFixed(2));
      const total = Math.round(aiVolume * unitRate);
      const estDays = Math.max(2, Math.ceil(aiVolume / (aiTurnaround === 'express' ? 5000 : 2500)));

      return {
        totalCost: total,
        timelineText: `~${estDays} Business Days`,
        formulaNote: `${aiVolume.toLocaleString()} items × ₹${unitRate}/item (${mod.name})`,
        modalityLabel: mod.name,
        taskLabel: task.name,
        volumeLabel: `${aiVolume.toLocaleString()} Units`,
        rateLabel: `₹${unitRate} / unit`,
      };
    }

    // Default: Translation / Localization & Linguistic Services
    const PER_WORD_RATE = TRANSLATION_CONFIG.perWordRate;
    const total = wordCount * PER_WORD_RATE;
    const estDays = Math.max(1, Math.ceil(wordCount / (turnaroundOption === 'express' ? 4000 : 2000)));

    return {
      totalCost: total,
      timelineText: `~${estDays} Business Days`,
      formulaNote: `Formula: ${wordCount.toLocaleString()} words × ₹${PER_WORD_RATE} = ₹${total.toLocaleString('en-IN')}`,
      langPairsLabel: `${sourceLang} → ${selectedTargetLangs.length} Target${selectedTargetLangs.length > 1 ? 's' : ''}`,
      rateLabel: `₹${PER_WORD_RATE} / word`,
      volumeLabel: `${wordCount.toLocaleString()} Words`,
      turnaroundLabel: turnaroundOption === 'express' ? 'Express (24-48 hr)' : 'Standard Delivery',
    };
  }, [
    currentMode,
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
    aiModality,
    aiTask,
    aiQualityTier,
    aiVolume,
    aiTurnaround,
    sourceLang,
    selectedTargetLangs,
    wordCount,
    turnaroundOption,
  ]);

  // --------------------------------------------------------------------------
  // DYNAMIC WHATSAPP PROPOSAL MESSAGE
  // --------------------------------------------------------------------------
  const buildWhatsAppMessage = () => {
    const lines = [
      `*New Enterprise Quote Request - Rizqoraa Solutions*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Client Name:* ${contactInfo.name.trim() || 'Valued Partner'}`,
      `🏢 *Company:* ${contactInfo.company.trim() || 'Not specified'}`,
      `📧 *Work Email:* ${contactInfo.email.trim() || 'Not specified'}`,
      ``,
      `📋 *Selected Solution:* ${selectedService}`,
    ];

    if (currentMode === 'web-development') {
      const proj = WEB_DEV_CONFIG.projectTypes.find((p) => p.id === webProjectType);
      const front = WEB_DEV_CONFIG.frontendStacks.find((f) => f.id === webFrontend);
      const back = WEB_DEV_CONFIG.backendStacks.find((b) => b.id === webBackend);
      const db = WEB_DEV_CONFIG.databases.find((d) => d.id === webDatabase);
      const scale = WEB_DEV_CONFIG.pageScales.find((s) => s.id === webPageScale);
      const intNames = webIntegrations
        .map((id) => WEB_DEV_CONFIG.integrations.find((i) => i.id === id)?.name)
        .filter(Boolean)
        .join(', ');

      lines.push(
        `🖥️ *Project Scope:* ${proj?.name || webProjectType}`,
        `⚡ *Frontend Stack:* ${front?.name || webFrontend}`,
        `⚙️ *Backend Stack:* ${back?.name || webBackend}`,
        `🗄️ *Database:* ${db?.name || webDatabase}`,
        `📄 *Modules / Scale:* ${scale?.label || webPageScale}`,
        `🔌 *Integrations (${webIntegrations.length}):* ${intNames || 'None specified'}`,
        `⏱️ *Expected Timeline:* ${dynamicQuoteEstimate.timelineText}`,
        `💰 *Estimated Investment:* ₹${dynamicQuoteEstimate.totalCost.toLocaleString('en-IN')}`
      );
    } else if (currentMode === 'app-development') {
      const plat = APP_DEV_CONFIG.platforms.find((p) => p.id === appPlatform);
      const cat = APP_DEV_CONFIG.appTypes.find((a) => a.id === appType);
      const back = APP_DEV_CONFIG.backendOptions.find((b) => b.id === appBackend);
      const scale = APP_DEV_CONFIG.screenScales.find((s) => s.id === appScreenScale);
      const featNames = appFeatures
        .map((id) => APP_DEV_CONFIG.features.find((f) => f.id === id)?.name)
        .filter(Boolean)
        .join(', ');

      lines.push(
        `📱 *Mobile Platform:* ${plat?.name || appPlatform}`,
        `🏷️ *App Category:* ${cat?.name || appType}`,
        `📐 *Screen Scope:* ${scale?.label || appScreenScale}`,
        `☁️ *Backend Architecture:* ${back?.name || appBackend}`,
        `✨ *Key Features (${appFeatures.length}):* ${featNames || 'Standard Mobile Features'}`,
        `⏱️ *Expected Timeline:* ${dynamicQuoteEstimate.timelineText}`,
        `💰 *Estimated Investment:* ₹${dynamicQuoteEstimate.totalCost.toLocaleString('en-IN')}`
      );
    } else if (currentMode === 'ai-data-annotation') {
      const mod = AI_DATA_CONFIG.modalities.find((m) => m.id === aiModality);
      const task = AI_DATA_CONFIG.annotationTasks.find((t) => t.id === aiTask);
      lines.push(
        `🤖 *Data Modality:* ${mod?.name || aiModality}`,
        `🎯 *Annotation Task:* ${task?.name || aiTask}`,
        `📊 *Dataset Volume:* ${aiVolume.toLocaleString()} items`,
        `⏱️ *Estimated Turnaround:* ${dynamicQuoteEstimate.timelineText}`,
        `💰 *Estimated Investment:* ₹${dynamicQuoteEstimate.totalCost.toLocaleString('en-IN')}`
      );
    } else {
      lines.push(
        `🌐 *Source Language:* ${sourceLang}`,
        `🎯 *Target Languages (${selectedTargetLangs.length}):* ${selectedTargetLangs.join(', ')}`,
        `📊 *Word Count:* ${wordCount.toLocaleString()} words`,
        `⚡ *Turnaround:* ${turnaroundOption === 'express' ? 'Express (24-48 hr)' : 'Standard Delivery'}`,
        `⏱️ *Estimated Timeline:* ${dynamicQuoteEstimate.timelineText}`,
        `💰 *Estimated Investment:* ₹${dynamicQuoteEstimate.totalCost.toLocaleString('en-IN')} (₹3/word)`
      );
    }

    lines.push(
      ``,
      `📝 *Project Scope / Instructions:*`,
      `${contactInfo.notes.trim() || 'Standard enterprise delivery SLA requested.'}`,
      `━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Generated via Rizqoraa Instant Quote Estimator (https://rizqoraa.com/quote)`
    );

    return lines.join('\n');
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!contactInfo.name.trim() || !contactInfo.email.trim()) {
      return;
    }

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
      {/* Top Background Ambient Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[#E4032E]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Title Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#E4032E] text-xs font-bold border border-red-200/80 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTANT ENTERPRISE ESTIMATOR & SOW GENERATOR</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E4032E] animate-pulse" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141414] tracking-tight font-['Space_Grotesk']">
            Request an Enterprise Quote
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Configure your project parameters below to calculate a real-time preliminary estimate and receive a formal enterprise proposal within 2 business hours.
          </p>
        </div>
      </section>

      {/* Main Form & Live Estimator Layout */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Left Configuration Form Container */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] space-y-8 relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-[#E4032E] to-red-600" />

            {quoteSubmitted ? (
              <div className="py-12 px-6 bg-emerald-50/80 rounded-2xl border border-emerald-200 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-extrabold text-emerald-950 font-['Space_Grotesk']">
                  Quote Request Compiled & WhatsApp Opened!
                </h2>
                <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{contactInfo.name || 'Valued Partner'}</strong>. Your preliminary estimate of{' '}
                  <strong className="text-emerald-900 text-base">
                    ₹{dynamicQuoteEstimate.totalCost.toLocaleString('en-IN')}
                  </strong>{' '}
                  for <strong>{selectedService}</strong> has been configured. WhatsApp has opened in a new tab with your pre-filled scope ready to review and send.
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
                
                {/* STEP 1: Select Service Type */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                        1
                      </span>
                      <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                        Select Service Solution
                      </label>
                    </div>
                    <span className="text-[11px] font-bold text-slate-400">
                      {SERVICES_DATA.length} Available Solutions
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SERVICES_DATA.map((srv) => {
                      const isSelected = selectedService === srv.name;
                      return (
                        <button
                          type="button"
                          key={srv.id}
                          onClick={() => handleServiceSelect(srv.name, srv.id)}
                          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between group ${
                            isSelected
                              ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-md shadow-red-500/20 ring-2 ring-[#E4032E]/30'
                              : 'bg-slate-50 hover:bg-slate-100/80 text-slate-800 border-slate-200/90'
                          }`}
                        >
                          <div className="space-y-0.5 pr-2">
                            <div className="text-xs font-extrabold font-['Space_Grotesk'] tracking-tight flex items-center gap-1.5">
                              <span>{srv.name}</span>
                              {(srv.id === 'web-development' || srv.id === 'app-development') && (
                                <span className={`text-[9px] px-1.5 py-0.2 rounded font-black tracking-wide uppercase ${
                                  isSelected ? 'bg-white/20 text-white' : 'bg-red-100 text-[#E4032E]'
                                }`}>
                                  Tech
                                </span>
                              )}
                            </div>
                            <div className={`text-[11px] line-clamp-1 ${isSelected ? 'text-red-100' : 'text-slate-500'}`}>
                              {srv.oneLineDesc}
                            </div>
                          </div>
                          
                          <div className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center border ${
                            isSelected ? 'bg-white text-[#E4032E] border-white' : 'border-slate-300 bg-white text-transparent group-hover:border-slate-400'
                          }`}>
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* -------------------------------------------------------------------------- */}
                {/* STEP 2: DYNAMIC SERVICE-SPECIFIC CONFIGURATION */}
                {/* -------------------------------------------------------------------------- */}

                {/* --- A. WEB DEVELOPMENT STEP 2 --- */}
                {currentMode === 'web-development' && (
                  <div className="space-y-5 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                          2
                        </span>
                        <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                          Project Architecture & Technology Stack
                        </label>
                      </div>
                      <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                        Full-Stack Engineering
                      </span>
                    </div>

                    {/* 1. Project Type Selector */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Select Project Scope / Type
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {WEB_DEV_CONFIG.projectTypes.map((pt) => {
                          const isChecked = webProjectType === pt.id;
                          return (
                            <button
                              type="button"
                              key={pt.id}
                              onClick={() => setWebProjectType(pt.id)}
                              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                                isChecked
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-extrabold text-xs font-['Space_Grotesk']">{pt.name}</span>
                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                  isChecked ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                                }`}>
                                  From ₹{(pt.basePrice / 1000).toFixed(0)}k
                                </span>
                              </div>
                              <p className={`text-[10px] leading-tight ${isChecked ? 'text-slate-300' : 'text-slate-500'}`}>
                                {pt.desc}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Frontend & Backend Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Frontend Technology */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-700 flex items-center justify-between">
                          <span>Frontend Framework</span>
                          <span className="text-[10px] text-[#E4032E] font-extrabold">UI / Client</span>
                        </label>
                        <div className="space-y-1.5">
                          {WEB_DEV_CONFIG.frontendStacks.map((fe) => {
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
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-700 flex items-center justify-between">
                          <span>Backend Engine</span>
                          <span className="text-[10px] text-indigo-600 font-extrabold">Server / API</span>
                        </label>
                        <div className="space-y-1.5">
                          {WEB_DEV_CONFIG.backendStacks.map((be) => {
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
                        Database & Data Persistence
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {WEB_DEV_CONFIG.databases.map((db) => {
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
                              <div className="flex items-center gap-1.5">
                                <Database className="w-3 h-3 text-[#E4032E]" />
                                <span className="font-['Space_Grotesk'] text-[11px] truncate">{db.name}</span>
                              </div>
                              <span className={`text-[9px] mt-1 ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                                {db.desc}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* --- B. MOBILE APP DEVELOPMENT STEP 2 --- */}
                {currentMode === 'app-development' && (
                  <div className="space-y-5 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                          2
                        </span>
                        <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                          Platform Target & Mobile Architecture
                        </label>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        iOS & Android Store
                      </span>
                    </div>

                    {/* Platform Selector Cards */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Select Platform Target
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {APP_DEV_CONFIG.platforms.map((plat) => {
                          const isChecked = appPlatform === plat.id;
                          return (
                            <button
                              type="button"
                              key={plat.id}
                              onClick={() => setAppPlatform(plat.id)}
                              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                                isChecked
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-extrabold text-xs font-['Space_Grotesk'] flex items-center gap-1.5">
                                  <Smartphone className="w-3.5 h-3.5 text-[#E4032E]" />
                                  <span>{plat.name}</span>
                                </span>
                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                  isChecked ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                                }`}>
                                  From ₹{(plat.basePrice / 1000).toFixed(0)}k
                                </span>
                              </div>
                              <p className={`text-[10px] leading-tight ${isChecked ? 'text-slate-300' : 'text-slate-500'}`}>
                                {plat.desc}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* App Category & Backend Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* App Category */}
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-700 block">
                          App Category / Solution Type
                        </label>
                        <div className="space-y-1.5">
                          {APP_DEV_CONFIG.appTypes.map((cat) => {
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
                          {APP_DEV_CONFIG.backendOptions.map((bo) => {
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
                  </div>
                )}

                {/* --- C. AI DATA ANNOTATION STEP 2 --- */}
                {currentMode === 'ai-data-annotation' && (
                  <div className="space-y-5 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                          2
                        </span>
                        <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                          Data Modality & Annotation Pipeline
                        </label>
                      </div>
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                        AI Model Training Data
                      </span>
                    </div>

                    {/* Data Modality */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {AI_DATA_CONFIG.modalities.map((mod) => {
                        const isChecked = aiModality === mod.id;
                        return (
                          <button
                            type="button"
                            key={mod.id}
                            onClick={() => setAiModality(mod.id)}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                              isChecked
                                ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                            }`}
                          >
                            <div className="font-extrabold text-xs font-['Space_Grotesk'] mb-0.5">{mod.name}</div>
                            <div className={`text-[10px] ${isChecked ? 'text-slate-300' : 'text-slate-500'}`}>{mod.desc}</div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Annotation Task */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Annotation Task Specification
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {AI_DATA_CONFIG.annotationTasks.map((task) => {
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

                {/* --- D. TRANSLATION / LINGUISTIC STEP 2 --- */}
                {currentMode === 'translation' && (
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                        2
                      </span>
                      <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                        Language Pair Configuration
                      </label>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* From Language (Source Language) with Search */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <label className="text-[11px] font-bold text-slate-600 block">
                            From Language (Source)
                          </label>
                          <span className="text-[10px] font-bold text-[#E4032E] bg-red-50 px-2 py-0.5 rounded-md border border-red-100">
                            {sourceLang}
                          </span>
                        </div>

                        {/* Search Filter Input for From Language */}
                        <div className="relative">
                          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            placeholder='Search source (e.g. "Span", "Ger")...'
                            value={fromSearch}
                            onFocus={() => setShowFromDropdown(true)}
                            onChange={(e) => {
                              setFromSearch(e.target.value);
                              setShowFromDropdown(true);
                            }}
                            className="w-full bg-slate-50 border border-slate-200/90 rounded-xl pl-9 pr-8 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E4032E]/30 focus:border-[#E4032E] focus:bg-white transition-all"
                          />
                          {fromSearch && (
                            <button
                              type="button"
                              onClick={() => setFromSearch('')}
                              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        {/* Source Language Quick Scroll Container */}
                        <div className="p-1.5 bg-slate-50 border border-slate-200/90 rounded-xl max-h-36 overflow-y-auto space-y-1">
                          {filteredFromLangs.length === 0 ? (
                            <div className="p-2 text-center text-[11px] text-slate-400">
                              No languages match "{fromSearch}"
                            </div>
                          ) : (
                            filteredFromLangs.map((lang) => {
                              const isSelected = sourceLang === lang.name;
                              return (
                                <button
                                  type="button"
                                  key={lang.code}
                                  onClick={() => {
                                    setSourceLang(lang.name);
                                    setShowFromDropdown(false);
                                  }}
                                  className={`w-full px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                                    isSelected
                                      ? 'bg-[#E4032E] text-white shadow-sm'
                                      : 'text-slate-700 hover:bg-slate-200/70'
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    <span>{lang.name}</span>
                                    <span className={`text-[10px] ${isSelected ? 'text-red-100' : 'text-slate-400'}`}>
                                      ({lang.native})
                                    </span>
                                  </div>
                                  {isSelected && <Check className="w-3.5 h-3.5" />}
                                </button>
                              );
                            })
                          )}
                        </div>
                      </div>

                      {/* To Language (Target Languages) with Search */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <label className="text-[11px] font-bold text-slate-600 block">
                            To Language (Targets)
                          </label>
                          <span className="text-[10px] font-extrabold text-[#E4032E] bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                            {selectedTargetLangs.length} Selected
                          </span>
                        </div>

                        {/* Search Filter Input for Target Languages */}
                        <div className="relative">
                          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            placeholder='Search target (e.g. "Span", "Ger", "Jap")...'
                            value={toSearch}
                            onChange={(e) => setToSearch(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200/90 rounded-xl pl-9 pr-8 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E4032E]/30 focus:border-[#E4032E] focus:bg-white transition-all"
                          />
                          {toSearch && (
                            <button
                              type="button"
                              onClick={() => setToSearch('')}
                              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        {/* Searchable Target Languages Chips Container */}
                        <div className="p-1.5 bg-slate-50 border border-slate-200/90 rounded-xl max-h-36 overflow-y-auto flex flex-wrap gap-1.5">
                          {filteredToLangs.length === 0 ? (
                            <div className="w-full p-2 text-center text-[11px] text-slate-400">
                              No languages match "{toSearch}"
                            </div>
                          ) : (
                            filteredToLangs.map((lang) => {
                              const isChecked = selectedTargetLangs.includes(lang.name);
                              return (
                                <button
                                  type="button"
                                  key={lang.code}
                                  onClick={() => toggleTargetLang(lang.name)}
                                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                                    isChecked
                                      ? 'bg-[#E4032E] text-white shadow-sm'
                                      : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                                  }`}
                                >
                                  <span>{isChecked ? '✓' : '+'}</span>
                                  <span>{lang.name}</span>
                                </button>
                              );
                            })
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* -------------------------------------------------------------------------- */}
                {/* STEP 3: DYNAMIC VOLUME, SCOPE, MODULES & TIMELINE SPEED */}
                {/* -------------------------------------------------------------------------- */}

                {/* --- A. WEB DEV STEP 3 --- */}
                {currentMode === 'web-development' && (
                  <div className="space-y-5 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                        3
                      </span>
                      <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                        Project Scope, Modules & Integrations
                      </label>
                    </div>

                    {/* Scale: Number of Pages/Modules */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Estimated Number of Pages / Functional Modules
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {WEB_DEV_CONFIG.pageScales.map((scale) => {
                          const isSelected = webPageScale === scale.id;
                          return (
                            <button
                              type="button"
                              key={scale.id}
                              onClick={() => setWebPageScale(scale.id)}
                              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-md shadow-red-500/20'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                              }`}
                            >
                              <div className="font-extrabold text-xs font-['Space_Grotesk']">{scale.label}</div>
                              <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-red-100' : 'text-slate-400'}`}>
                                ~{scale.weeks}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Required Integrations Checklist */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 flex items-center justify-between">
                        <span>Required Integrations & Features</span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          {webIntegrations.length} Selected
                        </span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {WEB_DEV_CONFIG.integrations.map((intg) => {
                          const isChecked = webIntegrations.includes(intg.id);
                          return (
                            <button
                              type="button"
                              key={intg.id}
                              onClick={() => toggleWebIntegration(intg.id)}
                              className={`p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                                isChecked
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                                  isChecked ? 'bg-[#E4032E] text-white' : 'border border-slate-300 bg-white'
                                }`}>
                                  {isChecked ? '✓' : ''}
                                </div>
                                <span className="font-['Space_Grotesk']">{intg.name}</span>
                              </div>
                              <span className={`text-[10px] ${isChecked ? 'text-emerald-400' : 'text-slate-400'}`}>
                                +₹{(intg.price / 1000).toFixed(0)}k
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Timeline Speed */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Deployment Timeline & Sprint Model
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {WEB_DEV_CONFIG.timelines.map((tl) => {
                          const isSelected = webTimeline === tl.id;
                          return (
                            <button
                              type="button"
                              key={tl.id}
                              onClick={() => setWebTimeline(tl.id as any)}
                              className={`p-3.5 rounded-2xl border text-xs font-bold flex items-center justify-between cursor-pointer transition-all ${
                                isSelected
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                              }`}
                            >
                              <div className="text-left">
                                <div className="font-extrabold">{tl.name}</div>
                                <div className="text-[10px] opacity-75 font-normal">{tl.desc}</div>
                              </div>
                              <Clock className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* --- B. APP DEV STEP 3 --- */}
                {currentMode === 'app-development' && (
                  <div className="space-y-5 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                        3
                      </span>
                      <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                        App Screens, Features & Milestones
                      </label>
                    </div>

                    {/* App Screens Scale */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Estimated Number of Mobile App Screens
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {APP_DEV_CONFIG.screenScales.map((scale) => {
                          const isSelected = appScreenScale === scale.id;
                          return (
                            <button
                              type="button"
                              key={scale.id}
                              onClick={() => setAppScreenScale(scale.id)}
                              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-md shadow-red-500/20'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                              }`}
                            >
                              <div className="font-extrabold text-xs font-['Space_Grotesk']">{scale.label}</div>
                              <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-red-100' : 'text-slate-400'}`}>
                                ~{scale.weeks}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Key Mobile Features Checklist */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 flex items-center justify-between">
                        <span>Key In-App Features & Native Modules</span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          {appFeatures.length} Selected
                        </span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {APP_DEV_CONFIG.features.map((feat) => {
                          const isChecked = appFeatures.includes(feat.id);
                          return (
                            <button
                              type="button"
                              key={feat.id}
                              onClick={() => toggleAppFeature(feat.id)}
                              className={`p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                                isChecked
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                                  isChecked ? 'bg-[#E4032E] text-white' : 'border border-slate-300 bg-white'
                                }`}>
                                  {isChecked ? '✓' : ''}
                                </div>
                                <span className="font-['Space_Grotesk']">{feat.name}</span>
                              </div>
                              <span className={`text-[10px] ${isChecked ? 'text-emerald-400' : 'text-slate-400'}`}>
                                +₹{(feat.price / 1000).toFixed(0)}k
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Sprint Timeline */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 block">
                        Milestone & Deployment SLA
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {APP_DEV_CONFIG.timelines.map((tl) => {
                          const isSelected = appTimeline === tl.id;
                          return (
                            <button
                              type="button"
                              key={tl.id}
                              onClick={() => setAppTimeline(tl.id as any)}
                              className={`p-3.5 rounded-2xl border text-xs font-bold flex items-center justify-between cursor-pointer transition-all ${
                                isSelected
                                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                              }`}
                            >
                              <div className="text-left">
                                <div className="font-extrabold">{tl.name}</div>
                                <div className="text-[10px] opacity-75 font-normal">{tl.desc}</div>
                              </div>
                              <Clock className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* --- C. AI DATA ANNOTATION STEP 3 --- */}
                {currentMode === 'ai-data-annotation' && (
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                        3
                      </span>
                      <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                        Dataset Volume & Delivery SLA
                      </label>
                    </div>

                    {/* Volume Slider */}
                    <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-slate-600">
                          Dataset Item Count
                        </label>
                        <span className="text-lg font-black text-[#E4032E] font-['Space_Grotesk'] tracking-tight">
                          {aiVolume.toLocaleString()} <span className="text-xs font-bold text-slate-500">items</span>
                        </span>
                      </div>

                      <input
                        type="range"
                        min={1000}
                        max={100000}
                        step={1000}
                        value={aiVolume}
                        onChange={(e) => setAiVolume(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#E4032E]"
                      />

                      {/* Presets */}
                      <div className="flex flex-wrap justify-between gap-1 text-[10px] text-slate-400 font-bold">
                        {AI_DATA_CONFIG.volumePresets.map((preset) => (
                          <button
                            type="button"
                            key={preset}
                            onClick={() => setAiVolume(preset)}
                            className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                              aiVolume === preset
                                ? 'bg-[#E4032E] text-white font-extrabold'
                                : 'hover:text-slate-800 hover:bg-slate-200/60'
                            }`}
                          >
                            {preset.toLocaleString()} items
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* --- D. TRANSLATION / LINGUISTIC STEP 3 --- */}
                {currentMode === 'translation' && (
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                        3
                      </span>
                      <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                        Volume & Turnaround Speed
                      </label>
                    </div>

                    {/* Word Count Slider */}
                    <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-slate-600">
                          Estimated Word Count
                        </label>
                        <span className="text-lg font-black text-[#E4032E] font-['Space_Grotesk'] tracking-tight">
                          {wordCount.toLocaleString()} <span className="text-xs font-bold text-slate-500">words</span>
                        </span>
                      </div>

                      <input
                        type="range"
                        min={500}
                        max={100000}
                        step={500}
                        value={wordCount}
                        onChange={(e) => setWordCount(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#E4032E]"
                      />

                      {/* Word presets */}
                      <div className="flex flex-wrap justify-between gap-1 text-[10px] text-slate-400 font-bold">
                        {TRANSLATION_CONFIG.volumePresets.map((preset) => (
                          <button
                            type="button"
                            key={preset}
                            onClick={() => setWordCount(preset)}
                            className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                              wordCount === preset
                                ? 'bg-[#E4032E] text-white font-extrabold'
                                : 'hover:text-slate-800 hover:bg-slate-200/60'
                            }`}
                          >
                            {preset.toLocaleString()}w
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Turnaround Speed Options */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setTurnaroundOption('standard')}
                        className={`p-3.5 rounded-2xl border text-xs font-bold flex items-center justify-between cursor-pointer transition-all ${
                          turnaroundOption === 'standard'
                            ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        <div className="text-left">
                          <div className="font-extrabold">Standard Turnaround</div>
                          <div className="text-[10px] opacity-70 font-normal">Regular business delivery SLA</div>
                        </div>
                        <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setTurnaroundOption('express')}
                        className={`p-3.5 rounded-2xl border text-xs font-bold flex items-center justify-between cursor-pointer transition-all ${
                          turnaroundOption === 'express'
                            ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-md shadow-red-500/20'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        <div className="text-left">
                          <div className="font-extrabold flex items-center gap-1">
                            Express Delivery <Sparkles className="w-3 h-3" />
                          </div>
                          <div className="text-[10px] opacity-80 font-normal">Accelerated 24-48 hr delivery</div>
                        </div>
                        <Sparkles className="w-4 h-4 shrink-0" />
                      </button>
                    </div>
                  </div>
                )}

                {/* -------------------------------------------------------------------------- */}
                {/* STEP 4: Enterprise Contact Details */}
                {/* -------------------------------------------------------------------------- */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                      4
                    </span>
                    <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                      Enterprise Proposal Recipient
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-600 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E4032E]/30 focus:border-[#E4032E] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-600 block mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E4032E]/30 focus:border-[#E4032E] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enterprise Organization Inc."
                      value={contactInfo.company}
                      onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E4032E]/30 focus:border-[#E4032E] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">
                      Additional Notes / Custom Instructions
                    </label>
                    <textarea
                      rows={2}
                      placeholder={
                        currentMode === 'web-development'
                          ? 'Specify any specific design references, third-party APIs, or hosting preferences...'
                          : currentMode === 'app-development'
                          ? 'Specify app store account status, backend readiness, or required device hardware access...'
                          : 'Specify subject matter domain, glossary preferences, file formats or special requirements...'
                      }
                      value={contactInfo.notes}
                      onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E4032E]/30 focus:border-[#E4032E] focus:bg-white transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Primary CTA Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E4032E] hover:bg-[#c30226] disabled:opacity-75 disabled:cursor-not-allowed text-white py-4 px-6 rounded-2xl text-base font-extrabold shadow-xl shadow-red-500/25 hover:shadow-red-500/40 flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-200 group font-['Space_Grotesk']"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Compiling Quote & Opening WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Submit & Review on WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* -------------------------------------------------------------------------- */}
          {/* RIGHT TERMINAL: DYNAMIC LIVE ESTIMATE SUMMARY */}
          {/* -------------------------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="bg-[#0E121B] text-white p-7 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
              {/* Subtle Ambient Glow inside dark card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E4032E]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Sidebar Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 relative z-10">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#E4032E] flex items-center gap-2">
                  <Calculator className="w-4 h-4" /> Live Estimate Summary
                </span>
                <span className="text-[10px] bg-red-500/10 text-red-400 px-2.5 py-0.5 rounded-full border border-red-500/20 font-extrabold uppercase">
                  {currentMode === 'web-development' || currentMode === 'app-development'
                    ? 'Agile Sprint SLA'
                    : 'ISO 17100 SLA'}
                </span>
              </div>

              {/* DYNAMIC BREAKDOWN LIST ACCORDING TO SERVICE */}
              <div className="space-y-3.5 text-xs relative z-10">
                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Selected Solution:</span>
                  <span className="font-bold text-white font-['Space_Grotesk']">{selectedService}</span>
                </div>

                {/* Web Development Breakdown */}
                {currentMode === 'web-development' && (
                  <>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Project Scope:</span>
                      <span className="font-bold text-white font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.typeLabel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Technology Stack:</span>
                      <span className="font-bold text-emerald-400 font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.stackLabel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Database Engine:</span>
                      <span className="font-bold text-white font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.dbLabel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Modules / Scale:</span>
                      <span className="font-bold text-white font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.scopeLabel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Active Integrations:</span>
                      <span className="font-bold text-slate-200 font-['Space_Grotesk']">
                        {webIntegrations.length} Selected
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Sprint Model:</span>
                      <span className={`font-bold ${webTimeline === 'express' ? 'text-red-400' : 'text-slate-200'}`}>
                        {webTimeline === 'express' ? 'Accelerated Fast-Track' : 'Standard Sprint'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Est. Timeline:</span>
                      <span className="font-bold text-emerald-400 font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.timelineText}
                      </span>
                    </div>
                  </>
                )}

                {/* App Development Breakdown */}
                {currentMode === 'app-development' && (
                  <>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Mobile Platform:</span>
                      <span className="font-bold text-white font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.platformLabel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">App Category:</span>
                      <span className="font-bold text-emerald-400 font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.typeLabel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Screen Scope:</span>
                      <span className="font-bold text-white font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.scopeLabel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Cloud Backend:</span>
                      <span className="font-bold text-slate-200 font-['Space_Grotesk'] truncate max-w-[180px]">
                        {dynamicQuoteEstimate.backendLabel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Selected Features:</span>
                      <span className="font-bold text-slate-200 font-['Space_Grotesk']">
                        {appFeatures.length} Active
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Est. Timeline:</span>
                      <span className="font-bold text-emerald-400 font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.timelineText}
                      </span>
                    </div>
                  </>
                )}

                {/* AI Data Annotation Breakdown */}
                {currentMode === 'ai-data-annotation' && (
                  <>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Data Modality:</span>
                      <span className="font-bold text-white font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.modalityLabel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Annotation Task:</span>
                      <span className="font-bold text-white font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.taskLabel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Dataset Volume:</span>
                      <span className="font-bold text-emerald-400 font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.volumeLabel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Est. Timeline:</span>
                      <span className="font-bold text-emerald-400 font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.timelineText}
                      </span>
                    </div>
                  </>
                )}

                {/* Translation & Linguistic Services Breakdown */}
                {currentMode === 'translation' && (
                  <>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Language Pairs:</span>
                      <span className="font-bold text-white font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.langPairsLabel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Rate per Word:</span>
                      <span className="font-bold text-white font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.rateLabel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Total Volume:</span>
                      <span className="font-bold text-white font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.volumeLabel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Turnaround Speed:</span>
                      <span className={`font-bold ${turnaroundOption === 'express' ? 'text-red-400' : 'text-slate-200'}`}>
                        {dynamicQuoteEstimate.turnaroundLabel}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Est. Timeline:</span>
                      <span className="font-bold text-emerald-400 font-['Space_Grotesk']">
                        {dynamicQuoteEstimate.timelineText}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Big Total Price Highlight with ₹ Currency */}
              <div className="pt-4 border-t border-slate-800 text-center space-y-1 relative z-10 bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-bold block">
                  Estimated Investment
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
                  ₹{dynamicQuoteEstimate.totalCost.toLocaleString('en-IN')}
                </div>
                <div className="text-[10px] text-slate-400 pt-1 line-clamp-2">
                  {dynamicQuoteEstimate.formulaNote}
                </div>
              </div>

              {/* Enterprise Guarantee Box - Dynamic per Service */}
              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800/80 space-y-2.5 text-xs relative z-10">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <ShieldCheck className="w-4 h-4" /> Enterprise Guarantees:
                </div>
                <ul className="space-y-1.5 text-slate-400 text-[11px] leading-relaxed">
                  {currentMode === 'web-development' && (
                    <>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>100% Full Source Code Ownership & Git Repository</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Production Cloud Deployment & SSL / DNS Configuration</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>60-Day Post-Launch Bug Warranty & SLA Support</span>
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
                        <span>60-Day Post-Launch Technical Maintenance & Updates</span>
                      </li>
                    </>
                  )}

                  {currentMode === 'ai-data-annotation' && (
                    <>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>99.2%+ Inter-Annotator Agreement (IAA) Quality Gate</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Strict Isolated PII-Compliant Annotation Infrastructure</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Ready-to-Train Formats (JSON, Parquet, CSV, CoNLL)</span>
                      </li>
                    </>
                  )}

                  {currentMode === 'translation' && (
                    <>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Free sample translation up to 500 words</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Dedicated senior localization project manager</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>100% MQM quality compliance guarantee</span>
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
