// Import skill icon images
import pythonImg from '@/assets/python.png';
import mlImg from '@/assets/machinelearning.png';
import dlImg from '@/assets/deeplearning.png';
import opencvImg from '@/assets/opencv.png';
import yoloImg from '@/assets/yolo.png';
import reactImg from '@/assets/react.png';
import jsImg from '@/assets/nodejs.png';
import htmlImg from '@/assets/html.png';
import cssImg from '@/assets/css.png';
import tailwindImg from '@/assets/tailwindcss.png';
import nodeImg from '@/assets/JavaScript.png';
import expressImg from '@/assets/expressjs.png';
import mongoImg from '@/assets/mongodb.png';
import sqlImg from '@/assets/sql.png';
import cppImg from '@/assets/c.png';
import csharpImg from '@/assets/csharp.png';
import restapiImg from '@/assets/restapi.png';
import githubImg from '@/assets/github.png';
import vsImg from '@/assets/visualstudio.png';
import msofficeImg from '@/assets/msoffice.png';

export const SKILLS = [
  { name: 'Python',           icon: pythonImg,    level: 88, cat: 'ai' },
  { name: 'Machine Learning', icon: mlImg,        level: 72, cat: 'ai' },
  { name: 'Deep Learning',    icon: dlImg,        level: 65, cat: 'ai' },
  { name: 'YOLO',             icon: yoloImg,      level: 68, cat: 'ai' },
  { name: 'React.js',         icon: reactImg,     level: 75, cat: 'frontend' },
  { name: 'JavaScript',       icon: jsImg,        level: 78, cat: 'frontend' },
  { name: 'HTML',             icon: htmlImg,      level: 88, cat: 'frontend' },
  { name: 'CSS',              icon: cssImg,       level: 82, cat: 'frontend' },
  { name: 'Tailwind CSS',     icon: tailwindImg,  level: 80, cat: 'frontend' },
  { name: 'Node.js',          icon: nodeImg,      level: 70, cat: 'backend' },
  { name: 'Express.js',       icon: expressImg,   level: 68, cat: 'backend' },
  { name: 'MongoDB',          icon: mongoImg,     level: 65, cat: 'backend' },
  { name: 'SQL / SQL Server', icon: sqlImg,       level: 72, cat: 'backend' },
  { name: 'C++',              icon: cppImg,       level: 82, cat: 'backend' },
  { name: 'C#',               icon: csharpImg,    level: 65, cat: 'backend' },
  { name: 'REST APIs',        icon: restapiImg,   level: 75, cat: 'backend' },
  { name: 'Git & GitHub',     icon: githubImg,    level: 85, cat: 'tools' },
  { name: 'Visual Studio',    icon: vsImg,        level: 80, cat: 'tools' },
  { name: 'MS Office',        icon: msofficeImg,  level: 90, cat: 'tools' },
  { name: 'OpenCV',           icon: opencvImg,    level: 70, cat: 'ai' },
];

export const EXPERIENCE = [
  {
    period: '2025',
    title: 'Computer Vision Intern',
    org: 'University of Engineering and Technology (UET), Lahore',
    desc: [
      'Worked on computer vision projects involving image processing and model development.',
      'Gained hands-on experience with OpenCV and real-time detection pipelines.',
    ],
  },
  {
    period: '2022',
    title: 'Web Development Intern',
    org: 'CodeSoft',
    desc: [
      '3-month internship focused on hands-on web development tasks.',
      'Worked on real-world projects to strengthen practical coding skills.',
    ],
  },
];

export const EDUCATION = [
  {
    period: 'Dec 2022 — Dec 2026',
    title: 'Bachelor of Science — Computer Science',
    org: 'University of Engineering and Technology (UET), Lahore',
    desc: [
      'Core focus: Software Engineering, AI/ML, Web Development, Computer Vision.',
      'Final Year Project: MedMentor AI — RAG-powered medical assistant for endocrinology.',
    ],
  },
  {
    period: 'Jan 2019 — Jan 2021',
    title: 'Intermediate (Pre-Engineering)',
    org: 'Board of Intermediate and Secondary Education (BISE), Lahore',
    desc: [
      'Completed with Physics, Chemistry, and Mathematics.',
      'Built strong analytical and problem-solving foundation.',
    ],
  },
];

export const CERTIFICATIONS = [
  {
    icon: '🔌',
    title: 'Introduction and Programming with IoT Boards',
    issuer: 'Postech (Pohang University of Science & Technology)',
    date: 'Jul 2023 – Aug 2023',
  },
  {
    icon: '🤖',
    title: 'Machine Learning Fundamentals',
    issuer: 'Self-Study / Online',
    date: '2024',
  },
  {
    icon: '👁️',
    title: 'Computer Vision with OpenCV & YOLO',
    issuer: 'Project-Based Learning',
    date: '2024',
  },
  {
    icon: '🌐',
    title: 'Full Stack Web Development (MERN)',
    issuer: 'Self-Directed',
    date: '2023–2024',
  },
];

export const MEDMENTOR_FEATURES = [
  'RAG-powered Q&A for endocrinology conditions',
  'Virtual patient simulation for clinical training',
  'AI chatbot with real-time medical knowledge retrieval',
  'Diagnostic assistance and treatment suggestions',
  'Secure, privacy-preserving architecture',
];

export const MEDMENTOR_STACK = [
  'Python', 'LangChain', 'RAG', 'Vector DB', 'FastAPI', 'React', 'OpenAI API',
];

export const SOCIAL = {
  github: 'https://github.com/MohammadZaid90',
  linkedin: 'https://www.linkedin.com/in/mohammad-zaid-sibghatullah-b9846224a',
  email: 'sheikhzaid768@gmail.com',
  phone: '+92 316 4259818',
};