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
  color = "black",
  unfilledColor = "#e6e7e9ff",
  style = {},
}) => {
  return (
    <View
      style={[
        { borderRadius: 16, padding: 8, backgroundColor: "#f3f3f3" },
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
import React from "react";
import { View, ViewStyle } from "react-native";
import * as Progress from "react-native-progress";
