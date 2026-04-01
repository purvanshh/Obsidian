import { useLocation, useNavigate } from 'react-router-dom';
import { Home, CheckSquare, CalendarDays, FolderOpen, BarChart3 } from 'lucide-react';
import { LimelightNav } from './ui/limelight-nav';

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const routes = [
    { id: 'dashboard', path: '/dashboard', label: 'Home', icon: <Home /> },
    { id: 'tasks', path: '/tasks', label: 'Tasks', icon: <CheckSquare /> },
    { id: 'calendar', path: '/calendar', label: 'Calendar', icon: <CalendarDays /> },
    { id: 'files', path: '/files', label: 'Files', icon: <FolderOpen /> },
    { id: 'insights', path: '/insights', label: 'Data', icon: <BarChart3 /> },
  ];

  // Try exact match first, then prefix match
  let activeIndex = routes.findIndex(route => path === route.path);
  if (activeIndex === -1) {
    activeIndex = routes.findIndex(route => path.startsWith(route.path) && route.path !== '/dashboard');
  }
  if (activeIndex === -1) {
    activeIndex = 0; // Fallback
  }

  const handleTabChange = (index: number) => {
    navigate(routes[index].path);
  };

  const navItems = routes.map((route) => ({
    id: route.id,
    icon: route.icon,
    label: route.label,
  }));

  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[calc(100vw-2rem)]">
      <LimelightNav 
        items={navItems}
        defaultActiveIndex={activeIndex}
        onTabChange={handleTabChange}
        className="bg-[#080808]/90 backdrop-blur-xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] px-1 sm:px-2 rounded-full w-full justify-between"
        iconContainerClassName="p-2 sm:p-3"
      />
    </div>
  );
}
