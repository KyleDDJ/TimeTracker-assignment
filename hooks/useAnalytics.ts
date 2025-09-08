import { ANALYTICS_ITEMS } from "@/constants/AnalyticsItems";
import { TASKS } from "@/constants/Tasks";
import { EventItem, Task } from "@/entities/task.entities";

export const useAnalytics = () => {
  const analyticsTasks: Task[] = TASKS.filter(
    (t) => t.type === "analytics"
  );

  return {
    items: ANALYTICS_ITEMS as EventItem[],
    tasks: analyticsTasks,
  };
};


