import { Link, useLocation } from 'react-router-dom';
import { useObsidian } from '../context/ObsidianContext';

export function TopNav() {
  const location = useLocation();
  const path = location.pathname;
  const { profile } = useObsidian();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#080808]/60 backdrop-blur-xl border-b border-white/15 shadow-[0_0_20px_rgba(162,255,191,0.08)] flex justify-between items-center h-16 px-8">
      <Link to="/" className="text-2xl font-black tracking-tighter text-[#a2ffbf] font-headline cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95">
        OBSIDIAN
      </Link>
      <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight text-sm">
        <Link to="/dashboard" className={path === '/dashboard' ? "text-[#a2ffbf] border-b-2 border-[#a2ffbf] pb-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" : "text-[#adaaaa] hover:text-white transition-colors hover:scale-105 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"}>Dashboard</Link>
        <Link to="/tasks" className={path === '/tasks' ? "text-[#a2ffbf] border-b-2 border-[#a2ffbf] pb-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" : "text-[#adaaaa] hover:text-white transition-colors hover:scale-105 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"}>Tasks</Link>
        <Link to="/calendar" className={path === '/calendar' ? "text-[#a2ffbf] border-b-2 border-[#a2ffbf] pb-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" : "text-[#adaaaa] hover:text-white transition-colors hover:scale-105 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"}>Calendar</Link>
        <Link to="/files" className={path === '/files' ? "text-[#a2ffbf] border-b-2 border-[#a2ffbf] pb-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" : "text-[#adaaaa] hover:text-white transition-colors hover:scale-105 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"}>Files</Link>
        <Link to="/insights" className={path === '/insights' ? "text-[#a2ffbf] border-b-2 border-[#a2ffbf] pb-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" : "text-[#adaaaa] hover:text-white transition-colors hover:scale-105 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"}>Analytics</Link>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <div className="hidden md:flex gap-4">
          <span className="material-symbols-outlined text-[#adaaaa] cursor-pointer p-2 hover:scale-105 hover:text-[#a2ffbf] transition-all">notifications</span>
          <span className="material-symbols-outlined text-[#adaaaa] cursor-pointer p-2 hover:scale-105 hover:text-[#a2ffbf] transition-all">settings</span>
        </div>
        <Link to="/profile" className={`w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border cursor-pointer active:scale-95 transition-all ${path === '/profile' ? 'border-[#a2ffbf] shadow-[0_0_15px_rgba(162,255,191,0.4)]' : 'border-white/10'}`}>
          <img className="w-full h-full object-cover" alt="User profile" src={profile.avatar}/>
        </Link>
      </div>
    </nav>
  );
}
