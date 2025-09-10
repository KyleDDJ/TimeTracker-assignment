import { GestureResponderEvent } from "react-native";

export type TaskIcon = {
  library: "Entypo" | "MaterialIcons" | "Octicons" | "FontAwesome6" | "AntDesign";
  name: string; 
  size: number; 
  color: string;
};

export type Task = {
  id: number;
  title: string;
  subtitle: string;
  estimated: string;
  progress: "TO DO" | "TRACKING NOW" | "COMPLETED";
  remaining?: string;
  icon: TaskIcon;
  isActive?: boolean;
  isQuickTask?: boolean;
  type?: "mobile" | "analytics" | "auth";
  percentage?: string;
  elapsed?: number;
};

export type TaskCardProps = Task & {
  onPress?: () => void;
};

export type MiniTaskCardProps = {
  task: Task;
  isActive?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

export type EventItem = {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
};

export type TaskDashboardProps = {
  tasks?: Task[];
};