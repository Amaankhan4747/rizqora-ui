import React from 'react';
import { VALUE_PROPOSITIONS } from '../../data/mockData';
import { IconHelper } from '../common/IconHelper';

export const ValuePropositionStrip: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-slate-50/80 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12 space-y-1.5 sm:space-y-2">
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            Built for Enterprise. Designed for Impact.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Seven core pillars powering trusted global communication for Fortune 500 enterprises.
          </p>
        </div>

        {/* 7 Compact Value Props: 3 columns per row on mobile (graceful 2-col on narrow <360px), 7-col on desktop */}
        <div className="grid grid-cols-2 min-[360px]:grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-4">
          {VALUE_PROPOSITIONS.map((prop) => (
            <div
              key={prop.id}
              className="p-2.5 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 hover:border-red-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-1.5 sm:space-y-3 group"
            >
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-red-50 text-[#E4032E] flex items-center justify-center group-hover:bg-[#E4032E] group-hover:text-white transition-colors shrink-0">
                <IconHelper name={prop.icon} size={15} />
              </div>
              <div>
                <h3 className="text-[11px] sm:text-xs font-bold text-[#141414] group-hover:text-[#E4032E] transition-colors leading-tight sm:leading-snug">
                  {prop.title}
                </h3>
                <p className="text-[9.5px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 leading-tight sm:leading-normal line-clamp-3 sm:line-clamp-none">
                  {prop.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
