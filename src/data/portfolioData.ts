import { Project, SkillCategory, ExperienceItem, BuildCapability } from '../types';

export const PERSONAL_INFO = {
  name: 'Nayab Nayyer',
  role: 'AI/ML Engineer',
  subRole: 'Python · Machine Learning & Deep Learning',
  tagline: 'Building practical AI systems from data to deployment.',
  bio: 'Computer Science graduate and Silver Medalist with hands-on experience in Python, machine learning, NLP, and deep learning through an AI internship and practical projects. Experience building ML applications, recommendation systems, semantic-search/LLM applications, and CNN-based computer vision systems using Scikit-learn and TensorFlow. Currently strengthening AI/ML engineering skills through practical work in model development, evaluation, and deployment.',
  location: 'Lahore, Pakistan',
  email: 'nayabnayyer882@gmail.com',
  github: 'https://github.com/nayabnayyer',
  linkedin: 'https://www.linkedin.com/in/nayab-nayyer-2b6803321/',
  educationSummary: 'BS Computer Science · LCWU · 3.64/4.00 · Silver Medalist · 2nd Position',
  progression: ['Learn', 'Build', 'Evaluate', 'Deploy', 'Improve'],
};

export const PROJECTS: Project[] = [
  {
    id: 'medpredict-pro',
    number: '01',
    title: 'MedPredict Pro',
    subtitle: 'Medical Cost Prediction Web Application',
    description: 'An end-to-end machine learning application for predicting medical insurance costs from user-provided demographic and lifestyle information.',
    featured: true,
    status: 'FEATURED',
    workflow: ['Preprocessing', 'Feature Engineering', 'Random Forest', 'Evaluation', 'Deployment'],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Random Forest', 'Streamlit'],
    metrics: [
      { label: 'Evaluation Score', value: 'R² ≈ 0.89' },
      { label: 'Model Type', value: 'Ensemble Regression' },
    ],
    highlights: [
      'Comprehensive data cleaning and exploratory analysis on demographic factors',
      'Feature engineering and categorical encoding for BMI, age brackets, and smoking status',
      'Random Forest regressor optimization with hyperparameter tuning',
      'Deployed interactive Streamlit interface for instant real-time cost estimation',
    ],
    githubUrl: 'https://github.com/nayabnayyer',
    conferenceNote: {
      event: 'International Science Conference 2025',
      role: 'Poster Presenter',
      venue: 'Government Graduate College for Women, Gulberg, Lahore',
      date: 'November 6, 2025',
    },
    details: {
      problemStatement: 'Demographic and lifestyle variables strongly influence individual healthcare expense risk. MedPredict Pro builds a transparent, quantitative baseline estimation model to evaluate risk multipliers.',
      architectureDescription: 'Structured input ingestion via Streamlit UI → Scikit-learn preprocessing pipeline & encoding → Random Forest ensemble inference → Post-prediction cost breakdowns and feature impact rendering.',
      engineeringDecisions: [
        'Selected Random Forest for robust handling of non-linear risk interactions (e.g. smoker status × BMI).',
        'Implemented cross-validation to guard against demographic overfitting.',
        'Structured modular inference functions separating data transformation from UI rendering.',
      ],
    },
  },
  {
    id: 'decodebot',
    number: '02',
    title: 'DecodeBot',
    subtitle: 'Hybrid AI Chatbot Assistant',
    description: 'A hybrid conversational AI application combining rule-based NLP, semantic search, and Gemini-powered responses with integrated utility tools.',
    status: 'COMPLETED',
    workflow: ['User Input', 'Intent Routing', 'Semantic Search / Tool', 'Gemini', 'Response'],
    technologies: ['Python', 'Streamlit', 'FAISS', 'Gemini API', 'Vector Search'],
    metrics: [
      { label: 'Architecture', value: 'Hybrid Routing' },
      { label: 'Tool Integrations', value: 'Math · Weather · Web' },
    ],
    highlights: [
      'Multi-tiered intent routing directing queries to rule-based handlers or LLM reasoning',
      'FAISS vector index integration for local semantic retrieval over structured knowledge bases',
      'Integrated tool execution suite (calculator tool, weather retrieval, web search adapter)',
      'Multi-chat session management with persistent conversational context buffers',
    ],
    githubUrl: 'https://github.com/nayabnayyer/DecodeBot-AI-Chatbot-Assistant.git',
    details: {
      problemStatement: 'Pure LLM chat interfaces often suffer from latency, hallucination on factual math/tools, and unnecessary API overhead for trivial queries.',
      architectureDescription: 'Inbound prompt → Regex & intent classifier → Direct rule execution OR FAISS vector context retrieval → Gemini API augmented generation with tool-calling hooks → Streamlit multi-chat interface.',
      engineeringDecisions: [
        'Built explicit intent routing to offload exact calculations to Python eval safely rather than relying on LLM arithmetic.',
        'Used FAISS for lightweight semantic vector indexing to ground responses without heavy infrastructure.',
        'Maintained stateful multi-session conversations inside Streamlit session storage.',
      ],
    },
  },
  {
    id: 'pathai',
    number: '03',
    title: 'PathAI',
    subtitle: 'AI Career Recommendation System',
    description: 'An AI-powered career recommendation system that matches user skills and interests with candidate profiles and provides explainable skill-gap analysis.',
    status: 'COMPLETED',
    workflow: ['User Skills', 'TF-IDF', 'Cosine Similarity', 'Match Score', 'Skill Gap', 'Career Roadmap'],
    technologies: ['Python', 'Scikit-learn', 'TF-IDF', 'Cosine Similarity', 'Streamlit', 'Plotly'],
    metrics: [
      { label: 'Ranking Algorithm', value: 'Sublinear TF-IDF + Cosine Sim' },
      { label: 'Explainability', value: 'Skill Gap Breakdown' },
    ],
    highlights: [
      'Keyword expansion and sublinear TF-IDF vectorization across job role requirement corpora',
      'Cosine similarity ranking for multi-vector candidate matching',
      'Transparent matched skill vs. missing skill gap diagnostics with visual progression roadmaps',
      'Interactive Plotly visual dashboards for candidate profile distribution',
    ],
    githubUrl: 'https://github.com/nayabnayyer/PathAI-AI-Career-Recommendation-System.git',
    details: {
      problemStatement: 'Job seekers frequently struggle to identify actionable skill deficits when transitioning into technical roles. PathAI provides quantitative matching and actionable roadmaps.',
      architectureDescription: 'Skill input tokenization → Keyword expansion corpus matching → Sublinear TF-IDF matrix generation → Cosine similarity scoring → Set-theoretic skill deficit extraction → Plotly roadmap visualization.',
      engineeringDecisions: [
        'Used sublinear TF-IDF scaling to temper the impact of overly repeated common terms.',
        'Separated exact skill matches from adjacent technical competencies to output actionable learning steps.',
      ],
    },
  },
  {
    id: 'pneumonia-detection',
    number: '04',
    title: 'Explainable Pneumonia Detection from X-rays',
    subtitle: 'Chest X-ray Classification & Grad-CAM Heatmaps',
    description: 'An ongoing computer vision project exploring CNN-based classification of chest X-ray images into NORMAL and PNEUMONIA classes, with Grad-CAM explanations for model predictions.',
    status: 'ONGOING',
    workflow: ['Image Input', 'CNN Feature Extractor', 'Prediction', 'Grad-CAM Gradient Heatmap'],
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Grad-CAM', 'Image Classification'],
    metrics: [
      { label: 'Pneumonia Recall (Current Eval)', value: '97.95%' },
      { label: 'Pneumonia F1-Score (Current Eval)', value: '83.86%' },
    ],
    highlights: [
      'Active experimentation in deep convolutional neural network architectures for medical imaging',
      'Custom image normalization, data augmentation, and class imbalance mitigation pipelines',
      'Grad-CAM gradient-weighted class activation mapping to inspect spatial feature regions',
      'Thorough confusion matrix error analysis to prioritize clinical recall over naive accuracy',
    ],
    githubUrl: 'https://github.com/nayabnayyer',
    details: {
      problemStatement: 'Medical computer vision systems require high sensitivity to avoid false negatives, alongside spatial interpretability so practitioners can observe which visual patterns drove model inference.',
      architectureDescription: 'Raw DICOM/PNG X-ray pipeline → Resize & Contrast Normalization → Deep CNN feature layers → Binary Dense Classifier → Backpropagation through penultimate convolutional layer to generate Grad-CAM heatmaps.',
      engineeringDecisions: [
        'Prioritized recall (97.95%) during threshold calibration to minimize critical false-negative classifications.',
        'Implemented Grad-CAM visualization to verify the network is focusing on pulmonary infiltrates rather than scanner artifacts.',
        'Explicitly documented as an ongoing experimental benchmark without claiming clinical deployment readiness.',
      ],
    },
  },
];

export const WHAT_I_BUILD: BuildCapability[] = [
  {
    title: 'Machine Learning Applications',
    description: 'Data preprocessing, feature engineering, regression/classification modeling, statistical evaluation, and interactive web deployment.',
    technologies: ['Scikit-learn', 'Pandas', 'NumPy', 'Random Forest', 'Streamlit'],
  },
  {
    title: 'Recommendation Systems',
    description: 'Similarity-based recommendation algorithms, item and profile ranking, KNN modeling, and transparent skill/candidate matching.',
    technologies: ['KNN', 'TF-IDF', 'Cosine Similarity', 'Scikit-learn'],
  },
  {
    title: 'NLP & Semantic Search',
    description: 'Text preprocessing, vector representations, sublinear TF-IDF scaling, FAISS local semantic index retrieval, and similarity pipelines.',
    technologies: ['FAISS', 'NLTK', 'Regex', 'Vector Embeddings', 'Python'],
  },
  {
    title: 'Generative AI Applications',
    description: 'LLM application architectures, Gemini API integration, prompt engineering, hybrid intent routing, and multi-tool workflows.',
    technologies: ['Gemini API', 'Intent Routing', 'Tool Calling', 'Session Management'],
  },
  {
    title: 'Computer Vision',
    description: 'Convolutional neural networks for image classification, data augmentation pipelines, and Grad-CAM visual explainability.',
    technologies: ['TensorFlow', 'Keras', 'CNNs', 'Grad-CAM', 'OpenCV/PIL'],
  },
  {
    title: 'AI Prototyping',
    description: 'Rapid development of functional, user-facing Streamlit applications to validate ML models and algorithmic workflows.',
    technologies: ['Streamlit', 'Streamlit Cloud', 'Plotly', 'Git'],
  },
];

export const SKILL_CATEGORIES: {
  buildingWith: SkillCategory[];
  currentlyLearning: string[];
} = {
  buildingWith: [
    {
      title: 'Programming & Data',
      skills: ['Python', 'SQL', 'Pandas', 'NumPy'],
    },
    {
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'Feature Engineering', 'Model Evaluation', 'Classification', 'Regression'],
    },
    {
      title: 'Deep Learning & Computer Vision',
      skills: ['TensorFlow', 'Keras', 'CNNs', 'Neural Networks', 'Image Classification', 'Grad-CAM'],
    },
    {
      title: 'NLP & Generative AI',
      skills: ['LLM Applications', 'Gemini API', 'FAISS', 'Semantic Search', 'TF-IDF', 'Cosine Similarity', 'Text Preprocessing'],
    },
    {
      title: 'Development & Deployment',
      skills: ['Git', 'GitHub', 'Streamlit', 'Streamlit Cloud'],
    },
  ],
  currentlyLearning: ['FastAPI', 'Docker', 'RAG', 'LangChain', 'MLOps'],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'AI Intern',
    company: 'Evolvian Softwares',
    location: 'Islamabad, Pakistan',
    period: 'June 2026 — Present',
    type: 'Internship',
    badge: 'Current Role',
    highlights: [
      'Completed structured hands-on ML training covering core concepts and algorithms through the CampusX curriculum.',
      'Built a movie recommendation system using KNN and cosine similarity.',
      'Used Git and GitHub for version control and collaborative project workflows.',
      'Currently strengthening TensorFlow and deep learning fundamentals through practical implementation.',
    ],
  },
  {
    role: 'Bachelor of Science in Computer Science',
    company: 'Lahore College for Women University (LCWU)',
    location: 'Lahore, Pakistan',
    period: 'Graduated June 2026',
    type: 'Education',
    badge: 'CGPA: 3.64 / 4.00 · Silver Medalist (2nd Position)',
    highlights: [
      'Graduated with 3.64/4.00 CGPA, awarded Silver Medal (2nd Position) for academic excellence in Computer Science.',
      'Focused on machine learning, data structures, algorithms, database systems, and software engineering.',
      'Presented MedPredict Pro as a poster at the International Science Conference 2025.',
    ],
  },
  {
    role: 'Poster Presenter — MedPredict Pro',
    company: 'International Science Conference 2025',
    location: 'Govt. Graduate College for Women, Gulberg, Lahore',
    period: 'November 6, 2025',
    type: 'Presentation',
    badge: 'Academic Presentation',
    highlights: [
      'Selected to present MedPredict Pro (Medical Cost Prediction Web Application) in the competitive poster session.',
      'Demonstrated the model architecture, feature engineering approach, and evaluation results (R² ≈ 0.89) to faculty and attendees.',
    ],
  },
];
