import { Link, useLocation } from 'react-router-dom';
import { useObsidian } from '../context/ObsidianContext';

export function SideNav() {
  const location = useLocation();
  const path = location.pathname;
  const { profile } = useObsidian();

  const getLinkClass = (href: string) => {
    const isActive = href === '/dashboard' ? path === '/dashboard' : path.startsWith(href);
    if (isActive) {
      return "flex items-center gap-3 px-4 py-3 bg-[#201f1f] text-[#a2ffbf] shadow-[0_0_15px_rgba(162,255,191,0.2)] rounded-lg transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";
    }
    return "flex items-center gap-3 px-4 py-3 text-[#adaaaa] hover:bg-white/5 rounded-lg transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] cursor-pointer";
  };

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 hidden lg:flex flex-col bg-[#0e0e0e] border-r border-white/15 z-40 pt-20">
      <div className="p-8 pt-4 pb-8">
        <Link to="/profile" className="flex items-center gap-3 mb-10 px-2 group cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-xl bg-surface-container-high overflow-hidden border border-primary/20 group-hover:border-primary/50 transition-colors">
            <img 
              alt="User profile photo" 
              className="w-full h-full object-cover" 
              src={profile.avatar}
            />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm group-hover:text-primary transition-colors">{profile.name}</h3>
            <p className="text-primary text-[10px] font-black uppercase tracking-widest">{profile.plan}</p>
          </div>
        </Link>
        <button className="w-full bg-primary text-on-primary py-3 px-4 rounded-xl font-headline font-bold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(162,255,191,0.4)] transition-all active:scale-95 mb-8">
          <span className="material-symbols-outlined text-sm">add</span>
          New Project
        </button>
        <nav className="space-y-2 font-body text-sm font-medium">
          <Link to="/dashboard" className={getLinkClass('/dashboard')}>
            <span className="material-symbols-outlined" style={path === '/dashboard' ? { fontVariationSettings: "'FILL' 1" } : {}}>grid_view</span>
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link to="/tasks" className={getLinkClass('/tasks')}>
            <span className="material-symbols-outlined" style={path.startsWith('/tasks') ? { fontVariationSettings: "'FILL' 1" } : {}}>check_circle</span>
            <span className="font-medium">Tasks</span>
          </Link>
          <Link to="/insights" className={getLinkClass('/insights')}>
            <span className="material-symbols-outlined" style={path.startsWith('/insights') ? { fontVariationSettings: "'FILL' 1" } : {}}>bar_chart</span>
            <span className="font-medium">Analytics</span>
          </Link>
          <Link to="/calendar" className={getLinkClass('/calendar')}>
            <span className="material-symbols-outlined" style={path.startsWith('/calendar') ? { fontVariationSettings: "'FILL' 1" } : {}}>calendar_today</span>
            <span className="font-medium text-sm">Calendar</span>
          </Link>
          <Link to="/files" className={getLinkClass('/files')}>
            <span className="material-symbols-outlined" style={path.startsWith('/files') ? { fontVariationSettings: "'FILL' 1" } : {}}>folder</span>
            <span className="font-medium text-sm">Files</span>
          </Link>
          <Link to="/profile" className={getLinkClass('/profile')}>
            <span className="material-symbols-outlined" style={path.startsWith('/profile') ? { fontVariationSettings: "'FILL' 1" } : {}}>person</span>
            <span className="font-medium text-sm">Profile</span>
          </Link>
        </nav>
      </div>
      <div className="mt-auto px-4 py-8 border-t border-white/5 space-y-1">
        <div className="text-[#adaaaa] hover:bg-white/5 rounded-lg px-4 py-3 flex items-center gap-3 cursor-pointer transition-all">
          <span className="material-symbols-outlined text-sm">help</span>
          <span className="text-sm">Support</span>
        </div>
        <div className="text-[#adaaaa] hover:bg-white/5 rounded-lg px-4 py-3 flex items-center gap-3 cursor-pointer transition-all">
          <span className="material-symbols-outlined text-sm">logout</span>
          <span className="text-sm">Logout</span>
        </div>
      </div>
    </aside>
  );
}
