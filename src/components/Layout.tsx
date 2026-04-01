import type { ReactNode } from 'react';
import { TopNav } from './TopNav';
import { SideNav } from './SideNav';
import { BottomNav } from './BottomNav';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      <TopNav />
      <SideNav />
      {/* Main Content Area */}
      <main className="lg:pl-64 pt-24 pb-32 min-h-screen">
        {children}
      </main>
      <BottomNav />
      {/* Contextual FAB */}
      <button className="fixed bottom-24 right-8 lg:bottom-12 lg:right-12 w-16 h-16 bg-primary text-on-primary rounded-full shadow-[0_0_30px_rgba(162,255,191,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
}
