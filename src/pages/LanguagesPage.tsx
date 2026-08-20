import React, { useState } from 'react';
import { PageId } from '../types';
import { LANGUAGES_SAMPLE } from '../data/mockData';
import { Globe3D } from '../components/common/Globe3D';
import { Search, Globe, Filter, CheckCircle2, ArrowRight } from 'lucide-react';

interface LanguagesPageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const LanguagesPage: React.FC<LanguagesPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const filteredLanguages = LANGUAGES_SAMPLE.filter((lang) => {
    const matchesSearch =
      lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lang.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion =
      selectedRegion === 'All' || lang.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            GLOBAL LANGUAGE COVERAGE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            1,000+ Languages with Cultural Precision
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            From major global trading languages to rare regional dialects, our AI + native linguist network covers 1,000+ languages across 200+ countries.
          </p>
        </div>
      </section>

      {/* Interactive Globe & Explorer Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
              REAL-TIME LANGUAGE NETWORK
            </span>
            <h2 className="text-3xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
              Seamless Multilingual Bridge Across Continents
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every language pair in our catalog is backed by ISO 17100 certified workflows, continuous NMT engine retraining, and domain-expert native proofreaders.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-3xl font-black text-[#E4032E] font-['Space_Grotesk']">1,000+</div>
                <div className="text-xs font-bold text-slate-700 mt-1">Supported Languages</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-3xl font-black text-[#141414] font-['Space_Grotesk']">98.7%</div>
                <div className="text-xs font-bold text-slate-700 mt-1">Avg Accuracy Score</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Globe3D />
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search language, code (e.g. ES, Japanese)..."
                className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#141414] placeholder-slate-400 focus:outline-none focus:border-[#E4032E]"
              />
            </div>

            {/* Region Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Region:
              </span>
              {['All', 'EMEA', 'APAC', 'Americas', 'Global'].map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    selectedRegion === reg
                      ? 'bg-[#E4032E] text-white'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredLanguages.map((lang) => (
            <div
              key={lang.id}
              className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-red-200 shadow-sm hover:shadow-lg transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#E4032E] bg-red-50 px-2.5 py-1 rounded-md">
                  {lang.code}
                </span>
                <span className="text-[10px] uppercase font-semibold text-slate-400">
                  {lang.region}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#141414] font-['Space_Grotesk']">
                  {lang.name}
                </h3>
                <div className="text-xs text-slate-500 italic">{lang.nativeName}</div>
              </div>

              <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-slate-400 block">Speakers</span>
                  <span className="font-bold text-slate-800">{lang.speakers}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Accuracy</span>
                  <span className="font-bold text-emerald-600">{lang.accuracyRate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-3">
          <h3 className="text-xl font-bold text-[#141414] font-['Space_Grotesk']">
            Need a rare or custom indigenous dialect?
          </h3>
          <p className="text-xs text-slate-600 max-w-xl mx-auto">
            Rizqora network includes native specialists for over 1,000 low-resource regional dialects worldwide.
          </p>
          <button
            onClick={() => onNavigate('quote')}
            className="mt-2 inline-flex items-center gap-2 bg-[#E4032E] text-white px-6 py-3 rounded-xl text-xs font-bold shadow-md cursor-pointer"
          >
            <span>Inquire Language Capability</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
