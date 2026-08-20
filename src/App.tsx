/**
 * Rizqora Solutions Enterprise Website
 * Apache-2.0 License
 */

import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { LanguagesPage } from './pages/LanguagesPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { TechnologyDetailPage } from './pages/TechnologyDetailPage';
import { AiSolutionsPage } from './pages/AiSolutionsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { CompanyDetailPage } from './pages/CompanyDetailPage';
import { BlogPage } from './pages/BlogPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { GetQuotePage } from './pages/GetQuotePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavigate = (page: string, detailId?: string) => {
    if (page === 'home') navigate('/');
    else if (page === 'services') {
      if (detailId) {
        const slug = detailId === 'lqa' ? 'linguistic-quality-assurance' : detailId;
        navigate(`/solutions/${slug}`);
      } else {
        navigate('/solutions');
      }
    } else if (page === 'industries') {
      if (detailId) navigate(`/industries/${detailId}`);
      else navigate('/industries');
    } else if (page === 'technology') {
      if (detailId) navigate(`/technology/${detailId}`);
      else navigate('/technology');
    } else if (page === 'resources') {
      if (detailId) navigate(`/resources/${detailId}`);
      else navigate('/resources');
    } else {
      navigate(`/${page}`);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#141414] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col justify-between selection:bg-[#E4032E] selection:text-white">
      {/* Persistent Navigation Bar */}
      <Header />

      {/* Main Page Router View */}
      <main className="flex-grow">
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />

          {/* Solutions / Services */}
          <Route path="/solutions" element={<ServicesPage />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<SolutionDetailPage />} />

          {/* Industries */}
          <Route path="/industries" element={<IndustriesPage onNavigate={handleNavigate} />} />
          <Route path="/industries/:slug" element={<IndustryDetailPage />} />

          {/* Technology */}
          <Route path="/technology" element={<TechnologyPage onNavigate={handleNavigate} />} />
          <Route path="/technology/:slug" element={<TechnologyDetailPage />} />

          {/* Resources */}
          <Route path="/resources" element={<ResourcesPage onNavigate={handleNavigate} />} />
          <Route path="/resources/:slug" element={<ResourceDetailPage />} />

          {/* Company */}
          <Route path="/company/:slug" element={<CompanyDetailPage />} />
          <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
          <Route path="/careers" element={<CareersPage onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />

          {/* Other Core Routes */}
          <Route path="/languages" element={<LanguagesPage onNavigate={handleNavigate} />} />
          <Route path="/ai-solutions" element={<AiSolutionsPage onNavigate={handleNavigate} />} />
          <Route path="/blog" element={<BlogPage onNavigate={handleNavigate} />} />
          <Route path="/case-studies" element={<CaseStudiesPage onNavigate={handleNavigate} />} />
          <Route path="/quote" element={<GetQuotePage onNavigate={handleNavigate} />} />
          <Route path="/privacy" element={<PrivacyPolicyPage onNavigate={handleNavigate} />} />
          <Route path="/terms" element={<TermsPage onNavigate={handleNavigate} />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<HomePage onNavigate={handleNavigate} />} />
        </Routes>
      </main>

      {/* Persistent Enterprise Footer */}
      <Footer />

      {/* Floating Global WhatsApp Direct Chat Button */}
      <WhatsAppButton />
    </div>
  );
}
