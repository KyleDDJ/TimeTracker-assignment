import { COLORS } from "@/constants/Colors";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

/**
 * DOCU: CustomButton Component
 * Primary button used throughout the app, supports loading and disabled states.
 *
 * @param title - Button text
 * @param on_press - Function to call when pressed
 * @param disabled - Disable button state
 * @param loading - Show loading indicator
 *
 */
export interface CustomButtonProps {
  title: string;
  on_press: () => void;
  disabled?: boolean;
  loading?: boolean;
  accessibility_label?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  on_press,
  disabled = false,
  loading = false,
  accessibility_label,
}) => (
  <TouchableOpacity
    onPress={on_press}
    disabled={disabled || loading}
    className="rounded-xl py-3 mt-1 mx-2 flex-row justify-center"
    style={{
      backgroundColor: disabled || loading ? COLORS.gray400 : COLORS.green,
    }}
    accessible
    accessibilityLabel={accessibility_label || title}
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

export default React.memo(CustomButton);
