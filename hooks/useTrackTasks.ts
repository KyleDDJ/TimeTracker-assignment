import { TRACK_TASKS, TrackTask } from "@/constants/TrackTask";
import { useState } from "react";

export const useTrackTasks = () => {
  const [tasks, setTasks] = useState<TrackTask[]>(TRACK_TASKS);
  return { tasks, setTasks };
};
