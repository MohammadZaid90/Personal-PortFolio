import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Loader2, RefreshCw } from 'lucide-react';
import { projectsAPI } from '@/utils/api';
import Reveal from '@/components/ui/Reveal';

import medMentorImg from '@/assets/projects/MedMentor.png';
import steganographyImg from '@/assets/projects/Stegnography.jpeg';
import handGestureImg from '@/assets/projects/HandGesture.webp';
import medicineImg from '@/assets/projects/MedicineReccomendation.png';
import smsSpamImg from '@/assets/projects/SMSSPAM.jpeg';
import foodOrderingImg from '@/assets/projects/FoodOrdering.png';
import inventoryImg from '@/assets/projects/productsInventory.png';
import databaseImg from '@/assets/projects/CLOBased.jpeg';
import dsaImg from '@/assets/projects/infix-postfix.jpg';
import dosShellImg from '@/assets/projects/DOSSHELL.jpeg';
import miniExcelImg from '@/assets/projects/miniexcel.jpeg';

const FALLBACK_PROJECTS = [
  { _id: '1', title: 'MedMentor AI (FYP)', description: 'RAG-powered AI medical assistant for endocrinology. Virtual patient simulation and clinical Q&A. Final Year Project at UET Lahore.', image: medMentorImg, tags: ['Python','RAG','LangChain','React','FastAPI'], githubUrl: 'https://github.com/MohammadZaid90/medmentor-frontend', category: 'ai', featured: true },
  { _id: '2', title: 'Image Steganography', description: 'An advanced information security application designed to securely conceal and extract confidential data or messages within carrier images without altering their visual quality.', image: steganographyImg, tags: ['Python', 'Cryptography', 'Image Processing', 'Information Security'], githubUrl: 'https://github.com/MohammadZaid90/Steganography-Informatio-Scurity', category: 'security'},
  { _id: '3', title: 'Hand Gesture Detection System', description: 'Real-time hand gesture recognition and tracking system built with computer vision techniques to enable contactless human-computer interaction.', image: handGestureImg, tags: ['Python', 'MediaPipe', 'OpenCV', 'Computer Vision'], githubUrl: 'https://github.com/MohammadZaid90/CV_HAND_GESTURE_DTECTION_SYSTEM', category: 'cv' },
  { _id: '4', title: 'AI Medicine Recommendation', description: 'ML-powered system analyzing symptoms to provide intelligent, confidence-scored medicine recommendations.', image: medicineImg, tags: ['Python','Machine Learning','NLP','scikit-learn'], githubUrl: 'https://github.com/MohammadZaid90/Medicine-Recomendation-System', category: 'ai' },
  { _id: '5', title: 'Spam Classifier — Zero Trust', description: 'ML-based spam detection with Zero Trust Security architecture and multi-layered email filtering.', image: smsSpamImg, tags: ['Python','ML','Cybersecurity','NLP'], githubUrl: 'https://github.com/MohammadZaid90/IS_Proje-ct_SMS_SPAM_CLASSIFIER', category: 'ai' },
  { _id: '6', title: 'Web Food Ordering App', description: 'Full-stack MERN food ordering app with real-time order tracking, cart, authentication, and restaurant dashboard.', image: foodOrderingImg, tags: ['React','Node.js','MongoDB','Express','JWT'], githubUrl: 'https://github.com/MohammadZaid90/mern-food-ordering-app-frontend', category: 'web' },
  { _id: '7', title: 'Inventory Management System', description: 'Full-featured inventory tracker with stock alerts, supplier management, and sales reporting.', image: inventoryImg, tags: ['Python','SQL','CRUD','Tkinter'], githubUrl: 'https://github.com/MohammadZaid90/Inventory-Management-System', category: 'web' },
  { _id: '8', title: 'Database Project', description: 'DBMS project with ER diagrams, normalized schemas, complex SQL queries, stored procedures, and triggers.', image: databaseImg, tags: ['SQL','DBMS','ER Modeling','SQL Server'], githubUrl: 'https://github.com/MohammadZaid90/DataBase-Mids-Project', category: 'systems' },
  { _id: '9', title: 'DSA Conversion', description: 'C++ implementations of Data Structures and Algorithms to convert infix to prefix and then posfix expression.', image: dsaImg, tags: ['C++','Algorithms','Data Structures','OOP'], githubUrl: 'https://github.com/MohammadZaid90/DSA-Week-3', category: 'systems' },
  { _id: '10', title: 'DOS Shell Project', description: 'DOS Shell simulation with OS functionalities: process management, file system operations, and memory management.', image: dosShellImg, tags: ['C++','OS Concepts','Shell','Systems'], githubUrl: 'https://github.com/MohammadZaid90/DOS-Shell-Project-DSA', category: 'systems' },
  { _id: '11', title: 'Mini Excel CLI App', description: 'CLI spreadsheet app with cell referencing, SUM/AVG/MAX/MIN formulas, and tabular data management.', image: miniExcelImg, tags: ['C++','CLI','Data Structures','OOP'], githubUrl: 'https://github.com/MohammadZaid90/Mini-Excel-Project-DSA', category: 'systems' },
];

const CAT_FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'web', label: 'Web Dev' },
  { key: 'cv', label: 'Computer Vision' },
  { key: 'systems', label: 'Systems' },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
      style={{
        background: 'var(--surface)',
        border: project.featured
          ? '1px solid rgba(108,99,255,0.35)'
          : '1px solid var(--border)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)';
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = project.featured
          ? 'rgba(108,99,255,0.35)'
          : 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {project.featured && (
        <div
          className="px-4 py-1.5 text-xs font-semibold text-center"
          style={{ background: 'linear-gradient(90deg,rgba(108,99,255,0.3),rgba(56,189,248,0.2))', color: '#a78bfa' }}
        >
          ⭐ Final Year Project
        </div>
      )}

      <div
        className="h-44 overflow-hidden relative"
        style={{ background: 'var(--surface-2)' }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ display: 'block' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          loading="lazy"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.25) 100%)' }}
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags?.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[0.68rem] rounded"
              style={{
                background: 'rgba(108,99,255,0.09)',
                border: '1px solid rgba(108,99,255,0.2)',
                color: '#a78bfa',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="font-head font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
        <p
          className="text-sm leading-relaxed flex-1 mb-5"
          style={{ color: 'var(--text-secondary)' }}
        >
          {project.description}
        </p>

        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs transition-all duration-200"
              style={{ border: '1px solid var(--border-soft)', color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#6c63ff';
                e.currentTarget.style.color = '#6c63ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-soft)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <Github size={13} /> GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs text-white transition-all duration-200"
              style={{ background: '#6c63ff', border: '1px solid #6c63ff' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#a78bfa')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#6c63ff')}
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);
  const [cat, setCat] = useState('all');

  const load = async () => {
    setLoading(true);
    try {
      const res = await projectsAPI.getAll();
      const data = res.data.data || [];
      if (data.length === 0) throw new Error('Empty');
      setProjects(data);
      setUsingFallback(false);
    } catch {
      setProjects(FALLBACK_PROJECTS);
      setUsingFallback(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const filtered = cat === 'all' ? projects : projects.filter((p) => p.category === cat);

  return (
    <section id="projects" className="py-24 px-6" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <span className="section-tag">Portfolio</span>
          <h2 className="font-head font-extrabold mb-4" style={{fontSize:"clamp(1.6rem,7vw,3rem)"}}>Projects Showcase</h2>
          <p className="max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            11 projects spanning AI, web development, systems programming, and computer vision.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap gap-2 justify-center mb-10">
          {CAT_FILTERS.map((c) => (
            <button
              key={c.key}
              onClick={() => setCat(c.key)}
              className="px-5 py-2 rounded-full text-sm transition-all duration-200 font-body"
              style={
                cat === c.key
                  ? { background: '#6c63ff', border: '1px solid #6c63ff', color: 'white' }
                  : { background: 'transparent', border: '1px solid var(--border-soft)', color: 'var(--text-secondary)' }
              }
            >
              {c.label}
            </button>
          ))}
        </Reveal>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin" size={32} style={{ color: '#6c63ff' }} />
          </div>
        ) : (
          <>
            {usingFallback && (
              <div className="text-center mb-6">
                <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                  Showing cached data — backend offline
                </p>
                <button
                  onClick={load}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-all duration-200"
                  style={{ border: '1px solid var(--border-soft)', color: 'var(--text-muted)' }}
                >
                  <RefreshCw size={11} /> Retry
                </button>
              </div>
            )}
            <AnimatePresence mode="wait">
              <motion.div
                key={cat}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '1.25rem' }}
              >
                {filtered.map((p, i) => (
                  <ProjectCard key={p._id} project={p} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
}