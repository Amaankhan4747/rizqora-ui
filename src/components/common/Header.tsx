import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES_DATA, INDUSTRIES_DATA } from '../../data/mockData';
import { ChevronDown, Globe, Menu, X, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsHovered, setSolutionsHovered] = useState(false);
  const [industriesHovered, setIndustriesHovered] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setSolutionsHovered(false);
    setIndustriesHovered(false);
  };

  const getServiceSlug = (id: string) => (id === 'lqa' ? 'linguistic-quality-assurance' : id);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={closeMenus} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-[#0A0A0A] flex items-center justify-center relative shadow-md group-hover:scale-105 transition-transform">
              <div className="w-5 h-5 border-2 border-white/90 rounded-md rotate-45 flex items-center justify-center relative">
                <span className="w-2 h-2 rounded-full bg-[#E4032E] absolute -top-1 -right-1 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#141414] font-['Space_Grotesk'] leading-none">
                Rizqora<span className="text-[#E4032E]">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold leading-tight">
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {/* Solutions */}
            <div
              className="relative py-2"
              onMouseEnter={() => setSolutionsHovered(true)}
              onMouseLeave={() => setSolutionsHovered(false)}
            >
              <Link
                to="/solutions"
                onClick={closeMenus}
                className={`px-3 py-1.5 text-sm font-semibold rounded-md flex items-center gap-1.5 transition-colors ${
                  location.pathname.startsWith('/solutions')
                    ? 'text-[#E4032E] bg-red-50/60'
                    : 'text-slate-700 hover:text-[#141414] hover:bg-slate-50'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {solutionsHovered && (
                <div className="absolute top-full left-0 w-[540px] bg-white rounded-xl shadow-xl border border-slate-100 p-4 grid grid-cols-2 gap-2">
                  <div className="col-span-2 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
                      Enterprise Language Services
                    </span>
                    <Link
                      to="/solutions"
                      onClick={closeMenus}
                      className="text-xs font-semibold text-slate-600 hover:text-[#E4032E] flex items-center gap-1"
                    >
                      All Services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  {SERVICES_DATA.slice(0, 6).map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/solutions/${getServiceSlug(srv.id)}`}
                      onClick={closeMenus}
                      className="p-2.5 rounded-lg hover:bg-slate-50 text-left transition-colors group"
                    >
                      <div className="text-sm font-semibold text-[#141414] group-hover:text-[#E4032E]">
                        {srv.name}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">
                        {srv.oneLineDesc}
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-2 mt-2 pt-2 bg-slate-50 p-2.5 rounded-lg flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-medium">
                      Looking for custom AI dataset annotation?
                    </span>
                    <Link
                      to="/solutions/ai-data-annotation"
                      onClick={closeMenus}
                      className="text-xs font-bold text-[#E4032E] hover:underline"
                    >
                      Explore AI Solutions →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Industries */}
            <div
              className="relative py-2"
              onMouseEnter={() => setIndustriesHovered(true)}
              onMouseLeave={() => setIndustriesHovered(false)}
            >
              <Link
                to="/industries"
                onClick={closeMenus}
                className={`px-3 py-1.5 text-sm font-semibold rounded-md flex items-center gap-1.5 transition-colors ${
                  location.pathname.startsWith('/industries')
                    ? 'text-[#E4032E] bg-red-50/60'
                    : 'text-slate-700 hover:text-[#141414] hover:bg-slate-50'
                }`}
              >
                <span>Industries</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {industriesHovered && (
                <div className="absolute top-full left-0 w-[420px] bg-white rounded-xl shadow-xl border border-slate-100 p-3 grid grid-cols-2 gap-1.5">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between px-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
                      Served Industries
                    </span>
                    <Link
                      to="/industries"
                      onClick={closeMenus}
                      className="text-xs font-semibold text-slate-600 hover:text-[#E4032E] flex items-center gap-1"
                    >
                      View All <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  {INDUSTRIES_DATA.map((ind) => (
                    <Link
                      key={ind.id}
                      to={`/industries/${ind.id}`}
                      onClick={closeMenus}
                      className="p-2 rounded-lg hover:bg-slate-50 text-left transition-colors text-xs font-medium text-slate-700 hover:text-[#E4032E] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E4032E]/60" />
                      {ind.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Technology */}
            <Link
              to="/technology"
              onClick={closeMenus}
              className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                location.pathname.startsWith('/technology')
                  ? 'text-[#E4032E] bg-red-50/60'
                  : 'text-slate-700 hover:text-[#141414] hover:bg-slate-50'
              }`}
            >
              Technology
            </Link>

            {/* Resources */}
            <Link
              to="/resources"
              onClick={closeMenus}
              className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                location.pathname.startsWith('/resources')
                  ? 'text-[#E4032E] bg-red-50/60'
                  : 'text-slate-700 hover:text-[#141414] hover:bg-slate-50'
              }`}
            >
              Resources
            </Link>

            {/* Company */}
            <Link
              to="/about"
              onClick={closeMenus}
              className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                location.pathname === '/about' || location.pathname.startsWith('/company')
                  ? 'text-[#E4032E] bg-red-50/60'
                  : 'text-slate-700 hover:text-[#141414] hover:bg-slate-50'
              }`}
            >
              Company
            </Link>
          </nav>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/quote"
              className="bg-[#E4032E] hover:bg-[#c30226] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 transition-all transform hover:-translate-y-0.5"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <Link
            to="/solutions"
            onClick={closeMenus}
            className="block py-2 text-sm font-bold text-slate-800"
          >
            Solutions
          </Link>
          <div className="pl-4 space-y-1.5 border-l-2 border-slate-100">
            {SERVICES_DATA.map((s) => (
              <Link
                key={s.id}
                to={`/solutions/${getServiceSlug(s.id)}`}
                onClick={closeMenus}
                className="block py-1 text-xs text-slate-600 hover:text-[#E4032E]"
              >
                {s.name}
              </Link>
            ))}
          </div>

          <Link
            to="/industries"
            onClick={closeMenus}
            className="block py-2 text-sm font-bold text-slate-800"
          >
            Industries
          </Link>
          <Link
            to="/technology"
            onClick={closeMenus}
            className="block py-2 text-sm font-bold text-slate-800"
          >
            Technology
          </Link>
          <Link
            to="/resources"
            onClick={closeMenus}
            className="block py-2 text-sm font-bold text-slate-800"
          >
            Resources
          </Link>
          <Link
            to="/about"
            onClick={closeMenus}
            className="block py-2 text-sm font-bold text-slate-800"
          >
            Company
          </Link>
          <Link
            to="/quote"
            onClick={closeMenus}
            className="block text-center bg-[#E4032E] text-white py-2.5 rounded-xl text-xs font-bold mt-4"
          >
            Request Quote
          </Link>
        </div>
      )}
    </header>
  );
};
