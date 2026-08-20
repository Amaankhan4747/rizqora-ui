/**
 * Rizqora Solutions Enterprise Website
 * Apache-2.0 License
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { LanguagesPage } from './pages/LanguagesPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { AiSolutionsPage } from './pages/AiSolutionsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { BlogPage } from './pages/BlogPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { GetQuotePage } from './pages/GetQuotePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedDetailId, setSelectedDetailId] = useState<string | undefined>(undefined);

  const handleNavigate = (page: PageId, detailId?: string) => {
    setCurrentPage(page);
    setSelectedDetailId(detailId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#141414] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col justify-between selection:bg-[#E4032E] selection:text-white">
      {/* Persistent Navigation Bar */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Router View */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            selectedDetailId={selectedDetailId}
          />
        )}
        {currentPage === 'industries' && (
          <IndustriesPage
            onNavigate={handleNavigate}
            selectedDetailId={selectedDetailId}
          />
        )}
        {currentPage === 'languages' && <LanguagesPage onNavigate={handleNavigate} />}
        {currentPage === 'technology' && <TechnologyPage onNavigate={handleNavigate} />}
        {currentPage === 'ai-solutions' && <AiSolutionsPage onNavigate={handleNavigate} />}
        {currentPage === 'resources' && <ResourcesPage onNavigate={handleNavigate} />}
        {currentPage === 'blog' && <BlogPage onNavigate={handleNavigate} />}
        {currentPage === 'case-studies' && <CaseStudiesPage onNavigate={handleNavigate} />}
        {currentPage === 'careers' && <CareersPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
        {currentPage === 'quote' && <GetQuotePage onNavigate={handleNavigate} />}
        {currentPage === 'privacy' && <PrivacyPolicyPage onNavigate={handleNavigate} />}
        {currentPage === 'terms' && <TermsPage onNavigate={handleNavigate} />}
      </main>

      {/* Persistent Enterprise Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
