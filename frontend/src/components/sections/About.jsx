import Reveal from '@/components/ui/Reveal';
import zaidImg from '@/assets/zaid.jpeg';

const STATS = [
  { number: '11+', label: 'Projects Built' },
  { number: '3+', label: 'Years Coding' },
  { number: '20+', label: 'Technologies' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Avatar card */}
          <Reveal direction="left">
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden relative"
                style={{
                  aspectRatio: '4/5',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    background:
                      'linear-gradient(135deg,rgba(108,99,255,0.1),rgba(56,189,248,0.08))',
                  }}
                />
                <img
                  src={zaidImg}
                  alt="Zaid"
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />
                <div
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2.5 rounded-full whitespace-nowrap z-20"
                  style={{
                    background: 'var(--about-badge-bg)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid var(--border-soft)',
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full animate-pulse-slow"
                    style={{ background: 'var(--green)' }}
                  />
                  <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    Open to Work
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal direction="right">
            <div>
              <span className="section-tag">About Me</span>

              <h2 className="font-head font-extrabold leading-tight mb-6" style={{fontSize:"clamp(1.5rem,6.5vw,2.5rem)"}}>
                Turning Coffee &amp; Code
                <br />
                Into Real Solutions
              </h2>

              <p className="leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                I&apos;m Mohammad Zaid, a Computer Science student at the University of Engineering and
                Technology (UET), Lahore — graduating December 2026. My journey began with pure
                curiosity about how software shapes the world.
              </p>

              <p className="leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                From building CLI tools to deploying MERN web apps, from training YOLO models to
                architecting RAG-powered medical AI — I love solving hard problems and turning ideas
                into impactful products.
              </p>

              <p className="leading-relaxed mb-8"
                style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Currently seeking international internships, master&apos;s scholarships, and exciting
                freelance projects. Let&apos;s build something great together.
              </p>

              <div className="grid grid-cols-3 gap-3">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl p-4 text-center transition-all duration-300 cursor-default"
                    style={{
                      background: 'var(--stat-bg)',
                      border: '1px solid var(--stat-border)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--stat-border)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div className="font-head font-extrabold text-2xl accent-gradient-text">
                      {s.number}
                    </div>
                    <div
                      className="text-xs mt-1 tracking-wide"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}