import React, { useState } from 'react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCES } from '../data/portfolioData';
import { X, Printer, Download, Copy, Check, FileText, ArrowUpRight, ShieldCheck, Mail, MapPin, Linkedin, Github } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const plainText = `
NAYAB NAYYER
AI/ML Engineer | Python | Machine Learning & Deep Learning
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

SUMMARY:
${PERSONAL_INFO.bio}

EDUCATION:
Bachelor of Science in Computer Science
Lahore College for Women University, Lahore, Pakistan
Graduated: June 2026 | CGPA: 3.64 / 4.00
Honors: Silver Medalist — 2nd Position in Computer Science Department

EXPERIENCE:
AI Intern — Evolvian Softwares (Islamabad, Pakistan | June 2026 — Present)
- Completed structured hands-on ML training covering core concepts and algorithms (CampusX curriculum).
- Built a movie recommendation system using KNN and cosine similarity.
- Used Git and GitHub for version control and collaborative workflows.
- Currently strengthening TensorFlow and deep learning fundamentals through practical implementation.

FEATURED PROJECTS:
1. MedPredict Pro (Medical Cost Prediction Web App)
   - End-to-end regression model predicting insurance costs from demographic parameters.
   - Technologies: Python, Scikit-learn, Random Forest, Pandas, NumPy, Streamlit.
   - Evaluation: R² ≈ 0.89 on test validation sets.
   - Academic Presentation: Poster Presenter at International Science Conference 2025 (Nov 6, 2025).

2. DecodeBot (Hybrid AI Chatbot Assistant)
   - Conversational AI combining rule-based NLP, FAISS semantic search, and Gemini API.
   - Technologies: Python, Streamlit, FAISS, Gemini API, Vector Retrieval.
   - Integrated calculator, live weather, web search tools, and session memory.

3. PathAI (AI Career Recommendation System)
   - Skill-gap analysis and recommendation engine using sublinear TF-IDF and Cosine Similarity.
   - Technologies: Python, Scikit-learn, TF-IDF, Cosine Similarity, Streamlit, Plotly.

4. Explainable Pneumonia Detection from X-rays (Ongoing Work-in-Progress)
   - CNN-based chest X-ray classification with Grad-CAM gradient explainability maps.
   - Technologies: Python, TensorFlow, Keras, CNN, Grad-CAM.
   - Current Experimental Evaluation: 97.95% Pneumonia Recall, 83.86% F1-score.

TECHNICAL SKILLS:
- Programming & Data: Python, SQL, Pandas, NumPy
- Machine Learning: Scikit-learn, Feature Engineering, Model Evaluation, Classification, Regression
- Deep Learning & Computer Vision: TensorFlow, Keras, CNNs, Grad-CAM, Image Classification
- NLP & Generative AI: Gemini API, FAISS, Semantic Search, TF-IDF, Cosine Similarity, Text Preprocessing
- Tools & Deployment: Git, GitHub, Streamlit, Streamlit Cloud
- Currently Learning: FastAPI, Docker, RAG, LangChain, MLOps
    `.trim();

    navigator.clipboard.writeText(plainText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-[#141719] border border-[#292D30] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
      >
        {/* Modal Action Bar */}
        <div className="p-4 sm:px-6 bg-[#181B1D] border-b border-[#292D30] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#6FA7A3]" />
            <span className="text-xs font-mono font-semibold text-[#F2F2EF] uppercase tracking-wider">
              Curriculum Vitae / ATS Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyPlainText}
              className="px-3 py-1.5 rounded-md text-xs font-mono text-[#F2F2EF] bg-[#0D0F10] border border-[#292D30] hover:border-[#6FA7A3]/50 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-[#6FA7A3]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText ? 'Copied Plain Text!' : 'Copy Plain Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-md text-xs font-mono text-[#0D0F10] bg-[#6FA7A3] hover:bg-[#85bcb8] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-[#9A9FA3] hover:text-[#F2F2EF] bg-[#0D0F10] border border-[#292D30] hover:border-[#6FA7A3]/50 transition-colors cursor-pointer ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0D0F10] text-[#F2F2EF] font-sans">
          
          {/* Header */}
          <div className="border-b border-[#292D30] pb-6 space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-[#F2F2EF]">
                  {PERSONAL_INFO.name}
                </h1>
                <div className="text-sm font-mono text-[#6FA7A3] mt-0.5">
                  AI/ML Engineer · Python · Machine Learning & Deep Learning
                </div>
              </div>
              <div className="text-right text-xs font-mono text-[#9A9FA3] space-y-0.5">
                <div>{PERSONAL_INFO.location}</div>
                <div>{PERSONAL_INFO.email}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#9A9FA3] pt-1">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-[#6FA7A3] underline">
                github.com/nayabnayyer
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#6FA7A3] underline">
                linkedin.com/in/nayab-nayyer-2b6803321
              </a>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#6FA7A3] uppercase">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#9A9FA3] leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#6FA7A3] uppercase">
              Education
            </h2>
            <div className="space-y-1">
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <strong className="text-[#F2F2EF]">Bachelor of Science in Computer Science</strong>
                  <div className="text-xs text-[#9A9FA3]">Lahore College for Women University (LCWU) · Lahore, Pakistan</div>
                </div>
                <div className="text-right text-xs font-mono text-[#9A9FA3]">
                  Graduated June 2026
                </div>
              </div>
              <div className="text-xs font-mono text-[#6FA7A3]">
                CGPA: 3.64 / 4.00 · Silver Medalist — 2nd Position in Department
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#6FA7A3] uppercase">
              Practical Experience
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <strong className="text-[#F2F2EF]">AI Intern</strong>
                  <div className="text-xs text-[#9A9FA3]">Evolvian Softwares · Islamabad, Pakistan</div>
                </div>
                <div className="text-xs font-mono text-[#9A9FA3]">
                  June 2026 — Present
                </div>
              </div>
              <ul className="list-disc list-inside text-xs text-[#9A9FA3] space-y-1 leading-relaxed pl-1">
                <li>Completed structured hands-on ML training covering core concepts and algorithms through the CampusX curriculum.</li>
                <li>Built a movie recommendation system using KNN and cosine similarity.</li>
                <li>Used Git and GitHub for version control and collaborative project workflows.</li>
                <li>Currently strengthening TensorFlow and deep learning fundamentals through practical implementation.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#6FA7A3] uppercase">
              Key Engineering Projects
            </h2>

            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1.5">
                <div className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <strong className="text-[#F2F2EF]">{proj.title}</strong>
                    <span className="text-xs text-[#9A9FA3]"> — {proj.subtitle}</span>
                    {proj.status === 'ONGOING' && (
                      <span className="ml-2 px-1.5 py-0.2 rounded text-[10px] font-mono bg-[#181B1D] text-[#6FA7A3] border border-[#292D30]">
                        ONGOING
                      </span>
                    )}
                  </div>
                  {proj.metrics && (
                    <div className="text-xs font-mono text-[#6FA7A3]">
                      {proj.metrics[0].value}
                    </div>
                  )}
                </div>

                <p className="text-xs text-[#9A9FA3] leading-relaxed">
                  {proj.description}
                </p>

                <div className="text-[11px] font-mono text-[#9A9FA3]">
                  <strong className="text-[#F2F2EF]">Technologies:</strong> {proj.technologies.join(', ')}
                </div>

                {proj.conferenceNote && (
                  <div className="text-[11px] font-mono text-[#6FA7A3] bg-[#141719] p-1.5 rounded border border-[#292D30]">
                    ★ {proj.conferenceNote.role} — {proj.conferenceNote.event} ({proj.conferenceNote.date})
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#6FA7A3] uppercase">
              Technical Competencies
            </h2>

            <div className="space-y-1.5 text-xs">
              <div>
                <strong className="text-[#F2F2EF]">Programming & Data:</strong>{' '}
                <span className="text-[#9A9FA3]">Python, SQL, Pandas, NumPy</span>
              </div>
              <div>
                <strong className="text-[#F2F2EF]">Machine Learning:</strong>{' '}
                <span className="text-[#9A9FA3]">Scikit-learn, Feature Engineering, Model Evaluation, Classification, Regression</span>
              </div>
              <div>
                <strong className="text-[#F2F2EF]">Deep Learning & Computer Vision:</strong>{' '}
                <span className="text-[#9A9FA3]">TensorFlow, Keras, CNNs, Neural Networks, Image Classification, Grad-CAM</span>
              </div>
              <div>
                <strong className="text-[#F2F2EF]">NLP & Generative AI:</strong>{' '}
                <span className="text-[#9A9FA3]">LLM Applications, Gemini API, FAISS, Semantic Search, TF-IDF, Cosine Similarity</span>
              </div>
              <div>
                <strong className="text-[#F2F2EF]">Development & Deployment:</strong>{' '}
                <span className="text-[#9A9FA3]">Git, GitHub, Streamlit, Streamlit Cloud</span>
              </div>
              <div className="pt-1">
                <strong className="text-[#6FA7A3]">Currently Learning:</strong>{' '}
                <span className="text-[#9A9FA3]">FastAPI, Docker, RAG, LangChain, MLOps</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
