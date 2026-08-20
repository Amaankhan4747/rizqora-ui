import React from 'react';
import { PageId } from '../../types';
import { ArrowRight, Star, TrendingUp, BookOpen, Quote } from 'lucide-react';

interface SocialProofTrioProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const SocialProofTrio: React.FC<SocialProofTrioProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            Trusted by Global Leaders Worldwide
          </h2>
          <p className="text-base text-slate-600">
            Real impact, measurable client ROI, and expert thought leadership.
          </p>
        </div>

        {/* 3 Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Client Stories */}
          <div
            onClick={() => onNavigate('case-studies')}
            className="bg-white p-7 rounded-3xl border border-slate-200/80 hover:border-red-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
                CLIENT STORIES
              </span>
              <h3 className="text-xl font-bold text-[#141414] group-hover:text-[#E4032E] transition-colors font-['Space_Grotesk']">
                Trusted by Global Leaders
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hear from multinational enterprises that achieved global expansion success with Rizqora Solutions.
              </p>

              {/* Supporting Graphic: Quote & Rating */}
              <div className="p-4 bg-red-50/60 rounded-2xl border border-red-100 space-y-2">
                <div className="flex items-center gap-1 text-[#E4032E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic">
                  "Rizqora's MTPE workflow allowed us to launch in 28 countries simultaneously with 99.4% accuracy."
                </p>
                <div className="text-[11px] font-bold text-slate-900">
                  — David Sterling, GlobalCloud Inc.
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#E4032E] group-hover:underline">
              <span>View Stories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Case Studies */}
          <div
            onClick={() => onNavigate('case-studies')}
            className="bg-white p-7 rounded-3xl border border-slate-200/80 hover:border-red-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
                CASE STUDIES
              </span>
              <h3 className="text-xl font-bold text-[#141414] group-hover:text-[#E4032E] transition-colors font-['Space_Grotesk']">
                Real Impact. Measurable Results.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Explore how we solve complex high-volume translation, localization, and medical compliance challenges.
              </p>

              {/* Supporting Graphic: Chart metric */}
              <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-3">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span>Localization Efficiency</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +320% ROI
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-[#E4032E] rounded-full" />
                </div>
                <div className="text-[10px] text-slate-400">
                  Avg 42% cost savings across B2B SaaS localization deployments.
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#E4032E] group-hover:underline">
              <span>View Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Latest Insights */}
          <div
            onClick={() => onNavigate('blog')}
            className="bg-white p-7 rounded-3xl border border-slate-200/80 hover:border-red-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
                LATEST INSIGHTS
              </span>
              <h3 className="text-xl font-bold text-[#141414] group-hover:text-[#E4032E] transition-colors font-['Space_Grotesk']">
                Knowledge for a Global World
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Expert insights, trends, research whitepapers, and strategies in AI localization and neural machine translation.
              </p>

              {/* Supporting Graphic: Blog preview */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#E4032E]">
                  <BookOpen className="w-3.5 h-3.5" /> FEATURED ARTICLE
                </div>
                <div className="text-xs font-bold text-[#141414] line-clamp-2">
                  The Future of Enterprise MTPE: How Neural Engines and Human Expertise Coexist
                </div>
                <div className="text-[10px] text-slate-500 pt-1">
                  6 min read • By Elena Rostova, CTO
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#E4032E] group-hover:underline">
              <span>Explore Insights</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
