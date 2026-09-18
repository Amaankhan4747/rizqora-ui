import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES_DATA, INDUSTRIES_DATA } from '../../data/mockData';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { RizqoraaLogo } from './RizqoraaLogo';

export const Header: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [solutionsHovered, setSolutionsHovered] = useState(false);
  const [industriesHovered, setIndustriesHovered] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    closeMenus();
  }, [location.pathname]);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setMobileSolutionsOpen(false);
    setMobileIndustriesOpen(false);
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
          <Link
            to="/"
            onClick={closeMenus}
            className="flex items-center group py-1"
            aria-label="Rizqoraa Home"
          >
            <RizqoraaLogo
              height={40}
              variant="light"
              className="scale-[1.22] xs:scale-[1.35] sm:scale-[1.52] origin-left group-hover:opacity-95 transition-opacity"
            />
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

            {/* Languages */}
            <Link
              to="/languages"
              onClick={closeMenus}
              className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                location.pathname.startsWith('/languages')
                  ? 'text-[#E4032E] bg-red-50/60'
                  : 'text-slate-700 hover:text-[#141414] hover:bg-slate-50'
              }`}
            >
              Languages
            </Link>

            {/* Workflow */}
            <Link
              to="/workflow"
              onClick={closeMenus}
              className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                location.pathname.startsWith('/workflow')
                  ? 'text-[#E4032E] bg-red-50/60'
                  : 'text-slate-700 hover:text-[#141414] hover:bg-slate-50'
              }`}
            >
              Workflow
            </Link>

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
              aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#E4032E]/20"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 sm:px-6 pt-3 pb-8 max-h-[calc(100vh-72px)] overflow-y-auto shadow-2xl space-y-1 divide-y divide-slate-100">
          {/* Solutions Accordion */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              aria-label={mobileSolutionsOpen ? "Collapse Solutions submenu" : "Expand Solutions submenu"}
              aria-expanded={mobileSolutionsOpen}
              className="w-full flex items-center justify-between py-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E4032E]/30 rounded-lg transition-colors"
            >
              <span className={`text-base font-bold transition-colors ${
                mobileSolutionsOpen ? 'text-[#E4032E]' : 'text-slate-800 group-hover:text-[#E4032E]'
              }`}>
                Solutions
              </span>
              <span className="p-1 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-500 group-hover:text-[#E4032E] rounded-lg transition-colors">
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileSolutionsOpen ? 'rotate-180 text-[#E4032E]' : ''
                  }`}
                />
              </span>
            </button>

            {mobileSolutionsOpen && (
              <div className="pl-3 pr-1 pb-3 pt-1 space-y-1 border-l-2 border-red-500/30 ml-2 mb-2 bg-slate-50/50 rounded-r-xl">
                <Link
                  to="/solutions"
                  onClick={closeMenus}
                  className="flex items-center justify-between py-2 px-3 text-xs font-bold text-[#E4032E] rounded-lg hover:bg-red-50/60 transition-colors"
                >
                  <span>All Enterprise Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                {SERVICES_DATA.map((s) => (
                  <Link
                    key={s.id}
                    to={`/solutions/${getServiceSlug(s.id)}`}
                    onClick={closeMenus}
                    className="block py-2 px-3 text-xs font-semibold text-slate-700 hover:text-[#E4032E] hover:bg-slate-100/70 rounded-lg transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
              aria-label={mobileIndustriesOpen ? "Collapse Industries submenu" : "Expand Industries submenu"}
              aria-expanded={mobileIndustriesOpen}
              className="w-full flex items-center justify-between py-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E4032E]/30 rounded-lg transition-colors"
            >
              <span className={`text-base font-bold transition-colors ${
                mobileIndustriesOpen ? 'text-[#E4032E]' : 'text-slate-800 group-hover:text-[#E4032E]'
              }`}>
                Industries
              </span>
              <span className="p-1 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-500 group-hover:text-[#E4032E] rounded-lg transition-colors">
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileIndustriesOpen ? 'rotate-180 text-[#E4032E]' : ''
                  }`}
                />
              </span>
            </button>

            {mobileIndustriesOpen && (
              <div className="pl-3 pr-1 pb-3 pt-1 space-y-1 border-l-2 border-red-500/30 ml-2 mb-2 bg-slate-50/50 rounded-r-xl">
                <Link
                  to="/industries"
                  onClick={closeMenus}
                  className="flex items-center justify-between py-2 px-3 text-xs font-bold text-[#E4032E] rounded-lg hover:bg-red-50/60 transition-colors"
                >
                  <span>All Specialized Industries</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                {INDUSTRIES_DATA.map((ind) => (
                  <Link
                    key={ind.id}
                    to={`/industries/${ind.id}`}
                    onClick={closeMenus}
                    className="block py-2 px-3 text-xs font-semibold text-slate-700 hover:text-[#E4032E] hover:bg-slate-100/70 rounded-lg transition-colors"
                  >
                    {ind.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Languages */}
          <div>
            <Link
              to="/languages"
              onClick={closeMenus}
              className="block py-3 text-base font-bold text-slate-800 hover:text-[#E4032E] transition-colors"
            >
              Languages
            </Link>
          </div>

          {/* Workflow */}
          <div>
            <Link
              to="/workflow"
              onClick={closeMenus}
              className="block py-3 text-base font-bold text-slate-800 hover:text-[#E4032E] transition-colors"
            >
              Workflow
            </Link>
          </div>

          {/* Technology */}
          <div>
            <Link
              to="/technology"
              onClick={closeMenus}
              className="block py-3 text-base font-bold text-slate-800 hover:text-[#E4032E] transition-colors"
            >
              Technology
            </Link>
          </div>

          {/* Resources */}
          <div>
            <Link
              to="/resources"
              onClick={closeMenus}
              className="block py-3 text-base font-bold text-slate-800 hover:text-[#E4032E] transition-colors"
            >
              Resources
            </Link>
          </div>

          {/* Company */}
          <div>
            <Link
              to="/about"
              onClick={closeMenus}
              className="block py-3 text-base font-bold text-slate-800 hover:text-[#E4032E] transition-colors"
            >
              Company
            </Link>
          </div>

          {/* Request Quote Action */}
          <div className="pt-4 border-t border-slate-100">
            <Link
              to="/quote"
              onClick={closeMenus}
              className="flex items-center justify-center gap-2 w-full bg-[#E4032E] hover:bg-[#c30226] text-white py-3.5 px-6 rounded-xl text-sm font-bold shadow-lg shadow-red-500/25 active:scale-[0.98] transition-all"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
