import { COLORS } from "@/constants/colors";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className="rounded-xl py-3 mt-1 mx-6"
      style={{ backgroundColor: disabled ? COLORS.gray400 : COLORS.black }}
    >
      <Text className="text-white text-center font-semibold text-base">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
