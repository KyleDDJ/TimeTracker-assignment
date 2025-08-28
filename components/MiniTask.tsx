type MiniTaskCardProps = {
  title?: string;
  subtitle?: string;
  estimated?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showIconBackground?: boolean;
  rightEstimate?: string;
  percentage?: string;
  onPress?: () => void;
};

const MiniTaskCard: React.FC<MiniTaskCardProps> = ({
  title,
  subtitle,
  estimated,
  leftIcon,
  rightIcon,
  onPress,
  showIconBackground = true,
  rightEstimate,
  percentage,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="flex-row items-center justify-between bg-white rounded-2xl p-4 mb-4 border border-gray-200"
    >
      {leftIcon &&
        (showIconBackground ? (
          <View className="p-3 rounded bg-gray-300 mr-3">{leftIcon}</View>
        ) : (
          <View className="mr-3">{leftIcon}</View>
        ))}

      <View className="flex-1">
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-bold text-black">{title}</Text>
          {rightEstimate && (
            <Text className="text-sm font-semibold text-gray-700">
              {rightEstimate}
            </Text>
          )}
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-sm font-bold text-gray-500">
            {subtitle} {estimated ? `• ${estimated}` : ""}
          </Text>
          {percentage && (
            <Text className="text-sm font-bold text-gray-500">
              {percentage}
            </Text>
          )}
        </View>
      </View>

      {rightIcon && <View className="ml-3">{rightIcon}</View>}
    </TouchableOpacity>
  );
};

export default MiniTaskCard;
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
