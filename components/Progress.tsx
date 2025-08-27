const ProgressBar = ({
  progress = 0,
  width = 300,
  color = "black",
  unfilledColor = "#e6e7e9ff",
  borderColor = "#e6e7e9ff",
  borderWidth = 1,
  style = {},
}) => {
  return (
    <View
      style={[
        { backgroundColor: "#f3f3f3", borderRadius: 16, padding: 8 },
        style,
      ]}
    >
      <Progress.Bar
        progress={progress}
        width={width}
        color={color}
        unfilledColor={unfilledColor}
        borderColor={borderColor}
        borderWidth={borderWidth}
      />
    </View>
  );
};

export default ProgressBar;
import React from "react";
import { View } from "react-native";
import * as Progress from "react-native-progress";
