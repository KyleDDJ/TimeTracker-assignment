import { ANALYTICS_ITEMS } from "@/constants/AnalyticsItems";
import { TASKS } from "@/constants/Tasks";
import { EventItem } from "@/entities/task.entities";

export const useAnalytics = () => {
  return {
    items: ANALYTICS_ITEMS as EventItem[],
    tasks: TASKS,
  };
};

