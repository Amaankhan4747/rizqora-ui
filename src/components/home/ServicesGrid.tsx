import React, { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../../data/mockData';
import { IconHelper } from '../common/IconHelper';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageId } from '../../types';

interface ServicesGridProps {
  onNavigate?: (page: PageId, detailId?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = () => {
  const primary8 = SERVICES_DATA.filter((s) => s.isPrimary8);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Mouse Drag Tracking State
  const [isMouseDown, setIsMouseDown] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  const getSlug = (id: string) => {
    if (id === 'lqa') return 'linguistic-quality-assurance';
    return id;
  };

  // Mouse Down - Begin Dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    hasMovedRef.current = false;
    startXRef.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftRef.current = sliderRef.current.scrollLeft;
  };

  // Mouse Move - Scroll Horizontally
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const distance = x - startXRef.current;
    if (Math.abs(distance) > 5) {
      hasMovedRef.current = true;
    }
    sliderRef.current.scrollLeft = scrollLeftRef.current - distance * 1.3;
  };

  // Mouse Up / Leave - End Dragging
  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  // Prevent Navigation when dragging
  const handleLinkClick = (e: React.MouseEvent) => {
    if (hasMovedRef.current) {
      e.preventDefault();
    }
  };

  // Arrow Button Navigation
  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = 320;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section className="py-12 sm:py-14 bg-white border-b border-slate-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                className="w-8 h-8 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-600 hover:text-[#E4032E] border border-slate-200/80 hover:border-red-200 flex items-center justify-center transition-all cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                className="w-8 h-8 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-600 hover:text-[#E4032E] border border-slate-200/80 hover:border-red-200 flex items-center justify-center transition-all cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-red-50 hover:text-[#E4032E] border border-slate-200/80 hover:border-red-200 transition-all shadow-xs shrink-0 group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E4032E] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Horizontal Drag-to-Scroll Slider */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-4 overflow-x-auto pb-4 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ scrollBehavior: isMouseDown ? 'auto' : 'smooth' }}
        >
          {primary8.map((service) => (
            <Link
              key={service.id}
              to={`/solutions/${getSlug(service.id)}`}
              onClick={handleLinkClick}
              draggable={false}
              className="w-[280px] sm:w-[300px] shrink-0 group relative bg-slate-50/60 hover:bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 hover:border-red-300 hover:shadow-md hover:shadow-red-500/5 transform hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
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

                {/* Optional Service Visual Image (for Translation, Localization, AI Data Annotation) */}
                {service.image && (
                  <div className="w-full h-28 sm:h-32 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      referrerPolicy="no-referrer"
                      draggable={false}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}

                {/* Service Name */}
                <h3 className="text-sm sm:text-[15px] font-bold text-[#141414] group-hover:text-[#E4032E] transition-colors font-['Space_Grotesk'] leading-snug">
                  {service.name}
                </h3>

                {/* Service Description */}
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
