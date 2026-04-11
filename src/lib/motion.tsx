import type { MotionProps, Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import type { ComponentProps, ElementType, ReactNode } from 'react';

import {
  MOTION,
  transitions,
  pageVariants,
  cardEntry,
  listStagger,
  itemFadeUp,
  interactiveCard,
  interactiveButton,
} from './motion-constants';

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
