import { COLORS } from "@/constants/Colors";
import { EventItem } from "@/entities/task.entities";
import {
  formatDuration,
  getDurationMinutes,
  getEventBorderStyle,
  getEventColor,
} from "@/helpers/utils";
import React from "react";
import { Text, View, ViewStyle } from "react-native";

interface EventCardProps {
  style?: ViewStyle;
  item: EventItem;
}

const EventCard: React.FC<EventCardProps> = ({ style = {}, item }) => {
  if (!item) return null;

  const startDate = new Date(item.startDate);
  const endDate = new Date(item.endDate);

  const durationMinutes = getDurationMinutes(startDate, endDate);
  const isBreak = item.title?.toLowerCase().includes("break");
  const blockHeight = (durationMinutes / 60) * 60;
  const bgColor = getEventColor(item.title, isBreak);
  const borderStyle = getEventBorderStyle(isBreak);
  const textColor = isBreak ? COLORS.black : COLORS.white;

  return (
    <View
      style={[
        style,
        {
          backgroundColor: bgColor,
          padding: 6,
          height: blockHeight,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        },
        borderStyle as ViewStyle,
      ]}
    >
      <Text style={{ color: textColor, fontWeight: "bold", fontSize: 12 }}>
        {item.title}
      </Text>

      {!isBreak && (
        <Text style={{ color: textColor, fontSize: 10 }}>
          {startDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          -{" "}
          {endDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      )}

      <Text style={{ color: textColor, fontSize: 10 }}>
        {formatDuration(durationMinutes, isBreak)}
      </Text>
    </View>
  );
};

export default EventCard;
