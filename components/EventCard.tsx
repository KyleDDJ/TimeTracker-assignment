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

  const isBreak = item.title?.toLowerCase().includes("break");

  const formatDuration = () => {
    return isBreak
      ? `${durationMinutes}m`
      : `${hours > 0 ? `${hours}h ` : ""}${minutes}m`;
  };

  const hourHeight = 60;
  const blockHeight = (durationMinutes / 60) * hourHeight;

  const getBackgroundColor = (title: string) => {
    if (isBreak) return "lightgrey";
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

  const getBorderStyle = (): ViewStyle => {
    return isBreak
      ? {
          borderWidth: 2,
          borderColor: COLORS.gray400,
          borderRadius: 8,
          borderStyle: "dashed",
        }
      : {
          borderWidth: 1,
          borderColor: COLORS.gray500,
          borderRadius: 8,
          borderStyle: "solid",
        };
  };

  const textColor = isBreak ? COLORS.black : COLORS.white;

  return (
    <View
      style={{
        ...style,
        backgroundColor: getBackgroundColor(item.title),
        padding: 6,
        height: blockHeight,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        ...getBorderStyle(),
      }}
    >
      <Text style={{ color: textColor, fontWeight: "bold", fontSize: 12 }}>
        {item.title}
      </Text>
      {!isBreak && (
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
import { colors as COLORS } from "@/constants/colors";
import moment from "moment";
import React from "react";
import { Text, View, ViewStyle } from "react-native";
