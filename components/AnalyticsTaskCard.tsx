import { Octicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

import { COLORS } from "@/constants/Colors";
import { Task } from "@/entities/task.entities";

type Props = {
  task: Task;
};

const parseEstimated = (estimated?: string) => {
  if (!estimated) return 0;
  const match = estimated.match(/(\d+(\.\d+)?)\s*h/);
  return match ? Number(match[1]) * 60 * 60 : 0;
};

const formatElapsed = (seconds?: number) => {
  if (!seconds) return "0m 0s";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
};

const AnalyticsTaskCard = ({ task }: Props) => {
  const elapsedSeconds = task.elapsed ?? 0;
  const estimatedSeconds = parseEstimated(task.estimated);

  const percentage =
    estimatedSeconds > 0
      ? Math.min(Math.round((elapsedSeconds / estimatedSeconds) * 100), 100)
      : 0;

  return (
    <View className="flex-row items-center bg-white rounded-xl p-4 mb-3 border border-gray-200">
      <View className="w-8 h-8 rounded-md items-center justify-center mr-3">
        <Octicons name="dot-fill" size={30} color={COLORS.gray400} />
      </View>

      <View className="flex-1">
        <Text className="text-base font-medium text-black">{task.title}</Text>
        <Text className="text-sm font-bold text-gray-400">{task.subtitle}</Text>
      </View>

      <View className="items-end">
        <Text className="text-sm font-semibold text-black">
          {formatElapsed(elapsedSeconds)}
        </Text>
        <Text className="text-xs text-gray-600 mt-1">{percentage}%</Text>
      </View>
    </View>
  );
};

export default AnalyticsTaskCard;
