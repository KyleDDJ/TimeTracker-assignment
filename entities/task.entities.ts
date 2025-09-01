import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";

export type MiniTaskCardProps = {
  title?: string;
  subtitle?: string;
  estimated?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  showIconBackground?: boolean;
  rightEstimate?: string;
  percentage?: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export type TaskCardProps = {
  id: number;
  title: string;
  progress: "TO DO" | "TRACKING NOW" | "COMPLETED";
  subtitle: string;
  estimated: string;
  remaining: string;
  icon: {
    library: "Entypo" | "MaterialIcons" | "Octicons" | "FontAwesome6" | "AntDesign";
    name: string;
    size: number;
    color: string;
  };
  onPress?: () => void;
  isActive?: boolean;
};

export type EventItem = {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
};
