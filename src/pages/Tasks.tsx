export function Tasks() {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-surface-container-high border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
          Operational Status: Active
        </div>
        <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter mb-4 leading-none text-white">
          System <span className="text-primary">Protocol</span>
        </h1>
        <p className="text-on-surface-variant max-w-xl font-medium">
          Precision workspace for high-output environments. Align your habits with elite operational standards.
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-7 space-y-8">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
            <div className="relative flex items-center bg-surface-container-lowest rounded-2xl p-2 border border-white/5 shadow-inner">
              <span className="material-symbols-outlined text-primary-container ml-4">bolt</span>
              <input className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline py-4 px-4 font-medium transition-all" placeholder="Initiate new task protocol..." type="text"/>
              <button className="bg-surface-container-high hover:bg-primary hover:text-on-primary text-primary transition-all p-3 rounded-xl flex items-center justify-center mr-1">
                <span className="material-symbols-outlined">keyboard_return</span>
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-headline font-bold mb-6 flex items-center gap-2 text-white">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              Today's Protocol
            </h2>
            <div className="space-y-4">
              <div className="group flex items-center justify-between p-5 bg-surface-container-low rounded-2xl border border-white/5 transition-all duration-300 hover:scale-[1.01] hover:bg-surface-container-high hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] cursor-pointer">
                <div className="flex items-center gap-5">
                  <button className="w-6 h-6 rounded-lg border-2 border-primary/40 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-[0_0_15px_rgba(162,255,191,0.5)] active:scale-95">
                    <span className="material-symbols-outlined text-primary text-[16px] opacity-0 group-hover:opacity-50" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                  </button>
                  <div>
                    <h3 className="text-sm font-semibold text-white tracking-tight">Finalize Q4 Strategic Monolith</h3>
                    <p className="text-[11px] text-on-surface-variant font-medium mt-0.5">High Priority • Due 14:00</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-highest text-[10px] font-bold text-on-surface-variant border border-white/5 uppercase tracking-tighter">Strategic</span>
                </div>
              </div>
              <div className="group flex items-center justify-between p-5 bg-surface-container-low rounded-2xl border border-white/5 transition-all duration-300 hover:scale-[1.01] hover:bg-surface-container-high cursor-pointer">
                <div className="flex items-center gap-5">
                  <button className="w-6 h-6 rounded-lg border-2 border-primary/40 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-[0_0_15px_rgba(162,255,191,0.5)] active:scale-95">
                    <span className="material-symbols-outlined text-primary text-[16px] opacity-0 group-hover:opacity-50" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                  </button>
                  <div>
                    <h3 className="text-sm font-semibold text-white tracking-tight">Conduct System Integrity Audit</h3>
                    <p className="text-[11px] text-on-surface-variant font-medium mt-0.5">Medium • Monthly Recurring</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-highest text-[10px] font-bold text-on-surface-variant border border-white/5 uppercase tracking-tighter">System</span>
                </div>
              </div>
              <div className="flex items-center p-5 bg-surface-container-low/40 rounded-2xl border border-white/5">
                <div className="w-6 h-6 rounded-lg bg-surface-container-highest/50 mr-5"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-48 bg-surface-container-highest skeleton-shimmer rounded"></div>
                  <div className="h-2 w-24 bg-surface-container-highest skeleton-shimmer rounded opacity-50"></div>
                </div>
              </div>
              <div className="flex items-center p-5 bg-surface-container-low/40 rounded-2xl border border-white/5">
                <div className="w-6 h-6 rounded-lg bg-surface-container-highest/50 mr-5"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-36 bg-surface-container-highest skeleton-shimmer rounded"></div>
                  <div className="h-2 w-20 bg-surface-container-highest skeleton-shimmer rounded opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:col-span-5 space-y-8">
          <div className="bg-surface-container-high rounded-[2rem] p-8 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 0" }}>vital_signs</span>
            </div>
            <h2 className="text-xl font-headline font-bold mb-8 flex items-center gap-2 text-white">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              Habit Pulse
            </h2>
            <div className="space-y-6 relative z-10">
              <div>
                <div className="flex justify-between items-end mb-3 px-1">
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Deep Work Block</h4>
                    <p className="text-[10px] text-on-surface-variant">Focus state alignment</p>
                  </div>
                  <div className="text-right">
                    <span className="text-primary font-headline font-extrabold text-xl">4/5</span>
                    <span className="text-[10px] text-on-surface-variant block uppercase">Weekly Streak</span>
                  </div>
                </div>
                <div className="flex gap-2 h-12">
                  <div className="flex-1 bg-primary rounded-lg shadow-[0_0_10px_rgba(162,255,191,0.2)]"></div>
                  <div className="flex-1 bg-primary rounded-lg shadow-[0_0_10px_rgba(162,255,191,0.2)]"></div>
                  <div className="flex-1 bg-primary rounded-lg shadow-[0_0_10px_rgba(162,255,191,0.2)]"></div>
                  <div className="flex-1 bg-primary rounded-lg shadow-[0_0_10px_rgba(162,255,191,0.2)]"></div>
                  <div className="flex-1 bg-surface-container-highest rounded-lg border border-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-outline text-xs">lock</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-3 px-1">
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Bio-Integrity</h4>
                    <p className="text-[10px] text-on-surface-variant">Hydration & Movement</p>
                  </div>
                  <div className="text-right">
                    <span className="text-primary font-headline font-extrabold text-xl">12</span>
                    <span className="text-[10px] text-on-surface-variant block uppercase">Day Streak</span>
                  </div>
                </div>
                <div className="flex gap-2 h-12">
                  <div className="flex-1 bg-primary rounded-lg"></div>
                  <div className="flex-1 bg-primary rounded-lg"></div>
                  <div className="flex-1 bg-primary rounded-lg"></div>
                  <div className="flex-1 bg-primary rounded-lg"></div>
                  <div className="flex-1 bg-primary rounded-lg"></div>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 py-4 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:bg-white/5 hover:text-white transition-all relative z-10 cursor-pointer">
              Expand Performance Metrics
            </button>
          </div>
          <div className="bg-surface-container-lowest rounded-[2rem] p-8 border border-primary/10 relative group transition-all hover:bg-surface-container-low cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Peak Hour Identified</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Your task completion rate is 40% higher between <span className="text-primary font-bold">09:00 - 11:30</span>. Schedule heavy protocols then.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
