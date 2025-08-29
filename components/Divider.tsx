import React from "react";
import { Text, View } from "react-native";
const Divider = ({ text = "or" }: { text?: string }) => {
  return (
    <View className="flex-row items-center my-4">
      <View className="flex-1 h-px bg-gray-300" />
      <Text className="mx-2 text-gray-400">{text}</Text>
      <View className="flex-1 h-px bg-gray-300" />
    </View>
  );
};

export default Divider;
