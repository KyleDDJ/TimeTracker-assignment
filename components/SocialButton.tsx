import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

import { COLORS } from "@/constants/Colors";
type SocialButtonProps = {
  iconName: string;
  text: string;
  onPress: () => void;
};

const SocialButton = ({ iconName, text, onPress }: SocialButtonProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={COLORS.gray300}
      className="border border-gray-300 rounded-xl py-3 px-4 mb-5 mx-2"
    >
      <View className="flex-row items-center justify-center">
        <AntDesign name={iconName as any} size={22} color={COLORS.black} />
        <Text
          className="ml-3 font-bold text-base"
          style={{ color: COLORS.black }}
        >
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default SocialButton;
