import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { Text, View } from "react-native";

import { COLORS } from "@/constants/Colors";
type TaskInfoHeaderProps = {
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  title: string;
  sprint: string;
  subtitle: string;
};

const TaskInfoHeader: React.FC<TaskInfoHeaderProps> = ({
  iconName = "code",
  iconColor = COLORS.white,
  iconSize = 50,
  title,
  sprint,
  subtitle,
}) => {
  return (
    <>
      <View className="bg-gray-300 rounded-xl px-10 py-10 mt-3 mb-4">
        <Entypo name={iconName as any} size={iconSize} color={iconColor} />
      </View>

      <View className="justify-center items-center">
        <Text className="font-bold text-2xl mb-3">{title}</Text>
        <View className="flex-row gap-2 items-center">
          <Text className="text-gray-600 text-xl">{sprint}</Text>
          <Text className="font-semibold text-3xl">•</Text>
          <Text className="text-gray-600 text-xl">{subtitle}</Text>
        </View>
      </View>
    </>
  );
};

export default TaskInfoHeader;
