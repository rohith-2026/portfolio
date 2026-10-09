import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    title: "Research Paper Assistant",
    shortTitle: "Research Assistant",
    description:
      "A secure research companion for uploading papers, predicting subject areas, finding related work, and organizing research activity.",
    details: [
      "Built a document workflow for PDF and DOCX research files with subject prediction and paper discovery.",
      "Connected academic sources including Semantic Scholar, Crossref, arXiv, and OpenAlex.",
      "Added authentication, query history, analytics, document protection, and a responsive dashboard.",
    ],
    stack: ["Document intelligence", "Research APIs", "Secure workflow"],
    metric: "99.46% accuracy",
    period: "Jan 2026 - Feb 2026",
    accent: "lavender",
    image: "/images/projects/research-paper-assistant-dashboard.png",
    github: "https://github.com/rohith-2026/research_paper_assistent",
  },
  {
    title: "Credit Scoring Intelligence System",
    shortTitle: "Credit Scoring",
    description:
      "An ML-powered fintech application for credit-risk assessment and loan underwriting with clear, actionable outputs.",
    details: [
      "Engineered 86 features from eight applicant inputs using a structured credit-risk dataset.",
      "Trained and evaluated a classification workflow with ROC-AUC, accuracy, recall, and precision metrics.",
      "Added risk category, confidence score, review drivers, validation, error handling, and deployment-ready structure.",
    ],
    stack: ["Machine learning", "Feature engineering", "Model evaluation"],
    metric: "76.15% ROC-AUC",
    period: "2026",
    accent: "peach",
    image: "/images/projects/credit-scoring-dashboard.jpg",
    github: "https://github.com/rohith-2026/code_alpha_CSI",
  },
  {
    title: "Handwritten Character Recognition",
    shortTitle: "Character Recognition",
    description:
      "An AI drawing-canvas application that recognizes digits, uppercase letters, and lowercase letters in real time.",
    details: [
      "Created a 62-class handwritten-character recognition workflow using the EMNIST ByClass dataset.",
      "Added live prediction, confidence scoring, drawing-canvas input, and model evaluation outputs.",
      "Included accuracy, loss, and confusion-matrix artifacts to make the model behavior easier to inspect.",
    ],
    stack: ["Deep learning", "Computer vision", "Model evaluation"],
    metric: "Real-time inference",
    period: "2026",
    accent: "mint",
    image: "/images/projects/handwritten-character-recognition.jpg",
    github: "https://github.com/rohith-2026/code_alpha_HW",
  },
  {
    title: "Accident Detection System",
    shortTitle: "Accident Detection",
    description:
      "A machine-learning concept using motion and sensor data to predict road accidents and support safety alerts.",
    details: [
      "Prepared datasets and trained detection logic for real-time prediction use cases.",
      "Focused on responsive road-safety scenarios and practical alert support.",
      "Evaluated the workflow with an emphasis on reliable signal interpretation.",
    ],
    stack: ["Machine learning", "Sensor data", "Model training"],
    metric: "Road-safety ML",
    period: "Sep 2024 - Dec 2024",
    accent: "blue",
    image: "/images/projects/accident-detection.svg",
  },
  {
    title: "Object Detection System",
    shortTitle: "Object Detection",
    description:
      "A computer-vision project focused on recognition, classification, and practical visual pattern detection.",
    details: [
      "Applied image-processing techniques for object recognition and classification.",
      "Explored visual feature extraction for automation-focused scenarios.",
      "Focused on efficient inference and clear prediction outputs.",
    ],
    stack: ["Computer vision", "Image processing", "Pattern detection"],
    metric: "Visual recognition",
    period: "Feb 2024 - Apr 2024",
    accent: "lavender",
    image: "/images/projects/object-detection.svg",
  },
  {
    title: "Image Steganography",
    shortTitle: "Image Steganography",
    description:
      "A GUI-based application for secure data hiding and message extraction while preserving image quality.",
    details: [
      "Developed a workflow for embedding hidden messages in images.",
      "Supported straightforward hidden-data retrieval through a user-friendly interface.",
      "Focused on preserving visual quality during secure data hiding.",
    ],
    stack: ["Python", "GUI development", "Image processing"],
    metric: "Secure data hiding",
    period: "Mar 2023 - Apr 2023",
    accent: "peach",
    image: "/images/projects/image-steganography.svg",
  },
];
