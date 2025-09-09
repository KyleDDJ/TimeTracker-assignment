import { COLORS } from "@/constants/Colors";
import { Task } from "@/entities/task.entities";
import { DynamicIcon } from "@/helpers/trackTaskIcons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export type MiniTaskCardProps = {
  task: Task;
  isActive?: boolean;
  showIconBackground?: boolean;
  onPress?: () => void;
};

const MiniTaskCard: React.FC<MiniTaskCardProps> = ({
  task,
  isActive = false,
  showIconBackground = true,
  onPress,
}) => {
  const renderLeftIcon = () => {
    if (task.icon) {
      return (
        <DynamicIcon
          library={task.icon.library}
          name={task.icon.name}
          size={task.icon.size}
          color={task.icon.color}
        />
      );
    }

    switch (task.type) {
      case "mobile":
        return (
          <DynamicIcon
            library="MaterialIcons"
            name="phone-iphone"
            size={22}
            color={COLORS.white}
          />
        );
      case "analytics":
        return (
          <DynamicIcon
            library="Entypo"
            name="controller-record"
            size={24}
            color={COLORS.black}
          />
        );
      case "auth":
        return (
          <DynamicIcon
            library="FontAwesome6"
            name="users"
            size={20}
            color={COLORS.white}
          />
        );
      default:
        return (
          <DynamicIcon
            library="Entypo"
            name="dot-single"
            size={22}
            color={COLORS.gray400}
          />
        );
    }
  };

  return (
    <TouchableOpacity
      className="flex-row items-center justify-between bg-white rounded-2xl p-4 mb-4 border border-gray-300"
      onPress={onPress}
    >
      <View
        className={`mr-3 p-3 rounded-xl ${
          showIconBackground ? "bg-gray-300" : "bg-white"
        }`}
      >
        {renderLeftIcon()}
      </View>

      <View className="flex-1">
        <View className="flex-row justify-between items-center mb-1">
          <Text className="text-base font-semibold text-black">
            {task.title}
          </Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-sm font-semibold text-gray-400">
            {task.subtitle} {task.estimated ? `• ${task.estimated}` : ""}
          </Text>
        </View>
      </View>

      <View className="ml-3">
        {isActive ? (
          <DynamicIcon
            library="Ionicons"
            name="play-circle"
            size={35}
            color={COLORS.gray400}
          />
        ) : (
          <DynamicIcon
            library="Ionicons"
            name="play-circle-outline"
            size={35}
            color={COLORS.gray400}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MiniTaskCard;
