import { COLORS } from "@/constants/Colors";
import moment from "moment";

export const formatElapsed = (seconds?: number) => {
  if (!seconds) return "0h 0m 0s";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h}h ${m}m ${s}s`;
};

export const parseEstimated = (estimated?: string) => {
  if (!estimated) return 0;
  const match = estimated.match(/(\d+(\.\d+)?)\s*h/);
  return match ? Number(match[1]) * 3600 : 0;
};

export const getDurationMinutes = (startDate: Date, endDate: Date) =>
  moment(endDate).diff(moment(startDate), "minutes");

export const formatDuration = (seconds: number, isBreak: boolean = false) => {
  if (isBreak) return `${seconds}m`; 
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h}h ${m}m ${s}s`;
};

export const getEventColor = (title: string, isBreak: boolean) => {
  if (isBreak) return COLORS.gray300;
  switch (title.toLowerCase()) {
    case "api integration":
      return COLORS.black;
    case "database migration":
      return COLORS.gray500;
    case "mobile testing":
      return COLORS.gray400;
    default:
      return COLORS.gray600;
  }
};

export const getEventBorderStyle = (isBreak: boolean) => ({
  borderRadius: 8,
  borderWidth: isBreak ? 2 : 1,
  borderColor: isBreak ? COLORS.gray400 : COLORS.gray500,
  borderStyle: isBreak ? "dashed" : "solid",
});
