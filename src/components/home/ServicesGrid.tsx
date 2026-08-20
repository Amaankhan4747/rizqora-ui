import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../../data/mockData';
import { IconHelper } from '../common/IconHelper';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageId } from '../../types';

interface ServicesGridProps {
  onNavigate?: (page: PageId, detailId?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = () => {
  const primary8 = SERVICES_DATA.filter((s) => s.isPrimary8);

  const getSlug = (id: string) => {
    if (id === 'lqa') return 'linguistic-quality-assurance';
    return id;
  };

  return (
    <section className="py-12 sm:py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact, Balanced Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E4032E]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E4032E]">
                ENTERPRISE SERVICES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
              End-to-End Language Solutions Powered by AI
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Accurate, culturally nuanced, and scalable language infrastructure for global enterprises.
            </p>
          </div>

          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-red-50 hover:text-[#E4032E] border border-slate-200/80 hover:border-red-200 transition-all shadow-xs shrink-0 self-start sm:self-auto group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E4032E] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Compact 8 Cards Grid (2 rows x 4 on desktop, 2 x 2 on tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {primary8.map((service) => (
            <Link
              key={service.id}
              to={`/solutions/${getSlug(service.id)}`}
              className="group relative bg-slate-50/60 hover:bg-white p-4.5 sm:p-5 rounded-2xl border border-slate-200/80 hover:border-red-300 hover:shadow-md hover:shadow-red-500/5 transform hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-3">
                {/* Top Row: Icon + Arrow Indicator */}
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-white shadow-xs border border-slate-200/70 text-[#E4032E] flex items-center justify-center group-hover:bg-[#E4032E] group-hover:text-white group-hover:border-[#E4032E] transition-all duration-200">
                    <IconHelper name={service.iconName} size={18} />
                  </div>
                  <div className="w-6 h-6 rounded-lg text-slate-400 group-hover:text-[#E4032E] group-hover:bg-red-50 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Service Name */}
                <h3 className="text-sm sm:text-[15px] font-bold text-[#141414] group-hover:text-[#E4032E] transition-colors font-['Space_Grotesk'] leading-snug">
                  {service.name}
                </h3>

                {/* Service Description (Uniform 2-line clamp) */}
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {service.oneLineDesc}
                </p>
              </div>

              {/* Bottom Learn More Link */}
              <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-slate-600 group-hover:text-[#E4032E] transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3 text-[#E4032E] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
