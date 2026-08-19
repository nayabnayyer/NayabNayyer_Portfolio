import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { WhatIBuild } from './components/WhatIBuild';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
       const openResume = () => {
       window.open('/Nayab_Nayyer_AI_ML_Resume.pdf', '_blank');
};
  return (
    <div className="min-h-screen bg-[#0D0F10] text-[#F2F2EF] selection:bg-[#6FA7A3]/30 selection:text-[#F2F2EF]">
      {/* Top Sticky Navigation */}
      <Navbar onOpenResume={openResume} />

      {/* Main Content Layout */}
      <main>
        <Hero onOpenResume={openResume} />
        <SelectedWork />
        <WhatIBuild />
        <SkillsSection />
        <ExperienceEducation />
        <AboutSection />
        <ContactSection onOpenResume={openResume} />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
