export function Calendar() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col xl:flex-row gap-8">
      {/* Calendar Section */}
      <section className="flex-1">
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 lg:mb-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-headline font-extrabold tracking-tighter text-white">March 2024</h1>
            <p className="text-on-surface-variant font-body mt-2">Peak performance cycle active.</p>
          </div>
          <div className="flex gap-4">
            <button className="p-2 rounded-full bg-surface-container-high hover:bg-surface-container-highest transition-colors cursor-pointer text-white">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="p-2 rounded-full bg-surface-container-high hover:bg-surface-container-highest transition-colors cursor-pointer text-white">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </header>

        {/* Calendar Headings */}
        <div className="grid grid-cols-7 mb-4">
          <div className="text-center text-[10px] sm:text-xs font-bold font-headline text-on-surface-variant tracking-widest uppercase py-2">Mon</div>
          <div className="text-center text-[10px] sm:text-xs font-bold font-headline text-on-surface-variant tracking-widest uppercase py-2">Tue</div>
          <div className="text-center text-[10px] sm:text-xs font-bold font-headline text-on-surface-variant tracking-widest uppercase py-2">Wed</div>
          <div className="text-center text-[10px] sm:text-xs font-bold font-headline text-on-surface-variant tracking-widest uppercase py-2">Thu</div>
          <div className="text-center text-[10px] sm:text-xs font-bold font-headline text-on-surface-variant tracking-widest uppercase py-2">Fri</div>
          <div className="text-center text-[10px] sm:text-xs font-bold font-headline text-on-surface-variant tracking-widest uppercase py-2">Sat</div>
          <div className="text-center text-[10px] sm:text-xs font-bold font-headline text-on-surface-variant tracking-widest uppercase py-2">Sun</div>
        </div>

        {/* Monthly Grid */}
        <div className="grid grid-cols-7 gap-1 sm:gap-2">
          {/* Empty slots for alignment */}
          <div className="aspect-square bg-surface-container-lowest/20 rounded-lg sm:rounded-xl"></div>
          <div className="aspect-square bg-surface-container-lowest/20 rounded-lg sm:rounded-xl"></div>
          <div className="aspect-square bg-surface-container-lowest/20 rounded-lg sm:rounded-xl"></div>
          <div className="aspect-square bg-surface-container-lowest/20 rounded-lg sm:rounded-xl"></div>

          {/* Calendar Days */}
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">01</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">02</span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary mx-auto shadow-[0_0_8px_rgba(162,255,191,0.5)]"></div>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">03</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">04</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">05</span>
          </div>

          {/* Active/Today Day */}
          <div className="aspect-square bg-surface-container-high p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between border-b-2 border-primary hover:scale-[1.05] transition-all duration-300 cursor-pointer shadow-[0_0_30px_rgba(162,255,191,0.05)] relative z-10">
            <span className="text-primary font-headline font-bold text-xs sm:text-base">06</span>
            <div className="flex flex-col gap-1 w-full">
              <div className="h-0.5 sm:h-1 bg-primary/40 rounded-full w-full"></div>
              <div className="h-0.5 sm:h-1 bg-primary/20 rounded-full w-2/3"></div>
            </div>
          </div>

          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">07</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">08</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">09</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">10</span>
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary mx-auto opacity-50"></div>
          </div>

          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">11</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">12</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">13</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">14</span>
            <div className="w-full h-0.5 sm:h-1 bg-primary/20 rounded-full"></div>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">15</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">16</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">17</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">18</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">19</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">20</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">21</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">22</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">23</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">24</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">25</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">26</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">27</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">28</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">29</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">30</span>
          </div>
          <div className="aspect-square bg-surface-container-low p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer">
            <span className="text-on-surface-variant font-headline font-bold text-xs sm:text-base">31</span>
          </div>
        </div>
      </section>

      {/* Side Panel: Upcoming Protocols */}
      <aside className="w-full xl:w-96 bg-surface-container-low rounded-[2rem] p-6 sm:p-8 flex flex-col gap-10 border border-white/5">
        <div>
          <h2 className="text-xl font-headline font-extrabold text-white mb-6 flex items-center justify-between">
            Upcoming Protocols
            <span className="text-primary text-xs font-label px-2 py-1 bg-primary/10 rounded-full">4 Pending</span>
          </h2>
          <div className="space-y-6">
            {/* Protocol Item */}
            <div className="group cursor-pointer">
              <div className="flex justify-between items-start mb-1">
                <span className="text-xs font-bold font-headline tracking-widest text-primary/70 uppercase">09:00 AM — March 06</span>
                <span className="material-symbols-outlined text-primary scale-75 opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </div>
              <h3 className="text-lg font-headline font-bold text-white group-hover:text-primary transition-colors">Cognitive Deep Work</h3>
              <p className="text-sm text-on-surface-variant font-body mt-1 border-l-2 border-primary/20 pl-3">Focus session: UI/UX system architecture design for Project Kinetic.</p>
            </div>
            
            {/* Protocol Item */}
            <div className="group cursor-pointer">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] sm:text-xs font-bold font-headline tracking-widest text-on-surface-variant uppercase">02:00 PM — March 06</span>
                <span className="material-symbols-outlined text-primary scale-75 opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </div>
              <h3 className="text-lg font-headline font-bold text-white group-hover:text-primary transition-colors">Neuro-Sync Review</h3>
              <p className="text-sm text-on-surface-variant font-body mt-1 border-l-2 border-white/10 pl-3">Team alignment and sync on technical hurdles.</p>
            </div>
            
            {/* Protocol Item */}
            <div className="group cursor-pointer">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] sm:text-xs font-bold font-headline tracking-widest text-on-surface-variant uppercase">08:00 AM — March 10</span>
                <span className="material-symbols-outlined text-primary scale-75 opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </div>
              <h3 className="text-lg font-headline font-bold text-white group-hover:text-primary transition-colors">Physical Recalibration</h3>
              <p className="text-sm text-on-surface-variant font-body mt-1 border-l-2 border-white/10 pl-3">Scheduled interval training and wellness check.</p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8">
          <div className="mb-8 p-6 rounded-2xl bg-surface-container-high border border-white/5 shadow-lg relative overflow-hidden">
            <div className="text-[10px] sm:text-xs font-bold font-headline tracking-widest text-on-surface-variant uppercase mb-4 relative z-10">Productivity Score</div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 relative z-10">
              <span className="text-4xl sm:text-5xl font-headline font-black text-primary">94%</span>
              <div className="flex-1 h-3 bg-surface-container rounded-full overflow-hidden border border-white/5 mt-2 sm:mt-0">
                <div className="h-full bg-primary w-[94%] shadow-[0_0_10px_rgba(162,255,191,0.5)] rounded-full"></div>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/10 rounded-full blur-[30px] pointer-events-none"></div>
          </div>
          
          <button className="w-full py-5 bg-primary text-[#002913] font-headline font-extrabold rounded-2xl hover:shadow-[0_0_30px_rgba(162,255,191,0.2)] transition-all flex items-center justify-center gap-3 active:scale-95 group cursor-pointer shadow-sm">
            <span className="material-symbols-outlined font-bold group-hover:rotate-90 transition-transform">add</span>
            Schedule New Protocol
          </button>
        </div>
      </aside>
    </div>
  );
}
