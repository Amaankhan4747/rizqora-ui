import React from 'react';
import { PageId } from '../types';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { WorkflowTimeline } from '../components/home/WorkflowTimeline';
import { IndustriesLanguageSplit } from '../components/home/IndustriesLanguageSplit';
import { ValuePropositionStrip } from '../components/home/ValuePropositionStrip';
import { TechnologyBand } from '../components/home/TechnologyBand';
import { SocialProofTrio } from '../components/home/SocialProofTrio';
import { FinalCtaBand } from '../components/home/FinalCtaBand';

interface HomePageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* 01 Hero Section (Contains Globe + 4 Animated Floating Stat Cards) */}
      <HeroSection onNavigate={onNavigate} />

      {/* 02 Services Grid */}
      <ServicesGrid onNavigate={onNavigate} />

      {/* 03 Workflow / Process Timeline */}
      <WorkflowTimeline />

      {/* 04 Industries + Language Coverage Split */}
      <IndustriesLanguageSplit onNavigate={onNavigate} />

      {/* 05 Value Proposition Strip */}
      <ValuePropositionStrip />

      {/* 06 Technology Band */}
      <TechnologyBand onNavigate={onNavigate} />

      {/* 07 Social Proof Trio */}
      <SocialProofTrio onNavigate={onNavigate} />

      {/* 08 Final Call-to-Action Band */}
      <FinalCtaBand onNavigate={onNavigate} />
    </div>
  );
};
