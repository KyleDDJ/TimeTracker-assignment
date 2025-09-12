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
  toggleComplete: (id: number) => void;
};

export const useTaskStore = create<TaskStore>((set, get) => {
  let timerInterval: ReturnType<typeof setInterval> | null = null;

  const stopTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  };

  const startTimer = (taskId: number) => {
    stopTimer();

    timerInterval = setInterval(() => {
      set((state) => {
        const updatedTasks = state.tasks.map((t) =>
          t.id === taskId ? { ...t, elapsed: (t.elapsed ?? 0) + 1 } : t
        );

        const activeTask = updatedTasks.find((t) => t.id === taskId);

        return {
          tasks: updatedTasks,
          activeTask: activeTask ?? state.activeTask,
          elapsed: activeTask?.elapsed ?? 0,
        };
      });
    }, 1000);
  };

  const updateActiveTask = (task: Task) => {
    stopTimer();

    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === task.id
          ? { ...t, isActive: true, progress: "TRACKING NOW" }
          : t.progress !== "COMPLETED"
          ? { ...t, isActive: false, progress: "TO DO" }
          : t
      ),
      activeTask: { ...task, isActive: true, progress: "TRACKING NOW", elapsed: task.elapsed ?? 0 },
      isPlaying: true,
      elapsed: task.elapsed ?? 0,
    }));

    startTimer(task.id); 
  };

  return {
    tasks: [],
    activeTask: null,
    isPlaying: false,
    elapsed: 0,
    quickTaskCounter: 0,

    setTasks: (tasks) =>
      set((state) => {
        const newTasks =
          typeof tasks === "function" ? tasks(state.tasks) : tasks;

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

    togglePlay: () => {
      const { isPlaying, activeTask } = get();
      if (!activeTask) return;

      if (isPlaying) {
        stopTimer();
      } else {
        startTimer(activeTask.id);
      }

      set({ isPlaying: !isPlaying });
    },

    resetTimer: () => {
      stopTimer();
      set((state) => ({
        elapsed: 0,
        isPlaying: false,
        tasks: state.tasks.map((t) =>
          t.id === state.activeTask?.id ? { ...t, elapsed: 0 } : t
        ),
        activeTask: state.activeTask ? { ...state.activeTask, elapsed: 0 } : null,
      }));
    },

    nextTask: () => {
      const { tasks, activeTask } = get();
      if (!activeTask) return;
      const idx = tasks.findIndex((t) => t.id === activeTask.id);
      if (idx + 1 < tasks.length) updateActiveTask(tasks[idx + 1]);
    },

    prevTask: () => {
      const { tasks, activeTask } = get();
      if (!activeTask) return;
      const idx = tasks.findIndex((t) => t.id === activeTask.id);
      if (idx - 1 >= 0) updateActiveTask(tasks[idx - 1]);
    },

    toggleComplete: (id: number) =>
      set((state) => ({
        tasks: state.tasks.map((t) =>
          t.id === id
            ? { ...t, progress: t.progress === "COMPLETED" ? "TO DO" : "COMPLETED", isActive: false }
            : t
        ),
      })),
  };
});
