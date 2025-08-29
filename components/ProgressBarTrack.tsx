import ProgressBar from "@/components/Progress";
import React from "react";

type ProgressBarTaskProps = {
  progress: number;
};

const ProgressBarTask: React.FC<ProgressBarTaskProps> = ({ progress }) => {
  return (
    <ProgressBar
      progress={progress}
      width={330} // task bars are smaller
      color="black"
      unfilledColor="lightgrey"
      style={{ marginTop: 12 }}
    />
  );
};

export default ProgressBarTask;
