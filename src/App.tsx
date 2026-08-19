import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { WhatIBuild } from './components/WhatIBuild';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0F10] text-[#F2F2EF] selection:bg-[#6FA7A3]/30 selection:text-[#F2F2EF]">
      {/* Top Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Layout */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <SelectedWork />
        <WhatIBuild />
        <SkillsSection />
        <ExperienceEducation />
        <AboutSection />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Printable / ATS Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
