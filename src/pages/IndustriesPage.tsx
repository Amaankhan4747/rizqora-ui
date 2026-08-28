import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageId } from '../types';
import { INDUSTRIES_DATA } from '../data/mockData';
import { IconHelper } from '../components/common/IconHelper';
import { ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

interface IndustriesPageProps {
  onNavigate?: (page: PageId, detailId?: string) => void;
  selectedDetailId?: string;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  selectedDetailId,
}) => {
  const [activeTab, setActiveTab] = useState(selectedDetailId || INDUSTRIES_DATA[0].id);
  const activeIndustry = INDUSTRIES_DATA.find((i) => i.id === activeTab) || INDUSTRIES_DATA[0];

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            SECTOR-SPECIFIC EXPERTISE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            Tailored Language Solutions for Every Industry
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Deep domain expertise, specialized compliance workflows, and domain-trained MT engines engineered for your specific market requirements.
          </p>
        </div>
      </section>

      {/* Interactive Industry Tabs */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {INDUSTRIES_DATA.map((ind) => (
            <Link
              key={ind.id}
              to={`/industries/${ind.id}`}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === ind.id
                  ? 'bg-[#E4032E] text-white shadow-md shadow-red-500/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <IconHelper name={ind.iconName} size={16} />
              <span>{ind.name}</span>
            </Link>
          ))}
        </div>

        {/* Industry Active Feature Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#E4032E] flex items-center justify-center border border-white/20">
                <IconHelper name={activeIndustry.iconName} size={24} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
                  INDUSTRY BLUEPRINT
                </span>
                <h2 className="text-3xl font-extrabold text-white font-['Space_Grotesk']">
                  {activeIndustry.name}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed text-base">
              {activeIndustry.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Key Challenges */}
              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  Key Industry Challenges
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeIndustry.keyChallenges.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rizqoraa Solutions */}
              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  Rizqoraa Specialized Solutions
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeIndustry.solutionHighlights.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to={`/industries/${activeIndustry.id}`}
                className="bg-[#E4032E] hover:bg-[#c30226] text-white px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-red-600/30 transition-all"
              >
                <span>View Dedicated {activeIndustry.name} Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Stat Callout Box */}
          <div className="lg:col-span-5 relative z-10 flex justify-center">
            <div className="p-8 bg-slate-950 rounded-3xl border border-slate-800 text-center space-y-3 max-w-sm w-full">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                PROVEN INDUSTRY IMPACT
              </span>
              <div className="text-6xl font-black text-[#E4032E] font-['Space_Grotesk'] tracking-tight">
                {activeIndustry.stat}
              </div>
              <div className="text-sm font-bold text-white">
                {activeIndustry.statLabel}
              </div>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-800">
                Verified benchmark across Rizqoraa client implementations.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
