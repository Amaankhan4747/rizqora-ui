import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../../types';
import { Globe3D } from '../common/Globe3D';
import { ArrowRight, ChevronDown, Sparkles, TrendingUp, Globe2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FloatingStatsMarquee } from './FloatingStatsMarquee';

interface HeroSectionProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const brandLogos = [
    { name: 'Google', label: 'Google', color: 'hover:text-blue-600' },
    { name: 'Microsoft', label: 'Microsoft', color: 'hover:text-cyan-600' },
    { name: 'Airbnb', label: 'airbnb', color: 'hover:text-[#FF5A5F]' },
    { name: 'Netflix', label: 'NETFLIX', color: 'hover:text-[#E50914]' },
    { name: 'Uber', label: 'Uber', color: 'hover:text-[#000000]' },
    { name: 'HP', label: 'hp', color: 'hover:text-sky-700' },
    { name: 'Samsung', label: 'SAMSUNG', color: 'hover:text-blue-700' },
    { name: 'Amazon', label: 'amazon', color: 'hover:text-amber-500' },
    { name: 'Spotify', label: 'Spotify', color: 'hover:text-emerald-500' },
    { name: 'Salesforce', label: 'salesforce', color: 'hover:text-sky-500' },
  ];

  return (
    <div className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Lighting Halos */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-[#E4032E]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Hero Container */}
      <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 lg:space-y-7 text-left z-10">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-[#141414] tracking-tight leading-[1.12] sm:leading-[1.08] font-['Space_Grotesk']"
            >
              Connecting Every Language.{' '}
              <span className="block text-[#E4032E] mt-1">
                Powering Global Business.
              </span>
            </motion.h1>

            {/* Sub-line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal max-w-xl"
            >
              Helping businesses communicate globally through Translation, Localization, Machine Translation Post-Editing (MTPE), Linguistic QA, AI Data Annotation, and Enterprise Content Solutions.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-row items-center gap-2.5 sm:gap-4 pt-1 w-full sm:w-auto"
            >
              <button
                onClick={() => onNavigate('quote')}
                className="flex-1 sm:flex-initial bg-[#E4032E] hover:bg-[#c30226] text-white px-3 sm:px-8 py-2.5 sm:py-4 rounded-xl font-bold text-xs sm:text-base shadow-md sm:shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2.5 group cursor-pointer min-h-[44px] whitespace-nowrap"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="flex-1 sm:flex-initial bg-white hover:bg-slate-50 text-[#141414] border border-slate-300 hover:border-slate-400 px-3 sm:px-7 py-2.5 sm:py-4 rounded-xl font-bold text-xs sm:text-base transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-xs sm:shadow-sm min-h-[44px] whitespace-nowrap"
              >
                <span>Explore Services</span>
                <span className="text-[#E4032E] font-extrabold text-xs sm:text-base">+</span>
              </button>
            </motion.div>

            {/* Trusted Brand Logos Strip with Infinite Marquee - Desktop Only (Shown below globe on mobile) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:block pt-8 border-t border-slate-200/80"
            >
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Trusted by 210+ global brands worldwide
              </p>

              {/* Infinite Logo Marquee Track with Soft Edge Fades */}
              <div className="relative w-full overflow-hidden py-2 group/marquee">
                {/* Edge Gradient Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

                <div className="flex w-max overflow-hidden">
                  <div className="flex items-center gap-10 sm:gap-14 animate-marquee group-hover/marquee:[animation-play-state:paused] pointer-events-auto">
                    {[...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos].map((brand, idx) => (
                      <div
                        key={`${brand.name}-${idx}`}
                        className="flex items-center gap-2 cursor-pointer opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_4px_12px_rgba(228,3,46,0.3)] shrink-0"
                      >
                        <span
                          className={`font-black text-lg sm:text-xl tracking-tight font-['Space_Grotesk'] ${brand.color}`}
                        >
                          {brand.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Visual (3D Globe + Floating Stat Cards) - Visually connected right with primary content */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[310px] xs:min-h-[350px] sm:min-h-[480px] lg:min-h-[640px] xl:min-h-[680px] overflow-visible mt-2 sm:mt-4 lg:mt-0">
            {/* Radial Red Ambient Glow behind Globe */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/15 via-red-500/10 to-transparent rounded-full blur-3xl pointer-events-none scale-125" />

            {/* Realistic Dark 3D Globe Media Visual - Scaled for mobile and desktop */}
            <Globe3D 
              mediaSrc="/assets/gifs/globe.gif" 
              className="scale-[0.88] xs:scale-[0.95] sm:scale-105 md:scale-110 lg:scale-[1.20] xl:scale-[1.22] transition-transform duration-300"
            />

            {/* Floating Stat Cards Surrounding Globe (Preserved exact content & animation with responsive alignment) */}
            
            {/* Card 1: Top Left - AI Accuracy Score */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 sm:-top-4 left-0 sm:left-2 lg:-left-3 bg-white/95 backdrop-blur-xl p-2.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.07)] border border-white/90 hover:border-red-400 hover:shadow-[0_25px_60px_rgba(228,3,46,0.22)] w-36 xs:w-44 sm:w-52 z-20 transition-all duration-300 group cursor-pointer origin-top-left scale-[0.72] xs:scale-[0.82] sm:scale-100"
            >
              <div className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5 sm:mb-1">
               LINGUISTIC TECHNOLOGY
              </div>

              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 mb-1.5 sm:mb-2 line-clamp-1 sm:line-clamp-none">
                QUALITY-ASSURED LANGUAGE SOLUTIONS
              </div>
              {/* Red Sparkline Graph */}
              <svg className="w-full h-6 sm:h-8 text-[#E4032E]" viewBox="0 0 100 30" fill="none">
                <path
                  d="M2 22 C 20 28, 30 15, 45 18 C 60 22, 70 8, 85 12 C 92 14, 96 4, 98 4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* Card 2: Top Right - Global Reach */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-0 sm:top-2 right-0 sm:right-2 lg:-right-3 bg-white/95 backdrop-blur-xl p-2.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.07)] border border-white/90 hover:border-red-400 hover:shadow-[0_25px_60px_rgba(228,3,46,0.22)] flex items-center justify-between gap-2 sm:gap-3 z-20 transition-all duration-300 group cursor-pointer origin-top-right scale-[0.72] xs:scale-[0.82] sm:scale-100"
            >
              <div>
                <div className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">
                  Global Reach
                </div>
                <div className="text-xl sm:text-3xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight">
                  20+
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-500">
                  Countries
                </div>
              </div>
              {/* Mini Red Globe Icon */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500/10 text-[#E4032E] flex items-center justify-center border border-red-500/20 group-hover:scale-110 group-hover:bg-[#E4032E] group-hover:text-white transition-all">
                <Globe2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </motion.div>

            {/* Card 3: Bottom Left - Language Coverage */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute bottom-2 sm:bottom-6 left-0 sm:left-4 lg:-left-2 bg-white/95 backdrop-blur-xl p-2.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.07)] border border-white/90 hover:border-red-400 hover:shadow-[0_25px_60px_rgba(228,3,46,0.22)] flex items-center justify-between gap-2.5 sm:gap-4 z-20 transition-all duration-300 group cursor-pointer origin-bottom-left scale-[0.72] xs:scale-[0.82] sm:scale-100"
            >
              <div>
                <div className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">
                  Language Coverage
                </div>
                <div className="text-xl sm:text-3xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight">
                  150+
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-500">
                  Languages
                </div>
              </div>
              {/* Dot Network Graphic */}
              <div className="grid grid-cols-2 gap-1 w-6 h-6 sm:w-7 sm:h-7">
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#E4032E]" />
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-300" />
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-300" />
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#E4032E]" />
              </div>
            </motion.div>

            {/* Card 4: Bottom Right - Projects Delivered */}
            <motion.div
              animate={{ y: [0, -11, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="absolute -bottom-1 sm:bottom-2 right-0 sm:right-4 lg:-right-2 bg-white/95 backdrop-blur-xl p-2.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.07)] border border-white/90 hover:border-red-400 hover:shadow-[0_25px_60px_rgba(228,3,46,0.22)] flex items-center justify-between gap-2.5 sm:gap-4 z-20 transition-all duration-300 group cursor-pointer origin-bottom-right scale-[0.72] xs:scale-[0.82] sm:scale-100"
            >
              <div>
                <div className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">
                  Projects Delivered
                </div>
                <div className="text-xl sm:text-3xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight">
                  200+
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-500">
                  Successful Projects
                </div>
              </div>
              {/* Mini Bar Chart Graphic */}
              <div className="flex items-end gap-1 h-6 sm:h-7">
                <div className="w-1.5 sm:w-2 bg-red-200 rounded-t h-2.5 sm:h-3 group-hover:h-4 transition-all" />
                <div className="w-1.5 sm:w-2 bg-red-400 rounded-t h-4 sm:h-5 group-hover:h-6 transition-all" />
                <div className="w-1.5 sm:w-2 bg-[#E4032E] rounded-t h-6 sm:h-7" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trusted Brand Logos Strip - Mobile Position (under globe) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="block lg:hidden mt-8 pt-6 border-t border-slate-200/80"
        >
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 text-center sm:text-left">
            Trusted by 210+ global brands worldwide
          </p>

          <div className="relative w-full overflow-hidden py-2 group/marquee">
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

            <div className="flex w-max overflow-hidden">
              <div className="flex items-center gap-8 sm:gap-14 animate-marquee group-hover/marquee:[animation-play-state:paused] pointer-events-auto">
                {[...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos].map((brand, idx) => (
                  <div
                    key={`mobile-${brand.name}-${idx}`}
                    className="flex items-center gap-2 cursor-pointer opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 transform hover:scale-110 shrink-0"
                  >
                    <span
                      className={`font-black text-base sm:text-xl tracking-tight font-['Space_Grotesk'] ${brand.color}`}
                    >
                      {brand.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              const el = document.getElementById('floating-marquee');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-1 text-xs text-slate-400 hover:text-[#E4032E] transition-colors cursor-pointer group"
          >
            <span className="uppercase tracking-widest text-[10px] font-bold">
              Scroll to explore
            </span>
            <ChevronDown className="w-4 h-4 text-[#E4032E] group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Infinite Continuous Sliding Floating Stats Marquee */}
      <div id="floating-marquee">
        <FloatingStatsMarquee />
      </div>
    </div>
  );
};
