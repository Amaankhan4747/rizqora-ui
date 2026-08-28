import React from 'react';
import { motion } from 'motion/react';
import { Globe2, Languages, CheckCircle2, Cpu, TrendingUp, Sparkles, ShieldCheck, Clock } from 'lucide-react';

interface StatCardData {
  id: string;
  badge: string;
  value: string;
  label: string;
  subtext: string;
  icon: React.ElementType;
  chartType?: 'sparkline' | 'barchart' | 'ring' | 'dots';
}

const STAT_ITEMS: StatCardData[] = [
  {
    id: 'throughput',
    badge: 'Daily Throughput',
    value: '5K+',
    label: 'Words Processed Daily',
    subtext: 'Real-Time Enterprise Translation Engine',
    icon: TrendingUp,
    chartType: 'sparkline',
  },
  {
    id: 'support',
    badge: 'Continuous SLA',
    value: '24/7/365',
    label: 'Global PM Support',
    subtext: 'Sub-15 Min Average Response Time',
    icon: Clock,
    chartType: 'ring',
  },
  {
    id: 'security',
    badge: 'Enterprise Compliance',
    value: 'ISO 17100',
    label: 'Certified Localization',
    subtext: 'GDPR & SOC2 Type II Compliant',
    icon: ShieldCheck,
    chartType: 'dots',
  },
  {
    id: 'sla',
    badge: 'Reliability Rate',
    value: '99.9%',
    label: 'On-Time Delivery SLA',
    subtext: 'Guaranteed Strict Deadline Compliance',
    icon: CheckCircle2,
    chartType: 'barchart',
  },
  {
    id: 'clients',
    badge: 'Enterprise Trust',
    value: '250+',
    label: 'Global Enterprise Clients',
    subtext: 'Fortune 50 & Global Brands',
    icon: Globe2,
    chartType: 'ring',
  },
  {
    id: 'speed',
    badge: 'Rapid Turnaround',
    value: '< 15 Mins',
    label: 'Fastest Initial Response',
    subtext: 'Instant Automated AI Routing',
    icon: Cpu,
    chartType: 'sparkline',
  },
];

export const FloatingStatsMarquee: React.FC = () => {
  // Duplicate list twice for seamless loop
  const marqueeCards = [...STAT_ITEMS, ...STAT_ITEMS];

  return (
    <div className="relative w-full py-8 overflow-hidden bg-gradient-to-r from-slate-900 via-[#0E121B] to-slate-900 border-y border-red-900/20 shadow-2xl">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-full bg-[#E4032E]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-full bg-red-600/10 blur-3xl pointer-events-none" />

      {/* Edge Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0E121B] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0E121B] to-transparent z-20 pointer-events-none" />

      {/* Sliding Marquee Track */}
      <div className="flex w-max">
        <motion.div
          className="flex items-center gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 32,
            repeat: Infinity,
          }}
        >
          {marqueeCards.map((item, idx) => {
            const IconComp = item.icon;
            // Staggered Y float effect for organic floating look
            const floatDuration = 3.5 + (idx % 3) * 0.8;
            const floatDelay = (idx % 4) * 0.5;

            return (
              <motion.div
                key={`${item.id}-${idx}`}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: floatDuration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: floatDelay,
                }}
                className="group relative w-72 sm:w-80 shrink-0 p-4 rounded-2xl bg-white/10 dark:bg-slate-900/70 backdrop-blur-xl border border-white/15 hover:border-[#E4032E]/60 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(228,3,46,0.35)] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Red top border highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E4032E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center justify-between mb-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-bold text-red-400 uppercase tracking-wider">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>{item.badge}</span>
                  </div>

                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-500/20 to-red-900/30 text-red-400 flex items-center justify-center border border-red-500/20 group-hover:scale-110 group-hover:bg-[#E4032E] group-hover:text-white transition-all duration-300">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                {/* Main Stat Value + Graphic */}
                <div className="flex items-baseline justify-between mt-1">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-['Space_Grotesk'] group-hover:text-red-400 transition-colors">
                      {item.value}
                    </div>
                    <div className="text-xs font-bold text-slate-200 mt-0.5">
                      {item.label}
                    </div>
                  </div>

                  {/* Micro Visual Graphics */}
                  {item.chartType === 'sparkline' && (
                    <svg className="w-16 h-8 text-[#E4032E]" viewBox="0 0 60 30" fill="none">
                      <path
                        d="M2 24 L14 18 L26 22 L38 10 L50 14 L58 4"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="58" cy="4" r="3" fill="#E4032E" className="animate-ping" />
                    </svg>
                  )}

                  {item.chartType === 'barchart' && (
                    <div className="flex items-end gap-1 h-7">
                      <div className="w-1.5 bg-red-900/50 rounded-t h-3 group-hover:h-4 transition-all" />
                      <div className="w-1.5 bg-red-600/70 rounded-t h-5 group-hover:h-6 transition-all" />
                      <div className="w-1.5 bg-[#E4032E] rounded-t h-7" />
                    </div>
                  )}

                  {item.chartType === 'ring' && (
                    <div className="relative w-7 h-7 flex items-center justify-center">
                      <svg className="w-7 h-7 -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="4"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E4032E"
                          strokeWidth="4"
                          strokeDasharray="85, 100"
                        />
                      </svg>
                    </div>
                  )}

                  {item.chartType === 'dots' && (
                    <div className="grid grid-cols-3 gap-1 w-6 h-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E4032E]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E4032E]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    </div>
                  )}
                </div>

                <div className="mt-2 text-[11px] text-slate-400 border-t border-white/10 pt-1.5 flex items-center justify-between">
                  <span>{item.subtext}</span>
                  <span className="text-red-400 font-bold group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
