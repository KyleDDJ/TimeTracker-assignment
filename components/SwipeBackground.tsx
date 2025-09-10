import { COLORS } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

type SwipeBackgroundProps = {
  showCheck?: boolean;
};

const SwipeBackground: React.FC<SwipeBackgroundProps> = ({
  showCheck = true,
}) => {
  if (!showCheck) return null;

  return (
    <View
      className="absolute inset-0 flex-row items-center justify-end top-1 bottom-4 left-2 right-2 rounded-xl"
      style={{ backgroundColor: COLORS.darkgreen }}
    >
      <Ionicons
        name="checkmark-done-sharp"
        size={45}
        color={COLORS.white}
        style={{ marginRight: 16 }}
      />
    </View>
  );
};

export default SwipeBackground;
