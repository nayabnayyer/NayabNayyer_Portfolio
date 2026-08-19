import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin, Mail, CheckCircle2, Cpu, Database, Network, Binary, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

type WorkflowType = 'end-to-end' | 'hybrid-rag' | 'vector-match' | 'vision-explain';

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowType>('end-to-end');

  const workflows = {
    'end-to-end': {
      title: 'ML Predictive Pipeline (MedPredict)',
      steps: [
        { label: 'Raw Ingestion', sub: 'Tabular Demographics', tech: 'Pandas' },
        { label: 'Feature Transform', sub: 'Encoding & Scaling', tech: 'Scikit-learn' },
        { label: 'Ensemble Model', sub: 'Random Forest Regressor', tech: 'Python' },
        { label: 'Evaluation', sub: 'R² ≈ 0.89 Metric', tech: 'NumPy' },
        { label: 'Deployment', sub: 'Web Inference UI', tech: 'Streamlit' },
      ],
      output: 'Predicted Cost & Multiplier Impact',
      accentLabel: 'Supervised ML',
    },
    'hybrid-rag': {
      title: 'Hybrid Conversational AI (DecodeBot)',
      steps: [
        { label: 'User Prompt', sub: 'Natural Query', tech: 'Streamlit' },
        { label: 'Intent Router', sub: 'Regex & Rule Classifier', tech: 'Python' },
        { label: 'Semantic Index', sub: 'FAISS Vector Search', tech: 'Vector DB' },
        { label: 'LLM Reasoning', sub: 'Context Augmentation', tech: 'Gemini API' },
        { label: 'Structured Output', sub: 'Math / Weather / Chat', tech: 'Tools API' },
      ],
      output: 'Grounded Real-Time Response',
      accentLabel: 'Hybrid NLP & LLM',
    },
    'vector-match': {
      title: 'Explainable Matching (PathAI)',
      steps: [
        { label: 'Skill Profiles', sub: 'User Competencies', tech: 'Corpus' },
        { label: 'Token Expansion', sub: 'Keyword Extraction', tech: 'NLTK/Regex' },
        { label: 'Vector Matrix', sub: 'Sublinear TF-IDF', tech: 'Scikit-learn' },
        { label: 'Similarity Match', sub: 'Cosine Distance Scoring', tech: 'NumPy' },
        { label: 'Gap Diagnostic', sub: 'Deficit Roadmap Graph', tech: 'Plotly' },
      ],
      output: 'Ranked Roles + Skill Gap Analysis',
      accentLabel: 'Recommendation Engine',
    },
    'vision-explain': {
      title: 'Deep Vision & Grad-CAM (Pneumonia Detection)',
      steps: [
        { label: 'Chest X-Ray', sub: 'Grayscale 224x224', tech: 'OpenCV/PIL' },
        { label: 'Augmentation', sub: 'Normalizing Batch', tech: 'TensorFlow' },
        { label: 'CNN Feature Extractor', sub: 'Conv2D + MaxPool', tech: 'Keras' },
        { label: 'Classification', sub: '97.95% Recall Eval', tech: 'Binary Dense' },
        { label: 'Grad-CAM', sub: 'Gradient Activation Map', tech: 'Explainability' },
      ],
      output: 'Prediction + Spatial Attention Heatmap',
      accentLabel: 'Computer Vision (Ongoing)',
    },
  };

  const currentWf = workflows[activeWorkflow];

  return (
    <section id="hero" className="pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-[#292D30]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Personal positioning & core signals */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181B1D] border border-[#292D30] text-[11px] font-mono text-[#6FA7A3] tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6FA7A3] animate-pulse"></span>
              AI/ML ENGINEER · PYTHON · MACHINE LEARNING
            </div>

            {/* Main headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F2EF] leading-[1.18]">
              Building practical AI systems from data to deployment.
            </h1>

            {/* Supporting description */}
            <p className="text-[#9A9FA3] text-base sm:text-lg leading-relaxed max-w-xl">
              Computer Science graduate and Silver Medalist focused on machine learning, deep learning, NLP, computer vision, and generative AI applications.
            </p>

            {/* Credibility Indicator Card */}
            <div className="p-3.5 rounded-lg bg-[#141719] border border-[#292D30] flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#181B1D] border border-[#292D30] flex items-center justify-center shrink-0 text-[#6FA7A3]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-[#F2F2EF]">
                  BS Computer Science · LCWU · Silver Medalist (2nd Position)
                </div>
                <div className="text-[#9A9FA3] font-mono text-[11px] mt-0.5">
                  CGPA 3.64 / 4.00 · Graduated June 2026 · Lahore, Pakistan
                </div>
              </div>
            </div>

            {/* Primary Actions & CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-cta-work"
                href="#work"
                className="px-5 py-2.5 rounded-md text-xs font-semibold text-[#0D0F10] bg-[#6FA7A3] hover:bg-[#85bcb8] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>View My Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                id="hero-cta-resume"
                onClick={onOpenResume}
                className="px-4 py-2.5 rounded-md text-xs font-medium text-[#F2F2EF] bg-[#181B1D] border border-[#292D30] hover:border-[#6FA7A3]/60 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#6FA7A3]" />
                <span>Download Résumé</span>
              </button>
            </div>

            {/* Social & Contact links */}
            <div className="flex items-center gap-5 pt-3 text-xs text-[#9A9FA3] font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#F2F2EF] transition-colors"
                id="hero-github-link"
              >
                <Github className="w-4 h-4 text-[#6FA7A3]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#9A9FA3]" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#F2F2EF] transition-colors"
                id="hero-linkedin-link"
              >
                <Linkedin className="w-4 h-4 text-[#6FA7A3]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#9A9FA3]" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-[#F2F2EF] transition-colors"
                id="hero-email-link"
              >
                <Mail className="w-4 h-4 text-[#6FA7A3]" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Abstract Technical System Visualization */}
          <div className="lg:col-span-6">
            <div className="rounded-xl bg-[#141719] border border-[#292D30] overflow-hidden shadow-xl">
              
              {/* Diagram Header / Workflow Selector */}
              <div className="p-4 bg-[#181B1D] border-b border-[#292D30] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#6FA7A3]"></div>
                  <span className="text-xs font-mono font-medium text-[#F2F2EF] tracking-wider uppercase">
                    System Architecture Workflow
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0D0F10] text-[#6FA7A3] border border-[#292D30]">
                  {currentWf.accentLabel}
                </span>
              </div>

              {/* Interactive Architecture Selector Tabs */}
              <div className="px-4 pt-3 pb-2 border-b border-[#292D30] bg-[#0D0F10]/50 flex gap-2 overflow-x-auto text-[11px] font-mono">
                <button
                  onClick={() => setActiveWorkflow('end-to-end')}
                  className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                    activeWorkflow === 'end-to-end'
                      ? 'bg-[#181B1D] text-[#6FA7A3] border border-[#292D30]'
                      : 'text-[#9A9FA3] hover:text-[#F2F2EF]'
                  }`}
                >
                  01 MedPredict
                </button>
                <button
                  onClick={() => setActiveWorkflow('hybrid-rag')}
                  className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                    activeWorkflow === 'hybrid-rag'
                      ? 'bg-[#181B1D] text-[#6FA7A3] border border-[#292D30]'
                      : 'text-[#9A9FA3] hover:text-[#F2F2EF]'
                  }`}
                >
                  02 DecodeBot
                </button>
                <button
                  onClick={() => setActiveWorkflow('vector-match')}
                  className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                    activeWorkflow === 'vector-match'
                      ? 'bg-[#181B1D] text-[#6FA7A3] border border-[#292D30]'
                      : 'text-[#9A9FA3] hover:text-[#F2F2EF]'
                  }`}
                >
                  03 PathAI
                </button>
                <button
                  onClick={() => setActiveWorkflow('vision-explain')}
                  className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                    activeWorkflow === 'vision-explain'
                      ? 'bg-[#181B1D] text-[#6FA7A3] border border-[#292D30]'
                      : 'text-[#9A9FA3] hover:text-[#F2F2EF]'
                  }`}
                >
                  04 Vision (Grad-CAM)
                </button>
              </div>

              {/* Technical Flow Diagram Body */}
              <div className="p-5 space-y-4">
                <div className="text-xs font-semibold text-[#F2F2EF] flex items-center justify-between">
                  <span>{currentWf.title}</span>
                  <span className="text-[10px] text-[#9A9FA3] font-mono">Interactive pipeline</span>
                </div>

                {/* Pipeline Steps in sequence */}
                <div className="space-y-2 relative">
                  {currentWf.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="group p-2.5 rounded-md bg-[#181B1D] border border-[#292D30] hover:border-[#6FA7A3]/40 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded bg-[#0D0F10] border border-[#292D30] flex items-center justify-center font-mono text-[10px] text-[#6FA7A3]">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="text-xs font-medium text-[#F2F2EF] group-hover:text-white">
                            {step.label}
                          </div>
                          <div className="text-[11px] text-[#9A9FA3]">
                            {step.sub}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#6FA7A3] bg-[#0D0F10] px-2 py-0.5 rounded border border-[#292D30]">
                        {step.tech}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pipeline Output Result Box */}
                <div className="p-3 rounded-md bg-[#0D0F10] border border-[#292D30] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#6FA7A3]" />
                    <span className="text-[#9A9FA3]">Output:</span>
                    <span className="font-mono text-[#F2F2EF]">{currentWf.output}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#6FA7A3]">READY</span>
                </div>
              </div>

              {/* Footer Tech Stack Pills */}
              <div className="p-3.5 bg-[#181B1D] border-t border-[#292D30] flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] text-[#9A9FA3] font-mono">Core Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'Scikit-learn', 'TensorFlow', 'FAISS', 'Gemini API', 'Streamlit'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#141719] text-[#F2F2EF] border border-[#292D30]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
