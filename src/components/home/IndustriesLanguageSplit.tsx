import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES_DATA, IndustryItem } from '../../data/industriesData';
import { IconHelper } from '../common/IconHelper';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';
import { PageId } from '../../types';

interface IndustriesLanguageSplitProps {
  onNavigate?: (page: PageId, detailId?: string) => void;
}

export const IndustriesLanguageSplit: React.FC<IndustriesLanguageSplitProps> = () => {
  // Initial active industry is 'technology'
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('technology');
  // State for toggling between primary 8 and all 12 industries
  const [showAllIndustries, setShowAllIndustries] = useState<boolean>(false);
  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Technology', 'Regulated', 'Consumer', 'Industrial'];

  // Filter based on category and toggle
  const filteredIndustries = INDUSTRIES_DATA.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const displayedIndustries =
    selectedCategory === 'All' && !showAllIndustries
      ? filteredIndustries.filter((item) => item.featuredInHome)
      : filteredIndustries;

  const currentIndustry: IndustryItem =
    INDUSTRIES_DATA.find((item) => item.id === selectedIndustryId) || INDUSTRIES_DATA[0];

  return (
    <section id="industry-expertise-section" className="py-12 sm:py-20 lg:py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-xs font-bold text-[#E4032E] tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPECIALIZED DOMAIN LOCALIZATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk'] leading-[1.15]">
            Industry Expertise.{' '}
            <span className="text-[#E4032E]">Global Impact.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
            Rizqoraa delivers specialized language and AI solutions for global enterprise industries where communication accuracy, regulatory compliance, and security matter most.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-4 sm:pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  // Ensure current active industry matches or defaults to first in category
                  const firstInCat =
                    cat === 'All'
                      ? INDUSTRIES_DATA[0]
                      : INDUSTRIES_DATA.find((i) => i.category === cat);
                  if (firstInCat && currentIndustry.category !== cat && cat !== 'All') {
                    setSelectedIndustryId(firstInCat.id);
                  }
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#141414] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'All Sectors (12)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Dual-Panel Exploration Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Industry Cards Grid */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between pb-2 text-xs font-semibold text-slate-500">
              <span>Select an industry to preview blueprint:</span>
              <span className="font-mono text-slate-400">
                {displayedIndustries.length} of {INDUSTRIES_DATA.length} Available
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {displayedIndustries.map((ind) => {
                const isSelected = ind.id === currentIndustry.id;

                return (
                  <div
                    key={ind.id}
                    onClick={() => setSelectedIndustryId(ind.id)}
                    className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between group relative ${
                      isSelected
                        ? 'bg-white border-[#E4032E] shadow-lg shadow-red-500/10 ring-2 ring-red-500/20'
                        : 'bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-md'
                    }`}
                  >
                    {/* Active Accent Tag */}
                    {isSelected && (
                      <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#E4032E] text-white text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase font-['Space_Grotesk']">
                        ACTIVE PREVIEW
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <div
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'bg-[#E4032E] text-white shadow-md shadow-red-500/30'
                              : 'bg-white text-slate-700 border border-slate-200 group-hover:border-red-200 group-hover:text-[#E4032E]'
                          }`}
                        >
                          <IconHelper name={ind.iconName} size={18} />
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400 font-['Space_Grotesk']">
                          {ind.category}
                        </span>
                      </div>

                      <h3
                        className={`text-sm sm:text-base font-bold font-['Space_Grotesk'] transition-colors ${
                          isSelected ? 'text-[#141414]' : 'text-slate-900 group-hover:text-[#E4032E]'
                        }`}
                      >
                        {ind.name}
                      </h3>

                      <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2 mt-1 sm:mt-1.5 leading-snug sm:leading-relaxed">
                        {ind.tagline || ind.desc}
                      </p>
                    </div>

                    <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs">
                      <span className="font-mono text-[10px] sm:text-[11px] font-bold text-slate-700">
                        {ind.stat} <span className="text-slate-400 font-normal">Impact</span>
                      </span>

                      <Link
                        to={`/industries/${ind.slug || ind.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 font-bold text-[11px] sm:text-xs text-[#E4032E] hover:underline"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Expand / View All 12 Industries Toggle */}
            {selectedCategory === 'All' && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowAllIndustries(!showAllIndustries)}
                  className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-red-300 bg-white hover:bg-red-50/40 text-xs font-bold text-slate-700 hover:text-[#E4032E] flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  {showAllIndustries ? (
                    <>
                      <span>Show Primary 8 Featured Industries</span>
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>
                        Explore All 12 Specialized Industries (+Travel, Automotive, Media, Energy)
                      </span>
                      <ChevronDown className="w-4 h-4 text-[#E4032E]" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Selected Industry Detail Highlight & Blueprint */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-[#0A0A0A] text-white border border-slate-800 shadow-2xl relative overflow-hidden space-y-5 sm:space-y-6">
              {/* Subtle ambient accent glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#E4032E]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Preview Header */}
              <div className="relative z-10 flex flex-col xs:flex-row xs:items-start justify-between gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#E4032E] text-white flex items-center justify-center shadow-lg shadow-red-600/30 shrink-0">
                    <IconHelper name={currentIndustry.iconName} size={22} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#E4032E] font-['Space_Grotesk']">
                        {currentIndustry.category} BLUEPRINT
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[9px] sm:text-[10px] font-mono text-slate-300 border border-slate-700">
                        {currentIndustry.visualTheme?.badgeText || 'ENTERPRISE'}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight mt-0.5">
                      {currentIndustry.name}
                    </h3>
                  </div>
                </div>

                {/* Key Metric Badge */}
                <div className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-slate-900 border border-slate-800 text-left xs:text-right self-start xs:self-auto">
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase">BENCHMARK IMPACT</div>
                  <div className="text-lg sm:text-xl font-black text-[#E4032E] font-['Space_Grotesk']">
                    {currentIndustry.stat}
                  </div>
                </div>
              </div>

              {/* Concise Summary & Description */}
              <div className="relative z-10 space-y-2">
                <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                  {currentIndustry.desc}
                </p>
                {currentIndustry.detailedDesc && (
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {currentIndustry.detailedDesc}
                  </p>
                )}
              </div>

              {/* Challenges & Solutions Grid */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                
                {/* Key Challenges */}
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider font-['Space_Grotesk']">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span>Key Challenges</span>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-300">
                    {currentIndustry.keyChallenges.slice(0, 3).map((ch, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                        <span className="leading-snug">{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution Highlights */}
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider font-['Space_Grotesk']">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Rizqoraa Solutions</span>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-300">
                    {currentIndustry.solutionHighlights.slice(0, 3).map((sol, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span className="leading-snug">{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Proof Point / Stat Label Callout */}
              <div className="relative z-10 p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#E4032E]" />
                  <span className="font-semibold">{currentIndustry.statLabel}</span>
                </span>
                <span className="font-mono text-emerald-400 font-bold">100% Guaranteed</span>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <Link
                  to={`/industries/${currentIndustry.slug || currentIndustry.id}`}
                  className="w-full sm:flex-1 bg-[#E4032E] hover:bg-[#c30226] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <span>{currentIndustry.ctaText || `Explore ${currentIndustry.name} Solutions`}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/industries"
                  className="w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-2 transition-all"
                >
                  <span>View All 12 Industries</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
