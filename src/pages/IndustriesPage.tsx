import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageId } from '../types';
import { INDUSTRIES_DATA, IndustryItem } from '../data/industriesData';
import { IconHelper } from '../components/common/IconHelper';
import { IndustryVisualCard } from '../components/industries/IndustryVisualCard';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate?: (page: PageId, detailId?: string) => void;
  selectedDetailId?: string;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  selectedDetailId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<string>(
    selectedDetailId || INDUSTRIES_DATA[0].id
  );

  const categories = ['All', 'Technology', 'Regulated', 'Consumer', 'Industrial'];

  const filteredIndustries = INDUSTRIES_DATA.filter((i) => {
    if (selectedCategory === 'All') return true;
    return i.category === selectedCategory;
  });

  const activeIndustry: IndustryItem =
    INDUSTRIES_DATA.find((i) => i.id === activeTab || i.slug === activeTab) ||
    INDUSTRIES_DATA[0];

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#E4032E] uppercase tracking-wider font-['Space_Grotesk']">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GLOBAL DOMAIN CAPABILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            Tailored Language Solutions for Every Global Industry
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Deep domain expertise, specialized regulatory compliance workflows, and industry-tuned neural translation infrastructure engineered for your mission-critical international operations.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#141414] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200/80'
                }`}
              >
                {cat === 'All' ? 'All 12 Sectors' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs & Active Spotlight */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Industry Pill Selector Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filteredIndustries.map((ind) => {
            const isActive = activeIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setActiveTab(ind.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#E4032E] text-white shadow-md shadow-red-500/25 ring-2 ring-red-500/30'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <IconHelper name={ind.iconName} size={16} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Spotlight Feature Card */}
        <div className="bg-[#0A0A0A] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E4032E]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Spotlight Left */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-[#E4032E] text-white flex items-center justify-center shadow-lg shadow-red-600/30">
                <IconHelper name={activeIndustry.iconName} size={28} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E4032E] font-['Space_Grotesk']">
                    SPOTLIGHT ARCHITECTURE
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
                    {activeIndustry.category}
                  </span>
                </div>
                <h2 className="text-3xl font-extrabold text-white font-['Space_Grotesk']">
                  {activeIndustry.name}
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {activeIndustry.desc}
            </p>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider font-['Space_Grotesk']">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <span>Key Domain Challenges</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeIndustry.keyChallenges.slice(0, 3).map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E4032E] mt-1.5 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider font-['Space_Grotesk']">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Rizqoraa Solutions</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeIndustry.solutionHighlights.slice(0, 3).map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions & Benchmark Tag */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to={`/industries/${activeIndustry.slug || activeIndustry.id}`}
                className="bg-[#E4032E] hover:bg-[#c30226] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Dedicated {activeIndustry.name} Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <TrendingUp className="w-4 h-4 text-[#E4032E]" />
                <span>
                  <strong className="text-white">{activeIndustry.stat}</strong> {activeIndustry.statLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Spotlight Right: Technical Visual Card */}
          <div className="lg:col-span-5 relative z-10">
            <IndustryVisualCard industry={activeIndustry} />
          </div>

        </div>
      </section>

      {/* Grid of All 12 Industries with Direct Navigation */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E] font-['Space_Grotesk']">
            COMPREHENSIVE DIRECTORY
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141414] font-['Space_Grotesk']">
            Explore All 12 Enterprise Industry Practices
          </h3>
          <p className="text-sm text-slate-500">
            Click any sector to view in-depth compliance guidelines, workflows, and case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((ind) => (
            <Link
              key={ind.id}
              to={`/industries/${ind.slug || ind.id}`}
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E4032E] group-hover:bg-[#E4032E] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                    <IconHelper name={ind.iconName} size={24} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-['Space_Grotesk']">
                    {ind.category}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#E4032E] transition-colors font-['Space_Grotesk']">
                  {ind.name}
                </h4>

                <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                  {ind.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="text-[11px] text-slate-400 font-semibold uppercase">
                    Key Benchmark
                  </div>
                  <div className="text-sm font-bold text-[#E4032E] font-['Space_Grotesk'] flex items-center justify-between">
                    <span>{ind.stat}</span>
                    <span className="text-xs font-normal text-slate-600 line-clamp-1">
                      {ind.statLabel}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#E4032E]">
                <span>Explore Solutions Blueprint</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
