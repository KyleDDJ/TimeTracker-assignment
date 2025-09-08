import { TASKS } from "@/constants/Tasks"; // initial data
import { Task } from "@/entities/task.entities";
import React, { createContext, useContext, useState } from "react";

type TaskContextType = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  playTask: (id: number) => void;
  pauseTask: (id: number) => void;
  completeTask: (id: number) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>(TASKS);

  const playTask = (id: number) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id
          ? { ...t, progress: "TRACKING NOW", isActive: true }
          : {
              ...t,
              isActive: false,
              progress: t.progress === "TRACKING NOW" ? "TO DO" : t.progress,
            }
      )
    );
  };

  const pauseTask = (id: number) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, progress: "TO DO", isActive: false } : t
      )
    );
  };

  const completeTask = (id: number) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, progress: "COMPLETED", isActive: false } : t
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, playTask, pauseTask, completeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("useTaskContext must be used inside TaskProvider");
  return ctx;
};
