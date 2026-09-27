import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { AcademicBanner } from '@/components/sections/AcademicBanner';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { AIDecisionSupport } from '@/components/sections/AIDecisionSupport';
import { ArchitectureSection } from '@/components/sections/ArchitectureSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { ObjectivesSection } from '@/components/sections/ObjectivesSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { StatusSection } from '@/components/sections/StatusSection';
import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {/* Sticky Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-surface flex-grow">
        <div className="flex flex-col w-full text-on-surface">
          <Hero />
          <AcademicBanner />
          <ProblemSection />
          <SolutionSection />
          <FeaturesSection />
          <AIDecisionSupport />
          <ArchitectureSection />
          <TechnologySection />
          <ObjectivesSection />
          <TeamSection />
          <StatusSection />
          <ResourcesSection />
          <CTASection />
        </div>
      </main>

      {/* Academic Footer */}
      <Footer />
    </div>
  );
}
