import { GestureResponderEvent } from "react-native";

/**
 * Unified Task type (used across all tabs)
 */
export type Task = {
  id: number;
  title: string;
  subtitle: string;
  estimated: string;
  progress?: "TO DO" | "TRACKING NOW" | "COMPLETED"; // for Tasks tab
  remaining?: string; // for Tasks tab
  icon?: {
    library: "Entypo" | "MaterialIcons" | "Octicons" | "FontAwesome6" | "AntDesign";
    name: string;
    size: number;
    color: string;
  };
  isActive?: boolean; // for Tracking Now
  type?: "mobile" | "analytics" | "auth"; // for Track tab (category)
  percentage?: string; 
};

/**
 * Props for MiniTaskCard
 */
export type MiniTaskCardProps = {
  task: Task;
  isActive?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

/**
 * Props for TaskCard
 */
export type TaskCardProps = Task & {
  onPress?: () => void;
};

/**
 * Event timeline item (Analytics tab)
 */
export type EventItem = {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
};
