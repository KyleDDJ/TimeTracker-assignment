import React from "react";
import { Text, View } from "react-native";

import { COLORS } from "@/constants/Colors";
import ProgressBarSprint from "./ProgressBarSprint";
type SprintSummaryCardProps = {
  sprintName: string;
  daysLeft: string;
  tasksAssigned: number;
  tasksCompleted: number;
  hoursLogged: string;
  progress: number;
};

const SprintSummaryCard: React.FC<SprintSummaryCardProps> = ({
  sprintName,
  daysLeft,
  tasksAssigned,
  tasksCompleted,
  hoursLogged,
  progress,
}) => {
  return (
    <View className="bg-gray-100 rounded-2xl px-5 py-5 mb-1">
      <View className="flex-row justify-between items-center mb-5">
        <Text
          className="text-2xl mb-1 font-bold"
          style={{ color: COLORS.green }}
        >
          {sprintName}
        </Text>
        <Text className=" text-sm" style={{ color: COLORS.green }}>
          {daysLeft}
        </Text>
      </View>

      <View className="w-full mb-1">
        <View className="flex-row justify-between w-full">
          <Text className="font-semibold" style={{ color: COLORS.green }}>
            {tasksAssigned}
          </Text>
          <Text style={{ color: COLORS.green }}>•</Text>
          <Text className="0 font-semibold" style={{ color: COLORS.green }}>
            {tasksCompleted}
          </Text>
          <Text style={{ color: COLORS.green }}>•</Text>
          <Text className=" font-semibold" style={{ color: COLORS.green }}>
            {hoursLogged}
          </Text>
        </View>
        <View className="flex-row justify-between w-full mb-5">
          <Text className="text-gray-700 text-sm">tasks assigned</Text>
          <Text className="text-gray-700 text-sm">completed</Text>
          <Text className="text-gray-700 text-sm">logged</Text>
        </View>
        <ProgressBarSprint progress={progress} />
      </View>
    </View>
  );
};

export default SprintSummaryCard;
