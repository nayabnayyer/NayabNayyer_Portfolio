import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { CheckCircle, Sparkles, BookOpen, Layers, Terminal, Database, BrainCircuit, GitBranch } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming & Data': <Terminal className="w-4 h-4 text-[#6FA7A3]" />,
    'Machine Learning': <Layers className="w-4 h-4 text-[#6FA7A3]" />,
    'Deep Learning & Computer Vision': <BrainCircuit className="w-4 h-4 text-[#6FA7A3]" />,
    'NLP & Generative AI': <Sparkles className="w-4 h-4 text-[#6FA7A3]" />,
    'Development & Deployment': <GitBranch className="w-4 h-4 text-[#6FA7A3]" />,
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-[#292D30]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-[11px] font-mono text-[#6FA7A3] tracking-wider uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6FA7A3]"></span>
            Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F2EF]">
            Skills & Tooling
          </h2>
          <p className="text-[#9A9FA3] text-sm sm:text-base leading-relaxed">
            Technologies, libraries, and frameworks applied across hands-on implementations and ongoing study.
          </p>
        </div>

        {/* ======================================================== */}
        {/* GROUP 1: BUILDING WITH (Established Practical Toolkit) */}
        {/* ======================================================== */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6FA7A3]"></span>
            <h3 className="text-xs font-mono font-semibold tracking-wider text-[#F2F2EF] uppercase">
              Building With (Practical Toolkit)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILL_CATEGORIES.buildingWith.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#141719] border border-[#292D30] space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F2F2EF]">
                  <div className="p-1.5 rounded bg-[#181B1D] border border-[#292D30]">
                    {categoryIcons[cat.title] || <Terminal className="w-3.5 h-3.5 text-[#6FA7A3]" />}
                  </div>
                  <span>{cat.title}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-[#181B1D] text-[#F2F2EF] border border-[#292D30] hover:border-[#6FA7A3]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* GROUP 2: CURRENTLY LEARNING (Explicitly Separated) */}
        {/* ======================================================== */}
        <div className="p-6 rounded-xl bg-[#141719] border border-[#292D30] space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-[#6FA7A3]" />
              <h3 className="text-xs font-mono font-semibold tracking-wider text-[#F2F2EF] uppercase">
                Currently Learning & Expanding
              </h3>
            </div>
            <span className="text-[11px] font-mono text-[#9A9FA3]">
              Active study & next-phase implementations
            </span>
          </div>

          <p className="text-xs text-[#9A9FA3] max-w-3xl leading-relaxed">
            To build towards production AI/ML engineering, I am currently exploring backend API packaging, modular orchestration, containerization, and advanced retrieval pipelines:
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {SKILL_CATEGORIES.currentlyLearning.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-md text-xs font-mono bg-[#181B1D] text-[#6FA7A3] border border-[#292D30] flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#6FA7A3]/60 animate-pulse"></span>
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
