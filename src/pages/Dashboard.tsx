export function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-8 lg:px-12">
      <header className="mb-12">
        <h1 className="text-5xl lg:text-6xl font-headline font-extrabold tracking-tighter text-white mb-2">Peak Dashboard</h1>
        <p className="text-on-surface-variant font-medium">Monitoring Obsidian Kinetic efficiency metrics.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section className="md:col-span-2 bg-surface-container-low p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.01] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-500"></div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="space-y-6 max-w-md">
              <h2 className="text-on-surface-variant text-xs font-label uppercase tracking-[0.2em]">Live Performance</h2>
              <h3 className="text-4xl font-headline font-bold text-white leading-tight">Your productivity is reaching peak obsidian levels.</h3>
              <p className="text-on-surface-variant leading-relaxed">System analysis shows a 12% increase in cognitive throughput compared to last session. Keep the momentum.</p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-surface-container-highest rounded-full text-xs font-bold text-primary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  STABLE OUTPUT
                </div>
              </div>
            </div>
            <div className="relative w-64 h-64 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle className="text-surface-container-highest" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeWidth="12"></circle>
                <circle className="text-primary drop-shadow-[0_0_12px_rgba(162,255,191,0.6)]" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeDasharray="691" strokeDashoffset="138" strokeLinecap="round" strokeWidth="12"></circle>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-6xl font-headline font-black text-white">82</span>
                <span className="text-xs text-on-surface-variant font-label tracking-widest uppercase">Score</span>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-surface-container-high p-10 rounded-[2rem] hover:scale-[1.02] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group">
          <div className="flex justify-between items-start mb-10">
            <span className="material-symbols-outlined text-primary p-3 bg-primary/10 rounded-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>task_alt</span>
            <span className="text-primary font-bold text-sm">+4 today</span>
          </div>
          <div className="text-5xl font-headline font-black text-white mb-2 group-hover:drop-shadow-[0_0_10px_rgba(162,255,191,0.3)] transition-all">24</div>
          <div className="text-on-surface-variant font-medium">Tasks Completed</div>
          <div className="mt-8 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4 rounded-full"></div>
          </div>
        </div>
        <div className="bg-surface-container-high p-10 rounded-[2rem] hover:scale-[1.02] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group">
          <div className="flex justify-between items-start mb-10">
            <span className="material-symbols-outlined text-tertiary p-3 bg-tertiary/10 rounded-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            <span className="text-tertiary font-bold text-sm">Top 5%</span>
          </div>
          <div className="text-5xl font-headline font-black text-white mb-2 group-hover:drop-shadow-[0_0_10px_rgba(111,224,255,0.3)] transition-all">14</div>
          <div className="text-on-surface-variant font-medium">Day Streak</div>
          <div className="mt-8 flex gap-1.5">
            <div className="h-1 flex-1 bg-tertiary rounded-full"></div>
            <div className="h-1 flex-1 bg-tertiary rounded-full"></div>
            <div className="h-1 flex-1 bg-tertiary rounded-full"></div>
            <div className="h-1 flex-1 bg-tertiary rounded-full"></div>
            <div className="h-1 flex-1 bg-tertiary/20 rounded-full"></div>
          </div>
        </div>
        <section className="md:col-span-2 mt-4">
          <div className="flex justify-between items-end mb-8">
            <h4 className="text-xl font-headline font-bold text-white">Recent Activity</h4>
            <button className="text-primary text-sm font-bold hover:underline">View All</button>
          </div>
          <div className="space-y-2">
            {[
              { icon: 'terminal', title: 'Core API Integration', subtitle: 'Pushed to production • 2h ago', pts: '+1,200 pts', type: 'Success' },
              { icon: 'architecture', title: 'System Architecture Review', subtitle: 'Completed with 3 collaborators • 5h ago', pts: '+850 pts', type: 'Review' },
              { icon: 'database', title: 'Database Optimization', subtitle: 'Scheduled maintenance • 8h ago', pts: '+400 pts', type: 'System' }
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">{activity.icon}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">{activity.title}</div>
                    <div className="text-xs text-on-surface-variant">{activity.subtitle}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-white">{activity.pts}</div>
                  <div className="text-[10px] text-on-surface-variant uppercase tracking-tighter">{activity.type}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
