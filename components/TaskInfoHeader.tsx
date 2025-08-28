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
  iconColor = "white",
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

      <View className="justify-center items-center mb-5">
        <Text className="font-bold text-xl mb-3">{title}</Text>
        <View className="flex-row gap-2">
          <Text className="text-gray-600">{sprint}</Text>
          <Text className="font-semibold">•</Text>
          <Text className="text-gray-600">{subtitle}</Text>
        </View>
      </View>
    </>
  );
};

export default TaskInfoHeader;
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { Text, View } from "react-native";
