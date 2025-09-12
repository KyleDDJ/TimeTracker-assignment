import { COLORS } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

/**
 * DOCU: SocialButton Component
 * Button for social login with icon.
 *
 * @param icon_name - AntDesign icon name
 * @param text - Button text
 * @param on_press - Callback on press
 *
 */
export interface SocialButtonProps {
  icon_name: keyof typeof AntDesign.glyphMap;
  text: string;
  on_press: () => void;
  accessibility_label?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  icon_name,
  text,
  on_press,
  accessibility_label,
}) => {
  return (
    <TouchableHighlight
      onPress={on_press}
      underlayColor={COLORS.gray400}
      className="border border-gray-300 rounded-xl py-3 px-4 mb-5 mx-2"
      accessible
      accessibilityLabel={accessibility_label || text}
    >
      <View className="flex-row items-center justify-center">
        <AntDesign name={icon_name} size={22} color={COLORS.green} />
        <Text
          className="ml-3 font-bold text-base"
          style={{ color: COLORS.green }}
        >
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default React.memo(SocialButton);
