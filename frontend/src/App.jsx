import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

import { ThemeProvider } from '@/context/ThemeContext';
import Loader from '@/components/ui/Loader';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import MedMentor from '@/components/sections/MedMentor';
import Experience from '@/components/sections/Experience';
import GitHub from '@/components/sections/GitHub';
import Contact from '@/components/sections/Contact';

import { analyticsAPI } from '@/utils/api';

function AppInner() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    analyticsAPI.logVisit('/');
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--toast-bg)',
            color: 'var(--toast-text)',
            border: '1px solid var(--toast-border)',
            borderRadius: '12px',
            fontSize: '0.875rem',
          },
          success: { iconTheme: { primary: '#22d3a0', secondary: 'var(--toast-bg)' } },
          error: { iconTheme: { primary: '#ef4444', secondary: 'var(--toast-bg)' } },
        }}
      />

      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <MedMentor />
            <Experience />
            <GitHub />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
