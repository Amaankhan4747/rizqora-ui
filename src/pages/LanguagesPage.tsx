import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PageId } from '../types';
import { COMPREHENSIVE_LANGUAGES, REGION_CATEGORIES, SCRIPT_CATEGORIES } from '../data/languagesData';
import { getScriptFontClass } from '../utils/languageHelpers';
import { Globe3D } from '../components/common/Globe3D';
import {
  Search,
  Globe,
  Filter,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  RotateCcw,
  SlidersHorizontal
} from 'lucide-react';

interface LanguagesPageProps {
  onNavigate?: (page: PageId, detailId?: string) => void;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const LanguagesPage: React.FC<LanguagesPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedScript, setSelectedScript] = useState<string>('All Scripts');
  const [onlyPopular, setOnlyPopular] = useState<boolean>(false);
  const [selectedLetter, setSelectedLetter] = useState<string>('All');

  const filteredLanguages = useMemo(() => {
    return COMPREHENSIVE_LANGUAGES.filter((lang) => {
      // Search matches name, native name, code, or countries
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        lang.name.toLowerCase().includes(q) ||
        lang.nativeName.toLowerCase().includes(q) ||
        lang.code.toLowerCase().includes(q) ||
        lang.countries.some((c) => c.toLowerCase().includes(q)) ||
        (lang.dialects && lang.dialects.some((d) => d.toLowerCase().includes(q)));

      // Region match
      const matchesRegion =
        selectedRegion === 'All' || lang.region === selectedRegion;

      // Script match
      const matchesScript =
        selectedScript === 'All Scripts' ||
        (selectedScript === 'Latin' && lang.scriptType === 'latin') ||
        (selectedScript === 'Arabic (RTL)' && lang.scriptType === 'arabic') ||
        (selectedScript === 'Devanagari' && lang.scriptType === 'devanagari') ||
        (selectedScript === 'Han / CJK' && lang.scriptType === 'cjk') ||
        (selectedScript === 'Cyrillic' && lang.scriptType === 'cyrillic') ||
        (selectedScript === 'Indic / Dravidian' && (lang.scriptType === 'indic' || lang.scriptType === 'devanagari')) ||
        (selectedScript === 'Hebrew' && lang.scriptType === 'hebrew') ||
        (selectedScript === 'Greek' && lang.scriptType === 'greek');

      // Popular filter
      const matchesPopular = !onlyPopular || lang.popularPair;

      // Alphabet letter match
      const matchesLetter =
        selectedLetter === 'All' ||
        lang.name.toUpperCase().startsWith(selectedLetter);

      return (
        matchesSearch &&
        matchesRegion &&
        matchesScript &&
        matchesPopular &&
        matchesLetter
      );
    });
  }, [searchQuery, selectedRegion, selectedScript, onlyPopular, selectedLetter]);

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedRegion !== 'All' ||
    selectedScript !== 'All Scripts' ||
    onlyPopular ||
    selectedLetter !== 'All';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedScript('All Scripts');
    setOnlyPopular(false);
    setSelectedLetter('All');
  };

  return (
    <div className="pt-28 pb-20 bg-white selection:bg-[#E4032E] selection:text-white">
      {/* Header Banner */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[11px] font-bold text-[#E4032E] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GLOBAL LANGUAGE HUB</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            150+ Languages with Cultural Precision
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            From major global trading languages to complex regional scripts and low-resource dialects. Backed by 950+ validated language combinations and verified native linguists.
          </p>
        </div>
      </section>

      {/* Interactive Globe & Explorer Overview Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
              AUTHENTIC SCRIPT RENDERING & LOCALIZATION
            </span>
            <h2 className="text-3xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
              Seamless Multilingual Bridge Across Continents
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every language pair in our catalog is backed by ISO 17100 certified workflows, continuous NMT engine retraining, and domain-expert native proofreaders for flawless contextual resonance.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-2xl sm:text-3xl font-black text-[#E4032E] font-['Space_Grotesk']">150+</div>
                <div className="text-xs font-bold text-slate-700 mt-1">Global Languages</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-2xl sm:text-3xl font-black text-[#141414] font-['Space_Grotesk']">950+</div>
                <div className="text-xs font-bold text-slate-700 mt-1">Active Pairs</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-['Space_Grotesk']">99.2%</div>
                <div className="text-xs font-bold text-slate-700 mt-1">Avg Accuracy</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Globe3D />
          </div>
        </div>

        {/* Discovery Filter Controls */}
        <div className="bg-slate-50 p-6 sm:p-7 rounded-3xl border border-slate-200/80 mb-8 space-y-5 shadow-sm">
          {/* Top Search & Popular Toggle */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-xl">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search language, native name, code, or country (e.g. Arabic, Español, Germany, JA)..."
                className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#141414] placeholder-slate-400 focus:outline-none focus:border-[#E4032E] focus:ring-1 focus:ring-[#E4032E]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Popular Pill Toggle & Reset */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setOnlyPopular(!onlyPopular)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  onlyPopular
                    ? 'bg-[#E4032E] text-white shadow-[0_0_12px_rgba(228,3,46,0.3)]'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Popular Pairs Only</span>
              </button>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-[#E4032E] bg-white border border-slate-200 hover:border-red-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Region Tabs & Script Dropdown Filter */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-t border-slate-200/70">
            {/* Region Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#E4032E]" /> Region:
              </span>
              {REGION_CATEGORIES.map((reg) => (
                <button
                  key={reg}
                  type="button"
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    selectedRegion === reg
                      ? 'bg-[#141414] text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>

            {/* Script Family Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1 shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" /> Script:
              </span>
              <select
                value={selectedScript}
                onChange={(e) => setSelectedScript(e.target.value)}
                className="bg-white border border-slate-200 text-xs font-bold text-slate-800 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#E4032E] cursor-pointer"
              >
                {SCRIPT_CATEGORIES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Alphabetical A-Z Filter Strip */}
          <div className="pt-2 border-t border-slate-200/70">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase mr-1">A–Z:</span>
              <button
                type="button"
                onClick={() => setSelectedLetter('All')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                  selectedLetter === 'All'
                    ? 'bg-[#E4032E] text-white'
                    : 'text-slate-600 hover:text-[#141414] hover:bg-slate-200/60'
                }`}
              >
                All
              </button>
              {ALPHABET.map((char) => (
                <button
                  key={char}
                  type="button"
                  onClick={() => setSelectedLetter(char)}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                    selectedLetter === char
                      ? 'bg-[#E4032E] text-white'
                      : 'text-slate-500 hover:text-[#141414] hover:bg-slate-200/60'
                  }`}
                >
                  {char}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
            <span>
              Showing <strong className="text-slate-900">{filteredLanguages.length}</strong> of {COMPREHENSIVE_LANGUAGES.length} detailed language profiles
            </span>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              Click any language card to view full dialect specifications and sample translations
            </span>
          </div>
        </div>

        {/* Empty State */}
        {filteredLanguages.length === 0 && (
          <div className="py-16 text-center bg-slate-50 rounded-3xl border border-slate-200 p-8 space-y-3">
            <Globe className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800 font-['Space_Grotesk']">
              No exact language match found
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We cover 150+ languages and 950+ language pairs. Try resetting your search query or region filter.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-2 inline-flex items-center gap-2 bg-[#E4032E] text-white px-4 py-2 rounded-xl text-xs font-bold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

        {/* Language Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredLanguages.map((lang) => {
            const scriptClass = getScriptFontClass(lang.scriptType);

            return (
              <Link
                key={lang.id}
                to={`/languages/${lang.slug}`}
                className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-red-300 shadow-sm hover:shadow-lg transition-all space-y-3 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#E4032E] bg-red-50 px-2.5 py-1 rounded-md font-['Space_Grotesk']">
                      {lang.code}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {lang.region}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-base font-bold text-[#141414] font-['Space_Grotesk'] group-hover:text-[#E4032E] transition-colors">
                        {lang.name}
                      </h3>
                      {lang.popularPair && (
                        <span className="w-2 h-2 rounded-full bg-[#E4032E] shrink-0" title="Popular language pair" />
                      )}
                    </div>
                    <div
                      dir={lang.direction || 'ltr'}
                      className={`text-xs text-slate-500 font-medium ${scriptClass}`}
                    >
                      {lang.nativeName}
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {lang.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px]">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Speakers</span>
                      <span className="font-bold text-slate-800">{lang.speakers}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Accuracy</span>
                      <span className="font-bold text-emerald-600">{lang.accuracyRate}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-slate-400 group-hover:text-[#E4032E] pt-1">
                    <span className="text-[10px] font-semibold truncate max-w-[150px]">
                      {lang.script} script
                    </span>
                    <span className="inline-flex items-center gap-0.5 text-xs font-bold group-hover:translate-x-0.5 transition-transform">
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Dialect Capability Banner */}
        <div className="mt-14 text-center p-8 sm:p-10 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E4032E] flex items-center justify-center mx-auto">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#141414] font-['Space_Grotesk']">
            Need a rare regional dialect or custom language combination?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The Rizqoraa global network includes certified native linguists and domain specialists across more than 1,000 regional dialects and low-resource indigenous language varieties worldwide.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-[#E4032E] hover:bg-[#c20227] text-white px-6 py-3 rounded-xl text-xs font-bold shadow-md cursor-pointer transition-colors"
            >
              <span>Request Custom Dialect Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 px-5 py-3 rounded-xl text-xs font-bold transition-colors"
            >
              <span>Speak with a Linguist</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
