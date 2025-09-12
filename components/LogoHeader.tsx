import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, View } from "react-native";

import { COLORS } from "@/constants/Colors";

/**
 * DOCU: LogoHeader Component
 * Displays an icon, title, and subtitle for the app header.
 *
 * @param icon_name - The AntDesign icon name (must exist in AntDesign glyphs)
 * @param title - Main title text
 * @param subtitle - Subtitle text
 *
 */
export type LogoHeaderProps = {
  icon_name: keyof typeof AntDesign.glyphMap;
  title: string;
  subtitle: string;
};

const LogoHeader: React.FC<LogoHeaderProps> = ({
  icon_name,
  title,
  subtitle,
}) => {
  return (
    <View className="items-center pt-10 mb-6">
      <View
        className="w-20 h-20 rounded-2xl items-center justify-center mb-4"
        style={{ backgroundColor: COLORS.green }}
      >
        <AntDesign name={icon_name} size={28} color={COLORS.white} />
      </View>
      <Text className="text-2xl font-bold text-gray-900">{title}</Text>
      <Text className="text-gray-500 mt-1 text-center">{subtitle}</Text>
    </View>
  );
};

export default LogoHeader;
