import React, { useState } from 'react';
import { useObsidian } from '../context/ObsidianContext';
import { getDaysInMonth, getFirstDayOfMonth, MONTHS } from '../lib/date-utils';

export function Calendar() {
  const { 
    currentMonth, 
    currentYear, 
    nextMonth, 
    prevMonth, 
    protocols, 
    addProtocol,
    deleteProtocol 
  } = useObsidian();

  // Scheduler modal states
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTime, setNewTime] = useState('09:00 AM');
  const [newDate, setNewDate] = useState('');
  const [newType, setNewType] = useState('Cognitive');
  const [newDesc, setNewDesc] = useState('');

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);

  const offsetSlots = Array.from({ length: firstDayIndex });
  const daySlots = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Filter and sort protocols for the selected month
  const activeMonthProtocols = protocols
    .filter((p) => {
      const [year, month] = p.date.split('-').map(Number);
      return year === currentYear && month === currentMonth + 1;
    })
    .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDate) return;
    
    addProtocol({
      title: newTitle.trim(),
      time: newTime,
      date: newDate,
      type: newType,
      description: newDesc.trim(),
    });

    setNewTitle('');
    setNewDesc('');
    setShowModal(false);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col xl:flex-row gap-8">
      {/* Calendar Section */}
      <section className="flex-1">
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 lg:mb-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-headline font-extrabold tracking-tighter text-white">
              {MONTHS[currentMonth]} {currentYear}
            </h1>
            <p className="text-on-surface-variant font-body mt-2">Peak performance cycle active.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prevMonth}
              className="p-2 rounded-full bg-surface-container-high hover:bg-surface-container-highest transition-colors cursor-pointer text-white"
              aria-label="Previous month"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button 
              onClick={nextMonth}
              className="p-2 rounded-full bg-surface-container-high hover:bg-surface-container-highest transition-colors cursor-pointer text-white"
              aria-label="Next month"
            >
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
          {offsetSlots.map((_, idx) => (
            <div key={`offset-${idx}`} className="aspect-square bg-surface-container-lowest/20 rounded-lg sm:rounded-xl"></div>
          ))}

          {/* Calendar Days */}
          {daySlots.map((day) => {
            const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const today = new Date();
            const isToday = 
              today.getDate() === day && 
              today.getMonth() === currentMonth && 
              today.getFullYear() === currentYear;

            const dayProtocols = protocols.filter((p) => p.date === dateStr);

            return (
              <div
                key={`day-${day}`}
                className={`aspect-square p-2 sm:p-4 rounded-lg sm:rounded-xl flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.05] transition-all duration-300 cursor-pointer ${
                  isToday
                    ? 'bg-surface-container-high border-b-2 border-primary shadow-[0_0_30px_rgba(162,255,191,0.05)] relative z-10'
                    : 'bg-surface-container-low'
                }`}
                onClick={() => {
                  setNewDate(dateStr);
                  setShowModal(true);
                }}
              >
                <span className={`font-headline font-bold text-xs sm:text-base ${
                  isToday ? 'text-primary' : 'text-on-surface-variant'
                }`}>
                  {String(day).padStart(2, '0')}
                </span>
                
                {dayProtocols.length > 0 && (
                  <div className="flex flex-col gap-1 w-full">
                    {dayProtocols.slice(0, 2).map((proto, idx) => (
                      <div 
                        key={proto.id}
                        className={`h-0.5 sm:h-1 rounded-full ${
                          idx === 0 ? 'bg-primary shadow-[0_0_6px_rgba(162,255,191,0.3)]' : 'bg-tertiary'
                        } w-full`}
                        title={proto.title}
                      />
                    ))}
                    {dayProtocols.length > 2 && (
                      <div className="text-[8px] font-bold text-primary self-center leading-none">+ {dayProtocols.length - 2}</div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Side Panel: Upcoming Protocols */}
      <aside className="w-full xl:w-96 bg-surface-container-low rounded-[2rem] p-6 sm:p-8 flex flex-col gap-10 border border-white/5">
        <div>
          <h2 className="text-xl font-headline font-extrabold text-white mb-6 flex items-center justify-between">
            Upcoming Protocols
            <span className="text-primary text-xs font-label px-2 py-1 bg-primary/10 rounded-full">
              {activeMonthProtocols.length} Pending
            </span>
          </h2>
          <div className="space-y-6 max-h-[350px] overflow-y-auto pr-1 no-scrollbar">
            {activeMonthProtocols.length === 0 ? (
              <p className="text-xs text-on-surface-variant italic">No protocols scheduled for this month.</p>
            ) : (
              activeMonthProtocols.map((proto) => {
                const [, mm, dd] = proto.date.split('-');
                return (
                  <div key={proto.id} className="group cursor-pointer border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold font-headline tracking-widest text-primary/70 uppercase">
                        {proto.time} — {MONTHS[Number(mm) - 1]?.slice(0, 3)} {dd}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteProtocol(proto.id);
                        }}
                        className="text-on-surface-variant hover:text-error transition-colors p-1"
                        aria-label="Delete protocol"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                    <h3 className="text-lg font-headline font-bold text-white group-hover:text-primary transition-colors">
                      {proto.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant font-body mt-1 border-l-2 border-primary/20 pl-3">
                      {proto.description}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="mt-auto pt-8">
          <button 
            onClick={() => {
              const today = new Date();
              const activeDay = today.getMonth() === currentMonth && today.getFullYear() === currentYear ? today.getDate() : 1;
              setNewDate(`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(activeDay).padStart(2, '0')}`);
              setShowModal(true);
            }}
            className="w-full py-5 bg-primary text-[#002913] font-headline font-extrabold rounded-2xl hover:shadow-[0_0_30px_rgba(162,255,191,0.2)] transition-all flex items-center justify-center gap-3 active:scale-95 group cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined font-bold group-hover:rotate-90 transition-transform">add</span>
            Schedule New Protocol
          </button>
        </div>
      </aside>

      {/* Scheduler Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
          <div className="bg-surface-container-high border border-white/10 rounded-[2rem] p-8 w-full max-w-md shadow-2xl relative">
            <h3 className="text-2xl font-headline font-bold text-white mb-6">Schedule Protocol</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Title</label>
                <input 
                  type="text" 
                  value={newTitle} 
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
                  placeholder="e.g., Cognitive Deep Work"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Date</label>
                  <input 
                    type="date" 
                    value={newDate} 
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Time</label>
                  <input 
                    type="text" 
                    value={newTime} 
                    onChange={(e) => setNewTime(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
                    placeholder="e.g., 09:00 AM"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Type</label>
                <select 
                  value={newType} 
                  onChange={(e) => setNewType(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
                >
                  <option value="Cognitive">Cognitive</option>
                  <option value="System">System</option>
                  <option value="Bio-Integrity">Bio-Integrity</option>
                  <option value="Strategic">Strategic</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Description</label>
                <textarea 
                  value={newDesc} 
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary h-24"
                  placeholder="e.g., Focus session on architecture..."
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3 border border-white/10 rounded-xl text-white hover:bg-white/5 font-bold transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 py-3 bg-primary text-[#002913] rounded-xl font-bold hover:shadow-[0_0_20px_rgba(162,255,191,0.3)] transition-all"
                >
                  Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
