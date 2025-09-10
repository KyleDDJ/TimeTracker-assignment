import React, { useCallback } from "react";
import { View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import SwipeBackground from "@/components/SwipeBackground";
import TaskCard from "@/components/TaskCard";
import { Task } from "@/entities/task.entities";
import { useTaskStore } from "@/stores/useTaskStore";
import { Gesture } from "react-native-gesture-handler";
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const SWIPE_THRESHOLD = 100;

type SwipeableTaskProps = {
  task: Task;
  onPress: () => void;
};

const SwipeableTask: React.FC<SwipeableTaskProps> = ({ task, onPress }) => {
  const setTasks = useTaskStore(state => state.setTasks);
  const translateX = useSharedValue(0);

  const updateTask = useCallback(() => {
    setTasks(prev =>
      prev.map(t => {
        if (t.id === task.id) {
          const newProgress =
            t.progress === "COMPLETED" ? "TO DO" : "COMPLETED";
          return { ...t, progress: newProgress, isActive: false };
        }
        return t;
      })
    );
  }, [setTasks, task.id]);

  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .failOffsetY([-10, 10])
    .onUpdate(event => {
      translateX.value = event.translationX;
    })
    .onEnd(() => {
      if (
        translateX.value > SWIPE_THRESHOLD ||
        translateX.value < -SWIPE_THRESHOLD
      ) {
        runOnJS(updateTask)();
      }
      translateX.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View className="overflow-hidden rounded-2xl mb-2">
      {task.progress !== "COMPLETED" && <SwipeBackground showCheck />}
      <GestureDetector gesture={panGesture}>
        <Animated.View style={animatedStyle}>
          <TaskCard {...task} isActive={task.isActive} onPress={onPress} />
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default SwipeableTask;
