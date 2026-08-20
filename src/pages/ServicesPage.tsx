import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data/mockData';
import { IconHelper } from '../components/common/IconHelper';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const getSlug = (id: string) => {
    if (id === 'lqa') return 'linguistic-quality-assurance';
    return id;
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E4032E]">
            FULL SERVICES CATALOG
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141414] tracking-tight font-['Space_Grotesk']">
            Comprehensive Enterprise Language & AI Solutions
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            All 10 specialized language solutions engineered to help global businesses communicate effortlessly across international markets.
          </p>
        </div>
      </section>

      {/* Services Grid (All 10 Services) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <Link
              key={service.id}
              to={`/solutions/${getSlug(service.id)}`}
              className="bg-white p-7 rounded-3xl border border-slate-200/80 hover:border-red-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E4032E] flex items-center justify-center group-hover:bg-[#E4032E] group-hover:text-white transition-colors">
                    <IconHelper name={service.iconName} size={22} />
                  </div>
                  {service.isPrimary8 && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E4032E] bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                      Core Solution
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#141414] group-hover:text-[#E4032E] transition-colors font-['Space_Grotesk']">
                  {service.name}
                </h3>

                <p className="text-xs text-slate-600 font-semibold">
                  {service.oneLineDesc}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {service.fullDesc}
                </p>

                {/* Features Bullets preview */}
                <div className="space-y-1.5 pt-2">
                  {service.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E4032E] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#141414] group-hover:text-[#E4032E]">
                <span>View Full Specifications</span>
                <ArrowRight className="w-4 h-4 text-[#E4032E] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
