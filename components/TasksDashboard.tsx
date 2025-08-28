type TaskCardProps = {
  title: string;
  progress: "TO DO" | "TRACKING NOW" | "COMPLETED";
  subtitle: string;
  estimated: string;
  remaining: string;
  icon: React.ReactNode;
  onPress?: () => void;
  isActive?: boolean;
};

const STATUS_CONFIG = {
  "TRACKING NOW": {
    icon: (isActive: boolean) => (
      <AntDesign
        name="pausecircle"
        size={30}
        color={isActive ? "white" : "gray"}
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
          color={isActive ? "white" : "gray"}
        />
      </View>
    ),
    badgeClass: "bg-gray-200 text-black",
  },
  COMPLETED: {
    icon: (isActive: boolean) => (
      <AntDesign name="check" size={30} color={isActive ? "white" : "gray"} />
    ),
    badgeClass: "bg-gray-200 text-black",
  },
};

const getTextStyle = (isCompleted: boolean, isActive: boolean) => {
  if (isCompleted) return "text-gray-500 line-through";
  return isActive ? "text-white" : "text-black";
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
      className={`rounded-2xl p-4 mb-4 ${
        isActive ? "bg-black" : "bg-white border border-gray-300"
      }`}
    >
      <View className="flex-row justify-between items-center mb-3">
        <Text
          className={`text-xs font-semibold px-2 py-1 rounded ${
            isActive ? config.badgeClass : "bg-gray-200 text-black"
          }`}
        >
          {progress}
        </Text>
        <Text
          className={`text-sm font-bold font-mono ${
            isActive ? "text-white" : "text-gray-500"
          }`}
        >
          {remaining}
        </Text>
      </View>

      <View className="flex-row justify-between items-center">
        <View
          className={`p-3 rounded-xl mr-3 ${
            isActive ? "bg-gray-800" : "bg-gray-200"
          }`}
        >
          {icon}
        </View>
        <View className="flex-1">
          <Text
            className={`text-lg font-bold ${getTextStyle(
              isCompleted,
              isActive
            )}`}
          >
            {title}
          </Text>
          <Text
            className={`text-sm font-bold text-gray-500 ${getTextStyle(
              isCompleted,
              isActive
            )}`}
          >
            {subtitle} • {estimated}
          </Text>
        </View>
        <View className="ml-3">{config.icon(isActive)}</View>
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
      icon: <Entypo name="code" size={24} color="white" />,
      isActive: true,
      onPress: () => router.push("/(tabs)/track"),
    },
    {
      progress: "TO DO",
      remaining: "High Priority",
      title: "Mobile UI Testing",
      subtitle: "QA",
      estimated: "2h estimated",
      icon: <MaterialIcons name="phone-iphone" size={24} color="white" />,
    },
    {
      progress: "TO DO",
      remaining: "Low Priority",
      title: "Analytics Dashboard",
      subtitle: "Frontend",
      estimated: "6h estimated",
      icon: <Octicons name="graph" size={24} color="white" />,
    },
    {
      progress: "COMPLETED",
      remaining: "3.5h logged",
      title: "User Authentication",
      subtitle: "Backend",
      estimated: "4h estimated",
      icon: <FontAwesome6 name="users" size={20} color="white" />,
    },
    {
      progress: "COMPLETED",
      remaining: "3.5h logged",
      title: "User Authentication",
      subtitle: "Backend",
      estimated: "4h estimated",
      icon: <FontAwesome6 name="users" size={20} color="white" />,
    },
  ];

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="px-4">
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

import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";

import SprintSummaryCard from "./SprintSummaryCard";
import StatusTabs from "./StatusTabs";
