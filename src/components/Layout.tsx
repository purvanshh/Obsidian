import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { PageTransition, interactiveButton } from '../lib/motion';
import { TopNav } from './TopNav';
import { SideNav } from './SideNav';
import { BottomNav } from './BottomNav';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      <TopNav />
      <SideNav />
      {/* Main Content Area */}
      <PageTransition as="main" className="lg:pl-64 pt-20 pb-28 lg:pt-24 lg:pb-12 px-4 sm:px-6 lg:px-8 min-h-screen">
        {children}
      </PageTransition>
      <BottomNav />
      {/* Contextual FAB */}
      <motion.button
        className="fixed bottom-28 right-6 lg:bottom-12 lg:right-12 w-14 h-14 lg:w-16 lg:h-16 bg-primary text-on-primary rounded-full shadow-[0_0_30px_rgba(162,255,191,0.4)] flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary/70 z-50"
        aria-label="Create new item"
        {...interactiveButton}
      >
        <span className="material-symbols-outlined text-2xl lg:text-3xl">add</span>
      </motion.button>
    </div>
  );
}
