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
      className={`rounded-xl py-3 mt-1 ${
        disabled ? "bg-gray-400" : "bg-black"
      }`}
    >
      <Text className="text-white text-center font-semibold text-base">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
