import { Link, useLocation } from 'react-router-dom';

export function SideNav() {
  const location = useLocation();
  const path = location.pathname;

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
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          </div>
          <div>
            <div className="font-headline font-bold text-lg text-white leading-none">Pro-Ops</div>
            <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Enterprise Tier</div>
          </div>
        </div>
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
          <div className="text-[#adaaaa] hover:bg-white/5 rounded-lg px-4 py-3 flex items-center gap-3 cursor-pointer transition-all hover:scale-[1.02]">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="font-medium text-sm">Calendar</span>
          </div>
          <div className="text-[#adaaaa] hover:bg-white/5 rounded-lg px-4 py-3 flex items-center gap-3 cursor-pointer transition-all hover:scale-[1.02]">
            <span className="material-symbols-outlined">folder</span>
            <span className="font-medium text-sm">Files</span>
          </div>
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
