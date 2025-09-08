import { TASKS } from "@/constants/Tasks";
import { Task } from "@/entities/task.entities";

export const useTrackTasks = () => {
  const trackTasks = TASKS.filter(t => t.type);
  return { tasks: trackTasks as Task[] };
};
