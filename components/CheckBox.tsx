import { COLORS } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

/**
 * DOCU: Checkbox Component
 * Custom checkbox with label and toggle support.
 *
 * @param label - Checkbox label
 * @param checked - Checkbox state
 * @param on_toggle - Toggle callback
 *
 */
export interface CheckboxProps {
  label: string;
  checked: boolean;
  on_toggle: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, on_toggle }) => {
  return (
    <TouchableOpacity
      className="flex-row items-center"
      onPress={on_toggle}
      activeOpacity={0.8}
      accessible
      accessibilityLabel={`Checkbox: ${label}`}
    >
      <View
        className={`w-5 h-5 rounded border items-center justify-center mr-2 ${
          checked ? "bg-green-500 border-green-500" : "border-gray-400"
        }`}
        style={
          checked
            ? { backgroundColor: COLORS.green, borderColor: COLORS.green }
            : {}
        }
      >
        {checked && <AntDesign name="check" size={14} color={COLORS.white} />}
      </View>
      <Text className="text-gray-600">{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
