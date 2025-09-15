import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useCallback } from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import TaskCard from "@/components/TaskCard";
import { COLORS } from "@/constants/Colors";
import { Task } from "@/entities/task.entities";
import { useTaskStore } from "@/stores/useTaskStore";

const SWIPE_THRESHOLD = 100;

type SwipeableTaskProps = {
  task: Task;
  onPress: () => void;
  onDeleteRequest?: (task: Task) => void;
};

const SwipeableTask: React.FC<SwipeableTaskProps> = ({
  task,
  onPress,
  onDeleteRequest,
}) => {
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

  const handleDeleteRequest = useCallback(() => {
    if (onDeleteRequest) {
      onDeleteRequest(task);
    }
  }, [onDeleteRequest, task]);

  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .failOffsetY([-10, 10])
    .onUpdate(event => {
      translateX.value = event.translationX;
    })
    .onEnd(() => {
      if (translateX.value < -SWIPE_THRESHOLD) {
        runOnJS(updateTask)();
      } else if (translateX.value > SWIPE_THRESHOLD) {
        runOnJS(handleDeleteRequest)();
      }
      translateX.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const leftBackgroundStyle = useAnimatedStyle(() => {
    const showCheck = translateX.value < -50 && task.progress !== "COMPLETED";
    return {
      opacity: showCheck ? 1 : 0,
    };
  });

  const rightBackgroundStyle = useAnimatedStyle(() => {
    const showDelete = translateX.value > 50;
    return {
      opacity: showDelete ? 1 : 0,
    };
  });

  const checkIconStyle = useAnimatedStyle(() => {
    const showCheck = translateX.value < -50 && task.progress !== "COMPLETED";
    return {
      opacity: showCheck ? 1 : 0,
      transform: [{ scale: showCheck ? 1 : 0.5 }],
    };
  });

  const deleteIconStyle = useAnimatedStyle(() => {
    const showDelete = translateX.value > 50;
    return {
      opacity: showDelete ? 1 : 0,
      transform: [{ scale: showDelete ? 1 : 0.5 }],
    };
  });

  return (
    <View className="overflow-hidden rounded-2xl mb-2">
      <Animated.View
        className="absolute top-1 bottom-4 left-2 right-2 rounded-xl flex-row items-center justify-end pr-4 bg-green-600"
        style={leftBackgroundStyle}
      >
        <Animated.View style={checkIconStyle}>
          <Ionicons
            name="checkmark-done-sharp"
            size={45}
            color={COLORS.white}
          />
        </Animated.View>
      </Animated.View>

      <Animated.View
        className="absolute top-1 bottom-4 left-2 right-2 rounded-xl flex-row items-center justify-start pl-4 bg-red-600"
        style={rightBackgroundStyle}
      >
        <Animated.View style={deleteIconStyle}>
          <MaterialIcons name="delete" size={45} color={COLORS.white} />
        </Animated.View>
      </Animated.View>

      <GestureDetector gesture={panGesture}>
        <Animated.View style={animatedStyle}>
          <TaskCard {...task} isActive={task.isActive} onPress={onPress} />
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default SwipeableTask;
