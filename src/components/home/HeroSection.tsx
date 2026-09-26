import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../../types';
import { Globe3D } from '../common/Globe3D';
import { ArrowRight, ChevronDown, Sparkles, TrendingUp, Globe2, ShieldCheck, CheckCircle2, Layers, Languages, BarChart3 } from 'lucide-react';
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
      <section className="relative pt-24 xs:pt-28 sm:pt-32 lg:pt-32 pb-10 sm:pb-16 lg:pb-24 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 overflow-x-clip">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 lg:space-y-7 text-left z-10 relative">
            
            {/* Top Row on Mobile: Pill Badge + Side Note (Exact match to reference) */}
            <div className="flex items-start justify-between gap-2 pt-1 sm:pt-0">
              {/* Badge: GLOBAL COMMUNICATION PARTNER */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50/80 border border-red-200/80 text-[10px] sm:text-xs font-black tracking-wide text-[#E4032E] uppercase shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E4032E] shrink-0" />
                <span>Global Communication Partner</span>
              </motion.div>

              {/* Decorative side accent on mobile per reference */}
              <div className="lg:hidden text-right pl-2 border-r-2 border-slate-300 pr-1 select-none">
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-[1.15]">
                  People<br />Technology<br />Culture<br />Without Borders
                </p>
              </div>
            </div>

            {/* Main Headline with Side Note Accent */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[34px] xs:text-[38px] sm:text-5xl lg:text-6xl font-black text-[#141414] tracking-tight leading-[1.08] sm:leading-[1.08] font-['Space_Grotesk']"
              >
                Connecting Every Language.{' '}
                <span className="block text-[#E4032E] mt-0.5 sm:mt-1">
                  Powering Global Business.
                </span>
              </motion.h1>

              {/* Decorative "Bridging People Businesses Cultures" & cursive accent shown on mobile right side */}
              <div className="lg:hidden absolute top-1/2 -translate-y-1/2 right-0 hidden xs:flex flex-col items-end gap-1 pointer-events-none select-none pr-0.5">
                <div className="text-right border-r-2 border-red-300/80 pr-1.5">
                  <p className="text-[7.5px] font-bold text-slate-400 uppercase tracking-widest leading-[1.2]">
                    Bridging<br />People<br />Businesses<br />Cultures
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-line + "A More Connected World" cursive script accent */}
            <div className="relative">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[13px] sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal max-w-xl pr-0 xs:pr-24 sm:pr-0"
              >
                Helping businesses communicate globally through Translation, Localization, Machine Translation Post-Editing (MTPE), Linguistic QA, AI Data Annotation, and Enterprise Content Solutions.
              </motion.p>

              {/* Cursive script "A More Connected World" per reference */}
              <div className="lg:hidden absolute right-0 bottom-0 pointer-events-none select-none text-right hidden xs:block">
                <span className="font-['Caveat',cursive] text-[20px] font-bold text-[#E4032E] leading-tight block rotate-[-4deg]">
                  A More
                </span>
                <span className="font-['Caveat',cursive] text-[20px] font-bold text-slate-500 leading-none block rotate-[-4deg]">
                  Connected World
                </span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-row items-center gap-2.5 sm:gap-4 pt-1 w-full sm:w-auto"
            >
              <button
                onClick={() => onNavigate('quote')}
                className="flex-1 sm:flex-initial bg-[#E4032E] hover:bg-[#c30226] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-base shadow-md sm:shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2.5 group cursor-pointer min-h-[44px] whitespace-nowrap"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="flex-1 sm:flex-initial bg-white hover:bg-slate-50 text-[#141414] border border-slate-300 hover:border-slate-400 px-3 sm:px-7 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-base transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-xs sm:shadow-sm min-h-[44px] whitespace-nowrap"
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

          {/* Right Hero Visual: 
              - Mobile View: Clean 4-corner balanced card layout centered around the uploaded high-tech red orbital globe image exactly per reference design
              - Desktop View (lg+): Preserves exact current 3D Globe + interactive floating cards
          */}
          <div className="lg:col-span-6 relative mt-4 sm:mt-6 lg:mt-0">
            
            {/* MOBILE ONLY (hidden lg:block) - Matches Reference Image exactly */}
            <div className="block lg:hidden relative w-full max-w-[420px] mx-auto py-2">
              {/* Soft radial background glow behind globe */}
              <div className="absolute inset-0 bg-radial from-red-500/12 via-red-500/5 to-transparent rounded-full blur-2xl pointer-events-none scale-110" />

              {/* Central Glowing Red Orbital Globe (Uploaded asset with circular orbital radar rings & nodes) */}
              <div className="relative w-full aspect-square max-w-[340px] xs:max-w-[360px] mx-auto flex items-center justify-center">
                <img
                  src="/assets/images/hero-red-globe-orbit.png"
                  alt="Rizqoraa Global Network Earth"
                  className="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_12px_36px_rgba(228,3,46,0.28)]"
                  loading="eager"
                  decoding="async"
                />

                {/* Card 1: Top-Left - LINGUISTIC TECHNOLOGY */}
                <div className="absolute -top-1 -left-1 xs:left-0 bg-white/95 backdrop-blur-md p-2.5 xs:p-3 rounded-2xl shadow-[0_10px_28px_rgba(0,0,0,0.08)] border border-slate-100/90 w-[140px] xs:w-[155px] z-20 text-left transition-all">
                  <div className="w-6 h-6 rounded-lg bg-red-50 text-[#E4032E] flex items-center justify-center mb-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#E4032E]" />
                  </div>
                  <div className="text-[8.5px] xs:text-[9.5px] font-extrabold uppercase tracking-tight text-[#141414] leading-tight">
                    Linguistic Technology
                  </div>
                  <div className="text-[7.5px] xs:text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 truncate">
                    Quality-Assured...
                  </div>
                  <div className="w-6 h-0.5 rounded-full bg-[#E4032E]" />
                </div>

                {/* Card 2: Top-Right - GLOBAL REACH 20+ Countries */}
                <div className="absolute -top-1 -right-1 xs:right-0 bg-white/95 backdrop-blur-md p-2.5 xs:p-3 rounded-2xl shadow-[0_10px_28px_rgba(0,0,0,0.08)] border border-slate-100/90 w-[130px] xs:w-[145px] z-20 text-left transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <Globe2 className="w-4 h-4 text-[#E4032E]" />
                  </div>
                  <div className="text-[8px] xs:text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
                    Global Reach
                  </div>
                  <div className="text-xl xs:text-2xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight leading-none my-0.5">
                    20+
                  </div>
                  <div className="text-[9px] xs:text-[10px] font-semibold text-slate-500 mb-1.5">
                    Countries
                  </div>
                  <div className="w-6 h-0.5 rounded-full bg-[#E4032E]" />
                </div>

                {/* Card 3: Bottom-Left - LANGUAGE COVERAGE 150+ Languages */}
                <div className="absolute -bottom-1 -left-1 xs:left-0 bg-white/95 backdrop-blur-md p-2.5 xs:p-3 rounded-2xl shadow-[0_10px_28px_rgba(0,0,0,0.08)] border border-slate-100/90 w-[134px] xs:w-[150px] z-20 text-left transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <Languages className="w-4 h-4 text-[#E4032E]" />
                  </div>
                  <div className="text-[8px] xs:text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
                    Language Coverage
                  </div>
                  <div className="text-xl xs:text-2xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight leading-none my-0.5">
                    150+
                  </div>
                  <div className="text-[9px] xs:text-[10px] font-semibold text-slate-500 mb-1.5">
                    Languages
                  </div>
                  <div className="w-6 h-0.5 rounded-full bg-[#E4032E]" />
                </div>

                {/* Card 4: Bottom-Right - PROJECTS DELIVERED 200+ Projects */}
                <div className="absolute -bottom-1 -right-1 xs:right-0 bg-white/95 backdrop-blur-md p-2.5 xs:p-3 rounded-2xl shadow-[0_10px_28px_rgba(0,0,0,0.08)] border border-slate-100/90 w-[138px] xs:w-[152px] z-20 text-left transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <BarChart3 className="w-4 h-4 text-[#E4032E]" />
                  </div>
                  <div className="text-[8px] xs:text-[9px] font-extrabold uppercase tracking-wider text-slate-400">
                    Projects Delivered
                  </div>
                  <div className="text-xl xs:text-2xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight leading-none my-0.5">
                    200+
                  </div>
                  <div className="text-[9px] xs:text-[10px] font-semibold text-slate-500 mb-1.5 truncate">
                    Successful Projects
                  </div>
                  <div className="w-6 h-0.5 rounded-full bg-[#E4032E]" />
                </div>
              </div>
            </div>

            {/* DESKTOP ONLY (hidden lg:flex) - Preserves existing Desktop 3D Globe & floating animation cards */}
            <div className="hidden lg:flex relative items-center justify-center min-h-[640px] xl:min-h-[680px] overflow-visible">
              {/* Radial Red Ambient Glow behind Globe */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/15 via-red-500/10 to-transparent rounded-full blur-3xl pointer-events-none scale-125" />

              {/* Realistic Dark 3D Globe Media Visual */}
              <Globe3D 
                mediaSrc="/assets/gifs/globe.gif" 
                className="scale-[1.20] xl:scale-[1.22] transition-transform duration-300"
              />

              {/* Floating Stat Cards Surrounding Globe on Desktop */}
              
              {/* Card 1: Top Left - AI Accuracy Score */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-3 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.07)] border border-white/90 hover:border-red-400 hover:shadow-[0_25px_60px_rgba(228,3,46,0.22)] w-52 z-20 transition-all duration-300 group cursor-pointer origin-top-left"
              >
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                 LINGUISTIC TECHNOLOGY
                </div>

                <div className="text-xs font-semibold text-slate-500 mb-2">
                  QUALITY-ASSURED LANGUAGE SOLUTIONS
                </div>
                {/* Red Sparkline Graph */}
                <svg className="w-full h-8 text-[#E4032E]" viewBox="0 0 100 30" fill="none">
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
                className="absolute top-2 -right-3 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.07)] border border-white/90 hover:border-red-400 hover:shadow-[0_25px_60px_rgba(228,3,46,0.22)] flex items-center justify-between gap-3 z-20 transition-all duration-300 group cursor-pointer origin-top-right"
              >
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">
                    Global Reach
                  </div>
                  <div className="text-3xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight">
                    20+
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    Countries
                  </div>
                </div>
                {/* Mini Red Globe Icon */}
                <div className="w-10 h-10 rounded-full bg-red-500/10 text-[#E4032E] flex items-center justify-center border border-red-500/20 group-hover:scale-110 group-hover:bg-[#E4032E] group-hover:text-white transition-all">
                  <Globe2 className="w-5 h-5" />
                </div>
              </motion.div>

              {/* Card 3: Bottom Left - Language Coverage */}
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute bottom-6 -left-2 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.07)] border border-white/90 hover:border-red-400 hover:shadow-[0_25px_60px_rgba(228,3,46,0.22)] flex items-center justify-between gap-4 z-20 transition-all duration-300 group cursor-pointer origin-bottom-left"
              >
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">
                    Language Coverage
                  </div>
                  <div className="text-3xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight">
                    150+
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    Languages
                  </div>
                </div>
                {/* Dot Network Graphic */}
                <div className="grid grid-cols-2 gap-1 w-7 h-7">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E4032E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E4032E]" />
                </div>
              </motion.div>

              {/* Card 4: Bottom Right - Projects Delivered */}
              <motion.div
                animate={{ y: [0, -11, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="absolute bottom-2 -right-2 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.07)] border border-white/90 hover:border-red-400 hover:shadow-[0_25px_60px_rgba(228,3,46,0.22)] flex items-center justify-between gap-4 z-20 transition-all duration-300 group cursor-pointer origin-bottom-right"
              >
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">
                    Projects Delivered
                  </div>
                  <div className="text-3xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight">
                    200+
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    Successful Projects
                  </div>
                </div>
                {/* Mini Bar Chart Graphic */}
                <div className="flex items-end gap-1 h-7">
                  <div className="w-2 bg-red-200 rounded-t h-3 group-hover:h-4 transition-all" />
                  <div className="w-2 bg-red-400 rounded-t h-5 group-hover:h-6 transition-all" />
                  <div className="w-2 bg-[#E4032E] rounded-t h-7" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Trusted Brand Logos Strip - Mobile Position (Exact match to reference card below globe) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="block lg:hidden mt-6 pt-4"
        >
          {/* Centered headline with flanking hairline divider lines */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1 h-px bg-slate-200" />
            <p className="text-[10px] xs:text-[11px] font-bold text-slate-500 uppercase tracking-widest text-center whitespace-nowrap">
              Trusted by 210+ global brands worldwide
            </p>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Clean Rounded Brand Logo Card (Samsung, Amazon, Spotify, Salesforce) per reference design */}
          <div className="bg-white/95 rounded-2xl border border-slate-200/80 shadow-xs px-3 py-3 flex items-center justify-between gap-2 overflow-x-auto">
            <span className="font-black text-xs xs:text-sm tracking-tight font-['Space_Grotesk'] text-slate-700 uppercase">
              SAMSUNG
            </span>
            <span className="font-black text-xs xs:text-sm tracking-tight font-['Space_Grotesk'] text-slate-800 lowercase">
              amazon
            </span>
            <span className="font-black text-xs xs:text-sm tracking-tight font-['Space_Grotesk'] text-slate-800">
              Spotify<span className="text-[8px] align-super">®</span>
            </span>
            <span className="font-black text-xs xs:text-sm tracking-tight font-['Space_Grotesk'] text-slate-800 lowercase">
              salesforce
            </span>
          </div>
        </motion.div>

        {/* Bottom Bar on Mobile: Local Solutions note on left + Scroll to explore in center (Matches reference image) */}
        <div className="mt-8 flex items-end justify-between relative px-1">
          {/* Left: LOCAL SOLUTIONS. GLOBAL IMPACT. (Mobile only per reference) */}
          <div className="lg:hidden text-left select-none pb-1">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-[1.3] font-['Space_Grotesk']">
              Local<br />Solutions.<br />Global<br />Impact.
            </p>
            <div className="w-4 h-0.5 bg-[#E4032E] mt-1 rounded-full" />
          </div>

          {/* Center: Scroll to explore */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-px h-6 bg-red-300/60 mb-2 sm:hidden" />
            <button
              onClick={() => {
                const el = document.getElementById('floating-marquee');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center gap-1 text-xs text-slate-400 hover:text-[#E4032E] transition-colors cursor-pointer group"
            >
              <span className="uppercase tracking-widest text-[9px] sm:text-[10px] font-black font-['Space_Grotesk'] text-slate-500">
                Scroll to explore
              </span>
              <ChevronDown className="w-4 h-4 text-[#E4032E] group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Spacer for balance on mobile */}
          <div className="w-16 lg:hidden" />
        </div>
      </section>

      {/* Infinite Continuous Sliding Floating Stats Marquee */}
      <div id="floating-marquee">
        <FloatingStatsMarquee />
      </div>
    </div>
  );
};
