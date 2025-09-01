import React from "react";

import ProgressBar from "@/components/Progress";
import { COLORS } from "@/constants/Colors";
type ProgressBarTaskProps = {
  progress: number;
};

const ProgressBarTask: React.FC<ProgressBarTaskProps> = ({ progress }) => {
  return (
    <ProgressBar
      progress={progress}
      width={330}
      color={COLORS.black}
      unfilledColor={COLORS.gray300}
      style={{ marginTop: 12 }}
    />
  );
};

export default ProgressBarTask;
