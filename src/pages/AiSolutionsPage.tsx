import React, { useState } from 'react';
import { PageId } from '../types';
import { Sparkles, Cpu, CheckCircle2, ArrowRight, RefreshCw, BarChart2 } from 'lucide-react';

interface AiSolutionsPageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const AiSolutionsPage: React.FC<AiSolutionsPageProps> = ({ onNavigate }) => {
  const [inputText, setInputText] = useState('Welcome to Rizqoraa Solutions. We deliver high-precision enterprise AI localization and neural machine translation.');
  const [targetLang, setTargetLang] = useState('Spanish');
  const [isProcessing, setIsProcessing] = useState(false);
  const [translatedResult, setTranslatedResult] = useState({
    output: 'Bienvenido a Rizqoraa Solutions. Ofrecemos localización de Inteligencia Artificial empresarial y traducción automática neuronal de alta precisión.',
    qualityScore: '99.2%',
    mtpeSuggested: 'Human Verified (ISO 17100)',
    confidence: '99.8%',
  });

  const handleSimulateTranslate = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (targetLang === 'Spanish') {
        setTranslatedResult({
          output: 'Bienvenido a Rizqoraa Solutions. Ofrecemos localización de Inteligencia Artificial empresarial y traducción automática neuronal de alta precisión.',
          qualityScore: '99.2%',
          mtpeSuggested: 'Verified by Native Editor',
          confidence: '99.8%',
        });
      } else if (targetLang === 'German') {
        setTranslatedResult({
          output: 'Willkommen bei Rizqoraa Solutions. Wir bieten hochpräzise KI-Lokalisierung und neuronale maschinelle Übersetzung für Unternehmen.',
          qualityScore: '99.4%',
          mtpeSuggested: 'Verified by Native Editor',
          confidence: '99.9%',
        });
      } else if (targetLang === 'Japanese') {
        setTranslatedResult({
          output: 'Rizqoraa Solutionsへようこそ。企業向けの超高精度AIローカリゼーションとニューラル機械翻訳を提供します。',
          qualityScore: '98.8%',
          mtpeSuggested: 'Verified by Native Editor',
          confidence: '99.5%',
        });
      } else if (targetLang === 'French') {
        setTranslatedResult({
          output: 'Bienvenue chez Rizqoraa Solutions. Nous fournissons une localisation IA d’entreprise de haute précision et une traduction automatique neuronale.',
          qualityScore: '99.3%',
          mtpeSuggested: 'Verified by Native Editor',
          confidence: '99.7%',
        });
      }
    }, 600);
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            TECHNOLOGY DIFFERENTIATOR
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            AI Data Annotation, MTPE & AI-Driven Quality Assurance
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Unlocking the true potential of AI language models with structured multilingual dataset annotation, neural post-editing, and automated quality intelligence.
          </p>
        </div>
      </section>

      {/* Live AI Interactive Translation & Quality Scoring Playground */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A0A0A] text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E4032E] text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                  Rizqoraa AI Quality Intelligence Sandbox
                </h3>
                <p className="text-xs text-slate-400">
                  Experience real-time MT inference and MQM error estimation scoring.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Target Language:</span>
              <select
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value)}
                className="bg-slate-900 border border-slate-700 rounded-lg text-xs font-bold text-white px-3 py-1.5 focus:outline-none focus:border-[#E4032E]"
              >
                <option value="Spanish">Spanish (ES)</option>
                <option value="German">German (DE)</option>
                <option value="Japanese">Japanese (JA)</option>
                <option value="French">French (FR)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Panel */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Source Text (English)
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={5}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#E4032E]"
              />
              <button
                onClick={handleSimulateTranslate}
                disabled={isProcessing}
                className="w-full bg-[#E4032E] hover:bg-[#c30226] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Analyzing Neural Model...
                  </>
                ) : (
                  <>
                    <Cpu className="w-4 h-4" />
                    Run Rizqoraa AI Inference & MQM Audit
                  </>
                )}
              </button>
            </div>

            {/* Output Panel with MQM Score */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#E4032E] uppercase tracking-wider block">
                Localized Result & AI Metrics
              </label>
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-4 min-h-[170px]">
                <p className="text-xs text-slate-200 leading-relaxed font-mono">
                  {translatedResult.output}
                </p>

                <div className="pt-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 bg-slate-900 rounded-xl">
                    <span className="text-[10px] text-slate-400 block">MQM Score</span>
                    <span className="font-extrabold text-emerald-400 font-['Space_Grotesk']">{translatedResult.qualityScore}</span>
                  </div>
                  <div className="p-2 bg-slate-900 rounded-xl">
                    <span className="text-[10px] text-slate-400 block">Status</span>
                    <span className="font-bold text-white text-[10px]">{translatedResult.mtpeSuggested}</span>
                  </div>
                  <div className="p-2 bg-slate-900 rounded-xl">
                    <span className="text-[10px] text-slate-400 block">Confidence</span>
                    <span className="font-extrabold text-[#E4032E] font-['Space_Grotesk']">{translatedResult.confidence}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Main AI Capabilities */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E4032E] flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#141414] font-['Space_Grotesk']">
              AI Data Annotation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Curate and annotate high-volume multilingual datasets for LLM alignment, RLHF, speech recognition, and sentiment models across 100+ native dialects.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#E4032E]" />
            </div>
            <h3 className="text-xl font-bold text-[#141414] font-['Space_Grotesk']">
              Neural MTPE
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Combine state-of-the-art NMT speed with human linguist post-editing for maximum release throughput at 45% lower cost.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E4032E] flex items-center justify-center">
              <BarChart2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#141414] font-['Space_Grotesk']">
              AI-Driven Quality QA
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated error estimation scoring, anomaly detection, and MQM compliance validation before content goes live.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
