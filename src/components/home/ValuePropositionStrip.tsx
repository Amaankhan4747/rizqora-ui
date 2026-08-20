import React from 'react';
import { VALUE_PROPOSITIONS } from '../../data/mockData';
import { IconHelper } from '../common/IconHelper';

export const ValuePropositionStrip: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50/80 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            Built for Enterprise. Designed for Impact.
          </h2>
          <p className="text-sm text-slate-600">
            Seven core pillars powering trusted global communication for Fortune 500 enterprises.
          </p>
        </div>

        {/* 7 Compact Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {VALUE_PROPOSITIONS.map((prop) => (
            <div
              key={prop.id}
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-red-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-3 group"
            >
              <div className="w-9 h-9 rounded-xl bg-red-50 text-[#E4032E] flex items-center justify-center group-hover:bg-[#E4032E] group-hover:text-white transition-colors">
                <IconHelper name={prop.icon} size={18} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#141414] group-hover:text-[#E4032E] transition-colors leading-snug">
                  {prop.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
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
