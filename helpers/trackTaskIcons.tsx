import { Task } from "@/entities/task.entities";
import {
  Entypo,
  FontAwesome6,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";

import { COLORS } from "@/constants/Colors";

export const getLeftIcon = (task: Task) => {
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
      return <Entypo name="dot-single" size={22} color={COLORS.gray400} />;
  }
};

export const getRightIcon = (task: Task, isActive: boolean) => {
  return isActive ? (
    <Ionicons name="play-circle-sharp" size={35} color={COLORS.black} />
  ) : (
    <Ionicons name="play-circle-outline" size={35} color={COLORS.gray400} />
  );
};
