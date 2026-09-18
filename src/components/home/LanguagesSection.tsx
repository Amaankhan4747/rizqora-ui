import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Globe2,
  Sparkles,
  ArrowRight,
  Search,
  CheckCircle2,
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { COMPREHENSIVE_LANGUAGES } from '../../data/languagesData';
import { getScriptFontClass } from '../../utils/languageHelpers';

export const LanguagesSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Curated showcase list for landing page - responsive and lightweight
  const displayedLanguages = useMemo(() => {
    return COMPREHENSIVE_LANGUAGES.filter((lang) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        lang.name.toLowerCase().includes(q) ||
        lang.nativeName.toLowerCase().includes(q) ||
        lang.code.toLowerCase().includes(q);

      const matchesRegion =
        selectedRegion === 'All' || lang.region === selectedRegion;

      return matchesSearch && matchesRegion;
    }).slice(0, 8);
  }, [selectedRegion, searchQuery]);

  return (
    <section className="relative py-12 sm:py-20 bg-[#080B13] text-white overflow-hidden border-b border-slate-800">
      {/* Subtle Matrix Grid Accent */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient Red Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3.5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-[11px] font-bold text-[#E4032E] uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>GLOBAL LANGUAGE COVERAGE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-5xl font-black tracking-tight font-['Space_Grotesk'] text-white"
          >
            150+ Languages.{' '}
            <span className="text-[#E4032E]">Infinite Global Reach.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            Every language pair is engineered with script-aware typography, native dialect nuance, and ISO 17100 certified human verification.
          </motion.p>
        </div>

        {/* Interactive Filter & Search Bar */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10 p-2 sm:p-2.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full sm:w-auto">
            {['All', 'Americas', 'EMEA', 'APAC', 'Global'].map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`flex-1 sm:flex-initial text-center px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-[#E4032E] text-white shadow-[0_0_14px_rgba(228,3,46,0.45)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search language or code..."
              className="w-full bg-white/[0.05] border border-white/10 rounded-xl pl-9 pr-3 py-2 sm:py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E4032E]"
            />
          </div>
        </div>

        {/* Curated Interactive Language Cards - Horizontal Touch Slider on Mobile, Grid on Desktop */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-visible pb-4 pt-1 sm:pb-0 sm:pt-0 no-scrollbar snap-x snap-mandatory sm:snap-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-x gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-4 sm:mb-10">
          {displayedLanguages.map((lang, index) => {
            const scriptClass = getScriptFontClass(lang.scriptType);

            return (
              <motion.div
                key={lang.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className="w-[84vw] max-w-[280px] xs:max-w-[310px] sm:w-auto shrink-0 sm:shrink snap-start sm:snap-align-none"
              >
                <Link
                  to={`/languages/${lang.slug}`}
                  className="group block h-full p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.025] hover:bg-white/[0.055] border border-white/10 hover:border-[#E4032E]/60 transition-all duration-300 relative shadow-sm hover:shadow-[0_12px_30px_rgba(228,3,46,0.12)] hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <span className="text-[10px] sm:text-[11px] font-black text-[#E4032E] bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded font-['Space_Grotesk']">
                      {lang.code}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-slate-400">
                      {lang.region}
                    </span>
                  </div>

                  <div className="space-y-0.5 sm:space-y-1 mb-3 sm:mb-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk'] group-hover:text-[#E4032E] transition-colors">
                        {lang.name}
                      </h3>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E4032E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </div>
                    <div
                      dir={lang.direction || 'ltr'}
                      className={`text-xs text-slate-400 font-medium line-clamp-1 ${scriptClass}`}
                    >
                      {lang.nativeName}
                    </div>
                  </div>

                  <div className="pt-2.5 sm:pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                    <span>{lang.speakers} speakers</span>
                    <span className="font-bold text-emerald-400">{lang.accuracyRate} SLA</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile-Only CTA: View All Languages */}
        <div className="block sm:hidden text-center mb-6">
          <Link
            to="/languages"
            className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 rounded-xl bg-[#E4032E] hover:bg-[#c20227] text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(228,3,46,0.3)] transition-all cursor-pointer min-h-[44px]"
          >
            <span>View All Languages</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Regional Dialects Strip */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 mb-8 sm:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="py-2.5 sm:py-0 px-2 sm:px-4">
              <div className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk']">450+ Dialects</div>
              <div className="text-xs font-bold text-[#E4032E] mt-0.5">EMEA Coverage</div>
              <div className="text-[11px] text-slate-400 mt-1">Arabic, High German, Castilian, French, Benelux</div>
            </div>
            <div className="py-2.5 sm:py-0 px-2 sm:px-4">
              <div className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk']">380+ Dialects</div>
              <div className="text-xs font-bold text-[#E4032E] mt-0.5">APAC Coverage</div>
              <div className="text-[11px] text-slate-400 mt-1">CJK, Indic, Dravidian, Southeast Asian Varieties</div>
            </div>
            <div className="py-2.5 sm:py-0 px-2 sm:px-4">
              <div className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk']">120+ Dialects</div>
              <div className="text-xs font-bold text-[#E4032E] mt-0.5">Americas Coverage</div>
              <div className="text-[11px] text-slate-400 mt-1">LatAm Spanish, Brazilian Portuguese, French Canadian</div>
            </div>
          </div>
        </div>

        {/* Explore All CTA Button */}
        <div className="text-center">
          <Link
            to="/languages"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#E4032E] hover:bg-[#c20227] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-[0_0_24px_rgba(228,3,46,0.35)] hover:shadow-[0_0_32px_rgba(228,3,46,0.5)] cursor-pointer group"
          >
            <span>Explore All 150+ Languages & Dialects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
