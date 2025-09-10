import React, { useCallback } from "react";
import { View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import SwipeBackground from "@/components/SwipeBackground";
import TaskCard from "@/components/TaskCard";
import { Task } from "@/entities/task.entities";
import { useSwipeToComplete } from "@/hooks/useSwipeToComplete";
import { useTaskStore } from "@/stores/useTaskStore";

type SwipeableTaskProps = {
  task: Task;
  onPress: () => void;
};

const SwipeableTask: React.FC<SwipeableTaskProps> = ({ task, onPress }) => {
  const setTasks = useTaskStore(state => state.setTasks);

  const markCompleted = useCallback(() => {
    setTasks(prev =>
      prev.map(t => (t.id === task.id ? { ...t, progress: "COMPLETED" } : t))
    );
  }, [setTasks, task.id]);

  const { panGesture, animatedStyle } = useSwipeToComplete(markCompleted);

  return (
    <View className="overflow-hidden rounded-2xl mb-2">
      <SwipeBackground />

      <GestureDetector gesture={panGesture}>
        <Animated.View style={animatedStyle}>
          <TaskCard {...task} isActive={task.isActive} onPress={onPress} />
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default SwipeableTask;
