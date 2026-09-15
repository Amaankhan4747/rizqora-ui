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
    <section className="py-24 bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Background Image: World Map Network */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('${ASSET_PATHS.images.techBg}')` }}
      />
      {/* Subtle ~15-20% black fade overlay keeping world map visible & premium */}
      <div className="absolute inset-0 bg-black/18 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-transparent to-[#0A0A0A]/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
              TECHNOLOGY STACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
              Powered by Advanced AI & Language Tech
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Our proprietary language technology ecosystem delivers unmatched accuracy, speed, security, and terminology consistency.
            </p>
          </div>

          <button
            onClick={() => onNavigate('technology')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#E4032E] hover:text-white transition-colors self-start lg:self-auto group"
          >
            <span className="group-hover:underline">Explore Technology</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Technology Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_TILES.map((tile) => (
            <div
              key={tile.id}
              onClick={() => onNavigate('technology')}
              className="group bg-slate-900/80 hover:bg-slate-900/95 backdrop-blur-md p-6 rounded-2xl border border-slate-800/80 hover:border-red-500/50 shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              {/* Top Glow Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E4032E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-950/90 border border-slate-800 text-[#E4032E] flex items-center justify-center group-hover:bg-[#E4032E] group-hover:text-white transition-colors shadow-inner">
                    <IconHelper name={tile.icon} size={22} />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-slate-950/90 px-2.5 py-1 rounded-full border border-slate-800">
                    {tile.subtitle}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E4032E] transition-colors font-['Space_Grotesk']">
                    {tile.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {tile.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-white">
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
