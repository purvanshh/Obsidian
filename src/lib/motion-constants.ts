import type { MotionProps, Variants } from 'framer-motion';

const EMPHASIZED_EASE = [0.22, 1, 0.36, 1] as const;

export const MOTION = {
  durations: {
    fast: 0.16,
    medium: 0.24,
  },
  ease: EMPHASIZED_EASE,
  scale: {
    hover: 1.012,
    tap: 0.97,
  },
};

export const transitions = {
  fast: { duration: MOTION.durations.fast, ease: MOTION.ease },
  medium: { duration: MOTION.durations.medium, ease: MOTION.ease },
};

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ...transitions.medium },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { ...transitions.fast },
  },
};

export const cardEntry: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ...transitions.medium },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { ...transitions.fast },
  },
};

export const listStagger = (delay = 0.06): Variants => ({
  animate: {
    transition: {
      staggerChildren: delay,
      delayChildren: 0.04,
    },
  },
});

export const itemFadeUp: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ...transitions.medium },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { ...transitions.fast },
  },
};

export const interactiveCard: MotionProps = {
  whileHover: { y: -4, scale: MOTION.scale.hover },
  whileTap: { scale: MOTION.scale.tap },
  transition: transitions.fast,
};

export const interactiveButton: MotionProps = {
  whileHover: { scale: MOTION.scale.hover },
  whileTap: { scale: MOTION.scale.tap },
  transition: transitions.fast,
};
