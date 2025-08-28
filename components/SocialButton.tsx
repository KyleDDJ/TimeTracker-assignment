type SocialButtonProps = {
  iconName: string;
  text: string;
  onPress: () => void;
};

const SocialButton = ({ iconName, text, onPress }: SocialButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="border border-gray-300 rounded-xl py-3 px-4 mb-4"
      activeOpacity={0.8}
    >
      <View className="flex-row items-center justify-center space-x-2">
        <AntDesign name={iconName as any} size={24} color="black" />
        <Text className="text-gray-700 font-bold text-base">{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
