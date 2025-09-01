import ProgressBar from "@/components/Progress";
import React from "react";

import { COLORS } from "@/constants/Colors";
type ProgressBarSprintProps = {
  progress: number;
};

const ProgressBarSprint: React.FC<ProgressBarSprintProps> = ({ progress }) => {
  return (
    <ProgressBar
      progress={progress}
      width={335}
      color={COLORS.black}
      unfilledColor={COLORS.gray300}
      style={{ marginTop: 8 }}
    />
  );
};

export default ProgressBarSprint;
