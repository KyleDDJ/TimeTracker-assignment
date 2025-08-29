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
  title: string;
  progress: "TO DO" | "TRACKING NOW" | "COMPLETED";
  subtitle: string;
  estimated: string;
  remaining: string;
  icon: ReactNode;
  onPress?: () => void;
  isActive?: boolean;
};
