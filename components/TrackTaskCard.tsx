import { Task } from "@/entities/task.entities";
import { getLeftIcon, getRightIcon } from "@/helpers/trackTaskIcons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export type MiniTaskCardProps = {
  task: Task;
  isActive?: boolean;
  showIconBackground?: boolean;
  onPress?: () => void;
};

const MiniTaskCard: React.FC<MiniTaskCardProps> = ({
  task,
  isActive = false,
  showIconBackground = true,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between bg-white rounded-2xl p-4 mb-4 border border-gray-300"
      onPress={onPress}
    >
      <View
        className={`mr-3 p-3 rounded-xl ${
          showIconBackground ? "bg-gray-300" : "bg-white"
        }`}
      >
        {getLeftIcon(task)}
      </View>

      <View className="flex-1">
        <View className="flex-row justify-between items-center mb-1">
          <Text className="text-base font-semibold text-black">
            {task.title}
          </Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-sm font-semibold text-gray-400">
            {task.subtitle} {task.estimated ? `• ${task.estimated}` : ""}
          </Text>
        </View>
      </View>

      <View className="ml-3">{getRightIcon(task, isActive)}</View>
    </TouchableOpacity>
  );
};

export default MiniTaskCard;
