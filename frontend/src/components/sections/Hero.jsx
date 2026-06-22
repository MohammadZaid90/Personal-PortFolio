import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { SOCIAL } from '@/utils/data';

const TECH_PILLS = [
  'Python', 'React.js', 'Node.js', 'C++', 'Machine Learning',
  'OpenCV', 'YOLO', 'MongoDB', 'SQL', 'Git',
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-24 pb-16"
    >
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full animate-drift"
          style={{
            width: '400px', height: '400px',
            background: 'var(--orb1)', filter: 'blur(80px)',
            top: '-100px', left: '-100px',
          }}
        />
        <div
          className="absolute rounded-full animate-drift"
          style={{
            width: '350px', height: '350px',
            background: 'var(--orb2)', filter: 'blur(80px)',
            bottom: '-50px', right: '-50px', animationDelay: '-4s',
          }}
        />
        <div
          className="absolute rounded-full animate-drift"
          style={{
            width: '250px', height: '250px',
            background: 'var(--orb3)', filter: 'blur(80px)',
            top: '40%', left: '40%', transform: 'translate(-50%,-50%)',
            animationDelay: '-8s',
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          }}
        />
      </div>

      <div className="w-full max-w-3xl mx-auto text-center relative z-10">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border mb-6 sm:mb-8"
          style={{
            background: 'var(--badge-bg)',
            borderColor: 'var(--badge-border)',
            color: 'var(--green)',
          }}
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse-slow"
            style={{ background: 'var(--green)' }}
          />
          <span className="text-xs font-medium">Available for Internships &amp; Opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-head font-extrabold leading-[1.05] mb-4 w-full"
          style={{ fontSize: 'clamp(2rem, 10vw, 5.5rem)' }}
        >
          <span className="gradient-text">Mohammad Zaid</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="font-light mb-3 px-2"
          style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.85rem, 3.5vw, 1.3rem)' }}
        >
          Software Engineer · CS Student at UET Lahore
        </motion.p>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-head font-semibold mb-6 sm:mb-8"
          style={{ fontSize: 'clamp(0.9rem, 3.5vw, 1.25rem)', color: '#a78bfa' }}
        >
          <TypeAnimation
            sequence={[
              'AI Engineer', 2000,
              'Full Stack Developer', 2000,
              'Computer Vision Enthusiast', 2000,
              'Problem Solver', 2000,
              'ML Practitioner', 2000,
            ]}
            wrapper="span"
            repeat={Infinity}
            cursor={true}
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2"
          style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.82rem, 3vw, 1rem)' }}
        >
          Aspiring engineer with a passion for AI/ML, Computer Vision, and Full-Stack Development.
          Building intelligent, real-world solutions from Lahore, Pakistan — one commit at a time.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center mb-10 sm:mb-14 px-2"
        >
          <button
            className="btn-primary w-full sm:w-auto"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work <ArrowRight size={15} />
          </button>
          <a href={`mailto:${SOCIAL.email}`} className="btn-outline w-full sm:w-auto justify-center">
            <Mail size={15} /> Get In Touch
          </a>
          <div className="flex gap-3 w-full sm:w-auto justify-center">
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 sm:flex-none justify-center">
              <Github size={15} /> GitHub
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 sm:flex-none justify-center">
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="px-2"
        >
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--text-faint)' }}
          >
            Core Tech Stack
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {TECH_PILLS.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.04 }}
                className="px-3 py-1.5 rounded-full text-xs cursor-default transition-all duration-200"
                style={{
                  background: 'var(--pill-bg)',
                  border: '1px solid var(--pill-border)',
                  color: 'var(--pill-color)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#6c63ff';
                  e.currentTarget.style.color = '#6c63ff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--pill-border)';
                  e.currentTarget.style.color = 'var(--pill-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}