import React from 'react';
import { PageId } from '../../types';
import { SERVICES_DATA } from '../../data/mockData';
import { IconHelper } from '../common/IconHelper';
import { ArrowRight, Plus } from 'lucide-react';

interface ServicesGridProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onNavigate }) => {
  const primary8 = SERVICES_DATA.filter((s) => s.isPrimary8);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
              ENTERPRISE SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
              End-to-End Language Solutions Powered by AI
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              From content to context, we deliver accurate, culturally relevant and business-ready language solutions at global scale.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#141414] hover:text-[#E4032E] transition-colors group self-start lg:self-auto"
          >
            <span>View All Services</span>
            <Plus className="w-4 h-4 text-[#E4032E] group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>

        {/* 8 Cards Grid (2 rows x 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {primary8.map((service) => (
            <div
              key={service.id}
              onClick={() => onNavigate('services', service.id)}
              className="group relative bg-slate-50/70 hover:bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-red-400/60 shadow-sm hover:shadow-[0_20px_45px_rgba(228,3,46,0.12)] transform hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              {/* Top Gradient Red Accent Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E4032E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Background Ambient Glow Accent */}
              <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-red-500/5 group-hover:bg-red-500/10 blur-2xl transition-all duration-500 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Icon Container with Elevating Scale */}
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/80 text-[#E4032E] flex items-center justify-center group-hover:bg-[#E4032E] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(228,3,46,0.35)] group-hover:scale-110 transition-all duration-300">
                  <IconHelper name={service.iconName} size={22} />
                </div>

                {/* Service Name */}
                <h3 className="text-lg font-bold text-[#141414] group-hover:text-[#E4032E] transition-colors duration-200 font-['Space_Grotesk']">
                  {service.name}
                </h3>

                {/* One line desc */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {service.oneLineDesc}
                </p>
              </div>

              {/* Bottom Learn More Link */}
              <div className="pt-6 mt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-[#141414] group-hover:text-[#E4032E] transition-colors duration-200 relative z-10">
                <span>Learn More</span>
                <div className="flex items-center gap-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300">
                  <span className="text-[#E4032E] text-sm font-extrabold transform group-hover:rotate-90 transition-transform duration-300 inline-block">+</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E4032E]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
