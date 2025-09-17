import { EventItem, Task } from "@/entities/task.entities";

export const mapTasksToEvents = (tasks: Task[]): EventItem[] => {
  return tasks
    .filter(t => t.progress === "TRACKING NOW" || t.progress === "COMPLETED")
    .map(task => {
      const startDate = task.startedAt ? new Date(task.startedAt) : new Date();

      let endDate: Date;
      if (task.progress === "COMPLETED" && task.elapsed) {
        endDate = new Date(startDate.getTime() + task.elapsed * 1000);
      } else if (task.progress === "TRACKING NOW" && task.elapsed) {
        endDate = new Date(startDate.getTime() + task.elapsed * 1000);
      } else {
        endDate = startDate;
      }

      return {
        id: task.id,
        title: task.title,
        startDate,
        endDate,
        progress: task.progress,
        elapsed: task.elapsed,
      };
    });
};