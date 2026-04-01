import { Link, useLocation } from 'react-router-dom';

export function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  const getLinkClass = (href: string) => {
    const isActive = href === '/dashboard' ? path === '/dashboard' : path.startsWith(href);
    return `flex flex-col items-center justify-center transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-90 ${
      isActive ? 'text-[#a2ffbf] scale-110' : 'text-[#adaaaa]'
    }`;
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-[#080808]/80 backdrop-blur-lg border-t border-white/15 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] h-20 px-4 sm:px-8 pb-safe flex justify-around items-center">
      <Link to="/dashboard" className={`${getLinkClass('/dashboard')} p-2 min-w-[64px]`}>
        <span className="material-symbols-outlined text-[28px]" style={path === '/dashboard' ? { fontVariationSettings: "'FILL' 1" } : {}}>home</span>
        <span className="font-label text-[10px] uppercase tracking-widest mt-1">Home</span>
      </Link>
      <Link to="/tasks" className={`${getLinkClass('/tasks')} p-2 min-w-[64px]`}>
        <span className="material-symbols-outlined text-[28px]" style={path.startsWith('/tasks') ? { fontVariationSettings: "'FILL' 1" } : {}}>assignment</span>
        <span className="font-label text-[10px] uppercase tracking-widest mt-1">Tasks</span>
      </Link>
      <Link to="/insights" className={`${getLinkClass('/insights')} p-2 min-w-[64px]`}>
        <span className="material-symbols-outlined text-[28px]" style={path.startsWith('/insights') ? { fontVariationSettings: "'FILL' 1" } : {}}>bar_chart</span>
        <span className="font-label text-[10px] uppercase tracking-widest mt-1">Analytics</span>
      </Link>
      <div className="flex flex-col items-center justify-center p-2 min-w-[64px] text-[#adaaaa] active:scale-90 transition-transform duration-200 cursor-pointer">
        <span className="material-symbols-outlined text-[28px]">person</span>
        <span className="font-label text-[10px] uppercase tracking-widest mt-1">Profile</span>
      </div>
    </nav>
  );
}
