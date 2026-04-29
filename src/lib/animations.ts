/**
 * Framer Motion presets (technical-stack §4).
 * viewport={{ once: true }} na motion komponentach — brak re-animacji przy scrollu wstecz.
 */

export const fadeInUp = {
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
} as const;

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;
