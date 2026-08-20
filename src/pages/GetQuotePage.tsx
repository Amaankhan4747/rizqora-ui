import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES_DATA } from '../data/mockData';
import { Calculator, CheckCircle2, ArrowRight, Sparkles, Send, ShieldCheck, Clock, FileText, Check, Layers, Globe2 } from 'lucide-react';

interface GetQuotePageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const GetQuotePage: React.FC<GetQuotePageProps> = ({ onNavigate }) => {
  const [sourceLang, setSourceLang] = useState('English (US)');
  const [selectedTargetLangs, setSelectedTargetLangs] = useState<string[]>(['Spanish', 'German']);
  const [selectedService, setSelectedService] = useState('Translation');
  const [wordCount, setWordCount] = useState<number>(5000);
  const [turnaroundOption, setTurnaroundOption] = useState<'standard' | 'express'>('standard');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    company: '',
    notes: '',
  });

  // Calculate rate based on service and speed
  const getRatePerWord = () => {
    switch (selectedService) {
      case 'Translation': return 0.12;
      case 'Machine Translation Post-Editing (MTPE)': return 0.07;
      case 'AI Data Annotation': return 0.15;
      case 'Linguistic Quality Assurance (LQA)': return 0.06;
      case 'Subtitling': return 0.14;
      case 'Desktop Publishing (DTP)': return 0.10;
      default: return 0.11;
    }
  };

  const baseRate = getRatePerWord();
  const speedMultiplier = turnaroundOption === 'express' ? 1.35 : 1.0;
  const numTargets = selectedTargetLangs.length || 1;
  const estimatedTotalCost = Math.round(wordCount * baseRate * speedMultiplier * numTargets);
  const estimatedDays = Math.max(1, Math.ceil(wordCount / (turnaroundOption === 'express' ? 4000 : 2000)));

  const toggleTargetLang = (langName: string) => {
    if (selectedTargetLangs.includes(langName)) {
      if (selectedTargetLangs.length > 1) {
        setSelectedTargetLangs(selectedTargetLangs.filter((l) => l !== langName));
      }
    } else {
      setSelectedTargetLangs([...selectedTargetLangs, langName]);
    }
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen">
      {/* Top Background Ambient Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[#E4032E]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Title Header - Clean & Compact so Form is Immediately Visible */}
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
                  Quote Request Submitted Successfully!
                </h2>
                <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{contactInfo.name}</strong>. Your estimated quote of <strong className="text-emerald-900 text-base">${estimatedTotalCost.toLocaleString()} USD</strong> has been dispatched to our enterprise account executive. You will receive a formal Statement of Work (SOW) at <strong>{contactInfo.email}</strong> within 2 hours.
                </p>

                <div className="pt-4 flex justify-center gap-4">
                  <button
                    onClick={() => {
                      setQuoteSubmitted(false);
                      onNavigate('home');
                    }}
                    className="bg-[#E4032E] hover:bg-[#c30226] text-white px-8 py-3.5 rounded-xl text-xs font-bold shadow-lg shadow-red-500/20 cursor-pointer transition-colors"
                  >
                    Return to Homepage
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-8">
                
                {/* STEP 1: Select Service Type */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#E4032E] text-white text-xs font-bold flex items-center justify-center font-['Space_Grotesk']">
                      1
                    </span>
                    <label className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                      Select Service Solution
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SERVICES_DATA.slice(0, 6).map((srv) => {
                      const isSelected = selectedService === srv.name;
                      return (
                        <button
                          type="button"
                          key={srv.id}
                          onClick={() => setSelectedService(srv.name)}
                          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between group ${
                            isSelected
                              ? 'bg-[#E4032E] text-white border-[#E4032E] shadow-md shadow-red-500/20'
                              : 'bg-slate-50 hover:bg-slate-100/80 text-slate-800 border-slate-200/90'
                          }`}
                        >
                          <div className="space-y-0.5 pr-2">
                            <div className="text-xs font-extrabold font-['Space_Grotesk'] tracking-tight">
                              {srv.name}
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

                {/* STEP 2: Languages */}
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
                    {/* Source Language */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-600 block">
                        Source Language
                      </label>
                      <div className="relative">
                        <select
                          value={sourceLang}
                          onChange={(e) => setSourceLang(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E4032E]/30 focus:border-[#E4032E] focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="English (US)">English (US)</option>
                          <option value="English (UK)">English (UK)</option>
                          <option value="Spanish">Spanish</option>
                          <option value="German">German</option>
                          <option value="French">French</option>
                          <option value="Chinese (Simplified)">Chinese (Simplified)</option>
                          <option value="Japanese">Japanese</option>
                          <option value="Arabic">Arabic</option>
                        </select>
                        <Globe2 className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Target Languages */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-[11px] font-bold text-slate-600 block">
                          Target Languages
                        </label>
                        <span className="text-[10px] font-extrabold text-[#E4032E] bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                          {selectedTargetLangs.length} Selected
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 p-2.5 bg-slate-50 border border-slate-200/90 rounded-xl max-h-28 overflow-y-auto">
                        {['Spanish', 'German', 'Japanese', 'French', 'Chinese', 'Arabic', 'Portuguese', 'Korean', 'Italian'].map((l) => {
                          const isChecked = selectedTargetLangs.includes(l);
                          return (
                            <button
                              type="button"
                              key={l}
                              onClick={() => toggleTargetLang(l)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                                isChecked
                                  ? 'bg-[#E4032E] text-white shadow-sm'
                                  : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                              }`}
                            >
                              <span>{isChecked ? '✓' : '+'}</span>
                              <span>{l}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* STEP 3: Word Count & Speed */}
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

                    <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                      <span>500 words</span>
                      <span>25,000 words</span>
                      <span>50,000 words</span>
                      <span>100,000+ words</span>
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

                {/* STEP 4: Enterprise Contact Details */}
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
                      placeholder="Specify subject matter domain, glossary preferences, file formats or special requirements..."
                      value={contactInfo.notes}
                      onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#E4032E]/30 focus:border-[#E4032E] focus:bg-white transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Primary CTA Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#E4032E] hover:bg-[#c30226] text-white py-4 px-6 rounded-2xl text-base font-extrabold shadow-xl shadow-red-500/25 hover:shadow-red-500/40 flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-200 group font-['Space_Grotesk']"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Submit Official Quote Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Live Estimate Breakdown Terminal Sidebar */}
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
                  ISO 17100 SLA
                </span>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3.5 text-xs relative z-10">
                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Selected Solution:</span>
                  <span className="font-bold text-white font-['Space_Grotesk']">{selectedService}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Language Pairs:</span>
                  <span className="font-bold text-white font-['Space_Grotesk']">
                    {sourceLang} → {selectedTargetLangs.length} Target{selectedTargetLangs.length > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Total Volume:</span>
                  <span className="font-bold text-white font-['Space_Grotesk']">{wordCount.toLocaleString()} Words</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Turnaround Speed:</span>
                  <span className={`font-bold ${turnaroundOption === 'express' ? 'text-red-400' : 'text-slate-200'}`}>
                    {turnaroundOption === 'express' ? 'Express (24-48 hr)' : 'Standard Delivery'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Est. Timeline:</span>
                  <span className="font-bold text-emerald-400 font-['Space_Grotesk']">{estimatedDays} Business Days</span>
                </div>
              </div>

              {/* Big Total Price Highlight */}
              <div className="pt-4 border-t border-slate-800 text-center space-y-1 relative z-10 bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-bold block">
                  Estimated Investment
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
                  ${estimatedTotalCost.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400"> USD</span>
                </div>
                <div className="text-[10px] text-slate-500 pt-1">
                  * Final pricing confirmed upon source document file analysis.
                </div>
              </div>

              {/* Enterprise Guarantee Box */}
              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800/80 space-y-2.5 text-xs relative z-10">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <ShieldCheck className="w-4 h-4" /> Enterprise Guarantees:
                </div>
                <ul className="space-y-1.5 text-slate-400 text-[11px] leading-relaxed">
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
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
