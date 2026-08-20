import React from 'react';
import { PageId } from '../../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCtaBandProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const FinalCtaBand: React.FC<FinalCtaBandProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Animated Line Art Grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E4032E_1.5px,transparent_1.5px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-[#E4032E]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ready to Scale Globally?</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-tight">
          Let’s Build Something <br />
          <span className="text-[#E4032E]">Extraordinary Together.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Transform your international market reach with enterprise-grade language technology, AI localization, and 24/7 global support.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('quote')}
            className="bg-[#E4032E] hover:bg-[#c30226] text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-200 flex items-center gap-3 cursor-pointer group"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 px-7 py-4 rounded-xl text-base font-semibold transition-all duration-200 cursor-pointer"
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
};
