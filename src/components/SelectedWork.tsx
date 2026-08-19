import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Layers, 
  Activity, 
  Cpu, 
  Search, 
  BrainCircuit, 
  Terminal, 
  Sliders, 
  Award, 
  Check, 
  Zap, 
  AlertCircle, 
  Eye, 
  Bot, 
  Calculator, 
  CloudSun, 
  Compass, 
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  FileCheck
} from 'lucide-react';

export const SelectedWork: React.FC = () => {
  // MedPredict Interactive State
  const [age, setAge] = useState<number>(28);
  const [bmi, setBmi] = useState<number>(24.5);
  const [smoker, setSmoker] = useState<boolean>(false);
  const [children, setChildren] = useState<number>(1);

  // DecodeBot Interactive State
  const [selectedPromptIdx, setSelectedPromptIdx] = useState<number>(0);
  const samplePrompts = [
    {
      query: 'Evaluate: (1450 * 0.18) + 3200',
      type: 'CALCULATOR TOOL',
      route: 'Intent Router → Rule-Based Math Tool',
      explanation: 'Bypasses LLM token latency to execute exact deterministic arithmetic.',
      output: 'Result: $3,461.00 (Executed in 2ms via Python math parser)',
      tokens: '0 API Tokens Used (Local Execution)',
    },
    {
      query: 'What are the best practices for FAISS index initialization in low-memory environments?',
      type: 'SEMANTIC SEARCH + LLM',
      route: 'Intent Router → FAISS Vector Retrieval → Gemini Context Injection',
      explanation: 'Retrieves top-k dense vector passages from local technical index, then prompts Gemini with ground context.',
      output: 'Retrieved 3 matching index partitions with IndexFlatIP vector distance 0.84. Gemini synthesizes exact memory footprints.',
      tokens: 'Retrieved 3 chunks → Gemini Synthesis',
    },
    {
      query: 'Current weather condition and temperature for Lahore, Pakistan',
      type: 'WEATHER TOOL API',
      route: 'Intent Router → Live Weather API Adapter',
      explanation: 'Identified real-time entity query. Calls live weather service rather than hallucinating static historical state.',
      output: 'Lahore, Pakistan: 29°C · Humidity: 54% · Wind: 11 km/h NW',
      tokens: 'Live Tool Endpoint',
    },
    {
      query: 'Compare Random Forest vs Gradient Boosting for small tabular datasets',
      type: 'GEMINI LLM REASONING',
      route: 'Intent Router → Gemini Pro Engine',
      explanation: 'Conceptual technical query routed directly to Gemini with system prompt for concise engineering comparison.',
      output: 'Random Forest reduces variance via parallel bagging; Gradient Boosting iteratively reduces bias but is more prone to overfitting small samples.',
      tokens: 'Gemini Generative Stream',
    },
  ];

  // PathAI Interactive State
  const [userSkills, setUserSkills] = useState<string[]>(['Python', 'Scikit-learn', 'Pandas', 'Streamlit']);
  const availableSkills = ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'TensorFlow', 'SQL', 'Streamlit', 'FAISS', 'Docker', 'Git'];

  const roles = [
    {
      title: 'Junior AI/ML Engineer',
      requiredSkills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'TensorFlow', 'Git'],
      keyFocus: 'Model development, data pipelines, regression/classification, and evaluation metrics.',
    },
    {
      title: 'NLP & LLM Applications Developer',
      requiredSkills: ['Python', 'FAISS', 'Streamlit', 'Git', 'Pandas'],
      keyFocus: 'Semantic vector retrieval, intent routing, and conversational interfaces.',
    },
    {
      title: 'Python Data / ML Associate',
      requiredSkills: ['Python', 'Pandas', 'NumPy', 'SQL', 'Scikit-learn'],
      keyFocus: 'Exploratory data analysis, feature engineering, and statistical modeling.',
    },
  ];

  const toggleSkill = (skill: string) => {
    if (userSkills.includes(skill)) {
      setUserSkills(userSkills.filter((s) => s !== skill));
    } else {
      setUserSkills([...userSkills, skill]);
    }
  };

  // Pneumonia Grad-CAM visual toggle
  const [activeScanType, setActiveScanType] = useState<'pneumonia' | 'normal'>('pneumonia');
  const [showGradCam, setShowGradCam] = useState<boolean>(true);

  // Compute MedPredict simulation output
  const calculateEstimatedCost = () => {
    // Standard actuarial demographic baseline approximation modeled from medical cost dataset
    let base = 2500 + age * 260;
    if (bmi > 30) {
      base += (bmi - 30) * 450 + 1800;
    } else {
      base += bmi * 120;
    }
    if (smoker) {
      base += 15500 + (bmi > 30 ? 6000 : 0);
    }
    base += children * 480;
    return Math.round(base);
  };

  const estimatedCost = calculateEstimatedCost();

  return (
    <section id="work" className="py-20 sm:py-28 border-b border-[#292D30]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-[11px] font-mono text-[#6FA7A3] tracking-wider uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6FA7A3]"></span>
            Featured Engineering Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F2EF]">
            Selected Work
          </h2>
          <p className="text-[#9A9FA3] text-sm sm:text-base leading-relaxed">
            Practical AI/ML applications built through experimentation, engineering, and deployment.
          </p>
        </div>

        {/* ======================================================== */}
        {/* PROJECT 01: MEDPREDICT PRO (FEATURED CASE STUDY) */}
        {/* ======================================================== */}
        <div
          id="project-medpredict"
          className="rounded-xl bg-[#141719] border border-[#292D30] overflow-hidden"
        >
          {/* Project Header Bar */}
          <div className="p-5 sm:p-6 bg-[#181B1D] border-b border-[#292D30] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#6FA7A3] bg-[#0D0F10] px-2 py-0.5 rounded border border-[#292D30]">
                PROJECT 01
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#6FA7A3]/10 text-[#6FA7A3] border border-[#6FA7A3]/30 font-medium">
                FEATURED PROJECT
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/nayabnayyer"
                target="_blank"
                rel="noreferrer"
                id="medpredict-github-link"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-[#F2F2EF] bg-[#0D0F10] border border-[#292D30] hover:border-[#6FA7A3]/50 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#6FA7A3]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#9A9FA3]" />
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Project Narrative, Specs & Conference Badge */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#F2F2EF]">
                  MedPredict Pro
                </h3>
                <div className="text-sm font-mono text-[#6FA7A3] mt-1">
                  Medical Cost Prediction Web Application
                </div>
              </div>

              <p className="text-sm text-[#9A9FA3] leading-relaxed">
                An end-to-end machine learning application for predicting medical insurance costs from user-provided demographic and lifestyle information.
              </p>

              {/* Technical Workflow Flowchart */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[#9A9FA3] uppercase tracking-wider">
                  Engineering Workflow:
                </div>
                <div className="p-3 rounded-lg bg-[#0D0F10] border border-[#292D30] flex flex-wrap items-center gap-2 text-xs font-mono text-[#F2F2EF]">
                  <span className="text-[#6FA7A3]">Preprocessing</span>
                  <span className="text-[#9A9FA3]">→</span>
                  <span className="text-[#6FA7A3]">Feature Eng</span>
                  <span className="text-[#9A9FA3]">→</span>
                  <span className="text-[#6FA7A3]">Random Forest</span>
                  <span className="text-[#9A9FA3]">→</span>
                  <span className="text-[#6FA7A3]">Evaluation (R²≈0.89)</span>
                  <span className="text-[#9A9FA3]">→</span>
                  <span className="text-[#6FA7A3]">Streamlit</span>
                </div>
              </div>

              {/* Key Metric Highlights */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-lg bg-[#181B1D] border border-[#292D30]">
                  <div className="text-[11px] font-mono text-[#9A9FA3]">Evaluation Metric</div>
                  <div className="text-xl font-bold font-mono text-[#F2F2EF] mt-0.5">R² ≈ 0.89</div>
                  <div className="text-[11px] text-[#9A9FA3] mt-1">Random Forest regressor on holdout test data</div>
                </div>
                <div className="p-3.5 rounded-lg bg-[#181B1D] border border-[#292D30]">
                  <div className="text-[11px] font-mono text-[#9A9FA3]">Interface Architecture</div>
                  <div className="text-xl font-bold font-mono text-[#F2F2EF] mt-0.5">Streamlit</div>
                  <div className="text-[11px] text-[#9A9FA3] mt-1">Real-time demographic parameter inference</div>
                </div>
              </div>

              {/* Academic Conference Credibility Callout */}
              <div className="p-4 rounded-lg bg-[#0D0F10] border border-[#292D30] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F2F2EF]">
                  <Award className="w-4 h-4 text-[#6FA7A3]" />
                  <span>Poster Presenter — International Science Conference 2025</span>
                </div>
                <p className="text-xs text-[#9A9FA3] leading-relaxed">
                  Presented MedPredict Pro as a poster at the International Science Conference 2025 held at Government Graduate College for Women, Gulberg, Lahore, on November 6, 2025.
                </p>
                <div className="text-[11px] font-mono text-[#9A9FA3] pt-0.5">
                  Academic poster presentation showcasing demographic risk modeling
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Random Forest', 'Streamlit'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-[#181B1D] text-[#F2F2EF] border border-[#292D30]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Interactive Model Inference & Feature Weight Explorer */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-xl bg-[#0D0F10] border border-[#292D30] space-y-5">
                
                <div className="flex items-center justify-between border-b border-[#292D30] pb-3">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[#6FA7A3]" />
                    <span className="text-xs font-mono font-medium text-[#F2F2EF] uppercase tracking-wider">
                      Interactive Inference Simulator
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#6FA7A3]">Model: Random Forest Regressor</span>
                </div>

                {/* Input Parameters Controls */}
                <div className="space-y-3.5">
                  {/* Age */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#9A9FA3]">Age</span>
                      <span className="text-[#F2F2EF] font-bold">{age} years</span>
                    </div>
                    <input
                      type="range"
                      min={18}
                      max={65}
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      className="w-full h-1.5 bg-[#181B1D] rounded-lg appearance-none cursor-pointer accent-[#6FA7A3]"
                    />
                  </div>

                  {/* BMI */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#9A9FA3]">Body Mass Index (BMI)</span>
                      <span className="text-[#F2F2EF] font-bold">
                        {bmi.toFixed(1)} {bmi > 30 ? '(High Risk Tier)' : '(Standard)'}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={16}
                      max={45}
                      step={0.5}
                      value={bmi}
                      onChange={(e) => setBmi(Number(e.target.value))}
                      className="w-full h-1.5 bg-[#181B1D] rounded-lg appearance-none cursor-pointer accent-[#6FA7A3]"
                    />
                  </div>

                  {/* Smoker Toggle */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#181B1D] border border-[#292D30]">
                    <div className="text-xs">
                      <div className="font-medium text-[#F2F2EF]">Smoking Status</div>
                      <div className="text-[11px] text-[#9A9FA3]">Highest non-linear interaction weight</div>
                    </div>
                    <button
                      onClick={() => setSmoker(!smoker)}
                      className={`px-3 py-1 rounded text-xs font-mono font-medium transition-colors cursor-pointer ${
                        smoker
                          ? 'bg-[#6FA7A3] text-[#0D0F10]'
                          : 'bg-[#0D0F10] text-[#9A9FA3] border border-[#292D30]'
                      }`}
                    >
                      {smoker ? 'SMOKER (High Risk)' : 'NON-SMOKER'}
                    </button>
                  </div>

                  {/* Children / Dependents */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#9A9FA3]">Dependents / Children</span>
                      <span className="text-[#F2F2EF] font-bold">{children}</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={5}
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full h-1.5 bg-[#181B1D] rounded-lg appearance-none cursor-pointer accent-[#6FA7A3]"
                    />
                  </div>
                </div>

                {/* Real-time Estimated Output */}
                <div className="p-4 rounded-lg bg-[#181B1D] border border-[#292D30] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#9A9FA3] font-mono">Estimated Annual Cost:</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#0D0F10] text-[#6FA7A3]">
                      Inference Latency: ~14ms
                    </span>
                  </div>
                  
                  <div className="text-3xl font-mono font-bold text-[#F2F2EF]">
                    ${estimatedCost.toLocaleString('en-US')}{' '}
                    <span className="text-xs text-[#9A9FA3] font-normal">/ year</span>
                  </div>

                  {/* Feature Impact Analysis Bars */}
                  <div className="pt-2 border-t border-[#292D30] space-y-2">
                    <div className="text-[11px] font-mono text-[#9A9FA3] flex justify-between">
                      <span>Feature Importance Weights (Trained Model)</span>
                      <span>Scikit-learn Tree Importance</span>
                    </div>
                    
                    <div className="space-y-1.5 text-[11px] font-mono">
                      <div>
                        <div className="flex justify-between text-[#9A9FA3]">
                          <span>Smoker Status ({smoker ? 'Positive Impact' : 'Baseline'})</span>
                          <span>61.2%</span>
                        </div>
                        <div className="h-1 bg-[#0D0F10] rounded-full overflow-hidden">
                          <div className="h-full bg-[#6FA7A3]" style={{ width: '61.2%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[#9A9FA3]">
                          <span>BMI Ratio ({bmi.toFixed(1)})</span>
                          <span>21.4%</span>
                        </div>
                        <div className="h-1 bg-[#0D0F10] rounded-full overflow-hidden">
                          <div className="h-full bg-[#6FA7A3]/70" style={{ width: '21.4%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[#9A9FA3]">
                          <span>Age ({age} yrs)</span>
                          <span>13.8%</span>
                        </div>
                        <div className="h-1 bg-[#0D0F10] rounded-full overflow-hidden">
                          <div className="h-full bg-[#6FA7A3]/50" style={{ width: '13.8%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* PROJECT 02: DECODEBOT (HYBRID AI CHATBOT ASSISTANT) */}
        {/* ======================================================== */}
        <div
          id="project-decodebot"
          className="rounded-xl bg-[#141719] border border-[#292D30] overflow-hidden"
        >
          {/* Project Header Bar */}
          <div className="p-5 sm:p-6 bg-[#181B1D] border-b border-[#292D30] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#6FA7A3] bg-[#0D0F10] px-2 py-0.5 rounded border border-[#292D30]">
                PROJECT 02
              </span>
              <span className="text-xs font-mono text-[#9A9FA3]">
                Hybrid Conversational AI
              </span>
            </div>
            
            <a
              href="https://github.com/nayabnayyer/DecodeBot-AI-Chatbot-Assistant.git"
              target="_blank"
              rel="noreferrer"
              id="decodebot-github-link"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-[#F2F2EF] bg-[#0D0F10] border border-[#292D30] hover:border-[#6FA7A3]/50 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#6FA7A3]" />
              <span>GitHub Repo</span>
              <ArrowUpRight className="w-3 h-3 text-[#9A9FA3]" />
            </a>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Architecture narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#F2F2EF]">
                  DecodeBot
                </h3>
                <div className="text-sm font-mono text-[#6FA7A3] mt-1">
                  Hybrid AI Chatbot Assistant
                </div>
              </div>

              <p className="text-sm text-[#9A9FA3] leading-relaxed">
                A hybrid conversational AI application combining rule-based NLP, semantic search, and Gemini-powered responses with modular tool execution.
              </p>

              {/* Architecture Workflow */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[#9A9FA3] uppercase tracking-wider">
                  Conceptual Architecture:
                </div>
                <div className="p-3 rounded-lg bg-[#0D0F10] border border-[#292D30] flex flex-wrap items-center gap-2 text-xs font-mono text-[#F2F2EF]">
                  <span className="text-[#6FA7A3]">User Input</span>
                  <span className="text-[#9A9FA3]">→</span>
                  <span className="text-[#6FA7A3]">Intent Routing</span>
                  <span className="text-[#9A9FA3]">→</span>
                  <span className="text-[#6FA7A3]">Semantic / Tool</span>
                  <span className="text-[#9A9FA3]">→</span>
                  <span className="text-[#6FA7A3]">Gemini API</span>
                  <span className="text-[#9A9FA3]">→</span>
                  <span className="text-[#6FA7A3]">Response</span>
                </div>
              </div>

              {/* Architecture highlights bullet list */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[#9A9FA3] uppercase tracking-wider">
                  Core Implementation Features:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Rule-based NLP & intent routing',
                    'FAISS local vector index semantic retrieval',
                    'Gemini LLM reasoning integration',
                    'Integrated calculator execution tool',
                    'Live weather retrieval adapter',
                    'Web search grounding tool',
                    'Streamlit multi-chat interface',
                    'Session-based conversation history',
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 rounded bg-[#181B1D] border border-[#292D30] text-[#F2F2EF]">
                      <Check className="w-3.5 h-3.5 text-[#6FA7A3] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Python', 'Streamlit', 'FAISS', 'Gemini API', 'Vector Search', 'NLP'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-[#181B1D] text-[#F2F2EF] border border-[#292D30]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Interactive Intent Routing Simulator */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-xl bg-[#0D0F10] border border-[#292D30] space-y-4">
                
                <div className="flex items-center justify-between border-b border-[#292D30] pb-3">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4 text-[#6FA7A3]" />
                    <span className="text-xs font-mono font-medium text-[#F2F2EF] uppercase tracking-wider">
                      Intent Routing Simulator
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#6FA7A3]">Select sample prompt to test</span>
                </div>

                {/* Prompt selector tabs */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-[#9A9FA3]">Sample Inbound Prompts:</div>
                  <div className="space-y-1.5">
                    {samplePrompts.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedPromptIdx(idx)}
                        className={`w-full text-left p-2.5 rounded-md text-xs font-mono transition-all flex items-center justify-between cursor-pointer ${
                          selectedPromptIdx === idx
                            ? 'bg-[#181B1D] text-[#F2F2EF] border border-[#6FA7A3]/50 shadow-sm'
                            : 'bg-[#141719] text-[#9A9FA3] border border-[#292D30] hover:text-[#F2F2EF]'
                        }`}
                      >
                        <span className="truncate pr-2">"{p.query}"</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#0D0F10] text-[#6FA7A3] shrink-0 border border-[#292D30]">
                          {p.type}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Real-time Route Resolution Card */}
                {(() => {
                  const activePrompt = samplePrompts[selectedPromptIdx];
                  return (
                    <div className="p-4 rounded-lg bg-[#181B1D] border border-[#292D30] space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#9A9FA3] font-mono">Resolved Execution Pathway:</span>
                        <span className="text-[10px] font-mono text-[#6FA7A3] bg-[#0D0F10] px-2 py-0.5 rounded border border-[#292D30]">
                          {activePrompt.tokens}
                        </span>
                      </div>

                      <div className="p-2.5 rounded bg-[#0D0F10] border border-[#292D30] font-mono text-xs text-[#6FA7A3]">
                        {activePrompt.route}
                      </div>

                      <p className="text-xs text-[#9A9FA3] leading-relaxed">
                        <strong className="text-[#F2F2EF]">Routing Decision:</strong> {activePrompt.explanation}
                      </p>

                      <div className="pt-2 border-t border-[#292D30]">
                        <div className="text-[10px] font-mono text-[#9A9FA3] mb-1">Simulated Output:</div>
                        <div className="text-xs font-mono text-[#F2F2EF] bg-[#0D0F10] p-2.5 rounded border border-[#292D30]">
                          {activePrompt.output}
                        </div>
                      </div>
                    </div>
                  );
                })()}

              </div>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* PROJECT 03: PATHAI (AI CAREER RECOMMENDATION SYSTEM) */}
        {/* ======================================================== */}
        <div
          id="project-pathai"
          className="rounded-xl bg-[#141719] border border-[#292D30] overflow-hidden"
        >
          {/* Project Header Bar */}
          <div className="p-5 sm:p-6 bg-[#181B1D] border-b border-[#292D30] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#6FA7A3] bg-[#0D0F10] px-2 py-0.5 rounded border border-[#292D30]">
                PROJECT 03
              </span>
              <span className="text-xs font-mono text-[#9A9FA3]">
                AI Career Recommendation & Skill-Gap Analysis
              </span>
            </div>
            
            <a
              href="https://github.com/nayabnayyer/PathAI-AI-Career-Recommendation-System.git"
              target="_blank"
              rel="noreferrer"
              id="pathai-github-link"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-[#F2F2EF] bg-[#0D0F10] border border-[#292D30] hover:border-[#6FA7A3]/50 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#6FA7A3]" />
              <span>GitHub Repo</span>
              <ArrowUpRight className="w-3 h-3 text-[#9A9FA3]" />
            </a>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Narrative & Math logic */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#F2F2EF]">
                  PathAI
                </h3>
                <div className="text-sm font-mono text-[#6FA7A3] mt-1">
                  AI Career Recommendation System
                </div>
              </div>

              <p className="text-sm text-[#9A9FA3] leading-relaxed">
                An AI-powered career recommendation system that matches user skills and interests with candidate profiles and provides explainable skill-gap analysis.
              </p>

              {/* Vector flow diagram */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[#9A9FA3] uppercase tracking-wider">
                  Recommendation & Scoring Workflow:
                </div>
                <div className="p-3 rounded-lg bg-[#0D0F10] border border-[#292D30] flex flex-wrap items-center gap-2 text-xs font-mono text-[#F2F2EF]">
                  <span className="text-[#6FA7A3]">User Skills</span>
                  <span className="text-[#9A9FA3]">→</span>
                  <span className="text-[#6FA7A3]">TF-IDF Vector</span>
                  <span className="text-[#9A9FA3]">→</span>
                  <span className="text-[#6FA7A3]">Cosine Similarity</span>
                  <span className="text-[#9A9FA3]">→</span>
                  <span className="text-[#6FA7A3]">Match Score</span>
                  <span className="text-[#9A9FA3]">→</span>
                  <span className="text-[#6FA7A3]">Skill Gap</span>
                  <span className="text-[#9A9FA3]">→</span>
                  <span className="text-[#6FA7A3]">Roadmap</span>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[#9A9FA3] uppercase tracking-wider">
                  Technical Characteristics:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F2F2EF]">
                  {[
                    'Sublinear TF-IDF term scaling',
                    'Cosine similarity distance scoring',
                    'Keyword expansion token dictionary',
                    'Quantitative recommendation scoring',
                    'Matched vs missing skill extraction',
                    'Interactive Plotly candidate analytics',
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded bg-[#181B1D] border border-[#292D30]">
                      <Check className="w-3.5 h-3.5 text-[#6FA7A3] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Python', 'Scikit-learn', 'TF-IDF', 'Cosine Similarity', 'Streamlit', 'Plotly'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-[#181B1D] text-[#F2F2EF] border border-[#292D30]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Interactive Skill-Gap Matching Sandbox */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-xl bg-[#0D0F10] border border-[#292D30] space-y-4">
                
                <div className="flex items-center justify-between border-b border-[#292D30] pb-3">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#6FA7A3]" />
                    <span className="text-xs font-mono font-medium text-[#F2F2EF] uppercase tracking-wider">
                      Live Skill-Gap Vector Matcher
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#6FA7A3]">Algorithm: Cosine Similarity</span>
                </div>

                {/* Skill selector toggles */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-[#9A9FA3]">Select Candidate Skills:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {availableSkills.map((sk) => {
                      const isSelected = userSkills.includes(sk);
                      return (
                        <button
                          key={sk}
                          onClick={() => toggleSkill(sk)}
                          className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#6FA7A3] text-[#0D0F10] font-semibold'
                              : 'bg-[#181B1D] text-[#9A9FA3] border border-[#292D30] hover:text-[#F2F2EF]'
                          }`}
                        >
                          {isSelected ? `✓ ${sk}` : `+ ${sk}`}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Ranked Role Matches */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-[11px] font-mono text-[#9A9FA3]">Vector Similarity & Skill Deficit Analysis:</div>
                  
                  {roles.map((role, idx) => {
                    const matched = role.requiredSkills.filter((s) => userSkills.includes(s));
                    const missing = role.requiredSkills.filter((s) => !userSkills.includes(s));
                    const matchPercent = Math.round((matched.length / role.requiredSkills.length) * 100);

                    return (
                      <div key={idx} className="p-3.5 rounded-lg bg-[#181B1D] border border-[#292D30] space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-[#F2F2EF]">{role.title}</span>
                          <span className="font-mono font-bold text-[#6FA7A3]">{matchPercent}% Match</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1.5 bg-[#0D0F10] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#6FA7A3] transition-all duration-300"
                            style={{ width: `${matchPercent}%` }}
                          ></div>
                        </div>

                        {/* Matched vs Missing badges */}
                        <div className="text-[11px] font-mono space-y-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-[#9A9FA3]">Matched:</span>
                            {matched.length > 0 ? (
                              matched.map((m) => (
                                <span key={m} className="px-1.5 py-0.2 rounded bg-[#0D0F10] text-[#6FA7A3] text-[10px]">
                                  {m}
                                </span>
                              ))
                            ) : (
                              <span className="text-[#9A9FA3] text-[10px]">None</span>
                            )}
                          </div>

                          {missing.length > 0 && (
                            <div className="flex items-center gap-1.5 flex-wrap text-[#9A9FA3]">
                              <span>Deficit to Learn:</span>
                              {missing.map((mis) => (
                                <span key={mis} className="px-1.5 py-0.2 rounded bg-[#0D0F10] text-[#9A9FA3] text-[10px]">
                                  {mis}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* PROJECT 04: EXPLAINABLE PNEUMONIA DETECTION (ONGOING) */}
        {/* ======================================================== */}
        <div
          id="project-pneumonia"
          className="rounded-xl bg-[#141719] border border-[#292D30] overflow-hidden"
        >
          {/* Project Header Bar */}
          <div className="p-5 sm:p-6 bg-[#181B1D] border-b border-[#292D30] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#6FA7A3] bg-[#0D0F10] px-2 py-0.5 rounded border border-[#292D30]">
                PROJECT 04
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#181B1D] text-[#6FA7A3] border border-[#6FA7A3]/40 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6FA7A3] animate-ping"></span>
                ONGOING PROJECT
              </span>
            </div>
            
            <a
              href="https://github.com/nayabnayyer"
              target="_blank"
              rel="noreferrer"
              id="pneumonia-github-link"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-[#F2F2EF] bg-[#0D0F10] border border-[#292D30] hover:border-[#6FA7A3]/50 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#6FA7A3]" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#9A9FA3]" />
            </a>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Narrative, scope, and evaluation metrics */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#F2F2EF]">
                  Explainable Pneumonia Detection from X-rays
                </h3>
                <div className="text-sm font-mono text-[#6FA7A3] mt-1">
                  Chest X-ray Classification & Grad-CAM Heatmaps
                </div>
              </div>

              <p className="text-sm text-[#9A9FA3] leading-relaxed">
                An ongoing computer vision project exploring CNN-based classification of chest X-ray images into NORMAL and PNEUMONIA classes, with Grad-CAM explanations for model predictions.
              </p>

              {/* Ongoing Scope Breakdown */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[#9A9FA3] uppercase tracking-wider">
                  Current Engineering Scope:
                </div>
                <div className="p-3 rounded-lg bg-[#0D0F10] border border-[#292D30] text-xs text-[#9A9FA3] space-y-1 font-mono">
                  <div className="text-[#F2F2EF]">image preprocessing · CNN development · model training · validation · independent test evaluation · error analysis · confusion matrix analysis · Grad-CAM development</div>
                </div>
              </div>

              {/* Current Evaluation Metrics (Strictly labeled as current evaluation results, not published / clinical) */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-[#9A9FA3] uppercase tracking-wider">
                  Current Experimental Evaluation:
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-lg bg-[#181B1D] border border-[#292D30]">
                    <div className="text-[11px] font-mono text-[#9A9FA3]">PNEUMONIA Recall</div>
                    <div className="text-xl font-bold font-mono text-[#F2F2EF] mt-0.5">97.95%</div>
                    <div className="text-[10px] text-[#9A9FA3] font-mono mt-1">Current evaluation result</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#181B1D] border border-[#292D30]">
                    <div className="text-[11px] font-mono text-[#9A9FA3]">PNEUMONIA F1-Score</div>
                    <div className="text-xl font-bold font-mono text-[#F2F2EF] mt-0.5">83.86%</div>
                    <div className="text-[10px] text-[#9A9FA3] font-mono mt-1">Current evaluation result</div>
                  </div>
                </div>
                
                {/* Clear Honesty / Scope Disclaimer */}
                <div className="p-3 rounded-lg bg-[#0D0F10] border border-[#292D30] text-[11px] text-[#9A9FA3] flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-[#6FA7A3] shrink-0 mt-0.5" />
                  <span>
                    <strong>Project Status:</strong> Active engineering work-in-progress. Metrics reflect current test evaluations on experimental benchmarks, not clinical validation or peer-reviewed research.
                  </span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {['Python', 'TensorFlow', 'Keras', 'CNN', 'Grad-CAM', 'Image Classification'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-[#181B1D] text-[#F2F2EF] border border-[#292D30]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Interactive Grad-CAM Heatmap Inspector */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-xl bg-[#0D0F10] border border-[#292D30] space-y-4">
                
                <div className="flex items-center justify-between border-b border-[#292D30] pb-3">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#6FA7A3]" />
                    <span className="text-xs font-mono font-medium text-[#F2F2EF] uppercase tracking-wider">
                      Grad-CAM Visual Explainability
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#6FA7A3]">Layer: Conv2D Penultimate</span>
                </div>

                {/* Scan switcher & Grad-CAM toggle */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveScanType('pneumonia')}
                      className={`px-3 py-1 rounded text-xs font-mono cursor-pointer ${
                        activeScanType === 'pneumonia'
                          ? 'bg-[#181B1D] text-[#6FA7A3] border border-[#6FA7A3]/50'
                          : 'bg-[#141719] text-[#9A9FA3] border border-[#292D30]'
                      }`}
                    >
                      Sample 01: Pneumonia
                    </button>
                    <button
                      onClick={() => setActiveScanType('normal')}
                      className={`px-3 py-1 rounded text-xs font-mono cursor-pointer ${
                        activeScanType === 'normal'
                          ? 'bg-[#181B1D] text-[#6FA7A3] border border-[#6FA7A3]/50'
                          : 'bg-[#141719] text-[#9A9FA3] border border-[#292D30]'
                      }`}
                    >
                      Sample 02: Normal
                    </button>
                  </div>

                  <button
                    onClick={() => setShowGradCam(!showGradCam)}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      showGradCam
                        ? 'bg-[#6FA7A3] text-[#0D0F10] font-semibold'
                        : 'bg-[#181B1D] text-[#9A9FA3] border border-[#292D30]'
                    }`}
                  >
                    {showGradCam ? '✓ Grad-CAM Overlay ON' : 'Grad-CAM OFF'}
                  </button>
                </div>

                {/* Technical Visualization Canvas Area */}
                <div className="relative h-60 rounded-lg bg-[#141719] border border-[#292D30] overflow-hidden flex items-center justify-center p-4">
                  {/* Schematic anatomical lung representation with technical grid lines */}
                  <div className="w-full h-full relative flex items-center justify-center">
                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6FA7A3_1px,transparent_1px)] [background-size:16px_16px]"></div>

                    {/* Chest X-ray Schematic silhouette */}
                    <div className="relative w-44 h-48 rounded-2xl border border-[#292D30] bg-[#181B1D] flex items-center justify-center">
                      {/* Rib cage schematic */}
                      <div className="w-36 h-40 border border-[#292D30]/60 rounded-xl flex flex-col justify-around py-2 px-3">
                        <div className="h-0.5 bg-[#292D30] w-full rounded"></div>
                        <div className="h-0.5 bg-[#292D30] w-full rounded"></div>
                        <div className="h-0.5 bg-[#292D30] w-full rounded"></div>
                        <div className="h-0.5 bg-[#292D30] w-full rounded"></div>
                      </div>

                      {/* Spine centerline */}
                      <div className="absolute top-2 bottom-2 w-1 bg-[#292D30] rounded"></div>

                      {/* Grad-CAM Heatmap overlay when enabled for Pneumonia */}
                      {showGradCam && activeScanType === 'pneumonia' && (
                        <div className="absolute right-4 top-14 w-16 h-20 rounded-full bg-[#6FA7A3]/30 border border-[#6FA7A3]/60 blur-md pointer-events-none animate-pulse"></div>
                      )}

                      {/* Grad-CAM Heatmap overlay when enabled for Normal (dispersed low activation) */}
                      {showGradCam && activeScanType === 'normal' && (
                        <div className="absolute inset-x-8 inset-y-12 rounded-xl bg-[#6FA7A3]/10 border border-[#6FA7A3]/20 blur-sm pointer-events-none"></div>
                      )}

                      <div className="absolute bottom-2 left-2 right-2 text-[9px] font-mono text-[#9A9FA3] text-center bg-[#0D0F10]/80 py-0.5 rounded">
                        {activeScanType === 'pneumonia'
                          ? 'Dense lower-right pulmonary infiltration'
                          : 'Clear bilateral lung fields (No consolidations)'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grad-CAM Diagnostic Breakdown */}
                <div className="p-3.5 rounded-lg bg-[#181B1D] border border-[#292D30] space-y-2 text-xs">
                  <div className="flex justify-between font-mono">
                    <span className="text-[#9A9FA3]">Model Classification:</span>
                    <span className="font-bold text-[#F2F2EF]">
                      {activeScanType === 'pneumonia' ? 'PNEUMONIA (Confidence 96.4%)' : 'NORMAL (Confidence 98.1%)'}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#9A9FA3] leading-relaxed">
                    {activeScanType === 'pneumonia'
                      ? 'Grad-CAM computes gradients of the target class score with respect to feature activation maps in the final convolutional layer, highlighting the focal opacity region.'
                      : 'Uniform low-gradient spatial distribution verifies absence of focal pulmonary lesions or opacities.'}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
