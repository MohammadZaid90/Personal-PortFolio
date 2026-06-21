import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{ position: 'fixed', inset: 0, zIndex: 99999, background: 'var(--loader-bg)' }}
      className="flex flex-col items-center justify-center gap-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="font-head font-extrabold text-2xl accent-gradient-text"
      >
        Mohammad Zaid
      </motion.div>

      <div
        className="w-40 rounded-full overflow-hidden"
        style={{ height: '2px', background: 'var(--progress-track)' }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          style={{
            height: '100%',
            borderRadius: '9999px',
            background: 'linear-gradient(90deg, #6c63ff, #38bdf8)',
          }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xs tracking-[0.15em] uppercase"
        style={{ color: 'var(--text-faint)' }}
      >
        Loading Portfolio
      </motion.p>
    </motion.div>
  );
}
