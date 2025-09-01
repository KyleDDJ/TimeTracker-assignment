import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

import SprintSummaryCard from "@/components/SprintSummaryCard";
import StatusTabs from "@/components/StatusTabs";
import TaskCard from "@/components/TaskCard";
import { COLORS } from "@/constants/Colors";
import { useTasks } from "@/hooks/useTasks";

const QuickTaskScreen = () => {
  const [activeTab, setActiveTab] = useState("All");
  const { tasks } = useTasks();

  const tabs = ["All", "In Progress", "Completed"];

  const filteredTasks = tasks.filter(task => {
    if (activeTab === "All") return true;
    if (activeTab === "In Progress") return task.progress === "TRACKING NOW";
    if (activeTab === "Completed") return task.progress === "COMPLETED";
    return true;
  });

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
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

        {filteredTasks.map(task => (
          <TaskCard
            key={task.id}
            {...task}
            onPress={
              task.progress === "TRACKING NOW"
                ? () => router.push("/(tabs)/track")
                : task.onPress
            }
          />
        ))}
      </ScrollView>

      <TouchableOpacity
        className="absolute bottom-20 right-6 bg-black w-16 h-16 rounded-full items-center justify-center shadow-lg"
        onPress={() =>
          router.push({
            pathname: "/(tabs)/track",
            params: {
              title: "Quick Task #001",
              sprint: "Ad hoc",
              subtitle: "Unplanned Work",
            },
          })
        }
      >
        <MaterialIcons name="bolt" size={34} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};

export default QuickTaskScreen;
