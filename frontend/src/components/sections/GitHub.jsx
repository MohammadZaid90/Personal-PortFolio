import { ExternalLink } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { SOCIAL } from '@/utils/data';

const STAT_CARDS = [
  { num: '11+', label: 'Repositories' },
  { num: 'Python', label: 'Top Language' },
  { num: 'AI / ML', label: 'Primary Focus' },
  { num: '2024–26', label: 'Active Since' },
];

const REPOS = [
  { name: 'Medmentor-Frontend',           desc: 'RAG-powered AI medical assistant for endocrinology. Final Year Project at UET Lahore.', lang: 'MERN Stack/AI' },
  { name: 'Medmentor-Backend',           desc: 'RAG-powered AI medical assistant for endocrinology. Final Year Project at UET Lahore.', lang: 'MERN Stack/AI' },
  { name: 'Hand-Gesture-Detection-System',  desc: 'Real-time hand gesture recognition and tracking system built with computer vision techniques to enable contactless human-computer interaction.', lang: 'Python/OpenCV' },
  { name: 'Steganography-Information-Security', desc: 'An advanced information security application designed to securely conceal and extract confidential data or messages within carrier images without altering their visual quality.', lang: 'Web/Security' },
  { name: 'Mern-Food-Ordering-App-Frontend', desc: 'Full-stack MERN food ordering app with real-time tracking and restaurant dashboard.', lang: 'MERN Stack' },
  { name: 'Mern-Food-Ordering-App-Backend', desc: 'Full-stack MERN food ordering app with real-time tracking and restaurant dashboard.', lang: 'MERN Stack' },
  { name: 'SMS-Spam-Classifier', desc: 'ML-powered spam detection with Zero Trust Security architecture.', lang: 'Web/Security' },
  { name: 'Medicine-Recomendation-System', desc: 'ML system for intelligent medicine recommendations based on symptoms.', lang: 'Python/AI/ML' },
];

export default function GitHub() {
  return (
    <section id="github" className="py-24 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <span className="section-tag">Open Source</span>
          <h2 className="font-head font-extrabold text-5xl mb-4">GitHub Activity</h2>
          <p className="max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Explore my repositories and open source contributions.
          </p>
        </Reveal>

        {/* Stats */}
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {STAT_CARDS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-5 text-center transition-all duration-300 cursor-default"
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
              <div className="font-head font-extrabold text-2xl accent-gradient-text">{s.num}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
            </div>
          ))}
        </Reveal>

        {/* Contribution graph */}
        <Reveal
          className="rounded-2xl p-6 text-center mb-8"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
            Contribution Graph &nbsp;·&nbsp;{' '}
            <span style={{ color: '#a78bfa', fontWeight: 600 }}>MohammadZaid90</span>
          </p>
          <img
            src="https://ghchart.rshah.org/6c63ff/MohammadZaid90"
            alt="Mohammad Zaid GitHub contribution graph"
            className="w-full rounded-xl"
            style={{ filter: 'invert(1) hue-rotate(180deg)', opacity: 0.8 }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextSibling) e.currentTarget.nextSibling.style.display = 'block';
            }}
          />
          <p className="hidden text-sm py-4" style={{ color: 'var(--text-muted)' }}>
            View at{' '}
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" style={{ color: '#a78bfa' }}>
              github.com/MohammadZaid90
            </a>
          </p>
        </Reveal>

        {/* Repo cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {REPOS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.07}>
              <a
                href={`https://github.com/MohammadZaid90/${r.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 rounded-2xl transition-all duration-300"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(108,99,255,0.3)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="font-semibold text-sm" style={{ color: '#a78bfa' }}>{r.name}</p>
                  <ExternalLink size={13} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--text-muted)' }} />
                </div>
                <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
                  {r.desc}
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#888' }} />
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{r.lang}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
            View All Repositories ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
