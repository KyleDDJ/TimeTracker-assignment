import { TaskCardProps } from "@/entities/task.entities";
import {
  AntDesign,
  Entypo,
  FontAwesome6,
  MaterialIcons,
  MaterialIcons as MI,
  Octicons,
} from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "@/constants/Colors";

type IconLibrary = NonNullable<TaskCardProps["icon"]>["library"];

const getIconComponent = (library: IconLibrary) => {
  switch (library) {
    case "Entypo":
      return Entypo;
    case "MaterialIcons":
      return MI;
    case "Octicons":
      return Octicons;
    case "FontAwesome6":
      return FontAwesome6;
    case "AntDesign":
      return AntDesign;
    default:
      return Entypo;
  }
};

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  subtitle,
  estimated,
  remaining,
  icon,
  progress,
  isActive,
  isQuickTask,
  onPress,
}) => {
  const IconComp = icon ? getIconComponent(icon.library) : null;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: isActive ? COLORS.green : COLORS.white,
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        borderWidth: isActive ? 0 : 1,
        borderColor: COLORS.gray200,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <Text
          style={{
            backgroundColor: isActive
              ? COLORS.darkgreen
              : progress === "TRACKING NOW"
              ? COLORS.gray700
              : progress === "TO DO"
              ? COLORS.gray200
              : COLORS.gray100,
            color: isActive
              ? COLORS.white
              : progress === "TO DO"
              ? COLORS.gray700
              : progress === "TRACKING NOW"
              ? COLORS.white
              : COLORS.gray500,
            fontSize: 12,
            fontWeight: "600",
            paddingVertical: 2,
            paddingHorizontal: 8,
            borderRadius: 8,
          }}
        >
          {progress}
        </Text>

        <Text
          style={{
            color: isActive ? COLORS.white : COLORS.gray500,
            fontSize: 14,
            fontWeight: "600",
          }}
        >
          {remaining}
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            backgroundColor: isActive ? COLORS.darkgreen : COLORS.gray200,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 12,
          }}
        >
          {isActive && isQuickTask ? (
            <MaterialIcons name="bolt" size={24} color={COLORS.white} />
          ) : (
            IconComp && (
              <IconComp
                name={icon!.name}
                size={icon!.size}
                color={isActive ? COLORS.white : icon!.color}
              />
            )
          )}
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: isActive
                ? COLORS.white
                : progress === "COMPLETED"
                ? COLORS.gray500
                : COLORS.black,
              fontSize: 16,
              fontWeight: "600",
              textDecorationLine:
                !isActive && progress === "COMPLETED" ? "line-through" : "none",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: isActive
                ? COLORS.white
                : progress === "COMPLETED"
                ? COLORS.gray500
                : COLORS.gray400,
              fontSize: 14,
              fontWeight: "500",
              marginTop: 2,
              textDecorationLine:
                !isActive && progress === "COMPLETED" ? "line-through" : "none",
            }}
          >
            {subtitle} • {estimated}
          </Text>
        </View>

        <View>
          {progress === "TRACKING NOW" && (
            <AntDesign
              name="playcircleo"
              size={30}
              color={isActive ? COLORS.white : COLORS.black}
            />
          )}
          {progress === "TO DO" && (
            <AntDesign
              name="playcircleo"
              size={30}
              color={isActive ? COLORS.white : COLORS.gray400}
            />
          )}
          {progress === "COMPLETED" && (
            <AntDesign
              name="check"
              size={30}
              color={isActive ? COLORS.white : COLORS.gray400}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
