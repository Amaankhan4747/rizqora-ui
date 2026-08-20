import React from 'react';
import { Globe2, Languages, CheckCircle2, Cpu, FileText, Clock } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      numeral: '200+',
      label: 'Countries',
      icon: Globe2,
    },
    {
      numeral: '1,000+',
      label: 'Languages',
      icon: Languages,
    },
    {
      numeral: '20K+',
      label: 'Projects Completed',
      icon: CheckCircle2,
    },
    {
      numeral: '98.7%',
      label: 'AI Accuracy',
      icon: Cpu,
    },
    {
      numeral: '500M+',
      label: 'Words Translated Daily',
      icon: FileText,
    },
    {
      numeral: '24/7',
      label: 'Global Support',
      icon: Clock,
    },
  ];

  return (
    <section id="stats-bar" className="bg-[#0A0A0A] text-white py-8 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-slate-800/60">
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-3 ${
                  index !== 0 ? 'pt-4 md:pt-3' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <IconComponent className="w-4 h-4 text-[#E4032E]" />
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-white font-['Space_Grotesk']">
                    {item.numeral}
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
