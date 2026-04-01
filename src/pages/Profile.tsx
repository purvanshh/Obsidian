export function Profile() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8 lg:gap-12 mt-4 lg:mt-8">
      {/* Section 1: Operator Profile & Productivity Pulse (Editorial Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Operator Profile Card (Asymmetric Span) */}
        <section className="col-span-1 lg:col-span-7 bg-surface-container-high rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] border border-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
            <div className="relative shrink-0">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 shadow-[0_0_20px_rgba(162,255,191,0.1)] transition-all duration-500">
                <img 
                  alt="Operator Alex Rivera" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5sKXrcmHYfNOlnA35TaR18sGx4IDLLu2HZJCsLC0WyxlXIjxiSS3nfjZLOa9dJZkZUW_VZcacFoVeS7icuSup9nFpUsBnfHJfg_7xrO3p7gSVhhN-G3Cdx0gsOXvpKGD_-j3UyoseeTkGZV1-O0bTVabKR3jVktWMSLltCl3CjhpLhylpnvyL5XL3wM-LfrihORz8-32wjim9ED52EA0B-2lQTg6tLJNAZFCXl8KxD4nxZ0CCbl9RPasQl_eUiElfpIWDVS__ctqJ" 
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-[#002913] px-3 py-1 text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-lg shadow-lg">
                PRO
              </div>
            </div>
            
            <div className="flex flex-col gap-3 md:gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold tracking-tight text-white">Alex Rivera</h1>
                <p className="text-on-surface-variant font-medium mt-1 text-sm md:text-base">Lead Protocol Architect • Silicon Valley, CA</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-2">
                <button className="bg-primary text-[#002913] px-6 py-2.5 rounded-lg font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(162,255,191,0.3)] cursor-pointer">
                  Edit Profile
                </button>
                <button className="bg-surface-container-highest text-white px-6 py-2.5 rounded-lg font-bold text-xs sm:text-sm border border-white/10 hover:bg-surface-container-high transition-all cursor-pointer">
                  Share Archive
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Productivity Pulse (Bento Style) */}
        <section className="col-span-1 lg:col-span-5 flex flex-col gap-6">
          <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full border-l-4 border-primary shadow-lg border-y border-r border-white/5">
            <div>
              <h3 className="text-on-surface-variant font-headline font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-6">Productivity Pulse</h3>
              <div className="flex flex-col gap-4 md:gap-6">
                <div>
                  <span className="text-4xl md:text-5xl font-headline font-black text-white">1,248</span>
                  <p className="text-on-surface-variant text-xs md:text-sm mt-1">Focus Hours Logged</p>
                </div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-container to-primary w-[85%] shadow-[0_0_8px_rgba(162,255,191,0.5)]"></div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-end">
              <div>
                <span className="text-2xl md:text-3xl font-headline font-bold text-primary">42</span>
                <p className="text-[10px] md:text-xs text-on-surface-variant uppercase tracking-wider font-bold">Protocols Completed</p>
              </div>
              <span className="material-symbols-outlined text-primary-container text-4xl">bolt</span>
            </div>
          </div>
        </section>
      </div>

      {/* Section 2: Security & Preferences (Horizontal Stacking) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Security Clearance */}
        <section className="flex flex-col gap-6 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">verified_user</span>
            <h2 className="text-xl md:text-2xl font-headline font-bold tracking-tight text-white">Security Clearance</h2>
          </div>
          <div className="space-y-4">
            <div className="group bg-surface-container-low p-5 md:p-6 rounded-2xl flex items-center justify-between hover:bg-surface-container-high transition-colors border border-white/5 shadow-sm cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-surface-container-highest flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-surface-variant">password</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm md:text-base group-hover:text-primary transition-colors">Master Access Key</p>
                  <p className="text-on-surface-variant text-xs mt-0.5">Last updated 12 days ago</p>
                </div>
              </div>
              <button className="text-primary text-xs sm:text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Reset</button>
            </div>
            
            <div className="group bg-surface-container-low p-5 md:p-6 rounded-2xl flex items-center justify-between hover:bg-surface-container-high transition-colors border border-white/5 shadow-sm cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-surface-container-highest flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-surface-variant">phonelink_lock</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm md:text-base group-hover:text-primary transition-colors">Multi-Factor Auth</p>
                  <p className="text-primary text-xs font-medium mt-0.5">Secured via Biometrics</p>
                </div>
              </div>
              <div className="w-10 h-5 bg-primary/20 rounded-full relative flex items-center px-1 border border-primary/30 shadow-[0_0_10px_rgba(162,255,191,0.2)]">
                <div className="w-3.5 h-3.5 bg-primary rounded-full absolute right-1"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Preference Protocols */}
        <section className="flex flex-col gap-6 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">tune</span>
            <h2 className="text-xl md:text-2xl font-headline font-bold tracking-tight text-white">Preference Protocols</h2>
          </div>
          <div className="space-y-4">
            <div className="group bg-surface-container-low p-5 md:p-6 rounded-2xl flex items-center justify-between border border-white/5 hover:bg-surface-container-high transition-colors cursor-pointer shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-surface-container-highest flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-surface-variant">dark_mode</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm md:text-base group-hover:text-primary transition-colors">Visual Interface</p>
                  <p className="text-on-surface-variant text-xs mt-0.5">Obsidian Dark (Active)</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors group-hover:translate-x-1">chevron_right</span>
            </div>
            
            <div className="group bg-surface-container-low p-5 md:p-6 rounded-2xl flex items-center justify-between border border-white/5 hover:bg-surface-container-high transition-colors cursor-pointer shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-surface-container-highest flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-surface-variant">campaign</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm md:text-base group-hover:text-primary transition-colors">Priority Notifications</p>
                  <p className="text-on-surface-variant text-xs mt-0.5">System Alerts Only</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors group-hover:translate-x-1">chevron_right</span>
            </div>
          </div>
        </section>
      </div>

      {/* Danger Zone / Tertiary Actions */}
      <footer className="mt-8 md:mt-12 py-8 md:py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
          <div className="max-w-md">
            <h3 className="text-error font-headline font-bold mb-2 text-lg">Deactivation Protocol</h3>
            <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">Permanently cease all operations and purge protocol archives. This action is irreversible.</p>
          </div>
          <button className="bg-surface-container-lowest text-error/80 border border-error/20 px-6 md:px-8 py-3 rounded-lg text-sm font-bold hover:bg-error/10 hover:text-error transition-all active:scale-95 cursor-pointer w-full md:w-auto">
            Terminate Account
          </button>
        </div>
      </footer>
    </div>
  );
}
