import { Task } from "@/entities/task.entities";
import { create } from "zustand";

type TaskStore = {
  tasks: Task[];
  activeTask: Task | null;
  isPlaying: boolean;
  elapsed: number;
  setTasks: (tasks: Task[]) => void;
  setActiveTask: (task: Task) => void;
  togglePlay: () => void;
  resetTimer: () => void;
  nextTask: () => void;
  prevTask: () => void;
};

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  activeTask: null,
  isPlaying: false,
  elapsed: 0,

  setTasks: (tasks) => set({ tasks }),

  setActiveTask: (task) => {
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === task.id
          ? { ...t, isActive: true, progress: "TRACKING NOW" }
          : t.progress !== "COMPLETED"
          ? { ...t, isActive: false, progress: "TO DO" }
          : t
      ),
      activeTask: { ...task, isActive: true, progress: "TRACKING NOW" },
      isPlaying: false,
      elapsed: 0,
    }));
  },

  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

  resetTimer: () => set({ elapsed: 0, isPlaying: false }),

  nextTask: () => {
    const { tasks, activeTask } = get();
    if (!activeTask) return;

    const currentIndex = tasks.findIndex((t) => t.id === activeTask.id);
    const nextIndex = currentIndex + 1;

    if (nextIndex < tasks.length) {
      const next = tasks[nextIndex];
      set((state) => ({
        tasks: state.tasks.map((t) =>
          t.id === next.id
            ? { ...t, isActive: true, progress: "TRACKING NOW" }
            : t.progress !== "COMPLETED"
            ? { ...t, isActive: false, progress: "TO DO" }
            : t
        ),
        activeTask: { ...next, isActive: true, progress: "TRACKING NOW" },
        isPlaying: false,
        elapsed: 0,
      }));
    }
  },

  prevTask: () => {
    const { tasks, activeTask } = get();
    if (!activeTask) return;

    const currentIndex = tasks.findIndex((t) => t.id === activeTask.id);
    const prevIndex = currentIndex - 1;

    if (prevIndex >= 0) {
      const prev = tasks[prevIndex];
      set((state) => ({
        tasks: state.tasks.map((t) =>
          t.id === prev.id
            ? { ...t, isActive: true, progress: "TRACKING NOW" }
            : t.progress !== "COMPLETED"
            ? { ...t, isActive: false, progress: "TO DO" }
            : t
        ),
        activeTask: { ...prev, isActive: true, progress: "TRACKING NOW" },
        isPlaying: false,
        elapsed: 0,
      }));
    }
  },
}));
