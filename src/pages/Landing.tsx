import { Link } from 'react-router-dom';

export function Landing() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-14 bg-[#0e0e0e]/80 backdrop-blur-xl shadow-[0px_0px_20px_rgba(162,255,191,0.06)]">
        <Link to="/" className="text-xl font-bold tracking-tighter text-[#fcf9f8] font-headline">OBSIDIAN</Link>
        <div className="hidden md:flex items-center space-x-12">
          <a className="font-headline tracking-[0.05em] uppercase text-[0.875rem] font-medium text-[#a2ffbf] border-b-2 border-[#a2ffbf] pb-1" href="#">Overview</a>
          <Link to="/tasks" className="font-headline tracking-[0.05em] uppercase text-[0.875rem] font-medium text-[#adaaaa] hover:text-[#fcf9f8] transition-colors">Tasks</Link>
          <Link to="/insights" className="font-headline tracking-[0.05em] uppercase text-[0.875rem] font-medium text-[#adaaaa] hover:text-[#fcf9f8] transition-colors">Insights</Link>
        </div>
        <div className="flex items-center space-x-6">
          <button className="material-symbols-outlined text-[#adaaaa] hover:text-[#fcf9f8] transition-all">notifications</button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/15">
            <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo3bSVkmfb0AiuzwQQTcAhKaRCECU1oahNg_1jgjG3I_xMYbkBTAwxU6ddcIOWKNyxo901V9GQnnSAcEV29PqEh3iHKEHDombrz66BIpzhLgtJrvUAb4bUnpPlQwNlXx8N_EXNvbTh4WPbjMJJsvI8HMDWjVYaPwI4CpDf7w9qteUd9Cy7tLiaz9A6Kre2ZlnDNpIdMjsNQfu4VaWPNyN4zgpldDYhDSJgXPM7tkto7t1Z-fY52wUO1_KSYCnw-uwp9VdHdzxO8MnL"/>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col items-center justify-center pt-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00e3fd]/10 blur-[120px] rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/15 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant font-label">System Online: v2.4.0</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tight text-[#fcf9f8] mb-6 cyan-glow-text leading-[1.1]">
            Track What <br className="hidden md:block"/> Matters
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            Focus on flow, not just features. Our interface disappears so your work can take center stage. Built for the elite productivity of the modern era.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/dashboard" className="neon-glow-btn pulse-gradient px-10 py-4 rounded-full text-on-primary font-bold text-sm uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95">
              Get Started
            </Link>
            <button className="group px-10 py-4 rounded-full text-primary font-bold text-sm uppercase tracking-widest relative overflow-hidden transition-all duration-300">
              <span className="relative z-10">See Features</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant">Scroll</span>
          <span className="material-symbols-outlined text-[#00e3fd] animate-bounce">expand_more</span>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-card rounded-xl p-8 border border-outline-variant/15 flex flex-col justify-between group transition-all duration-300 hover:border-primary/20">
            <div>
              <span className="material-symbols-outlined text-[#00e3fd] text-4xl mb-6">target</span>
              <h3 className="font-headline text-3xl font-bold mb-4 text-[#fcf9f8] uppercase tracking-tight">The Obsidian Flow</h3>
              <p className="text-on-surface-variant leading-relaxed max-w-md">Experience productivity that adapts to your mental rhythm. No clutter, just the data you need to reach peak performance.</p>
            </div>
            <div className="mt-12 h-48 rounded-lg bg-surface-container-lowest relative overflow-hidden">
              <img alt="Flow State Visualization" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWmc8y0D4AqAWLdDqpEQKIoTZ_w7LBIZgMreHRFTTMgEG_zasFi00KyRMtyFMxtIh2IZNIyUlRC12hcv65_k9ZW_c4RkTPV8wV2UqqxLW7qnLiSLV0Xw61ihOgEUX4-X_HRjDpgJP-N4c8JL8BULzuvnc31c8C-SK4KwUVZ3dpXrI4rvaP4IxnOA6kTT2qRU24h_mNkwaVsLqiIMmlP6wM7lF7cNUuv4ktdF1fDH_R5Gj3BKJV6npgQE3KPKzpJCWC9ODOx6ltCgf4"/>
            </div>
          </div>
          <div className="glass-card rounded-xl p-8 border border-outline-variant/15 flex flex-col justify-between hover:border-[#00e3fd]/20 transition-all duration-300">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">query_stats</span>
            <div>
              <h3 className="font-headline text-3xl font-bold mb-4 text-[#fcf9f8] uppercase tracking-tight">Rapid <br/> Insights</h3>
              <div className="space-y-4">
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-primary shadow-[0_0_8px_#a2ffbf]"></div>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full w-[62%] bg-[#00e3fd] shadow-[0_0_8px_#00e3fd]"></div>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full w-[94%] bg-[#fcf9f8]/40"></div>
                </div>
              </div>
              <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mt-6">Automated tracking engine active</p>
            </div>
          </div>
          <div className="glass-card rounded-xl p-8 border border-outline-variant/15 flex flex-col items-center justify-center text-center hover:border-primary/20 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">checklist</span>
            </div>
            <h4 className="font-headline text-xl font-bold text-[#fcf9f8] uppercase tracking-wide">Zero Friction</h4>
            <p className="text-sm text-on-surface-variant mt-2">Add tasks in <span className="text-primary">0.4s</span></p>
          </div>
          <div className="md:col-span-2 glass-card rounded-xl p-8 border border-outline-variant/15 flex flex-row items-center justify-between hover:border-[#00e3fd]/20 transition-all duration-300">
            <div className="max-w-xs">
              <h4 className="font-headline text-xl font-bold text-[#fcf9f8] uppercase tracking-wide">Deep Integration</h4>
              <p className="text-sm text-on-surface-variant mt-2">Sync your entire ecosystem into a single glass surface. Real-time updates across all devices.</p>
            </div>
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest border-2 border-background flex items-center justify-center"><span className="material-symbols-outlined text-[#00e3fd] text-xl">database</span></div>
              <div className="w-12 h-12 rounded-full bg-surface-container-highest border-2 border-background flex items-center justify-center"><span className="material-symbols-outlined text-primary text-xl">cloud_sync</span></div>
              <div className="w-12 h-12 rounded-full bg-surface-container-highest border-2 border-background flex items-center justify-center"><span className="material-symbols-outlined text-[#fcf9f8] text-xl">terminal</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-full"></div>
          <img alt="Obsidian Interface" className="relative rounded-2xl shadow-2xl border border-outline-variant/15 grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGDIBJFz9TY_76z1mzRbuNuFeasR8C5DtH0BOmAEVWEG_u3eRuqLwPh4Jdnj4-nx1s5_0X9F5lV5Vl9nTot_vj7-HM6AdCJJpZm3urmJ7ldCu-M9D62BD1UHZlLLze3-lZ9yMZf-tKiSq5iu9PpyjHo3R9wgziI4Vc5JA06OloBRMiBnQ1DPKKYxWVlknGMMTm62s2lqhaBCARckD8eA-RS8RZ1wwLM6l_JW9TbqucGzfxa63h5pjlh8dD4CAJyW44UdN6CWGnpbPG"/>
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-[#fcf9f8] uppercase">Focus is the <br/> Ultimate Currency</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 text-primary"><span className="material-symbols-outlined">bolt</span></div>
              <div>
                <h5 className="text-[#fcf9f8] font-bold uppercase tracking-wide mb-1">Buttery Smooth Easing</h5>
                <p className="text-on-surface-variant text-sm leading-relaxed">Every interaction is calibrated with precision bezier curves for a tactile, responsive feel.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 text-[#00e3fd]"><span className="material-symbols-outlined">visibility_off</span></div>
              <div>
                <h5 className="text-[#fcf9f8] font-bold uppercase tracking-wide mb-1">No-Line Design</h5>
                <p className="text-on-surface-variant text-sm leading-relaxed">Boundaries are defined by tonal shifts, not borders, reducing visual noise by 40%.</p>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <button className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center group">
              Learn about our philosophy
              <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-2">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-surface-container-low pt-16 pb-8 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-outline-variant/15 pt-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-lg font-black italic text-[#a2ffbf] font-headline">OBSIDIAN</Link>
          </div>
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant hover:text-[#fcf9f8] transition-colors" href="#">Privacy</a>
            <a className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant hover:text-[#fcf9f8] transition-colors" href="#">Terms</a>
            <a className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant hover:text-[#fcf9f8] transition-colors" href="#">Contact</a>
          </div>
          <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-50">
            © 2024 Obsidian Flow. Built for the high-performance mind.
          </div>
        </div>
      </footer>

      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 pb-safe px-4 bg-[#0e0e0e]/90 backdrop-blur-md rounded-t-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <Link to="/dashboard" className="flex flex-col items-center justify-center text-[#a2ffbf] scale-110">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">Home</span>
        </Link>
        <Link to="/tasks" className="flex flex-col items-center justify-center text-[#adaaaa] opacity-60">
          <span className="material-symbols-outlined">checklist</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">Tasks</span>
        </Link>
        <Link to="/insights" className="flex flex-col items-center justify-center text-[#adaaaa] opacity-60">
          <span className="material-symbols-outlined">query_stats</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">Stats</span>
        </Link>
        <button className="flex flex-col items-center justify-center text-[#adaaaa] opacity-60">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">Profile</span>
        </button>
      </nav>
    </div>
  );
}
