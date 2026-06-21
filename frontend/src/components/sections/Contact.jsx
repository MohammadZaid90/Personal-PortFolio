import { useState } from 'react';
import { Mail, Github, Linkedin, Phone, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { contactAPI } from '@/utils/api';
import { SOCIAL } from '@/utils/data';
import Reveal from '@/components/ui/Reveal';

const CONTACT_LINKS = [
  { icon: <Mail size={18} />, label: 'Email', value: 'sheikhzaid768@gmail.com', href: 'mailto:sheikhzaid768@gmail.com', external: false },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'Mohammad Zaid Sibghatullah', href: SOCIAL.linkedin, external: true },
  { icon: <Github size={18} />, label: 'GitHub', value: 'MohammadZaid90', href: SOCIAL.github, external: true },
  { icon: <Phone size={18} />, label: 'Phone', value: '+92 316 4259818', href: 'tel:+923164259818', external: false },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      await contactAPI.send(form);
      toast.success('Message sent! I will get back to you soon.');
      setForm(INITIAL_FORM);
    } catch (err) {
      toast.error(err.message || 'Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="section-tag">Get In Touch</span>
          <h2 className="font-head font-extrabold text-5xl mb-4">
            Have an Opportunity?
            <br />
            Let&apos;s Talk.
          </h2>
          <p className="max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Job offer, internship, freelance project, or research collaboration — I would love to hear from you.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
          {/* Contact links */}
          <Reveal direction="left">
            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)', textDecoration: 'none' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(108,99,255,0.35)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(108,99,255,0.1)', color: '#6c63ff' }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>{c.label}</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="right">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl p-8"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <h3 className="font-head font-bold text-lg mb-6" style={{ color: 'var(--text-primary)' }}>Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Full Name *
                  </label>
                  <input id="contact-name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="John Doe" autoComplete="name" className="form-input-style" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Email *
                  </label>
                  <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" autoComplete="email" className="form-input-style" />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="contact-subject" className="block text-xs font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Subject
                </label>
                <input id="contact-subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="Internship Opportunity / Project Collaboration" className="form-input-style" />
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className="block text-xs font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Message *
                </label>
                <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me about the opportunity or project..." className="form-input-style resize-none" />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-full text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200"
                style={{ background: loading ? '#5a52e0' : '#6c63ff', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = '#a78bfa'; }}
                onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = '#6c63ff'; }}
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={15} />}
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
