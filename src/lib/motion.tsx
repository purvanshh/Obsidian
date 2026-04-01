import type { MotionProps, Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import type { ComponentProps, ElementType, ReactNode } from 'react';

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

type PolymorphicProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<T>, 'as' | 'ref' | 'children'>;

export function PageTransition<T extends ElementType = 'div'>(
  { as, children, className, ...rest }: PolymorphicProps<T>,
) {
  const Component = as ?? 'div';
  const MotionComponent = motion(Component as ElementType);

  return (
    <MotionComponent
      className={className}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transitions.medium}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}

export function SectionReveal<T extends ElementType = 'div'>(
  { as, children, className, ...rest }: PolymorphicProps<T>,
) {
  const Component = as ?? 'div';
  const MotionComponent = motion(Component as ElementType);

  return (
    <MotionComponent
      className={className}
      variants={itemFadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-10%' }}
      transition={transitions.medium}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}

export function StaggerList({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={listStagger()}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}
