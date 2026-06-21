import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { SOCIAL } from '@/utils/data';

const NAV = ['About', 'Skills', 'Projects', 'MedMentor', 'Experience', 'Contact'];

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{ background: 'var(--footer-bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <span className="block font-head font-extrabold text-2xl accent-gradient-text mb-4">
          Mohammad Zaid
        </span>
        <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          Software Engineer · AI/ML Developer · CS @ UET Lahore
        </p>

        <nav className="flex flex-wrap gap-6 justify-center mb-6">
          {NAV.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm transition-colors duration-200"
              style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex gap-3 justify-center mb-8">
          {[
            { href: SOCIAL.github, icon: <Github size={16} />, label: 'GitHub' },
            { href: SOCIAL.linkedin, icon: <Linkedin size={16} />, label: 'LinkedIn' },
            { href: `mailto:${SOCIAL.email}`, icon: <Mail size={16} />, label: 'Email' },
            { href: `tel:${SOCIAL.phone.replace(/\s/g, '')}`, icon: <Phone size={16} />, label: 'Phone' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label === 'GitHub' || s.label === 'LinkedIn' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#6c63ff';
                e.currentTarget.style.color = '#a78bfa';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
          © {new Date().getFullYear()}{' '}
          <span style={{ color: '#a78bfa' }}>Mohammad Zaid</span>. Crafted with passion in
          Lahore, Pakistan 🇵🇰
        </p>
      </div>
    </footer>
  );
}
