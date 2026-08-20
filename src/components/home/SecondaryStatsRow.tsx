import React from 'react';

export const SecondaryStatsRow: React.FC = () => {
  const stats = [
    { num: '20K+', label: 'Projects Completed' },
    { num: '500M+', label: 'Words Translated Daily' },
    { num: '1,500+', label: 'Global Clients' },
    { num: '200+', label: 'Countries Served' },
    { num: '1,000+', label: 'Languages Supported' },
    { num: '98.7%', label: 'Average AI Accuracy' },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-[#E4032E] font-['Space_Grotesk'] tracking-tight">
                {item.num}
              </span>
              <span className="text-xs font-semibold text-slate-600 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
