type ScreenHeaderProps = {
  title: string;
  subtitle: string;
};

const ScreenHeader = ({ title, subtitle }: ScreenHeaderProps) => {
  return (
    <View className="items-center pt-5 mb-6">
      <Text className="text-2xl font-bold text-gray-900">{title}</Text>
      <Text className="text-lg text-gray-500 mt-1 text-center">{subtitle}</Text>
    </View>
  );
};

export default ScreenHeader;
import React from "react";
import { Text, View } from "react-native";
