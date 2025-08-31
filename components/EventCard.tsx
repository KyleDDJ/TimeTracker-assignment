import { COLORS } from "@/constants/Colors";
import moment from "moment";
import React from "react";
import { Text, View, ViewStyle } from "react-native";

export interface EventItem {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
}

interface EventCardProps {
  style?: ViewStyle;
  item: EventItem;
}

const EventCard: React.FC<EventCardProps> = ({ style = {}, item }) => {
  if (!item) return null;

  const durationMinutes = moment(item.endDate).diff(
    moment(item.startDate),
    "minutes"
  );
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;

  const is_break = item.title?.toLowerCase().includes("break");

  const formatDuration = () => {
    return is_break
      ? `${durationMinutes}m`
      : `${hours > 0 ? `${hours}h ` : ""}${minutes}m`;
  };

  const HOUR_PIXEL_HEIGHT = 60;
  const blockHeight = (durationMinutes / 60) * HOUR_PIXEL_HEIGHT;

  const getBackgroundColor = (title: string) => {
    if (is_break) return COLORS.gray300;
    switch (title?.toLowerCase()) {
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

  const getBorderStyle = (isBreak: boolean): ViewStyle => {
    return {
      borderRadius: 8,
      borderWidth: isBreak ? 2 : 1,
      borderColor: isBreak ? COLORS.gray400 : COLORS.gray500,
      borderStyle: isBreak ? "dashed" : "solid",
    };
  };

  const textColor = is_break ? COLORS.black : COLORS.white;

  return (
    <View
      style={{
        ...style,
        backgroundColor: getBackgroundColor(item.title),
        padding: 6,
        height: blockHeight,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        ...getBorderStyle(is_break),
      }}
    >
      <Text style={{ color: textColor, fontWeight: "bold", fontSize: 12 }}>
        {item.title}
      </Text>
      {!is_break && (
        <Text style={{ color: textColor, fontSize: 10 }}>
          {moment(item.startDate).format("h:mm A")} -{" "}
          {moment(item.endDate).format("h:mm A")}
        </Text>
      )}
      <Text style={{ color: textColor, fontSize: 10 }}>{formatDuration()}</Text>
    </View>
  );
};

export default EventCard;
