import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES_DATA } from '../../data/mockData';
import { IconHelper } from '../common/IconHelper';
import { ArrowRight, Globe, Layers, MapPin } from 'lucide-react';
import { PageId } from '../../types';

interface IndustriesLanguageSplitProps {
  onNavigate?: (page: PageId, detailId?: string) => void;
}

export const IndustriesLanguageSplit: React.FC<IndustriesLanguageSplitProps> = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Half: Industry Expertise */}
          <div className="space-y-6 flex flex-col justify-between p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
                INDUSTRIES WE SERVE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk'] mt-2">
                Industry Expertise. Global Impact.
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Solutions built for specialized industries where communication accuracy, security, and compliance matter most.
              </p>

              {/* Icon Grid of 8 Served Industries */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                {INDUSTRIES_DATA.map((ind) => (
                  <Link
                    key={ind.id}
                    to={`/industries/${ind.id}`}
                    className="p-3.5 bg-white rounded-xl border border-slate-200/70 hover:border-red-200 hover:shadow-md transition-all flex flex-col items-center text-center gap-2 group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-[#E4032E] flex items-center justify-center group-hover:bg-[#E4032E] group-hover:text-white transition-colors">
                      <IconHelper name={ind.iconName} size={18} />
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-[#E4032E]">
                      {ind.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#E4032E] hover:underline pt-4 border-t border-slate-200/60"
            >
              <span>Explore Industries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Half: Language Coverage */}
          <div className="space-y-6 flex flex-col justify-between p-8 rounded-3xl bg-[#0A0A0A] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#E4032E_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
                GLOBAL LANGUAGE COVERAGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
                Every Language. Every Market.
              </h2>
              <p className="text-sm text-slate-300">
                1,000+ languages supported with cultural precision, native dialect adaptation, and automated localization infrastructure.
              </p>

              <div className="my-6 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#E4032E]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Regional Dialect Coverage
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-red-500/10 text-[#E4032E] text-[10px] font-bold border border-red-500/20">
                    100% Native Verification
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <div className="text-slate-400 font-semibold">EMEA</div>
                    <div className="text-lg font-bold text-white font-['Space_Grotesk']">450+ Languages</div>
                    <div className="text-[10px] text-slate-500 mt-1">Arabic, European, African Dialects</div>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <div className="text-slate-400 font-semibold">APAC</div>
                    <div className="text-lg font-bold text-white font-['Space_Grotesk']">380+ Languages</div>
                    <div className="text-[10px] text-slate-500 mt-1">CJK, Indic, SEA Languages</div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/languages"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#E4032E] hover:underline pt-4 border-t border-slate-800 relative z-10"
            >
              <span>Explore All 1,000+ Language Pairs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
