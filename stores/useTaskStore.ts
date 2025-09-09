import { Task } from "@/entities/task.entities";
import { create } from "zustand";

type TaskStore = {
  tasks: Task[];
  activeTask: Task | null;
  isPlaying: boolean;
  elapsed: number;
  quickTaskCounter: number;
  setTasks: (tasks: Task[]) => void;
  prependTask: (task: Task) => void;
  createQuickTask: () => Task;
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
  quickTaskCounter: 0,

  setTasks: (tasks) => set({ tasks }),

  prependTask: (task) =>
    set((state) => ({
      tasks: [task, ...state.tasks],
    })),

  createQuickTask: () => {
    const count = get().quickTaskCounter + 1;

    const newTask: Task = {
      id: Date.now(),
      title: `Quick Task #${String(count).padStart(3, "0")}`,
      subtitle: "Ad hoc",
      estimated: "0h",
      progress: "TO DO",
      isActive: false,
      elapsed: 0,
    };

    set((state) => ({
      tasks: [newTask, ...state.tasks],
      quickTaskCounter: count,
    }));

    return newTask;
  },

  setActiveTask: (task) => {
    const currentTask = get().tasks.find((t) => t.id === task.id);
    const savedElapsed = currentTask?.elapsed ?? 0;

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
      elapsed: savedElapsed,
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
      const savedElapsed = next.elapsed ?? 0;

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
        elapsed: savedElapsed,
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
      const savedElapsed = prev.elapsed ?? 0;

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
        elapsed: savedElapsed,
      }));
    }
  },
}));
