import { EventItem, Task } from "@/entities/task.entities";

export const mapTasksToEvents = (tasks: Task[]): EventItem[] => {
  let lastEnd: Date | null = null;

  return tasks
    .filter(t => t.progress === "TRACKING NOW" || t.progress === "COMPLETED")
    .sort((a, b) => {
      const aStart = a.startedAt ? new Date(a.startedAt).getTime() : 0;
      const bStart = b.startedAt ? new Date(b.startedAt).getTime() : 0;
      return aStart - bStart;
    })
    .map(task => {
      let startDate = task.startedAt ? new Date(task.startedAt) : new Date();

      if (lastEnd && startDate < lastEnd) {
        startDate = new Date(lastEnd.getTime() + 10 * 100); 
      }

      let endDate: Date;
      if (task.elapsed) {
        endDate = new Date(startDate.getTime() + task.elapsed * 1000);
      } else {
        endDate = startDate;
      }

      lastEnd = endDate;

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
