import { TrackTask } from "@/constants/TrackTask";
import {
  Entypo,
  FontAwesome6,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";

import { COLORS } from "@/constants/Colors";

export const getLeftIcon = (task: TrackTask, percentage?: string) => {
  switch (task.type) {
    case "mobile":
      return (
        <MaterialIcons name="phone-iphone" size={22} color={COLORS.white} />
      );
    case "analytics":
      return <Entypo name="controller-record" size={24} color={COLORS.black} />;
    case "auth":
      return <FontAwesome6 name="users" size={20} color={COLORS.white} />;
    default:
      return null;
  }
};

export const getRightIcon = (task: TrackTask, isActive: boolean) => {
  return isActive ? (
    <Ionicons name="play-circle-sharp" size={35} color={COLORS.black} />
  ) : (
    <Ionicons name="play-circle-outline" size={35} color={COLORS.gray400} />
  );
};
