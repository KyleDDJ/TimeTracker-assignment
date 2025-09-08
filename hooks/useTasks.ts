import { TASKS } from "@/constants/Tasks";
import { Task } from "@/entities/task.entities";

export const useTasks = () => {
  return { tasks: TASKS as Task[] };
};
