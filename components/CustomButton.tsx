import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

import { COLORS } from "@/constants/Colors";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const CustomButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className="rounded-xl py-3 mt-1 mx-2 flex-row justify-center"
      style={{
        backgroundColor: disabled || loading ? COLORS.gray400 : COLORS.black,
      }}
    >
      {loading ? (
        <ActivityIndicator color={COLORS.white} />
      ) : (
        <Text className="text-white text-center font-semibold text-base">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
