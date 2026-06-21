import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '@/utils/data';
import Reveal from '@/components/ui/Reveal';

const TABS = [
  { key: 'work', label: 'Work Experience' },
  { key: 'education', label: 'Education' },
  { key: 'certs', label: 'Certifications' },
];

function TimelineItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="relative pl-8 mb-8"
    >
      <div
        className="absolute left-0 top-0 bottom-0"
        style={{ width: '1px', background: 'linear-gradient(to bottom, transparent, #6c63ff 30%, #6c63ff 70%, transparent)' }}
      />
      <div
        className="absolute top-5 transition-all duration-300"
        style={{
          left: '-5px',
          width: '11px',
          height: '11px',
          borderRadius: '50%',
          background: 'var(--surface)',
          border: '2px solid #6c63ff',
        }}
      />

      <div
        className="rounded-2xl p-6 transition-all duration-300"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(108,99,255,0.3)';
          e.currentTarget.style.transform = 'translateX(4px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.transform = 'translateX(0)';
        }}
      >
        <div className="text-xs font-semibold tracking-wide mb-1" style={{ color: '#a78bfa' }}>
          {item.period}
        </div>
        <h3 className="font-head font-bold text-base mb-0.5" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
        <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>{item.org}</p>
        <ul className="space-y-1">
          {item.desc.map((d, i) => (
            <li key={i} className="text-sm flex items-start gap-2" style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: 'rgba(108,99,255,0.6)', marginTop: '2px' }}>·</span>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [active, setActive] = useState('work');
  const currentData = active === 'work' ? EXPERIENCE : active === 'education' ? EDUCATION : [];

  return (
    <section id="experience" className="py-24 px-6" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-12">
          <span className="section-tag">Background</span>
          <h2 className="font-head font-extrabold text-5xl mb-4">Experience &amp; Education</h2>
          <p className="max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Professional journey, academic milestones, and certifications.
          </p>
        </Reveal>

        {/* Tabs */}
        <div className="flex gap-6 mb-10" style={{ borderBottom: '1px solid var(--border)' }}>
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className="pb-3 text-sm font-medium transition-all duration-200 bg-transparent font-body"
              style={{
                marginBottom: '-1px',
                border: 'none',
                borderBottom: active === t.key ? '2px solid #a78bfa' : '2px solid transparent',
                color: active === t.key ? '#a78bfa' : 'var(--text-secondary)',
                cursor: 'pointer',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {active !== 'certs' ? (
              <div className="relative">
                {currentData.map((item, i) => (
                  <TimelineItem key={i} item={item} index={i} />
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(108,99,255,0.3)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span className="text-3xl flex-shrink-0" role="img" aria-label={c.title}>{c.icon}</span>
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{c.title}</p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{c.issuer}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#a78bfa' }}>{c.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
