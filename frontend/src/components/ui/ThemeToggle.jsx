import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileTap={{ scale: 0.9 }}
      className={`relative flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 cursor-pointer ${className}`}
      style={{
        background: 'var(--surface-2)',
        borderColor: 'var(--border)',
        color: 'var(--text-secondary)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#6c63ff';
        e.currentTarget.style.color = '#6c63ff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.color = 'var(--text-secondary)';
      }}
    >
      <AnimatedIcon isDark={isDark} />
    </motion.button>
  );
}

function AnimatedIcon({ isDark }) {
  return (
    <motion.div
      key={isDark ? 'moon' : 'sun'}
      initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
      animate={{ rotate: 0, opacity: 1, scale: 1 }}
      exit={{ rotate: 30, opacity: 0, scale: 0.7 }}
      transition={{ duration: 0.2 }}
    >
      {isDark ? <Moon size={16} /> : <Sun size={16} />}
    </motion.div>
  );
}
