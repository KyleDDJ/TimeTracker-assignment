import { COLORS } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

/**
 * DOCU: CustomInput Component
 * Styled text input supporting labels, secure text entry, and error display.
 *
 * @param label - Input label
 * @param placeholder - Placeholder text
 * @param value - Input value
 * @param on_change_text - Callback on text change
 * @param secure_text_entry - Show/hide text
 * @param keyboard_type - Keyboard type
 * @param error - Error message to display
 *
 */
export interface CustomInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onBlur?: () => void;
  on_change_text: (text: string) => void;
  secure_text_entry?: boolean;
  keyboard_type?: "default" | "email-address" | "numeric";
  error?: string;
  accessibility_label?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder = "Enter text",
  value,
  on_change_text,
  secure_text_entry = false,
  keyboard_type = "default",
  error,
  accessibility_label,
}) => {
  const [is_focused, set_is_focused] = useState(false);
  const [show_password, set_show_password] = useState(secure_text_entry);

  return (
    <View className="mb-4 mx-2">
      {label && <Text className="text-gray-700 mb-2">{label}</Text>}
      <View
        className={`flex-row items-center border rounded-xl px-4 ${
          error
            ? "border-red-500"
            : is_focused
            ? "border-black"
            : "border-gray-300"
        }`}
      >
        <TextInput
          style={{ flex: 1, paddingVertical: 12, fontSize: 16 }}
          placeholder={placeholder}
          value={value}
          onChangeText={on_change_text}
          keyboardType={keyboard_type}
          secureTextEntry={show_password}
          autoCapitalize="none"
          onFocus={() => set_is_focused(true)}
          onBlur={() => set_is_focused(false)}
          accessible
          accessibilityLabel={accessibility_label || label}
        />
        {secure_text_entry && (
          <TouchableOpacity
            onPress={() => set_show_password(!show_password)}
            accessible
            accessibilityLabel={
              show_password ? "Hide password" : "Show password"
            }
          >
            <AntDesign
              name={show_password ? "eyeo" : "eye"}
              size={20}
              color={COLORS.green}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text className="text-red-500 mt-1 text-sm">{error}</Text>}
    </View>
  );
};

export default React.memo(CustomInput);
