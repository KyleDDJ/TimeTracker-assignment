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
      className="border border-gray-300 rounded-xl py-3 px-4 mb-5 mx-6"
    >
      <View className="flex-row items-center justify-center">
        <AntDesign name={iconName as any} size={22} color="black" />
        <Text className="ml-3 text-gray-700 font-bold text-base">{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default SocialButton;
