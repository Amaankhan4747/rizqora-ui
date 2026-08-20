import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { SERVICES_DATA, INDUSTRIES_DATA } from '../../data/mockData';
import { ChevronDown, Globe, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsHovered, setSolutionsHovered] = useState(false);
  const [industriesHovered, setIndustriesHovered] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId, detailId?: string) => {
    onNavigate(page, detailId);
    setMobileMenuOpen(false);
    setSolutionsHovered(false);
    setIndustriesHovered(false);
  };

  const navItems: { label: string; page: PageId; hasDropdown?: boolean }[] = [
    { label: 'Solutions', page: 'services', hasDropdown: true },
    { label: 'Industries', page: 'industries', hasDropdown: true },
    { label: 'Technology', page: 'technology' },
    { label: 'Resources', page: 'resources' },
    { label: 'Company', page: 'about' },
  ];

  const languages = [
    { code: 'EN', name: 'English (US)' },
    { code: 'ES', name: 'Español' },
    { code: 'DE', name: 'Deutsch' },
    { code: 'FR', name: 'Français' },
    { code: 'ZH', name: '中文' },
    { code: 'JA', name: '日本語' },
    { code: 'AR', name: 'العربية' },
  ];

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
          {/* Brand Logo & Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
          >
            {/* Custom SVG Logo Mark */}
            <div className="w-9 h-9 rounded-xl bg-[#0A0A0A] flex items-center justify-center relative shadow-md group-hover:scale-105 transition-transform duration-200">
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
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative py-2"
                onMouseEnter={() => {
                  if (item.label === 'Solutions') setSolutionsHovered(true);
                  if (item.label === 'Industries') setIndustriesHovered(true);
                }}
                onMouseLeave={() => {
                  if (item.label === 'Solutions') setSolutionsHovered(false);
                  if (item.label === 'Industries') setIndustriesHovered(false);
                }}
              >
                <button
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3 py-1.5 text-sm font-semibold transition-colors duration-150 rounded-md flex items-center gap-1.5 ${
                    currentPage === item.page
                      ? 'text-[#E4032E] bg-red-50/60'
                      : 'text-slate-700 hover:text-[#141414] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </button>

                {/* Solutions Dropdown Menu */}
                {item.label === 'Solutions' && solutionsHovered && (
                  <div className="absolute top-full left-0 w-[540px] bg-white rounded-xl shadow-xl border border-slate-100 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="col-span-2 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
                        Enterprise Language Services
                      </span>
                      <button
                        onClick={() => handleNavClick('services')}
                        className="text-xs font-semibold text-slate-600 hover:text-[#E4032E] flex items-center gap-1"
                      >
                        All Services <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                    {SERVICES_DATA.slice(0, 6).map((srv) => (
                      <button
                        key={srv.id}
                        onClick={() => handleNavClick('services', srv.id)}
                        className="p-2.5 rounded-lg hover:bg-slate-50 text-left transition-colors group"
                      >
                        <div className="text-sm font-semibold text-[#141414] group-hover:text-[#E4032E] transition-colors">
                          {srv.name}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">
                          {srv.oneLineDesc}
                        </div>
                      </button>
                    ))}
                    <div className="col-span-2 mt-2 pt-2 bg-slate-50 p-2.5 rounded-lg flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">
                        Looking for custom AI dataset annotation?
                      </span>
                      <button
                        onClick={() => handleNavClick('ai-solutions')}
                        className="text-xs font-bold text-[#E4032E] hover:underline"
                      >
                        Explore AI Solutions →
                      </button>
                    </div>
                  </div>
                )}

                {/* Industries Dropdown Menu */}
                {item.label === 'Industries' && industriesHovered && (
                  <div className="absolute top-full left-0 w-[420px] bg-white rounded-xl shadow-xl border border-slate-100 p-3 grid grid-cols-2 gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between px-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E4032E]">
                        Served Industries
                      </span>
                      <button
                        onClick={() => handleNavClick('industries')}
                        className="text-xs font-semibold text-slate-600 hover:text-[#E4032E] flex items-center gap-1"
                      >
                        View All <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                    {INDUSTRIES_DATA.map((ind) => (
                      <button
                        key={ind.id}
                        onClick={() => handleNavClick('industries', ind.id)}
                        className="p-2 rounded-lg hover:bg-slate-50 text-left transition-colors text-xs font-medium text-slate-700 hover:text-[#E4032E] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E4032E]/60" />
                        {ind.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Bar: Language Selector & Request Quote Button */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-slate-700 bg-slate-100/80 hover:bg-slate-200/80 rounded-lg transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#E4032E]" />
                <span>{selectedLang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50">
                  <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Select Region
                  </div>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setSelectedLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-slate-50 transition-colors flex items-center justify-between ${
                        selectedLang === l.code
                          ? 'text-[#E4032E] font-bold bg-red-50/50'
                          : 'text-slate-700'
                      }`}
                    >
                      <span>{l.name}</span>
                      <span className="text-[10px] text-slate-400">{l.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Request Quote Button */}
            <button
              onClick={() => handleNavClick('quote')}
              className="bg-[#E4032E] hover:bg-[#c30226] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-red-500/10 hover:shadow-red-500/25 transition-all duration-200 flex items-center gap-2 group"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('quote')}
              className="bg-[#E4032E] text-white px-3 py-1.5 rounded-lg text-xs font-bold"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-black rounded-lg hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  currentPage === item.page
                    ? 'text-[#E4032E] bg-red-50 font-bold'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('languages')}
              className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Languages (1,000+)
            </button>
            <button
              onClick={() => handleNavClick('ai-solutions')}
              className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              AI Solutions
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Contact Us
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('quote')}
              className="w-full bg-[#E4032E] text-white py-3 rounded-xl font-bold text-center text-sm shadow-md"
            >
              Request Enterprise Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
