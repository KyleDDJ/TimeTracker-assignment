import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { COLORS } from "@/constants/Colors";

interface CustomInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder = "Enter text",
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
}) => {
  const [is_focused, setIsFocused] = useState(false);
  const [show_password, setShowPassword] = useState(secureTextEntry);

  return (
    <View className="mb-5 mx-6">
      {label && <Text className="text-gray-700 mb-2">{label}</Text>}
      <View
        className={`flex-row items-center border rounded-xl px-4 ${
          is_focused ? "border-black" : "border-gray-300"
        }`}
      >
        <TextInput
          style={{ flex: 1, paddingVertical: 12, fontSize: 16 }}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={show_password}
          autoCapitalize="none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!show_password)}>
            <AntDesign
              name={show_password ? "eyeo" : "eye"}
              size={20}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
