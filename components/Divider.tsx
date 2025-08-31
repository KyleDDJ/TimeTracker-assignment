import React from "react";
import { Text, View } from "react-native";

const Divider = ({ text = "or" }: { text?: string }) => {
  return (
    <View className="flex-row items-center my-6 mx-6">
      <View className="flex-1 h-px bg-gray-300" />
      <Text className="mx-3 text-gray-400 text-sm">{text}</Text>
      <View className="flex-1 h-px bg-gray-300" />
    </View>
  );
};

export default Divider;
