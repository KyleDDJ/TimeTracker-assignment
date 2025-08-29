import ProgressBar from "@/components/Progress";
import React from "react";

type ProgressBarSprintProps = {
  progress: number;
};

const ProgressBarSprint: React.FC<ProgressBarSprintProps> = ({ progress }) => {
  return (
    <ProgressBar
      progress={progress}
      width={335}
      color="black"
      unfilledColor="#ddd"
      style={{ marginTop: 8 }}
    />
  );
};

export default ProgressBarSprint;
