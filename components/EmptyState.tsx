import React from "react";
import { Text, View } from "react-native";

type EmptyStateProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};

const EmptyState = ({ icon, title, description }: EmptyStateProps) => {
  return (
    <View className="w-full">
      <View className="w-48 h-48 bg-gray-100 rounded-full items-center justify-center self-center mb-6">
        {icon}
      </View>

      <Text className="text-3xl text-center font-bold text-gray-900 mb-2">
        {title}
      </Text>

      <Text className="text-center text-xl text-gray-400 mb-6 px-6">
        {description}
      </Text>
    </View>
  );
};

export default EmptyState;
