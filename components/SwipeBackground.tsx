import { COLORS } from "@/constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

type SwipeBackgroundProps = {
  showCheck?: boolean;
  showDelete?: boolean;
  showUndo?: boolean;
  direction?: "left" | "right";
};

const SwipeBackground: React.FC<SwipeBackgroundProps> = ({
  showCheck = false,
  showDelete = false,
  showUndo = false,
  direction = "right",
}) => {
  if (!showCheck && !showDelete && !showUndo) return null;

  const backgroundColor = showDelete
    ? COLORS.jet
    : showUndo
    ? COLORS.orange
    : COLORS.darkgreen;

  const justifyContent = direction === "left" ? "justify-start" : "justify-end";
  const marginStyle =
    direction === "left" ? { marginLeft: 16 } : { marginRight: 16 };

  return (
    <View
      className={`absolute inset-0 flex-row items-center ${justifyContent} top-1 bottom-4 left-2 right-2 rounded-xl`}
      style={{ backgroundColor }}
    >
      {showCheck && (
        <Ionicons
          name="checkmark-done-sharp"
          size={45}
          color={COLORS.white}
          style={marginStyle}
        />
      )}
      {showDelete && (
        <MaterialIcons
          name="delete"
          size={45}
          color={COLORS.white}
          style={marginStyle}
        />
      )}
      {showUndo && (
        <Ionicons
          name="arrow-undo"
          size={45}
          color={COLORS.white}
          style={marginStyle}
        />
      )}
    </View>
  );
};

export default SwipeBackground;
