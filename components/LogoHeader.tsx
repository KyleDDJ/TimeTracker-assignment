import { COLORS } from "@/constants/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, View } from "react-native";

type LogoHeaderProps = {
  iconName: string;
  title: string;
  subtitle: string;
};

const LogoHeader = ({ iconName, title, subtitle }: LogoHeaderProps) => {
  return (
    <View className="items-center pt-10 mb-6">
      <View className="w-20 h-20 bg-black rounded-2xl items-center justify-center mb-4">
        <AntDesign name={iconName as any} size={28} color={COLORS.white} />
      </View>
      <Text className="text-2xl font-bold text-gray-900">{title}</Text>
      <Text className="text-gray-500 mt-1 text-center">{subtitle}</Text>
    </View>
  );
};

export default LogoHeader;
