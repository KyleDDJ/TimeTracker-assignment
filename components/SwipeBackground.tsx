import { COLORS } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

const SwipeBackground = () => {
  return (
    <View
      className="absolute inset-0 flex-row items-center justify-end top-1 bottom-4 left-2 right-2 rounded-xl"
      style={{ backgroundColor: COLORS.darkgreen }}
    >
      <MaterialIcons name="task" size={40} color={COLORS.white} />
    </View>
  );
};

export default SwipeBackground;
