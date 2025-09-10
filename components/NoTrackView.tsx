import { COLORS } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const NoTrackView = () => {
  return (
    <View className="flex-1 justify-center items-center py-20 px-6">
      <MaterialCommunityIcons
        name="go-kart-track"
        size={70}
        color={COLORS.green}
      />
      <Text className="text-black font-semibold text-xl mt-5 mb-4 text-center">
        No task selected yet
      </Text>
      <Text className="text-gray-500 text-center leading-6">
        1. Select a task from your Tasks or below Up Next.{"\n"}
        2. Press play to start tracking time.{"\n"}
        3. Use the controls to pause, skip, or go back.
      </Text>
    </View>
  );
};

export default NoTrackView;
