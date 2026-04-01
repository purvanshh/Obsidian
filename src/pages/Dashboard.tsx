import { motion } from 'framer-motion';
import { SectionReveal, StaggerList, interactiveButton, interactiveCard, itemFadeUp, transitions } from '../lib/motion';

export function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
      <SectionReveal as="header" className="mb-8 lg:mb-12 mt-2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-extrabold tracking-tighter text-white mb-2 leading-tight">Peak Dashboard</h1>
        <p className="text-on-surface-variant font-medium text-sm sm:text-base">Monitoring Obsidian Kinetic efficiency metrics.</p>
      </SectionReveal>
      <StaggerList className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
        <motion.section
          className="md:col-span-2 bg-surface-container-low p-6 sm:p-8 lg:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group"
          variants={itemFadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={transitions.medium}
          {...interactiveCard}
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-300"></div>
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-12 relative z-10 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6 max-w-md">
              <h2 className="text-on-surface-variant text-[10px] sm:text-xs font-label uppercase tracking-[0.2em]">Live Performance</h2>
              <h3 className="text-3xl sm:text-4xl md:text-[2.5rem] font-headline font-bold text-white leading-tight">Your productivity is reaching peak levels.</h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">System analysis shows a 12% increase in cognitive throughput compared to last session. Keep the momentum.</p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-surface-container-highest rounded-full text-[10px] sm:text-xs font-bold text-primary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  STABLE OUTPUT
                </div>
              </div>
            </div>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center mx-auto lg:mx-0 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 256 256">
                <circle className="text-surface-container-highest" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeWidth="12"></circle>
                <circle className="text-primary drop-shadow-[0_0_12px_rgba(162,255,191,0.6)]" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeDasharray="691" strokeDashoffset="138" strokeLinecap="round" strokeWidth="12"></circle>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-5xl sm:text-6xl font-headline font-black text-white">82</span>
                <span className="text-[10px] sm:text-xs text-on-surface-variant font-label tracking-widest uppercase">Score</span>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.div
          className="bg-surface-container-high p-6 sm:p-8 lg:p-10 rounded-[2rem] group"
          variants={itemFadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={transitions.medium}
          {...interactiveCard}
        >
          <div className="flex justify-between items-start mb-6 lg:mb-10">
            <span className="material-symbols-outlined text-primary p-2.5 sm:p-3 bg-primary/10 rounded-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>task_alt</span>
            <span className="text-primary font-bold text-sm">+4 today</span>
          </div>
          <div className="text-4xl sm:text-5xl font-headline font-black text-white mb-2">24</div>
          <div className="text-on-surface-variant font-medium text-sm sm:text-base">Tasks Completed</div>
          <div className="mt-6 lg:mt-8 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4 rounded-full"></div>
          </div>
        </motion.div>
        <motion.div
          className="bg-surface-container-high p-6 sm:p-8 lg:p-10 rounded-[2rem] group"
          variants={itemFadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={transitions.medium}
          {...interactiveCard}
        >
          <div className="flex justify-between items-start mb-6 lg:mb-10">
            <span className="material-symbols-outlined text-tertiary p-2.5 sm:p-3 bg-tertiary/10 rounded-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            <span className="text-tertiary font-bold text-xs sm:text-sm">Top 5%</span>
          </div>
          <div className="text-4xl sm:text-5xl font-headline font-black text-white mb-2">14</div>
          <div className="text-on-surface-variant font-medium text-sm sm:text-base">Day Streak</div>
          <div className="mt-6 lg:mt-8 flex gap-1.5">
            <div className="h-1 flex-1 bg-tertiary rounded-full"></div>
            <div className="h-1 flex-1 bg-tertiary rounded-full"></div>
            <div className="h-1 flex-1 bg-tertiary rounded-full"></div>
            <div className="h-1 flex-1 bg-tertiary rounded-full"></div>
            <div className="h-1 flex-1 bg-tertiary/20 rounded-full"></div>
          </div>
        </motion.div>
        <motion.section
          className="md:col-span-2 mt-4"
          variants={itemFadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={transitions.medium}
        >
          <div className="flex justify-between items-end mb-8">
            <h4 className="text-xl font-headline font-bold text-white">Recent Activity</h4>
            <motion.button className="text-primary text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary/70" {...interactiveButton}>View All</motion.button>
          </div>
          <div className="space-y-2">
            {[
              { icon: 'terminal', title: 'Core API Integration', subtitle: 'Pushed to production • 2h ago', pts: '+1,200 pts', type: 'Success' },
              { icon: 'architecture', title: 'System Architecture Review', subtitle: 'Completed with 3 collaborators • 5h ago', pts: '+850 pts', type: 'Review' },
              { icon: 'database', title: 'Database Optimization', subtitle: 'Scheduled maintenance • 8h ago', pts: '+400 pts', type: 'System' }
            ].map((activity, idx) => (
              <motion.div
                key={idx}
                className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high cursor-pointer group"
                variants={itemFadeUp}
                initial="initial"
                animate="animate"
                transition={{ ...transitions.fast, delay: idx * 0.06 }}
                {...interactiveCard}
              >
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
              </motion.div>
            ))}
          </div>
        </motion.section>
      </StaggerList>
    </div>
  );
}
