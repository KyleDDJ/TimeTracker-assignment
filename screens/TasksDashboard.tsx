import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";

import SprintSummaryCard from "@/components/SprintSummaryCard";
import StatusTabs from "@/components/StatusTabs";
import { COLORS } from "@/constants/Colors";
import { TaskCardProps } from "@/entities/task.entities";

const STATUS_CONFIG = {
  "TRACKING NOW": {
    icon: (isActive: boolean) => (
      <AntDesign
        name="pausecircle"
        size={30}
        color={isActive ? COLORS.white : COLORS.gray}
      />
    ),
    badgeClass: "bg-gray-700 text-white",
  },
  "TO DO": {
    icon: (isActive: boolean) => (
      <View
        className={`p-2 rounded-full ml-3 ${
          isActive ? "bg-black" : "bg-white"
        }`}
      >
        <Ionicons
          name="play-circle-sharp"
          size={35}
          color={isActive ? COLORS.white : COLORS.gray}
        />
      </View>
    ),
    badgeClass: "bg-gray-200 text-black",
  },
  COMPLETED: {
    icon: (isActive: boolean) => (
      <AntDesign
        name="check"
        size={30}
        color={isActive ? COLORS.white : COLORS.gray}
      />
    ),
    badgeClass: "bg-gray-200 text-black",
  },
};

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  progress,
  subtitle,
  estimated,
  remaining,
  icon,
  onPress,
  isActive = false,
}) => {
  const isCompleted = progress === "COMPLETED";
  const config = STATUS_CONFIG[progress];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        backgroundColor: isActive ? COLORS.black : COLORS.white,
        borderWidth: isActive ? 0 : 1,
        borderColor: COLORS.gray300,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "600",
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 8,
            backgroundColor: isActive ? COLORS.gray400 : COLORS.white,
            color: isActive ? COLORS.white : COLORS.black,
          }}
        >
          {progress}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            color: isActive ? COLORS.white : COLORS.gray800,
          }}
        >
          {remaining}
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            padding: 12,
            borderRadius: 12,
            backgroundColor: isActive ? COLORS.gray800 : COLORS.gray300,
            marginRight: 12,
          }}
        >
          {icon}
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: isCompleted
                ? COLORS.gray500
                : isActive
                ? COLORS.white
                : COLORS.black,
              textDecorationLine: isCompleted ? "line-through" : "none",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: COLORS.gray400,
              textDecorationLine: isCompleted ? "line-through" : "none",
            }}
          >
            {subtitle} • {estimated}
          </Text>
        </View>
        <View style={{ marginLeft: 12 }}>{config.icon(isActive)}</View>
      </View>
    </TouchableOpacity>
  );
};

const FilledState = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "In Progress", "Completed"];

  const tasks: TaskCardProps[] = [
    {
      progress: "TRACKING NOW",
      remaining: "02:34:15",
      title: "API Integration Setup",
      subtitle: "Frontend Development",
      estimated: "6h estimated",
      icon: <Entypo name="code" size={24} color={COLORS.white} />,
      isActive: true,
      onPress: () => router.push("/(tabs)/track"),
    },
    {
      progress: "TO DO",
      remaining: "High Priority",
      title: "Mobile UI Testing",
      subtitle: "QA",
      estimated: "2h estimated",
      icon: (
        <MaterialIcons name="phone-iphone" size={24} color={COLORS.white} />
      ),
    },
    {
      progress: "TO DO",
      remaining: "Low Priority",
      title: "Analytics Dashboard",
      subtitle: "Frontend",
      estimated: "6h estimated",
      icon: <Octicons name="graph" size={24} color={COLORS.white} />,
    },
    {
      progress: "COMPLETED",
      remaining: "3.5h logged",
      title: "User Authentication",
      subtitle: "Backend",
      estimated: "4h estimated",
      icon: <FontAwesome6 name="users" size={20} color={COLORS.white} />,
    },
    {
      progress: "COMPLETED",
      remaining: "3.5h logged",
      title: "User Authentication",
      subtitle: "Backend",
      estimated: "4h estimated",
      icon: <FontAwesome6 name="users" size={20} color={COLORS.white} />,
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 100 }}
      className="px-4 mt-5"
    >
      <View className="bg-gray-100 items-center justify-center rounded-2xl mb-6">
        <SprintSummaryCard
          sprintName="Sprint 2025-01"
          daysLeft="8 days left"
          tasksAssigned={12}
          tasksCompleted={5}
          hoursLogged="42"
        />
      </View>

      <StatusTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs.map(t => ({ name: t }))}
      />

      {tasks.map((task, i) => (
        <TaskCard key={i} {...task} />
      ))}
    </ScrollView>
  );
};

export default FilledState;
