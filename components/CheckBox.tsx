import { COLORS } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onToggle: () => void;
};

const Checkbox = ({ label, checked, onToggle }: CheckboxProps) => {
  return (
    <TouchableOpacity
      className="flex-row items-center"
      onPress={onToggle}
      activeOpacity={0.8}
    >
      <View
        className={`w-5 h-5 rounded border ${
          checked ? "bg-black border-black" : "border-gray-400"
        } items-center justify-center mr-2`}
      >
        {checked && <AntDesign name="check" size={14} color={COLORS.white} />}
      </View>
      <Text className="text-gray-600">{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
