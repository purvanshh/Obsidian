/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/purity */
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Task = {
  id: string;
  title: string;
  meta: string;
  badge: string;
  completed: boolean;
};

export type Protocol = {
  id: string;
  title: string;
  time: string;
  date: string; // YYYY-MM-DD
  type: string;
  description: string;
};

export type FileAsset = {
  id: string;
  name: string;
  size: string;
  owner: string;
  ownerAvatar: string;
  type: 'document' | 'asset' | 'design';
  date: string;
  image?: string;
};

export type UserProfile = {
  name: string;
  title: string;
  location: string;
  plan: string;
  avatar: string;
};

export type ActivityLog = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  pts: string;
  type: string;
};

type ObsidianContextType = {
  tasks: Task[];
  addTask: (title: string, badge?: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  
  protocols: Protocol[];
  addProtocol: (protocol: Omit<Protocol, 'id'>) => void;
  deleteProtocol: (id: string) => void;
  
  files: FileAsset[];
  addFile: (name: string, type: 'document' | 'asset' | 'design', size: string) => void;
  deleteFile: (id: string) => void;
  
  profile: UserProfile;
  updateProfile: (profile: Partial<UserProfile>) => void;
  
  activities: ActivityLog[];
  addActivity: (icon: string, title: string, type: string, pts?: string) => void;

  currentMonth: number;
  currentYear: number;
  nextMonth: () => void;
  prevMonth: () => void;
};

const ObsidianContext = createContext<ObsidianContextType | undefined>(undefined);

const INITIAL_TASKS: Task[] = [
  { id: 'task-1', title: 'Finalize Q4 Strategic Objectives', meta: 'High Priority • Due 14:00', badge: 'Strategic', completed: false },
  { id: 'task-2', title: 'Conduct System Integrity Audit', meta: 'Medium • Monthly Recurring', badge: 'System', completed: false },
  { id: 'task-3', title: 'Refactor Polymorphic Components', meta: 'Completed • Early Morning', badge: 'Refactor', completed: true },
];

const INITIAL_PROTOCOLS: Protocol[] = [
  { id: 'proto-1', title: 'Cognitive Deep Work', time: '09:00 AM', date: '2026-07-07', type: 'Cognitive', description: 'Focus session: UI/UX system architecture design for Project Kinetic.' },
  { id: 'proto-2', title: 'Neuro-Sync Review', time: '02:00 PM', date: '2026-07-07', type: 'System', description: 'Team alignment and sync on technical hurdles.' },
  { id: 'proto-3', title: 'Physical Recalibration', time: '08:00 AM', date: '2026-07-10', type: 'Bio-Integrity', description: 'Scheduled interval training and wellness check.' },
];

const INITIAL_FILES: FileAsset[] = [
  {
    id: 'file-1',
    name: 'Hero_Visual_V2.fig',
    size: '18.2 MB',
    owner: 'Alex Rivera',
    ownerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbaCTjLb6Q4l8TvwFDHyNSDwWL3hrM1JrKYNHQPzBoL0jS8y6TmfztLf7FF_jDkJgWYYoqV4Vmi9tgt3cgbiT0pBkUyQ09IlNRNDsfg1h5sYaDkY4fHe2R34kg4qzQYv1H3SEgqpYapgCjl3j4k8zbMZPe1BA4sAIXdhk3-wGz1C9ad98xswMkPuNV9QWWYsV1G0-mF4eVW51Nu7-dJwoD3wBds_cha3Jh3oZKjAzIxWXuRZnLZeaZFwM94Ouyc6dFGs4SIWNhKeQY',
    type: 'design',
    date: '2026-07-07',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKXZiWvOwQ7Bq2jPcazcyXhcjD3uc_YzS62JPYcX4McGYdfuBzt23ymLXXC1IqmoGR-_ASGYM6TTi-3kpMhJyfJl1YC7L-MXtY0XsdGcyA8jzopSakmsE3Px6dkEnNmt4jGt_bDg40hSBENZbLc55D_jlkBDbP6-Qpthb_JqOjSsf8OxC0Ne8fLyCf-JtHk8vhcRcLdKsphYPKxCSVOyMvGZl6qMNJKbp-EMXDnBrnf01T32OSKMsfqkG5GmfUwgK62vN497ThuG4D',
  },
  {
    id: 'file-2',
    name: 'Architecture_Draft.pdf',
    size: '2.4 MB',
    owner: 'Sarah Connor',
    ownerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiK3ugqNrEcphiC3-3vK-tswEzOGPuDXeeTI6pD4sNDZy4yU-14vIudfozt1lz_bZNnKL5uh87TgNjjmRM5AzdbQq4F5ilx_dTdGnaEmJV2ZbApe38wQ9wR1kLVOcLJ1U0ztstdmOUhbsmnREQxCX_e1eYlSwLRsyFMDbKP_u6BjvveZ50NOlNkYcKff1YDu3kkBwWn2rtSDdz9KUAQykIUd0x0ywCQ7UlcFuUFKJAkxB0S_DQTMfdZa5P-M4dGzf2H2jnXSbTBNuv',
    type: 'document',
    date: '2026-07-06',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpy5CAqORGN_ecbayTGF7nNH2xi6S9ZMi9ZtxDBAHbZDqUsiqvPuYhQRhOzrU7dcoWh804pkMy934xFzYoX5vitb2jfsHykjjjpTYMo9bxa0wUvppKmdQmnjA9kmbMqZnxhpCJp6rmt60DLHwm7tgUFa4QbSBttLBcF0yH7vbHrCLXVuQr28xi-nSJm7Ez-VQ3JmMR7utdrboDms3YIcUnKVB-nU6D3yoP-ytehWHwICChlDeQJapDXMmyGxynzNPJupTCY8T4AaQv',
  },
  {
    id: 'file-3',
    name: 'Brand_Guidelines.zip',
    size: '145.8 MB',
    owner: 'Alex Rivera',
    ownerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbaCTjLb6Q4l8TvwFDHyNSDwWL3hrM1JrKYNHQPzBoL0jS8y6TmfztLf7FF_jDkJgWYYoqV4Vmi9tgt3cgbiT0pBkUyQ09IlNRNDsfg1h5sYaDkY4fHe2R34kg4qzQYv1H3SEgqpYapgCjl3j4k8zbMZPe1BA4sAIXdhk3-wGz1C9ad98xswMkPuNV9QWWYsV1G0-mF4eVW51Nu7-dJwoD3wBds_cha3Jh3oZKjAzIxWXuRZnLZeaZFwM94Ouyc6dFGs4SIWNhKeQY',
    type: 'asset',
    date: '2026-07-05',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtye6l0EzlyVprJ8LgdrF0Xzg6HgGh-hOV98fVECVqV6oL3e73zxe-cE7uz8fMuFYiPcSXDSLLFhxoy2agFWBiB6HVlTfCz7vzZSY4-QmgoYjrJjVwmzlx_Q3KheiEShDQFIr3JyZYiXXvYnM4DMVMSrNhLeLfpz5mVMinPj--1nFSBeNqnMGPvVZThlDaXarLJhMuDutlIKSDuPDdX_K0LP2Trrmvb4mobIZmLtKnD7j6tyeRrYohydP1NuIy051YuwAavA0bxY1G',
  },
];

const INITIAL_PROFILE: UserProfile = {
  name: 'Alex Rivera',
  title: 'Lead Protocol Architect',
  location: 'Silicon Valley, CA',
  plan: 'Pro Plan',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbaCTjLb6Q4l8TvwFDHyNSDwWL3hrM1JrKYNHQPzBoL0jS8y6TmfztLf7FF_jDkJgWYYoqV4Vmi9tgt3cgbiT0pBkUyQ09IlNRNDsfg1h5sYaDkY4fHe2R34kg4qzQYv1H3SEgqpYapgCjl3j4k8zbMZPe1BA4sAIXdhk3-wGz1C9ad98xswMkPuNV9QWWYsV1G0-mF4eVW51Nu7-dJwoD3wBds_cha3Jh3oZKjAzIxWXuRZnLZeaZFwM94Ouyc6dFGs4SIWNhKeQY',
};

const INITIAL_ACTIVITIES: ActivityLog[] = [
  { id: 'act-1', icon: 'terminal', title: 'Core API Integration', subtitle: 'Pushed to production • 2h ago', pts: '+1,200 pts', type: 'Success' },
  { id: 'act-2', icon: 'architecture', title: 'System Architecture Review', subtitle: 'Completed with 3 collaborators • 5h ago', pts: '+850 pts', type: 'Review' },
  { id: 'act-3', icon: 'database', title: 'Database Optimization', subtitle: 'Scheduled maintenance • 8h ago', pts: '+400 pts', type: 'System' },
];

export const ObsidianProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('obsidian_tasks');
    return saved ? JSON.parse(saved) : INITIAL_TASKS;
  });

  const [protocols, setProtocols] = useState<Protocol[]>(() => {
    const saved = localStorage.getItem('obsidian_protocols');
    return saved ? JSON.parse(saved) : INITIAL_PROTOCOLS;
  });

  const [files, setFiles] = useState<FileAsset[]>(() => {
    const saved = localStorage.getItem('obsidian_files');
    return saved ? JSON.parse(saved) : INITIAL_FILES;
  });

  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('obsidian_profile');
    return saved ? JSON.parse(saved) : INITIAL_PROFILE;
  });

  const [activities, setActivities] = useState<ActivityLog[]>(() => {
    const saved = localStorage.getItem('obsidian_activities');
    return saved ? JSON.parse(saved) : INITIAL_ACTIVITIES;
  });

  const [currentMonth, setCurrentMonth] = useState(() => new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(() => new Date().getFullYear());

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('obsidian_tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('obsidian_protocols', JSON.stringify(protocols));
  }, [protocols]);

  useEffect(() => {
    localStorage.setItem('obsidian_files', JSON.stringify(files));
  }, [files]);

  useEffect(() => {
    localStorage.setItem('obsidian_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('obsidian_activities', JSON.stringify(activities));
  }, [activities]);

  const addTask = (title: string, badge = 'New') => {
    const newTask: Task = {
      id: `task-${Date.now()}`,
      title,
      meta: 'New • Today',
      badge,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
    addActivity('bolt', `Task created: "${title}"`, 'Task', '+50 pts');
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          const nextState = !task.completed;
          if (nextState) {
            addActivity('check_circle', `Completed: "${task.title}"`, 'Success', '+100 pts');
          }
          return { ...task, completed: nextState };
        }
        return task;
      })
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const addProtocol = (proto: Omit<Protocol, 'id'>) => {
    const newProto: Protocol = {
      ...proto,
      id: `proto-${Date.now()}`,
    };
    setProtocols((prev) => [newProto, ...prev]);
    addActivity('calendar_today', `Scheduled protocol: "${proto.title}"`, 'Calendar', '+150 pts');
  };

  const deleteProtocol = (id: string) => {
    setProtocols((prev) => prev.filter((p) => p.id !== id));
  };

  const addFile = (name: string, type: 'document' | 'asset' | 'design', size: string) => {
    const newFile: FileAsset = {
      id: `file-${Date.now()}`,
      name,
      size,
      owner: profile.name,
      ownerAvatar: profile.avatar,
      type,
      date: new Date().toISOString().split('T')[0],
    };
    setFiles((prev) => [newFile, ...prev]);
    addActivity('upload_file', `Asset uploaded: "${name}"`, 'Asset', '+200 pts');
  };

  const deleteFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const updateProfile = (updatedFields: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updatedFields }));
    addActivity('person', 'Operator profile updated', 'System', '+10 pts');
  };

  const addActivity = (icon: string, title: string, type: string, pts = '+100 pts') => {
    const newLog: ActivityLog = {
      id: `act-${Date.now()}`,
      icon,
      title,
      subtitle: 'Just now',
      pts,
      type,
    };
    setActivities((prev) => [newLog, ...prev.slice(0, 9)]); // limit to 10 logs
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const prevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  return (
    <ObsidianContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        deleteTask,
        protocols,
        addProtocol,
        deleteProtocol,
        files,
        addFile,
        deleteFile,
        profile,
        updateProfile,
        activities,
        addActivity,
        currentMonth,
        currentYear,
        nextMonth,
        prevMonth,
      }}
    >
      {children}
    </ObsidianContext.Provider>
  );
};

export const useObsidian = () => {
  const context = useContext(ObsidianContext);
  if (!context) {
    throw new Error('useObsidian must be used within an ObsidianProvider');
  }
  return context;
};
