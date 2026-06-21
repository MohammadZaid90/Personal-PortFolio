import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '@/utils/data';
import Reveal from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

const CATS = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'tools', label: 'Tools' },
];

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView(0.1);
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.035 }}
      className="rounded-2xl p-5 text-center cursor-default relative overflow-hidden transition-all duration-300"
      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'linear-gradient(135deg,rgba(108,99,255,0.07),transparent)' }}
      />

      <div className="flex items-center justify-center mb-3" style={{ height: '40px' }}>
        <img
          src={skill.icon}
          alt={skill.name}
          style={{ height: '40px', width: '40px', objectFit: 'contain' }}
        />
      </div>

      <div className="text-sm font-medium mb-3" style={{ color: 'var(--text-primary)' }}>{skill.name}</div>
      <div
        className="rounded-full overflow-hidden"
        style={{ height: '3px', background: 'var(--progress-track)' }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: index * 0.04 + 0.2 }}
          style={{
            height: '100%',
            borderRadius: '9999px',
            background: 'linear-gradient(90deg,#6c63ff,#38bdf8)',
          }}
        />
      </div>
      <div className="text-xs mt-1.5" style={{ color: 'var(--text-muted)' }}>
        {skill.level}%
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? SKILLS : SKILLS.filter((s) => s.cat === active);

  return (
    <section id="skills" className="py-24 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <span className="section-tag">Technical Arsenal</span>
          <h2 className="font-head font-extrabold text-5xl mb-4">Skills &amp; Technologies</h2>
          <p className="max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A curated set of tools I use to build intelligent, elegant, and scalable software.
          </p>
        </Reveal>

        {/* Filter */}
        <Reveal className="flex flex-wrap gap-2 justify-center mb-10">
          {CATS.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className="px-5 py-2 rounded-full text-sm transition-all duration-200 font-body"
              style={
                active === c.key
                  ? { background: '#6c63ff', border: '1px solid #6c63ff', color: 'white' }
                  : {
                      background: 'transparent',
                      border: '1px solid var(--border-soft)',
                      color: 'var(--text-secondary)',
                    }
              }
              onMouseEnter={(e) => {
                if (active !== c.key) e.currentTarget.style.borderColor = 'var(--border-hover)';
              }}
              onMouseLeave={(e) => {
                if (active !== c.key) e.currentTarget.style.borderColor = 'var(--border-soft)';
              }}
            >
              {c.label}
            </button>
          ))}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: '0.75rem' }}
          >
            {filtered.map((s, i) => (
              <SkillCard key={s.name} skill={s} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
