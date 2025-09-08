import { Octicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

import { COLORS } from "@/constants/Colors";
import { Task } from "@/entities/task.entities";

type Props = {
  task: Task;
};

const AnalyticsTaskCard = ({ task }: Props) => {
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
          {task.estimated}
        </Text>
        {task.percentage && (
          <Text className="text-xs text-gray-600 mt-1">{task.percentage}</Text>
        )}
      </View>
    </View>
  );
};

export default AnalyticsTaskCard;
