import Project from '../models/Project.js';

export const getProjects = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) filter.category = req.query.category;
    if (req.query.featured === 'true') filter.featured = true;
    const projects = await Project.find(filter).sort({ order: 1, createdAt: -1 });
    res.json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!project) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const SEED_PROJECTS = [
  {
    title: 'MedMentor AI',
    description:
      'RAG-powered AI medical assistant for endocrinology featuring virtual patient simulation, intelligent clinical Q&A, and treatment suggestions. Built as Final Year Project at UET Lahore.',
    emoji: '🏥',
    bgGradient: 'linear-gradient(135deg,rgba(108,99,255,0.22),rgba(56,189,248,0.12))',
    tags: ['Python', 'RAG', 'LangChain', 'React', 'FastAPI', 'Vector DB'],
    githubUrl: 'https://github.com/MohammadZaid90',
    category: 'ai',
    featured: true,
    order: 0,
  },
  {
    title: 'Object Detection System',
    description:
      'Real-time object detection using YOLOv8 and OpenCV capable of detecting and tracking multiple objects simultaneously in live video streams with high accuracy.',
    emoji: '🎯',
    bgGradient: 'linear-gradient(135deg,rgba(56,189,248,0.18),rgba(239,68,68,0.08))',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Computer Vision', 'Deep Learning'],
    githubUrl: 'https://github.com/MohammadZaid90',
    category: 'cv',
    order: 1,
  },
  {
    title: 'Leaf Disease Detection',
    description:
      'CNN-based plant leaf disease classifier using deep learning and computer vision. Helps farmers identify crop health issues early to reduce yield loss.',
    emoji: '🌿',
    bgGradient: 'linear-gradient(135deg,rgba(34,211,160,0.18),rgba(108,99,255,0.08))',
    tags: ['Python', 'CNN', 'OpenCV', 'Deep Learning', 'TensorFlow'],
    githubUrl: 'https://github.com/MohammadZaid90',
    category: 'cv',
    order: 2,
  },
  {
    title: 'AI Medicine Recommendation',
    description:
      'ML-powered system analyzing patient symptoms and medical history to provide intelligent, confidence-scored medicine recommendations.',
    emoji: '💊',
    bgGradient: 'linear-gradient(135deg,rgba(168,85,247,0.18),rgba(56,189,248,0.08))',
    tags: ['Python', 'Machine Learning', 'NLP', 'scikit-learn'],
    githubUrl: 'https://github.com/MohammadZaid90',
    category: 'ai',
    order: 3,
  },
  {
    title: 'Spam Classifier — Zero Trust',
    description:
      'Advanced spam classification using Zero Trust Security principles, ML-based detection, and multi-layered email filtering architecture to eliminate threats.',
    emoji: '🛡️',
    bgGradient: 'linear-gradient(135deg,rgba(34,211,160,0.15),rgba(56,189,248,0.08))',
    tags: ['Python', 'Machine Learning', 'Cybersecurity', 'NLP'],
    githubUrl: 'https://github.com/MohammadZaid90',
    category: 'ai',
    order: 4,
  },
  {
    title: 'Web Food Ordering App',
    description:
      'Full-stack MERN food ordering application with real-time order tracking, shopping cart, user authentication, and a complete restaurant management dashboard.',
    emoji: '🍕',
    bgGradient: 'linear-gradient(135deg,rgba(251,146,60,0.18),rgba(108,99,255,0.08))',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    githubUrl: 'https://github.com/MohammadZaid90',
    category: 'web',
    order: 5,
  },
  {
    title: 'Inventory Management System',
    description:
      'Full-featured inventory tracking system with product management, low-stock alerts, supplier management, and comprehensive sales reporting.',
    emoji: '📦',
    bgGradient: 'linear-gradient(135deg,rgba(239,68,68,0.15),rgba(108,99,255,0.08))',
    tags: ['Python', 'SQL', 'CRUD', 'Tkinter'],
    githubUrl: 'https://github.com/MohammadZaid90',
    category: 'web',
    order: 6,
  },
  {
    title: 'Database Management Project',
    description:
      'Comprehensive DBMS project with full ER diagrams, normalized schemas, complex SQL queries, stored procedures, triggers, and views.',
    emoji: '🗄️',
    bgGradient: 'linear-gradient(135deg,rgba(56,189,248,0.15),rgba(34,211,160,0.08))',
    tags: ['SQL', 'DBMS', 'ER Modeling', 'SQL Server'],
    githubUrl: 'https://github.com/MohammadZaid90',
    category: 'systems',
    order: 7,
  },
  {
    title: 'DSA Project',
    description:
      'Comprehensive Data Structures and Algorithms implementations including trees, graphs, dynamic programming, sorting, and searching with performance benchmarks.',
    emoji: '📊',
    bgGradient: 'linear-gradient(135deg,rgba(108,99,255,0.18),rgba(56,189,248,0.08))',
    tags: ['C++', 'Algorithms', 'Data Structures', 'OOP'],
    githubUrl: 'https://github.com/MohammadZaid90',
    category: 'systems',
    order: 8,
  },
  {
    title: 'DOS Shell Project',
    description:
      'DOS Shell simulation implementing core OS functionalities including process management, file system operations, and memory management in a CLI environment.',
    emoji: '💻',
    bgGradient: 'linear-gradient(135deg,rgba(34,211,160,0.15),rgba(108,99,255,0.08))',
    tags: ['C++', 'OS Concepts', 'Shell', 'Systems'],
    githubUrl: 'https://github.com/MohammadZaid90',
    category: 'systems',
    order: 9,
  },
  {
    title: 'Mini Excel CLI App',
    description:
      'Command-line spreadsheet application inspired by Excel, supporting cell referencing, basic formulas (SUM, AVG, MAX, MIN), and tabular data management.',
    emoji: '📋',
    bgGradient: 'linear-gradient(135deg,rgba(251,191,36,0.15),rgba(108,99,255,0.08))',
    tags: ['C++', 'CLI', 'Data Structures', 'OOP'],
    githubUrl: 'https://github.com/MohammadZaid90',
    category: 'systems',
    order: 10,
  },
];

export const seedProjects = async (req, res) => {
  try {
    await Project.deleteMany({});
    const created = await Project.insertMany(SEED_PROJECTS);
    res.status(201).json({
      success: true,
      count: created.length,
      message: `${created.length} projects seeded successfully`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
