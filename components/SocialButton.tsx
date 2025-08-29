import { colors as COLORS } from "@/constants/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

type SocialButtonProps = {
  iconName: string;
  text: string;
  onPress: () => void;
};

const SocialButton = ({ iconName, text, onPress }: SocialButtonProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={COLORS.neutral}
      className="border border-gray-300 rounded-xl py-3 px-4 mb-4"
    >
      <View className="flex-row gap-3 items-center justify-center space-x-2">
        <AntDesign name={iconName as any} size={24} color="black" />
        <Text className="text-gray-700 font-bold text-base">{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default SocialButton;
