import ProgressBar from "@/components/Progress";
import { COLORS } from "@/constants/Colors";
import React from "react";

type ProgressBarTaskProps = {
  progress: number;
};

const ProgressBarTask: React.FC<ProgressBarTaskProps> = ({ progress }) => {
  return (
    <ProgressBar
      progress={progress}
      width={330} // task bars are smaller
      color={COLORS.black}
      unfilledColor={COLORS.gray300}
      style={{ marginTop: 12 }}
    />
  );
};

export default ProgressBarTask;
