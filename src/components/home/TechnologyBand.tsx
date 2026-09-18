import React from 'react';
import { PageId } from '../../types';
import { TECH_TILES } from '../../data/mockData';
import { IconHelper } from '../common/IconHelper';
import { ArrowRight, Cpu, Lock, Shield, Sparkles } from 'lucide-react';
import { ASSET_PATHS } from '../../utils/assets';

interface TechnologyBandProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const TechnologyBand: React.FC<TechnologyBandProps> = ({ onNavigate }) => {
  return (
    <section className="py-12 sm:py-24 bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Background Image: World Map Network */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('${ASSET_PATHS.images.techBg}')` }}
      />
      {/* Subtle ~15-20% black fade overlay keeping world map visible & premium */}
      <div className="absolute inset-0 bg-black/18 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-transparent to-[#0A0A0A]/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
              TECHNOLOGY STACK
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
              Powered by Advanced AI & Language Tech
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Our proprietary language technology ecosystem delivers unmatched accuracy, speed, security, and terminology consistency.
            </p>
          </div>

          <button
            onClick={() => onNavigate('technology')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#E4032E] hover:text-white transition-colors self-start lg:self-auto group"
          >
            <span className="group-hover:underline">Explore Technology</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Technology Tiles: Horizontal Touch Slider on Mobile, 4-col Grid on Desktop */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible pb-4 pt-1 md:pb-0 md:pt-0 no-scrollbar snap-x snap-mandatory md:snap-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-x gap-3.5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TECH_TILES.map((tile) => (
            <div
              key={tile.id}
              onClick={() => onNavigate('technology')}
              className="w-[84vw] max-w-[290px] xs:max-w-[320px] md:w-auto shrink-0 md:shrink snap-start md:snap-align-none group bg-slate-900/80 hover:bg-slate-900/95 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-800/80 hover:border-red-500/50 shadow-xl sm:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              {/* Top Glow Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E4032E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-2.5 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-slate-950/90 border border-slate-800 text-[#E4032E] flex items-center justify-center group-hover:bg-[#E4032E] group-hover:text-white transition-colors shadow-inner">
                    <IconHelper name={tile.icon} size={18} />
                  </div>
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-slate-950/90 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-slate-800">
                    {tile.subtitle}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E4032E] transition-colors font-['Space_Grotesk']">
                    {tile.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 sm:mt-2 leading-relaxed line-clamp-3 md:line-clamp-none">
                    {tile.desc}
                  </p>
                </div>
              </div>

              <div className="pt-3 sm:pt-6 mt-3 sm:mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-white">
                <span>View Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E4032E] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
