import { COLORS } from "@/constants/Colors";
import { Task } from "@/entities/task.entities";
import {
  AntDesign,
  Entypo,
  FontAwesome6,
  Ionicons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

type DynamicIconProps = {
  library:
    | "Entypo"
    | "MaterialIcons"
    | "Octicons"
    | "FontAwesome6"
    | "AntDesign"
    | "Ionicons";
  name: string;
  size: number;
  color: string;
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  library,
  name,
  size,
  color,
}) => {
  const iconName: any = name;

  switch (library) {
    case "Entypo":
      return <Entypo name={iconName} size={size} color={color} />;
    case "MaterialIcons":
      return <MaterialIcons name={iconName} size={size} color={color} />;
    case "Octicons":
      return <Octicons name={iconName} size={size} color={color} />;
    case "FontAwesome6":
      return <FontAwesome6 name={iconName} size={size} color={color} />;
    case "AntDesign":
      return <AntDesign name={iconName} size={size} color={color} />;
    case "Ionicons":
      return <Ionicons name={iconName} size={size} color={color} />;
    default:
      return <Entypo name="dot-single" size={size} color={color} />;
  }
};

export const getLeftIcon = (task: Task) => {
  if (task.icon) {
    return (
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          backgroundColor: COLORS.gray200,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DynamicIcon
          library={task.icon.library}
          name={task.icon.name}
          size={task.icon.size}
          color={task.icon.color}
        />
      </View>
    );
  }

  switch (task.type) {
    case "mobile":
      return (
        <MaterialIcons name="phone-iphone" size={22} color={COLORS.white} />
      );
    case "analytics":
      return <Entypo name="controller-record" size={24} color={COLORS.black} />;
    case "auth":
      return <FontAwesome6 name="users" size={20} color={COLORS.white} />;
    default:
      return <Entypo name="dot-single" size={22} color={COLORS.gray400} />;
  }
};
