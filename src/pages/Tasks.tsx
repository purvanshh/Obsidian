import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  PageTransition,
  SectionReveal,
  StaggerList,
  cardEntry,
  interactiveButton,
  interactiveCard,
  itemFadeUp,
  transitions,
} from '../lib/motion';

type TaskItem = {
  id: string;
  title: string;
  meta: string;
  badge: string;
};

const INITIAL_TASKS: TaskItem[] = [
  {
    id: 'task-1',
    title: 'Finalize Q4 Strategic Objectives',
    meta: 'High Priority • Due 14:00',
    badge: 'Strategic',
  },
  {
    id: 'task-2',
    title: 'Conduct System Integrity Audit',
    meta: 'Medium • Monthly Recurring',
    badge: 'System',
  },
];

export function Tasks() {
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const addTask = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setTasks((prev) => [
      {
        id: `task-${crypto.randomUUID ? crypto.randomUUID() : Date.now()}`,
        title: trimmed,
        meta: 'New • Today',
        badge: 'New',
      },
      ...prev,
    ]);
    setInput('');
  };

  const completeTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <PageTransition className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
      <SectionReveal as="header" className="mb-10 lg:mb-16 mt-2 flex flex-col gap-2">
        <div className="inline-block self-start px-4 py-1.5 rounded-full bg-surface-container-high border border-primary/20 text-primary text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-2 shadow-sm">
          Operational Status: Active
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-[4rem] font-headline font-extrabold tracking-tighter leading-tight text-white mb-2">
          System <span className="text-primary drop-shadow-[0_0_10px_rgba(162,255,191,0.3)]">Protocol</span>
        </h1>
        <p className="text-on-surface-variant max-w-xl font-medium text-sm sm:text-base leading-relaxed">
          Precision workspace for high-output environments. Align your habits with elite operational standards.
        </p>
      </SectionReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-7 space-y-8">
          <SectionReveal className="relative">
            <motion.div
              className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: isFocused ? 1 : 0, transition: { ...transitions.fast } }}
            />
            <motion.div
              className="relative flex items-center bg-surface-container-lowest rounded-2xl p-2 border border-white/5 shadow-inner"
              animate={{ scale: isFocused ? 1.01 : 1 }}
              transition={transitions.fast}
            >
              <span className="material-symbols-outlined text-primary-container ml-4">bolt</span>
              <input
                className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline py-4 px-4 font-medium"
                placeholder="Initiate new task protocol..."
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addTask();
                  }
                }}
              />
              <motion.button
                className="bg-surface-container-high hover:bg-primary hover:text-on-primary text-primary p-3 rounded-xl flex items-center justify-center mr-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary/70"
                onClick={addTask}
                aria-label="Add task"
                {...interactiveButton}
              >
                <span className="material-symbols-outlined">keyboard_return</span>
              </motion.button>
            </motion.div>
          </SectionReveal>

          <SectionReveal>
            <h2 className="text-xl sm:text-2xl font-headline font-bold mb-8 flex items-center gap-3 text-white">
              <span className="w-1.5 h-6 sm:h-7 bg-primary rounded-full shadow-[0_0_8px_rgba(162,255,191,0.5)]"></span>
              Today's Protocol
            </h2>

            <StaggerList className="space-y-6">
              <AnimatePresence initial={false}>
                {tasks.map((task) => (
                  <motion.div
                    key={task.id}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-7 gap-6 bg-surface-container-low rounded-3xl border border-white/5 hover:bg-surface-container-high/90 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] cursor-pointer"
                    variants={itemFadeUp}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    layout
                    {...interactiveCard}
                  >
                    <div className="flex items-start sm:items-center gap-5 sm:gap-6">
                      <motion.button
                        className="shrink-0 mt-1 sm:mt-0 w-8 h-8 rounded-lg border-2 border-primary/40 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary/70"
                        onClick={() => completeTask(task.id)}
                        aria-label={`Complete ${task.title}`}
                        {...interactiveButton}
                      >
                        <AnimatePresence initial={false}>
                          <motion.span
                            key="checkmark"
                            className="material-symbols-outlined text-primary text-[18px]"
                            style={{ fontVariationSettings: "'wght' 700" }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, transition: { ...transitions.fast } }}
                            exit={{ scale: 0.5, opacity: 0, transition: { ...transitions.fast } }}
                          >
                            check
                          </motion.span>
                        </AnimatePresence>
                      </motion.button>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight leading-tight">{task.title}</h3>
                        <p className="text-xs text-on-surface-variant font-medium mt-1">{task.meta}</p>
                      </div>
                    </div>
                    <div className="flex shrink-0 lg:ml-auto">
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-highest text-[10px] font-bold text-on-surface-variant border border-white/5 uppercase tracking-tighter self-start sm:self-auto">
                        {task.badge}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <motion.div
                className="flex items-center p-5 bg-surface-container-low/40 rounded-2xl border border-white/5"
                variants={cardEntry}
                initial="initial"
                animate="animate"
              >
                <div className="w-6 h-6 rounded-lg bg-surface-container-highest/50 mr-5"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-48 bg-surface-container-highest skeleton-shimmer rounded"></div>
                  <div className="h-2 w-24 bg-surface-container-highest skeleton-shimmer rounded opacity-50"></div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center p-5 bg-surface-container-low/40 rounded-2xl border border-white/5"
                variants={cardEntry}
                initial="initial"
                animate="animate"
              >
                <div className="w-6 h-6 rounded-lg bg-surface-container-highest/50 mr-5"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-36 bg-surface-container-highest skeleton-shimmer rounded"></div>
                  <div className="h-2 w-20 bg-surface-container-highest skeleton-shimmer rounded opacity-50"></div>
                </div>
              </motion.div>
            </StaggerList>
          </SectionReveal>
        </section>

        <section className="lg:col-span-5 space-y-6 lg:space-y-8">
          <SectionReveal className="bg-surface-container-high rounded-[2rem] p-6 sm:p-8 border border-white/5 relative overflow-hidden">
            <motion.div
              className="absolute top-0 right-0 p-8 opacity-10"
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0, transition: { ...transitions.medium } }}
              viewport={{ once: true }}
            >
              <span className="material-symbols-outlined text-6xl sm:text-8xl" style={{ fontVariationSettings: "'FILL' 0" }}>vital_signs</span>
            </motion.div>
            <h2 className="text-lg sm:text-xl font-headline font-bold mb-6 lg:mb-8 flex items-center gap-2 text-white">
              <span className="w-1.5 h-5 sm:h-6 bg-primary rounded-full"></span>
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
                <motion.div className="flex gap-2 h-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={transitions.medium}>
                  <div className="flex-1 bg-primary rounded-lg shadow-[0_0_10px_rgba(162,255,191,0.2)]"></div>
                  <div className="flex-1 bg-primary rounded-lg shadow-[0_0_10px_rgba(162,255,191,0.2)]"></div>
                  <div className="flex-1 bg-primary rounded-lg shadow-[0_0_10px_rgba(162,255,191,0.2)]"></div>
                  <div className="flex-1 bg-primary rounded-lg shadow-[0_0_10px_rgba(162,255,191,0.2)]"></div>
                  <div className="flex-1 bg-surface-container-highest rounded-lg border border-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-outline text-xs">lock</span>
                  </div>
                </motion.div>
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
                <motion.div className="flex gap-2 h-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={transitions.medium}>
                  <div className="flex-1 bg-primary rounded-lg"></div>
                  <div className="flex-1 bg-primary rounded-lg"></div>
                  <div className="flex-1 bg-primary rounded-lg"></div>
                  <div className="flex-1 bg-primary rounded-lg"></div>
                  <div className="flex-1 bg-primary rounded-lg"></div>
                </motion.div>
              </div>
            </div>
            <motion.button
              className="w-full mt-8 py-4 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:bg-white/5 hover:text-white relative z-10"
              {...interactiveButton}
            >
              Expand Performance Metrics
            </motion.button>
          </SectionReveal>

          <SectionReveal className="bg-surface-container-lowest rounded-[2rem] p-8 border border-primary/10 relative group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Peak Hour Identified</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Your task completion rate is 40% higher between <span className="text-primary font-bold">09:00 - 11:30</span>. Schedule heavy protocols then.</p>
              </div>
            </div>
          </SectionReveal>
        </section>
      </div>
    </PageTransition>
  );
}
