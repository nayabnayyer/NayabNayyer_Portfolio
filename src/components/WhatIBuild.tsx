import React from 'react';
import { WHAT_I_BUILD } from '../data/portfolioData';
import { Cpu, Compass, Search, Sparkles, Eye, Code, ArrowRight } from 'lucide-react';

export const WhatIBuild: React.FC = () => {
  const icons = [
    <Cpu className="w-5 h-5 text-[#6FA7A3]" />,
    <Compass className="w-5 h-5 text-[#6FA7A3]" />,
    <Search className="w-5 h-5 text-[#6FA7A3]" />,
    <Sparkles className="w-5 h-5 text-[#6FA7A3]" />,
    <Eye className="w-5 h-5 text-[#6FA7A3]" />,
    <Code className="w-5 h-5 text-[#6FA7A3]" />,
  ];

  return (
    <section id="what-i-build" className="py-20 sm:py-28 border-b border-[#292D30]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-[11px] font-mono text-[#6FA7A3] tracking-wider uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6FA7A3]"></span>
            Engineering Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F2EF]">
            What I Build
          </h2>
          <p className="text-[#9A9FA3] text-sm sm:text-base leading-relaxed">
            Practical AI/ML architectures and implementations across the machine learning lifecycle.
          </p>
        </div>

        {/* 6 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHAT_I_BUILD.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#141719] border border-[#292D30] hover:border-[#6FA7A3]/40 transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#181B1D] border border-[#292D30] flex items-center justify-center group-hover:border-[#6FA7A3]/50 transition-colors">
                  {icons[idx]}
                </div>
                <h3 className="text-lg font-bold text-[#F2F2EF] group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9A9FA3] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="pt-3 border-t border-[#292D30] flex flex-wrap gap-1.5">
                {item.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#181B1D] text-[#9A9FA3] border border-[#292D30]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
