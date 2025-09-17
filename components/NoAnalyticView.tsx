import { COLORS } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface NoAnalyticTask {
  message?: string;
  subMessage?: string;
  showIcon?: boolean;
}

const NoAnalyticTask: React.FC<NoAnalyticTask> = ({
  message,
  subMessage,
  showIcon = true,
}) => (
  <View className="flex-1 justify-center items-center py-20">
    {showIcon && (
      <MaterialCommunityIcons
        name="go-kart-track"
        size={60}
        color={COLORS.green}
      />
    )}
    {message && (
      <Text className="text-xl font-bold text-black mt-4">{message}</Text>
    )}
    {subMessage && (
      <Text className="text-gray-400 text-center mt-2 px-8">{subMessage}</Text>
    )}
  </View>
);

export default NoAnalyticTask;
