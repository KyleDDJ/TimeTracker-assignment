// constants/trackTasks.ts
import {
  FontAwesome6,
  Ionicons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { ReactNode } from "react";
import { COLORS } from "./colors";

export type TrackTask = {
  title: string;
  subtitle: string;
  estimated: string;
  leftIcon: ReactNode;
  rightIcon: ReactNode;
};

export const TRACK_TASKS: TrackTask[] = [
  {
    title: "Mobile UI Testing",
    subtitle: "QA",
    estimated: "4h estimated",
    leftIcon: (
      <MaterialIcons name="phone-iphone" size={22} color={COLORS.white} />
    ),
    rightIcon: (
      <Ionicons name="play-circle-sharp" size={35} color={COLORS.black} />
    ),
  },
  {
    title: "Analytics Dashboard",
    subtitle: "Frontend",
    estimated: "2h estimated",
    leftIcon: <Octicons name="graph" size={22} color={COLORS.white} />,
    rightIcon: (
      <Ionicons name="play-circle-outline" size={35} color={COLORS.gray} />
    ),
  },
  {
    title: "User Authentication",
    subtitle: "Backend",
    estimated: "4h estimated",
    leftIcon: <FontAwesome6 name="users" size={20} color={COLORS.white} />,
    rightIcon: (
      <Ionicons name="play-circle-outline" size={35} color={COLORS.gray} />
    ),
  },
];
