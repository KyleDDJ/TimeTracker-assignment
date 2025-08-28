interface TrackingHeaderProps {
  date: string;
  totalTracked: string;
  tasksWorked: string | number;
  efficiency: string | number;
  onPrevDate?: () => void;
  onNextDate?: () => void;
}

const TrackingHeader: React.FC<TrackingHeaderProps> = ({
  date,
  totalTracked,
  tasksWorked,
  efficiency,
  onPrevDate,
  onNextDate,
}) => {
  return (
    <View className="px-1">
      <View className="mb-1 flex-row items-center justify-between p-4">
        <Text className="font-bold text-xl">Today's Tracking</Text>
        <View className="flex-row items-center">
          <TouchableOpacity onPress={onPrevDate}>
            <EvilIcons name="chevron-left" size={27} color="black" />
          </TouchableOpacity>
          <Text className="mx-2 pt-2">{date}</Text>
          <TouchableOpacity onPress={onNextDate}>
            <EvilIcons name="chevron-right" size={27} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="bg-gray-50 rounded-2xl px-5 py-5 items-center justify-center">
        <View className="flex-row justify-between p-5 w-full mb-2">
          <Text className="font-bold text-3xl">{totalTracked}</Text>
          <Text className="font-bold text-3xl">{tasksWorked}</Text>
          <Text className="font-bold text-3xl">{efficiency}</Text>
        </View>
        <View className="flex-row justify-between w-full">
          <Text className="text-gray-600">Total Tracked</Text>
          <Text className="text-gray-600">Task Worked</Text>
          <Text className="text-gray-600">Efficiency</Text>
        </View>
      </View>
    </View>
  );
};

export default TrackingHeader;
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
