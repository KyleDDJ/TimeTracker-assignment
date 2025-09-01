import { TaskCardProps } from "@/entities/task.entities";
import {
  AntDesign,
  Entypo,
  FontAwesome6,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "@/constants/Colors";

const getIconComponent = (library: TaskCardProps["icon"]["library"]) => {
  switch (library) {
    case "Entypo":
      return Entypo;
    case "MaterialIcons":
      return MaterialIcons;
    case "Octicons":
      return Octicons;
    case "FontAwesome6":
      return FontAwesome6;
    default:
      return Entypo;
  }
};

const getTextStyle = (progress: TaskCardProps["progress"]) => {
  if (progress === "COMPLETED") return "text-gray-500 line-through";
  return "text-black";
};

const TaskCard = ({
  title,
  subtitle,
  estimated,
  remaining,
  icon,
  progress,
  isActive,
  onPress,
}: TaskCardProps) => {
  const IconComp = getIconComponent(icon.library);

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded-2xl p-4 mb-3 ${
        isActive ? "bg-[#0B0B2E]" : "bg-white border border-gray-200"
      }`}
    >
      <View className="flex-row justify-between items-center mb-2">
        <Text
          className={`text-xs font-semibold px-3 py-2 rounded-md ${
            progress === "TRACKING NOW"
              ? "bg-gray-700 text-white"
              : progress === "TO DO"
              ? "bg-gray-200 text-gray-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {progress}
        </Text>

        <Text
          className={`text-sm font-semiboldS ${
            progress === "TRACKING NOW" ? "text-white" : "text-gray-500"
          }`}
        >
          {remaining}
        </Text>
      </View>

      <View className="flex-row items-center">
        <View
          className={`w-12 h-12 rounded-lg items-center justify-center mr-3 ${
            isActive ? "bg-white/20" : "bg-gray-200"
          }`}
        >
          <IconComp name={icon.name} size={icon.size} color={icon.color} />
        </View>

        <View className="flex-1">
          <Text
            className={`font-semibold text-base ${
              isActive ? "text-white" : getTextStyle(progress)
            }`}
          >
            {title}
          </Text>
          <Text
            className={`text-l font-bold ${
              isActive ? "text-gray-300" : "text-gray-400"
            }`}
          >
            {subtitle} • {estimated}
          </Text>
        </View>

        <View>
          {progress === "TRACKING NOW" && (
            <AntDesign
              name="pausecircleo"
              size={30}
              color={isActive ? COLORS.white : COLORS.black}
            />
          )}
          {progress === "TO DO" && (
            <AntDesign name="playcircleo" size={30} color={COLORS.gray400} />
          )}
          {progress === "COMPLETED" && (
            <AntDesign name="check" size={30} color={COLORS.gray400} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
