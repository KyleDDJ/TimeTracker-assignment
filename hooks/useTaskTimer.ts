import { useTaskStore } from "@/stores/useTaskStore";
import { useEffect, useRef } from "react";

export function useTaskTimer() {
  const { activeTask, isPlaying, setTasks } = useTaskStore();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying && activeTask) {
      intervalRef.current = setInterval(() => {
        setTasks(prev =>
          prev.map(t =>
            t.id === activeTask.id
              ? { ...t, elapsed: (t.elapsed ?? 0) + 1 }
              : t
          )
        );
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPlaying, activeTask, setTasks]);
}
