import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  COMPREHENSIVE_LANGUAGES,
  getLanguageBySlug,
  getRelatedLanguages
} from '../data/languagesData';
import { getScriptFontClass } from '../utils/languageHelpers';
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  ChevronRight,
  BookOpen,
  Building2,
  Users,
  Award,
  FileCheck,
  Search
} from 'lucide-react';
import { PageId } from '../types';

interface LanguageDetailPageProps {
  onNavigate?: (page: PageId, detailId?: string) => void;
}

export const LanguageDetailPage: React.FC<LanguageDetailPageProps> = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  const language = slug ? getLanguageBySlug(slug) : COMPREHENSIVE_LANGUAGES[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!language) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-white text-[#141414] flex items-center justify-center">
        <div className="text-center max-w-md px-4 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E4032E] flex items-center justify-center mx-auto">
            <Globe className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black font-['Space_Grotesk'] text-[#141414]">
            Language Not Found
          </h2>
          <p className="text-slate-600 text-sm">
            We support 1,000+ languages and combinations. The specific dialect profile you requested is not listed or has moved.
          </p>
          <div className="pt-2">
            <Link
              to="/languages"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E4032E] text-white text-xs font-bold shadow-md hover:bg-[#c20227] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Explore All Languages</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const related = getRelatedLanguages(language.slug, 3);
  const scriptFontClass = getScriptFontClass(language.scriptType);

  return (
    <div className="min-h-screen bg-white text-[#141414] pt-24 pb-20 selection:bg-[#E4032E] selection:text-white">
      {/* Header Breadcrumbs */}
      <div className="bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-500">
              <Link to="/" className="hover:text-[#141414] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link to="/languages" className="hover:text-[#141414] transition-colors">Languages</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#E4032E] font-bold">{language.name}</span>
            </div>

            <Link
              to="/languages"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#E4032E] font-semibold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Languages</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-md bg-red-50 text-[#E4032E] text-xs font-black tracking-wider uppercase font-['Space_Grotesk']">
                ISO Code: {language.code}
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                Region: {language.region}
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                Script: {language.script}
              </span>
              {language.popularPair && (
                <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  Top Global Pair
                </span>
              )}
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
                  {language.name}
                </h1>
                <span
                  dir={language.direction || 'ltr'}
                  className={`text-2xl sm:text-3xl font-semibold text-[#E4032E] ${scriptFontClass}`}
                >
                  {language.nativeName}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-500 mt-1">
                {language.subRegion || language.region}
              </p>
            </div>

            <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
              {language.description}
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Speakers</div>
                <div className="text-xl sm:text-2xl font-black text-[#141414] font-['Space_Grotesk'] mt-0.5">
                  {language.speakers}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Accuracy SLA</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600 font-['Space_Grotesk'] mt-0.5">
                  {language.accuracyRate}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Linguist Pool</div>
                <div className="text-xl sm:text-2xl font-black text-[#E4032E] font-['Space_Grotesk'] mt-0.5">
                  100% Native
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Certification</div>
                <div className="text-xl sm:text-2xl font-black text-slate-800 font-['Space_Grotesk'] mt-0.5">
                  ISO 17100
                </div>
              </div>
            </div>
          </div>

          {/* Action / Quote Box */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-[#0A0C14] text-white border border-slate-800 shadow-xl space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E4032E]">
                ENTERPRISE LOCALIZATION
              </span>
              <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                Translate in {language.name}
              </h3>
              <p className="text-xs text-slate-400">
                Deploy ISO-certified native linguists and domain-trained neural MT models.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                to="/quote"
                className="w-full py-3 px-4 rounded-xl bg-[#E4032E] hover:bg-[#c20227] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_18px_rgba(228,3,46,0.4)] cursor-pointer"
              >
                <span>Instant {language.name} Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full py-2.5 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-white/10"
              >
                <span>Consult Language Specialist</span>
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>NDA & SOC-2 zero-storage security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Verified native dialect proofreaders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Automated CAT termbase synchronization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural & Linguistic Nuance Card */}
        <div className="mb-14 p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-[#E4032E] flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
                CULTURAL & LINGUISTIC PRECISION
              </span>
              <h3 className="text-xl font-bold text-[#141414] font-['Space_Grotesk']">
                Technical & Cultural Considerations for {language.name}
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed pl-0 sm:pl-13">
            {language.culturalNuance}
          </p>

          {/* Sample Translation Demonstration */}
          {language.samplePhrase && (
            <div className="mt-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Sample Precision Translation
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Source (English)</span>
                  <p className="text-xs text-slate-700 font-medium">{language.samplePhrase.original}</p>
                </div>
                <div className="p-3 bg-red-50/50 rounded-xl border border-red-100">
                  <span className="text-[10px] uppercase font-bold text-[#E4032E] block mb-1">
                    Target ({language.name} - Native Script)
                  </span>
                  <p
                    dir={language.direction || 'ltr'}
                    className={`text-sm text-[#141414] font-bold ${scriptFontClass}`}
                  >
                    {language.samplePhrase.translation}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Dialects & Primary Countries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Countries */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5">
              <Building2 className="w-5 h-5 text-[#E4032E]" />
              <h3 className="text-lg font-bold text-[#141414] font-['Space_Grotesk']">
                Primary Spoken Countries & Regions
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {language.countries.map((country) => (
                <span
                  key={country}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>

          {/* Dialects */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5">
              <Users className="w-5 h-5 text-[#E4032E]" />
              <h3 className="text-lg font-bold text-[#141414] font-['Space_Grotesk']">
                Supported Dialect & Regional Variants
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {(language.dialects || ['Standard Dialect', 'Formal Business Variant']).map((dia) => (
                <span
                  key={dia}
                  className="px-3 py-1.5 rounded-xl bg-red-50 text-[#E4032E] border border-red-100 text-xs font-semibold"
                >
                  {dia}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise Use Cases & Supported Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Enterprise Use Cases */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
                HIGH-STAKES APPLICATIONS
              </span>
              <h3 className="text-xl font-bold text-[#141414] font-['Space_Grotesk']">
                Enterprise Use Cases in {language.name}
              </h3>
            </div>

            <div className="space-y-3">
              {language.enterpriseUseCases.map((useCase) => (
                <div key={useCase} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E4032E] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Supported Services & Common Markets */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <h4 className="text-base font-bold text-[#141414] font-['Space_Grotesk'] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E4032E]" />
                Target Industry Sectors
              </h4>
              <div className="flex flex-wrap gap-2">
                {language.commonMarkets.map((mkt) => (
                  <span
                    key={mkt}
                    className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold"
                  >
                    {mkt}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <h4 className="text-base font-bold text-[#141414] font-['Space_Grotesk'] flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#E4032E]" />
                Supported Services
              </h4>
              <div className="flex flex-wrap gap-2">
                {language.supportedServices.map((srv) => (
                  <span
                    key={srv}
                    className="px-3 py-1 rounded-lg bg-red-50 text-[#E4032E] border border-red-100 text-xs font-semibold"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Languages */}
        {related.length > 0 && (
          <div className="mb-14 pt-10 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
                  GLOBAL NETWORK
                </span>
                <h3 className="text-xl font-bold text-[#141414] font-['Space_Grotesk'] mt-1">
                  Explore Related {language.region} Languages
                </h3>
              </div>
              <Link
                to="/languages"
                className="text-xs font-bold text-[#E4032E] hover:underline flex items-center gap-1"
              >
                <span>View All Languages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rel) => {
                const relScriptClass = getScriptFontClass(rel.scriptType);
                return (
                  <Link
                    key={rel.slug}
                    to={`/languages/${rel.slug}`}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all group space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#E4032E] bg-red-50 px-2 py-0.5 rounded">
                        {rel.code}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase">
                        {rel.region}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-[#141414] font-['Space_Grotesk'] group-hover:text-[#E4032E] transition-colors">
                        {rel.name}
                      </h4>
                      <span
                        dir={rel.direction || 'ltr'}
                        className={`text-xs text-slate-500 font-medium ${relScriptClass}`}
                      >
                        {rel.nativeName}
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span>{rel.speakers} speakers</span>
                      <span className="font-bold text-emerald-600">{rel.accuracyRate}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
