import React from "react";
import { View, ViewStyle } from "react-native";
import * as Progress from "react-native-progress";

import { COLORS } from "@/constants/Colors";
interface ProgressBarProps {
  progress?: number;
  width?: number;
  color?: string;
  unfilledColor?: string;
  style?: ViewStyle;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  width = 300,
  color = COLORS.black,
  unfilledColor = COLORS.white,
  style = {},
}) => {
  return (
    <View
      style={[
        { borderRadius: 16, padding: 8, backgroundColor: COLORS.gray100 },
        style,
      ]}
    >
      <Progress.Bar
        progress={progress}
        width={width}
        color={color}
        unfilledColor={unfilledColor}
        borderWidth={0}
      />
    </View>
  );
};

export default ProgressBar;
