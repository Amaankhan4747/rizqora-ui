import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { CareersPage } from './CareersPage';
import { ContactPage } from './ContactPage';

export const CompanyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (slug === 'careers') return <CareersPage onNavigate={() => {}} />;
  if (slug === 'contact') return <ContactPage onNavigate={() => {}} />;
  return <AboutPage onNavigate={() => {}} />;
};
