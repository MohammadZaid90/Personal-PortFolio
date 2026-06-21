import { motion } from 'framer-motion';
import { Github, Check, Sparkles } from 'lucide-react';
import { MEDMENTOR_FEATURES, MEDMENTOR_STACK, SOCIAL } from '@/utils/data';
import Reveal from '@/components/ui/Reveal';

const CHAT = [
  { role: 'ai', text: "Hello! I'm MedMentor AI, your endocrinology specialist. I can help with diabetes, thyroid disorders, hormonal conditions, and treatment protocols. How can I assist you today?" },
  { role: 'user', text: 'What are the early symptoms of Type 2 Diabetes?' },
  { role: 'ai', text: 'Early signs include: increased thirst (polydipsia), frequent urination (polyuria), unexplained fatigue, blurred vision, and slow-healing wounds. HbA1c >= 6.5% confirms diagnosis. Would you like to explore treatment options?' },
];

export default function MedMentor() {
  return (
    <section id="medmentor" className="py-24 px-6 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full" style={{ width: '600px', height: '400px', left: 0, top: '50%', transform: 'translateY(-50%) translateX(-33%)', background: 'var(--orb1)', filter: 'blur(80px)' }} />
        <div className="absolute rounded-full" style={{ width: '500px', height: '350px', right: 0, top: '50%', transform: 'translateY(-50%) translateX(33%)', background: 'var(--orb2)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <Reveal direction="left">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 text-xs font-semibold"
                style={{ background: 'rgba(108,99,255,0.1)', borderColor: 'rgba(108,99,255,0.25)', color: '#a78bfa' }}
              >
                <Sparkles size={12} /> Final Year Project &bull; 2026
              </div>

              <h2
                className="font-head font-extrabold leading-tight mb-4"
                style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)' }}
              >
                MedMentor{' '}
                <span className="accent-gradient-text">AI</span>
                <br />Medical Intelligence
              </h2>

              <p className="leading-relaxed mb-2" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                MedMentor is my capstone FYP — an AI-powered medical assistant specializing in
                endocrinology, built on Retrieval-Augmented Generation (RAG) architecture for
                accurate, context-aware clinical responses.
              </p>

              <ul className="my-6" style={{ borderTop: '1px solid var(--border)' }}>
                {MEDMENTOR_FEATURES.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 py-2.5 text-sm"
                    style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}
                  >
                    <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--green)' }} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-7">
                {MEDMENTOR_STACK.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs"
                    style={{
                      background: 'rgba(56,189,248,0.07)',
                      border: '1px solid rgba(56,189,248,0.2)',
                      color: '#38bdf8',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github size={15} /> View on GitHub
              </a>
            </div>
          </Reveal>

          {/* Right — Chat UI mockup */}
          <Reveal direction="right">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.2)',
              }}
            >
              {/* Title bar */}
              <div
                className="flex items-center gap-2 px-5 py-3"
                style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                <div className="w-3 h-3 rounded-full ml-1" style={{ background: '#febc2e' }} />
                <div className="w-3 h-3 rounded-full ml-1" style={{ background: '#28c840' }} />
                <span
                  className="mx-auto text-xs font-medium"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  MedMentor AI — Endocrinology Assistant
                </span>
              </div>

              {/* Messages */}
              <div className="p-5 flex flex-col gap-3">
                {CHAT.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed"
                    style={
                      m.role === 'ai'
                        ? {
                            alignSelf: 'flex-start',
                            background: 'linear-gradient(135deg,rgba(108,99,255,0.12),rgba(56,189,248,0.06))',
                            border: '1px solid rgba(108,99,255,0.2)',
                            color: 'var(--text-primary)',
                            borderTopLeftRadius: '4px',
                          }
                        : {
                            alignSelf: 'flex-end',
                            background: 'var(--surface-2)',
                            border: '1px solid var(--border)',
                            color: 'var(--text-secondary)',
                            borderTopRightRadius: '4px',
                          }
                    }
                  >
                    {m.text}
                  </motion.div>
                ))}
              </div>

              {/* Input bar */}
              <div
                className="px-5 pb-5 flex gap-3 items-center"
                style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}
              >
                <div
                  className="flex-1 px-4 py-2.5 rounded-full text-xs"
                  style={{
                    background: 'var(--input-bg)',
                    border: '1px solid var(--input-border)',
                    color: 'var(--input-placeholder)',
                  }}
                >
                  Ask a medical question...
                </div>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm cursor-pointer transition-transform hover:scale-110 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#6c63ff,#38bdf8)' }}
                  role="button"
                  aria-label="Send"
                >
                  →
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
