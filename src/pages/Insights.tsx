export function Insights() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
      <header className="mb-10 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-primary font-headline font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-3 block">Performance Core</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tighter leading-[1.1] md:leading-[0.9] text-white">Refined Insights <br/>& Analytics.</h1>
        </div>
        <div className="flex bg-surface-container p-1 rounded-full border border-white/5 self-start md:self-auto shadow-sm">
          <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-surface-container-high text-primary font-headline font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer">Week</button>
          <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full text-on-surface-variant font-headline font-bold text-xs sm:text-sm hover:text-white transition-all cursor-pointer">Month</button>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="col-span-1 md:col-span-12 xl:col-span-8 bg-surface-container-low rounded-[2rem] p-8 sm:p-10 md:p-14 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4 relative z-10">
            <div>
              <h2 className="font-headline font-bold text-xl sm:text-2xl text-white">Focus Hours</h2>
              <p className="text-on-surface-variant font-body text-xs sm:text-sm mt-1">Deep work distribution across the cycle.</p>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-3xl font-headline font-extrabold text-primary block">142.8h</span>
              <span className="text-[10px] sm:text-xs text-primary-container">+12% vs last period</span>
            </div>
          </div>
          <div className="w-full h-64 sm:h-80 relative z-10">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
              <defs>
                <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#a2ffbf" stopOpacity="0.15"></stop>
                  <stop offset="100%" stopColor="#a2ffbf" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path className="chart-gradient" d="M0,350 L100,320 L200,340 L300,200 L400,280 L500,100 L600,150 L700,50 L800,120 L900,80 L1000,100 L1000,400 L0,400 Z"></path>
              <path d="M0,350 L100,320 L200,340 L300,200 L400,280 L500,100 L600,150 L700,50 L800,120 L900,80 L1000,100" fill="none" stroke="#a2ffbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
              <circle className="drop-shadow-[0_0_10px_rgba(162,255,191,0.8)]" cx="700" cy="50" fill="#a2ffbf" r="6"></circle>
            </svg>
            <div className="flex justify-between mt-6 px-2 text-[10px] font-bold tracking-widest text-on-surface-variant/40 uppercase">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-12 xl:col-span-4 flex flex-col gap-8 lg:gap-10">
          <div className="bg-primary-container/10 border border-primary/10 rounded-[2rem] p-8 sm:p-10 transition-transform hover:scale-[1.02] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer shadow-lg">
            <span className="material-symbols-outlined text-primary mb-4 sm:mb-6" style={{ fontSize: '40px' }}>bolt</span>
            <h3 className="font-headline font-bold text-[10px] sm:text-sm text-primary uppercase tracking-[0.2em] mb-2">Peak Velocity</h3>
            <h2 className="text-3xl sm:text-4xl font-headline font-extrabold text-white leading-tight mb-6 sm:mb-8">Tuesday is your most productive day.</h2>
            <p className="text-on-surface-variant mb-8 sm:mb-10 text-sm sm:text-lg leading-relaxed">Your output spikes between 09:00 and 11:30. Block this time to maximize focus.</p>
            <button className="flex items-center gap-2 text-primary font-headline font-bold text-xs sm:text-sm group cursor-pointer">
              Schedule Focus Block
              <span className="material-symbols-outlined text-xs sm:text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="bg-surface-container-high rounded-[2rem] p-6 sm:p-8 flex items-center gap-6 group hover:bg-surface-container-highest transition-colors">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>timer</span>
            </div>
            <div>
              <p className="text-on-surface-variant text-xs sm:text-sm font-medium">Session Avg</p>
              <h4 className="text-2xl sm:text-3xl font-headline font-bold text-white leading-none mt-1">4h 12m</h4>
            </div>
          </div>
          <div className="bg-surface-container-high rounded-[2rem] p-6 sm:p-8 flex items-center gap-6 group hover:bg-surface-container-highest transition-colors">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-surface-container flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>task_alt</span>
            </div>
            <div>
              <p className="text-on-surface-variant text-xs sm:text-sm font-medium">Completion Rate</p>
              <h4 className="text-2xl sm:text-3xl font-headline font-bold text-white leading-none mt-1">94.2%</h4>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-2 lg:mt-6">
          <div className="md:col-span-2 relative h-80 rounded-[2rem] overflow-hidden group">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="high-tech abstract digital server room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVYSXUmK2bCHiHXWP0br9ij7UMFeKegY1IGzFyAJR7n9bH3z-8khhNa1MA-7A29cHnIdxBIotE6kRcbcoe3Yiuz7oGz6Hn5yBB_w-4L2MnHVdft-YlaS6pzpVXAVWulY-l9B4-2PbbTdY6UVnccmTJpUjTl08E1Mt7Kg1ILfEcsvTDLtF704IvOHMr2kE29mjVBxIDG2spcGsWbGV6vfe-XidC2bp2mniAhXWZEd8UeUFvbKqYh8a4nqxjsfc0fHnAWxTsmLqJSnG7"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
              <h3 className="text-2xl font-headline font-extrabold text-white">System Optimization</h3>
              <p className="text-on-surface-variant text-sm max-w-md mt-2">Machine learning patterns suggest reducing multi-tasking by 15% to increase deep work yield.</p>
            </div>
          </div>
          <div className="bg-surface-container p-10 rounded-[2rem] flex flex-col justify-between">
            <div>
              <h3 className="font-headline font-bold text-white text-xl">Weekly Goals</h3>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant text-sm">Deep Work</span>
                  <span className="text-white font-bold">24/30h</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '80%' }}></div>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-on-surface-variant text-sm">Team Collab</span>
                  <span className="text-white font-bold">8/10h</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
            <button className="w-full py-4 border border-white/10 rounded-xl text-white font-headline font-bold text-sm hover:bg-white/5 transition-all cursor-pointer">View All Metrics</button>
          </div>
        </div>
      </div>
    </div>
  );
}
