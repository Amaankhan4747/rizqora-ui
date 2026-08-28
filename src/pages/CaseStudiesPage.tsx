import React, { useState } from 'react';
import { PageId } from '../types';
import { CASE_STUDIES } from '../data/mockData';
import { Award, ArrowRight, Quote, CheckCircle2, TrendingUp } from 'lucide-react';

interface CaseStudiesPageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigate }) => {
  const [activeCS, setActiveCS] = useState(CASE_STUDIES[0]);

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            REAL IMPACT & MEASURABLE RESULTS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            Enterprise Client Success Stories
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Discover how leading global enterprises scale faster, reduce localization overhead by up to 45%, and maintain 99%+ quality accuracy with Rizqoraa Solutions.
          </p>
        </div>
      </section>

      {/* Main Case Studies Feature View */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Selector Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2">
              Select Case Study
            </h3>
            {CASE_STUDIES.map((cs) => (
              <button
                key={cs.id}
                onClick={() => setActiveCS(cs)}
                className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer ${
                  activeCS.id === cs.id
                    ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-xl'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="text-xs font-extrabold text-[#E4032E] uppercase">
                  {cs.client}
                </div>
                <h4 className="text-sm font-bold font-['Space_Grotesk'] mt-1 line-clamp-2">
                  {cs.title}
                </h4>
                <div className="text-[11px] opacity-70 mt-2 font-medium">
                  {cs.industry}
                </div>
              </button>
            ))}
          </div>

          {/* Right Detailed Case Breakdown */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E4032E] text-xs font-bold border border-red-100">
                <Award className="w-3.5 h-3.5" /> {activeCS.industry}
              </div>
              <h2 className="text-3xl font-extrabold text-[#141414] font-['Space_Grotesk']">
                {activeCS.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {activeCS.summary}
              </p>
            </div>

            {/* Results Callout Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeCS.results.map((res, i) => (
                <div key={i} className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 text-center">
                  <div className="text-3xl font-black text-[#E4032E] font-['Space_Grotesk']">
                    {res.metric}
                  </div>
                  <div className="text-xs font-bold text-slate-300 mt-1">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
                  The Challenge
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeCS.challenge}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Rizqoraa Solution
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeCS.solution}
                </p>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 relative">
              <Quote className="w-6 h-6 text-[#E4032E]/30" />
              <p className="text-xs sm:text-sm text-slate-800 italic font-medium leading-relaxed">
                "{activeCS.testimonial.quote}"
              </p>
              <div className="text-xs font-bold text-[#141414]">
                — {activeCS.testimonial.author}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => onNavigate('quote')}
                className="bg-[#E4032E] hover:bg-[#c30226] text-white px-6 py-3 rounded-xl text-xs font-bold shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Achieve Similar Results — Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
