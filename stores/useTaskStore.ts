import { COLORS } from "@/constants/Colors";
import { Task } from "@/entities/task.entities";
import { create } from "zustand";

type TaskStore = {
  tasks: Task[];
  activeTask: Task | null;
  isPlaying: boolean;
  elapsed: number;
  quickTaskCounter: number;
  setTasks: (tasks: Task[] | ((prev: Task[]) => Task[])) => void;
  prependTask: (task: Task) => void;
  createQuickTask: () => Task;
  setActiveTask: (task: Task) => void;
  togglePlay: () => void;
  resetTimer: () => void;
  nextTask: () => void;
  prevTask: () => void;
};

export const useTaskStore = create<TaskStore & { toggleComplete: (id: number) => void }>((set, get) => {
  const updateActiveTask = (task: Task) => {
    const savedElapsed = task.elapsed ?? 0;
    set((state) => ({
      tasks: state.tasks.map((t) => {
        if (t.id === task.id) return { ...t, isActive: true, progress: "TRACKING NOW" };
        return t.progress !== "COMPLETED" ? { ...t, isActive: false, progress: "TO DO" } : t;
      }),
      activeTask: { ...task, isActive: true, progress: "TRACKING NOW" },
      isPlaying: false,
      elapsed: savedElapsed,
    }));
  };

  return {
    tasks: [],
    activeTask: null,
    isPlaying: false,
    elapsed: 0,
    quickTaskCounter: 0,

    setTasks: (tasks) =>
      set((state) => {
        const newTasks = typeof tasks === "function" ? tasks(state.tasks) : tasks;
        return {
          tasks: newTasks.map((t) => ({
            ...t,
            progress: t.progress === "COMPLETED" ? "COMPLETED" : "TO DO",
            isActive: false,
          })),
          activeTask: null,
          isPlaying: false,
          elapsed: 0,
        };
      }),

    prependTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),

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
        icon: { library: "MaterialIcons", name: "bolt", size: 24, color: COLORS.white },
      };
      set((state) => ({ tasks: [newTask, ...state.tasks], quickTaskCounter: count }));
      return newTask;
    },

    setActiveTask: updateActiveTask,
    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
    resetTimer: () => set({ elapsed: 0, isPlaying: false }),

    nextTask: () => {
      const { tasks, activeTask } = get();
      if (!activeTask) return;
      const currentIndex = tasks.findIndex((t) => t.id === activeTask.id);
      if (currentIndex + 1 < tasks.length) updateActiveTask(tasks[currentIndex + 1]);
    },

    prevTask: () => {
      const { tasks, activeTask } = get();
      if (!activeTask) return;
      const currentIndex = tasks.findIndex((t) => t.id === activeTask.id);
      if (currentIndex - 1 >= 0) updateActiveTask(tasks[currentIndex - 1]);
    },

    toggleComplete: (id: number) =>
      set((state) => ({
        tasks: state.tasks.map((t) =>
          t.id === id
            ? {
                ...t,
                progress: t.progress === "COMPLETED" ? "TO DO" : "COMPLETED",
                isActive: false,
              }
            : t
        ),
      })),
  };
});
