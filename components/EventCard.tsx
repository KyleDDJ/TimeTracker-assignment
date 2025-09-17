import { COLORS } from "@/constants/Colors";
import { EventItem } from "@/entities/task.entities";
import React from "react";
import { Text, View, ViewStyle } from "react-native";

interface EventCardProps {
  style?: ViewStyle;
  item: EventItem;
}

const EventCard: React.FC<EventCardProps> = ({ style = {}, item }) => {
  const isActive = item.progress === "TRACKING NOW";
  const isCompleted = item.progress === "COMPLETED";

  const bgColor = isActive
    ? COLORS.green
    : isCompleted
    ? COLORS.darkgreen
    : COLORS.jet;

  const elapsedMinutes = (item.elapsed ?? 0) / 60;

  const minuteToPx = 2;
  const cardHeight = Math.max(elapsedMinutes * minuteToPx, 60);

  const adjustedEndDate = new Date(
    item.startDate.getTime() + (item.elapsed ?? 0) * 1000
  );

  return (
    <View
      style={[
        style,
        {
          backgroundColor: bgColor,
          height: cardHeight,
          minHeight: 50,
          paddingVertical: 6,
          paddingHorizontal: 6,
        },
      ]}
      className="justify-start items-start rounded"
    >
      <Text className="text-white font-bold text-xs">{item.title}</Text>

      <Text className="text-white text-[10px]">
        {item.startDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
        {" - "}
        {(isActive ? adjustedEndDate : item.endDate).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </Text>

      {item.elapsed !== undefined && (
        <Text className="text-gray-400 text-[10px]">
          {Math.floor(item.elapsed / 3600)}h{" "}
          {Math.floor((item.elapsed % 3600) / 60)}m {item.elapsed % 60}s
        </Text>
      )}
    </View>
  );
};

export default EventCard;
