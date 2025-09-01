import { useState } from "react";

import { ANALYTICS_ITEMS } from "@/constants/AnalyticsItems";
import { ANALYTICS_TASKS } from "@/constants/AnalyticsTasks";

export const useAnalytics = () => {
  const [items, setItems] = useState(ANALYTICS_ITEMS);
  const [tasks, setTasks] = useState(ANALYTICS_TASKS);

  return { items, tasks };
};
