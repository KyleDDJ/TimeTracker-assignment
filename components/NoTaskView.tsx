import React from "react";
import { Text, View } from "react-native";

type EmptyStateProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
};

const EmptyState = ({
  icon,
  title,
  description,
  children,
}: EmptyStateProps) => {
  return (
    <View className="w-full flex-1 justify-center">
      <View className="items-center justify-center self-center mb-5">
        <View className="w-32 h-32 rounded-full bg-gray-200 items-center justify-center">
          {icon}
        </View>
      </View>

      <Text className="text-3xl text-center font-medium text-gray-900 mb-2">
        {title}
      </Text>

      <Text className="text-center text-xl text-gray-400 mb-6 px-6">
        {description}
      </Text>

      {children && <View className="mt-4">{children}</View>}
    </View>
  );
};

export default EmptyState;
